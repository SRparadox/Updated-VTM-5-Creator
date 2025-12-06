import { notifications } from "@mantine/notifications"
import fontkit from "@pdf-lib/fontkit"
import { PDFBool, PDFDocument, PDFFont, PDFForm, PDFName } from "pdf-lib"
import { Character } from "../data/Character"
import { clans } from "../data/Clans"
import { PredatorTypes } from "../data/PredatorType"
import { Roles } from "../data/Role"
import { SkillsKey, skillsKeySchema } from "../data/Skills"
import checkPng from "../resources/CheckSolid.png"
// import base64Pdf_renegade from '../resources/v5_charactersheet_fillable_v3.base64';
import { attributesKeySchema } from "../data/Attributes"
import { Power, Ritual, powerIsRitual } from "../data/Disciplines"
import { AlchemyFormula } from "../data/Alchemy"
import base64Pdf_nerdbert from "../resources/VtM5e_ENG_CharacterSheet_2pMINI_noTxtRichFields.base64?raw"
import base64Pdf_werewolf from "../resources/WerewolfSheet.base64?raw"
import { upcase } from "./utils"
import { DisciplineName } from "~/data/NameSchemas"
import { Character as UnifiedCharacter, isVampireCharacter, isWerewolfCharacter } from "../data/UnifiedCharacter"
import { tribes } from "../data/Tribes"
import { Gift } from "../data/Gifts"

type BloodPotencyEffect = {
    surge: number
    mend: string
    discBonus: string
    discRouse: string
    bane: number
    penalty: string
}

let customFont: PDFFont

const initPDFDocument = async (bytes: ArrayBufferLike): Promise<PDFDocument> => {
    const pdfDoc = await PDFDocument.load(bytes as ArrayBuffer)

    pdfDoc.registerFontkit(fontkit)
    const fontBytes = await fetch("fonts/Roboto-Regular.ttf").then((res) => res.arrayBuffer())
    customFont = await pdfDoc.embedFont(fontBytes) // enables writing characters like "старый"

    return pdfDoc
}

export const testTemplate = async (basePdf: string) => {
    let form
    try {
        const bytes = base64ToArrayBuffer(basePdf)
        const pdfDoc = await initPDFDocument(bytes)

        form = pdfDoc.getForm()
    } catch (err) {
        return { success: false, error: new Error("Can't get form from pdf - is it a fillable pdf?") }
    }
    try {
        form.getTextField("Name").setText("")
        form.getTextField("Concept").setText("")
        form.getTextField("Predator").setText("")
        form.getTextField("Ambition").setText("")
    } catch (err) {
        return {
            success: false,
            error: new Error("PDF doesn't contain required fields - is it v5_charactersheet_fillable_v3.pdf from renegadegamestudios?"),
        }
    }

    return { success: true, error: null }
}

export const testWerewolfTemplate = async (basePdf: string) => {
    let form
    try {
        const bytes = base64ToArrayBuffer(basePdf)
        const pdfDoc = await initPDFDocument(bytes)

        form = pdfDoc.getForm()
    } catch (err) {
        return { success: false, error: new Error("Can't get form from pdf - is it a fillable pdf?") }
    }
    try {
        form.getTextField("Name").setText("")
        // Try werewolf fields first, fallback to vampire fields for compatibility
        try {
            form.getTextField("Auspice").setText("")
            form.getTextField("Player").setText("")
            form.getTextField("Tribe").setText("")
            form.getTextField("Chronicle").setText("")
            form.getTextField("Patron").setText("")
        } catch (e) {
            // Werewolf fields don't exist in this PDF
        }
    } catch (err) {
        return {
            success: false,
            error: new Error("PDF doesn't contain required fields - is it the correct Werewolf character sheet?"),
        }
    }

    return { success: true, error: null }
}

const downloadPdf = (fileName: string, bytes: Uint8Array) => {
    const blob = new Blob([bytes.slice()], { type: "application/pdf" })
    const link = document.createElement("a")

    link.href = window.URL.createObjectURL(blob)
    link.download = fileName
    link.click()
}

