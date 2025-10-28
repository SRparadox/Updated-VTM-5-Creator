import { z } from "zod"
import { specialtySchema } from "./Specialties"
import { disciplineNameSchema, PredatorTypeName } from "./NameSchemas"

const selectableMeritsAndFlawsSchema = z.object({
    options: z.object({ name: z.string(), summary: z.string(), maxLevel: z.number() }).array(),
    totalPoints: z.number().int(),
    // TODO: Consider adding type merit/flaw?
})
export type SelectableMeritsAndFlaws = z.infer<typeof selectableMeritsAndFlawsSchema>

export const predatorTypeSchema = z.object({
    name: z.string(),
    summary: z.string(),
    specialtyOptions: specialtySchema.array(),
    disciplineOptions: z.object({ name: disciplineNameSchema }).array(),
    meritsAndFlaws: z.object({ name: z.string(), level: z.number().int(), summary: z.string() }).array(),
    selectableMeritsAndFlaws: selectableMeritsAndFlawsSchema.array(),
    humanityChange: z.number().int(),
    bloodPotencyChange: z.number().int(),
})
export type PredatorType = z.infer<typeof predatorTypeSchema>

export const PredatorTypes: Record<PredatorTypeName, PredatorType> = {
    "Tithe Collector": {
        name: "Tithe Collector",
        summary: "They hold enough power to demand tribute from other kindred.",
        specialtyOptions: [
            { skill: "intimidation", name: "Kindred" },
            { skill: "leadership", name: "Kindred" }
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "presence" }],
        meritsAndFlaws: [
            { name: "Domain or Status", level: 3, summary: "Large enough domain to share or a specific location within the community." },
            { name: "Adversary", level: 2, summary: "A Kindred adversary." }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Ambulance Chaser": {
        name: "Ambulance Chaser",
        summary: "Feed from left over blood from ambulances.",
        specialtyOptions: [
            { skill: "drive", name: "Emergency Vehicles" },
            { skill: "medicine", name: "First Aid" }
        ],
        disciplineOptions: [{ name: "potence" }, { name: "protean" }],
        meritsAndFlaws: [
            { name: "Influence/Contacts/Allies", level: 3, summary: "Spend three dots between Influence, Contacts, and Allies." },
            { name: "Obvious Predator", level: 2, summary: "Obvious Predator flaw." }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Blood Baby": {
        name: "Blood Baby",
        summary: "You are dependant on the Herd of your sire.",
        specialtyOptions: [
            { skill: "persuasion", name: "Begging" },
            { skill: "technology", name: "Catfishing" }
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "presence" }],
        meritsAndFlaws: [
            { name: "Mawla", level: 2, summary: "Gain the Mawla Merit (••)" },
            { name: "Disliked", level: 1, summary: "Gain the Disliked Flaw (•)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Codependent": {
        name: "Codependent",
        summary: "You feed and take care of a single blood doll.",
        specialtyOptions: [
            { skill: "etiquette", name: "Blood Dolls" },
            { skill: "medicine", name: "Anemia" }
        ],
        disciplineOptions: [{ name: "fortitude" }, { name: "dominate" }],
        meritsAndFlaws: [
            { name: "Retainer", level: 3, summary: "Your blood doll (•••)" },
            { name: "Dependent", level: 2, summary: "Feeding Flaw: Dependent (••)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Condiment King": {
        name: "Condiment King",
        summary: "You eat your food dipped in blood.",
        specialtyOptions: [
            { skill: "craft", name: "Cooking" },
            { skill: "etiquette", name: "Table Manners" }
        ],
        disciplineOptions: [{ name: "protean" }, { name: "auspex" }],
        meritsAndFlaws: [
            { name: "Eat Food", level: 2, summary: "Mythic Merit: Eat Food (••)" },
            { name: "Folkloric Block (Garlic)", level: 1, summary: "Mythic Flaw: Folkloric Block (Garlic)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Delivery Diner": {
        name: "Delivery Diner",
        summary: "You order delivery food and feed on the driver.",
        specialtyOptions: [
            { skill: "technology", name: "Apps" },
            { skill: "drive", name: "Trucks" }
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "obfuscate" }],
        meritsAndFlaws: [
            { name: "Haven or Resources", level: 1, summary: "Gain a dot of Haven or Resources (•)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Incarcerator": {
        name: "Incarcerator",
        summary: "Kidnap victims and feed from them over the course of months.",
        specialtyOptions: [
            { skill: "brawl", name: "Kidnapping" },
            { skill: "larceny", name: "Falsifying Crime Scenes" }
        ],
        disciplineOptions: [{ name: "potence" }, { name: "oblivion" }],
        meritsAndFlaws: [
            { name: "Haven", level: 2, summary: "Gain a two-dot Haven (••)" },
            { name: "Cell", level: 1, summary: "Gain one dot of the Haven: Cells Merit(•)" },
            { name: "Enemies", level: 2, summary: "Escaped victims or law enforcement on the case (••)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Intermittent Faster": {
        name: "Intermittent Faster",
        summary: "You try to feed as little or as sparse as possible.",
        specialtyOptions: [
            { skill: "athletics", name: "Endurance" },
            { skill: "occult", name: "Golconda" }
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "fortitude" }],
        meritsAndFlaws: [
            { name: "Intermittent Fasting", level: 2, summary: "Feeding Flaw: Intermittent Fasting (••)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 1,
        bloodPotencyChange: 0,
    },
    "Maskless": {
        name: "Maskless",
        summary: "You are publicly presenting as a 'vampire'.",
        specialtyOptions: [
            { skill: "performance", name: "Drinking Blood" },
            { skill: "politics", name: "Masquerade" }
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "presence" }],
        meritsAndFlaws: [
            { name: "Fame or Mask", level: 3, summary: "Spend three dots between Fame and Mask (•••)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Opportunist": {
        name: "Opportunist",
        summary: "Feed from the fringes of society: immigrants, homeless.",
        specialtyOptions: [
            { skill: "streetwise", name: "Cast-outs" },
            { skill: "investigation", name: "Immigrants" }
        ],
        disciplineOptions: [{ name: "obfuscate" }, { name: "presence" }],
        meritsAndFlaws: [
            { name: "Linguistics", level: 2, summary: "Gain the Linguistics Merit (••)" },
            { name: "No Haven", level: 1, summary: "Gain the No Haven Flaw (•)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Xenophile": {
        name: "Xenophile",
        summary: "Feed from supernatural creatures.",
        specialtyOptions: [
            { skill: "occult", name: "Lupines/Changelings/Mages" },
            { skill: "insight", name: "True Nature" }
        ],
        disciplineOptions: [{ name: "protean" }, { name: "fortitude" }],
        meritsAndFlaws: [
            { name: "Ally", level: 4, summary: "A supernatural you help who doesn't mind if you feed on their enemies (••••)" },
            { name: "Adversary", level: 2, summary: "A supernatural who escaped you (••)" },
            { name: "Methuselah's Thirst", level: 1, summary: "Feeding Flaw: Methuselah's Thirst (•)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Abductor": {
        name: "Abductor",
        summary: "Stalk targets for days then kidnap them.",
        specialtyOptions: [
            { skill: "drive", name: "Night Driving" },
            { skill: "subterfuge", name: "Appear Harmless" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "protean" }],
        meritsAndFlaws: [
            { name: "Haven", level: 2, summary: "Gain two dots in a Haven where you feed" },
            { name: "Cell", level: 1, summary: "One dot in a Cell within it that's used for holding your victims" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Cucuy": {
        name: "Cucuy",
        summary: "You are a folklore legend to the locals and they give blood offerings.",
        specialtyOptions: [
            { skill: "stealth", name: "Witching Hour" },
            { skill: "occult", name: "Local Folklore" }
        ],
        disciplineOptions: [{ name: "obfuscate" }, { name: "oblivion" }],
        meritsAndFlaws: [
            { name: "Influence", level: 2, summary: "Influence (••) in your local community to perpetuate the folklore and offerings related to your presence." },
            { name: "Herd or Resources", level: 1, summary: "Herd (•) or Resources (•) as offerings left to placate you." },
            { name: "Folkloric Bane", level: 1, summary: "Folkloric Bane Flaw: (•) Of your choice" },
            { name: "Enemy", level: 1, summary: "Enemy Flaw: (•) a local priest, shaman, or another kind of mystic with True Faith (•) that can repel you." }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Harvester": {
        name: "Harvester",
        summary: "Eat on insect swarms feeding from corpses.",
        specialtyOptions: [
            { skill: "animal ken", name: "Insects" },
            { skill: "medicine", name: "Corpses" }
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "obfuscate" }],
        meritsAndFlaws: [
            { name: "Haven", level: 1, summary: "A private place where you store the bodies and harvest your vitae." },
            { name: "Herd", level: 2, summary: "The swarm you gain sustenance from (••)" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Sacred Harlot": {
        name: "Sacred Harlot",
        summary: "Seduce the religious as a temptress.",
        specialtyOptions: [
            { skill: "persuasion", name: "Doubt" },
            { skill: "intimidation", name: "Seduction" }
        ],
        disciplineOptions: [{ name: "protean" }, { name: "presence" }, { name: "blood sorcery" }],
        meritsAndFlaws: [
            { name: "Naamah", level: 1, summary: "Looks Merit: (•) Naamah" },
            { name: "Faith Drinker", level: 2, summary: "Feeding Merit: (••) Faith Drinker" },
            { name: "Hellish Countenance", level: 1, summary: "Looks Flaw: Hellish Countenance (•)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Sin Eater": {
        name: "Sin Eater",
        summary: "Drink for those who think themselves sinners.",
        specialtyOptions: [
            { skill: "awareness", name: "Sinners" },
            { skill: "insight", name: "Vices" }
        ],
        disciplineOptions: [{ name: "oblivion" }, { name: "blood sorcery" }],
        meritsAndFlaws: [
            { name: "Bloodhound", level: 1, summary: "Feeding Merit: Bloodhound (*)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Tormentor": {
        name: "Tormentor",
        summary: "Torment a victim's mental state.",
        specialtyOptions: [
            { skill: "subterfuge", name: "Impersonation" },
            { skill: "insight", name: "Guilt" }
        ],
        disciplineOptions: [{ name: "obfuscate" }, { name: "auspex" }],
        meritsAndFlaws: [
            { name: "Impure Blessing", level: 1, summary: "Mythic Merit: Impure Blessing (•)" },
            { name: "Contact", level: 2, summary: "Contact Background: (••) - Someone who is a confidant, such as a corrupt priest, a loose-lipped therapist, or a lawyer that rattles off personal information" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Cannibal": {
        name: "Cannibal",
        summary: "You crave to eat the flesh of Kindred.",
        specialtyOptions: [
            { skill: "brawl", name: "Bites" },
            { skill: "intimidation", name: "Cainites" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "protean" }],
        meritsAndFlaws: [
            { name: "Blood Potency", level: 1, summary: "Increase your Blood Potency by 1" },
            { name: "Glutton or Ravenous Thirst", level: 2, summary: "Feeding Flaw: Glutton (••) or Ravenous Thirst (••)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 1,
    },
    "Cazador": {
        name: "Cazador",
        summary: "Feed from hunters and their family.",
        specialtyOptions: [
            { skill: "athletics", name: "Bows" },
            { skill: "craft", name: "Traps" }
        ],
        disciplineOptions: [{ name: "celerity" }, { name: "fortitude" }],
        meritsAndFlaws: [
            { name: "Allies", level: 3, summary: "Allies Background (•••)" },
            { name: "Early Riser", level: 1, summary: "Mythic Merit: (•) Early Riser" },
            { name: "Deadly Mortal", level: 2, summary: "Enemy Flaw: Deadly Mortal (••)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Civilization Destroyer": {
        name: "Civilization Destroyer",
        summary: "Feed from mortals important to a the city and its services.",
        specialtyOptions: [
            { skill: "larceny", name: "Security" },
            { skill: "academics", name: "City Infrastructure" }
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "potence" }],
        meritsAndFlaws: [
            { name: "Contact", level: 1, summary: "Contact Background: (•)" },
            { name: "Inhuman Advisor", level: 2, summary: "Bestial Merit: Inhuman Advisor (••)" },
            { name: "Bestial Impulse", level: 1, summary: "Bestial Flaw: Bestial Impulse (•)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Nomadic Feeder": {
        name: "Nomadic Feeder",
        summary: "Feed in different locals and ways.",
        specialtyOptions: [
            { skill: "streetwise", name: "Unfamiliar Locales" },
            { skill: "insight", name: "Loners" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "fortitude" }],
        meritsAndFlaws: [
            { name: "Haven", level: 2, summary: "Haven Merit: (••)" },
            { name: "Mobile Haven Addon", level: 1, summary: "Mobile Haven Addon (•)" },
            { name: "Enemy", level: 2, summary: "Background Flaw: Enemy (••)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Pet Collaborator": {
        name: "Pet Collaborator",
        summary: "Have a pet assist you with feeding.",
        specialtyOptions: [
            { skill: "animal ken", name: "Pets" },
            { skill: "stealth", name: "Ambush" }
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "obfuscate" }],
        meritsAndFlaws: [
            { name: "Herd", level: 1, summary: "Background Merit: (•) Herd" },
            { name: "Wild Heart", level: 1, summary: "Psychological Merit: (•) Wild Heart" },
            { name: "Permanent Fangs", level: 2, summary: "Mythic Flaw: Permanent Fangs (••)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Rival Predators": {
        name: "Rival Predators",
        summary: "Fight with rivals for a hunt.",
        specialtyOptions: [
            { skill: "athletics", name: "Uneven Terrain" },
            { skill: "performance", name: "Stylish Kill" }
        ],
        disciplineOptions: [{ name: "celerity" }, { name: "potence" }],
        meritsAndFlaws: [
            { name: "Mawla", level: 2, summary: "Background: Mawla (●●) - Your rival, or rivals, who hunt against you. Winning too many times in a row, cheating, or being a sore winner might cause some issues and turn them into Adversary (●)." }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Cardillac": {
        name: "Cardillac",
        summary: "Artists who feed on those who have their artwork.",
        specialtyOptions: [
            { skill: "craft", name: "Chosen Art" },
            { skill: "performance", name: "Chosen Art" },
            { skill: "academics", name: "Chosen Art" }
        ],
        disciplineOptions: [{ name: "presence" }, { name: "protean" }],
        meritsAndFlaws: [
            { name: "Resources", level: 2, summary: "Background: Resources (●●)" },
            { name: "Fame", level: 1, summary: "Background: Fame (●)" },
            { name: "Vendetta", level: 1, summary: "Vendetta Flaw: The One at Got Away (●)" },
            { name: "Enemy", level: 1, summary: "Enemy Flaw: Gifted Mortal (●)" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Patron Of The Arts": {
        name: "Patron of the Arts",
        summary: "Foster artists to make works in exchange for their blood.",
        specialtyOptions: [
            { skill: "intimidation", name: "Coerce" },
            { skill: "awareness", name: "Talent" }
        ],
        disciplineOptions: [{ name: "presence" }, { name: "oblivion" }],
        meritsAndFlaws: [
            { name: "Herd", level: 1, summary: "Herd Background (●)" },
            { name: "Masterwork", level: 2, summary: "Background: Masterwork (●●)" },
            { name: "Adversary", level: 1, summary: "Background Flaw: Adversary (●)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    Alleycat: {
        name: "Alleycat",
        summary: "Ambush prey in alleys",
        specialtyOptions: [
            {
                skill: "intimidation",
                name: "Stickups",
            },
            {
                skill: "brawl",
                name: "Grappling",
            },
        ],
        disciplineOptions: [{ name: "celerity" }, { name: "potence" }],
        meritsAndFlaws: [{ name: "Criminal Contacts", level: 3, summary: "" }],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    Extortionist: {
        name: "Extortionist",
        summary: "Strong-arm prey into giving you their blood",
        specialtyOptions: [
            {
                skill: "intimidation",
                name: "Coercion",
            },
            {
                skill: "larceny",
                name: "Security",
            },
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "potence" }],
        meritsAndFlaws: [{ name: "Enemy", level: 2, summary: "(Police or Victim)" }],
        selectableMeritsAndFlaws: [
            {
                options: [
                    {
                        name: "Contacts",
                        summary: "mortals who provide information or valuable items",
                        maxLevel: 3,
                    },
                    {
                        name: "Resources",
                        summary: "wealth & income",
                        maxLevel: 3,
                    },
                ],
                totalPoints: 3,
            },
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Roadside Killer": {
        name: "Roadside Killer",
        summary: "Hunt prey on desolate roads",
        specialtyOptions: [
            {
                skill: "survival",
                name: "The Road",
            },
            {
                skill: "investigation",
                name: "Vampire Cant",
            },
        ],
        disciplineOptions: [{ name: "fortitude" }, { name: "protean" }],
        meritsAndFlaws: [
            { name: "Herd", level: 2, summary: "Migrating herd, always on the road" },
            { name: "Prey Exclusion", level: 1, summary: "Can't feed on locals" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    Montero: {
        name: "Montero",
        summary: "Use your retainers to herd prey into your maw for the kill",
        specialtyOptions: [
            {
                skill: "leadership",
                name: "Hunting Pack",
            },
            {
                skill: "stealth",
                name: "Stakeout",
            },
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "obfuscate" }],
        meritsAndFlaws: [{ name: "Retainers", level: 2, summary: "Mortals that help you hunt" }],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    Cleaver: {
        name: "Cleaver",
        summary: "Feed on friends and family",
        specialtyOptions: [
            {
                skill: "persuasion",
                name: "Gaslighting",
            },
            {
                skill: "subterfuge",
                name: "Coverups",
            },
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "animalism" }],
        meritsAndFlaws: [
            { name: "Herd", level: 2, summary: "Group of mortals who let you feed" },
            { name: "Dark Secret", level: 1, summary: "Cleaver" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    Consensualist: {
        name: "Consensualist",
        summary: "Take blood only from the willing",
        specialtyOptions: [
            {
                skill: "medicine",
                name: "Phlebotomy",
            },
            {
                skill: "persuasion",
                name: "Vessels",
            },
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "fortitude" }],
        meritsAndFlaws: [
            { name: "Masquerade Breacher", level: 1, summary: "" },
            { name: "Prey Exclusion", level: 1, summary: "Can't feed on the non-consenting" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 1,
        bloodPotencyChange: 0,
    },
    Osiris: {
        name: "Osiris",
        summary: "Feed on your followers",
        specialtyOptions: [
            {
                skill: "occult",
                name: "[pick tradition]",
            },
            {
                skill: "performance",
                name: "[pick any]",
            },
        ],
        disciplineOptions: [{ name: "blood sorcery" }, { name: "presence" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Fame", summary: "", maxLevel: 3 },
                    { name: "Herd", summary: "group of mortals who let you feed", maxLevel: 3 },
                ],
                totalPoints: 3,
            },
            {
                options: [
                    { name: "Enemies", summary: "group of mortals that want to harm you", maxLevel: 3 },
                    { name: "Folkloric Bane", summary: "specific items damage you (eg. silver, garlic)", maxLevel: 1 },
                    {
                        name: "Folkloric Block",
                        summary: "must spend willpower to move past specific block (eg. running water, door uninvited)",
                        maxLevel: 1,
                    },
                    { name: "Stigmata", summary: "bleed from your hands, feet and forehead when at Hunger 4", maxLevel: 1 },
                    // TODO: Only exists at level 2 - change system to include possible levels..? Maybe I have to write my own "Rating" component after all...
                    { name: "Stake Bait", summary: "Final Death when staked", maxLevel: 2 },
                ],
                totalPoints: 2,
            },
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Scene Queen": {
        name: "Scene Queen",
        summary: "Feed in your scene / subculture",
        specialtyOptions: [
            {
                skill: "etiquette",
                name: "[Specific Scene]",
            },
            {
                skill: "leadership",
                name: "[Specific Scene]",
            },
            {
                skill: "streetwise",
                name: "[Specific Scene]",
            },
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "potence" }],
        meritsAndFlaws: [
            { name: "Fame", level: 1, summary: "a select subculture loves you" },
            { name: "Contact", level: 1, summary: "" },
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Disliked", summary: "A subculture dislikes you", maxLevel: 1 },
                    { name: "Prey Exclusion (another scene)", summary: "Can't feed from excluded prey", maxLevel: 1 },
                ],
                totalPoints: 1,
            },
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    Siren: {
        name: "Siren",
        summary: "Seduce prey and take their blood",
        specialtyOptions: [
            {
                skill: "persuasion",
                name: "Seduction",
            },
            {
                skill: "subterfuge",
                name: "Seduction",
            },
        ],
        disciplineOptions: [{ name: "fortitude" }, { name: "presence" }],
        meritsAndFlaws: [
            { name: "Beautiful", level: 2, summary: "+1 die in Social rolls" },
            { name: "Enemy", level: 1, summary: "(spurned lover or jealous partner)" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    Sandman: {
        name: "Sandman",
        summary: "Break into homes and feed on sleeping prey",
        specialtyOptions: [
            {
                skill: "medicine",
                name: "Anesthetics",
            },
            {
                skill: "stealth",
                name: "Break-ins",
            },
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "obfuscate" }],
        meritsAndFlaws: [{ name: "Resources", level: 1, summary: "" }],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    Graverobber: {
        name: "Graverobber",
        summary: "Feed on fresh corpses and mourning families",
        specialtyOptions: [
            {
                skill: "occult",
                name: "Grave rituals",
            },
            {
                skill: "medicine",
                name: "Cadavers",
            },
        ],
        disciplineOptions: [{ name: "fortitude" }, { name: "oblivion" }],
        meritsAndFlaws: [
            { name: "Iron Gullet", level: 3, summary: "able to feed on rancid blood" },
            { name: "Haven", level: 1, summary: "" },
            { name: "Obvious Predator", level: 2, summary: "mortals are scared of you, can't keep Herd" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Grim Reaper": {
        name: "Grim Reaper",
        summary: "Feed exclusively on the dying",
        specialtyOptions: [
            {
                skill: "awareness",
                name: "Death",
            },
            {
                skill: "larceny",
                name: "Forgery",
            },
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "oblivion" }],
        meritsAndFlaws: [
            { name: "Allies", level: 1, summary: "medical community" },
            { name: "Prey Exclusion", level: 1, summary: "Can't feed on the healthy" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 1,
        bloodPotencyChange: 0,
    },
    Pursuer: {
        name: "Pursuer",
        summary: "Stalk your prey for extended time before indulging in the kill",
        specialtyOptions: [
            {
                skill: "investigation",
                name: "Profiling",
            },
            {
                skill: "stealth",
                name: "Shadowing",
            },
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "auspex" }],
        meritsAndFlaws: [
            { name: "Bloodhound", level: 1, summary: "smell resonance in mortal blood" },
            { name: "Contacts", level: 1, summary: "Unethical person in your hunting habitués" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    Trapdoor: {
        name: "Trapdoor",
        summary: "Build a trap in your haven and lure prey into it",
        specialtyOptions: [
            {
                skill: "persuasion",
                name: "Marketing",
            },
            {
                skill: "stealth",
                name: "Ambushes and traps",
            },
        ],
        disciplineOptions: [{ name: "protean" }, { name: "obfuscate" }],
        meritsAndFlaws: [{ name: "Haven", level: 1, summary: "smell resonance in mortal blood" }],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Retainer", summary: "Weak mortal servant", maxLevel: 1 },
                    { name: "Herd", summary: "group of mortals who let you feed", maxLevel: 1 },
                    { name: "Haven", summary: "A secure aparment", maxLevel: 1 },
                ],
                totalPoints: 1,
            },
            {
                options: [
                    { name: "Creepy", summary: "People are wary of your home", maxLevel: 1 },
                    { name: "Haunted", summary: "Ghostly presence in your haven", maxLevel: 1 },
                ],
                totalPoints: 1,
            },
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    Bagger: {
        name: "Bagger",
        summary: "Feed on blood bags",
        specialtyOptions: [
            {
                skill: "larceny",
                name: "Lockpicking",
            },
            {
                skill: "streetwise",
                name: "Black market",
            },
        ],
        disciplineOptions: [{ name: "obfuscate" }, { name: "oblivion" }, { name: "blood sorcery" }],
        meritsAndFlaws: [
            { name: "Iron Gullet", level: 3, summary: "able to feed on rancid blood" },
            { name: "Enemy", level: 2, summary: "Someone believes you owe them" },
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Blood Leech": {
        name: "Blood Leech",
        summary: "Feed on other vampires",
        specialtyOptions: [
            {
                skill: "brawl",
                name: "Kindred",
            },
            {
                skill: "stealth",
                name: "Against Kindred",
            },
        ],
        disciplineOptions: [{ name: "celerity" }, { name: "protean" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Diablerist", summary: "Somebody knows you drink from Kindred", maxLevel: 3 },
                    { name: "Shunned", summary: "Despised by a faction", maxLevel: 3 },
                ],
                totalPoints: 3,
            },
        ],
        humanityChange: -1,
        bloodPotencyChange: 1,
    },
    Farmer: {
        name: "Farmer",
        summary: "Feed on animals",
        specialtyOptions: [
            {
                skill: "animal ken",
                name: "[pick animal]",
            },
            {
                skill: "survival",
                name: "Hunting",
            },
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "protean" }],
        meritsAndFlaws: [{ name: "Farmer", level: 2, summary: "feeding on non-animal blood costs you 2 willpower" }],
        selectableMeritsAndFlaws: [],
        humanityChange: 1,
        bloodPotencyChange: 0,
    },
    "Bogeyman": {
        name: "Bogeyman",
        summary: "Blood enriched with adrenaline and cortisol proves intoxicating to you. You seek out victims ensnared in stressful, life-threatening situations or, if need be, orchestrate such scenarios yourself. As you satiate your Hunger, it's as though you're feeding not just on blood, but on fear itself.",
        specialtyOptions: [
            { skill: "occult", name: "Haunted Sites" },
            { skill: "streetwise", name: "Sketchy Neighborhoods" }
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "oblivion" }],
        meritsAndFlaws: [
            { name: "Somnophore", level: 2, summary: "Mythic Merit: Somnophore" },
            { name: "Resonance Junkie (Choleric)", level: 2, summary: "Feeding Flaw: Resonance Junkie (Choleric—ideally on the verge of a heart attack)" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Cryptid": {
        name: "Cryptid",
        summary: "You are the thing that goes bump in the night during a midnight woodland stroll. The creature from terrifying campfire tales told by teen counselors before bedtime. You stick to the wilds but hunt game vastly different from deer or hare—campers, hikers, and other hunters.",
        specialtyOptions: [
            { skill: "awareness", name: "Wilderness" },
            { skill: "survival", name: "Wilderness" }
        ],
        disciplineOptions: [{ name: "protean" }, { name: "celerity" }],
        meritsAndFlaws: [
            { name: "Haven", level: 1, summary: "Background: Haven (1 dot) - a small forgotten cave, an old mining shaft, or a cabin in the woods" },
            { name: "Truce", level: 2, summary: "Status Merit: Truce - a silent, non-aggression pact with other supernatural beings residing in your neck of the woods—it applies only to you" },
            { name: "Stalkers", level: 2, summary: "Retainers Flaw: Stalkers - amateur cryptid hunters who caught wind of your activity" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Damsel": {
        name: "Damsel",
        summary: "Just look at you. A hapless little thing. All out of luck. Brought down to your knees. Begging for someone to help you. Perhaps your car broke down in the absolute middle of nowhere, you're being chased by your abusive ex-girlfriend, or someone stole your wallet and ran into that dark alley behind you.",
        specialtyOptions: [
            { skill: "performance", name: "Solo Act" },
            { skill: "insight", name: "Vessels" }
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "presence" }],
        meritsAndFlaws: [
            { name: "Ingénue", level: 2, summary: "Looks Merit: Ingénue" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Gourmand": {
        name: "Gourmand",
        summary: "You miss the experience of eating out, whether for the social aspect or the culinary one. Feeding is forever etched in your mind as something done in restaurants, diners, food trucks, and bars. Like in a trance, that's where you naturally gravitate when the starved Beast begins to growl.",
        specialtyOptions: [
            { skill: "etiquette", name: "Dining" },
            { skill: "subterfuge", name: "Vessels" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "presence" }],
        meritsAndFlaws: [
            { name: "Eat Food", level: 2, summary: "Mythic Merit: Eat Food" }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Maladaptive Hunter", summary: "Feeding Flaw: Maladaptive Hunter", maxLevel: 2 },
                    { name: "Prey Exclusion (Mortals lacking the scent of a freshly eaten meal)", summary: "Feeding Flaw: Prey Exclusion", maxLevel: 2 }
                ],
                totalPoints: 2
            }
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Grotesque": {
        name: "Grotesque",
        summary: "Few kine find time to look at the night sky anymore. Even fewer pay attention to sculptures from eras gone by, adorning building facades and quietly watching over the city. High above or low to the ground, you skulk in those blind spots.",
        specialtyOptions: [
            { skill: "athletics", name: "Landing" },
            { skill: "streetwise", name: "Rooftops" }
        ],
        disciplineOptions: [{ name: "fortitude" }, { name: "potence" }],
        meritsAndFlaws: [
            { name: "Cold Dead Hunger", level: 2, summary: "Mythic Merit: Cold Dead Hunger" },
            { name: "Rigor Mortis", level: 2, summary: "Mythic Flaw: Rigor Mortis" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Kept Childe": {
        name: "Kept Childe",
        summary: "All these years, you were kept in a bubble by an older, more powerful, and influential vampire. It could have been your overprotective sire (real or adoptive), your elder Kindred lover, or even the domain's Prince, who saw you more as a personal pet or keepsake than an independent being.",
        specialtyOptions: [
            { skill: "politics", name: "your domain" },
            { skill: "etiquette", name: "Camarilla" }
        ],
        disciplineOptions: [{ name: "blood sorcery" }, { name: "dominate" }],
        meritsAndFlaws: [
            { name: "Herd", level: 4, summary: "Background: Herd (4 dot) - belongs to your benefactor—you can't increase it, and will face consequences if anything happens to it" },
            { name: "Prestation Debts", level: 2, summary: "Flaw: Prestation Debts - you owe your benefactor for taking such good care of you" }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Bondslave", summary: "Bonding Flaw: Bondslave", maxLevel: 3 },
                    { name: "Sired into Thralldom", summary: "Bonding Flaw: Sired into Thralldom", maxLevel: 3 }
                ],
                totalPoints: 3
            }
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Nightcrawler": {
        name: "Nightcrawler",
        summary: "When Kindred hunt, they are like criminals. Even when choosing words over violence, they interrupt the natural order of things. You lurk in places of accidents, disaster sites, war zones, fresh crime scenes—or follow other Kindred and prey on their leftovers.",
        specialtyOptions: [
            { skill: "awareness", name: "Shadowing" },
            { skill: "investigation", name: "Crime Scenes" }
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "blood sorcery" }, { name: "obfuscate" }],
        meritsAndFlaws: [
            { name: "Vessel Recognition", level: 2, summary: "Feeding Merit: Vessel Recognition" },
            { name: "Contacts (true crime enthusiasts)", level: 1, summary: "Background: Contacts - true crime enthusiasts following police radio channels, or someone in the police force secretly tipping you off" }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Enemy (spotted around crime scenes)", summary: "Allies Flaw: Enemy - you have been spotted around one crime scene too many", maxLevel: 3 },
                    { name: "Dark Secret (feeding off other Kindreds' Herds)", summary: "Fame Flaw: Dark Secret - someone knows you've been feeding off other Kindreds' Herds", maxLevel: 2 }
                ],
                totalPoints: 2
            }
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Nouveau Riche": {
        name: "Nouveau Riche",
        summary: "You might not be famous, and you might not be liked. What you most certainly are, however, is rich—capital R rich—and for some people out there, that's just enough. It certainly is enough for you, because money makes kine crawl all over you like maggots on a day-old corpse.",
        specialtyOptions: [
            { skill: "finance", name: "Stock Market" },
            { skill: "finance", name: "Money Laundering" },
            { skill: "etiquette", name: "One-Percenter" }
        ],
        disciplineOptions: [{ name: "potence" }, { name: "presence" }],
        meritsAndFlaws: [
            { name: "Resources", level: 4, summary: "Background: Resources (4 dot)" },
            { name: "Flagged", level: 2, summary: "Resources Flaw: Flagged" }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Adversary (Kindred)", summary: "Mawla Flaw: Adversary - Kindred, whom you exploited, cheated, or stolen from to get where you are", maxLevel: 3 },
                    { name: "Enemy (blackmailer)", summary: "Allies Flaw: Enemy - someone who knows your money isn't clean and is blackmailing you", maxLevel: 3 }
                ],
                totalPoints: 3
            }
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Spiker": {
        name: "Spiker",
        summary: "Uppers, downers, laughers, screamers—variety is the spice of life, and you like your blood very spicy. No, you're not an addict. Pff... Can Kindred even get addicted? It's just that nothing else gives you that special kick anymore, is all.",
        specialtyOptions: [
            { skill: "medicine", name: "Pharmaceuticals" },
            { skill: "larceny", name: "Planting" },
            { skill: "streetwise", name: "Drugs" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "blood sorcery" }, { name: "celerity" }],
        meritsAndFlaws: [
            { name: "High Functioning Addict", level: 2, summary: "Substance Abuse Merit: High Functioning Addict (Choose your poison)" },
            { name: "Resonance Junkie (Sanguine)", level: 2, summary: "Feeding Flaw: Resonance Junkie (Sanguine—the more spiked their blood, the harder it kicks)" }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Contacts (Drug dealers)", summary: "Background: Contacts (1 dot) - Drug dealers", maxLevel: 1 },
                    { name: "Influence (Narcotics Anonymous)", summary: "Influence (1 dot) - Narcotics Anonymous", maxLevel: 1 }
                ],
                totalPoints: 1
            }
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Zero-Hour": {
        name: "Zero-Hour",
        summary: "You've found your niche among the show-up, cash-to-hand workers of the night—cleaners, couriers, drivers. Like background noise, they're everywhere, and no one ever questions their presence. People are simply grateful they're not the ones doing those jobs.",
        specialtyOptions: [
            { skill: "drive", name: "Navigating" },
            { skill: "subterfuge", name: "Impersonating" },
            { skill: "streetwise", name: "Illegal Labor" }
        ],
        disciplineOptions: [{ name: "celerity" }, { name: "fortitude" }],
        meritsAndFlaws: [
            { name: "Side Hustler", level: 2, summary: "Miscellaneous Merit: Side Hustler" },
            { name: "Herd (Graveyard Shift)", level: 2, summary: "Background: Herd (Graveyard Shift)" },
            { name: "Honest-to-God Job", level: 2, summary: "Resources Flaw: Honest-to-God Job" }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Resources", summary: "Background: Resources", maxLevel: 3 },
                    { name: "City Secrets", summary: "Status Advantage: City Secrets - you found dirt on a high-profile mortal while doing your work", maxLevel: 2 }
                ],
                totalPoints: 2
            }
        ],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Alû": {
        name: "Alû",
        summary: "The Alû was a faceless spirit of Sumer that would drape itself like a shadowy cloak over its victims, overwhelming them with paralyzing fear while it sapped their health. Whether the Lasombra inspired the myth, or the thing itself inspired them, is a moot point to you and your prey.",
        specialtyOptions: [
            { skill: "stealth", name: "Those Slumbering" },
            { skill: "awareness", name: "Entry Points" }
        ],
        disciplineOptions: [{ name: "oblivion" }, { name: "obfuscate" }],
        meritsAndFlaws: [
            { name: "Alû", level: 2, summary: "Feeding Merit: Alû (••) - Even when a victim wakes, they're unable to act, as per your namesake." },
            { name: "Asneisen", level: 1, summary: "Mythic Merit: Asneisen (•) - Your shadow is a thing as devious as you." }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Broker": {
        name: "Broker",
        summary: "While others hunt in business and institutions that they \"own\", you've built something better: a reputation. You get things done: quietly, cleanly, effectively. You solve problems for Kindred who can't, won't, or don't dare to fix them themselves. In return? They pay in blood; access to their herds, feeding rights in their Domain, or a sampling of their favored vessel.",
        specialtyOptions: [
            { skill: "investigation", name: "Fuck Ups" },
            { skill: "awareness", name: "Complications" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "obfuscate" }],
        meritsAndFlaws: [
            { name: "Blood Broker", level: 1, summary: "Psychological Flaw: Blood Broker (•) - You treat the term blood money rather literally, and prefer it." }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Fame", summary: "Background: Fame", maxLevel: 5 },
                    { name: "Status", summary: "Background: Status", maxLevel: 5 }
                ],
                totalPoints: 2
            }
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Caballero": {
        name: "Caballero",
        summary: "Though associated with chivalric connotations in Mortal society, amongst the Sabbat the Caballero is a hunter of their own kind. Unlike the Blood Leech, however, these Kindred are usually unconcerned with protecting humans, and instead hunt the Children of Caine who they perceive have broken laws or committed wrongs.",
        specialtyOptions: [
            { skill: "melee", name: "Heavy Weapons" },
            { skill: "firearms", name: "Heavy Weapons" },
            { skill: "streetwise", name: "Non-Mortals" }
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "potence" }],
        meritsAndFlaws: [
            { name: "Haven", level: 1, summary: "Haven Merit: (•) - You have a small safehouse somewhere in a dark corner of the city." },
            { name: "Hidden Armory", level: 1, summary: "Haven Addon: Hidden Armory (•) - You keep some weapons under your pillow." }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Self-Righteous", summary: "Psychological Merit: Self-Righteous (••) - You hold fast to a certain value, especially when they're wielded in the name of violence.", maxLevel: 2 },
                    { name: "Aeneas", summary: "Psychological Merit: Aeneas (••) - to push your will past its limits.", maxLevel: 2 }
                ],
                totalPoints: 2
            }
        ],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Confessor": {
        name: "Confessor",
        summary: "A once-common method among the Lasombra with deep roots in the Catholic Church. From the shadows of a confessional booth or behind the guise of the clergy, the Confessor draws in sinners seeking absolution. Through whispered guilt and murmured shame, a rapport is built.",
        specialtyOptions: [
            { skill: "academics", name: "Theology" },
            { skill: "insight", name: "Assuage" }
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "presence" }],
        meritsAndFlaws: [
            { name: "Religious Prohibition", level: 1, summary: "Psychological Flaw: Religious Prohibition (•) - Over-indulgeance is a poor way to win people's trust, and in life you were likely taught better." }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Tithed Bibitor", summary: "Background: Tithed Bibitor (••) - Vitae offered freely causes no bonding effects.", maxLevel: 2 },
                    { name: "Pack Priest", summary: "Background: Pack Priest (••) - you're the spiritual anchor of a Pack that likely takes a few extra drinks during the Vaulderie and other ritae you officiate.", maxLevel: 2 }
                ],
                totalPoints: 2
            }
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Gamemaker": {
        name: "Gamemaker",
        summary: "A possible hold-over from the Sabbat (or simply a Ritae for those still in the Black Hand). The Gamemaker has a group (a pack) they organize hunts with, creating bestial hunts that require teamwork and cruelty, all to secure to a \"trophy vessel\".",
        specialtyOptions: [
            { skill: "awareness", name: "Victims" },
            { skill: "leadership", name: "Cruelty" }
        ],
        disciplineOptions: [{ name: "potence" }, { name: "protean" }],
        meritsAndFlaws: [
            { name: "Pack Tactics", level: 2, summary: "Sabbat Background: Pack Tactics (••)." },
            { name: "Cruel Slice", level: 1, summary: "Bestial Merit: Cruel Slice (•) - There's satisfaction in violence." }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Hector": {
        name: "Hector",
        summary: "A form of feeding that was ostensibly practiced by Lasombra who claimed to be brave and noble, but were actually domineering and brutish. These Cainites feed on those that depend on them, and who they depend on. Ostensibly even claiming this as a form of testing others to see if they're strong enough to survive.",
        specialtyOptions: [
            { skill: "brawl", name: "Allies" },
            { skill: "brawl", name: "Contacts" },
            { skill: "brawl", name: "Retainers" },
            { skill: "intimidation", name: "Allies" },
            { skill: "intimidation", name: "Contacts" },
            { skill: "intimidation", name: "Retainers" }
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "potence" }],
        meritsAndFlaws: [
            { name: "Machiavellivore", level: 2, summary: "Feeding Merit: Machiavellivore (••) - You exploit those who are also your resources as food. If they suffer, they should be strong enough to overcome that suffering." }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Contacts", summary: "Background: Contacts", maxLevel: 5 },
                    { name: "Retainer", summary: "Background: Retainer", maxLevel: 5 }
                ],
                totalPoints: 1
            }
        ],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Piscator": {
        name: "Piscator",
        summary: "Once a simple form of hunting for sailors at sea. The centuries have slowly warped the Piscator into being a form of feeding that feeds through the use of abyssal powers. These nights it has become one of the primary methods of feeding amongst Abyss Mystics and other more occult-minded Kindred.",
        specialtyOptions: [
            { skill: "occult", name: "Sacrificial Rites" },
            { skill: "occult", name: "Eldritch Powers" }
        ],
        disciplineOptions: [{ name: "oblivion" }],
        meritsAndFlaws: [
            { name: "Cyclical Offering", level: 1, summary: "Feeding Merit: Cyclical Offering (•) - The Abyss grants you some small favor of the dark." },
            { name: "Inner-Void", level: 1, summary: "Mythic Flaw: Inner-Void (•) - Numbing darkness is soothing." }
        ],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Ceremonies of Oblivion", summary: "Ceremonies of Oblivion", maxLevel: 5 }
                ],
                totalPoints: 2
            }
        ],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Teardown": {
        name: "Teardown",
        summary: "For you, feeding is a social tool to break the proud or the accomplished just as much as it is to slake your hunger. You target those with power—corporate climbers, gang lieutenants, petty lords, and self-styled sovereigns. You strip them of their illusions and confidence to ensure they know exactly where they belong: With their throat in your mouth.",
        specialtyOptions: [
            { skill: "insight", name: "Insecurities" },
            { skill: "persuasion", name: "Belittle" }
        ],
        disciplineOptions: [{ name: "presence" }, { name: "oblivion" }],
        meritsAndFlaws: [
            { name: "Prey on the Proud", level: 1, summary: "Feeding Merit: Prey on the Proud (•) - The most confident are the best to feed on, their blood resonating in yours." }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "": {
        name: "",
        summary: "",
        specialtyOptions: [],
        disciplineOptions: [],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    // Add only truly missing predator types with placeholder data
    "Two Face": { name: "Two Face", summary: "[Placeholder]", specialtyOptions: [], disciplineOptions: [], meritsAndFlaws: [], selectableMeritsAndFlaws: [], humanityChange: 0, bloodPotencyChange: 0 },
    "Fear Monger": { name: "Fear Monger", summary: "[Placeholder]", specialtyOptions: [], disciplineOptions: [], meritsAndFlaws: [], selectableMeritsAndFlaws: [], humanityChange: 0, bloodPotencyChange: 0 },
    "Reputation": { name: "Reputation", summary: "[Placeholder]", specialtyOptions: [], disciplineOptions: [], meritsAndFlaws: [], selectableMeritsAndFlaws: [], humanityChange: 0, bloodPotencyChange: 0 },
}
