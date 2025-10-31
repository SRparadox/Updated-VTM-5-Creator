import { z } from "zod"

import animalismLogo from "../resources/Rombo_Disciplines/rombo_Animalism.svg"
import auspexLogo from "../resources/Rombo_Disciplines/rombo_Auspex.svg"
import celerityLogo from "../resources/Rombo_Disciplines/rombo_Celerity.svg"
import deliriumLogo from "../resources/Rombo_Disciplines/rombo_Delirium.svg"
import dominateLogo from "../resources/Rombo_Disciplines/rombo_Dominate.svg"
import fortitudeLogo from "../resources/Rombo_Disciplines/rombo_Fortitude.svg"
import metamorphoseLogo from "../resources/Rombo_Disciplines/rombo_Metamorphosis.svg"
import obfuscateLogo from "../resources/Rombo_Disciplines/rombo_Obfuscate.svg"
import potenceLogo from "../resources/Rombo_Disciplines/rombo_Potence.svg"
import presenceLogo from "../resources/Rombo_Disciplines/rombo_Presence.svg"
import proteanLogo from "../resources/Rombo_Disciplines/rombo_Protean.svg"
import bloodSorceryLogo from "../resources/Rombo_Disciplines/rombo_BloodSorcery.svg"
import oblivionLogo from "../resources/Rombo_Disciplines/rombo_Oblivion.svg"
import { clanNameSchema, DisciplineName, disciplineNameSchema } from "./NameSchemas"

export const amalgamPrerequisiteSchema = z.object({
    discipline: disciplineNameSchema,
    level: z.number().min(1).int(),
})
export type AmalgamPrerequisite = z.infer<typeof amalgamPrerequisiteSchema>

export const powerSchema = z.object({
    name: z.string(),
    description: z.string(),
    summary: z.string(),
    dicePool: z.string(),
    level: z.number().min(1).int(),
    discipline: disciplineNameSchema,
    rouseChecks: z.number().min(0).int(),
    amalgamPrerequisites: amalgamPrerequisiteSchema.array(),
})
export type Power = z.infer<typeof powerSchema>

export const disciplineSchema = z.object({
    clans: clanNameSchema.array(),
    summary: z.string(),
    powers: powerSchema.array(),
    logo: z.string(),
})
export type Discipline = z.infer<typeof disciplineSchema>

