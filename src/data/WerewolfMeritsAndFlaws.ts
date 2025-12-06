export type MeritOrFlaw = { name: string; cost: number[]; summary: string }

export type MeritsAndFlaws = {
    title: string
    merits: MeritOrFlaw[]
    flaws: MeritOrFlaw[]
}

export type BackgroundsData = {
    title: string
    backgrounds: MeritOrFlaw[]
}

export type WerewolfLoresheet = {
    title: string
    summary: string
    merits: MeritOrFlaw[]
}

// Caern Merits & Flaws
export const caernMeritsAndFlaws: MeritsAndFlaws = {
    title: "🏔️ Caern",
    merits: [
        { name: "Caern Access", cost: [1], summary: "The character can access a Caern belonging to another sept, as long as they do not interfere with them or put the caern in danger." },
        { name: "Awakened Caern", cost: [5], summary: "Add one to the caern value of the first caern the character joins or finds. This Merit does not stack, it is up to the Storyteller if other members can chip in to accumulate the five dots of this Merit." }
    ],
    flaws: [
        { name: "Caern Pariah", cost: [1], summary: "The character is unwelcome in any and all caerns on their turf. Either needing to pay to use them through dangerous jobs or acts or resorting to sneaking in, which can be disaster if they are caught. This does not apply to a caern whose sept you belong to, though it can be a reason for someone else to want you gone." }
    ]
}

// Day Job Merits
export const dayJobMerits: MeritsAndFlaws = {
    title: "💼 Day Job",
    merits: [
        { name: "Day Job", cost: [1], summary: "Efforts to hide Garou nature by using the job receive a bonus die to relevant pools, such as subterfuge or persuasion." },
        { name: "Corroborate Day Job", cost: [2], summary: "Same benefits as Day Job, but in addition the character's coworkers back up work claims. Add two dice to pools as above instead of one." }
    ],
    flaws: []
}

// Linguistics Merits & Flaws
export const linguisticsMeritsAndFlaws: MeritsAndFlaws = {
    title: "🗣️ Linguistics",
    merits: [
        { name: "Linguistics", cost: [1, 2, 3, 4, 5], summary: "Each dot of Linguistics allows the character to read, write and speak fluently in another language outside of the default two they already know, which is their birth language and the language of the setting." }
    ],
    flaws: [
        { name: "Illiterate", cost: [2], summary: "The Character cannot read nor write and their Science and Academics Skills may not go beyond 1 dot. They cannot have a speciality in them that uses modern knowledge." }
    ]
}

// Looks Merits & Flaws
export const looksMeritsAndFlaws: MeritsAndFlaws = {
    title: "👤 Looks",
    merits: [
        { name: "Clement Lupus", cost: [1], summary: "The lupus form appears more dog-like than wolf-like and no human onlookers assume they are a wolf." },
        { name: "Beautiful", cost: [2], summary: "Add one die to related Social pools" },
        { name: "Stunning", cost: [4], summary: "Add two dice to related Social pools" }
    ],
    flaws: [
        { name: "Ugly", cost: [1], summary: "Lose one die from related Social pools" },
        { name: "Repulsive", cost: [2], summary: "Lose two dice from related Social pools" },
        { name: "Stench", cost: [1], summary: "Lose one die from seduction and similar Social pools. Lose two dice from Stealth pools against opponents who can smell unless you're upwind" },
        { name: "Transparent", cost: [1], summary: "Lose one die from any pools requiring Subterfuge. You cannot gain dots in Subterfuge." }
    ]
}

// Mythic Flaws
export const mythicFlaws: MeritsAndFlaws = {
    title: "🌟 Mythic",
    merits: [],
    flaws: [
        { name: "Additional Ban", cost: [2], summary: "Choose another tribe and suffer its Ban as well as the one from your actual tribe. The Storyteller can prohibit this Flaw if the second Ban would cause problems for, or lack impact in, the chronicle." }
    ]
}