const potencyEffects: Record<number, BloodPotencyEffect> = {
    0: { surge: 1, mend: "1 superficial", discBonus: "-", discRouse: "-", bane: 0, penalty: "-" },
    1: { surge: 2, mend: "1 superficial", discBonus: "-", discRouse: "Lvl 1", bane: 2, penalty: "-" },
    2: {
        surge: 2,
        mend: "2 superficial",
        discBonus: "Add 1 die",
        discRouse: "Lvl 1",
        bane: 2,
        penalty: "Animal and bagged blood slake half Hunger",
    },
    3: {
        surge: 3,
        mend: "2 superficial",
        discBonus: "Add 1 die",
        discRouse: "Lvl 2 and below",
        bane: 3,
        penalty: "Animal and bagged blood slake no Hunger",
    },
    4: {
        surge: 3,
        mend: "3 superficial",
        discBonus: "Add 2 dice",
        discRouse: "Lvl 2 and below",
        bane: 3,
        penalty: "Animal and bagged blood slake no Hunger,\nSlake 1 less Hunger per human",
    },
    5: {
        surge: 4,
        mend: "3 superficial",
        discBonus: "Add 2 dice",
        discRouse: "Lvl 3 and below",
        bane: 4,
        penalty:
            "Animal and bagged blood slake no Hunger,\nSlake 1 less Hunger per human,\nMust drain and kill a human to reduce Hunger below 2",
    },
}

