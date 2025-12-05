import { z } from "zod"
import { SplatType } from "../components/SplatPicker"
import { Power, powerSchema, ritualSchema, ceremonySchema } from "./Disciplines"
import { alchemyFormulaSchema } from "./Alchemy"
import { riteSchema } from "./Rites"
import { specialtySchema } from "./Specialties"
import { skillsSchema } from "./Skills"
import { attributesSchema } from "./Attributes"
import { 
    clanNameSchema, 
    disciplineNameSchema, 
    predatorTypeNameSchema, 
    roleNameSchema,
    tribeNameSchema,
    auspiceNameSchema,
    giftNameSchema 
} from "./NameSchemas"
import { elderPowerSchema, methuselahPowerSchema } from "./ElderPowers"

// Define splat types
export const splatTypeSchema = z.enum(["vampire", "werewolf", "hunter", "mage"])

// Base schemas used across splats
export const religionSchema = z.union([
    z.literal("Bahari"),
    z.literal("Church of Caine"),
    z.literal("Followers of Set"),
    z.literal("Non Believer"),
    z.literal(""),
]);

export const sectSchema = z.union([
    z.literal("Camarilla"),
    z.literal("Anarchs"),
    z.literal("Black Hand"),
    z.literal("Sabbat"),
    z.literal("TalMaheRa"),
    z.literal(""),
]);

export const meritFlawSchema = z.object({
    name: z.string(),
    level: z.number().min(1).int(),
    summary: z.string(),
    type: z.union([z.literal("merit"), z.literal("flaw")]),
})
export type MeritFlaw = z.infer<typeof meritFlawSchema>

export const touchstoneSchema = z.object({
    name: z.string(),
    description: z.string(),
    conviction: z.string(),
})
export type Touchstone = z.infer<typeof touchstoneSchema>

// Base character schema with shared fields
export const baseCharacterSchema = z.object({
    // Meta fields
    splat: splatTypeSchema,
    
    // Core character info
    playerName: z.string().default(""),
    chronicleName: z.string().default(""),
    name: z.string().default(""),
    description: z.string().default(""),
    notes: z.string().default(""),
    
    // Relationships and background
    touchstones: touchstoneSchema.array().default([]),
    ambition: z.string().default(""),
    desire: z.string().default(""),
    
    // Core stats
    attributes: attributesSchema,
    skills: skillsSchema,
    skillSpecialties: specialtySchema.array().default([]),
    
    // Health and state
    maxHealth: z.number().min(0).int().default(0),
    willpower: z.number().min(0).int().default(0),
    experience: z.number().min(0).int().default(0),
    
    // Merits and Flaws
    merits: meritFlawSchema.array().default([]),
    flaws: meritFlawSchema.array().default([]),
})
export type BaseCharacter = z.infer<typeof baseCharacterSchema>

// Vampire-specific extension
export const vampireCharacterSchema = baseCharacterSchema.extend({
    splat: z.literal("vampire"),
    
    // Vampire identity
    sire: z.string().default(""),
    clan: clanNameSchema.default(""),
    selectedBane: z.string().default(""),
    selectedCompulsion: z.string().default(""),
    sect: sectSchema.default(""),
    religion: religionSchema.default(""),
    
    // Vampire feeding and roles
    predatorType: z.object({
        name: predatorTypeNameSchema.default(""),
        pickedDiscipline: disciplineNameSchema.default(""),
        pickedSpecialties: specialtySchema.array().default([]),
        pickedMeritsAndFlaws: meritFlawSchema.array().default([]),
    }),
    role: z.object({
        name: roleNameSchema,
        pickedDiscipline: disciplineNameSchema,
        pickedSpecialties: specialtySchema.array(),
        pickedMeritsAndFlaws: meritFlawSchema.array(),
    }).optional(),
    
    // Vampire powers and abilities
    availableDisciplineNames: disciplineNameSchema.array().default([]),
    disciplines: powerSchema.array().default([]),
    rituals: ritualSchema.array().default([]),
    ceremonies: ceremonySchema.array().default([]),
    alchemy: alchemyFormulaSchema.array().default([]),
    
    // Vampire stats
    bloodPotency: z.number().min(0).int().default(0),
    generation: z.number().min(0).int().default(0),
    humanity: z.number().min(0).int().default(0),
    yearsAsVampire: z.number().min(0).int().default(0),
    
    // Elder powers
    isElder: z.boolean().default(false),
    isMethuselah: z.boolean().default(false),
    selectedElderPowers: elderPowerSchema.array().default([]),
    selectedMethuselahPowers: methuselahPowerSchema.array().default([]),
})
export type VampireCharacter = z.infer<typeof vampireCharacterSchema>