export const disciplines: Record<DisciplineName, Discipline> = {
    animalism: {
        clans: [
            "Nosferatu", "Gangrel", "Ravnos", "Tzimisce", "Ahrimanes", "Lhiannan", "Caitiff"
        ],
        summary: "Interact with and control animals",
        logo: animalismLogo,
        powers: [
            // Level 1
            {
                name: "Bond Famulus",
                description: "Bond to an animal to make other Animalism powers more effective.",
                rouseChecks: 3,
                amalgamPrerequisites: [],
                summary: "Bond an animal companion. It will listen to basic commands, but full communication is not possible (unless you have Feral Whispers)",
                dicePool: "Charisma + Animal Ken",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Pack Mentality",
                description: "Share Fortitude to resist mental domination collectively.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }],
                summary: "Share Fortitude to resist mental domination collectively among bonded animals and yourself.",
                dicePool: "Composure + Animalism",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Sense the Beast",
                description: "Sense anger, hunger, and Beasts.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Sense hostility and supernatural traits in people.",
                dicePool: "Resolve + Animalism",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Bestial Vigilance",
                description: "The vampire's Beast remains ever-watchful, instinctively sensing danger and pulling them into action, long before they perceive who—or what—intends them harm. Add the user's Animalism rating to their Initiative.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Add Animalism rating to Initiative.",
                dicePool: "",
                level: 1,
                discipline: "animalism",
            },
            // Level 2
            {
                name: "Animal Messenger",
                description: "Send messages through your famulus.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "auspex", level: 1 }],
                summary: "Send messages through your bonded animal (famulus).",
                dicePool: "Manipulation + Animalism",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Atavism",
                description: "Force an animal into fear or rage frenzy.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Make an animal enrage or flee.",
                dicePool: "Composure + Animalism",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Bestial Wrath",
                description: "Have the beast possess an animal that has fed from you, Frenzy Test.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }],
                summary: "Have the beast possess an animal that has fed from you. Frenzy Test required.",
                dicePool: "Resolve + Animalism",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Feral Whispers",
                description: "Speak to and summon animals.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Communicate with animals. You can also call for animals and if they are nearby, they will come.",
                dicePool: "Manipulation / Charisma + Animalism",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Hold the Reins",
                description: "When the Beast snaps at the vampire, it is never a surprise. They feel it coiling and seething moments before it erupts. The struggle is no less violent, but the vampire remains just enough in control to avoid being fully consumed by it. The user never loses a turn when successfully resisting frenzy with a Willpower roll. On a win, they add the margin to their next roll.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Never lose a turn when resisting frenzy; add margin to next roll.",
                dicePool: "",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Stray Watchers",
                description: "Some Kindred employ blood bound beasts to guard their havens and alert them to supernatural threats. Infused with their master's vitae, these famuli begin to share some of their voyeuristic powers, enabling them to detect vampires, ghouls, lupines, wraiths, and other creatures of the night with just a glance from afar. When in the user's presence, or instructed to keep watch, if any supernatural being enters the famulus's immediate area, the Storyteller makes a hidden Wits + Awareness roll against a Difficulty of their choice. On a win, the famulus senses the entity and attempts to alert its master.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "auspex", level: 1 }],
                summary: "Famulus can detect supernatural beings and alert the master.",
                dicePool: "Wits + Awareness (famulus)",
                level: 2,
                discipline: "animalism",
            },
            // Level 3
            {
                name: "Augury",
                description: "Answer questions about the city using animal senses.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "auspex", level: 1 }],
                summary: "Answer questions about the city using animal senses.",
                dicePool: "Wits + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Awaken the Parasite",
                description: "Fill someone's body with parasites.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Fill someone's body with parasites.",
                dicePool: "Stamina + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Rabid Bite",
                description: "Animal bites cause frenzy.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Animal bites cause frenzy in targets.",
                dicePool: "Strength + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Animal Succulence",
                description: "Feed more effectively on animals. You can consume your famulus to temporarily gain their aspect.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Feed more effectively on animals. You can consume your famulus to temporarily gain their aspect.",
                dicePool: "",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Messenger's Command",
                description: "Convey Compel or Mesmerize through your famulus.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    { discipline: "dominate", level: 1 },
                    { discipline: "animalism", level: 2 }
                ],
                summary: "Convey Compel or Mesmerize through your famulus (requires Animal Messenger, Compel or Mesmerize).",
                dicePool: "Manipulation + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Scent of Prey",
                description: "Detect mortals who saw breaches.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Detect mortals who saw Masquerade breaches.",
                dicePool: "Resolve + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Plague of Beasts",
                description: "Send animals to harass a target.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Send animals to harass a target.",
                dicePool: "Manipulation + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Quell the Beast",
                description: "Shut down a target's drives and desires, pull vampires out of frenzy.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Shut down a target's drives and desires, pull vampires out of frenzy.",
                dicePool: "Charisma + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Savage Unleashing",
                description: "The vampire's relationship with their Beast has grown intimate enough that they can provoke it at will, unleashing a raw, destructive force upon their enemies. For the duration of the scene, the user distributes a number of dots equal to their Animalism rating across any Physical Attributes as they see fit. Then, they immediately succumb to fury frenzy. This counts as Riding the Wave.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "potence", level: 3 }],
                summary: "Distribute Animalism dots across Physical Attributes, then succumb to fury frenzy.",
                dicePool: "",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Unliving Hive",
                description: "Other Animalism powers affect insects.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "obfuscate", level: 2 }],
                summary: "Other Animalism powers affect insects.",
                dicePool: "Wits + Animalism",
                level: 3,
                discipline: "animalism",
            },
            // Level 4
            {
                name: "Feral Dialogue",
                description: "Convey complex messages via discreet howls.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Convey complex messages via discreet howls.",
                dicePool: "Manipulation + Animalism",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "Subsume the Spirit",
                description: "Possess an animal.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Possess an animal.",
                dicePool: "Resolve + Animalism",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "Sway the Flock",
                description: "Change behavior of animals in an area.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Change behavior of animals in an area.",
                dicePool: "Manipulation + Animalism",
                level: 4,
                discipline: "animalism",
            },
            // Level 5
            {
                name: "Living Menagerie",
                description: "Unify the beasts of all around.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Unify the beasts of all around.",
                dicePool: "Charisma + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Animal Dominion",
                description: "Control large groups of animals.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Control large groups of animals.",
                dicePool: "Charisma + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Coax the Bestial Temper",
                description: "Increase or decrease frenzy difficulties in an area.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Increase or decrease frenzy difficulties in an area.",
                dicePool: "Manipulation + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Drawing Out the Beast",
                description: "When you would frenzy, make someone else frenzy instead.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "When you would frenzy, make someone else frenzy instead.",
                dicePool: "Manipulation + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Spirit Walk",
                description: "Subsume the Spirit lasts indefinitely, can transfer between animals.",
                rouseChecks: 2,
                amalgamPrerequisites: [{ discipline: "animalism", level: 4 }],
                summary: "Subsume the Spirit lasts indefinitely, can transfer between animals.",
                dicePool: "Resolve + Animalism",
                level: 5,
                discipline: "animalism",
            },
        ],
    },
    auspex: {
        clans: [
            "Toreador", "Tremere", "Malkavian", "Hecata", "Salubri", "Ahrimanes", "Kiasyd", "Lamia", "Nagaraja", "Caitiff"
        ],
        summary: "Supernatural senses and premonitions",
        logo: auspexLogo,
        powers: [
            // Level 1
            { name: "Heightened Senses", description: "Augment natural senses.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Your senses become supernaturally sharp; add Auspex rating to perception rolls.", dicePool: "Wits + Auspex", level: 1, discipline: "auspex" },
            { name: "Cypher Lingua", description: "Read any language.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Read any language.", dicePool: "Intelligence + Auspex", level: 1, discipline: "auspex" },
            { name: "Sense The Starving", description: "Read the hunger value of anyone.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Read the hunger value of anyone.", dicePool: "Wits + Auspex", level: 1, discipline: "auspex" },
            { name: "Vigilance", description: "Can sense if blood has been roused.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Can sense if blood has been roused.", dicePool: "Resolve + Auspex", level: 1, discipline: "auspex" },
            { name: "Quicken Sight", description: "Perceive fast moving objects.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Perceive fast moving objects.", dicePool: "Wits + Auspex", level: 1, discipline: "auspex" },
            { name: "Sense the Unseen", description: "Detect supernatural effects.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Sense supernatural activity.", dicePool: "Wits / Resolve + Auspex", level: 1, discipline: "auspex" },
            { name: "Omnicognition", description: "In the labyrinth of modern unlife, the vampire's mind stretches to its limits, absorbing information from every direction. They can follow two conversations with perfect clarity, track multiple targets in a crowded space, or dive deep into a police report while studying an ancient grimoire, and listening to a podcast—all at once, effortlessly. The user can process information and stimuli from multiple sources simultaneously without losing any details.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Process multiple information sources simultaneously without losing details.", dicePool: "", level: 1, discipline: "auspex" },
            { name: "Typhlotic Witness", description: "A power employed quite commonly amongst the Ascetics of the Dark. Developed in their compulsions to seek out a deepest darkness, this power uses the dark itself as a form of sensation without reliance on light and even in the total absence of eyes. Some consider this ability Malison however, in that its mere knowledge thwarts one's eyes and incurs a terrible sensitivity to light. The user suffers no vision-based penalties due to darkness, supernatural or otherwise. Even without eyes or other light-sensitive organs, the user can 'see' in a cone-shaped space typical to that of one's normal vision. This form of sight can see even through thin barriers, such as masks, blindfolds, and fully blacked our glasses. Whilst in a supernatural or otherworldly darkness this sense is bolstered further, adding a +2 Dice Bonus to vision-based pools. However their vision struggles to perceive brightly lit objects and spaces, suffering penalties not unlike those normally imposed in darkness. Dim light imposes a -1 penalty, while bright light inflicts a -3 penalty or total blindness. Sudden bursts of intense light, such as a flashbang cause a point of Willpower Damage.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "See perfectly in darkness but suffer penalties in bright light.", dicePool: "Wits or Resolve + Auspex", level: 1, discipline: "auspex" },
            // Level 2
            { name: "Panacea", description: "Calm mortals and heal willpower.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }], summary: "Calm mortals and heal willpower.", dicePool: "Composure + Auspex", level: 2, discipline: "auspex" },
            { name: "Crown of The Lost Clan", description: "A psychic crown that emits supernatural radar.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 2 }], summary: "A psychic crown that emits supernatural radar.", dicePool: "Resolve + Auspex", level: 2, discipline: "auspex" },
            { name: "Premonition", description: "Receive prophetic visions.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Gain visions of the future.", dicePool: "Wits + Auspex", level: 2, discipline: "auspex" },
            { name: "Reveal Temperament", description: "Determine a person's resonance.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Determine a person's resonance.", dicePool: "Intelligence + Auspex", level: 2, discipline: "auspex" },
            { name: "Artist's Eye", description: "Inscribe information into art.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Inscribe information into art.", dicePool: "Wits + Auspex", level: 2, discipline: "auspex" },
            { name: "Aethethical Insight", description: "Gain information from a look.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Gain information from a look.", dicePool: "Wits + Auspex", level: 2, discipline: "auspex" },
            { name: "Mistfell", description: "Quickly transform into mist to escape danger.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Quickly transform into mist to escape danger.", dicePool: "Resolve + Auspex", level: 2, discipline: "auspex" },
            { name: "Unerring Pursuit", description: "Track a victim through their reflection.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Track a victim through their reflection.", dicePool: "Resolve + Auspex", level: 2, discipline: "auspex" },
            { name: "Shivers", description: "Through begrimed facades, rusted old drainpipes, and the detritus of forgotten back-alleys, the city—the genius loci—whispers. By standing still in the urban sprawl, the vampire attunes to its pulse, subconsciously piecing together information gathered through all their senses. The user rolls Intelligence + Auspex against Difficulty 3. On a win, the Storyteller gives the user a brief read on the area's aura or vibe—the residue of past events, the emotional signature of its residents, or that intangible feeling hanging in the air.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Get a read on an area's aura, vibe, and emotional history.", dicePool: "Intelligence + Auspex", level: 2, discipline: "auspex" },
            { name: "Dream Domineer", description: "This tightly-woven power of Auspex uses rudimentary telepathy to communicate with those in a lower state of consciousness, usually while they sleep, though any state of being unconscious usually suffices. The user can speak telepathically with those who are unconscious or asleep and are in their line of sight. Communicating this way allows the user to implant subtle ideas into a victim's mind, and they can use Manipulation + Auspex to change a Mortal's Resonance. Two Successes change it to a Fleeting, four or more Intense. A Critical changes it to Acute. Victims do not immediately wake, unless their mental state greatly disrupted, whether due to threats, or the probing for information, in which case victims may pass a Willpower; Difficulty 3 Test to wake. The user may also employ other Dominate powers through this power.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Communicate telepathically with sleeping/unconscious targets and change their resonance.", dicePool: "Manipulation + Auspex vs Resolve + Wits", level: 2, discipline: "auspex" },
            // Level 3
            { name: "Eyes of Beasts", description: "See through the eyes of animals.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 2 }], summary: "See through the eyes of animals.", dicePool: "Wits + Auspex", level: 3, discipline: "auspex" },
            { name: "Fatal Flaw", description: "Determine a target's weakness.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Determine a target's weakness.", dicePool: "Intelligence + Auspex", level: 3, discipline: "auspex" },
            { name: "Scry the Soul", description: "See the aura of a person's soul.", rouseChecks: 1, amalgamPrerequisites: [], summary: "See the aura of a person's soul.", dicePool: "Intelligence + Auspex", level: 3, discipline: "auspex" },
            { name: "Bloody Recollection", description: "Gain memories from drunk blood.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Gain memories from drunk blood.", dicePool: "Resolve + Auspex", level: 3, discipline: "auspex" },
            { name: "Haruspex", description: "Glean insight from recent deaths.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Glean insight from recent deaths.", dicePool: "Wits + Auspex", level: 3, discipline: "auspex" },
            { name: "Vedi Pentimento", description: "Unpaint artworks to uncover artists' truths.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Unpaint artworks to uncover artists' truths.", dicePool: "Wits + Auspex", level: 3, discipline: "auspex" },
            { name: "Share the Senses", description: "Borrow another's senses.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Borrow another's senses.", dicePool: "Resolve + Auspex", level: 3, discipline: "auspex" },
            { name: "Relive Your Unmaking", description: "By suppressing their ordinary senses and unleashing a flood of premonitory visions, the vampire begins to perceive reality just moments ahead of time. When activated, the user rolls Wits + Auspex instead of Dexterity + Athletics when dodging attacks or trying to avoid impending danger. They must also subtract their Auspex rating from all Awareness pools as the premonitory thoughts flood their mind. Vampires can't use Relive Your Unmaking and the Auspex Discipline power Heightened Senses at the same time.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Use Wits + Auspex for dodging, but subtract Auspex from Awareness pools.", dicePool: "Wits + Auspex", level: 3, discipline: "auspex" },
            { name: "Restless Mind", description: "While the vampire's body succumbs to the pull of day-sleep, they can force their mind to stay fully alert to the world around them. This allows them to remain vigilant in unsafe havens or even perform mental tasks during daylight hours. The Rouse Check allows the user's mind to remain awake for 1 hour, after which they must make a Humanity test (Difficulty 3) or succumb to the day-sleep. If they manage to resist, they can repeat the whole process until they finally fall asleep or the day ends.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Keep mind awake during day-sleep for 1 hour per Rouse Check.", dicePool: "Humanity rating", level: 3, discipline: "auspex" },
            { name: "Siphon the Mind", description: "A power of the Kiasyd that allows them to pierce into a victim's mind and rip out their skills and mastery, granting it to themselves. The user meets the eyes of their target, chooses a Mental Skill, and then activates this power, rolling Intelligence + Auspex vs the victim's Intelligence + Resolve. On a Win the victim's rating in the chosen Skill is reduced by an amount equal to the margin of successes, down to a minimum of 0, and that same Skill for the user is increased to the amount the Skill was reduced by. A Critical Win causes the victim to lose any Specialties they had in that Skill, and grants them to the user. This power does not grant the user any knowledge of what Skills the victim has, or what their ratings are.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }], summary: "Steal mental skills from a target by meeting their eyes.", dicePool: "Intelligence + Auspex", level: 3, discipline: "auspex" },
            // Level 4
            { name: "Heart Laid Bare", description: "Learn someone's desires or fears.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Learn someone's desires or fears.", dicePool: "Wits + Auspex", level: 4, discipline: "auspex" },
            { name: "What Dreams May Come", description: "Can still have some of their senses during sleep.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Can still have some of their senses during sleep.", dicePool: "Resolve + Auspex", level: 4, discipline: "auspex" },
            { name: "Spirit's Touch", description: "View impressions of past events.", rouseChecks: 1, amalgamPrerequisites: [], summary: "View impressions of past events.", dicePool: "Wits + Auspex", level: 4, discipline: "auspex" },
            { name: "Untangling the Troubled Psyche", description: "The vampire is able to heal chronic mental and emotional afflictions. They can even momentarily lift the burden of the Malkavian curse, granting fleeting peace and lucidity to their maddened minds. The user spends a scene in seclusion with their subject and rolls Composure + Auspex against the subject's Willpower. On a win, mortal subjects become permanently cured of any lingering mental or emotional ailments—phobias, depression, or any disorders. If the subject is a Malkavian, their clan curse is suppressed for one night. The strain of this process inflicts a Stain on the user.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Heal mental ailments in mortals or suppress Malkavian curse for one night.", dicePool: "Composure + Auspex", level: 4, discipline: "auspex" },
            // Level 5
            { name: "Animea Opus", description: "Can imbue disciplines into artwork.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }, { discipline: "presence", level: 2 }], summary: "Can imbue disciplines into artwork.", dicePool: "Wits + Auspex", level: 5, discipline: "auspex" },
            { name: "Clairvoyance", description: "Know everything about an area.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Know everything about an area.", dicePool: "Resolve + Auspex", level: 5, discipline: "auspex" },
            { name: "Possession", description: "Possess a human.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }], summary: "Possess a human.", dicePool: "Resolve + Auspex", level: 5, discipline: "auspex" },
            { name: "Telepathy", description: "Read minds and project thoughts.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Read minds and project thoughts.", dicePool: "Wits + Auspex", level: 5, discipline: "auspex" },
            { name: "Unburdening the Bestial Soul", description: "Remove/shield against Stains, make Dominate easier, restore Humanity.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }, { discipline: "auspex", level: 2 }], summary: "Remove/shield against Stains, make Dominate easier, restore Humanity.", dicePool: "Resolve + Auspex", level: 5, discipline: "auspex" },
        ],
    },
    celerity: {
        clans: [
            "Toreador", "Brujah", "Banu Haqim", "Caitiff"
        ],
        summary: "Move with supernatural speed",
        logo: celerityLogo,
        powers: [
            // Level 1
            { name: "Cat's Grace", description: "Always keep your balance.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Always keep your balance.", dicePool: "Dexterity + Athletics", level: 1, discipline: "celerity" },
            { name: "Fluent Swiftness", description: "Reroll Blood Surges on Dexterity.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Reroll Blood Surges on Dexterity.", dicePool: "Dexterity + Celerity", level: 1, discipline: "celerity" },
            { name: "Quickshift", description: "Speed the time of a transformation.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Speed the time of a transformation.", dicePool: "Dexterity + Celerity", level: 1, discipline: "celerity" },
            { name: "First Strike", description: "Always strike first in combat.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Always strike first in combat.", dicePool: "Dexterity + Celerity", level: 1, discipline: "celerity" },
            { name: "Surge of Alacrity", description: "Add a bonus dice to Dex or Wits during blood surge.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Add a bonus dice to Dex or Wits during blood surge.", dicePool: "Dexterity or Wits + Celerity", level: 1, discipline: "celerity" },
            { name: "Rapid Reflexes", description: "Dodge against Firearms and take minor actions for free.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Dodge against Firearms and take minor actions for free.", dicePool: "Dexterity + Celerity", level: 1, discipline: "celerity" },
            { name: "Quicksilver Fingers", description: "Even without supernatural speed, the vampire's hands and fingers are capable of moving with a hypnotic grace. Fluid and mesmerizing, they make it extremely difficult for mortal eyes to track their actions. On activation, while appearing perfectly natural, the user's hand movements become so fluid and gentle that mortal onlookers struggle to track them. They suffer a two-dice penalty to any Awareness rolls made to detect user's attempts at sleight-of-hand feats, such as lockpicking or pickpocketing.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Hand movements become fluid, giving -2 dice penalty to mortal Awareness against sleight-of-hand.", dicePool: "", level: 1, discipline: "celerity" },
            { name: "Read the Room", description: "Combining rapid, unnerving head movements with supernatural awareness, the vampire scans their surroundings continuously, making it nearly impossible to be flanked or get caught off guard. The user's head moves with unnatural speed, shifting angles in an uncanny and almost mechanical manner. They become fully aware of everything happening around them. They also suffer no penalty when attempting to block multiple melee attacks in a single turn.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Rapid head movements provide full awareness and no penalty for blocking multiple attacks.", dicePool: "", level: 1, discipline: "celerity" },
            // Level 2
            { name: "Fleetness", description: "Add Celerity to Dexterity tests.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Add Celerity to Dexterity tests.", dicePool: "Dexterity + Celerity", level: 2, discipline: "celerity" },
            { name: "Blood Knight's Devotion", description: "Move to take damage instead of someone.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Move to take damage instead of someone.", dicePool: "Dexterity + Celerity", level: 2, discipline: "celerity" },
            { name: "Measured Maneuver", description: "Reduce called shot difficulty.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Reduce called shot difficulty.", dicePool: "Dexterity + Celerity", level: 2, discipline: "celerity" },
            { name: "Rush Job", description: "Do Skill tasks faster, as minor actions.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Do Skill tasks faster, as minor actions.", dicePool: "Dexterity + Celerity", level: 2, discipline: "celerity" },
            // Level 3
            { name: "Blink", description: "Move far before taking an action.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Move far before taking an action.", dicePool: "Dexterity + Athletics", level: 3, discipline: "celerity" },
            { name: "Traversal", description: "Run across liquids or walls.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Run across liquids or walls.", dicePool: "Dexterity + Athletics", level: 3, discipline: "celerity" },
            { name: "Mercurial Beasts", description: "Share super speed with animals.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Share super speed with animals.", dicePool: "Dexterity + Celerity", level: 3, discipline: "celerity" },
            { name: "A Thousand Cuts", description: "Impair a mortal with superficial damage.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Impair a mortal with superficial damage.", dicePool: "Dexterity + Celerity", level: 3, discipline: "celerity" },
            { name: "Shifting Traversal", description: "Able to switch between three separate animals.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 3 }], summary: "Able to switch between three separate animals.", dicePool: "Dexterity + Celerity", level: 3, discipline: "celerity" },
            { name: "Preeminence", description: "See if a dice roll would succeed.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 3 }], summary: "See if a dice roll would succeed.", dicePool: "Wits + Celerity", level: 3, discipline: "celerity" },
            { name: "Weaving", description: "Add Celerity to defense against ranged.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Add Celerity to defense against ranged (Requires 'Rapid Reflexes').", dicePool: "Dexterity + Celerity", level: 3, discipline: "celerity" },
            { name: "Fist Barrage", description: "The vampire unleashes a hail of supernaturally fast blows in a spectacular, Masquerade-breaking display, making it nearly impossible for their opponent to block or parry every hit. This power works only with unarmed attacks. Upon activation, the user unleashes a flurry of blindingly fast strikes, imposing a penalty to the victim's defense roll equal to the user's Celerity rating. Trading strength and precision for speed, the attacks can only inflict Superficial Health damage, regardless of the weapons or Disciplines used.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Unleash fast unarmed strikes that impose defense penalty equal to Celerity rating.", dicePool: "", level: 3, discipline: "celerity" },
            // Level 4
            { name: "Mortifying Riposte", description: "Make a counterstrike.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 3 }], summary: "Make a counterstrike.", dicePool: "Dexterity + Celerity", level: 4, discipline: "celerity" },
            { name: "Blurred Momentum", description: "Attacks with fewer successes than Celerity automatically miss.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Attacks with fewer successes than Celerity automatically miss.", dicePool: "Dexterity + Celerity", level: 4, discipline: "celerity" },
            { name: "Draught of Elegance", description: "Give Celerity to others.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Give Celerity to others.", dicePool: "Dexterity + Celerity", level: 4, discipline: "celerity" },
            { name: "Unerring Aim", description: "Make ranged attacks at Difficulty 1.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Make ranged attacks at Difficulty 1.", dicePool: "Dexterity + Firearms", level: 4, discipline: "celerity" },
            { name: "Unseen Strike", description: "Make melee attacks at Difficulty 1.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 4 }, { discipline: "celerity", level: 3 }], summary: "Make melee attacks at Difficulty 1 (Requires Blink).", dicePool: "Dexterity + Melee", level: 4, discipline: "celerity" },
            { name: "Jitter", description: "The vampire concentrates their accelerated vitae in a single limb to—in a sudden burst—push, pull, or grab something faster than eyes can see. While this power can't be used to launch a full-blown sneak attack, it allows the vampire to imperceptibly plant an item in someone's pocket, pull a gun out of a police officer's holster, or push an unaware victim under a literal, rather than a proverbial, bus. The user's sudden maneuver is impossible to be perceived with a naked eye. No roll is required against unprepared victims, but some circumstances might call for a test or contest at the Storyteller's discretion.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 3 }], summary: "Make imperceptible limb movements faster than eyes can see.", dicePool: "Dexterity + Melee or Larceny", level: 4, discipline: "celerity" },
            // Level 5
            { name: "Fastigum", description: "Perform two separate actions via speed.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "celerity", level: 3 }], summary: "Perform two separate actions via speed (Requires Preeminence).", dicePool: "Dexterity + Celerity", level: 5, discipline: "celerity" },
            { name: "Lightning Strike", description: "Make melee attacks at Difficulty 1.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Make melee attacks at Difficulty 1.", dicePool: "Dexterity + Melee", level: 5, discipline: "celerity" },
            { name: "Split Second", description: "Retcon the ST's narration of events.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Retcon the ST's narration of events.", dicePool: "Wits + Celerity", level: 5, discipline: "celerity" },
        ],
    },
    delirium: {
        clans: [
            "Malkavian", "Caitiff"
        ],
        summary: "Distort perception and manipulate reality through madness",
        logo: deliriumLogo,
        powers: [
            // Level 1
            {
                name: "Sensory Overload",
                description: "With Sensory Overload, the Malkavian can magnify the sensory perception of their target to debilitating levels. A mere word is enough to plunge their victim into a world of overwhelming stimuli, where the faintest noise becomes deafening or the lightest touch feels like searing pain.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Overwhelms target's senses, causing penalties or complete loss of a sense",
                dicePool: "Charisma + Delirium vs Wits + Resolve",
                level: 1,
                discipline: "delirium",
            },
        ],
    },
    dominate: {
        clans: [
            "Ventrue", "Malkavian", "Tremere", "Lasombra", "Tzimisce", "Salubri", "Kiasyd", "Nagaraja", "Caitiff"
        ],
        summary: "Control other's minds",
        logo: dominateLogo,
        powers: [
            {
                name: "Cloud Memory",
                description: "Remove a few minutes of memories from a mortal's mind.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Remove a few minutes of memories.",
                dicePool: "Charisma + Dominate",
                level: 1,
                discipline: "dominate",
            },
            {
                name: "Compel",
                description: "Force someone to take one simple action.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Force someone to take one action.",
                dicePool: "Charisma + Dominate",
                level: 1,
                discipline: "dominate",
            },
            {
                name: "Slavish Devotion",
                description: "Penalize attempts to affect your thralls. (Amalgam: Fortitude 1)",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }],
                summary: "Penalize attempts to affect your thralls.",
                dicePool: "",
                level: 1,
                discipline: "dominate",
            },
            {
                name: "Admonish Snare",
                description: "A tyrannical power that turns the possibility of punishment into an actuality, should those commanded go against the user's wishes. When the user meets the eyes of another and Wins a Contest using Charisma or Manipulation, they may choose to ensnare their opponent. The next time a victim ensnared by the user refuses to carry out an action that the user commands, or they successfully resist one of the user's powers of Dominate, the user may release the Character from ensnarement, inflicting Superficial Health Damage equal to the user's Potence.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "potence", level: 1 }],
                summary: "Ensnare targets who resist commands, inflicting Potence damage when they disobey.",
                dicePool: "Charisma or Manipulation",
                level: 1,
                discipline: "dominate",
            },
            {
                name: "Mesmerize",
                description: "Impose a command that the victim must carry out, even after leaving your presence.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Impose a command.",
                dicePool: "Manipulation + Dominate",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "Dementation",
                description: "Inflict willpower damage in conversation. (Amalgam: Obfuscate 2)",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "obfuscate", level: 2 }],
                summary: "Inflict willpower damage in conversation.",
                dicePool: "Manipulation + Dominate",
                level: 2,
                discipline: "dominate",
            },
            // Added Level 2
            {
                name: "Folderol",
                description: "Amalgam: Auspex 2. Engage a target in conversation, causing them to blurt out truths they try to hide. For the scene, whenever the target attempts a Subterfuge check against the user, the user can contest with Wits + Dominate. On a success, the target blurts out the truth. The target may later roll Wits + Insight vs. the user's Charisma/Manipulation + Persuasion/Subterfuge to determine the source. If the user succeeds, they can make another Rouse Check to continue Folderol into the next scene. If the user has Rationalize, no contested check is needed to continue.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "auspex", level: 2 }],
                summary: "Force a target to blurt out truths in conversation.",
                dicePool: "Wits + Dominate vs. Composure + Subterfuge",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "Whispers of the Heart",
                description: "Target experiences the emotions and voices of their loved ones. (Amalgam: Presence 2)",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "presence", level: 2 }],
                summary: "Target experiences the emotions and voices of their loved ones.",
                dicePool: "Manipulation + Dominate",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "The Stolen Voice",
                description: "Prevent all communication from the target.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Prevent all communication.",
                dicePool: "Manipulation + Dominate",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "Domitor's Favor",
                description: "Prevent thralls from defying the bond.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Prevent thralls from defying the bond.",
                dicePool: "",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "Obnubilation",
                description: "Created by a Lasombra who was directly inspired by the dementations of a Malkavian. This ability clouds the mental acuity of the victim, ensuring their pliability, and punishing them for anything mentally taxing. The user meets the eyes of the target and mutters a phrase of unintelligible words, loud enough that the target questions what the user said. Successfully afflicting a victim with this power reduces their Intelligence Attribute by 2. Any attempts by the victim to remember specific details from Scenes during which they were affected by this power must first win a Test of Resolve + Intelligence; Difficulty equal to the user's Dominate.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }],
                summary: "Reduce target's Intelligence by 2 and impair their memory.",
                dicePool: "Manipulation + Dominate vs Resolve + Intelligence",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "Break the Weak",
                description: "Breaking the mind is a process that normally requires patience and consistent effort. However the Clan of Shadows sometimes punctuate their commands with intense physical action. Whenever the user successfully uses a power of Dominate on a victim, they may make a threatening gesticulation (i.e. throwing an object, grabbing the victim's arm, smashing a surface). That victim takes Superficial Willpower Damage equal to the user's Potence in addition to any other effects of the power used. Additionally, Weak and Average Mortals who are mentally impaired will even lose self-preservation while carrying out a command from the user's Dominate.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "potence", level: 2 }],
                summary: "Add Potence damage to Dominate powers and remove self-preservation from weak mortals.",
                dicePool: "",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "The Forgetful Mind",
                description: "Rewrite memories, implant or remove details.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Rewrite memories.",
                dicePool: "Manipulation + Dominate",
                level: 3,
                discipline: "dominate",
            },
            {
                name: "Submerged Directive",
                description: "Set a trigger for Mesmerize. (Amalgam: Mesmerize)",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "dominate", level: 2 }],
                summary: "Set a trigger for Mesmerize.",
                dicePool: "",
                level: 3,
                discipline: "dominate",
            },
            {
                name: "Lull",
                description: "A power of the Kiasyd, who are more likely to concern themselves with that of sleep and dreams due to their alleged ancestry. By meeting the gaze of another, the user can utter a command for them to sleep. Upon meeting their target's gaze, the user utters a command for them to 'sleep' or something similar, then rolls their Manipulation + Dominate vs the victim's Current Willpower. A Win for the user causes the victim to suffer a -2 Dice Penalty to their Stamina and Resolve pools. At the end of the victim's next turn, if they're Mortal they'll fall asleep, while Kindred will enter a daysleep-like state only on a total failure to resist.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "auspex", level: 2 }],
                summary: "Command targets to sleep, causing mortals to fall asleep and Kindred to become lethargic.",
                dicePool: "Manipulation + Dominate vs Current Willpower",
                level: 3,
                discipline: "dominate",
            },
            {
                name: "Ancestral Dominion",
                description: "Control your direct descendants. (Amalgam: Sorcery 3, Mesmerize)",
                rouseChecks: 2,
                amalgamPrerequisites: [{ discipline: "blood sorcery", level: 3 }, { discipline: "dominate", level: 2 }],
                summary: "Control your direct descendants.",
                dicePool: "Manipulation + Dominate",
                level: 4,
                discipline: "dominate",
            },
            {
                name: "Implant Suggestion",
                description: "Alter a person's feelings or intentions. (Amalgam: Presence 1)",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "presence", level: 1 }],
                summary: "Alter a person's feelings or intentions.",
                dicePool: "Manipulation + Dominate",
                level: 4,
                discipline: "dominate",
            },
            {
                name: "Rationalize",
                description: "Victims rationalize their behavior.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Victims rationalize their behavior.",
                dicePool: "Manipulation + Dominate",
                level: 4,
                discipline: "dominate",
            },
            // Added Level 4
            {
                name: "Mytherceria",
                description: "Amalgam: Oblivion 2. Sanctify a verbal agreement, causing misfortune to any who violate it. Cost: 1 Rouse Check per bound individual. User states the terms, makes a Rouse Check per individual, and rolls Manipulation + Oblivion for duration (each success = 24 hours). Violators take a -2 die penalty to all pools for the day, doubling each day. If a pool is reduced to 0, suffer 2 Aggravated Willpower damage. Kindred must check for Fury Frenzy. The user is equally affected if they break the pact.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "oblivion", level: 2 }],
                summary: "Sanctify a pact; violators suffer escalating penalties.",
                dicePool: "Manipulation + Oblivion",
                level: 4,
                discipline: "dominate",
            },
            {
                name: "Tabula Rasa",
                description: "Erase a victim's memory completely.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Erase a victim's memory completely.",
                dicePool: "Manipulation + Dominate",
                level: 4,
                discipline: "dominate",
            },
            {
                name: "Mythomania",
                description: "The vampire's ability to meddle with the psyche of other Kindred allows them to instill a deep, subconscious fear rooted in the Cainite folklore—a delusion so severe, it deceives not only the victim's mind but their Beast as well. This power functions the same as Dementation, but can only be used on other Kindred. A vampire that becomes Impaired by this power, temporarily gains either Mythic Flaw: () Folkloric Block or Mythic Flaw: () Folkloric Bane, as chosen by the power's user.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "obfuscate", level: 2 }],
                summary: "Instill folkloric fears in Kindred, causing them to gain temporary Mythic Flaws.",
                dicePool: "Manipulation + Dominate vs Composure + Intelligence",
                level: 4,
                discipline: "dominate",
            },
            {
                name: "Lethe's Call",
                description: "Erase entire weeks of memory, or remove one person from all memories. (Amalgam: Cloud Memory or Forgetful Mind)",
                rouseChecks: 2,
                amalgamPrerequisites: [ { discipline: "dominate", level: 1 }, { discipline: "dominate", level: 3 } ],
                summary: "Erase entire weeks of memory, or remove one person.",
                dicePool: "Manipulation + Dominate",
                level: 5,
                discipline: "dominate",
            },
            {
                name: "Mass Manipulation",
                description: "Affect groups with other powers.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Affect groups with other powers.",
                dicePool: "Manipulation + Dominate",
                level: 5,
                discipline: "dominate",
            },
            {
                name: "Terminal Decree",
                description: "Dominate commands can be suicidal.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Dominate commands can be suicidal.",
                dicePool: "Manipulation + Dominate",
                level: 5,
                discipline: "dominate",
            },
        ],
    },
    fortitude: {
        clans: [
            "Ventrue", "Gangrel", "Hecata", "Salubri", "Lamia", "Gargoyle", "Caitiff"
        ],
        summary: "Resist damage and influence",
        logo: fortitudeLogo,
        powers: [
            // Level 1
            { name: "Fluent Endurance", description: "Reroll failed Blood Surges on Stamina.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Reroll Blood Surges on Stamina.", dicePool: "Stamina + Fortitude", level: 1, discipline: "fortitude" },
            { name: "Resilience", description: "Add Fortitude rating to health levels.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Add Fortitude to health levels.", dicePool: "", level: 1, discipline: "fortitude" },
            { name: "Rancorous Redress", description: "Sacrifice flesh to empower rituals.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sacrifice flesh to empower rituals.", dicePool: "", level: 1, discipline: "fortitude" },
            { name: "Mad Grit", description: "Turn hunger into a mental defense.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Turn hunger into a mental defence.", dicePool: "Composure + Fortitude", level: 1, discipline: "fortitude" },
            { name: "Adaptability", description: "Mending damage increases Celerity. (Amalgam: Celerity 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Mending damage increases Celerity.", dicePool: "", level: 1, discipline: "fortitude" },
            { name: "Save Face", description: "Show no tells in social settings. (Amalgam: Presence 1)", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "presence", level: 1 }], summary: "Show no tells in social settings.", dicePool: "Composure + Fortitude", level: 1, discipline: "fortitude" },
            { name: "Unswayable Mind", description: "Add Fortitude to mental resistance.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Add Fortitude to mental resistance.", dicePool: "Resolve + Fortitude", level: 1, discipline: "fortitude" },
            { name: "Impassivity", description: "The vampire's visage is that of a statue—cold, emotionless, impenetrable. Though pain, fear, or rage may churn beneath the surface, their stoic exterior betrays nothing. All Insight rolls against the user get a two-dice penalty.", rouseChecks: 0, amalgamPrerequisites: [], summary: "All Insight rolls against the user get a two-dice penalty.", dicePool: "", level: 1, discipline: "fortitude" },

            // Level 2
            { name: "Earth's Perseverance", description: "Become briefly immovable.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Become briefly immovable.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Enduring Beasts", description: "Give Fortitude to animals. (Amalgam: Animalism 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Give Fortitude to animals.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            // Added Level 2
            { name: "Xantico's Refuge", description: "Amalgam: Protean 1. Upon exposure to a Fear Frenzy trigger from fire, make a Rouse Check to ignore the fear for the scene. At the end, make a Willpower Check (add Protean rating) to resist Frenzy. On failure, succumb to Fear Frenzy. Can only use once per scene unless burning superficial Willpower for another Rouse Check.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Delay Fear Frenzy from fire, then resist with bonus.", dicePool: "Willpower Check (+Protean)", level: 2, discipline: "fortitude" },
            { name: "Obdurate", description: "Become briefly immovable. (Amalgam: Potence 2)", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "potence", level: 2 }], summary: "Become briefly immovable.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Invigorating Vitae", description: "Heal living creatures. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Heal living creatures.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Sympathetic Link", description: "Spread damage across bonded famulus. (Amalgam: Animalism 1, Bond Famulus)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Spread damage across bonded famulus.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Toughness", description: "Subtract Fortitude from superficial damage before halving.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Subtract Fortitude from superficial damage before halving.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Valeren", description: "Heal other vampires' health. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Heal other vampires' health.", dicePool: "Intelligence + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Hinder Blight", description: "A single drop of the vampire's vitae is enough to halt the spreading of rot and decay, prevent kine from falling ill, or even temporarily preserve those on the brink of death. When applied to a corpse, it halts decomposition and rot for a week. On a living mortal or a ghoul, it prevents them from contracting diseases for a day. If used on a dying mortal, the Blood induces a torpor-like state, reducing their life functions to a bare minimum, and postponing death for a day. If the target was affected by Oblivion powers, the user rolls Composure + Fortitude vs the Oblivion user's Resolve + Oblivion.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Halt decay, prevent disease, or postpone death with vitae.", dicePool: "Composure + Fortitude vs Resolve + Oblivion", level: 2, discipline: "fortitude" },
            { name: "Somber Oblation", description: "Used prevalently by those in the Ombre di Cristo, this technique entwines the pangs of Oblivion's soul-withering influences as a kind of oblation. An act that miraculously mends one's flesh, restoring constitution above their blood's normal efficacy. When the user gets a 1 or a 10 on a Rouse Check to mend health, they gain a Stain, then Mend an additional point of Superficial Health for each Stain they have. If the user is Rousing the Blood to Mend Aggravated Damage and have three or more Stains, they may choose to Mend an additional point of Aggravated Health Damage instead.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "oblivion", level: 2 }], summary: "Gain Stains to enhance healing when rolling 1s or 10s on Rouse Checks.", dicePool: "", level: 2, discipline: "fortitude" },

            // Level 3
            { name: "Calloused Soul", description: "Prevent stains for one night.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Prevent stains for one night.", dicePool: "Composure + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Defy Bane", description: "Turn aggravated damage to superficial.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Turn aggravated damage to superficial.", dicePool: "Stamina + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Coiling Spite", description: "Psychic coils damage only supernatural beings. (Amalgam: Oblivion 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 3 }], summary: "Psychic coils damage only supernatural beings.", dicePool: "Resolve + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Fortify the Inner Façade", description: "Resist Auspex and similar powers.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Resist Auspex and similar powers.", dicePool: "Resolve + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Cornered Animal", description: "Give into the beast to survive. (Amalgam: Animalism 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "animalism", level: 3 }], summary: "Give into the beast to survive.", dicePool: "Stamina + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Seal the Beast's Maw", description: "Ignore Hunger for one scene.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Ignore Hunger for one scene.", dicePool: "Stamina + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Blood Tempering", description: "The vampire can increase the durability and hardness not only of their own body, but also of their surroundings and belongings. An inanimate item or object tempered with the user's vitae gains extra dice equal to their Fortitude rating to any rolls made to resist being broken or destroyed.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Grant items extra dice equal to Fortitude rating to resist damage.", dicePool: "", level: 3, discipline: "fortitude" },
            { name: "Built to Last", description: "By directing their fortified Blood into a single appendage, or their intestines, the vampire can render that part of their body virtually indestructible for a short time—immune to all damage but fire and direct sunlight. The user chooses one appendage or their intestines, then rolls Stamina + Fortitude against Difficulty 4. On a win, the chosen body part becomes impervious to damage for the remainder of the scene—it cannot be broken, torn apart, bitten into, cut off, or suffer crippling injuries. It still takes damage as normal from fire and direct sunlight.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Make one body part impervious to damage (except fire/sunlight) for the scene.", dicePool: "Stamina + Fortitude", level: 3, discipline: "fortitude" },

            // Level 4
            { name: "Draught of Change", description: "Give anyone who drinks your blood Protean Discipline dots. (Amalgam: Protean 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Give anyone who drinks blood Protean Discipline dots.", dicePool: "Stamina + Fortitude", level: 4, discipline: "fortitude" },
            { name: "Draught of Endurance", description: "Give Fortitude to others.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Give Fortitude to others.", dicePool: "Stamina + Fortitude", level: 4, discipline: "fortitude" },
            { name: "Gorgon's Scales", description: "Gain immunities based on resonance.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Gain immunities based on resonance.", dicePool: "Stamina + Fortitude", level: 4, discipline: "fortitude" },
            { name: "Meat Shields", description: "Bonuses when around weak mortals.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Bonuses when around weak mortals.", dicePool: "Stamina + Fortitude", level: 4, discipline: "fortitude" },
            { name: "Shatter", description: "Damage removed by Toughness is redirected to the attacker. (Amalgam: Toughness)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Damage removed by Toughness is redirected to the attacker.", dicePool: "Stamina + Fortitude", level: 4, discipline: "fortitude" },
            { name: "Shared Fate", description: "Through the power of the Blood, the vampire can force a thrall bound to them—whether ghoul or Kindred—to suffer harm aimed for them, and bleed in their stead. This power can be used as a reaction when the user is about to suffer damage from sources other than sunlight or fire. The user selects a thrall bound to them by Blood. No roll is required if the thrall is within close vicinity. If the thrall is further away, the user rolls Resolve + Dominate against a Difficulty of 3 or higher. On a win, the user may redirect an amount of Superficial or Aggravated damage equal to the Bond Strength to their thrall.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Redirect damage to a blood-bound thrall based on bond strength.", dicePool: "Resolve + Dominate", level: 4, discipline: "fortitude" },
            { name: "Threshold", description: "The vampire's skin becomes as resilient as a suit of tempered armor, effortlessly deflecting any blows too weak to penetrate it. Any source of Superficial damage equal to or less than the user's Fortitude rating is negated entirely. This occurs after halving the damage. Activating this power requires a Rouse Check, and maintaining it for additional turns requires a new Rouse Check each turn.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Negate Superficial damage equal to or less than Fortitude rating.", dicePool: "", level: 4, discipline: "fortitude" },

            // Level 5
            { name: "Hide of Granite", description: "Immunity to natural damage and great durability. (Amalgam: Protean 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Immunity to natural damage and great durability.", dicePool: "Stamina + Fortitude", level: 5, discipline: "fortitude" },
            { name: "Flesh of Marble", description: "Ignore one source of damage per turn.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Ignore one source of damage per turn.", dicePool: "Stamina + Fortitude", level: 5, discipline: "fortitude" },
            { name: "Prowess from Pain", description: "Add physical damage to attributes.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Add physical damage to attributes.", dicePool: "Stamina + Fortitude", level: 5, discipline: "fortitude" },
        ],
    },
    metamorphose: {
        clans: [
            "Tzimisce", "Caitiff"
        ],
        summary: "Reshape flesh and bone through supernatural control over physical form",
        logo: metamorphoseLogo,
        powers: [
            // Level 1
            {
                name: "Malleable Flesh",
                description: "The foundation of all fleshcrafting powers of Metamorphose, Malleable Flesh allows the vampire to manipulate their own or another's physical form, molding flesh, bone, cartilage, and blood as if it were clay. The vampire can reshape skin, hair, tendons, and even internal organs.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Basic fleshcrafting power that allows reshaping of bodies, evolving with discipline level",
                dicePool: "Resolve + Metamorphose",
                level: 1,
                discipline: "metamorphose"
            },
        ],
    },
    obfuscate: {
        clans: [
            "Nosferatu", "Malkavian", "Banu Haqim", "Ministry", "Ravnos", "Gargoyle", "Caitiff"
        ],
        summary: "Remain undetected",
        logo: obfuscateLogo,
        powers: [
            // Level 1
            { name: "Cloak of Shadows", description: "Go invisible, but cannot move.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Go invisible, but cannot move.", dicePool: "Wits + Obfuscate", level: 1, discipline: "obfuscate" },
            { name: "Eidolon Famulus", description: "Bonded Famulus can share Obfuscate. (Amalgam: Animalism 1, Bond Famulus)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Bonded Famulus can share Obfuscate.", dicePool: "Wits + Obfuscate", level: 1, discipline: "obfuscate" },
            { name: "Ensconce", description: "Conceal small held objects.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Conceal small held objects.", dicePool: "Dexterity + Obfuscate", level: 1, discipline: "obfuscate" },
            { name: "Varlet Quiet Chord", description: "It takes more to resist your mental powers. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "It takes more to resist your mental powers.", dicePool: "Manipulation + Obfuscate", level: 1, discipline: "obfuscate" },
            { name: "Silence of Death", description: "Silence all sounds.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Silence all sounds.", dicePool: "Wits + Obfuscate", level: 1, discipline: "obfuscate" },
            { name: "Crowd Meld", description: "When immersed in a crowd, the vampire loses all distinguishing features, blending with the mass. As long as the crowd remains intact, only mechanical or supernatural means can single out the vampire—unless someone methodically scans the crowd, one by one. The effect lasts until the user is no longer surrounded by people, or they get detected by other means.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Blend with crowds, becoming indistinguishable unless methodically scanned.", dicePool: "", level: 1, discipline: "obfuscate" },
            { name: "Ignis Fatuus", description: "The vampire conjures a brief but vivid hallucination, tricking their victim into seeing something they expect to see. The mirage might take the form of a flashed police badge, an empty briefcase appearing full of cash, or a hostage glimpsed behind a darkened window. No roll is required against mortals already inclined to believe the user. Using this power other Kindred, or suspicious mortals, requires a Manipulation + Obfuscate vs Composure + Wits roll. Those who fail see what they expect to see based on the context created by the user. The hallucination cannot be recorded or transmitted.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "presence", level: 1 }], summary: "Create brief hallucinations based on victim's expectations.", dicePool: "Manipulation + Obfuscate vs Composure + Wits", level: 1, discipline: "obfuscate" },

            // Level 2
            { name: "Cache", description: "Ensconce non-held objects. (Amalgam: Ensconce)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 1 }], summary: "Ensconce non-held objects.", dicePool: "Dexterity + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Chimerstry", description: "Create distracting hallucinations. (Amalgam: Presence 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 1 }], summary: "Create distracting hallucinations.", dicePool: "Manipulation + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Doubletalk", description: "Hide a message in your words. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Hide a message in your words.", dicePool: "Manipulation + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Ghost's Passing", description: "Your animals leave no tracks or traces. (Amalgam: Animalism 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Your animals leave no tracks or traces.", dicePool: "Wits + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Assailing Beast of Torment", description: "Shape shadows into the Beast animal. (Amalgam: Animalism 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "animalism", level: 2 }], summary: "Shape shadows into the Beast animal.", dicePool: "Wits + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Ghost Note", description: "Creates false noises. (Amalgam: Presence 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Creates false noises.", dicePool: "Manipulation + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "The Shape", description: "Distorts divination and footage of user. (Amalgam: Auspex 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Distorts divination and footage of user.", dicePool: "Manipulation + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Unseen Passage", description: "Go invisible and move around.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Go invisible and move around.", dicePool: "Wits + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Ventriloquism", description: "Project your voice to one person only. (Amalgam: Auspex 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Project your voice to one person only.", dicePool: "Manipulation + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Hush", description: "Through mere touch, the vampire creates an aura of impenetrable silence between themselves and their target, shielding both from being overheard by outside parties. The user activates this power by touching their target. Each additional target requires a separate activation. Any verbal communication between the user and affected targets cannot be overheard by outsiders. Attempts to read lips suffer a dice penalty equal to the user's Obfuscate rating. Only vampires with the Auspex power Sense the Unseen may attempt to detect or overhear the communication. The power lasts as long as the user maintains physical contact with their targets.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 1 }], summary: "Create aura of silence for private communication through touch.", dicePool: "Composure + Obfuscate vs Wits + Auspex", level: 2, discipline: "obfuscate" },

            // Level 3
            { name: "Guise of the Departed", description: "Take a corpse's appearance. (Amalgam: Oblivion 1)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Take a corpse's appearance.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            // Added Level 3
            { name: "Unliving Statue", description: "Amalgam: Fortitude 3. Stand still and make a Rouse Check to become indistinguishable from stone or masonry, blending into the environment. Remain aware and can use Disciplines that don't require movement or speech. Sunlight does not harm you, but you enter daysleep at daybreak. Sense the Unseen can detect you with a contested roll. Duration: Indefinite until you revert with another Rouse Check.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 3 }], summary: "Become a living statue, immune to sunlight while still.", dicePool: "N/A (Sense the Unseen: Wits + Auspex vs. Resolve + Obfuscate)", level: 3, discipline: "obfuscate" },
            { name: "Fata Morgana", description: "Create elaborate hallucinations. (Amalgam: Presence 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Create elaborate hallucinations.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Ghost in the Machine", description: "Obfuscate affects technology.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Obfuscate affects technology.", dicePool: "Wits + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mask of a Thousand Faces", description: "Appear visible but unremarkable.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Appear visible but unremarkable.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mask of Isolation", description: "Apply Mask of 1000 to a person who doesn't know about it. (Amalgam: Dominate 1, Mask of 1000)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }, { discipline: "obfuscate", level: 3 }], summary: "Apply Mask of 1000 to a person who doesn't know about it.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mental Maze", description: "Prevent someone from perceiving any exits or means of escape. (Amalgam: Dominate 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Prevent someone from perceiving any exits or means of escape.", dicePool: "Charisma + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mask of Narcissus", description: "Project their appearance onto another. (Amalgam: Presence 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 3 }], summary: "Project their appearance onto another.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mask of a Thousand Pets", description: "Mask the true appearance of an animal as something harmless. (Amalgam: Protean 1+ and Skin Taker, Shapechange or Metamorphosis)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Mask the true appearance of an animal as something harmless.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mind Masque", description: "Deceive Auspex. (Amalgam: Dominate 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Deceive Auspex.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },

            // Level 4
            { name: "Seclusion", description: "Prevent a victim from perceiving anyone. (Amalgam: Dominate 1)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Prevent a victim from perceiving anyone.", dicePool: "Manipulation + Obfuscate", level: 4, discipline: "obfuscate" },
            { name: "Conceal", description: "Conceal objects up to house-sized. (Amalgam: Auspex 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "auspex", level: 3 }], summary: "Conceal objects up to house-sized.", dicePool: "Manipulation + Obfuscate", level: 4, discipline: "obfuscate" },
            { name: "Vanish", description: "Disappear even while directly observed. (Amalgam: Cloak of Shadows)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 1 }], summary: "Disappear even while directly observed.", dicePool: "Wits + Obfuscate", level: 4, discipline: "obfuscate" },
            { name: "Wake of Nightmares", description: "By making an additional Rouse Check, the user can infuse one of their Presence powers—Awe, Daunt, Lure, Entrancement, or Dread Gaze—into the illusions woven with Fata Morgana, making them utterly terrifying or irresistibly mesmerizing. All those who believe the illusion are automatically affected by the infused power. Those who attempt to disbelieve it but fail suffer Superficial Willpower damage equal to the difference between their successes and the user's successes. If the illusion portrays the victim's deepest fear or desire, they remove two dice from their pool when attempting to resist.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 3 }, { discipline: "obfuscate", level: 3 }], summary: "Infuse Presence powers into Fata Morgana illusions, making them terrifying or mesmerizing.", dicePool: "Same as Fata Morgana", level: 4, discipline: "obfuscate" },

            // Level 5
            { name: "Cloak the Gathering", description: "Affect groups with Obfuscate.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Affect groups with Obfuscate.", dicePool: "Wits + Obfuscate", level: 5, discipline: "obfuscate" },
            { name: "Imposter's Guise", description: "Appear as a specific individual. (Amalgam: Mask of 1000)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Appear as a specific individual.", dicePool: "Manipulation + Obfuscate", level: 5, discipline: "obfuscate" },
        ],
    },
    potence: {
        clans: [
            "Nosferatu", "Brujah", "Lasombra", "Caitiff"
        ],
        summary: "Gain supernatural strength",
        logo: potenceLogo,
        powers: [
            // Level 1
            { name: "Fluent Strength", description: "Reroll Blood Surges on Strength.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Reroll Blood Surges on Strength.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
            { name: "Lethal Body", description: "Unarmed attacks do aggravated damage to mortals.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Unarmed attacks do agg to mortals.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
            { name: "Surge of Tenacity", description: "Buffs Blood Surge.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Buffs Blood Surge.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
            { name: "Reckless Berserker", description: "Beast powered attack at the cost of self-preservation. (Amalgam: Protean 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Beast powered attack at the cost of self-preservation.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
            { name: "Soaring Leap", description: "Jump enormous distances.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Jump enormous distances.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
            { name: "Burrowing", description: "Using only their bare hands and feet, the vampire can claw through natural terrain with ease, allowing them to dig tunnels, hide objects, or even bury themselves. This power functions only on soft surfaces such as soil, sand, or grass. If the user spends an entire scene to dig, no roll is required. To burrow completely underground in a single turn, the user rolls Strength + Survival against Difficulty 3. Once underground, the vampire may continue tunneling with additional rolls at the Storyteller's discretion.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Claw through natural terrain to dig tunnels or bury yourself.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
            { name: "Merciless Sway", description: "The Lasombra are nothing if not pragmatic to the point of unfairness, exploiting every path to dominance and power. This power, developed by especially tyrannical Sires, imprints the fear of physical might into the Lasombra's commanding powers of the blood, allowing one to be inhumanly strong of arm and authority, even when their talent in dominating the will in others is lacking. When using Dominate on a victim that has been damaged by the user, the user may roll their Potence in place of Dominate for any needed pools.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Use Potence instead of Dominate against victims you've damaged.", dicePool: "", level: 1, discipline: "potence" },

            // Level 2
            { name: "Prowess", description: "Add Potence to damage dealt.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Add Potence to damage dealt.", dicePool: "Strength + Potence", level: 2, discipline: "potence" },
            { name: "Teeth Knight's Vehemence", description: "Coats weapon with Oblivion. (Amalgam: Oblivion 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 2 }], summary: "Coats weapon with Oblivion.", dicePool: "Strength + Potence", level: 2, discipline: "potence" },
            { name: "Wild Strike", description: "Enter a trance that allows to attack multiple targets. (Amalgam: Reckless Berserker)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 1 }], summary: "Enter a trance that allows to attack multiple targets.", dicePool: "Strength + Potence", level: 2, discipline: "potence" },
            { name: "Relentless Grasp", description: "Add Potence to holding onto things.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Add Potence to holding onto things.", dicePool: "Strength + Potence", level: 2, discipline: "potence" },
            { name: "Lockjaw", description: "Though long dead, the vampire's jaw muscles and tendons can tighten like a steel vice, crushing anything caught between their razor-sharp teeth with the force of a hydraulic press. When activated, the user's bite attacks deal three Aggravated Health damage instead of the default two. Additionally, the bite ignores one level of armor per Potence level of the user. The user can also attempt to gnaw through durable objects, such as metal bars or chains. To do so, the user rolls Resolve + Potence against Difficulty depending on the object's material: 2 for bone, 3 for wood, 4 for steel and concrete, etc.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Bite deals 3 Aggravated damage and ignores armor.", dicePool: "Resolve + Potence", level: 2, discipline: "potence" },
            { name: "Serpentine Constriction", description: "The vampire crushes bones and ruptures internal organs by tightly coiling around their victim in a deadly, unrelenting, snake-like grip that only intensifies with their every desperate struggle. While grappling a target, the user may activate this power to constrict their body with inhuman force. The victim suffers Superficial Health damage equal to the margin of the grappling contest roll. Once activated, this damage recurs each turn the grapple is maintained. The user can still perform other actions during their turn, as allowed by the grappling rules.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Constrict grappled victims, dealing recurring damage each turn.", dicePool: "Strength + Survival", level: 2, discipline: "potence" },
            { name: "Drowned Knight's Devastation", description: "An old power of the blood. Created by the Knights of St. Adjutor long before they swore their oaths of civility. This technique became known as proud and relentless, requiring opponents to fight earnestly in open combat. While active, the user adds half their Potence in bonus dice (rounded up) to Strength-based attacks made in contest with those rolling to evade the user. If those attempting to evade the user have added a Discipline to their pools to do so, the user instead adds their full Potence in bonus dice.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 2 }], summary: "Add bonus Potence dice to attacks against evasive opponents.", dicePool: "", level: 2, discipline: "potence" },

            // Level 3
            { name: "Brutal Feed", description: "Drain a person in seconds.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Drain a person in seconds.", dicePool: "Strength + Potence", level: 3, discipline: "potence" },
            { name: "Spark of Rage", description: "Add Potence to rolls to induce rage. (Amalgam: Presence 3)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 3 }], summary: "Add Potence to rolls to induce rage.", dicePool: "Strength + Potence", level: 3, discipline: "potence" },
            { name: "Uncanny Grip", description: "Hold onto any surface.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Hold onto any surface.", dicePool: "Strength + Potence", level: 3, discipline: "potence" },
            { name: "Wrecker", description: "Double Potence to destroy things. (Amalgam: Prowess)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 2 }], summary: "Double Potence to destroy things.", dicePool: "Strength + Potence", level: 3, discipline: "potence" },
            { name: "Dead Lift", description: "Fortified by their vitae, the vampire's thigh, gluteal, and abdominal muscles contract with inhuman force, allowing them to lift and hurl objects many times their own body weight—such as a steel construction beam, the lid of a stone sarcophagus, or even the rear of an armored vehicle. The user counts their Potence rating twice when using Prowess for feats of strength involving the lifting and throwing of inanimate objects.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 2 }], summary: "Count Potence rating twice for lifting and throwing objects.", dicePool: "As Prowess", level: 3, discipline: "potence" },
            { name: "Mortal Reminder", description: "While anyone with a talent in Potence has inhuman strength, this technique calls on the inhumanity of Oblivion itself. Strikes imprint a terrible realization into the victim's very flesh, reminding them that one day they will die, and all the strength they call upon to buy themselves more time will amount to failure in the end. When the user deals Health damage through a direct physical attack, they may activate this power. All characters damaged by that attack Mend half as much Health Damage (rounded down) as they normally would from any source. If a Character would originally only Mend a single point of Damage via Rousing the Blood, they must make an additional Rouse Check to do so.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 3 }], summary: "Attacked targets heal at half rate until dawn.", dicePool: "Variable", level: 3, discipline: "potence" },

            // Level 4
            { name: "Crash Down", description: "Crash to the ground, damaging an area. (Amalgam: Soaring Leap)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "potence", level: 1 }], summary: "Crash to the ground, damaging an area.", dicePool: "Strength + Potence", level: 4, discipline: "potence" },
            { name: "Draught of Might", description: "Give Potence to others.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Give Potence to others.", dicePool: "Strength + Potence", level: 4, discipline: "potence" },
            { name: "Exuberance", description: "Increase Potence but hurt your body.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Increase Potence but hurt your body.", dicePool: "Strength + Potence", level: 4, discipline: "potence" },
            { name: "Unstoppable Force", description: "A vampire with this power is almost impossible to stop once in motion. Drawing upon the relentless momentum of their Blood, the vampire surges forward like a battering ram—plowing through doors, barricades, and crowds alike, knocking aside anyone and anything not bolted to the ground. Upon activation, the user charges in a straight line and cannot be stopped except by their own will. Any nonstationary object or person in their path is shoved aside. Those affected roll Dexterity + Athletics against a Difficulty equal to the user's Potence rating or get knocked down.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Charge in straight line, knocking down everything in path.", dicePool: "", level: 4, discipline: "potence" },

            // Level 5
            { name: "Earthshock", description: "Create a shockwave.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Create a shockwave.", dicePool: "Strength + Potence", level: 5, discipline: "potence" },
            { name: "Fist of Caine", description: "Unarmed attacks do aggravated damage to everything.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Unarmed attacks do agg to everything.", dicePool: "Strength + Potence", level: 5, discipline: "potence" },
            { name: "Subtle Hammer", description: "Subtle attacks as minor actions.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Subtle attacks as minor actions.", dicePool: "Strength + Potence", level: 5, discipline: "potence" },
        ],
    },
    presence: {
        clans: [
            "Toreador", "Brujah", "Ventrue", "Ministry", "Ravnos", "Lhiannan", "Baali", "Caitiff"
        ],
        summary: "Supernatural appearance and vibe",
        logo: presenceLogo,
        powers: [
            // Level 1
            { name: "Awe", description: "Add Presence to Charisma.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Add Presence to Charisma.", dicePool: "Charisma + Presence", level: 1, discipline: "presence" },
            { name: "Daunt", description: "Intimidate people and ward off attacks.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Intimidate people and ward off attacks.", dicePool: "Charisma + Presence", level: 1, discipline: "presence" },
            { name: "Duress", description: "Sap the resolve of others. (Amalgam: Oblivion 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Sap the resolve of others.", dicePool: "Manipulation + Presence", level: 1, discipline: "presence" },
            { name: "Ensnared", description: "Pull on emotional strings to control foes. (Amalgam: Celerity 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Pull on emotional strings to control foes.", dicePool: "Manipulation + Presence", level: 1, discipline: "presence" },
            { name: "Scalpel Tongue", description: "Supernaturally sharp wit stuns foes. (Amalgam: Celerity 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Supernaturally sharp wit stuns foes.", dicePool: "Manipulation + Presence", level: 1, discipline: "presence" },
            { name: "Eyes of the Serpent", description: "Paralyze someone with eye contact. (Amalgam: Protean 1)", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Paralyze someone with eye contact.", dicePool: "Charisma + Presence", level: 1, discipline: "presence" },
            { name: "Lure", description: "While the vampire's presence is far more subtle and not as overtly polarizing as that of other Kindred—capable of swaying or petrifying those around them—it allows them to command the undivided attention of anyone who happens to hear them speak or perform, as if, for a fleeting moment, nothing else in the world mattered. When activated while speaking or performing, the user can captivate those around them. This effect does not alter the target's opinion of the user or their performance, but it makes looking away—or tuning out—exceptionally difficult.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Command undivided attention while speaking or performing.", dicePool: "Manipulation + Presence vs Composure + Wits", level: 1, discipline: "presence" },

            // Level 2
            { name: "Lingering Kiss", description: "Biting gives bonuses but also addiction.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Biting gives bonuses but also addiction.", dicePool: "Charisma + Presence", level: 2, discipline: "presence" },
            { name: "Kiss of The Molochim", description: "Saps the will to fight when feeding.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Saps the will to fight when feeding.", dicePool: "Charisma + Presence", level: 2, discipline: "presence" },
            { name: "Kiss of Consuming Inspiration", description: "After a kiss, victim gains an addictive inspiration. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "After a kiss, victim gains an addictive inspiration.", dicePool: "Charisma + Presence", level: 2, discipline: "presence" },
            { name: "Incite Sin", description: "Infernalist blood is like the kiss on skin. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Infernalist blood is like the kiss on skin.", dicePool: "Manipulation + Presence", level: 2, discipline: "presence" },
            { name: "Wolf Knight's Valour", description: "Inspire those around you. (Amalgam: Fortitude 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Inspire those around you.", dicePool: "Charisma + Presence", level: 2, discipline: "presence" },
            { name: "Oppressive Resonance", description: "Broadcast your resonance to others. (Amalgam: Dominate 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Broadcast your resonance to others.", dicePool: "Manipulation + Presence", level: 2, discipline: "presence" },
            { name: "Melpominee", description: "Transmit Presence through voice alone.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Transmit Presence through voice alone.", dicePool: "Charisma + Presence", level: 2, discipline: "presence" },
            { name: "Death's Wail", description: "By forcing vitae into their vocal cords, the vampire stretches them to unnatural thinness, vibrating them at incredible speed to unleash an eerie, high-pitched shriek. The resulting wave of cacophony shatters glass, ruptures eardrums, and strips those caught in its path of their will to live. The user directs their ghastly wail at a single target. Any vampires actively using the Auspex discipline power Heightened Senses get automatically affected as well. For every three successes in the margin, the victims suffer 1 point of Superficial Willpower damage. Kine also take 1 point of Superficial Health damage in addition to the Willpower damage.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Unleash high-pitched shriek that damages Willpower and Health.", dicePool: "Stamina + Presence vs Composure + Resolve", level: 2, discipline: "presence" },
            { name: "Muse's Bestowal", description: "Through their mere presence, the vampire unlocks dormant reservoirs of artistic potential in the kine around them—sparking inspiration or releasing them from the torments of creative block. The user must spend a full scene with their target—whether they tutor them, pose, perform, or become intimate is up to the player. The experience overwhelms the target with a powerful, almost religious sense of inspiration, rekindling their creative spark. For a number of nights equal to the user's Presence rating, they substitute all dice pools used to create or perform art with those of the user. Once the effects fade, the target suffers a period of severe creative burnout for the same number of nights.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Grant artistic inspiration, substituting dice pools but causing later burnout.", dicePool: "", level: 2, discipline: "presence" },

            // Level 3
            { name: "Passion Leech", description: "Consume human passions to raise your effective Humanity. (Amalgam: Auspex 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Consume human passions to raise your effective Humanity.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Clear the Field", description: "Force everyone to leave the area. (Amalgam: Dominate 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }], summary: "Force everyone to leave the area.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Dread Gaze", description: "Terrify an individual.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Terrify an individual.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Entrancement", description: "Cause infatuation.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Cause infatuation.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Thrown Voice", description: "Project voice anywhere you can see. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Project voice anywhere you can see.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Twist The Knife", description: "Deal more social damage.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Deal more social damage.", dicePool: "Manipulation + Presence", level: 3, discipline: "presence" },
            { name: "Lotus Kiss", description: "Sap the emotion of those they feed on.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sap the emotion of those they feed on.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Eternal Damnation", description: "Stops a victim's mending or healing. (Amalgam: blood sorcery 3 or oblivion 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 3 }, { discipline: "oblivion", level: 3 }], summary: "Stops a victim's mending or healing.", dicePool: "Manipulation + Presence", level: 3, discipline: "presence" },
            { name: "True Love's Face", description: "Appear as whoever the target loves. (Amalgam: Obfuscate 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Appear as whoever the target loves.", dicePool: "Manipulation + Presence", level: 3, discipline: "presence" },
            { name: "Elucidate", description: "The vampire radiates an aura of supernatural calm, wrapping the minds of nearby mortals and subtly compelling them to rationalize the inexplicable—until the terrifying becomes mundane. The user rolls Charisma + Presence against a Difficulty equal to two plus the number of victims they wish to affect. On a win, each target attempts to rationalize what they witnessed, shaping their memories into something more plausible. The user may assist this process by offering their own explanations. Victims cling to their version of events until presented with compelling evidence to the contrary.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Make mortals rationalize supernatural events as mundane.", dicePool: "Wits + Presence", level: 3, discipline: "presence" },
            { name: "Intrusive Thoughts", description: "With this power, the vampire can project a quick but vivid image directly into another person's mind. Seemingly harmless, it can inspire brilliance, or push someone toward violence—or even self-harm. The user selects a target within their line of sight and describes a still image they wish to project. No roll is required against unsuspecting mortals. Against Kindred, the user rolls Resolve + Presence vs Intelligence + Awareness. The image flashes before the target's eyes like a distant memory or a sudden idea. Some Kindred also use this power to communicate simple, non-verbal messages to their allies.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 3 }], summary: "Project vivid images into minds to inspire or influence behavior.", dicePool: "Resolve + Presence vs Intelligence + Awareness", level: 3, discipline: "presence" },

            // Level 4
            { name: "Inflame Desire", description: "Turn a desire into an obsession. (Amalgam: Obfuscate 1)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 1 }], summary: "Turn a desire into an obsession.", dicePool: "Manipulation + Presence", level: 4, discipline: "presence" },
            { name: "Irresistable Voice", description: "Dominate doesn't require eye contact. (Amalgam: Dominate 1)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Dominate doesn't require eye contact.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },
            { name: "Magnum Opus", description: "Imbue Awe or Daunt into an artwork. (Amalgam: Auspex 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "auspex", level: 3 }], summary: "Imbue Awe or Daunt into an artwork.", dicePool: "Wits + Presence", level: 4, discipline: "presence" },
            { name: "Suffuse the Edifice", description: "Apply Presence to buildings.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Apply Presence to buildings.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },
            { name: "Summon", description: "Summon a specific person.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Summon a specific person.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },
            { name: "Hell Warden", description: "Imprisons someone in an illusion. (Amalgam: Obfuscate 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Imprisons someone in an illusion.", dicePool: "Manipulation + Presence", level: 4, discipline: "presence" },
            { name: "Filigree Entourage", description: "Transfer mental damage to friends. (Amalgam: Fortitude 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Transfer mental damage to friends.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },
            { name: "Withering Presence", description: "Weaken the mental attack of another.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Weaken the mental attack of another.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },
            { name: "Wingman", description: "Apply Presence to other people.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Apply Presence to other people.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },

            // Level 5
            { name: "Fervor of A Captured Heart", description: "Utterly capture a target's heart.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Utterly capture a target's heart.", dicePool: "Charisma + Presence", level: 5, discipline: "presence" },
            { name: "Majesty", description: "Prevent all opposition and aggression.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Prevent all opposition and aggression.", dicePool: "Charisma + Presence", level: 5, discipline: "presence" },
            { name: "Star Magnetism", description: "Presence works through technology.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Presence works through technology.", dicePool: "Charisma + Presence", level: 5, discipline: "presence" },
        ],
    },
    protean: {
        clans: [
            "Gangrel", "Ministry", "Tzimisce", "Ahrimanes", "Lhiannan", "Gargoyle", "Caitiff"
        ],
        summary: "Shape your body to gain power",
        logo: proteanLogo,
        powers: [
            // Level 1
            { name: "Eyes of the Beast", description: "Transform eyes to see in darkness.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Transform eyes to see in darkness.", dicePool: "Wits + Protean", level: 1, discipline: "protean" },
            // Added Level 1
            { name: "Stone Sense", description: "Amalgam: Obfuscate 1. By touching earth or stone, gain supernatural awareness of anything in contact with that material within 5m x Protean rating. Can contest to learn more. Increases Stealth check Difficulty for those sneaking past. On failure, user knows their location.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 1 }], summary: "Sense through earth/stone, detect hidden creatures.", dicePool: "Wits + Protean (contested)", level: 1, discipline: "protean" },
            { name: "Squirm", description: "Fit through 2-inch spaces.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Fit through 2-inch spaces.", dicePool: "Dexterity + Protean", level: 1, discipline: "protean" },
            { name: "Vault Welt", description: "Store objects in skin via infusion. (Amalgam: Oblivion 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Store objects in skin via infusion.", dicePool: "Stamina + Protean", level: 1, discipline: "protean" },
            { name: "Skin Taker", description: "Temporarily transform into an animal when eating the bones.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Temporarily transform into an animal when eating the bones.", dicePool: "Stamina + Protean", level: 1, discipline: "protean" },
            { name: "Stiring Mien", description: "Superficially alter your appearance. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Superficially alter your appearance.", dicePool: "Manipulation + Protean", level: 1, discipline: "protean" },
            { name: "Weight of the Feather", description: "Become weightless.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Become weightless.", dicePool: "Dexterity + Protean", level: 1, discipline: "protean" },
            { name: "Flight", description: "Prerequisite: Fortitude 1, The Gargoyle spreads her wings and takes flight gliding and even ascending with the power of her strength and speed. Cost: Free. System: The Gargoyle can fly at her normal movement rate, modified by any active levels of Celerity during combat rounds. When flying overland as part of a travel Scene, she can move at about 20 miles per hour per level of Protean she possesses, as the crow flies; potentially allowing her to cross the Bay Area in a matter of minutes. Most Gargoyles wait to try such Masquerade breaching stunts until they've learned a few levels of Obfuscate. (Amalgam: Fortitude 1)", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }], summary: "The Gargoyle spreads her wings and takes flight.", dicePool: "Dexterity + Athletics", level: 1, discipline: "protean" },
            { name: "Persistent Form", description: "Before learning to sculpt and reshape their body at will, some Kindred first master control over their unchanged form—ensuring it never shifts without their consent. This mastery allows vampires to retain any transformation indefinitely, or to remain in animal and other forms permanently. The user can extend the duration of any Protean Discipline power for the entire night. To maintain those transformations through the day-sleep, they must make an additional Rouse Check upon waking. If someone or something attempts to forcibly alter the user's physical form, the vampire adds a number of dice equal to their Protean rating to the resist pool.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Extend Protean transformations and resist forced alterations.", dicePool: "", level: 1, discipline: "protean" },
            { name: "Siphon Vitae", description: "Every inch of the vampire's body is capable of absorbing vitae, granted that the victim's skin is broken first—with a needle, blade, fangs, or feral claws. When activated, the user is capable of feeding by absorbing blood through their exposed bare skin. Feeding this way slakes the same amount of Hunger and takes the same amount of time as a regular bite. Touch alone, however, can't subdue mortal victims like a Kiss would. If combined with the Protean power Feral Weapons, the user can slake 1 Hunger after successfully dealing damage with their claws by absorbing blood directly from the inflicted wounds.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Feed by absorbing blood through bare skin.", dicePool: "", level: 1, discipline: "protean" },

            // Level 2
            { name: "The False Sip", description: "Taste blood without being affected. (Amalgam: Fortitude 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }], summary: "Taste blood without being affected.", dicePool: "Wits + Protean", level: 2, discipline: "protean" },
            { name: "Feral Weapons", description: "Grow claws or enhance natural fangs.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Grow claws or enhance natural fangs.", dicePool: "Strength + Protean", level: 2, discipline: "protean" },
            { name: "Serpent's Kiss", description: "Inject blood with your fangs.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Inject blood with your fangs.", dicePool: "Dexterity + Protean", level: 2, discipline: "protean" },
            { name: "Three Drops Found", description: "Fake your blood being from another Clan. (Amalgam: blood sorcery 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Fake your blood being from another Clan.", dicePool: "Manipulation + Protean", level: 2, discipline: "protean" },
            { name: "Altered Assault", description: "Transform a single attack into an animal part. (Amalgam: Fortitude 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Transform a single attack into an animal part.", dicePool: "Strength + Protean", level: 2, discipline: "protean" },
            { name: "Devil's Mark", description: "Imprint your Presence discipline onto a tattoo. (Amalgam: Presence 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Imprint your Presence discipline onto a tattoo.", dicePool: "Manipulation + Protean", level: 2, discipline: "protean" },
            { name: "Body Arsenal", description: "Break your body into an arsenal of weapons. (Amalgam: Dominate 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Break your body into an arsenal of weapons.", dicePool: "Strength + Protean", level: 2, discipline: "protean" },
            { name: "Vicissitude", description: "Reshape your body in various ways. (Amalgam: Dominate 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Reshape your body in various ways.", dicePool: "Resolve + Protean", level: 2, discipline: "protean" },
            { name: "Become Immense", description: "The vampire grows in size, adding bulk and muscle mass while retaining their overall proportions. This power allows the user to increase their Size by 1 dot (to a maximum of Size 5). This increases Health by 1 and gives a +1 bonus to Strength-based dice pools. Using this power on successive turns allows the user to grow even larger, but each subsequent activation beyond the first requires spending a Willpower point. The user can have a maximum bonus to Size equal to their Protean rating. Each increase in size also imposes a -1 penalty to Dexterity-based dice pools due to clumsiness. This power lasts for one scene.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Grow in size, gaining Strength and Health but losing Dexterity.", dicePool: "Stamina + Protean", level: 2, discipline: "protean" },
            { name: "Vocal Mimicry", description: "The vampire can perfectly replicate any voice or sound they have heard before. This includes human voices, animal calls, mechanical sounds, and even music. The imitation is flawless to casual listening but may require a contested roll against observers with enhanced hearing or those familiar with the original source. With Auspex 2 or higher, the vampire can even replicate the speech patterns and verbal mannerisms of specific individuals with uncanny accuracy. This power can be maintained for an entire scene without concentration.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Perfectly mimic any voice or sound previously heard.", dicePool: "Manipulation + Protean", level: 2, discipline: "protean" },

            // Level 3
            { name: "Parasite Bore", description: "Transform flesh into parasites to infect others. (Amalgam: Oblivion 3 or blood sorcery 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 3 }, { discipline: "blood sorcery", level: 3 }], summary: "Transform flesh into parasites to infect others.", dicePool: "Stamina + Protean", level: 3, discipline: "protean" },
            { name: "Earth Meld", description: "Meld into soil.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Meld into soil.", dicePool: "Stamina + Protean", level: 3, discipline: "protean" },
            { name: "Fleshcrafting", description: "Apply Vicissitude to others. (Amalgam: Dominate 2, Vicissitude)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }, { discipline: "protean", level: 2 }], summary: "Apply Vicissitude to others.", dicePool: "Resolve + Protean", level: 3, discipline: "protean" },
            { name: "Predator's Maw", description: "Transform jaw into a deadly weapon. (Amalgam: Altered Assault or Feral Weapons)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Transform jaw into a deadly weapon.", dicePool: "Strength + Protean", level: 3, discipline: "protean" },
            { name: "Shapechange", description: "Turn into a human-sized animal.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Turn into a human-sized animal.", dicePool: "Stamina + Protean", level: 3, discipline: "protean" },
            // Added Level 3
            { name: "Visceratika", description: "Amalgam: Obfuscate 3. Make a Rouse Check and roll Resolve + Protean to merge into earth, stone, or concrete. Difficulty varies by material. While merged, move through the material, but take superficial damage per turn if stationary. Duration: Until you choose to emerge.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Merge into and move through earth/stone/concrete.", dicePool: "Resolve + Protean (variable difficulty)", level: 3, discipline: "protean" },
            { name: "Faconnage", description: "Make someone uglier when attacking. (Amalgam: Devil's Mark or Vicissitude)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Make someone uglier when attacking.", dicePool: "Manipulation + Protean", level: 3, discipline: "protean" },
            { name: "Visceral Absorption", description: "Absorb human remains into yourself. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Absorb human remains into yourself.", dicePool: "Stamina + Protean", level: 3, discipline: "protean" },
            { name: "Crimson Mist", description: "A more advanced form of mist transformation that allows the vampire to assume a crimson-tinged mist form that can cause terror in mortals and even other Kindred. While in this form, the vampire can seep through the tiniest cracks and gaps, move at supernatural speed, and is largely immune to physical harm. The frightening appearance of the blood-red mist forces viewers to make a Composure + Resolve roll (Difficulty 3) or flee in terror. The vampire can maintain this form for one scene and can reform at will during this time.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Transform into terrifying crimson mist that inspires fear.", dicePool: "Stamina + Protean", level: 3, discipline: "protean" },

            // Level 4
            { name: "Ennoia's Mastery", description: "Choose dicepools from animals to adapt.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Choose dicepools from animals to adapt.", dicePool: "Wits + Protean", level: 4, discipline: "protean" },
            { name: "Horrid Form", description: "Turn into a monstrosity. (Amalgam: Dominate 2, Vicissitude)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }, { discipline: "protean", level: 2 }], summary: "Turn into a monstrosity.", dicePool: "Strength + Protean", level: 4, discipline: "protean" },
            { name: "Draught of Beast & Beauty", description: "Change the appearance of those who drink the user's blood. (Amalgam: Obfuscate 2 or Presence 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 2 }, { discipline: "presence", level: 2 }], summary: "Change the appearance of those who drink the user's blood.", dicePool: "Manipulation + Protean", level: 4, discipline: "protean" },
            { name: "Metamorphosis", description: "Turn into any animal. (Amalgam: Shapechange)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 3 }], summary: "Turn into any animal.", dicePool: "Stamina + Protean", level: 4, discipline: "protean" },

            // Level 5
            { name: "Bloodform", description: "Transform wholly or partially into blood. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Transform wholly or partially into blood.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "Heart of Darkness", description: "Remove your heart to prevent staking. (Amalgam: Fortitude 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Remove your heart to prevent staking.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "Master of Forms", description: "Transform into unlimited animal types. (Amalgam: Shapechange)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 3 }], summary: "Transform into unlimited animal types.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "Mist Form", description: "Turn into a cloud of mist.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Turn into a cloud of mist.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            // Added Level 5
            { name: "Wrath of Xiuhcoatl", description: "Prerequisite: Ezpitzal. Amalgam: Fortitude 3. Project turquoise flames from your body for a scene. Range: 2m x Blood Potency. Each blast requires concentration and a roll of Stamina + Protean vs. Dexterity + Athletics. Margin of success = Aggravated Damage + Blood Potency. Vampires witnessing or taking damage must check for Fear Frenzy (Diff 3). Flammable materials ignite. Immune to self-inflicted fire.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 3 }], summary: "Project supernatural fire blasts, causing Aggravated Damage.", dicePool: "Stamina + Protean vs. Dexterity + Athletics", level: 5, discipline: "protean" },
            { name: "One with the Land", description: "Experience everything in a one-mile radius while melded. (Amalgam: Animalism 2, Earth Meld)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "animalism", level: 2 }, { discipline: "protean", level: 3 }], summary: "Experience everything in a one-mile radius while melded.", dicePool: "Wits + Protean", level: 5, discipline: "protean" },
            { name: "Mitosis", description: "Create a horrifying creature from your flesh. (Amalgam: Dominate 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Create a horrifying creature from your flesh.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "Self-Made Throngs", description: "Can transform into a pack of animals. (Amalgam: Animalism 1)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Can transform into a pack of animals.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "The Unfettered Heart", description: "Prevent staking or get free from it.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Prevent staking or get free from it.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
        ],
    },
    "blood sorcery": {
        clans: [
            "Tremere", "Banu Haqim", "Baali", "Caitiff"
        ],
        summary: "Use blood-related magic and rituals",
        logo: bloodSorceryLogo,
        powers: [
            // Level 1
            { name: "Corrosive Vitae", description: "Corrode inanimate material.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Corrode inanimate material.", dicePool: "Stamina + Blood Sorcery", level: 1, discipline: "blood sorcery" },
            { name: "Daimonion", description: "Infernalism, allows for the communication with a bonded Demonic Entity. (Amalgam: Oblivion 1, Baali?)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Infernalism, allows for the communication with a bonded Demonic Entity.", dicePool: "Resolve + Blood Sorcery", level: 1, discipline: "blood sorcery" },
            { name: "Koldunic Sorcery", description: "Bond with an element, see through it. (Amalgam: Tzimisce?)", rouseChecks: 1, amalgamPrerequisites: [], summary: "Bond with an element, see through it.", dicePool: "Wits + Blood Sorcery", level: 1, discipline: "blood sorcery" },
            { name: "Natural Ritualist", description: "Learn rituals for cheaper and faster.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Learn rituals for cheaper and faster.", dicePool: "Intelligence + Blood Sorcery", level: 1, discipline: "blood sorcery" },
            { name: "Shape the Sanguine Sacrament", description: "Sculpt blood into any desired shape.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sculpt blood into any desired shape.", dicePool: "Manipulation + Blood Sorcery", level: 1, discipline: "blood sorcery" },
            { name: "A Taste for Blood", description: "Get information from blood.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Get information from blood.", dicePool: "Resolve + Blood Sorcery", level: 1, discipline: "blood sorcery" },

            // Level 1 - Added
            { name: "Orthostasis", description: "A simple but highly effective trick involving the manipulation of the blood-brain barrier. Can create dizziness or vertigo in a target, or subtly affect their thought processes for social advantage. Cost: 1 Rouse Check. Dice Pools: Manipulation + Blood Sorcery vs. either the target’s Composure + Stamina or Composure + Wits. System: User makes a roll to inflict vertigo (-2 Dodge/Defense) or mental fog (-2 Social Combat pools using Mental/Social Attributes) for minutes equal to margin of success. Victim can identify user with a successful Intelligence + Occult vs. Wits + Subterfuge. Duration: Minutes equal to margin of success.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Inflict vertigo or mental fog for a few minutes.", dicePool: "Manipulation + Blood Sorcery vs. Composure + Stamina or Wits", level: 1, discipline: "blood sorcery" },

            // Level 2
            { name: "Blood's Curse", description: "Increase others' Bane Severity.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Increase others' Bane Severity.", dicePool: "Manipulation + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Extinguish Vitae", description: "Make another vampire hungrier.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Make another vampire hungrier.", dicePool: "Resolve + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Agatiyon Famulus", description: "Bind more power and intelligence to a bonded Famulus. (Amalgam: Animalism 1, Bond Famulus)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Bind more power and intelligence to a bonded Famulus.", dicePool: "Wits + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Gnaw", description: "Summon a swarm from oblivion to attack.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Summon a swarm from oblivion to attack.", dicePool: "Manipulation + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Sealing Antiphon", description: "Seals another's power with a hymn.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Seals another's power with a hymn.", dicePool: "Charisma + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Sanguine Bond", description: "Transfer damage mended to a victim.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Transfer damage mended to a victim.", dicePool: "Stamina + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Scour Secrets", description: "Locate particular information in text.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Locate particular information in text.", dicePool: "Intelligence + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Blood Dart", description: "The vampire shapes and solidifies their vitae into a hardened shard and hurls it at their unsuspecting victim with lethal precision. The dart is a range weapon with a +1 modifier to damage, which dissolves into a puddle of blood after one turn. To hit their target, the user rolls Dexterity + Athletics vs the victim's Dexterity + Athletics. Successful hits can deliver Blood Sorcery poisons, such as Scorpion's Touch and Baal's Caress.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Shape vitae into a hardened dart that can deliver poisons.", dicePool: "Dexterity + Athletics", level: 2, discipline: "blood sorcery" },
            { name: "Haruspicy", description: "Derived from the ancient rites of augury, where entrails were read for omens, this rare Thaumaturgical talent allows the initiated Kindred to weave blood, flesh, and bone into Blood Sorcery rituals. At the Storyteller's discretion, the user can substitute Ritual ingredients with bones, tissues, and internal organs of humanoid origin—a cranium may replace a silver bowl, an eye can serve as a mirror, a torn tendon might stand in for a white ribbon, or a broken rib for a ceremonial dagger. Ingredients harvested from powerful and rare specimen add a one die bonus to the Ritual pool.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Substitute ritual ingredients with humanoid organs and bones.", dicePool: "", level: 2, discipline: "blood sorcery" },

            // Level 2 - Added
            { name: "Seek the Inner Truth", description: "Discern secrets from blood or vitae. Cost: 1 Rouse Check. Dice Pools: Wits + Blood Sorcery. System: Touching or tasting blood, roll Wits + Blood Sorcery at Difficulty 3 (add Blood Potency if vitae). On success, learn a closely-kept secret; critical success may reveal even hidden or forgotten truths. Duration: Instant.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Discern secrets from blood or vitae.", dicePool: "Wits + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "The Small Death", description: "Send a sleeping mortal into a deathlike coma. Amalgam: Obfuscate 2. Cost: 1 Rouse Check. Dice Pools: Composure + Blood Sorcery. System: Target must be asleep/unconscious. Roll Composure + Blood Sorcery at Difficulty equal to target's Stamina. On success, target enters a coma indistinguishable from death for days equal to successes (min 24h). Cannot be awakened by normal means. Duration: Days equal to successes.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 2 }], summary: "Send a sleeping mortal into a deathlike coma.", dicePool: "Composure + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Land God's Stride", description: "Navigate a locality with uncanny luck by bonding to local ley lines. Cost: 1 Rouse Check. System: Spill a Rouse Check's worth of blood on the ground to bond with the area. For the scene, add bonus dice equal to Blood Sorcery rating to Streetwise, Awareness, Investigation, or Survival checks. Does not reveal supernatural features. Duration: One scene.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Navigate a locality with uncanny luck.", dicePool: "N/A", level: 2, discipline: "blood sorcery" },
            { name: "Wield the Sanguine Sacrament", description: "Transform blood into a supernatural weapon or projectile. Cost: 1 Rouse Check (2 if using own Vitae). Dice Pools: Resolve or Manipulation + Blood Sorcery. System: Treated as an attack contested by target’s dodge. Melee: Resolve + Blood Sorcery. Ranged: Manipulation + Blood Sorcery. Ranged distance: 5ft x Blood Potency. Duration: Weapon/projectile dissolves after use. Can be combined with Scorpion’s Touch, Corrosive Vitae, Baal’s Caress if activated. Special: Additional rouse check per use.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Create a blood weapon or projectile for one attack.", dicePool: "Resolve or Manipulation + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Hyperfixation", description: "Force a target to focus on a person, object, or task, or grant yourself total focus. Cost: 1 Rouse Check. Dice Pools: Manipulation + Blood Sorcery vs. Wits + Composure (if unwilling). System: Target can do nothing but focus on the chosen object/task for the scene unless hurt or in danger. To break focus, must spend Willpower. User can grant self or willing subject a 3-dice bonus to pools involving the fixation, but must spend Willpower to act outside it. Duration: One scene.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Force or grant total focus for a scene.", dicePool: "Manipulation + Blood Sorcery vs. Wits + Composure", level: 2, discipline: "blood sorcery" },

            // Level 3
            { name: "Blood of Potency", description: "Increase Blood Potency temporarily.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Increase Blood Potency temporarily.", dicePool: "Resolve + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Ripples of the Heart", description: "Change resonances or implant compulsions.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Change resonances or implant compulsions.", dicePool: "Manipulation + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Scorpion's Touch", description: "Turn blood into venom.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Turn blood into venom.", dicePool: "Strength + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Balefire Ignition", description: "Summon a life eating flame. (Amalgam: Oblivion 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 2 }], summary: "Summon a life eating flame.", dicePool: "Resolve + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Transitive Bond", description: "Bond via blood in a container or mortal.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Bond via blood in a container or mortal.", dicePool: "Intelligence + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Mundare Sanguinem", description: "By raising its temperature to a simmer, the vampire can purify their own vitae of external impurities and contaminants, such as drugs, poisons, diseases, toxins, or even the Blood of other Kindred. To purify their Blood, the user must activate this power the moment a contaminant enters their bloodstream. The user then rolls Stamina + Blood Sorcery against Difficulty 3 for diseases, toxins, drugs, and similar substances, or Difficulty 5 for Kindred vitae. On a loss, the user suffers one point of Aggravated Health damage.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Purify your vitae of contaminants and impurities.", dicePool: "Stamina + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Thrombogenicity", description: "By remotely thickening, or clotting, the blood of a mortal victim, the vampire can numb their limbs or even trigger a fatal heart attack. This power only works on mortal victims within the user's line of sight. The user can target one of the victim's limbs, causing it to swell and go numb for one turn, preventing them from performing certain actions. Alternatively, the user may target the victim's heart causing a cardiac arrest, imposing a -1 dice penalty to all pools for one turn. On a critical win, the thaumaturgically thickened blood causes the victim's heart to stop entirely, killing them on the spot and incurring a Stain.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Clot mortal blood to numb limbs or cause heart attacks.", dicePool: "Wits + Blood Sorcery vs Stamina + Occult", level: 3, discipline: "blood sorcery" },

            // Level 3 - Added
            { name: "Trace the Blood's Current", description: "Discern the lineage and location of Kindred related to a vitae donor. Cost: 1 Rouse Check. Dice Pools: Wits + Blood Sorcery vs. Stamina + Blood Potency. System: Touch or taste Kindred vitae, roll Wits + Blood Sorcery vs. Stamina + Blood Potency. On success, sense all who share the donor's lineage and can attempt to locate them with further rolls. Duration: One scene.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Discern Kindred lineage and location from vitae.", dicePool: "Wits + Blood Sorcery vs. Stamina + Blood Potency", level: 3, discipline: "blood sorcery" },
            { name: "The Dragon's Ire", description: "Project an aura that prevents Willpower use and penalizes Discipline rolls. Amalgam: Animalism 3. Cost: 1 Rouse Check. Dice Pools: Resolve + Blood Sorcery vs. Resolve + Composure. System: Aura radius = 3m x Animalism rating. Living creatures can't spend Willpower. Vampires resist with Resolve + Composure; on failure, can't spend Willpower and take -2 dice to Discipline pools against user. Duration: One scene.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 3 }], summary: "Prevent Willpower use and penalize Disciplines in an aura.", dicePool: "Resolve + Blood Sorcery vs. Resolve + Composure", level: 3, discipline: "blood sorcery" },
            { name: "Killswitch", description: "Paralyze a target who has consumed your vitae by uttering a keyphrase. Cost: 1 Rouse Check. Dice Pools: Manipulation + Blood Sorcery vs. Resolve + Composure (Kindred may use Resolve + Fortitude). System: Target must have consumed your vitae. On hearing the phrase, target resists; on failure, is paralyzed for hours equal to margin of success (min 1), or until keyphrase is repeated with another rouse check. Total failure: Kindred falls into torpor, mortals fall unconscious. Duration: Power remains viable for a month after vitae is consumed.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }], summary: "Paralyze a target who has consumed your vitae.", dicePool: "Manipulation + Blood Sorcery vs. Resolve + Composure", level: 3, discipline: "blood sorcery" },

            // Level 4
            { name: "Blood Aegis", description: "Block projectiles with blood.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Block projectiles with blood.", dicePool: "Stamina + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Fulminating Vitae", description: "Turn blood into an explosive weapon.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Turn blood into an explosive weapon.", dicePool: "Strength + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Marionette", description: "Control spilled blood, corpses, or living humans like puppets. (Amalgam: Shape the Sanguine Sacrament)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Control spilled blood, corpses, or living humans like puppets.", dicePool: "Manipulation + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Draught of Power", description: "Baali gives a bit of their power to another, the Baali then grows in power in response to the indulgence of the victim.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Baali gives a bit of their power to another, the Baali then grows in power in response to the indulgence of the victim.", dicePool: "Charisma + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Theft of Vitae", description: "Steal blood from a distance.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Steal blood from a distance.", dicePool: "Resolve + Blood Sorcery", level: 4, discipline: "blood sorcery" },

            // Level 4 - Added
            { name: "Philtre of Feral Delusion", description: "Transform vitae into a contact poison that induces bestial hallucinations. Amalgam: Obfuscate 3. Cost: 1+ Rouse Checks. Dice Pools: Composure + Blood Sorcery vs. Resolve + Occult or Fortitude. System: Apply poison via skin contact (Dexterity + Larceny vs. Wits + Awareness to do so subtly). On success, target takes Superficial Willpower damage and may suffer bestial impulses. Duration: Varies.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Contact poison induces bestial hallucinations.", dicePool: "Composure + Blood Sorcery vs. Resolve + Occult or Fortitude", level: 4, discipline: "blood sorcery" },
            { name: "Crimson Puppeteer", description: "Paralyze and control a target’s body by manipulating their blood. Cost: 1 Rouse Check. Dice Pools: Intelligence + Blood Sorcery vs. Stamina + Composure (Kindred: Fortitude + Composure). System: On failure, target is paralyzed for turns equal to margin of failure (min 1). User can direct target’s physical actions, but cannot force Kindred to use Disciplines or self-harm. Humans take 1 Aggravated damage per turn. Duration: Until turns elapse or user stops concentrating.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Paralyze and control a target’s body for several turns.", dicePool: "Intelligence + Blood Sorcery vs. Stamina + Composure", level: 4, discipline: "blood sorcery" },
            { name: "Pluck the Mind's Eye", description: "Erase a target’s skills and specializations for a scene. Cost: 2 Rouse Checks (1 if target has consumed your vitae). Dice Pools: Manipulation + Blood Sorcery vs. Intelligence + Resolve (Kindred: Resolve + Fortitude). System: On success, target takes Superficial Willpower damage and loses dots/specializations in chosen skills for the scene. If target has consumed caster’s vitae, penalty to Defense pool equal to caster’s Blood Potency. Duration: One scene.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 4 }], summary: "Erase a target’s skills and specializations for a scene.", dicePool: "Manipulation + Blood Sorcery vs. Intelligence + Resolve", level: 4, discipline: "blood sorcery" },

            // Level 5
            { name: "Baal's Caress", description: "Turn blood into stronger venom. (Amalgam: Scorpion's Touch?)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 3 }], summary: "Turn blood into stronger venom.", dicePool: "Strength + Blood Sorcery", level: 5, discipline: "blood sorcery" },
            { name: "Cauldron of Blood", description: "Boil blood inside a target's body.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Boil blood inside a target's body.", dicePool: "Resolve + Blood Sorcery", level: 5, discipline: "blood sorcery" },
            { name: "Born Again", description: "Mark mortal to be possessed.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Mark mortal to be possessed.", dicePool: "Manipulation + Blood Sorcery", level: 5, discipline: "blood sorcery" },
            { name: "Reclamation of Vitae", description: "Reclaim the vitae from your ghouls.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Reclaim the vitae from your ghouls.", dicePool: "Stamina + Blood Sorcery", level: 5, discipline: "blood sorcery" },

            // Level 5 - Added
            { name: "Clot the Earth's Veins", description: "Inflict drastic, destructive change on the environment within 5m. Cost: 2 Rouse Checks. Dice Pools: Resolve + Blood Sorcery (Diff 8). System: Concentrate for a turn, roll Resolve + Blood Sorcery at Diff 8. On failure, take Aggravated Willpower damage equal to margin; on success, take 1 Aggravated Willpower. Can cause landslides, collapse structures, redirect rivers, etc. Always causes collateral damage and may inflict Stains. Special: Can permanently seal a Furcus if used at such a site. Duration: Instant.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Inflict drastic, destructive change on the environment.", dicePool: "Resolve + Blood Sorcery (Diff 8)", level: 5, discipline: "blood sorcery" },
            { name: "Cascade the Sanguine Sacrament", description: "Wield blood from up to five sources at once, using Shape the Sanguine Sacrament and Wield the Sanguine Sacrament simultaneously. Cost: 2 Rouse Checks (1 full turn to activate). Dice Pools: Intelligence + Blood Sorcery. System: Use both abilities a number of times per turn equal to sources drawn from. If using mortals, take a Stain and mortals take Aggravated damage. Duration: Until blood is expended or user stops concentrating. Prerequisite: Wield the Sanguine Sacrament.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Wield blood from up to five sources at once.", dicePool: "Intelligence + Blood Sorcery", level: 5, discipline: "blood sorcery" },
        ],
    },
    oblivion: {
        clans: [
            "Lasombra", "Hecata", "Kiasyd", "Baali", "Lamia", "Nagaraja", "Caitiff"
        ],
        summary: "Shadow powers and necromancy",
        logo: oblivionLogo,
        powers: [
            // Level 1
            { name: "Ashes to Ashes", description: "Disintegrate a corpse.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Disintegrate a corpse.", dicePool: "Stamina + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Binding Fetter", description: "Detect ghostly fetters.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Detect ghostly fetters.", dicePool: "Wits + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Shadow Cloak", description: "Manipulate shadows (gives bonuses).", rouseChecks: 0, amalgamPrerequisites: [], summary: "Manipulate shadows (gives bonuses).", dicePool: "Dexterity + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Daimonion", description: "Commune with the Outer Dark. (Amalgam: blood sorcery 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Commune with the Outer Dark.", dicePool: "Resolve + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Rapacious Communion", description: "Sacrifice the Blood Resonance of a victim, making them lack one.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sacrifice the Blood Resonance of a victim.", dicePool: "Stamina + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Lambet Dark", description: "Supernatural darklight bypasses all mortal perception. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Supernatural darklight bypasses all mortal perception.", dicePool: "Wits + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Oblivion's Sight", description: "See in darkness and perceive ghosts.", rouseChecks: 0, amalgamPrerequisites: [], summary: "See in darkness and perceive ghosts.", dicePool: "Wits + Oblivion", level: 1, discipline: "oblivion" },

            // Added Level 1
            { name: "Incorruptibility", description: "Preserve a Kindred corpse or body part from decomposing into ash for hours. Cost: 1 Rouse Check. Dice Pool: Stamina + Oblivion (Diff 2 + target's Blood Potency). On success, prevents decay for hours equal to margin of success (min 1); critical success lasts until sunrise. Failure reduces flesh to ash. Preserved flesh cannot be diablerized but retains vitae for rituals.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Preserve Kindred corpses for experimentation.", dicePool: "Stamina + Oblivion (Diff 2 + BP)", level: 1, discipline: "oblivion" },

            // Added Level 1
            { name: "Marrow Feast", description: "Feed from the marrow of fresh bones to slake hunger. Amalgam: Obfuscate 1. Cost: Free. System: Can slake 1 hunger per large bone (femur, rib, humerus) from remains less than 2 weeks old. Cannot reduce hunger to 0 or gain Resonance.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "obfuscate", level: 1 }], summary: "Feed from the marrow of fresh bones.", dicePool: "N/A", level: 1, discipline: "oblivion" },
            { name: "Trick of the Light", description: "For the blink of an eye, the vampire can make their shadow briefly corporeal, allowing it to interact with the environment or victims in subtle ways—simply touching, tapping on the shoulder, tripping up, or knocking things from their hands. No roll is required when interacting with the environment (e.g., turning off a light switch). When targeting a person (e.g., tripping them), the user rolls Resolve + Oblivion vs the victim's Dexterity + Wits.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Make shadow corporeal to interact with environment or trip people.", dicePool: "Resolve + Oblivion vs Dexterity + Wits", level: 1, discipline: "oblivion" },
            { name: "Ankyra Famulus", description: "Created by the Lasombra in the late Bronze Age, this power empties the natural spirit of a Famulus, infusing them with a gift of their master's shadow. The Famulus' Resolve and Stealth both increase to 3. Ankyra gain one or more eyes somewhere on their body that bear the unnatural look of deep-sea creatures. Ankyra gain the Lasombra's Bane at Severity 1. They are also deeply photophobic; should they be forced into light, they suffer 1 point of Superficial Willpower Damage per turn of exposure. Ankyra possess perfect vision in darkness and can use their Awareness to detect entities and powers of Oblivion. They can also submerge seamlessly into their master's shadow and vanish.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Transform bonded famulus into shadow creature with enhanced abilities.", dicePool: "", level: 1, discipline: "oblivion" },
            { name: "Lambent Dark", description: "An odd and somewhat rare technique of the Pilgrims of the Dark as well as certain Abyss Mystics. This power empties out the darkness itself, producing a kind of nonsensical false-light that can only be seen through powers of Oblivion. Upon activation, the user radiates lambent dark from anywhere on their person. Lambent dark appears as pale light that can only be seen by the user and those with Oblivion-based powers of perception, as well as certain denizens of Oblivion and the Abyss, such as Wraiths and Shades.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Create false-light visible only to those with Oblivion powers.", dicePool: "", level: 1, discipline: "oblivion" },
            { name: "Willing Vessel", description: "This technique is seen primarily amongst the occult-inclined practitioners of Oblivion that wish to open themselves up as vessels for Oblivion itself. When the user Blood Surges a pool that includes Oblivion, they add an additional bonus die, on top of any other bonuses, however a 1 or a 10 on the Rouse Check made to Surge that pool inflicts a Stain. When you learn a Ceremony of Oblivion, you may use this power as the Prerequisite in place of another if you haven't done so already.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Add bonus dice to Oblivion Blood Surges but risk Stains.", dicePool: "", level: 1, discipline: "oblivion" },
            { name: "Wilting Leamhan", description: "A power of the Kyasid. When used, this technique tugs at the edges of Oblivion and presses it into glamoured shapes of black-winged butterflies, or perhaps moths, which form shadowy dances as they carry out the will of their conjurer. The user pays the cost and conjures a Leamhan Eclipse from their own shadow. These moths will obey the telepathic intentions of their conjurer to the best of their ability, however they have the mental capacity and instincts of typical moths, causing them to ignore complex commands.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Conjure shadow moths that obey simple telepathic commands.", dicePool: "", level: 1, discipline: "oblivion" },

            // Level 2
            { name: "Arms of Ahriman", description: "Use shadows to attack. (Amalgam: Potence 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 2 }], summary: "Use shadows to attack.", dicePool: "Strength + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Fatal Prediction", description: "Doom someone to injury or death. (Amalgam: Auspex 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Doom someone to injury or death.", dicePool: "Manipulation + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Carrion Banquet", description: "Slake additional hunger from corpses. (Amalgam: Fortitude 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }], summary: "Slake additional hunger from corpses.", dicePool: "Stamina + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Soul Swap", description: "Swap the aura of two people. (Amalgam: blood sorcery 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Swap the aura of two people.", dicePool: "Manipulation + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Shadow Cast", description: "Create shadows (gives bonuses).", rouseChecks: 1, amalgamPrerequisites: [], summary: "Create shadows (gives bonuses).", dicePool: "Dexterity + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Where the Veil Thins", description: "Sense the strength of the Veil, and reduce ceremony difficulties if it's thin.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sense the strength of the Veil, and reduce ceremony difficulties if it's thin.", dicePool: "Wits + Oblivion", level: 2, discipline: "oblivion" },

            // Added Level 2
            { name: "Grim Insight", description: "Experience a mortal's final moments before death. Amalgam: Auspex 2. Cost: 1 Rouse Check. Dice Pool: Resolve + Oblivion. System: In presence or line of sight of corpse, roll at ST-determined difficulty. On success, enter trance to witness last moments. Can be used on Kindred remains but is harder.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Witness a mortal's final moments before death.", dicePool: "Resolve + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Thanatosis", description: "Inflict rapid decay on a Kindred, making them appear as a walking corpse. Cost: 1 Rouse Check. Dice Pool: Resolve + Oblivion vs. Stamina + Composure (or Fortitude). On success, target loses Looks Merits, cannot use Blush of Life, and takes -3 to Social Pools. Mortals are horrified. Duration: Hours equal to margin of success. Only usable on Kindred.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Inflict rapid decay on a Kindred.", dicePool: "Resolve + Oblivion vs. Stamina + Composure/Fortitude", level: 2, discipline: "oblivion" },

            // Added Level 2
            { name: "Rigor Mortis", description: "Paralyze a victim with a deathly stiffness. Cost: 1 Rouse Check. Dice Pool: Intelligence + Oblivion vs. Stamina + Composure (or Fortitude for vampires). On success, victim takes -2 to all physical pools for the scene. Mortals are paralyzed for the scene. Duration: One scene.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Paralyze a victim with a deathly stiffness.", dicePool: "Intelligence + Oblivion vs. Stamina + Composure/Fortitude", level: 2, discipline: "oblivion" },
            { name: "Abyssal Caress", description: "The vampire can use their own shadow to deliver Discipline powers that require physical contact. Those touched by the supernatural shade feel an unnatural presence—cold, unsettling, and hair-raising—sending chills down their spine. If the user possesses the Oblivion Discipline power Shadow Perspective, they physically feel objects and individuals their shadow interacts with.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Use shadow to deliver touch-based Discipline powers.", dicePool: "", level: 2, discipline: "oblivion" },
            { name: "Cease the Deceased", description: "By disrupting their connection to Oblivion, the vampire can temporarily immobilize the truly dead walking among the living—shambling corpses, homunculi, or wayward wraiths—and in rare cases, banish them entirely. User rolls Manipulation + Oblivion against a Difficulty equal to one plus the number of targets. On a win, all affected entities are rendered immobile and unable to act for one turn. On a critical win, the user severs their link to Oblivion entirely, leaving animated corpses and constructs paralyzed for the remainder of the scene, and banishing wraiths back to the Shadowlands.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Immobilize or banish undead entities.", dicePool: "Manipulation + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Dread Roil", description: "A power of abyssal mysticism that pressurizes the density of a shadow, then releases it as a wave of darkness that travels along surfaces in a fixed trajectory, leaving a trail of abyssal dark in its wake. The user concentrates on a dark spot in their line of sight for a full turn, then activates this power, sending a two-dimensional wave of pitch-black darkness flowing in a straight line. This wave is 2 yards/meters wide, and can travel a distance of up to three times the user's Oblivion rating in yards/meters before vanishing. Characters that come into contact with the wave become drenched in darkness, chilling them to their core and conferring a -2 die penalty to their Stamina pools.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Send wave of darkness that chills and debuffs victims.", dicePool: "Resolve + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Legion", description: "This signature power of the Angellis Ater allows them to momentarily rip open the separating shroud between the earthly realm and a hellish one. While this tear lasts only the briefest of moments, it allows a creature of the Abyss to erupt into our world and exact a terrible, alien, violence upon the night. When activating this power, the user chooses a shadow in their line of sight and rolls their Intelligence + Oblivion. The user then chooses a creature of Oblivion whose greater of the two General Difficulty ratings is equal to or less than the number of successes on the roll. The chosen creature then erupts from the chosen shadow to perform a single action of the user's choice, using its own Stat Block.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Summon creature from the Abyss to perform one action.", dicePool: "Intelligence + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Gnashing of Teeth", description: "This technique uses Hunger as a fulcrum to conjure a fragment of the Grand Maw to viciously masticate victims. Upon activation, the user chooses a shadow at least 2 yards/meters across and rolls their Wits + Oblivion to manifest a huge shadowing maw with a radius of 2 yards/meters. Victims may roll their Dexterity + Athletics to evade. Anyone bitten by these teeth take piercing Superficial Damage equal to the user's current Hunger and are immobilized for the rest of the current turn. Victims can attempt to free themselves with a Test of Strength + Brawl; Difficulty equal to the user's Hunger. On a Critical Win, victims take a point of Aggravated Health Damage instead of any Superficial and one of their limbs is mangled beyond use.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 2 }], summary: "Manifest shadow maw that bites and immobilizes victims.", dicePool: "Wits + Oblivion", level: 2, discipline: "oblivion" },

            // Level 3
            { name: "Aura of Decay", description: "Decay everything around.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Decay everything around.", dicePool: "Stamina + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Passion Feast", description: "Feed on wraiths, draining Passion. (Amalgam: Fortitude 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Feed on wraiths, draining Passion.", dicePool: "Stamina + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Shadow Perspective", description: "Project senses through shadows.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Project senses through shadows.", dicePool: "Wits + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Shadow Servant", description: "Send your shadow out to spy. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Send your shadow out to spy.", dicePool: "Wits + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Nigtmare Theatre", description: "Haunt someone with nightmares. (Amalgam: Presence 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Haunt someone with nightmares.", dicePool: "Manipulation + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Clinging Affinity", description: "A shadow that fills victim with despair. (Amalgam: Presence 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 3 }], summary: "A shadow that fills victim with despair.", dicePool: "Manipulation + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Touch of Oblivion", description: "Decay a living or unliving body.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Decay a living or unliving body.", dicePool: "Stamina + Oblivion", level: 3, discipline: "oblivion" },

            // Added Level 3
            { name: "Sardenzo's Sepulcher", description: "Absorb blood spilled on earth while using Earth Meld. Amalgam: Protean 3. Cost: 1 Rouse Check. System: While underground, blood spilled within 3m x Oblivion rating is absorbed, satiating hunger. Blood has no resonance and cannot be used for diablerie. Duration: Passive.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 3 }], summary: "Absorb blood spilled on earth while using Earth Meld.", dicePool: "N/A", level: 3, discipline: "oblivion" },

            // Added Level 3
            { name: "Dust to Dust", description: "Discorporate into a pile of ash, immune to damage but unable to act. Amalgam: Obfuscate 3. Cost: 1 Rouse Check. System: No roll required unless disguising as Final Death (Oblivion + Subterfuge vs. Wits + Occult). Remain as ash indefinitely, immune to all damage. Reform in 1 turn. If ash is disturbed, reform at largest pile. Duration: Indefinite until user reforms.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Discorporate into a pile of ash, immune to damage.", dicePool: "Oblivion + Subterfuge vs. Wits + Occult (if disguising)", level: 3, discipline: "oblivion" },

            // New Level 3 Powers
            { name: "Eyes of Ahriman", description: `Lock eyes with a target to channel the abyss, dealing superficial Willpower damage and stunning mortals or forcing vampires to resist Fear Frenzy. Cost: 1 Rouse Check. System: Charisma + Oblivion vs. Resolve + Composure.`, rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Channel the abyss through your gaze, stunning or terrifying targets.", dicePool: "Charisma + Oblivion vs. Resolve + Composure", level: 3, discipline: "oblivion" },
            { name: "Platonian Silhouette", description: `Steal the shadow of an object and conjure it as a nearly indestructible, abyssal copy. Cost: 1+ Rouse Checks. System: Touch an object casting a shadow, make a Rouse Check to incorporate its shadow. Can conjure it later with another Rouse Check. Armor grants rating equal to Oblivion dots; weapons deal unhalved damage to supernaturals. Lasts until sunrise or scene.`, rouseChecks: 1, amalgamPrerequisites: [], summary: "Steal and conjure abyssal copies of objects from their shadows.", dicePool: "N/A", level: 3, discipline: "oblivion" },
            { name: "Sensory Deprivation", description: "By tapping their victim's senses directly into the Abyss, the vampire can deprive them of taste, touch, smell, hearing, and sight. To activate this power, the target must be in the user's line of sight. The user makes a Resolve + Oblivion test against a Difficulty equal to three plus the number of senses they wish to disable. Kindred and other supernatural beings have a chance to shrug off this effect before it even sets in by rolling Intelligence + Awareness against the user's Manipulation + Presence. Those who succumb to this power become deprived of the chosen senses for the rest of the scene. For every three successes in the margin, the user can choose to disable one of those senses permanently.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Deprive victims of senses by tapping them into the Abyss.", dicePool: "Resolve + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Sink into Oblivion", description: "The vampire instantaneously sinks into their own shadow to evade detection or harm, reemerging in the exact same spot moments later. The user rolls Composure + Oblivion against Difficulty 3 when using this power to blink from existence for just a few seconds. Remaining submerged longer increases the Difficulty at the Storyteller's discretion. On a win, the user returns unscathed, ready to act on the following turn. On a loss, they incur Stains equal to the difference between the Difficulty and their successes. On a bestial failure, the user becomes lost in the Labyrinth, remaining trapped for the rest of the scene. When they return, they are in shambles and gain Stains equal to the number of empty boxes on their Humanity track.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sink into shadow to evade harm, but risk getting lost in the Abyss.", dicePool: "Composure + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Queen's Reach", description: "An advanced form of Abyssal manifestation that conjures sinuous tendril of dark from the wielder's arm. These tendrils erupt outwards in a chosen direction and adhere to whatever they impact, then pull taught. This allows them to function like a rope or grappling hook. The user projects a sinuous tendril of darkness that sticks to the first thing it hits. This tendril's maximum range is twice the user's Oblivion rating in yards/meters. Immediately after impact the tendril will pull tight, pulling the user to any object with a greater weight than theirs or pull an object with a weight lower. Using this power on another Character is counted as a Wits + Oblivion ranged attack. On a successful hit, the characters enter into a Strength + Athletics Contest, with the loser being pulled to the winner.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 2 }], summary: "Project shadow tendril that acts as grappling hook or weapon.", dicePool: "Resolve + Oblivion", level: 3, discipline: "oblivion" },


            // Level 4
            { name: "Profane the Sanctified", description: "Corrode True Faith and holy symbols. (Amalgam: Aura of Decay or Touch of Oblivion)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 3 }], summary: "Corrode True Faith and holy symbols.", dicePool: "Stamina + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Necrotic Plague", description: "Cause damage over time.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Cause damage over time.", dicePool: "Stamina + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Stygian Shroud", description: "Impose darkness on an area.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Impose darkness on an area.", dicePool: "Wits + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Pareidolian", description: "Have your shadow possessed by an entity. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Have your shadow possessed by an entity.", dicePool: "Wits + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Umbrous Clutch", description: "Pull someone through their shadow into yours.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Pull someone through their shadow into yours.", dicePool: "Strength + Oblivion", level: 4, discipline: "oblivion" },

            // Added Level 4
            { name: "Night Drinker's Curse", description: "Infect a mortal vessel with a supernatural disease. Any Kindred (other than domitor) who drinks from them suffers Stigmata-like effects, cannot Blood Surge, and must make extra Rouse Checks. Lasts nights equal to hunger slaked. Mortal killed while infected rots instantly. Cost: 1 Rouse Check. Duration: Permanent.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Infect a vessel with a supernatural disease that harms Kindred.", dicePool: "N/A", level: 4, discipline: "oblivion" },

            // Added Level 4
            { name: "Breath of Dhumavati", description: "Vomit a line of necrotic bile that rots flesh and harms souls. Cost: 1 Rouse Check, 1 Stain. Dice Pool: Stamina + Oblivion vs. Dexterity + Athletics (or Stamina + Fortitude for Kindred). Range: Oblivion rating in feet (min 4). Living targets take Aggravated Health Damage; Kindred and Wraiths suffer similar effects. Grappled targets do not resist. Duration: Instant.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Vomit necrotic bile that rots flesh and harms souls.", dicePool: "Stamina + Oblivion vs. Dexterity + Athletics/Fortitude", level: 4, discipline: "oblivion" },
            // New Level 4 Power
            { name: "Ravenous Abyss", description: `Feed through shadows, inflicting aggravated damage and draining blood at a distance. Cost: 1+ Rouse Checks. System: When using an Oblivion Power to attack, make an extra Rouse Check to feed on a target, dealing 2 Aggravated Damage and feeding up to half Oblivion rating. Blood loses qualities. Duration: That turn (can extend with more Rouse Checks).`, rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 3 }], summary: "Feed through shadows, inflicting aggravated damage and draining blood.", dicePool: "N/A", level: 4, discipline: "oblivion" },
            { name: "Exquisite Corpse", description: "Become immune to sunlight while in daysleep, appearing as a corpse. Amalgam: Fortitude 3 (Defy Bane). Cost: 2 Rouse Checks. System: Make 2 Rouse Checks before daysleep; immune to sunlight until awakening. Only Intelligence + Occult (Diff 5) reveals the body is not a true corpse. If in Hunger Torpor, effect persists. Duration: Until awakening from daysleep or torpor.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 3 }], summary: "Immune to sunlight while in daysleep, appear as a corpse.", dicePool: "N/A", level: 4, discipline: "oblivion" },
            { name: "Draught of Entropy", description: "Some Lasombra's blood runs so deep with dark that it confers a talent in such powers to those who drink it. Drinking a Rouse Check's worth of Blood directly from the user gifts the drinker with temporary Oblivion equal to half the Oblivion dots (rounded down) of the donor. Drinkers also lose, and cannot gain, Blood Resonance of any kind. If a drinker would gain a Stain from a 1 or a 10 on a Rouse Check, they gain an additional Stain, as the alien powers of infinite nothing wrack their unprepared souls. Unlike other 'Draught' powers, Draught of Entropy allows the drinker to choose their own powers of Oblivion up to the gained level when they partake from the donor. The donor also gains the ability to manipulate the drinker's shadow through their powers of Oblivion as if it were their own.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Grant temporary Oblivion powers through blood, but cause additional Stains.", dicePool: "", level: 4, discipline: "oblivion" },

            // Level 5
            { name: "The Darkness Within", description: "Animate someone's shadow to attack.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Animate someone's shadow to attack.", dicePool: "Strength + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Shadow Step", description: "Teleport between shadows.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Teleport between shadows.", dicePool: "Dexterity + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Skuld Fulfilled", description: "Re-impose old injury or sickness.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Re-impose old injury or sickness.", dicePool: "Manipulation + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Tenebrous Avatar", description: "Become a shadow.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Become a shadow.", dicePool: "Wits + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Pestilence", description: "Summon a wind that rots everything and raises the dead.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Summon a wind that rots everything and raises the dead.", dicePool: "Stamina + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Hell's Yawning Maw", description: "Summon a demonic Baelfire Hellion. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Summon a demonic Baelfire Hellion.", dicePool: "Resolve + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Withering Spirit", description: "Erode a target's will.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Erode a target's will.", dicePool: "Manipulation + Oblivion", level: 5, discipline: "oblivion" },

            // Added Level 5
            { name: "Acheron Vortex", description: "Tear open a rift into the Tempest, banishing Wraiths within 50ft. Cost: 2 Rouse Checks, 1 Stain. Dice Pool: Resolve + Oblivion. Wraiths must make Willpower checks vs. user's roll or be sucked in. Mortals/Kindred must also roll Willpower; mortals take Aggravated Willpower damage, Kindred risk Fear Frenzy. Duration: One scene.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Tear open a rift into the Tempest, banishing Wraiths.", dicePool: "Resolve + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Deluge", description: "Expertise in Oblivion such as this is wielded by masters of Obtenebration and Old Mortis both, and has long served as an example of those Discipline's convergent powers over the waves of the far shore. When used this power uses those waves to beat upon the crumbling beaches of reality, calling forth a deluge from the primordial Abyss or a screaming black sea of death. The user must be completely concealed by darkness to activate this power. Upon activation, every shadow within 30 yards/meters of the user takes on the properties of three yards/meters deep water. Characters must swim through this liquid darkness as if moving through a body of water, forcing them to make basic Stamina + Athletics; Difficulty 2 Tests as needed. Those who can't swim will sink to the bottom of a shadow, where they will remain until the effect ends or they are lent assistance by another.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Turn all shadows within 30 yards into liquid darkness that must be swum through.", dicePool: "", level: 5, discipline: "oblivion" },
        ],
    },
    "thin-blood alchemy": {
        clans: ["Thin-blood"],
        summary: "",
        logo: "",
        powers: [],
    },
    "": {
        clans: [],
        summary: "",
        logo: "",
        powers: [],
    },
}

export const ritualSchema = z.object({
    name: z.string(),
    summary: z.string(),
    rouseChecks: z.number().min(0).int(),
    requiredTime: z.string(),
    dicePool: z.string(),
    ingredients: z.string(),
    level: z.number().min(1).int(),
})

export type Ritual = z.infer<typeof ritualSchema>



// Ceremonies: identical to Rituals, but for Oblivion
export const ceremonySchema = z.object({
    name: z.string(),
    summary: z.string(),
    rouseChecks: z.number().min(0).int(),
    requiredTime: z.string(),
    dicePool: z.string(),
    ingredients: z.string(),
    level: z.number().min(1).int(),
})
export type Ceremony = z.infer<typeof ceremonySchema>

export const Ceremonies: Ceremony[] = [
    { name: "Gift of False Life", summary: "Reanimate a corpse to perform one task (Ashes to Ashes)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Knowing Stone", summary: "Scry a ghost's location from its name (Ashes to Ashes or Binding Fetter)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Summon Spirit", summary: "Summon a ghost with its fetter (Binding Fetter)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Gift of the Blood Pearl", summary: "Blood Pearls animate corpses (Blood Sorcery 1)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Glutton's Insight", summary: "Absorbs victims' memories through feasting (Carrion Banquet or Rapacious Communion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Desperate Cry", summary: "Desperate pact heals wounds but inflicts lasting harm (Rapacious Communion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Traveler's Call", summary: "Alert another Shalimite to your location (Oblivion Sight, Shalimite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Poet's Prose", summary: "Blood-scribed messages glow for Oblivion's eyes alone (Lambent Dark)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Sin's Graceful Flame", summary: "Balefire candle, revealing sins and fueling infernal power. (Daimonion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    // New Level 1 Ceremonies
    { name: "Corpse Liquor", summary: "Determine if a mortal will become a wraith by brewing and drinking their flesh.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "At least 1 ounce of flesh from a living mortal, salt, wyrmwood, strong alcohol, caster’s vitae", level: 1 },
    { name: "Il Malocchio", summary: "Implant a preserved Kindred eye to gain deathsight and bonuses to necromancy.", rouseChecks: 1, requiredTime: "1 scene", dicePool: "Wits + Oblivion", ingredients: "A preserved eye from a Kindred with Auspex, your own eye (sacrificed)", level: 1 },
    { name: "Watcher in the Dark", summary: "Spy on a person or location through a stolen item and shadows.", rouseChecks: 1, requiredTime: "1 scene", dicePool: "Oblivion Ceremony Roll", ingredients: "A stolen item from the target or location, caster’s vitae", level: 1 },
    // New Level 2 Ceremonies
    { name: "Fruit of the Mandragore", summary: "Grow a mandrake that produces hunger-slaking fruit and creates a vengeful specter.", rouseChecks: 1, requiredTime: "1 week", dicePool: "Oblivion Ceremony Roll", ingredients: "A living vessel, goat/cow’s milk, bat blood, caster’s vitae", level: 2 },
    { name: "High Saturday's Dance", summary: "Haunt a target with wraiths, inflicting penalties to Social and Mental pools.", rouseChecks: 1, requiredTime: "1 scene", dicePool: "Oblivion Ceremony Roll", ingredients: "A personal possession of the target, boula drum, colored sand/cornmeal, caster’s vitae", level: 2 },
    { name: "Abyssal Investiture", summary: "Anoint people to make them invisible to electronics and unrecordable.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Purified water, caster’s vitae, a completely dark room", level: 2 },
    { name: "Poor Yorick's Mask", summary: "Create a mask that blocks supernatural detection and repels wraiths.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Ashes from a cremated corpse, grave wax, purified water, full-face mask", level: 2 },
    // Added Level 2 Ceremony
    { name: "Vitrine Prison", summary: "Trap a piece of a target's shadow in a glass container, penalizing their Mental Pools and allowing the caster to view their memories.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll vs. Resolve + Occult (or Fortitude)", ingredients: "Sealable glass container, moth's wing, black wax", level: 2 },
    // New Level 3 Ceremonies
    { name: "Charon's Needle", summary: "Track a wraith and inflict aggravated Willpower damage with a silvered fingerbone.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Fingerbone from a wraith, molten silver", level: 3 },
    { name: "Plunge Into Darkness", summary: "Create an aura that disables electronics and blocks transmissions.", rouseChecks: 1, requiredTime: "1 turn", dicePool: "Oblivion Ceremony Roll", ingredients: "Lodestone with Theban runes, caster’s vitae", level: 3 },
    { name: "Abyzou's Grasp", summary: "Curse a Kindred to be unable to Embrace until a lead tablet is recovered.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Lead tablet, venomous animal, stagnant water", level: 3 },
    // Added Level 3 Ceremony
    { name: "Craft Fetch", summary: "Create a doppelganger of a target from their clothing, string, sticks, and vitae. The Fetch is a tactile illusion, not sentient, and has Health equal to the creator's Oblivion rating.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Clothing from target, red string, blackthorn sticks, iron nail, caster's vitae", level: 3 },
    // New Level 4 Ceremonies
    { name: "Shava Sadhana", summary: "Blood Bond wraiths by meditating on a corpse with hallucinogens.", rouseChecks: 1, requiredTime: "1 night", dicePool: "Oblivion Ceremony Roll", ingredients: "Milk of Somalata, psilocybin, fresh corpse", level: 4 },
    { name: "Cloak of Xipe Totec", summary: "Flay a victim and wear their skin to become their double.", rouseChecks: 1, requiredTime: "1 night", dicePool: "Oblivion Ceremony Roll", ingredients: "Victim, obsidian dagger, golden bowl, aromatics", level: 4 },
    { name: "Lost Shadow", summary: "Become a target’s shadow, able to attack them and use Oblivion powers.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Target’s full name, abyssal cephalopod ink, caster’s vitae", level: 4 },
    // Added Level 4 Ceremony
    { name: "Witch-Ridden Slumber", summary: "Caster enters a Torpor-like state to invade the dreams of a victim whose blood was used in the potion, inflicting Aggravated Willpower damage and feeding on their fear.", rouseChecks: 1, requiredTime: "1 night (brew); 1 scene (use)", dicePool: "Oblivion Ceremony Roll", ingredients: "Powdered black goat horn, rock salts, red valerian root, dried monkshood, at least 1 pint of target's blood", level: 4 },
    // New Level 5 Ceremonies
    { name: "Unliving Effigy", summary: "Create a doll to inflict damage and injuries on a target from afar.", rouseChecks: 1, requiredTime: "1 night", dicePool: "Oblivion Ceremony Roll", ingredients: "Target’s hair/clothing, clay, salt, grave dirt, caster’s vitae, iron needle", level: 5 },
    { name: "The Cry That Slays the Light", summary: "Blanket an area in supernatural darkness, allowing vampires to act by day.", rouseChecks: 1, requiredTime: "1 hour before sunrise", dicePool: "Oblivion Ceremony Roll", ingredients: "Intense Null resonance vessel, light-proofed chamber, obsidian/meteoric knife, caster’s vitae", level: 5 },
    // Level 2
    { name: "Repulsion Of Corposes", summary: "Glyphs repel undead, revealing caster's name if scrutinized (Carrion Banquet or Where the Veil Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Birth The Barghest", summary: "Fuse corpses into an undead Barghest guardian (Soul Swap)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Ashen Relic", summary: "Preserve Kindred body parts as relics (Ashes to Ashes or Oblivion Sight)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Awaken the Homuncular Servant", summary: "Create a small programmable minion (Where the Veil Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Blinding the Alloy Eye", summary: "Cameras cannot perceive or detect you (Shadow Cast)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Compel Spirit", summary: "Force a spirit to obey (Where the Veil Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Maw of Ahriman", summary: "Fill an orifice with Oblivion", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    // Level 3
    { name: "Beckon The Broken Soul", summary: "Summons tormented souls from Oblivion (Rapacious Communion or Daimonion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Craft Flesh Golem", summary: "Create a Frankenstein-esque flesh golem from three corpses (Aura of Decay or Necrotic Plague)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Create Corpse Suit", summary: "Create sentient flesh clothes (Shadow Perspective or Touch of Oblivion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Hell-Bound Heart", summary: "Sacrifices 9 mortals for permanent demonic transformations (Daimonion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Fortezza Sindonica", summary: "Make a barrier wraiths cannot pass (Where the Veil Thins, Hecata)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Harrowhaunt", summary: "Haunt a building to repel mortals (Aura of Decay)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Host Spirit", summary: "Invite a spirit into your body for power (Aura of Decay)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Knit the Veil", summary: "Make the Shroud impenetrable (Where the Veil Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Name of the Father", summary: "Paralyze someone with despair (Shadow Perspective, Shalimite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "The Shallow Slumber", summary: "Reduce torpor duration (Passion Feast or Touch of Oblivion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Shambling Hordes", summary: "Create obedient, long-lasting zombies (Aura of Decay)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Wisdom of the Dead", summary: "Borrow skills from a corpse (Oblivion Sight or Where the Veil Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    // Level 4
    { name: "Befoul Vessel", summary: "Corrupt a mortal's blood so it increases Hunger when tasted (Necrotic Touch)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Profane Edge of Depravity", summary: "Profane weapons amplify damage but reflect on creator (Pareidolian or Arms of Ahriman)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Confine to Malkav's Bastile", summary: "Imprisons demons within a Malkavian's shattered psyche (Soul Swap or Where the Shroud Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Bind the Spirit", summary: "Anchor a ghost to haunt a person or location (Necrotic Plague)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Death Rattle", summary: "Cause someone to relive a particular wraith's death (Fatal Precognition)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Bind to Mortal Form", summary: "Extend a human's lifespan (Necrotic Plague or Skuld Fulfilled)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Split the Veil", summary: "Tear open the Shroud (Necrotic Plague)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    // Level 5
    { name: "Ex Nihilo", summary: "Cross into the Shadowlands (Withering Spirit, Split the Veil?)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "The Bell of Gomorrah", summary: "Summon nightmares corrupting vampires and mortals (Nightmare Theatre)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "Repulsion of The Fallen", summary: "Glyphs repel demons punishing infernalists with holy backlash (Where the Veil Thins or Hell's Yawning Maw)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "Gravespawn Sovereign", summary: "Animates stone guardians through corpse-fed oblivion (Crown of The Lost Clan (Auspex 1))", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "Lazarene Blessing", summary: "Put a wraith into a physical body (Skuld Fulfilled)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "Gift of True Life", summary: "Transfer lifespan from one mortal to another (Necrotic Plague or Passion Feast)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "Pit of Contemplation", summary: "Create a doorway into Oblivion itself (Tenebrous Avatar, Shalimite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    // New Oblivion Ceremonies
    { name: "Hadopelagian Familiar", summary: "Allows a famulus to swim through shadows, submerging to become undetectable by non-supernatural means (ankyra famulus)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 2", ingredients: "Black vinegar, raw fish; A famulus", level: 1 },
    { name: "Subjugating Concatenation", summary: "Binds manifestations of Oblivion or creatures animated by it to the caster's will for one scene (obnubilation - Dominate 1)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Variable Difficulty", ingredients: "A yard/meter of iron chain, a small stone taken from a place of worship", level: 1 },
    { name: "Glass Eye", summary: "Removes and prepares an eye as a throwable surveillance device that can be used remotely (shadowperspective or typhloticwitness - Auspex 1)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 3", ingredients: "The caster's eye, black tea", level: 2 },
    { name: "Corrupt Sensory Optics", summary: "Disrupts all electronic sensors in a mapped area, causing alarms to fail and cameras to loop feeds (wilting leamhan or shadowcloak)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 4+", ingredients: "A cracked screen from a surveillance device, 1 yard/meter of fiber optic cable tied into a noose, a drop of Vitae mixed with powdered graphite, a blueprint of the area", level: 3 },
    { name: "Voices Through the Void", summary: "Enchants chess pieces to allow long-distance communication through shadows when used with candles in darkness (rapacious communion or shadowcast)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 5", ingredients: "A black candle, a chess set carved from obsidian or ebony, sea water", level: 4 },
    { name: "Silent Hunger", summary: "Infests all shadows within 30 yards with consuming hunger that damages mortals and vampires while feeding the caster (rapacious communion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 6", ingredients: "Four dozen fangs from various predators", level: 5 },
    { name: "Hands of the Far Shore", summary: "Stains body with pitch allowing treated areas to function as shadows and adding Oblivion to Strength feats (rapacious communion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 2", ingredients: "A lightless room, one pint (two liters) of blood, four pints (eight liters) of pitch resin", level: 1 },
    { name: "Hunger of Ahriman", summary: "Allows Oblivion powers to drain Hunger instead of dealing damage, leaving victims bruised and desaturated (arms of ahriman or gnashing of teeth)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 3", ingredients: "The caster's vampire fang, a tool to pull out the caster's fang", level: 2 },
    { name: "Kenomic Binding", summary: "Embeds talons in fingers that can be thrown to manifest controllable Talons of Ahriman, but causes unpredictable Rill manifestations (shadowservant or rapacious communion)", rouseChecks: 3, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 4", ingredients: "A basin full of coagulated blood, black salt, six talons from a bird", level: 3 },
    { name: "Writhing Innards", summary: "Infects a victim with internal predatory shadow that damages them when the caster frenzies or has bestial failures (arms of ahriman or gnashing of teeth)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 5", ingredients: "Ground omomi herb, the blood of a canid slaughtered by the caster, a pint of fresh blood from the intended victim", level: 4 },
    { name: "Abyssus Abyssum Invocat", summary: "Creates a distinct Shadow character that shares the mystic's abilities but can act independently, halving humanity in the process (shadowservant or rapacious communion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Remorse Test", ingredients: "A lightless space, enough sea water to completely submerge the Mystic, a full-length mirror", level: 5 },
    { name: "Kyros' Shroud", summary: "Creates a protective cloak that warns against Presence powers (high humanity) or Oblivion manifestations (low humanity)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 2", ingredients: "A beeswax candle, holy water or oil, a length of fabric that is large enough to wrap about the shoulders", level: 1 },
    { name: "Sin Seekers", summary: "Blesses projectiles with gold to deal aggravated damage to undead, infernal entities, frenzied vampires, and low humanity targets", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 3", ingredients: "Something blunt that will be launched or thrown as a projectile, gold, something that can melt the gold", level: 2 },
    { name: "Shield of the Insolent", summary: "Enchants a shield to absorb damage from Blood Sorcery and Oblivion powers using Stamina + Oblivion rolls", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 4", ingredients: "Something metal that can be used and held as a shield, holy water or oil, a symbol of one's faith", level: 3 },
    { name: "Hallowed Ground", summary: "Consecrates burial grounds to severely impede earth manipulation powers and grave robbing attempts", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 5", ingredients: "Holy water or oils, purifying fragrances and incense, a place with the remains of at least 12 individuals", level: 4 },
    { name: "Ave Sancte Khohfshiel", summary: "Satanic prayer that allows automatic success on a single Insight, Academics, or Occult test with difficulty lower than successes rolled (rapacious communion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 2", ingredients: "Prayerbook of the Pit, a satanic rosary, a knife or dagger, a candle made from subcutaneous human tissue, an altar to Satan", level: 1 },
    { name: "Ave Sancte Crataegus", summary: "Animates a fresh corpse to provide tactical advice and teamwork bonuses in combat situations (rapacious communion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 3", ingredients: "Prayerbook of the Pit, a satanic rosary, a knife or dagger, an altar to Satan, a (very) fresh corpse", level: 2 },
    { name: "Ave Sponsa Satanae", summary: "Imbues a blade with black flame that deals aggravated damage and ignites targets with consuming fire (legion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 5", ingredients: "Prayerbook of the Pit, a satanic rosary, a knife, an altar to Satan", level: 4 },
    { name: "Ave Sancte Ioúdas", summary: "Curses a feeding victim to compulsively betray everyone they know and love for multiple nights (legion)", rouseChecks: 2, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 6", ingredients: "Prayerbook of the Pit, a satanic rosary made of onyx and iron, a knife or dagger, thirty silver coins", level: 5 },
    { name: "Living Fae Ring", summary: "Creates a mushroom ring where plants grow without water or sunlight and can be harvested for ritual ingredients", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 2", ingredients: "A mushroom", level: 1 },
    { name: "Devil's Tooth", summary: "Grows a blood-producing fungus that can slake hunger but requires additional rouse checks, creating dependency (wilting leamhan)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 4+2 for each plot", ingredients: "Any tooth fungi spores, a rotten log or a Siofra Gardener, a gallon of coagulated blood, a pound of still-warm human skin", level: 2 },
    { name: "Siofra's Spring Crown", summary: "Transforms a ghoul into a plant-integrated Siofra Gardener with various abilities based on ingredients used (wilting leamhan)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 4", ingredients: "The caster's ghoul, Death Cap, crushed Datura or fly agaric, dew collected from berry bushes, numerous long flexible leaves", level: 3 },
    { name: "False Comfort", summary: "Creates a Human Effigy that mimics the appearance of a specific person, with enhanced abilities based on ingredients (stygian shroud or dread roil)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 5", ingredients: "Reflective shard of a broken mirror, a gallon of ink made from squid or cuttlefish, A drop of blood or lock of hair from the subject", level: 4 },
    { name: "Poet's Prose (New)", summary: "Creates invisible writing with vitae that can only be seen through Oblivion-based perception powers (lambent dark)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 2", ingredients: "A small sharp implement that can be used to write", level: 1 },
    { name: "Anxious Designs", summary: "Tattoos knowledge of ceremonies, rituals, or specialties onto a ghoul, allowing others to learn from them (lambent dark)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 3", ingredients: "Lead and cinnabar-based ink, or ink made via the poet's prose Ceremony. A tattooing implement", level: 2 },
    { name: "The Circumscribed Void", summary: "Tattoos a glyph that doubles the range and/or radius of a chosen Oblivion power or ceremony (queen's reach or lambent dark)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 4", ingredients: "Fish or whale oil, octopus ink, a sharp bone", level: 3 },
    { name: "Evulsion Print", summary: "Marks a mortal so that anyone other than the caster who bites them risks having their fangs violently torn out (rapacious communion or touch of oblivion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 5+", ingredients: "Squid ink or ink made via the poet's prose Ceremony", level: 4 },
    { name: "The Poet's Tormentors", summary: "Summons unpredictable Blatherskites from dark spots identified through area scouting (stygian shroud or dread roil)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 6", ingredients: "Nothing", level: 5 }
]

export const Rituals: Ritual[] = [
    { name: "Astromancy", summary: "Learn a subject's skills and goals", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Catoptromancy", summary: "Enchant a pair of mirrors to show what is reflected in their opposite, useful for communication and information gathering. Mirrors transmit only visuals, not sound, and cannot pierce supernatural concealment. If either mirror is damaged, the enchantment breaks.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A pair of mirrors or mirrored objects, powdered crystal, the caster’s vitae", level: 1 },
    { name: "Thief's Pawprints", summary: "Anoint an object so that anyone but the caster who touches it is marked with stains only visible to the caster. Stains last until the ritual is performed on another object.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Brightly-colored paint or ink, the caster’s vitae", level: 1 },
    { name: "Aapilu Awakening", summary: "Summon and bind an aapilu, Can be casted at higher dots for stronger summons", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Beelzebeatit", summary: "Rid an area of animals", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Bind the Accusing Tongue", summary: "Prevent someone from speaking ill of you", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Blood Apocrypha", summary: "Hide a message in a vessel's blood", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Blood to Water", summary: "Turn spilled blood to pure water", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Blood Walk", summary: "Learn a subject's name, gen, and sire", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Bloody Message", summary: "Show a message to a type of person", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Clinging of the Insect", summary: "Walk on walls and ceilings", rouseChecks: 1, requiredTime: "5min", dicePool: "Intelligence + Blood Sorcery", ingredients: "Living spider, your own blood", level: 1 },
    { name: "Coax the Garden", summary: "Awaken plants to hinder enemies (Bahari)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Craft Bloodstone", summary: "Create a magical tracking beacon", rouseChecks: 1, requiredTime: "3 nights", dicePool: "Intelligence + Blood Sorcery", ingredients: "Small magnet, your blood", level: 1 },
    { name: "Douse the Fear", summary: "Suppress natural fear of fire (Cainite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Enrich the Blood", summary: "Make a vessel more nourishing", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Herd Ward (Minor)", summary: "Ward a person against others' feeding", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Letter Ward", summary: "Ward a letter so only the intended receipient can read it", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Revealing the Crimson Trail", summary: "Detect spilled blood, no matter how old", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Seal the Brand", summary: "Make a permanent mark on the body", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Crimson Woad", summary: "Inbue spirits to protect from critical injuries", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Sense the Touchstone", summary: "Track someone's touchstone", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Bottle Catch", summary: "Make a trap from a dicipline", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Curse of the Walking Body", summary: "Make a victim appear dead", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Ward Against Destruction", summary: "Makes an object more durable", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Ward Against Theft", summary: "Harms those attempting to steal", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Shepherd's Vigil", summary: "Find the location of all herd members", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Wake with Evening's Freshness", summary: "Wake up if disturbed during the day", rouseChecks: 1, requiredTime: "5min", dicePool: "Intelligence + Blood Sorcery", ingredients: "Burnt bones of a rooster", level: 1 },
    { name: "Ward against Ghouls", summary: "Create a ward against ghouls", rouseChecks: 1, requiredTime: "5min", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 }
,
// Level 2 Rituals
{ name: "As Fog On Water", summary: "Walk on water", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Crone's Hand", summary: "Decay plant-based materials by touch for hours. Cannot affect materials protected by Cainite Ward or Warding Circle.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A pine cone, the caster’s vitae", level: 2 },
{ name: "Mask of Eros", summary: "Supernaturally increase allure for seduction or manipulation of mortals. Grants bonus to Social Pools for seduction/persuasion. Does not work on Kindred.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Fresh Sanguine-humored blood, a sprig of dried mint", level: 2 },
{ name: "Seal the Gate of Blood", summary: "Enchant an amulet to protect a person from being fed upon. Blood drawn by a vampire transmutes to sand unless taken by clinical means. Amulet is fragile and breaks if damaged.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Sand from a shoreline, natron, a piece of the recipient, the caster’s vitae", level: 2 },
{ name: "The Alamut's Tithe", summary: "Enchant a blade and container so that blood drawn by the blade from a willing Kindred is instantly transported to the container, regardless of distance. Blood cannot be used for Disciplines or Blood Bonds.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A sealable container, a bladed implement, a willing Kindred participant", level: 2 },
{ name: "Bloody Chrism", summary: "Reshape someone into Michael (Unknown)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Calix Secretus", summary: "Imbue blood into an object", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Calling the Aura's Remnants", summary: "Interrogate the memories of the dead (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Communicate with Kindred Sire", summary: "Speak telepathically to your Sire", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Craftmaster", summary: "Steal someone's skills and specialties", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Depths of Nightmare", summary: "Inflict willpower-damaging nightmares", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Elemental Grasp", summary: "Command elements to impede (Koldunic Sorcery)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Enhance Dyscrasia", summary: "Stabilize a Dyscrasia to let it be tapped repeatedly (Penny Dining Club)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Eyes of Babel", summary: "Eat someone's eyes and tongue to know all languages they know", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Illuminate the Trail of Prey", summary: "See a target's path", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Curse of The Chrone's Pride", summary: "Curse someone to be hideous and repellant", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Baptise The Unworthy", summary: "Turn the blood of a sinner into power", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Le Sang de l'Amour", summary: "Lovers know each others' locations", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Soporific Touch", summary: "Intoxicate a target to lower inhibitions", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Shroud of Silence", summary: "Prevent sound from leaving a room", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Silentia Mortis", summary: "Talisman's holder makes no sound", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Dark Heart of The Wood", summary: "Take ambient energy to make a fake spirit", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Tiamat Glistens", summary: "Attune to a place of power", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Truth of Blood", summary: "Learn whether statements are truthful", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Unseen Underground", summary: "Become invisible while underground", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Viscera Garden", summary: "Grow plants from corpses", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Ward against Spirits", summary: "Create a ward against intangible things", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Warding Circle against Ghouls", summary: "Create a warding circle against ghouls", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Web of Hunger", summary: "Steal blood from everyone underground (Special artifact)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },

// Level 3 Rituals
{ name: "Bladed Hands", summary: "Turn your hands into knives (Milwaukee)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Black Box", summary: "Hide information in an electronic device, accessible only via the caster’s vitae. Information is undetectable by conventional means. Devices act erratically for mundane tasks.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A data-capable electronic device, an engraving tool, the caster’s vitae", level: 3 },
{ name: "Splinter Servant", summary: "Imbue a stake with animation to seek and stake a Kindred. The stake uses the caster’s Resolve + Blood Sorcery to attempt staking. Can be re-enchanted if recovered.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Blood Sorcery", ingredients: "A yew stake, crimson wax, nightshade twine, the caster’s vitae", level: 3 },
{ name: "Typhon's Loving Caress", summary: "Imbue a thistle spine with the power to feed by touch, slaking Hunger and causing euphoria. Victim must resist to notice the effect.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Dexterity + Blood Sorcery", ingredients: "A thistle spine, frankincense or musk, red wine, bull or predator blood, the caster’s vitae", level: 3 },
{ name: "Blood Sigil", summary: "Store a message in a vampire's body", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Bloodless Feast", summary: "Sanctify blood and its drinkers (Bloodless)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Communal Vigor", summary: "Increase pack's BP to match priest's (Sabbat)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Dagon's Call", summary: "Rupture blood vessels remotely", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Grim Chrysalis", summary: "Entomb yourself to heal damage", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Deflection of the Wooden Doom", summary: "Prevent one staking attempt", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Elemental Shelter", summary: "Meld into an element (= Earth Meld) (Koldunic Sorcery)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Essence of Air", summary: "Fly for a limited time", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Eyes of the Past", summary: "See a scene from the past (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Ward against Aapilum", summary: "Ward against Baali and aapilum", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Fire in the Blood", summary: "Torture someone by heating their blood (Cainite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Firewalker", summary: "Protect targets against fire", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Galvanic Ruination", summary: "Destroy electrical equipment in an area", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Gentle Mind", summary: "Prevent another vampire from frenzying (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Haunted House", summary: "Make people think a building is haunted (Milwaukee)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Herd Ward (Major)", summary: "Ward a herd against others' feeding", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Illusion of Peaceful Death", summary: "Conceal the cause of death, as long as it's not exsanguination (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Illusion of Perfection", summary: "= Mask of 1000 Faces (Obfuscate 3) (Milwaukee)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Nepenthe", summary: "Remove Stains, risk addiction", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "One with the Blade", summary: "Make a weapon impervious to harm", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Sanguine Watcher", summary: "Create an animal spy (Milwaukee)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Seeing with the Sky's Eyes", summary: "Learn about a target's surroundings", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Seeking Tiamat", summary: "Locate furcae", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Sleep of Judas", summary: "Put a vampire into a drugged sleep (Special blood tree)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Soul of the Hemonculus", summary: "Create a living servant", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Stone of the True Form", summary: "End illusions and shapeshifting", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Trespass", summary: "Enter any structure", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "The Unseen Change", summary: "Lupines entering an area are forced into wolf form (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Viral Haruspex", summary: "Learn facts from cold carriers (Plague Oracle)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Death Pact", summary: "Deflect harm to a blood bound follower", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Ward against Lupines", summary: "Create a ward against werewolves", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Warding Circle against Spirits", summary: "Create a warding circle against intangible things", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },

// Level 4 Rituals
{ name: "Compel the Inanimate", summary: "Give an object a single command", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Mark of Jabal", summary: "Brand a recipient with a mark that appears under specific circumstances, granting bonuses or penalties to social pools. Can be removed by the caster at a cost.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Tattoo ink or henna, rock salt, powdered plant thorns, a sharp-tipped object, the caster’s vitae and the recipient’s vitae", level: 4 },
{ name: "Impaler's Blessing", summary: "Enchant a weapon to paralyze Kindred if it pierces the heart. Only one weapon can be enchanted at a time.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Vervain flowers, iron horseshoe or padlock, purified water, a piercing weapon", level: 4 },
{ name: "Will-o'-the-Wick", summary: "Create a candle that reveals anything concealed by supernatural means in its light. Vampires and wraiths must resist or be revealed. Candle burns for minutes equal to Blood Potency + successes.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence or Dexterity + Craft (Diff 3)", ingredients: "Grave dirt, beeswax, animal brains, crushed peat, cotton wick soaked in vitae", level: 4 },
{ name: "Directing Ahriman's Lance", summary: "Create a divining talisman from a swallowed item belonging to a target. Lowers difficulty to locate the target and buzzes when they are near.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A ritual dagger, an image or item belonging to the target", level: 4 },
{ name: "Warding Circle against Aapilum", summary: "Ward against Baali and aapilum", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Balm of Bathory", summary: "Make someone beautiful, at a cost", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Defense of the Sacred Haven", summary: "Protect an area against sunlight", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Egregore Consultation", summary: "Borrow skills from flu carriers (Plague Oracle)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Eyes of the Nighthawk", summary: "See through a raptor's eyes", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Feast of Ashes", summary: "A vampire can only feed on ashes", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Guided Memory", summary: "Access a donor's memories and powers", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Incorporeal Passage", summary: "Become insubstantial", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Innocence of the Child's Heart", summary: "Conceal diablerie and vampirism from Scry the Soul (Auspex 3) (Nicolai's secret)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Innocence's Veil", summary: "Conceal diablerie", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Invisible Chains of Binding", summary: "Keep a target from moving", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Land's Sustenance", summary: "Feed on suffering in an area", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Protean Curse", summary: "Turn someone into a bat (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Rending the Sweet Earth", summary: "Unearth a vampire using Earth Meld (Protean 3) (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Doors To Everywhere", summary: "Connect any door of a haven to another", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Notatum Unum", summary: "Create possesed Ghouls", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Riding the Earth's Veins", summary: "Teleport; no control of your destination", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Ward against Cainites", summary: "Create a ward against vampires", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Warding Circle against Lupines", summary: "Create a warding circle against werewolves", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },

// Level 5 Rituals
{ name: "Antebrachia Ignium", summary: "Ignite your arms without taking damage (Cainite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Libertas", summary: "Sever a Blood Bond between individuals, risking mental damage. Difficulty increases per additional individual. On success, the bond breaks; on failure, targets suffer Aggravated Willpower damage. Kindred reduced to 0 Willpower enter torpor; mortals may suffer strokes or Stains.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Cauldron, blood from domitor and bound, iron chain with Phoenician cuneiform, caster’s vitae", level: 5 },
{ name: "Hook of Ereshkigal", summary: "Impale and suspend the subject to resolve Stains on Humanity. Each hour, make Resolve + Blood Sorcery vs. unfilled Humanity boxes to resolve a Stain. Each hour inflicts Aggravated Damage. If Health is filled, subject meets Final Death.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Blood Sorcery", ingredients: "Large metal hook, rope or chain, blood of a mortal under entheogens", level: 5 },
{ name: "Obscene Genesis", summary: "Create a perfect clone of a vampire, which awakens as a rabid Wight. Clone shares all physical qualities and Disciplines, but has only 1 in Social and Mental Attributes. Gestation time is 30 days minus margin of success. Special: Scry the Soul reveals the clone as an abomination; Diablerie crumbles it to dust.", rouseChecks: 1, requiredTime: "30 days minus margin of success", dicePool: "Intelligence + Blood Sorcery", ingredients: "Sealed chamber, 1lb vampire flesh, human amniotic fluid, Mandragora extract, embalming chemicals", level: 5 },
{ name: "Dark Mother's Vengeance", summary: "Strip a vampire of Discipline dots for one month by anointing objects associated with them. If caster reaches Hunger 5 during the ritual, they enter torpor but the curse still takes effect.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Athame knife, pewter chalice, up to five objects from the victim, the caster’s vitae", level: 5 },
{ name: "Atrocity's Release", summary: "Undo the effects of diablerie", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Dominion", summary: "Prevent others from using disciplines in your domain", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Eden's Bounty", summary: "Drain blood from a one-mile radius (Bahari)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Elemental Attack", summary: "Attack via elements, doing agg (Koldunic Sorcery)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Escape to True Sanctuary", summary: "Set up two circles, allowing you to teleport from one to the other", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Fisher King", summary: "Learn about an area", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Heart of Stone", summary: "Remove emotions and prevent staking", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Reawakened Vigor", summary: "Restore Blood Potency after torpor", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Shaft of Belated Dissolution", summary: "Enchant a stake to cause Final Death, even if it misses the heart", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Simulacrum Gate", summary: "Teleport a large number of vampires", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Transferring the Soul", summary: "Let a Diablerized vampire take control (Oblivion 5)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Baal's Pithos", summary: "Make a construct that makes deals of power", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Ward Against Oblivion", summary: "Protect against Oblivion creatures", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
    { name: "Warding Circle against Cainites", summary: "Create a warding circle against vampires", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 }
,
// Level 4 Rituals (Added)
{ name: "Warding Circle Against Magic", summary: "Prevents all Blood Sorcery, Oblivion, Rituals, and Ceremonies within the circle. Anyone attempting to use such powers against someone inside must contest Willpower vs. the caster's Intelligence + Blood Sorcery. Also defends against non-vampiric magic.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery vs. Willpower (see V5 Corebook pg. 275)", ingredients: "Circle inscribed with the same blade used to draw the caster's vitae.", level: 4 }
];

export const powerIsRitual = (p: Power | Ritual | Ceremony): p is Ritual | Ceremony => {
    return (p as any)["ingredients"] !== undefined;
}