const createPdf_nerdbert_vampire = async (character: Character): Promise<Uint8Array> => {
    const bytes = base64ToArrayBuffer(base64Pdf_nerdbert)

    const pdfDoc = await initPDFDocument(bytes)
    const form = pdfDoc.getForm()

    // Attributes
    const attributes = character.attributes
    ;["strength", "dexterity", "stamina", "charisma", "manipulation", "composure", "intelligence", "wits", "resolve"]
        .map((a) => attributesKeySchema.parse(a))
        .forEach((attr) => {
            const lvl = attributes[attr]
            for (let i = 1; i <= lvl; i++) {
                form.getCheckBox(`${upcase(attr).slice(0, 3)}-${i}`).check()
            }
        })

    // Skills
    const setSpecialty = (skillName: SkillsKey, textFieldKey: string) => {
        const allSpecialties = [...character.skillSpecialties, ...character.predatorType.pickedSpecialties]
        const specialties = allSpecialties
            .filter((s) => s.skill === skillName)
            .filter((s) => s.name !== "")
            .map((s) => s.name)

        if (specialties) form.getTextField(textFieldKey).setText(specialties.join(", "))
    }

    const skills = character.skills
    ;["athletics", "brawl", "craft", "drive", "melee", "larceny", "survival"]
        .map((s) => skillsKeySchema.parse(s))
        .forEach((skill) => {
            const lvl = skills[skill]
            for (let i = 1; i <= lvl; i++) {
                form.getCheckBox(`${upcase(skill).slice(0, 3)}-${i}`).check()
            }
            setSpecialty(skill, `spec${upcase(skill).slice(0, 3)}`)
        })

    const aniKenLvl = skills["animal ken"]
    for (let i = 1; i <= aniKenLvl; i++) {
        form.getCheckBox(`AniKen-${i}`).check()
    }
    setSpecialty("animal ken", "specAniKen")

    // PDF-issue: Lead-1, but specLea  (4 letters vs 3 letters)
    const leadLvl = skills["leadership"]
    for (let i = 1; i <= leadLvl; i++) {
        form.getCheckBox(`Lead-${i}`).check()
    }
    setSpecialty("leadership", "specLea")

    const stealthLvl = skills["stealth"]
    for (let i = 1; i <= stealthLvl; i++) {
        form.getCheckBox(`Ste-${i}`).check()
    }
    setSpecialty("stealth", "specStea")

    // PDF-issue: "Fri-1" instead of "Fir-1"
    const fireLvl = skills["firearms"]
    for (let i = 1; i <= fireLvl; i++) {
        form.getCheckBox(`Fri-${i}`).check()
    }
    setSpecialty("firearms", "specFir")

    // PDF-issue: Stre-1-1, but specStree  (4 letters vs 5 letters)
    const streeLvl = skills["streetwise"]
    for (let i = 1; i <= streeLvl; i++) {
        form.getCheckBox(`Stre-${i}`).check()
    }
    setSpecialty("streetwise", "specStree")
    ;[
        "etiquette",
        "insight",
        "intimidation",
        "performance",
        "persuasion",
        "subterfuge",
        "academics",
        "awareness",
        "finance",
        "investigation",
        "medicine",
        "occult",
        "politics",
        "science",
        "technology",
    ]
        .map((s) => skillsKeySchema.parse(s))
        .forEach((skill) => {
            const lvl = skills[skill]
            for (let i = 1; i <= lvl; i++) {
                form.getCheckBox(`${upcase(skill).slice(0, 4)}-${i}`).check()
            }

            setSpecialty(skill, `spec${upcase(skill).slice(0, 4)}`)
        })

    // Health
    let health = 3 + character.attributes["stamina"]
    if (character.disciplines.find((power) => power.name === "Resilience")) {
        const fortitudeLevel = character.disciplines.filter((power) => power.discipline === "fortitude").length
        health += fortitudeLevel
    }
    for (let i = 1; i <= health; i++) {
        form.getCheckBox(`Health-${i}`).check()
    }

    // Willpower
    const willpower = character.attributes["composure"] + character.attributes["resolve"]
    for (let i = 1; i <= willpower; i++) {
        form.getCheckBox(`WP-${i}`).check()
    }

    // Blood Potency
    let bloodPotency = (() => {
        switch (character.generation) {
            case 16:
            case 15:
            case 14:
                return 0
            case 13:
            case 12:
                return 1
            case 11:
            case 10:
                return 2
            default:
                return 1
        }
    })()
    
    // For Ghouls, use role blood potency change; for vampires, use predator type
    if (character.clan === "Ghoul" && character.role) {
        const roleDefinition = Roles[character.role.name as keyof typeof Roles]
        bloodPotency += roleDefinition?.bloodPotencyChange || 0
    } else {
        bloodPotency += PredatorTypes[character.predatorType.name].bloodPotencyChange
    }
    for (let i = 1; i <= bloodPotency; i++) {
        form.getCheckBox(`BloodPotency-${i}`).check()
    }

    const effects = potencyEffects[bloodPotency]
    form.getTextField("BloodSurge").setText(`${effects.surge}`)
    form.getTextField("Mend").setText(effects.mend)
    form.getTextField("PowBonus").setText(effects.discBonus)
    form.getTextField("ReRouse").setText(effects.discRouse)
    form.getTextField("FeedPen").setText(effects.penalty)
    form.getTextField("BaneSev").setText(`${effects.bane}`)

    //Humanity
    // For Ghouls, use role humanity change; for vampires, use predator type
    const humanityChange = character.clan === "Ghoul" && character.role
        ? (Roles[character.role.name as keyof typeof Roles]?.humanityChange || 0)
        : PredatorTypes[character.predatorType.name].humanityChange
    const humanity = 7 + humanityChange
    const checkImageBytes = await fetch(checkPng).then((res) => res.arrayBuffer())
    const checkImage = await pdfDoc.embedPng(checkImageBytes)
    for (let i = 1; i <= humanity; i++) {
        // Broken by setting "NeedAppearances" to true
        form.getButton(`Humanity-${i}`).setImage(checkImage)
    }

    // Top fields
    form.getTextField("Name").setText(character.name)
    // form.getTextField("Name").updateAppearances(customFont)
    form.getTextField("pcDescription").setText(character.description)
    
    // For Ghouls, show role name instead of predator type
    const predatorTypeOrRole = character.clan === "Ghoul" && character.role 
        ? character.role.name 
        : character.predatorType.name
    form.getTextField("Predator type").setText(predatorTypeOrRole)
    
    form.getTextField("Ambition").setText(character.ambition)


    form.getTextField("Clan").setText(character.clan)
    const rawBane = character.selectedBane && character.selectedBane.trim() !== "" ? character.selectedBane : clans[character.clan].banes?.[0] || "";
    const baneText = rawBane.replace("BANE_SEVERITY", `${effects.bane} (bane severity)`);
    form.getTextField("ClanBane").setText(baneText)
    
    // Use selected compulsion if available, otherwise fall back to first compulsion from clan
    const compulsionText = character.selectedCompulsion && character.selectedCompulsion.trim() !== "" 
        ? character.selectedCompulsion 
        : clans[character.clan].compulsions?.[0] || "";
    form.getTextField("ClanCompulsion").setText(compulsionText)

    // Fill Sect field with 'sect -- religion'
    form.getTextField("Sect").setText(`${character.sect} -- ${character.religion}`)

    form.getTextField("Sire").setText(character.sire)
    form.getTextField("Desire").setText(character.desire)

    form.getTextField("Title").setText(`${character.generation}`) // Yes, "Title" is the generation field

    // Fill Player and Chronicle fields
    form.getTextField("Player").setText(character.playerName || "")
    form.getTextField("Chronicle").setText(character.chronicleName || "")

    // Add humanity level and character notes to Notes field
    const notesField = form.getTextField("PC_Notes")
    const currentNotes = notesField.getText ? notesField.getText() : ""
    let notesText = `Humanity: ${humanity}`
    
    // Add Elder Powers
    if (character.selectedElderPowers && character.selectedElderPowers.length > 0) {
        notesText += `\n\nELDER POWERS:`
        character.selectedElderPowers.forEach(power => {
            notesText += `\n• ${power.name}: ${power.description}`
            if (power.requirements) {
                notesText += ` (Requires: ${power.requirements})`
            }
        })
    }
    
    // Add Methuselah Powers
    if (character.selectedMethuselahPowers && character.selectedMethuselahPowers.length > 0) {
        notesText += `\n\nMETHUSELAH POWERS:`
        character.selectedMethuselahPowers.forEach(power => {
            notesText += `\n• ${power.name}: ${power.description}`
            if (power.requirements) {
                notesText += ` (Requires: ${power.requirements})`
            }
        })
    }
    
    if (character.notes && character.notes.trim()) {
        notesText += `\n\nADDITIONAL NOTES:\n${character.notes.trim()}`
    }
    if (currentNotes) {
        notesText += `\n${currentNotes}`
    }
    notesField.setText(notesText)

    // Disciplines
    const getDisciplineText = (power: Power | Ritual | AlchemyFormula) => {
        let text = power.name + ": " + power.summary
        if (power.dicePool !== "") {
            text += ` // ${power.dicePool}`
        }
        if (power.rouseChecks > 0) {
            text += ` // ${power.rouseChecks} rouse check${power.rouseChecks > 1 ? "s" : ""}`
        }

        if (powerIsRitual(power)) {
            text += ` // requires: ${power.ingredients}; ${power.requiredTime}`
        }

        return text
    }

    const powersByDiscipline = character.disciplines.reduce(
        (acc, p) => {
            if (!acc[p.discipline]) acc[p.discipline] = []
            acc[p.discipline].push(p)
            return acc
        },
        {} as Record<DisciplineName, Power[]>
    )
    // Track if we need to add extra boxes for rituals/ceremonies
    let extraBoxIndex = Object.values(powersByDiscipline).length + 1;
    for (const [disciplineIndex, powers] of Object.values(powersByDiscipline).entries()) {
        const di = disciplineIndex + 1;
        form.getTextField(`Disc${di}`).setText(upcase(powers[0].discipline));
        for (const [powerIndex, power] of powers.entries()) {
            const pi = powerIndex + 1;
            form.getTextField(`Disc${di}_Ability${pi}`).setText(getDisciplineText(power));
            form.getTextField(`Disc${di}_Ability${pi}`).disableRichFormatting();
            form.getCheckBox(`Disc${di}-${pi}`).check();
        }
    }

    // Add Blood Rituals in a separate box if present
    if (character.rituals && character.rituals.length > 0) {
        const di = extraBoxIndex++;
        form.getTextField(`Disc${di}`).setText("Blood Rituals");
        for (const [ritualIndex, ritual] of character.rituals.entries()) {
            const ri = ritualIndex + 1;
            form.getTextField(`Disc${di}_Ability${ri}`).setText(getDisciplineText(ritual));
            form.getTextField(`Disc${di}_Ability${ri}`).disableRichFormatting();
        }
    }

    // Add Oblivion Ceremonies in a separate box if present
    if (character.ceremonies && character.ceremonies.length > 0) {
        const di = extraBoxIndex++;
        form.getTextField(`Disc${di}`).setText("Oblivion Ceremonies");
        for (const [ceremonyIndex, ceremony] of character.ceremonies.entries()) {
            const ci = ceremonyIndex + 1;
            form.getTextField(`Disc${di}_Ability${ci}`).setText(getDisciplineText(ceremony));
            form.getTextField(`Disc${di}_Ability${ci}`).disableRichFormatting();
        }
    }

    // Add Thin Blood Alchemy in a separate box if present
    if (character.alchemy && character.alchemy.length > 0) {
        const di = extraBoxIndex++;
        form.getTextField(`Disc${di}`).setText("Thin Blood Alchemy");
        for (const [alchemyIndex, formula] of character.alchemy.entries()) {
            const ai = alchemyIndex + 1;
            form.getTextField(`Disc${di}_Ability${ai}`).setText(getDisciplineText(formula));
            form.getTextField(`Disc${di}_Ability${ai}`).disableRichFormatting();
        }
    }

    // Merits & flaws
    const characterMeritsFlaws = [...character.merits, ...character.flaws]
    
    // Handle role-based merits and flaws for Ghouls
    let roleOrPredatorMeritsFlaws: unknown[] = []
    let pickedRoleOrPredatorMeritsFlaws: unknown[] = []
    
    if (character.clan === "Ghoul" && character.role) {
        // For Ghouls, we don't have predefined merits/flaws in roles like we do in predator types
        // Roles only give skill bonuses, so we skip role-based merits/flaws
        roleOrPredatorMeritsFlaws = []
        pickedRoleOrPredatorMeritsFlaws = (character.role.pickedMeritsAndFlaws || []) as unknown[]
    } else {
        // For vampires, use predator type merits and flaws
        roleOrPredatorMeritsFlaws = PredatorTypes[character.predatorType.name].meritsAndFlaws.filter(
            (m) => !characterMeritsFlaws.map((cm) => cm.name).includes(m.name)
        ) as unknown[]
        pickedRoleOrPredatorMeritsFlaws = character.predatorType.pickedMeritsAndFlaws as unknown[]
    }
    
    const meritsAndFlaws = [...roleOrPredatorMeritsFlaws, ...pickedRoleOrPredatorMeritsFlaws, ...characterMeritsFlaws]
    meritsAndFlaws.forEach((item, i) => {
        const { name, level, summary } = item as { name: string; level: number; summary: string }
        const fieldNum = i + 1
        form.getTextField(`Merit${fieldNum}`).setText(name + ": " + summary)
        for (let l = 1; l <= level; l++) {
            form.getCheckBox(`Merit${fieldNum}-${l}`).check()
        }
    })

    // Touchstones & Convictions
    form.getTextField("Convictions").setText(
        character.touchstones.map(({ name, description, conviction }) => `${name}: ${conviction}\n${description}`).join("\n\n")
    )

    // Experience
    // Always start with 0 XP
    const experience = 0
    form.getTextField("tEXP").setText(`${experience} XP`)

    // Fixes bug where text that is too long for field doesn't show until clicked
    // see https://github.com/Hopding/pdf-lib/issues/569#issuecomment-1087328416 and https://stackoverflow.com/questions/73058238/some-pdf-textfield-content-not-visible-until-clicked
    // TODO: This breaks embedding the png in humanity-tracker!
    form.acroForm.dict.set(PDFName.of("NeedAppearances"), PDFBool.True)

    // Fixes embedded font not being applied on form fields
    form.updateFieldAppearances(customFont)

    return await pdfDoc.save({ updateFieldAppearances: true })
}