// Other Merits & Flaws
export const otherMeritsAndFlaws: MeritsAndFlaws = {
    title: "📋 Other",
    merits: [],
    flaws: [
        { name: "Knowledge Hungry", cost: [1], summary: "Your character hungers to study a topic of your choice. When your character comes across books, tutorial videos, college seminars or other methods of learning about their chosen subject, make a Willpower test at Difficulty 3 to resist chasing their obsession." }
    ]
}

// Rites Merits
export const ritesMerits: MeritsAndFlaws = {
    title: "🛠️ Rites",
    merits: [
        { name: "Improviser", cost: [1], summary: "You suffer two dice less penalties for performing Rites in suboptimal conditions" },
        { name: "Moot Caller", cost: [2], summary: "Select 5 social rites, you've mastered them. If allowed during a moot, you can assist in any rite so long as it is performed at a moot or substantially similar gathering of Garou." },
        { name: "Rite Master", cost: [3], summary: "Add one die to any pools involving Rite knowledge or performance" }
    ],
    flaws: []
}

// Safe House Merits
export const safeHouseMerits: MeritsAndFlaws = {
    title: "🏠 Safe House",
    merits: [
        { name: "Obscure Safe House", cost: [2], summary: "Efforts to locate the character and anyone with them while at the safehouse suffers a two dice penalty." },
        { name: "Secure Safe House", cost: [2], summary: "Add two dice to relevant pools related to learning of or resisting unauthorized entry." }
    ],
    flaws: []
}

// Substance Abuse Flaws
export const substanceAbuseFlaws: MeritsAndFlaws = {
    title: "🍷 Substance Abuse",
    merits: [],
    flaws: [
        { name: "Addiction", cost: [1], summary: "Unless the action is to immediately gain their drug, lose one die to all pools if in the last scene they did not indulge on the drug of their choice." },
        { name: "Hopeless Addiction", cost: [2], summary: "Unless the action is to immediately gain their drug, lose two dice to all pools if in the last scene they did not indulge on the drug of their choice." }
    ]
}

// Supernatural Situations Merits & Flaws
export const supernaturalSituationsMeritsAndFlaws: MeritsAndFlaws = {
    title: "🌙 Supernatural Situations",
    merits: [
        { name: "Moon-Quickened", cost: [1], summary: "The first time the character howls at the moon during any night, they restore one point of Superficial Willpower damage." },
        { name: "Moon-Riled", cost: [3], summary: "The first time the character howls at the moon during any night, they gain an additional point of Rage." }
    ],
    flaws: [
        { name: "Folkloric Bane", cost: [1], summary: "Take Aggravated Damage when touching a specific object. Examples: Holy water (as if fire), Weapon wielded by a devout believer in their faith, weapon adorned with moonstone or moonstone itself, etc" },
        { name: "Folkloric Block", cost: [1], summary: "Must spend Willpower or move away from a specific object. Examples: Wolfbanes or other herbs with mystic properties, Holy symbols presented by a believer, silver brandished, etc" },
        { name: "Folkloric Tell", cost: [1], summary: "The character bears an indicator that makes them appear unsettling to others, regardless if they associate it with werewolves or not. Those who feel the folkloric tell distrust them, reducing the character's dice pool by one for all Social tests other than Intimidation. Examples: People hear howls in their presence, their shadow looks wolf-like in human form and human-like in wolf form, etc" },
        { name: "Crone's Curse", cost: [2], summary: "The character appears aged well past their prime and they have one box fewer on their health tracker than they should." },
        { name: "Moon-Thrall", cost: [2], summary: "Whenever the character sees the moon for the first time of the night, they must change form to glabro or hispo with any required Rage checks made." }
    ]
}

