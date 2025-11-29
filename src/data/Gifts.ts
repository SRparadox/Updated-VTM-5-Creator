import { z } from "zod"
import { Power } from "./Disciplines"

export const renownTypeSchema = z.enum(["Glory", "Honor", "Wisdom"])
export type RenownType = z.infer<typeof renownTypeSchema>

export const giftCategorySchema = z.enum([
    "Native", 
    "Ragabash", "Theurge", "Philodox", "Galliard", "Ahroun", 
    "Black Furies", "Bone Gnawers", "Children of Gaia", "Galestalkers", 
    "Ghost Council", "Glass Walkers", "Hart Wardens", "Red Talons", 
    "Shadow Lords", "Silent Striders", "Silver Fangs"
])
export type GiftCategory = z.infer<typeof giftCategorySchema>

export const giftSchema = z.object({
    name: z.string(),
    category: giftCategorySchema,
    renown: renownTypeSchema,
    summary: z.string(),
    description: z.string(),
    dicePool: z.string(),
    cost: z.string(),
    duration: z.string(),
})
export type Gift = z.infer<typeof giftSchema>

// Sample gifts for demonstration - this would be expanded with full gift lists
export const sampleGifts: Gift[] = [
    {
        name: "Catfeet",
        category: "Native",
        renown: "Honor",
        summary: "Gain a supernatural sense of balance",
        description: "The Garou gains perfect balance and can walk on narrow surfaces without falling.",
        dicePool: "Dexterity + Athletics",
        cost: "None",
        duration: "Scene"
    },
    {
        name: "Eyes of the Owl",
        category: "Native", 
        renown: "Wisdom",
        summary: "See in the dark",
        description: "The Garou can see clearly in complete darkness as if it were daylight.",
        dicePool: "Wits + Awareness",
        cost: "None",
        duration: "Scene"
    },
    {
        name: "Hare's Leap",
        category: "Native",
        renown: "Glory", 
        summary: "Leap great distances",
        description: "The Garou can leap superhuman distances in any form.",
        dicePool: "Strength + Athletics",
        cost: "None", 
        duration: "Instant"
    },
    {
        name: "Pack Awareness",
        category: "Ahroun",
        renown: "Glory",
        summary: "Sense pack members' condition",
        description: "The Garou can sense the location and condition of their pack members.",
        dicePool: "Wits + Empathy",
        cost: "None",
        duration: "Persistent"
    },
    {
        name: "Mother's Touch",
        category: "Theurge", 
        renown: "Wisdom",
        summary: "Heal wounds with a touch",
        description: "The Garou can heal wounds by laying hands on the injured person.",
        dicePool: "Intelligence + Medicine",
        cost: "1 Gnosis",
        duration: "Instant"
    }
]

// Gift collections by type for easy filtering
export const giftsByCategory: Record<GiftCategory, Gift[]> = {
    "Native": sampleGifts.filter(g => g.category === "Native"),
    "Ragabash": sampleGifts.filter(g => g.category === "Ragabash"),
    "Theurge": sampleGifts.filter(g => g.category === "Theurge"),
    "Philodox": sampleGifts.filter(g => g.category === "Philodox"),
    "Galliard": sampleGifts.filter(g => g.category === "Galliard"),
    "Ahroun": sampleGifts.filter(g => g.category === "Ahroun"),
    "Black Furies": sampleGifts.filter(g => g.category === "Black Furies"),
    "Bone Gnawers": sampleGifts.filter(g => g.category === "Bone Gnawers"),
    "Children of Gaia": sampleGifts.filter(g => g.category === "Children of Gaia"),
    "Galestalkers": sampleGifts.filter(g => g.category === "Galestalkers"),
    "Ghost Council": sampleGifts.filter(g => g.category === "Ghost Council"),
    "Glass Walkers": sampleGifts.filter(g => g.category === "Glass Walkers"),
    "Hart Wardens": sampleGifts.filter(g => g.category === "Hart Wardens"),
    "Red Talons": sampleGifts.filter(g => g.category === "Red Talons"),
    "Shadow Lords": sampleGifts.filter(g => g.category === "Shadow Lords"),
    "Silent Striders": sampleGifts.filter(g => g.category === "Silent Striders"),
    "Silver Fangs": sampleGifts.filter(g => g.category === "Silver Fangs"),
}