const createPdf_nerdbert_werewolf = async (character: UnifiedCharacter): Promise<Uint8Array> => {
    const bytes = base64ToArrayBuffer(base64Pdf_werewolf)

    const pdfDoc = await initPDFDocument(bytes)
    const form = pdfDoc.getForm()

    // Debug: Print available fields (remove this after debugging)
    console.log("Available Werewolf PDF Fields:", JSON.stringify(getFields(form), null, 2))

    // Helper function to safely check if a field exists and set it
    const safeSetCheckBox = (fieldName: string) => {
        try {
            const field = form.getCheckBox(fieldName)
            field.check()
            return true
        } catch (e) {
            console.warn(`Checkbox field '${fieldName}' not found in PDF`)
            return false
        }
    }

    const safeSetTextField = (fieldName: string, value: string) => {
        try {
            const field = form.getTextField(fieldName)
            field.setText(value)
            return true
        } catch (e) {
            console.warn(`Text field '${fieldName}' not found in PDF`)
            return false
        }
    }

    // Attributes - with error handling
    const attributes = character.attributes
    ;["strength", "dexterity", "stamina", "charisma", "manipulation", "composure", "intelligence", "wits", "resolve"]
        .map((a) => attributesKeySchema.parse(a))
        .forEach((attr) => {
            const lvl = attributes[attr]
            for (let i = 1; i <= lvl; i++) {
                const fieldName = `${upcase(attr).slice(0, 3)}-${i}`
                safeSetCheckBox(fieldName)
            }
        })

    // Skills
    const setSpecialty = (skillName: SkillsKey, textFieldKey: string) => {
        const specialties = (character.skillSpecialties || [])
            .filter((s) => s.skill === skillName)
            .filter((s) => s.name !== "")
            .map((s) => s.name)

        if (specialties.length > 0) safeSetTextField(textFieldKey, specialties.join(", "))
    }

    const skills = character.skills
    ;["athletics", "brawl", "craft", "drive", "melee", "larceny", "survival"]
        .map((s) => skillsKeySchema.parse(s))
        .forEach((skill) => {
            const lvl = skills[skill]
            for (let i = 1; i <= lvl; i++) {
                const fieldName = `${upcase(skill).slice(0, 3)}-${i}`
                safeSetCheckBox(fieldName)
            }
            setSpecialty(skill, `spec${upcase(skill).slice(0, 3)}`)
        })

    const aniKenLvl = skills["animal ken"]
    for (let i = 1; i <= aniKenLvl; i++) {
        safeSetCheckBox(`AniKen-${i}`)
    }
    setSpecialty("animal ken", "specAniKen")

    // PDF-issue: Lead-1, but specLea  (4 letters vs 3 letters)
    const leadLvl = skills["leadership"]
    for (let i = 1; i <= leadLvl; i++) {
        safeSetCheckBox(`Lead-${i}`)
    }
    setSpecialty("leadership", "specLea")

    const stealthLvl = skills["stealth"]
    for (let i = 1; i <= stealthLvl; i++) {
        safeSetCheckBox(`Ste-${i}`)
    }
    setSpecialty("stealth", "specStea")

    // PDF-issue: "Fri-1" instead of "Fir-1"
    const fireLvl = skills["firearms"]
    for (let i = 1; i <= fireLvl; i++) {
        safeSetCheckBox(`Fri-${i}`)
    }
    setSpecialty("firearms", "specFir")

    // PDF-issue: Stre-1-1, but specStree  (4 letters vs 5 letters)
    const streeLvl = skills["streetwise"]
    for (let i = 1; i <= streeLvl; i++) {
        safeSetCheckBox(`Stre-${i}`)
    }
    setSpecialty("streetwise", "specStree")
    ;[
        "etiquette",
        "insight",
        "intimidation",
        "performance",
        "persuasion",
        "subterfuge",
        "academics",
        "awareness",
        "finance",
        "investigation",
        "medicine",
        "occult",
        "politics",
        "science",
        "technology",
    ]
        .map((s) => skillsKeySchema.parse(s))
        .forEach((skill) => {
            const lvl = skills[skill]
            for (let i = 1; i <= lvl; i++) {
                const fieldName = `${upcase(skill).slice(0, 4)}-${i}`
                safeSetCheckBox(fieldName)
            }

            setSpecialty(skill, `spec${upcase(skill).slice(0, 4)}`)
        })

    // Health - Werewolf health calculation
    const health = 3 + character.attributes["stamina"]
    for (let i = 1; i <= health; i++) {
        safeSetCheckBox(`Health-${i}`)
    }

    // Willpower
    const willpower = character.attributes["composure"] + character.attributes["resolve"]
    for (let i = 1; i <= willpower; i++) {
        safeSetCheckBox(`WP-${i}`)
    }

    // Werewolf-specific stats
    if (isWerewolfCharacter(character)) {
        // Rage
        const rage = character.rage || 1
        for (let i = 1; i <= rage; i++) {
            safeSetCheckBox(`Rage-${i}`)
        }

        // Gnosis
        const gnosis = character.gnosis || 1
        for (let i = 1; i <= gnosis; i++) {
            safeSetCheckBox(`Gnosis-${i}`)
        }

        // Harmony (Werewolf equivalent of Humanity)
        const harmony = character.harmony || 7
        for (let i = 1; i <= harmony; i++) {
            if (!safeSetCheckBox(`Harmony-${i}`)) {
                // Fallback to Humanity fields if Harmony doesn't exist
                safeSetCheckBox(`Humanity-${i}`)
            }
        }
    }

    // Top fields - Werewolf character info
    safeSetTextField("Name", character.name)
    safeSetTextField("pcDescription", character.description)
    
    // New Werewolf fields replacing vampire fields
    if (isWerewolfCharacter(character)) {
        if (!safeSetTextField("Concept", character.concept || "")) {
            // Fallback if Concept field doesn't exist
            safeSetTextField("Predator type", character.concept || "")
        }
        
        if (!safeSetTextField("Chronicle", character.chronicle || "")) {
            // Fallback if Chronicle field doesn't exist  
            safeSetTextField("Ambition", character.chronicle || "")
        }
    }

    // Werewolf-specific fields
    if (isWerewolfCharacter(character)) {
        // Set tribe name - try "Tribe" field first, fallback to "Clan"
        const tribeName = character.tribe
        if (!safeSetTextField("Tribe", tribeName || "")) {
            safeSetTextField("Clan", tribeName || "")
        }
        
        // Set auspice - try "Auspice" field first, fallback to predator type field
        const auspiceName = character.auspice
        if (!safeSetTextField("Auspice", auspiceName || "")) {
            safeSetTextField("Predator", auspiceName || "")
        }
        
        // For werewolf, we use ban and favor instead of bane and compulsion
        if (tribeName && tribes[tribeName as keyof typeof tribes]) {
            const tribe = tribes[tribeName as keyof typeof tribes]
            const banText = tribe.ban
            const favorText = tribe.favor
            const patronText = tribe.patron || ""
            
            // Try to set tribe-specific fields, fall back to clan fields if werewolf sheet doesn't have them yet
            if (!safeSetTextField("TribeBan", banText) || 
                !safeSetTextField("TribeFavor", favorText) || 
                !safeSetTextField("Patron", patronText)) {
                // Fallback to original clan fields if werewolf sheet isn't ready
                safeSetTextField("ClanBane", banText)
                safeSetTextField("ClanCompulsion", favorText)
                safeSetTextField("Sire", patronText)
            }
            
            // Try to set renown information from tribe
            const renownField = `${tribe.renownType}Renown`
            try {
                const existingRenown = form.getTextField(renownField)?.getText() || "0"
                const newRenown = parseInt(existingRenown) + tribe.renownDots
                safeSetTextField(renownField, newRenown.toString())
            } catch (e) {
                // If renown fields don't exist yet, continue
            }
        }

        // Set individual renown values from character
        if (character.renown) {
            safeSetTextField("GloryRenown", character.renown.glory.toString())
            safeSetTextField("HonorRenown", character.renown.honor.toString())  
            safeSetTextField("WisdomRenown", character.renown.wisdom.toString())
            
            // Alternative field names if the above don't work
            safeSetTextField("Glory", character.renown.glory.toString())
            safeSetTextField("Honor", character.renown.honor.toString())
            safeSetTextField("Wisdom", character.renown.wisdom.toString())
        }

        // Pack info instead of sire
        if (!safeSetTextField("Pack", character.pack || "")) {
            // Fallback to Sire field if Pack doesn't exist
            safeSetTextField("Sire", character.pack || "")
        }
    }

    // Gifts (mapped to disciplines for PDF compatibility)
    const getGiftText = (power: Power | Ritual | Gift) => {
        let text = power.name + ": " + power.summary
        if (power.dicePool !== "") {
            text += ` // ${power.dicePool}`
        }
        
        // Handle different power types
        if ('cost' in power) {
            // It's a Gift
            text += ` // ${power.cost}`
        } else if ('rouseChecks' in power && power.rouseChecks > 0) {
            // It's a Discipline Power
            text += ` // ${power.rouseChecks} rouse check${power.rouseChecks > 1 ? "s" : ""}`
        }

        if ('requiredTime' in power && 'ingredients' in power) {
            // It's a ritual
            text += ` // requires: ${power.ingredients}; ${power.requiredTime}`
        }

        return text
    }

    const powersByDiscipline = (character.disciplines || []).reduce(
        (acc, p) => {
            if (!acc[p.discipline]) acc[p.discipline] = []
            acc[p.discipline].push(p)
            return acc
        },
        {} as Record<DisciplineName, Power[]>
    )
    for (const [disciplineIndex, powers] of Object.values(powersByDiscipline).entries()) {
        const di = disciplineIndex + 1
        safeSetTextField(`Disc${di}`, upcase(powers[0].discipline))
        for (const [powerIndex, power] of powers.entries()) {
            const pi = powerIndex + 1
            if (safeSetTextField(`Disc${di}_Ability${pi}`, getGiftText(power))) {
                try {
                    form.getTextField(`Disc${di}_Ability${pi}`)?.disableRichFormatting()
                } catch (e) {}
            }
            safeSetCheckBox(`Disc${di}-${pi}`)
        }
        if (powers[0].discipline === "blood sorcery") {
            for (const [ritualIndex, ritual] of (character.rituals || []).entries()) {
                const ri = powers.length + ritualIndex + 1
                if (safeSetTextField(`Disc${di}_Ability${ri}`, getGiftText(ritual))) {
                    try {
                        form.getTextField(`Disc${di}_Ability${ri}`)?.disableRichFormatting()
                    } catch (e) {}
                }
            }
        }
    }

    // Merits & flaws - simplified for Werewolf
    const meritsAndFlaws = [...character.merits, ...character.flaws]
    meritsAndFlaws.forEach(({ name, level, summary }, i) => {
        const fieldNum = i + 1
        safeSetTextField(`Merit${fieldNum}`, name + ": " + summary)
        for (let l = 1; l <= level; l++) {
            safeSetCheckBox(`Merit${fieldNum}-${l}`)
        }
    })

    // Touchstones & Convictions
    const touchstonesText = (character.touchstones || []).map(({ name, description, conviction }) => 
        `${name}: ${conviction}\n${description}`
    ).join("\n\n")
    safeSetTextField("Convictions", touchstonesText)

    // Experience - use character experience value directly
    const experience = character.experience || 0
    safeSetTextField("tEXP", `${experience} XP`)

    // Fixes bug where text that is too long for field doesn't show until clicked
    // see https://github.com/Hopding/pdf-lib/issues/569#issuecomment-1087328416 and https://stackoverflow.com/questions/73058238/some-pdf-textfield-content-not-visible-until-clicked
    // TODO: This breaks embedding the png in humanity-tracker!
    form.acroForm.dict.set(PDFName.of("NeedAppearances"), PDFBool.True)

    // Fixes embedded font not being applied on form fields
    form.updateFieldAppearances(customFont)

    return await pdfDoc.save({ updateFieldAppearances: true })
}

