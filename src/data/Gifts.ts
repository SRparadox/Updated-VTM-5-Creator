import { z } from "zod"
import { Power } from "./Disciplines"

export const renownTypeSchema = z.enum(["Glory", "Honor", "Wisdom"])
export type RenownType = z.infer<typeof renownTypeSchema>

export const giftCategorySchema = z.enum(["Native", "Ragabash", "Theurge", "Philodox", "Galliard", "Ahroun", "Black Furies", "Bone Gnawers", "Children of Gaia", "Galestalkers", "Ghost Council", "Glass Walkers", "Hart Wardens", "Red Talons", "Shadow Lords", "Silent Striders", "Silver Fangs", "Beyond Supernatural"])
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

// Native Gifts (pp. 146-147)
export const nativeGifts: Gift[] = [
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
        cost: "1 Rage",
        duration: "One jump"
    },
    {
        name: "Penumbral Senses",
        category: "Native",
        renown: "Wisdom",
        summary: "Perceive the spirit and mundane worlds",
        description: "The Garou can perceive both the physical and spirit worlds simultaneously.",
        dicePool: "Wits + Awareness",
        cost: "None", 
        duration: "Scene"
    },
    {
        name: "Raging Strike",
        category: "Native",
        renown: "Glory",
        summary: "Deal extra damage with Brawl attacks",
        description: "The Garou's unarmed attacks deal additional damage when enraged.",
        dicePool: "Strength + Brawl",
        cost: "1 Rage",
        duration: "One attack"
    },
    {
        name: "Staredown",
        category: "Native",
        renown: "Honor",
        summary: "Cause humans and animals to get out of your way",
        description: "The Garou can intimidate humans and animals into backing down or fleeing.",
        dicePool: "Presence + Intimidation",
        cost: "None",
        duration: "Scene"
    }
]

// Ragabash Gifts (pp. 149-150)
export const ragabashGifts: Gift[] = [
    {
        name: "Blissful Ignorance",
        category: "Ragabash",
        renown: "Wisdom",
        summary: "Stand unseen",
        description: "The Garou becomes effectively invisible to casual observation.",
        dicePool: "Wits + Stealth",
        cost: "1 Gnosis",
        duration: "Scene"
    },
    {
        name: "Crow's Laughter", 
        category: "Ragabash",
        renown: "Honor",
        summary: "Mockery causes Superficial Willpower damage",
        description: "The Garou's mocking laughter causes psychological harm to enemies.",
        dicePool: "Manipulation + Performance",
        cost: "None",
        duration: "Instant"
    },
    {
        name: "Gremlins",
        category: "Ragabash",
        renown: "Glory",
        summary: "Cause a device to malfunction",
        description: "The Garou can cause technological devices to fail or malfunction.",
        dicePool: "Manipulation + Technology",
        cost: "1 Rage",
        duration: "Scene"
    },
    {
        name: "Spider's Song",
        category: "Ragabash", 
        renown: "Wisdom",
        summary: "Eavesdrop on electronic communication",
        description: "The Garou can listen in on electronic communications like phone calls or internet traffic.",
        dicePool: "Intelligence + Technology",
        cost: "1 Gnosis",
        duration: "Scene"
    }
]

// Theurge Gifts (pp. 152-153)  
export const theurgeGifts: Gift[] = [
    {
        name: "Ensnare Spirit",
        category: "Theurge",
        renown: "Honor", 
        summary: "Stop a spirit and make it susceptible to further Gifts",
        description: "The Garou can bind a spirit in place and make it vulnerable to other supernatural effects.",
        dicePool: "Composure + Occult",
        cost: "1 Gnosis",
        duration: "Scene"
    },
    {
        name: "Mother's Touch",
        category: "Theurge",
        renown: "Glory",
        summary: "Heal other physical, living creatures", 
        description: "The Garou can heal wounds on other living beings through touch.",
        dicePool: "Intelligence + Medicine",
        cost: "1 Gnosis",
        duration: "Instant"
    },
    {
        name: "Shadow Sense",
        category: "Theurge",
        renown: "Wisdom",
        summary: "Sense unseen creatures and the supernatural",
        description: "The Garou can detect invisible, hidden, or supernatural entities.",
        dicePool: "Wits + Awareness", 
        cost: "None",
        duration: "Scene"
    },
    {
        name: "Sight from Beyond",
        category: "Theurge",
        renown: "Wisdom",
        summary: "Prophetic visions",
        description: "The Garou receives visions of possible futures or distant events.",
        dicePool: "Intelligence + Occult",
        cost: "1 Gnosis",
        duration: "Instant"
    }
]

