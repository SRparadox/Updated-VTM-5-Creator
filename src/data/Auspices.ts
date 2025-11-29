import { z } from "zod"
import ragabashLogo from "../resources/auspiceIcons/Ragabash.webp"
import theurgeLogo from "../resources/auspiceIcons/Theurge.webp"
import philodoxLogo from "../resources/auspiceIcons/Philodox.webp"
import galliardLogo from "../resources/auspiceIcons/Galliard.webp"
import ahrounLogo from "../resources/auspiceIcons/Ahroun.webp"
import { AuspiceName, auspiceNameSchema } from "./NameSchemas"

export const auspiceSchema = z.object({
    name: auspiceNameSchema,
    moonPhase: z.string(),
    description: z.string(),
    logo: z.string(),
    role: z.string(),
    renown: z.enum(["Glory", "Honor", "Wisdom"]),
    gifts: z.string().array(),
})
export type Auspice = z.infer<typeof auspiceSchema>
export const auspiceKeySchema = auspiceSchema.keyof()
export type AuspiceKey = z.infer<typeof auspiceKeySchema>

export const auspices: Record<AuspiceName, Auspice> = {
    "Ragabash": {
        name: "Ragabash",
        moonPhase: "New Moon",
        description: "Questioners of tradition, Gadflies of the Garou",
        logo: ragabashLogo,
        role: "Trickster and questioner of the old ways",
        renown: "Wisdom",
        gifts: ["Blissful Ignorance", "Crow's Laughter", "Gremlins", "Spider's Song"],
    },
    "Theurge": {
        name: "Theurge",
        moonPhase: "Crescent Moon",
        description: "Spirit-talkers, Visionaries, and Ritualists",
        logo: theurgeLogo,
        role: "Mystic and spirit-speaker",
        renown: "Wisdom",
        gifts: ["Ensnare Spirit", "Mother's Touch", "Shadow Sense", "Sight from Beyond"],
    },
    "Philodox": {
        name: "Philodox",
        moonPhase: "Half Moon",
        description: "Judges and Arbiters of the Garou",
        logo: philodoxLogo,
        role: "Judge and keeper of the law",
        renown: "Honor",
        gifts: ["Ancestral Conviction", "Gaia's Candor", "Porcupine's Reprisal", "Sense the True Form"],
    },
    "Galliard": {
        name: "Galliard",
        moonPhase: "Gibbous Moon",
        description: "Loremasters and Storytellers of the Garou",
        logo: galliardLogo,
        role: "Keeper of lore and inspiration",
        renown: "Glory",
        gifts: ["Beast Speech", "Call of the Wyld", "Mindspeak", "Song of Rage"],
    },
    "Ahroun": {
        name: "Ahroun",
        moonPhase: "Full Moon",
        description: "Warriors and Protectors of Gaia",
        logo: ahrounLogo,
        role: "Warrior and guardian",
        renown: "Glory",
        gifts: ["Falling Touch", "Inspiration", "Pack Awareness", "Razor Claws"],
    },
    "": {
        name: "",
        moonPhase: "",
        description: "",
        logo: "",
        role: "",
        renown: "Honor",
        gifts: [],
    },
}