export const downloadCharacterSheet = async (character: UnifiedCharacter) => {
    let pdfBytes: Uint8Array
    let filename: string
    
    if (isVampireCharacter(character)) {
        pdfBytes = await createPdf_nerdbert_vampire(character)
        filename = `V5_${character.name}.pdf`
    } else if (isWerewolfCharacter(character)) {
        pdfBytes = await createPdf_nerdbert_werewolf(character)
        filename = `W5_${character.name}.pdf`
    } else {
        // This should never happen due to the discriminated union, but we need to satisfy TypeScript
        throw new Error(`Unknown character type - this should never happen due to discriminated union`)
    }
    
    notifications.show({
        title: "PDF base kindly provided by Nerdbert!",
        message: "https://linktr.ee/nerdbert",
        autoClose: 10000,
        color: "grape",
    })

    downloadPdf(filename, pdfBytes)
}

function base64ToArrayBuffer(base64: string) {
    const binary_string = window.atob(base64)
    const len = binary_string.length
    const bytes = new Uint8Array(len)
    for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i)
    }
    return bytes.buffer
}

const getFields = (form: PDFForm): Record<string, string> => {
    const fields = form.getFields()

    const outFields: Record<string, string> = {}
    fields.forEach((field) => {
        const type = field.constructor.name
        const name = field.getName()

        outFields[name] = type
    })

    return outFields
}

export const printFieldNames = async () => {
    const basePdf = base64Pdf_nerdbert
    const bytes = base64ToArrayBuffer(basePdf)

    const pdfDoc = await initPDFDocument(bytes)
    const form = pdfDoc.getForm()

    console.log("Vampire PDF Fields:", JSON.stringify(getFields(form), null, 2))
}

export const printWerewolfFieldNames = async () => {
    const basePdf = base64Pdf_werewolf
    const bytes = base64ToArrayBuffer(basePdf)

    const pdfDoc = await initPDFDocument(bytes)
    const form = pdfDoc.getForm()

    console.log("Werewolf PDF Fields:", JSON.stringify(getFields(form), null, 2))
}