// Philodox Gifts (pp. 155-156)
export const philodoxGifts: Gift[] = [
    {
        name: "Ancestral Conviction",
        category: "Philodox",
        renown: "Honor",
        summary: "Persuade other Garou",
        description: "The Garou can call upon ancestral wisdom to make persuasive arguments to other werewolves.",
        dicePool: "Presence + Persuasion",
        cost: "1 Gnosis",
        duration: "Scene"
    },
    {
        name: "Gaia's Candor",
        category: "Philodox", 
        renown: "Glory",
        summary: "Determine if a target believes what they say",
        description: "The Garou can tell if someone truly believes what they are saying.",
        dicePool: "Wits + Insight",
        cost: "None",
        duration: "Scene"
    },
    {
        name: "Porcupine's Reprisal",
        category: "Philodox",
        renown: "Glory",
        summary: "Damage those who harm you",
        description: "Those who attack the Garou suffer damage in return.",
        dicePool: "Stamina + Survival", 
        cost: "1 Rage",
        duration: "Scene"
    },
    {
        name: "Sense the True Form",
        category: "Philodox",
        renown: "Wisdom",
        summary: "Detect a creature's supernatural nature",
        description: "The Garou can see through shapeshifting and detect supernatural creatures.",
        dicePool: "Wits + Awareness",
        cost: "None",
        duration: "Instant"
    }
]

// Galliard Gifts (pp. 158-159)
export const galliardGifts: Gift[] = [
    {
        name: "Animal Magnetism",
        category: "Galliard",
        renown: "Glory",
        summary: "Bonus to Social tests against humans",
        description: "The Garou becomes supernaturally charismatic and appealing to humans.",
        dicePool: "Presence + Performance",
        cost: "1 Gnosis",
        duration: "Scene"
    },
    {
        name: "Howl of Assembly",
        category: "Galliard",
        renown: "Honor",
        summary: "Call other Garou to you and fortify those who heed your call",
        description: "The Garou's howl summons other werewolves and strengthens their resolve.",
        dicePool: "Presence + Performance",
        cost: "1 Gnosis",
        duration: "Scene"
    },
    {
        name: "Song of Rage",
        category: "Galliard",
        renown: "Glory",
        summary: "Grant Rage to your pack",
        description: "The Garou's song fills pack members with righteous fury.",
        dicePool: "Presence + Performance",
        cost: "1 Gnosis", 
        duration: "Scene"
    },
    {
        name: "Song of Serenity",
        category: "Galliard",
        renown: "Honor",
        summary: "Lower your pack's Rage",
        description: "The Garou's calming song reduces the Rage of pack members.",
        dicePool: "Presence + Performance",
        cost: "1 Gnosis",
        duration: "Scene"
    }
]

// Ahroun Gifts (pp. 161-162)
export const ahrounGifts: Gift[] = [
    {
        name: "Halt the Coward's Flight",
        category: "Ahroun",
        renown: "Honor",
        summary: "Slow a fleeing target",
        description: "The Garou can supernaturally slow down fleeing enemies.",
        dicePool: "Presence + Intimidation",
        cost: "1 Rage",
        duration: "Scene"
    },
    {
        name: "Rapid Shift",
        category: "Ahroun",
        renown: "Glory",
        summary: "Quickly change form",
        description: "The Garou can shift between forms with supernatural speed.",
        dicePool: "Stamina + Athletics",
        cost: "1 Rage",
        duration: "Instant"
    },
    {
        name: "Razor Claws",
        category: "Ahroun",
        renown: "Glory",
        summary: "Deal extra damage with claws",
        description: "The Garou's claws become supernaturally sharp and deadly.",
        dicePool: "Strength + Brawl",
        cost: "1 Rage",
        duration: "Scene"
    },
    {
        name: "Sense Danger",
        category: "Ahroun", 
        renown: "Wisdom",
        summary: "Detect traps, ambushes, and surprises",
        description: "The Garou can sense impending danger and hostile intent.",
        dicePool: "Wits + Awareness",
        cost: "None",
        duration: "Scene"
    }
]