// Werewolf-specific extension
export const werewolfCharacterSchema = baseCharacterSchema.extend({
    splat: z.literal("werewolf"),
    
    // Werewolf identity
    pack: z.string().default(""),
    concept: z.string().default(""),
    chronicle: z.string().default(""), // Override the base chronicleName
    tribe: tribeNameSchema.default(""),
    auspice: auspiceNameSchema.default(""),
    
    // Werewolf stats
    rage: z.number().min(0).int().default(0),
    gnosis: z.number().min(0).int().default(0),
    renown: z.object({
        glory: z.number().min(0).int().default(0),
        honor: z.number().min(0).int().default(0),
        wisdom: z.number().min(0).int().default(0),
    }).default({ glory: 0, honor: 0, wisdom: 0 }),
    
    // Werewolf powers
    availableGiftNames: giftNameSchema.array().default([]),
    gifts: powerSchema.array().default([]),
    rites: riteSchema.array().default([]),
    
    // Werewolf uses Harmony instead of Humanity
    harmony: z.number().min(0).int().default(0),
    
    // Backward compatibility fields for vampire compatibility
    sire: z.string().default(""), // Maps to pack
    clan: tribeNameSchema.default(""), // Maps to tribe
    predatorType: z.object({
        name: auspiceNameSchema.default(""), // Maps to auspice
        pickedDiscipline: giftNameSchema.default(""),
        pickedSpecialties: specialtySchema.array().default([]),
        pickedMeritsAndFlaws: meritFlawSchema.array().default([]),
    }).default({ name: "", pickedDiscipline: "", pickedSpecialties: [], pickedMeritsAndFlaws: [] }),
    availableDisciplineNames: giftNameSchema.array().default([]), // Maps to availableGiftNames
    disciplines: powerSchema.array().default([]), // Maps to gifts
    rituals: ritualSchema.array().default([]), // Different meaning than vampire rituals
    bloodPotency: z.number().min(0).int().default(0), // Maps to rage
    generation: z.number().min(0).int().default(0), // Maps to gnosis
    humanity: z.number().min(0).int().default(0), // Maps to harmony
})
export type WerewolfCharacter = z.infer<typeof werewolfCharacterSchema>

// Union type for all character types
export const characterSchema = z.discriminatedUnion("splat", [
    vampireCharacterSchema,
    werewolfCharacterSchema,
])
export type Character = z.infer<typeof characterSchema>

// Factory functions for creating empty characters
export const getEmptyVampireCharacter = (): VampireCharacter => ({
    splat: "vampire",
    playerName: "",
    chronicleName: "",
    name: "",
    description: "",
    notes: "",
    sire: "",
    clan: "",
    selectedBane: "",
    selectedCompulsion: "",
    sect: "",
    religion: "",
    predatorType: { name: "", pickedDiscipline: "", pickedSpecialties: [], pickedMeritsAndFlaws: [] },
    role: undefined,
    touchstones: [],
    ambition: "",
    desire: "",
    attributes: {
        strength: 1,
        dexterity: 1,
        stamina: 1,
        charisma: 1,
        manipulation: 1,
        composure: 1,
        intelligence: 1,
        wits: 1,
        resolve: 1,
    },
    skills: {
        athletics: 0,
        brawl: 0,
        craft: 0,
        drive: 0,
        firearms: 0,
        melee: 0,
        larceny: 0,
        stealth: 0,
        survival: 0,
        "animal ken": 0,
        etiquette: 0,
        insight: 0,
        intimidation: 0,
        leadership: 0,
        performance: 0,
        persuasion: 0,
        streetwise: 0,
        subterfuge: 0,
        academics: 0,
        awareness: 0,
        finance: 0,
        investigation: 0,
        medicine: 0,
        occult: 0,
        politics: 0,
        science: 0,
        technology: 0,
    },
    skillSpecialties: [],
    availableDisciplineNames: [],
    disciplines: [],
    rituals: [],
    ceremonies: [],
    alchemy: [],
    bloodPotency: 0,
    generation: 0,
    maxHealth: 0,
    willpower: 0,
    experience: 0,
    humanity: 0,
    yearsAsVampire: 0,
    merits: [],
    flaws: [],
    isElder: false,
    isMethuselah: false,
    selectedElderPowers: [],
    selectedMethuselahPowers: [],
})