// Allies Merits & Flaws
export const alliesMeritsAndFlaws: MeritsAndFlaws = {
    title: "🤝 Allies",
    merits: [
        { name: "Allies", cost: [1, 2, 3, 4, 5, 6], summary: "A group who will support or aid the Garou. Family, friends, or an organization that has loyalty. Build them between (• - ••••) Effectiveness and (•-•••) Reliability, the maximum amount of total points is 6. Effectiveness defines how proficient they are at a task. Reliability determines how dependable they are." }
    ],
    flaws: [
        { name: "Enemy", cost: [1, 2, 3, 4, 5], summary: "The opposite to Allies, and are rated two dots less than their effectiveness." },
        { name: "Stalkers", cost: [1], summary: "Something about the character tends to attract others who get a little bit too attached and just won't let go. Should they get rid of them, another soon appears." }
    ]
}

// Contacts Merits
export const contactsMerits: MeritsAndFlaws = {
    title: "📞 Contacts",
    merits: [
        { name: "Contacts", cost: [1, 2, 3], summary: "These are people who can get the character information, items or other things of value." }
    ],
    flaws: []
}

// Fame Merits & Flaws
export const fameMeritsAndFlaws: MeritsAndFlaws = {
    title: "⭐ Fame",
    merits: [
        { name: "Fame", cost: [1, 2, 3, 4, 5], summary: "The character might be a pop singer, actress, or other celebrity. The level of fame can subtract from tests against fans and can be used inplace of a another Trait in Social tests as allowed by the Storyteller. However, this can also be a dangerous trait as tailing a target unnoticed may become difficult with fans spotting the character." }
    ],
    flaws: [
        { name: "Infamy", cost: [2], summary: "They've done something atrocious and others know." },
        { name: "Dark Secret", cost: [1], summary: "What they've done is still a secret, except to one or two very motivated enemies." },
        { name: "Infamous Partner", cost: [1], summary: "A spouse, lover or someone else significant to the character has Infamy that will sometimes tarnish the reputation of the Garou by association." }
    ]
}

// Mask Merits & Flaws
export const maskMeritsAndFlaws: MeritsAndFlaws = {
    title: "🎭 Mask",
    merits: [
        { name: "Mask", cost: [1, 2], summary: "A fake identity that allows the Garou to keep their true selves away from the law, this might include bank accounts, a birth certificate and everything else a Garou might need to hide their identity." },
        { name: "Zeroed", cost: [1], summary: "All of the character's past self has been purged from all systems as if they never existed. The character must have a 2-dot mask in order to take this." },
        { name: "Cobbler", cost: [1], summary: "The ability to create or source out masks. Making a mask takes 3 days per dot. The character must have a 2-dot mask in order to take this." }
    ],
    flaws: [
        { name: "Serial Error", cost: [1], summary: "A mistake has been made in the characters background checks showing that they'd recently died, are on a dangerous watchlist, or otherwise likely to be called or detained by the police. This also applies to any database lookups on their identity." },
        { name: "Person of Interest", cost: [2], summary: "The Garou has become a person of interest and with their biometrics and information having been logged as a potential terrorist in agency databases." }
    ]
}

// Mentor Merits & Flaws
export const mentorMeritsAndFlaws: MeritsAndFlaws = {
    title: "👨‍🏫 Mentor",
    merits: [
        { name: "Mentor", cost: [1, 2, 3, 4, 5], summary: "Another Garou or pack of Garou who has taken the character under their wing." }
    ],
    flaws: [
        { name: "Adversary", cost: [1, 2, 3], summary: "A rival Garou who wants to do the Garou or their pack harm." }
    ]
}

// Resources Merits & Flaws
export const resourcesMeritsAndFlaws: MeritsAndFlaws = {
    title: "💰 Resources",
    merits: [
        { name: "Resources", cost: [1, 2, 3, 4, 5], summary: "An abstract form of wealth or other assets the character can use to their advantage in some situations." }
    ],
    flaws: [
        { name: "Destitute", cost: [1], summary: "No money and no home." }
    ]
}