// ===== TRIBE GIFTS =====

export const blackFuriesGifts: Gift[] = [
    {
        name: "Sense Wyrm",
        category: "Black Furies",
        renown: "Wisdom",
        description: "The werewolf can sense the spiritual corruption of the Wyrm in any of its forms.",
        summary: "Detect Wyrm corruption",
        dicePool: "Perception + Occult",
        cost: "None",
        duration: "Instant"
    },
    {
        name: "Rage of Gaia",
        category: "Black Furies",
        renown: "Glory",
        description: "The Fury can channel the righteous anger of Gaia herself, increasing combat prowess against enemies of nature.",
        summary: "Enhanced combat against nature's enemies",
        dicePool: "Automatic",
        cost: "1 Rage",
        duration: "Scene"
    },
    {
        name: "Curse of Aeacus",
        category: "Black Furies",
        renown: "Honor",
        description: "This gift allows the Black Fury to lay a curse upon a target, bringing them misfortune.",
        summary: "Lay a curse of misfortune",
        dicePool: "Manipulation + Occult",
        cost: "1 Gnosis",
        duration: "One week"
    }
]

export const boneGnawersGifts: Gift[] = [
    {
        name: "Cooking",
        category: "Bone Gnawers",
        renown: "Wisdom",
        description: "The werewolf can make even the most inedible substances nourishing and palatable.",
        summary: "Make anything edible",
        dicePool: "Wits + Survival",
        cost: "None",
        duration: "Per meal"
    },
    {
        name: "Urban Camouflage",
        category: "Bone Gnawers",
        renown: "Honor",
        description: "The Bone Gnawer can blend seamlessly into urban environments, becoming effectively invisible to casual observation.",
        summary: "Blend into city environments",
        dicePool: "Wits + Stealth",
        cost: "None",
        duration: "Scene"
    },
    {
        name: "Infest",
        category: "Bone Gnawers",
        renown: "Glory",
        description: "The werewolf can summon and command vermin such as rats, roaches, and flies.",
        summary: "Command urban vermin",
        dicePool: "Charisma + Animal Ken",
        cost: "1 Gnosis",
        duration: "Scene"
    }
]

export const childrenOfGaiaGifts: Gift[] = [
    {
        name: "Calm",
        category: "Children of Gaia",
        renown: "Honor",
        description: "The werewolf can soothe savage beasts and calm hostile emotions in others.",
        summary: "Pacify hostile emotions",
        dicePool: "Charisma + Expression",
        cost: "None",
        duration: "Scene"
    },
    {
        name: "Healing Touch",
        category: "Children of Gaia",
        renown: "Wisdom",
        description: "The Child of Gaia can accelerate natural healing in themselves or others.",
        summary: "Accelerate natural healing",
        dicePool: "Intelligence + Medicine",
        cost: "1 Gnosis",
        duration: "Instant"
    },
    {
        name: "Mercy",
        category: "Children of Gaia",
        renown: "Honor",
        description: "This gift allows the werewolf to calm even the most frenzied Garou or supernatural creature.",
        summary: "End frenzy in others",
        dicePool: "Charisma + Expression",
        cost: "1 Willpower",
        duration: "Instant"
    }
]

export const galestalkersGifts: Gift[] = [
    {
        name: "Wind's Whisper",
        category: "Galestalkers",
        renown: "Wisdom",
        description: "The werewolf can hear messages carried on the wind from great distances.",
        summary: "Hear distant wind-carried messages",
        dicePool: "Perception + Occult",
        cost: "None",
        duration: "Concentration"
    },
    {
        name: "Storm Walker",
        category: "Galestalkers",
        renown: "Honor",
        description: "The Garou can move through any weather without impediment and never takes damage from natural weather.",
        summary: "Immunity to weather effects",
        dicePool: "Automatic",
        cost: "None",
        duration: "Permanent"
    },
    {
        name: "Lightning Strike",
        category: "Galestalkers",
        renown: "Glory",
        description: "The werewolf can call down a bolt of lightning to strike a target.",
        summary: "Summon lightning bolt",
        dicePool: "Dexterity + Occult",
        cost: "2 Gnosis",
        duration: "Instant"
    }
]