export const getEmptyWerewolfCharacter = (): WerewolfCharacter => ({
    splat: "werewolf",
    playerName: "",
    chronicleName: "",
    name: "",
    description: "",
    notes: "",
    pack: "",
    concept: "",
    chronicle: "",
    tribe: "",
    auspice: "",
    touchstones: [],
    ambition: "",
    desire: "",
    attributes: {
        strength: 1,
        dexterity: 1,
        stamina: 1,
        charisma: 1,
        manipulation: 1,
        composure: 1,
        intelligence: 1,
        wits: 1,
        resolve: 1,
    },
    skills: {
        athletics: 0,
        brawl: 0,
        craft: 0,
        drive: 0,
        firearms: 0,
        melee: 0,
        larceny: 0,
        stealth: 0,
        survival: 0,
        "animal ken": 0,
        etiquette: 0,
        insight: 0,
        intimidation: 0,
        leadership: 0,
        performance: 0,
        persuasion: 0,
        streetwise: 0,
        subterfuge: 0,
        academics: 0,
        awareness: 0,
        finance: 0,
        investigation: 0,
        medicine: 0,
        occult: 0,
        politics: 0,
        science: 0,
        technology: 0,
    },
    skillSpecialties: [],
    maxHealth: 0,
    willpower: 0,
    experience: 0,
    merits: [],
    flaws: [],
    rage: 0,
    gnosis: 0,
    renown: { glory: 0, honor: 0, wisdom: 0 },
    availableGiftNames: [],
    gifts: [],
    rites: [],
    harmony: 0,
    // Backward compatibility fields
    sire: "",
    clan: "",
    predatorType: { name: "", pickedDiscipline: "", pickedSpecialties: [], pickedMeritsAndFlaws: [] },
    availableDisciplineNames: [],
    disciplines: [],
    rituals: [],
    bloodPotency: 0,
    generation: 0,
    humanity: 0,
})

// Unified factory function
export const getEmptyCharacter = (splat: SplatType = "vampire"): Character => {
    switch (splat) {
        case "vampire":
            return getEmptyVampireCharacter()
        case "werewolf":
            return getEmptyWerewolfCharacter()
        default:
            return getEmptyVampireCharacter() // Default to vampire for now
    }
}

// Utility functions
export const containsBloodSorcery = (powers: Power[]) => 
    powers.filter((power) => power.discipline === "blood sorcery").length > 0

export const isThinBlood = (character: Character) => 
    character.splat === "vampire" && character.clan === "Thin-blood"

// Type guards
export const isVampireCharacter = (character: Character): character is VampireCharacter =>
    character.splat === "vampire"

export const isWerewolfCharacter = (character: Character): character is WerewolfCharacter =>
    character.splat === "werewolf"

// Werewolf compatibility mapping functions
export const syncWerewolfCompatibilityFields = (character: WerewolfCharacter): WerewolfCharacter => {
    return {
        ...character,
        // Map werewolf fields to vampire compatibility fields
        sire: character.pack,
        clan: character.tribe,
        predatorType: {
            ...character.predatorType,
            name: character.auspice,
        },
        availableDisciplineNames: character.availableGiftNames,
        disciplines: character.gifts,
        bloodPotency: character.rage,
        generation: character.gnosis,
        humanity: character.harmony,
    }
}

export const syncWerewolfNativeFields = (character: WerewolfCharacter): WerewolfCharacter => {
    return {
        ...character,
        // Map vampire compatibility fields back to werewolf native fields
        pack: character.sire || character.pack,
        tribe: character.clan || character.tribe,
        auspice: character.predatorType.name || character.auspice,
        availableGiftNames: character.availableDisciplineNames.length > 0 
            ? character.availableDisciplineNames 
            : character.availableGiftNames,
        gifts: character.disciplines.length > 0 ? character.disciplines : character.gifts,
        rage: character.bloodPotency || character.rage,
        gnosis: character.generation || character.gnosis,
        harmony: character.humanity || character.harmony,
    }
}