// Spirit Pact Merits & Flaws
export const spiritPactMeritsAndFlaws: MeritsAndFlaws = {
    title: "👻 Spirit Pact",
    merits: [
        { name: "Spirit Pact", cost: [1, 2, 3, 4, 5], summary: "Loyal spirit who will aid the Garou." },
        { name: "Host", cost: [1], summary: "The spirit has a physical body it hosts. Spirits without the Companion trait still must be summoned." },
        { name: "Companion", cost: [2], summary: "The spirit can accompany the character whenever they go long as nothing prevents it such as spiritual wards. Without a physical host communication is restricted to the Umbra or other means." }
    ],
    flaws: [
        { name: "Pact Condition", cost: [1], summary: "The pact requires performing or avoiding certain actions in exchange for aid. Failing to do so angers the spirits and it does not count as an ally until penance has been made." }
    ]
}

// Backgrounds
export const backgroundsData: BackgroundsData = {
    title: "📚 Backgrounds",
    backgrounds: [
        { name: "Allies", cost: [1, 2, 3, 4, 5], summary: "Human or Garou who will help you" },
        { name: "Ancestors", cost: [1, 2, 3, 4, 5], summary: "Guidance from ancestral spirits" },
        { name: "Contacts", cost: [1, 2, 3, 4, 5], summary: "Network of information sources" },
        { name: "Fate", cost: [1, 2, 3, 4, 5], summary: "Destiny guides and protects you" },
        { name: "Fetish", cost: [1, 2, 3, 4, 5], summary: "Spirit-inhabited magical item" },
        { name: "Kinfolk", cost: [1, 2, 3, 4, 5], summary: "Human or wolf relatives who know the truth" },
        { name: "Mentor", cost: [1, 2, 3, 4, 5], summary: "Older Garou who teaches and guides you" },
        { name: "Past Life", cost: [1, 2, 3, 4, 5], summary: "Memories from previous incarnations" },
        { name: "Pure Breed", cost: [1, 2, 3, 4, 5], summary: "Strong connection to wolf or human ancestry" },
        { name: "Resources", cost: [1, 2, 3, 4, 5], summary: "Wealth and material possessions" },
        { name: "Rites", cost: [1, 2, 3, 4, 5], summary: "Knowledge of Garou rituals" },
        { name: "Totem", cost: [1, 2, 3, 4, 5], summary: "Shared pack totem spirit" }
    ]
}