export const ghostCouncilGifts: Gift[] = [
    {
        name: "Speak with Spirits",
        category: "Ghost Council",
        renown: "Wisdom",
        description: "The werewolf can communicate with any spirit, regardless of language barriers.",
        summary: "Universal spirit communication",
        dicePool: "Automatic",
        cost: "None",
        duration: "Permanent"
    },
    {
        name: "Wisdom of the Ancestors",
        category: "Ghost Council",
        renown: "Wisdom",
        description: "The Ghost Council member can call upon ancestral spirits for guidance and knowledge.",
        summary: "Gain ancestral wisdom",
        dicePool: "Gnosis",
        cost: "1 Gnosis",
        duration: "Next roll"
    },
    {
        name: "Summon Ancestor",
        category: "Ghost Council",
        renown: "Honor",
        description: "The werewolf can temporarily summon the spirit of a powerful ancestor to aid them.",
        summary: "Summon ancestral spirit ally",
        dicePool: "Charisma + Occult",
        cost: "2 Gnosis",
        duration: "Scene"
    }
]

export const glassWalkersGifts: Gift[] = [
    {
        name: "Control Simple Machines",
        category: "Glass Walkers",
        renown: "Wisdom",
        description: "The werewolf can mentally control simple mechanical devices without touching them.",
        summary: "Remote control of machines",
        dicePool: "Manipulation + Crafts",
        cost: "None",
        duration: "Scene"
    },
    {
        name: "Cybersenses",
        category: "Glass Walkers",
        renown: "Wisdom",
        description: "The Glass Walker can interface directly with electronic systems and networks.",
        summary: "Interface with electronics",
        dicePool: "Intelligence + Computer",
        cost: "1 Gnosis",
        duration: "Scene"
    },
    {
        name: "Techno-Spirit Summoning",
        category: "Glass Walkers",
        renown: "Honor",
        description: "The werewolf can summon and bind spirits of technology to inhabit and empower devices.",
        summary: "Empower technology with spirits",
        dicePool: "Charisma + Occult",
        cost: "2 Gnosis",
        duration: "Scene"
    }
]

export const hartWardensGifts: Gift[] = [
    {
        name: "Nature's Camouflage",
        category: "Hart Wardens",
        renown: "Wisdom",
        description: "The werewolf can blend perfectly with natural environments, becoming nearly invisible.",
        summary: "Natural camouflage",
        dicePool: "Wits + Stealth",
        cost: "None",
        duration: "Scene"
    },
    {
        name: "Plant Growth",
        category: "Hart Wardens",
        renown: "Wisdom",
        description: "The Hart Warden can accelerate plant growth, causing vegetation to flourish rapidly.",
        summary: "Accelerate plant growth",
        dicePool: "Stamina + Survival",
        cost: "1 Gnosis",
        duration: "Scene"
    },
    {
        name: "Gaia's Strength",
        category: "Hart Wardens",
        renown: "Glory",
        description: "Drawing power from the earth itself, the werewolf gains incredible physical might.",
        summary: "Draw strength from earth",
        dicePool: "Stamina + Occult",
        cost: "2 Gnosis",
        duration: "Scene"
    }
]

export const redTalonsGifts: Gift[] = [
    {
        name: "Scent of Prey",
        category: "Red Talons",
        renown: "Wisdom",
        description: "The werewolf can track any creature by scent alone, even across great distances.",
        summary: "Enhanced tracking by scent",
        dicePool: "Perception + Primal-Urge",
        cost: "None",
        duration: "24 hours"
    },
    {
        name: "Predator's Arsenal",
        category: "Red Talons",
        renown: "Glory",
        description: "The Red Talon's natural weapons become supernaturally sharp and deadly.",
        summary: "Enhance natural weapons",
        dicePool: "Stamina + Primal-Urge",
        cost: "1 Rage",
        duration: "Scene"
    },
    {
        name: "Terror of the Wilderness",
        category: "Red Talons",
        renown: "Glory",
        description: "The werewolf can instill primal fear in any creature, causing them to flee in terror.",
        summary: "Instill primal terror",
        dicePool: "Charisma + Intimidation",
        cost: "1 Gnosis",
        duration: "Scene"
    }
]

export const shadowLordsGifts: Gift[] = [
    {
        name: "Fatal Flaw",
        category: "Shadow Lords",
        renown: "Wisdom",
        description: "The werewolf can discern the greatest weakness or character flaw in any individual.",
        summary: "Perceive character flaws",
        dicePool: "Perception + Empathy",
        cost: "None",
        duration: "Instant"
    },
    {
        name: "Seizing the Edge",
        category: "Shadow Lords",
        renown: "Honor",
        description: "The Shadow Lord can steal the initiative in any social or physical confrontation.",
        summary: "Seize initiative in conflicts",
        dicePool: "Manipulation + Leadership",
        cost: "1 Willpower",
        duration: "One turn"
    },
    {
        name: "Shadow Weaving",
        category: "Shadow Lords",
        renown: "Wisdom",
        description: "The werewolf can manipulate shadows to conceal themselves or create illusions.",
        summary: "Manipulate shadows and darkness",
        dicePool: "Manipulation + Occult",
        cost: "1 Gnosis",
        duration: "Scene"
    }
]

export const silentStridersGifts: Gift[] = [
    {
        name: "Speed of Thought",
        category: "Silent Striders",
        renown: "Glory",
        description: "The werewolf can move at incredible speeds, appearing as little more than a blur.",
        summary: "Supernatural speed",
        dicePool: "Dexterity + Athletics",
        cost: "1 Gnosis",
        duration: "Scene"
    },
    {
        name: "Sense the Unnatural",
        category: "Silent Striders",
        renown: "Wisdom",
        description: "The Silent Strider can detect any supernatural presence or activity in the area.",
        summary: "Detect supernatural presences",
        dicePool: "Perception + Occult",
        cost: "None",
        duration: "Instant"
    },
    {
        name: "Gate Walker",
        category: "Silent Striders",
        renown: "Wisdom",
        description: "The werewolf can open temporary portals through the Umbra to travel vast distances instantly.",
        summary: "Create travel portals",
        dicePool: "Gnosis",
        cost: "3 Gnosis",
        duration: "Instant"
    }
]

export const silverFangsGifts: Gift[] = [
    {
        name: "Lambent Flame",
        category: "Silver Fangs",
        renown: "Glory",
        description: "The werewolf can ignite a cold, silver flame that burns only supernatural creatures and Wyrm-tainted beings.",
        summary: "Create silver flame",
        dicePool: "Gnosis",
        cost: "1 Gnosis",
        duration: "Scene"
    },
    {
        name: "Resist Toxin",
        category: "Silver Fangs",
        renown: "Honor",
        description: "The Silver Fang becomes immune to all forms of poison, disease, and toxins.",
        summary: "Immunity to toxins",
        dicePool: "Automatic",
        cost: "1 Gnosis",
        duration: "Scene"
    },
    {
        name: "Mindblock",
        category: "Silver Fangs",
        renown: "Wisdom",
        description: "The werewolf can shield their mind from mental intrusion and supernatural mental attacks.",
        summary: "Mental protection",
        dicePool: "Willpower",
        cost: "1 Willpower",
        duration: "Scene"
    }
]