// Loresheets
export const werewolfLoresheets: WerewolfLoresheet[] = [
    {
        title: "Monkeywrenchers",
        summary: "You've run with a pack — a large, decentralized, geographically disparate pack — of Garou whose collective aim is to completely fuck up the efforts of Pentex Group fronts specifically. The Monkeywrenchers share information about which fronts are active, where, and how to hamstring them.",
        merits: [
            { name: "Demagogue", cost: [1], summary: "You know how to rile up the workers. Once per story, whenever you attempt to sway a human crowd into violent action, you may add two dice to the relevant pool to do so." },
            { name: "Firebug", cost: [2], summary: "You have a knack for setting structures on fire, using only the poorly protected materials that workers often leave on site. If you can spend a number of days preparing beforehand, you can trigger a structure fire at the exact moment in the scene you choose, regardless of whether you're present." },
            { name: "Blowout Bash", cost: [3], summary: "Once per story, you can stage an event such as a benefit concert, fundraiser, protest, or rally that draws public attention to the cause or crisis you declare. Your Fame increases by 3 locally for the remainder of the session." },
            { name: "Delegator", cost: [4], summary: "You're adept at the art of shifting blame and avoiding accountability. Gain two dice to relevant pools whenever you attempt to convince someone that the results of your actions were actually set in motion by someone else. You're at -1 dice pools to Social tests with werewolves during a scene in which you make use of this effect." },
            { name: "Paper Trail", cost: [5], summary: "If documentation exists that can tie a Pentex front to a specific transgression, you can come up with it. You may use this effect once per chronicle — and either Pentex operations become aware of you, or you can give up a fellow Monkeywrencher." }
        ]
    },
    {
        title: "Project Twilight",
        summary: "Whatever you want to call it, it's a fed-funded kill-squad. You've got some dirt on the organization that you can use to influence its operations. It's really dangerous shit — you've got some sway over extremely well-funded governmental organizations that exist to stamp out the werewolf menace.",
        merits: [
            { name: "Improper Procedure", cost: [1], summary: "Once per story, you can make a minor but relevant piece of evidence (a photograph, a file folder, a DNA test result) disappear, whether as a result of luck, knowledge of process, or being childhood friends with someone on the scene." },
            { name: "Airtight Alibi", cost: [2], summary: "Once per story, you can provide (false) proof of being somewhere you weren't. The downside is that the proof is on federal departmental letterhead, and it's both classified and redacted." },
            { name: "Stolen Valor", cost: [3], summary: "Project Twilight might be an off-the-books wetwork squad, but it's an effective one, and you were instrumental in its success in taking down a notorious Unusual Threat. Once per story, you can claim credit for this kill to gain three bonus dice on a Social test. Subsequent Social tests in the same scene suffer a one-die penalty." },
            { name: "Heads Up", cost: [4], summary: "Once per chronicle you learn critical details (when, where, personnel) beforehand for any direct action that Project Twilight plans to take against your pack, if any." },
            { name: "The Red Phone", cost: [5], summary: "A well-placed somebody in the organization owes you a favor. Once per chronicle, your go-between agrees to take action on your 'anonymous tip.' You gain five dice to distribute as you like on any roll(s) involving the operation of werewolf-hunting organizations." }
        ]
    },
    {
        title: "Umbral Traveler",
        summary: "The Spirit Wilds constitute a mystery even to the Garou, whose animistic outlook makes them familiar with the spirit world but not strictly of it. To those Garou who make explorations of the Umbra their specialty, one can understand the rules of the spirit world if one knows what to look for.",
        merits: [
            { name: "Silver Steps", cost: [1], summary: "In the Umbra, the Garou leaves behind silvery footsteps that only they themselves can see, which helps them find a way back across the Gauntlet. The Difficulty to return to the physical world from the Umbra by using the Rite of Shadow Passage is reduced by 1 when you're the Rite master." },
            { name: "Web Music", cost: [2], summary: "You have observed the movements of pattern spiders, and once per scene, when their webs are present, you may pluck those strands like musical strings and draw the attention of any single pattern spider present, whether visible or otherwise." },
            { name: "Underworld Initiate", cost: [3], summary: "You're aware that there are parts of the Umbra that belong to a different kind of spirit and a different timbre of emotional resonance. You can see what can only be described as 'ghosts' when they're present in portions of the Umbra or when they haunt the physical world." },
            { name: "Spirit Sustenance", cost: [4], summary: "You are particularly attuned to the spirit world, and you suffer only Superficial Health damage when you fail to spend Willpower to stay in the Umbra for a protracted period of time." },
            { name: "Chthonic Secret", cost: [5], summary: "You're the current keeper of a monumental Umbral secret, such as the location of a powerful spirit's demesne or the hunting grounds of a legendary Garou spirit, handed down to you by the previous keeper of the secret." }
        ]
    },
    {
        title: "Renunciate of Fenris",
        summary: "Not every member of the Cult of Fenris followed their fellows down the path of hauglosk. Some broke their compact with Wolf once they saw the direction the tribe was headed and pledged themselves to another tribe.",
        merits: [
            { name: "Bootlicker", cost: [1], summary: "Even among werewolves, the Cult of Fenris has a violent reputation and a predilection for following strongman-type leaders. Once per game session, you regain one Willpower after a Garou of greater Renown than you orders you into a conflict during which you spent Willpower on a reroll." },
            { name: "Repudiated Cultist", cost: [2], summary: "Esteemed Garou were present during your renunciation of Fenris and made you a bit of an example for others. Your Renown is considered one lower than its actual value during social interactions at moots. However, if you ever have a situation that would cause you to Lose the Wolf because of a failed Rage check, you may make an additional Rage check." },
            { name: "Unbroken", cost: [3], summary: "Despite renouncing Wolf, the great spirit's patronage taught you fearlessness that persists within you. When a Gift or other supernatural effect would engender fear in you, you may gain two dice with which to resist. Should you do so, however, you lose one die to resist frenzy for the remainder of the scene." },
            { name: "Channeled Fury", cost: [4], summary: "Fenris' asperity remains strong in you. Once per scene you may opt to automatically succeed at any single Rage check to activate a Gift with a pool roll, but you also incur an extra Brutal result on that pool roll." },
            { name: "Last Howl", cost: [5], summary: "You have witnessed firsthand the effects of hauglosk, having watched the glint of fanatical zeal fall kindle in your compatriots' eyes — but not so in yours. Once per chronicle, if you mark your last hauglosk box, you may make a Rage check; if that Rage check fails, untick that last hauglosk box." }
        ]
    },
    {
        title: "The Black Spiral",
        summary: "Many Garou believe the Black Spiral to be hidden somewhere in the depths of the Umbra — probably a portion of it foully proximate to the Wyrm. Whatever the case, the Black Spiral is a place of import to the Wyrm-aligned of the like-named tribe.",
        merits: [
            { name: "Black Spiral Glyph", cost: [1], summary: "You know how to convincingly make the true Black Spiral glyph, which you might use as bait or to mislead others, but those who know you possess this ability are suspicious of you, and you suffer a -2 to all Social dice pools when interacting with those Garou, your present pack excepted." },
            { name: "Bad Company", cost: [2], summary: "You have contact, and perhaps even a sort of strange trust, with a Black Spiral Dancer, a remarkably stable fomor, or even a vampire or other supernatural creature that has some association with the foulness of the Wyrm. Once per story you can call upon this contact for information. Your Renown for social interaction drops by 2 for the remainder of the session in which you do so." },
            { name: "Spiral Cyst", cost: [3], summary: "Vile burrows or refuges scarred with the Black Spiral glyph mar the world, serving as bolt-holes for agents of the Wyrm. You know the location of one such place in your territory, and you can temporarily subvert it as a secure Safe House in which you are Zeroed while you hide there." },
            { name: "Inviolate", cost: [4], summary: "One particular Wyrm-aligned spirit refuses to harm you, even if it don't know who you are, owing to some secret pact forged in a forgotten time. As great as this arrangement may seem, if anyone sees the spirit avoid you or show deference... you get the picture." },
            { name: "Solving the Labyrinth", cost: [5], summary: "Once per story, you can attempt to persuade a Black Spiral Dancer to emancipate themselves from the horrors of Bat's patronage. To do so, you must completely isolate the subject and make a test of Intelligence or Charisma + Insight, far away from the influence of cruel spirits." }
        ]
    }
]

// Main merits and flaws array
export const meritsAndFlaws: MeritsAndFlaws[] = [
    alliesMeritsAndFlaws,
    caernMeritsAndFlaws,
    contactsMerits,
    dayJobMerits,
    fameMeritsAndFlaws,
    linguisticsMeritsAndFlaws,
    looksMeritsAndFlaws,
    maskMeritsAndFlaws,
    mentorMeritsAndFlaws,
    mythicFlaws,
    otherMeritsAndFlaws,
    resourcesMeritsAndFlaws,
    ritesMerits,
    safeHouseMerits,
    spiritPactMeritsAndFlaws,
    substanceAbuseFlaws,
    supernaturalSituationsMeritsAndFlaws
]