export const beyondSupernaturalGifts: Gift[] = [
    // Rank 1 Gifts
    {
        name: "Leech",
        category: "Beyond Supernatural",
        renown: "Glory",
        description: "The blood drinkers are so common this close to the apocalypse that a garou pack can spend a lifetime fighting nothing else. The vampires are tough to put down and their ability to reinvigorate themselves with the blood of their enemies is enviable. And where there exists envy there exists a will to copy. And where there is a will...",
        summary: "Gain rage and gnosis from drinking mortal blood",
        dicePool: "Automatic",
        cost: "None",
        duration: "Instant"
    },
    {
        name: "Child of the Mists",
        category: "Beyond Supernatural",
        renown: "Wisdom",
        description: "The changelings and fairies sometimes complains about the inability of humans to remember them. They speak in metaphors about the mists of dream over late night drinks shared with Fiana warriors and Get of Fenris mystics. Some of those mystics listened and learned. To remain forgotten is not the same curse for the warriors of Gaia as it is for the emissaries of dreams.",
        summary: "Make delirium victims completely forget the incident",
        dicePool: "Automatic",
        cost: "1 Gnosis",
        duration: "Permanent"
    },
    {
        name: "Gun!",
        category: "Beyond Supernatural",
        renown: "Honor",
        description: "Sometimes a willworker just make changes happen in a way that makes no sense. The world is just suddenly different and everybody else have to move if they want to keep up. Some of them thinks that gnosis is the thing that makes up the reality, and some of them think that it can be used to change reality. People are already afraid of there being an active shooter in their school, workplace or nearby supermarket. This gift blends that fear with gnosis and makes it a little bit more real.",
        summary: "Make someone suddenly be holding a gun",
        dicePool: "Automatic",
        cost: "1 Gnosis",
        duration: "Instant"
    },
    // Rank 2 Gifts
    {
        name: "Dream Talons",
        category: "Beyond Supernatural",
        renown: "Glory",
        description: "The changelings and fey talk a big game about being champions of dreams and wonder. But they fall to the Wyrm like everybody else. They are just a whole lot harder to stop when they do. This little trick makes things a lot easier.",
        summary: "Turn teeth and claws into cold iron",
        dicePool: "Automatic",
        cost: "1 Rage",
        duration: "Scene"
    },
    {
        name: "Dream Portal",
        category: "Beyond Supernatural",
        renown: "Wisdom",
        description: "The dreams of mortals are potent portals to the other side, if you know how to use them right. With this gift the garou can hijack the dreams of a nearby sleeping mortal and use them to travel to the umbra without the use of a mirror.",
        summary: "Use sleeping mortal's dreams to enter umbra",
        dicePool: "Automatic",
        cost: "None",
        duration: "Instant"
    },
    {
        name: "Asp Tongue",
        category: "Beyond Supernatural",
        renown: "Glory",
        description: "The vampires come in many different types, some seem to belong to an entirely different species. The egyptian breed seems especially vicious with almost as many natural weapons as the garou, weapons that can be stolen and used against them.",
        summary: "Transform tongue into a deadly weapon",
        dicePool: "Dexterity + Brawl",
        cost: "None",
        duration: "Scene"
    },
    // Rank 3 Gifts
    {
        name: "Sterilize",
        category: "Beyond Supernatural",
        renown: "Wisdom",
        description: "When fighting witches there is nothing more important than to not leave parts of yourself behind. Blood, fur or knocked out teeth can all be used against you. This gift cleans up all evidence that you having been present making it both harder to track you and harder to use ritual magicks against you.",
        summary: "Clean up all evidence of your presence",
        dicePool: "Automatic",
        cost: "1 Gnosis",
        duration: "Instant"
    },
    {
        name: "Only Serve the Strong",
        category: "Beyond Supernatural",
        renown: "Honor",
        description: "Say what you want about the leeches but they know hierarchy. It is a twisted hierarchy of course, but everyone knows their place since they can not use their power on their superiors. By using this gift the Garou can enforce the same hierarchy.",
        summary: "Immunity to mental powers from equal/lower rank Garou",
        dicePool: "Automatic",
        cost: "1 Willpower",
        duration: "Scene"
    },
    {
        name: "Alchemy",
        category: "Beyond Supernatural",
        renown: "Wisdom",
        description: "This gift was designed to combat changelings and fey hunters who desires captured Garou as slaves or pets. It gives them a taste of their own medicine.",
        summary: "Turn silver object into cold iron",
        dicePool: "Automatic",
        cost: "1 Gnosis",
        duration: "Permanent"
    },
    // Rank 4 Gifts
    {
        name: "Mistform",
        category: "Beyond Supernatural",
        renown: "Glory",
        description: "The werewolf have stolen one of the greatest tricks from the animalistic vampires who sometimes challenge them for their territory and made it their own. The werewolf turns from flesh and blood into mist and can escape situations that should be the end of them.",
        summary: "Transform into mist form",
        dicePool: "Automatic",
        cost: "1 Rage",
        duration: "Scene or until ended"
    },
    {
        name: "Umbralreality",
        category: "Beyond Supernatural",
        renown: "Wisdom",
        description: "The changelings talk about making dreams and phantoms come alive and dance with the mortals. Their power was the key to creating this gift, for what is the spirits if not dreams and phantoms? The garou using this gift rips a hole in the umbra and let's the local spirits into the world, if only for a few moments.",
        summary: "Allow umbral spirits to act in physical world",
        dicePool: "Intelligence + Occult",
        cost: "1 Gnosis + 1 Willpower",
        duration: "Special"
    },
    {
        name: "Banality Beam",
        category: "Beyond Supernatural",
        renown: "Honor",
        description: "Bills to pay, chores to do, dreams to let go off, talent wasted in dead end jobs and cynical skepticism can all slowly break down the magics of changelings and mages. This gift weaponises that fact. It takes everything ugly and mundane and boring in life and focuses it into a laser beam of banality that unmakes dreams and makes magick impossible.",
        summary: "Project beam that inflicts banality or blocks magic",
        dicePool: "Current Willpower",
        cost: "1 Gnosis",
        duration: "Instant"
    },
    // Rank 5 Gifts
    {
        name: "Warform",
        category: "Beyond Supernatural",
        renown: "Glory",
        description: "The vampires have many different warforms. Several different clans and bloodlines have their own unique strain or type. This gift have taken the power behind them and adds that power to the werewolf Crinos form. It looks like a twisted hulked out version of the Crinos form. Simply more of everything.",
        summary: "Enhanced Crinos form with massive attribute boosts",
        dicePool: "Stamina + Primal Urge",
        cost: "1 Rage",
        duration: "Variable based on successes"
    },
    {
        name: "Reincarnation",
        category: "Beyond Supernatural",
        renown: "Wisdom",
        description: "The changelings are just fey beings hiding in mortal flesh, reincarnating over and over again. They are not so different from the garou really. But the changelings do it a lot more efficiently. This gift combines the changeling way with the arts of the spirit practiced by the garou and enables mighty garou warriors to return from the dead as soon as the moon is full.",
        summary: "Return from death by possessing kinfolk body",
        dicePool: "Automatic",
        cost: "1 Gnosis (upon death)",
        duration: "Permanent"
    },
    {
        name: "Weapons Bane",
        category: "Beyond Supernatural",
        renown: "Honor",
        description: "Mages break things. They talk and talk and talk but the essence of magic is destroying that which should not be destroyed. The garou knows that this is sometimes the only way. But this gift takes this power and channels it into destroying the sacred weapons of the garou. An inherently heretical act. But when you are alone and they come after you with their fathers grand klaives you will need it.",
        summary: "Destroy fetish weapons that hit you",
        dicePool: "Automatic",
        cost: "1 Rage",
        duration: "Instant"
    }
]

// All gifts combined for easy access
export const allGifts = [
    ...nativeGifts,
    ...ragabashGifts, 
    ...theurgeGifts,
    ...philodoxGifts,
    ...galliardGifts,
    ...ahrounGifts,
    ...blackFuriesGifts,
    ...boneGnawersGifts,
    ...childrenOfGaiaGifts,
    ...galestalkersGifts,
    ...ghostCouncilGifts,
    ...glassWalkersGifts,
    ...hartWardensGifts,
    ...redTalonsGifts,
    ...shadowLordsGifts,
    ...silentStridersGifts,
    ...silverFangsGifts,
    ...beyondSupernaturalGifts
]

// Sample gifts for backward compatibility
export const sampleGifts: Gift[] = allGifts

// Organize gifts by category for easier selection
export const giftsByCategory: Record<GiftCategory, Gift[]> = {
    "Native": nativeGifts,
    "Ragabash": ragabashGifts,
    "Theurge": theurgeGifts,
    "Philodox": philodoxGifts,
    "Galliard": galliardGifts,
    "Ahroun": ahrounGifts,
    "Black Furies": blackFuriesGifts,
    "Bone Gnawers": boneGnawersGifts,
    "Children of Gaia": childrenOfGaiaGifts,
    "Galestalkers": galestalkersGifts,
    "Ghost Council": ghostCouncilGifts,
    "Glass Walkers": glassWalkersGifts,
    "Hart Wardens": hartWardensGifts,
    "Red Talons": redTalonsGifts,
    "Shadow Lords": shadowLordsGifts,
    "Silent Striders": silentStridersGifts,
    "Silver Fangs": silverFangsGifts,
    "Beyond Supernatural": beyondSupernaturalGifts
}

// Helper functions
export const getGiftsByCategory = (category: GiftCategory): Gift[] => {
    return allGifts.filter(gift => gift.category === category)
}

export const getGiftsByRenown = (renown: RenownType): Gift[] => {
    return allGifts.filter(gift => gift.renown === renown)
}

// Check if character has gifts that might give access to rituals
export const containsRituals = (gifts: Power[]): boolean => {
    // In Werewolf, characters with spirit gifts or certain other gifts may have access to rituals
    // For now, just check if they have any gifts/powers at all
    return gifts.length > 0
}