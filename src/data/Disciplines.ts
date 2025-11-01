import { z } from "zod"

import animalismLogo from "../resources/Rombo_Disciplines/rombo_Animalism.svg"
import auspexLogo from "../resources/Rombo_Disciplines/rombo_Auspex.svg"
import celerityLogo from "../resources/Rombo_Disciplines/rombo_Celerity.svg"
import chimestryLogo from "../resources/Rombo_Disciplines/rombo_chimerstry.svg"
import deliriumLogo from "../resources/Rombo_Disciplines/rombo_Delirium.svg"
import dominateLogo from "../resources/Rombo_Disciplines/rombo_Dominate.svg"
import fortitudeLogo from "../resources/Rombo_Disciplines/rombo_Fortitude.svg"
import koldunicLogo from "../resources/Rombo_Disciplines/rombo_koldun.svg"
import metamorphoseLogo from "../resources/Rombo_Disciplines/rombo_Metamorphosis.svg"
import melpomineeLogo from "../resources/Rombo_Disciplines/rombo_melpominee.svg"
import obfuscateLogo from "../resources/Rombo_Disciplines/rombo_Obfuscate.svg"
import potenceLogo from "../resources/Rombo_Disciplines/rombo_Potence.svg"
import presenceLogo from "../resources/Rombo_Disciplines/rombo_Presence.svg"
import proteanLogo from "../resources/Rombo_Disciplines/rombo_Protean.svg"
import bloodSorceryLogo from "../resources/Rombo_Disciplines/rombo_BloodSorcery.svg"
import oblivionLogo from "../resources/Rombo_Disciplines/rombo_Oblivion.svg"
import spiritusLogo from "../resources/Rombo_Disciplines/rombo_Spiritus.svg"
import valerenLogo from "../resources/Rombo_Disciplines/rombo_valeren.svg"
import serpentisLogo from "../resources/Rombo_Disciplines/rombo_serpentis.svg"
import quietusLogo from "../resources/Rombo_Disciplines/rombo_quietus.svg"
import necromancyLogo from "../resources/Rombo_Disciplines/rombo_necromancy.svg"
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
            {
                name: "Feral Speech",
                description: "The Kindred can speak to animals on a more primal level. Although the Kindred can speak in any language it is fluent in, it will be perfectly understood by the animal in question. The Kindred can talk to animals. Although requiring some focus the vampire can speak in any language and be understood by its intended target. The animal will respond in its own unique manner (chirping, barking, meowing) and the Kindred will be able to understand it perfectly.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Communicate with animals in any language you know. They respond in their natural manner but you understand perfectly.",
                dicePool: "None",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Animal Succulence",
                description: "The Kindreds protracted seclusion from society had forced it to adapt to feeding from animals far better than its peers. The Kindred can continue to gain sustenance from animals up to Blood Potency 4.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Continue gaining sustenance from animals up to Blood Potency 4.",
                dicePool: "None",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Alpha Beast",
                description: "The Kindred exudes a potent aura that other vampires can sense. This power functions as both an Upgrade and an Ability. As an upgrade it allows the user to add dice to their Intimidation rolls when targeting other Kindred. The number of dice they are allowed to add always equals half their Animalism + Presence Rating, rounding down. As an ability, the user stares down a Kindred who is amid a Hunger or Anger Frenzy. If successful, the user will alter the target's Frenzy to a Fear Frenzy (Rötschreck) instead, causing the target to retreat.",
                summary: "Upgrade & Ability: Add dice to Intimidation vs Kindred, can convert Frenzy to Fear Frenzy",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "presence", level: 1 }],
                dicePool: "Animalism + Presence",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Bestial Tendencies",
                description: "The eyes of this Kindred force a Vampire to reveal the true extent of their inner beast. If successful the target immediately loses the benefits of Blush Of Life, their fangs pop out and their predatory nature is on full display. The target also loses any form of supernatural obfuscation, this extends to mental trickery or manipulation of the flesh, which would make them look more human. Additionally, if the target rolls 0 successes on its Willpower roll, then one of its Disciplines will randomly activate against their will, to target the nearest Mortal/ Enhanced Mortal.",
                summary: "Force target Kindred to lose Blush of Life and supernatural obfuscation",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "dominate", level: 1 }],
                dicePool: "Animalism + Dominate",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Spawn Of Fenrir",
                description: "Popular amongst the Scandinavian Gangrel during the Viking era, this old method of strengthening one's animal ghouls had gradually fallen out of favour in modern times but had never been forgotten. Your animal ghouls add 1 dice to all physical rolls for each dot you possess in Potence, however, the animal's shape deforms the stronger it gets as more and more muscle mass is added to it.",
                summary: "Animal ghouls add 1 dice per Potence dot to physical rolls but become increasingly monstrous",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "potence", level: 1 }],
                dicePool: "None",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Cerberus",
                description: "The spirits cannot hide against this keen predator. The user's animal ghouls can see and physically injure spirits.",
                summary: "Animal ghouls can see and physically injure spirits",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }],
                dicePool: "None",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Cold Blooded",
                description: "The user momentarily let's go of all earthly echoes of their soul to more closely emulate the cold-blooded nature of a predator. The user's mind becomes focuses exclusively on the act of hunting, killing and feeding in the most efficient manner possible. They add 1 dice rolls to any rolls associated with: Feeding, Tracking, Physical Combat, Resisting Frenzy (in order to be a more efficient killer), Lying.",
                summary: "Add 1 dice to feeding, tracking, combat, resisting frenzy, and lying rolls. Reduces max Humanity to 9.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "serpentis", level: 1 }],
                dicePool: "None",
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
                summary: "Send animal into frenzy: prey flee, predators attack nearest target. No test if eye contact made",
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
                summary: "Telepathic communication with animals in visual range. No Rouse Check if you have Feral Speech",
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
            {
                name: "Pact With Animals",
                description: "Resonance is one of the few ways left in which older Kindred can truly feel alive. Those who have spent most of their time in the wild find that resonance can just as easily be extracted from the beasts of the land. The Kindred gains resonance from animals. However, unlike normal resonance provided by mortals, the Kindred instead adds one dice to any Physical roll which includes the highest Physical Attribute of the animal he most recently fed upon.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Gain animal resonance: +1 die to Physical rolls using the highest Physical Attribute of last animal fed upon.",
                dicePool: "None",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Wild Summons",
                description: "Sometimes the Kindred does not have time to look for a particular beast and simply uses its own version of a bestial siren song to lure it to its side. The Kindred lets out an animalistic sound which matches the type of animal he wishes to summon. All such instances of his desired animal within 1 kilometre (or less) will begin to make their way to his location.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Summon all animals of chosen type within 1km. No Rouse Check if you have Feral Speech/Whispers.",
                dicePool: "Animalism + Charisma",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Eye of the Swarm",
                description: "A rare few Kindred have developed methods by which they can extend the power of Animalism over insects as well. The Kindred can use his powers of Animalism to affect insects as well. However, with the following exceptions: Anytime insects are targeted by an Animalism power the difficulty roll for the powers test increases by 1. Pact with Animals and Animal Succulence does not work on insects.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Extend Animalism powers to insects. +1 difficulty, some powers don't work on insects.",
                dicePool: "None",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Feral Instincts",
                description: "The vampire is perfectly adapted to their surroundings, feeding on the local wildlife to better hunt its prey. Whenever the user feeds on an animal his senses alter to those of the animal they fed from. The user can voluntarily apply those senses as he chooses while discounting those he might not want. For instance, a mole would have a great sense of smell but horrible eyesight, so it would only be prudent for the Kindred to adopt its sense of smell. Mechanically for each different animal the user consumes, they add 1 dice to any Awareness roll, the bonuses of which are accumulative and last until the end of the night.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "protean", level: 2 }],
                summary: "Feeding on animals grants cumulative +1 dice to Awareness per animal type.",
                dicePool: "None",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Simmering Revolt",
                description: "This poison emboldens those lingering under the tyranny of their Cainite masters and allows them to break the chains of servitude, often at the cost of their own lives. If successful, the user's blood is laced with a poison that alters the drinker's perception of reality. Those who drink from the user will start to become antagonistic when in the presence of their true master(s) (in the case of Ghouls) or those who originally blood-bonded them. Worse still they are capable of transmitting this poison to others who drink from them in turn. Initially, the effect manifests itself as discomfort, progressing to anger & hatred and finally a full break occurs wherein the victim enters a Frenzy and attacks their supposed master(s).",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "quietus", level: 2 }],
                summary: "Blood poison causing ghouls/blood bonded to frenzy against masters.",
                dicePool: "Animalism + Quietus",
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
                name: "Song of Serenity",
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
                name: "Quell the Beast",
                description: "The predatory aura of the Kindred focuses itself on a kindred spirit and daunts it, forcing it to retreat further within its host. If successful the target halves all dice rolls when attempting to manifest disciplines (rounding up). Disciplines which require no test and upgrades are not affected.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Target Kindred halves dice rolls for discipline tests. Only affects Kindred, requires eye contact.",
                dicePool: "Animalism + Charisma",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Crimson Fury",
                description: "The Kindred enhances his vitae with the fury of the beast making himself a dangerous target for any would be predator who would wish to drink from him. The Kindred can empower his blood with a potent bellicose nature causing those who drink from him to risk entering Frenzy. If successful the target will initially be stunned and release the Kindred while it struggles with its own inner beast, before succumbing to Frenzy the following Round.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Anyone drinking your vitae becomes stunned then frenzies. Reflexive activation.",
                dicePool: "None",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Tainted Oasis",
                description: "Kindred, as a rule, tend to stick close to their lairs. With time their Vitae can spill into the ground and infect the local wildlife creating a veritable army of half Ghouled creatures. The Kindred choses a location, generally close to his haven, which local wildlife often uses to find nourishment, whether it be food or water, and spills some of his vitae over it. Over time the animals who frequent the site will become bonded to the Kindred.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Bond all animals in 1km area that frequent a watering/feeding spot. Requires daily maintenance.",
                dicePool: "None",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Twist the Feral Will",
                description: "The Kindred is done negotiating with other animals. He is the apex predator of his domain and his will is law. Unless the Kindred possess Feral Speech or Feral Whispers this power will only affect their animal ghouls. Normal animals will perform the Kindreds commands as best they can to the exclusion of outright killing themselves, similar to using Dominate on animals. Animal Ghouls and those affected by Tainted Oasis will perform the Kindreds command even if it means certain death.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Command animals like Dominate. Ghouls/Tainted Oasis animals obey unto death.",
                dicePool: "Animalism + Charisma",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Spirit Channeling",
                description: "The vampire merges their mastery over animals with necromantic knowledge to use animal familiars as conduits for communicating with spirits and the dead. By establishing a supernatural link with an animal companion, the vampire can channel spiritual entities through the creature, allowing for communication across the veil of death. The animal serves as a living ouija board of sorts, its movements, sounds, and behaviors translating the messages and intentions of spirits. The vampire can also use this connection to send their own consciousness into the spirit realm temporarily while their body remains protected by their animal guardian.",
                rouseChecks: 2,
                amalgamPrerequisites: [{ discipline: "necromancy", level: 3 }],
                summary: "Use animal familiars as spiritual conduits to communicate with the dead.",
                dicePool: "Animalism + Necromancy",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Pestilence",
                description: "The vampire combines their dominion over animals with shapeshifting abilities to become a living plague vector or transform creatures into carriers of supernatural disease. When activated, the vampire can either transform their own body into a writhing mass of disease-bearing vermin, insects, and parasites, or touch animals to imbue them with virulent supernatural plagues. Infected animals become aggressive carriers that spread mystical diseases to mortals and even other supernatural creatures. The vampire can control the nature and severity of the plague, from debilitating weakness to fatal contagions.",
                rouseChecks: 3,
                amalgamPrerequisites: [{ discipline: "protean", level: 3 }],
                summary: "Transform into disease incarnate or create plague-carrying animals.",
                dicePool: "Animalism + Protean",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Ashen Drought",
                description: "A horrible curse is inflicted on the victim turning them into a true horror. This power can only be activated when a successful bite attack is delivered to a target. The power has different effects depending on the victim: Mortals appear pale, unable to sleep, exhibit rabies-like symptoms, can't keep food down, terrified of water (1 month). Ghouls suffer similarly but crave only Kindred vitae, becoming violent against masters if unfed (1 week). Kindred lose Blush of Life, mouth fills with black bile causing speech penalties (-2 dice), Hunger increases by 1 every hour, feeding spreads curse for 24 hours (3 days). Thin-Bloods are unaffected and their vitae cures the curse.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "oblivion", level: 3 }],
                summary: "Bite curse with different horrific effects per creature type, cured by Thin-Blood vitae.",
                dicePool: "Animalism + Oblivion",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Inner Jackal",
                description: "The Kindred's inner beast abhors the idea of being manipulated and protects its host's mind from all forms of mental intrusions, if only for its own benefit. The user's mind is shielded by the Beast itself, granting him the following bonuses: +2 dice to any Resistance roll against Dominate or Presence; any mental/spiritual intrusion seeking to discern the user's true nature will halve its dice roll or fail automatically if no roll is required; all Animalism abilities which target the user's beast fail automatically. The beast itself becomes more active, having full conversations with its host and providing them with advice.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "fortitude", level: 3 }],
                summary: "Beast protects mind from mental intrusion, +2 dice vs Dominate/Presence, halves spiritual detection.",
                dicePool: "None",
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
                summary: "Possess animal body. Your body enters Torpor, use animal's physical stats, no disciplines.",
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
            {
                name: "Conquer The Beast",
                description: "Some Kindred who practice Animalism grow so accustomed to dealing with their own inner beast that they manage to wield it as a weapon. The Kindred can enter Frenzy or exit Frenzy at will by activating this power. Note that the power needs to be activated separately for each instance and it can be used even during a Frenzy, unlike most abilities. However, if the Frenzy is caused by an ongoing condition, such as Hunger, then the power has no effect.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Enter or exit Frenzy at will. Can be used during Frenzy. No effect on condition-caused Frenzies.",
                dicePool: "Animalism + Charisma",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "Drawing Out The Predator",
                description: "Mastering the nature of the Beast the Kindred manages to lure the inner monster of another Kindred to the surface. The end result leaving the target a frothing animal with only blood and carnage on its mind. If successful the target enters Frenzy",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Force another Kindred into Frenzy. Requires eye contact.",
                dicePool: "Animalism + Charisma",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "Shatter The Mask",
                description: "This devastating power strips away all pretense of civilization from a target, revealing the primal beast that lurks beneath the surface. The vampire combines their mastery over animals with shapeshifting abilities to force others into a state of savage, bestial fury that makes any attempt at maintaining the Masquerade impossible. The target's veneer of humanity crumbles as their inner beast takes control.",
                rouseChecks: 2,
                amalgamPrerequisites: [{ discipline: "protean", level: 3 }],
                summary: "Force target into bestial state that makes Masquerade maintenance impossible.",
                dicePool: "Animalism + Protean",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "Crimson Liberation",
                description: "This power allows the vampire to break the blood bonds and supernatural controls that bind both animals and people through a combination of primal instincts and supernatural resilience. The vampire channels their inner beast while simultaneously tapping into their undead fortitude to shatter mental chains, freeing victims from vampiric domination, blood bonds, and other forms of supernatural mental control.",
                rouseChecks: 2,
                amalgamPrerequisites: [{ discipline: "fortitude", level: 3 }],
                summary: "Break blood bonds and supernatural mental controls through primal liberation.",
                dicePool: "Animalism + Fortitude",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "Artemis's Blessing",
                description: "This Vampire is a hunter of unparalleled skill, capable of tracking all forms of quarry. The user can track down the whereabouts of the last individual they fed from. Bottled blood counts as well. The effect materializes differently for each Kindred. Some might follow an invisible strand to their target, others might sniff out their quarry like a bloodhound and others might follow a specific melody which grows stronger the closer they come to their prey. In either event, unless the target is no longer on this plane of existence or more than 100 kilometres (60 miles) away, the user will be able to track them down. This power is so precise the user can even find their quarry if it is supernaturally obfuscated or underground.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "auspex", level: 4 }],
                summary: "Track the last individual whose blood you sampled within 100km, bypasses supernatural obfuscation.",
                dicePool: "None",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "Artemis's Malediction",
                description: "A bite from this Kindred quickens a Vampire's bestial hunger. The user can voluntarily inflict this curse upon any Kindred or Thin-Blood they bite. The victim must make an extra Rouse Check for each power they use, excluding upgrades. Furthermore, each time the victim rolls a 1 on a Rouse Check they automatically increase their Hunger to 5 and risk a Hunger Frenzy. The power is treated as a Poison for the purposes of Resisting its effects.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "celerity", level: 4 }],
                summary: "Bite curse causing extra Rouse Checks and Hunger 5 on natural 1s, lasts 3 nights.",
                dicePool: "None",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "An-Zil",
                description: "Literally translating from old Sumerian to mean abomination, this unique technique turns a normal animal ghoul into a dangerous instrument of destruction. This ability can only be used on an animal ghoul the user possesses. The animal must have been a ghoul for at least a year before the ability can even be attempted otherwise the enhanced vitae will immediately send it into a death frenzy. If successful the animal will grow in strength and intelligence, adding one dot to each of its attributes. It will also develop all other Cainite characteristics such as a Hunger track, increased durability, a weakness to fire etc. In fact, the animal is a Kindred in all but name with the exception that it cannot Embrace others and only develops a single Level 1 power the user currently possesses. As an animal has far less self-control than most mortals, it is far more likely to succumb to a Hunger or Anger Frenzy and devour its victims whole. If it manages to fully devour another Kindred, basically diablerizing them in the process, then it will immediately develop one of its victim's Level 1 Disciplines permanently and it will grow more monstrous with each diablery it performs.",
                rouseChecks: 2,
                amalgamPrerequisites: [{ discipline: "protean", level: 4 }],
                summary: "Ritual: Transform animal ghoul into quasi-Kindred abomination with enhanced attributes and powers.",
                dicePool: "Animalism + Protean",
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
            {
                name: "Beast Surge",
                description: "The vampire taps into the raw, untamed power of the Beast within, momentarily enhancing their physical prowess. However, calling on this primal force comes with great risk, as it may provoke the Beast to rise, threatening the vampire's control.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Adds Animalism dice to physical actions but requires Terror Frenzy check",
                dicePool: "Terror Frenzy resistance roll",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Test the Road",
                description: "Originally developed by adherents of the Road of the Beast in the Dark Ages, Test the Road allowed them to discern the sincerity of pilgrims visiting their feral sanctuaries. Over time, the Sabbat adopted this power, using it as a tool for assessing the motives of potential converts.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "auspex",
                        level: 2
                    }
                ],
                summary: "Reveals target's Road alignment, rating, and philosophical leanings",
                dicePool: "Resolve + Animalism vs Road Rating",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Wintering",
                description: "In the long, dark winters of Scandinavia, animals often conserve their energy by sleeping through the harshest months when food is scarce. Vampires of the Northern Hemisphere have learned to mimic this survival tactic by entering a state of voluntary torpor.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "fortitude",
                        level: 2
                    }
                ],
                summary: "Enter extended voluntary torpor to conserve blood during harsh periods",
                dicePool: "Stamina + Animalism (for extension)",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Predator's Communion",
                description: "Used by Sabbat scouts in hostile territories, this ability sharpens a vampire's senses to detect the presence of any nearby vampires or ghouls. It allows the user to estimate the number of potential enemies and pinpoint their gathering places.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "auspex",
                        level: 3
                    }
                ],
                summary: "Detects all nearby vampires and ghouls within extended range",
                dicePool: "Resolve + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Territorial Dominion",
                description: "The vampire marks their surroundings with an intangible aura of dominance. Within this space, all creatures, including other vampires, instinctively feel they are in the vampire's domain.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Creates territorial zone that imposes penalties on challengers to vampire's authority",
                dicePool: "Charisma + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Predator's Gaze",
                description: "The vampire taps into their primal connection with the Beast to subdue and dominate any creature that possesses a similar inner predator. This power works on vampires, Lupines, Wraiths, predatory animals, and even humans with a Humanity score of 3 or lower.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Compels obedience through fear in creatures with predatory nature",
                dicePool: "Manipulation + Animalism vs Composure + Resolve",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "Cloak the Beast",
                description: "Even vampires who struggle to control their Beast can learn to hide their inner savagery from prying eyes. With this ability, a vampire can expertly mask the strength of their Beast and conceal their true Road, projecting an image of stability and conformity.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "obfuscate",
                        level: 3
                    }
                ],
                summary: "Hides true nature of Beast and Road from detection powers",
                dicePool: "Manipulation + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Unyielding Hunger",
                description: "When cornered, the vampire can draw strength from their own unrelenting hunger, transforming desperation into raw power. This ability allows the vampire to convert Hunger into physical strength, temporarily sacrificing control over their Beast to survive.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Converts Hunger levels into temporary Strength bonuses with Frenzy penalties",
                dicePool: "Stamina + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Domitor's Web",
                description: "By tapping into their primal connection with the Blood Bond, the vampire forms a telepathic hive-mind with all of their Bound ghouls within range. This connection allows the vampire to coordinate their ghouls seamlessly, directing them as a collective.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "auspex",
                        level: 5
                    }
                ],
                summary: "Creates telepathic hive-mind control over bound ghouls within range",
                dicePool: "Resolve + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Unchained Fury",
                description: "Kindred and its inner Beast rarely see eye to eye. None know this better than those who have mastered Animalism. The vampire takes advantage of this division and turns it against his target. If successful the target enters Frenzy but directs all of its attacks against itself. Its attacks hit automatically when targeting itself and the character cannot use Willpower to gain momentary clarity for the first round of the powers affect.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Target enters self-destructive Frenzy, automatically hitting themselves for 1 round, no Willpower clarity.",
                dicePool: "Animalism + Charisma",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Hounds Of Tartarus",
                description: "The vampire calls forth spectral hounds from the realm of the dead to serve as both hunters and guardians. These ghostly creatures appear as shadowy canines with glowing eyes, combining the vampire's mastery over animals with their command of necromantic forces. The hounds can track specific targets across great distances, phase through solid matter, and fight with supernatural ferocity against the vampire's enemies.",
                rouseChecks: 3,
                amalgamPrerequisites: [{ discipline: "necromancy", level: 4 }],
                summary: "Summon spectral hounds that can track targets and phase through matter.",
                dicePool: "Animalism + Necromancy",
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
            { name: "Possession", description: "Possess a human.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }], summary: "Possess a human.", dicePool: "Resolve + Auspex", level: 5, discipline: "auspex" },
            { name: "Telepathy", description: "Read minds and project thoughts.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Read minds and project thoughts.", dicePool: "Wits + Auspex", level: 5, discipline: "auspex" },
            { name: "Unburdening the Bestial Soul", description: "Remove/shield against Stains, make Dominate easier, restore Humanity.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }, { discipline: "auspex", level: 2 }], summary: "Remove/shield against Stains, make Dominate easier, restore Humanity.", dicePool: "Resolve + Auspex", level: 5, discipline: "auspex" },
            {
                name: "Rite of Enigmas",
                description: "By immersing themself in an intense study of riddles and mysteries, the Malkavian is able to temporarily subvert the effects of their clan's madness.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "delirium",
                        level: 1
                    }
                ],
                summary: "Suppresses clan bane and gains bonuses to riddles, but penalties to Auspex/Delirium.",
                dicePool: "Resolve + Auspex",
                level: 2,
                discipline: "auspex",
            },
            {
                name: "Eye of Madness",
                description: "By briefly addressing the mystai, the deacon implants a suggestion into their mind, that manifests to the mystai as if their madness is coalescing into hundreds of eyes, all buried beneath their skin.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "delirium",
                        level: 2
                    }
                ],
                summary: "Forces the target to harm themselves, risking Frenzy or epiphany.",
                dicePool: "Charisma + Auspex vs Composure + Wits",
                level: 3,
                discipline: "auspex",
            },
            {
                name: "Drink the Mind",
                description: "Through the dark art of Diablerie, the Kyasid has learned to not only consume the soul of their victim but also to extract valuable memories and knowledge. This rare and powerful ability allows the Kyasid to inherit the skills and insights of the devoured Cainite.",
                rouseChecks: 0,
                amalgamPrerequisites: [
                    {
                        discipline: "dominate",
                        level: 3
                    }
                ],
                summary: "During Diablerie, absorb memories and skills instead of vampiric powers",
                dicePool: "None (used during Diablerie)",
                level: 3,
                discipline: "auspex",
            },
            {
                name: "Riddle Phantastique",
                description: "The Kyasid, delving into forbidden knowledge from the Abyss, weaves an impenetrable and maddening riddle, forcing their victim's mind to wrestle with unsolvable truths. This enigmatic puzzle occupies the victim completely, driving them to obsession and potentially madness.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "dominate",
                        level: 4
                    }
                ],
                summary: "Traps victim's mind with an unsolvable riddle, causing obsession and potential madness",
                dicePool: "Wits + Auspex vs Intelligence + Resolve",
                level: 5,
                discipline: "auspex",
            },
            {
                name: "Detect Authority",
                description: "By tapping into their primal instincts, the vampire can intuitively discern the social hierarchy within any group of living or undead creatures. The Beast within senses the authority and influence of those present.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "animalism",
                        level: 2
                    }
                ],
                summary: "Reveals social hierarchy and power dynamics within observed groups",
                dicePool: "Wits + Auspex",
                level: 3,
                discipline: "auspex",
            },
            {
                name: "Primal Memory",
                description: "The Gangrel taps into the genetic and instinctual memory of their Beast, allowing them to draw upon ancestral knowledge from their bloodline or even ancient predators. This power allows the vampire to gain insights into unfamiliar situations.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "animalism",
                        level: 3
                    }
                ],
                summary: "Accesses ancestral predatory memories for knowledge and survival insights",
                dicePool: "Resolve + Animalism",
                level: 3,
                discipline: "auspex",
            },
            {
                name: "Eyes of a Thousand Shades",
                description: "The vampire is able to perceive through the senses of a nearby Wraith, as if they were using their own eyes or ears. The vampire must be aware of a nearby ghost is nearby in order to borrow its senses, and if it is unable to perceive for some reason, this power does not work.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "oblivion",
                        level: 3
                    }
                ],
                summary: "Perceive through the senses of nearby wraiths and ghosts",
                dicePool: "Resolve + Auspex",
                level: 5,
                discipline: "auspex",
            },
            {
                name: "Arcane Sight",
                description: "The vampire can perceive residues of Blood Sorcery on items and people. By focusing upon an object of person for a turn, the vampire is able to perceive, understand, and even analyze the effects of Blood Sorcery powers upon the object or person they are observing.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "blood sorcery",
                        level: 1
                    }
                ],
                summary: "Detects and analyzes Blood Sorcery effects on objects and people",
                dicePool: "Intelligence + Auspex",
                level: 1,
                discipline: "auspex",
            },
            {
                name: "Chaos Rhythm",
                description: "The vampire taps into the unpredictable flow of the world, allowing them to anticipate an opponent's actions with uncanny precision. Rather than reading thoughts or glimpsing the future, Chaos Rhythm enables the vampire to discern the hidden patterns in their opponent's behavior.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Gains combat bonuses by observing and predicting an opponent's patterns",
                dicePool: "None (observation required)",
                level: 2,
                discipline: "auspex",
            },
            {
                name: "Soul's Echo",
                description: "The vampire touches the soul of a subject, briefly accessing fragments of their emotional and psychic history. This power allows the vampire to glimpse the target's greatest fears, hopes, or unresolved trauma.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "delirium",
                        level: 2
                    }
                ],
                summary: "Reads target's emotional history for social manipulation bonuses",
                dicePool: "Resolve + Auspex vs Composure + Intelligence",
                level: 3,
                discipline: "auspex",
            },
            {
                name: "Sense Vitality",
                description: "The vampire can instinctively read the target's physical and mental state, discerning any injuries, illnesses, or other afflictions with a touch. While the Salubri Healers use this ability to mend the suffering of others, the Warriors employ it to assess their enemy's weaknesses.",
                rouseChecks: 0,
                amalgamPrerequisites: [
                    {
                        discipline: "fortitude",
                        level: 1
                    }
                ],
                summary: "Reads target's complete physical and mental health status through touch",
                dicePool: "None (automatic)",
                level: 1,
                discipline: "auspex",
            },
            {
                name: "Dispel",
                description: "When the vampire uses their heightened perception to pierce through a supernatural illusion or obscurement, they can employ this power to forcibly unravel it, revealing the truth to everyone around them rather than just themselves.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "presence",
                        level: 3
                    }
                ],
                summary: "Violently dispels illusions and reveals truth to all nearby observers",
                dicePool: "Strength + Auspex vs Manipulation + Subterfuge",
                level: 5,
                discipline: "auspex",
            },
            {
                name: "Record Sensation",
                description: "The vampire with this power can imprint a physical sensation—anything from the ecstasy of passion to the torment of pain—into the muscle memory of someone they touch, including themselves. This stored sensation can be triggered later.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "metamorphose",
                        level: 2
                    }
                ],
                summary: "Stores physical sensations in body memory for later replay",
                dicePool: "Resolve + Auspex vs Composure + Stamina",
                level: 4,
                discipline: "auspex",
            },
            // Additional Level 1 Powers
            { 
                name: "Sensory Shield", 
                description: "The Kindred had been properly tutored in the art of Auspex and is trained to reflexively shut off the flow of information if in danger of being overwhelmed. The Kindred cannot be stunned due to loud sounds, bright flashes, horrid tastes, intrusive smells or maddening textures. This power functions even if no Auspex power is currently being used by the Kindred. The power doesn't negate the Discipline Bane if the Kindred rolls a 1 on a Rouse Check.",
                rouseChecks: 0, 
                amalgamPrerequisites: [], 
                summary: "Immunity to sensory stunning. Active Auspex powers cease if overwhelmed but no stunning occurs.", 
                dicePool: "None", 
                level: 1, 
                discipline: "auspex" 
            },   
            { 
                name: "Memory of Blood", 
                description: "The Kindred has more than an acquired taste for blood. He can in fact see the life lived by the vessel he is drinking from. The Kindred sees flashes of memories from those whose blood they are drinking. This ability grows more powerful as the Auspex rating increases. At 1 dot the Kindred has access to the victims' memories up to the last hour, at 2 dots up to the last 24 hours, at 3 dots up to the last week, at 4 dots up to the last month and at 5 dots up to the last year. The memories come in a stream of flashes and can be difficult to decipher.",
                rouseChecks: 0, 
                amalgamPrerequisites: [], 
                summary: "See memories from blood you drink. Duration depends on Auspex rating: 1hr/24hr/week/month/year.", 
                dicePool: "Auspex + Wits", 
                level: 1, 
                discipline: "auspex" 
            },
            // Additional Level 2 Powers
            { 
                name: "Sense Vibrations", 
                description: "Fear, anger, lust, joy and more. The Kindred can sense the emotions of the herd just by being in their vicinity. The Kindred can sense the prevailing emotions of those around him. The power automatically targets all individuals in the Kindred's vicinity. It can be used on a single individual, provided the Kindred is alone with them.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Sense emotions of all individuals within 10 meters of you.", 
                dicePool: "Auspex + Wits", 
                level: 2, 
                discipline: "auspex" 
            },
            { 
                name: "Share Senses", 
                description: "Sometimes the easiest way to make others understand is for them to be able to see things from your perspective. Luckily some Kindred can do just that. The Kindred touches another individual. As long as their physical touch remains unbroken the targeted individual will be able to perceive the world around them through the Kindred's senses.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Share your senses with up to 2 touched individuals while physical contact is maintained.", 
                dicePool: "Auspex + Wits", 
                level: 2, 
                discipline: "auspex" 
            },
            { 
                name: "Eagle's Sight", 
                description: "The Kindreds senses cease to be limited to their location as the Kindred gets a bird eye view of his surroundings. Inexperienced Auspex users believe this is simply an evolution of the senses but masters of the art know that its more akin to a short-term astral projection. If successful the Kindred will have a bird's eye view of his surrounding area. While the power is in effect the Kindred is considered to be in Torpor.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Bird's eye view from 10 meters above your location. Body enters Torpor during use.", 
                dicePool: "Auspex + Wits", 
                level: 2, 
                discipline: "auspex" 
            },
            { 
                name: "Whispers of the Dammed", 
                description: "The Kindred had learned how to send a short telepathic message. Young Kindred use this power for its practicality, but more experienced vampires, especially those in the Sabbat, use the power to haunt the minds of their prey. The Kindred can send a short one sentence telepathic message to any individual within visual range.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Send one sentence telepathic message to target in visual range. No cost/test if eye contact or blood bonded.", 
                dicePool: "Auspex + Wits", 
                level: 2, 
                discipline: "auspex" 
            },
            // Additional Level 3 Powers
            { 
                name: "Spirit Touch", 
                description: "Older Kindred know that even small and unassuming objects have spirits of their own. Although these often pale in comparison to those of living creatures they are simple minded beings who soak in the spiritual essence around them. If successful the Kindred will get to see flashes of past events which occurred in the object's presence. The more successes the more accurate the vision. If the user possesses the Sense Vibrations power than he can also sense the emotions of those who were near the object.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Touch object to see past events in its presence. Also sense emotions if you have Sense Vibrations.", 
                dicePool: "Auspex + Wits", 
                level: 3, 
                discipline: "auspex" 
            },
            { 
                name: "An Ear For Lies", 
                description: "There is an art to reading the tone and colour of a person's voice. Auspex users can pick up on minute details on how a sentence is phrased allowing them to pick up on lies with ease. If successful the Kindred can accurately establish whether or not an individual is telling the truth or not. The truth, in this case, is only what the target believes to be true so if your target is under mental manipulation, telling half-truths or had been lied to themselves the power may not have the desired outcome.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Detect lies during conversation. Requires hearing target and eye contact.", 
                dicePool: "Auspex + Wits", 
                level: 3, 
                discipline: "auspex" 
            },
            { 
                name: "Precognition", 
                description: "The powers of Auspex can sometimes provide the Kindred with premonitions far into the future. If successful the Kindred will receive a prediction about an object or an individual. The accuracy of the prediction is dictated by the number of successes and the discretion of the Storyteller. If the Kindred has the power of Premonition as well than you will receive one random vision per Session without needing to activate this ability. This is at the discretion of the Storyteller.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Receive predictions about individuals/objects you've seen. Free random visions if you have Premonition.", 
                dicePool: "Auspex + Wits", 
                level: 3, 
                discipline: "auspex" 
            },
            { 
                name: "Crocodile Tongue", 
                description: "Not all Auspex users focus on enhancing their senses to a supernatural degree, some pair their powers with their social skills. While talking to the target they are able to use limited telepathy to say exactly what the person wants to hear. The Kindred adds 2 dice to all non-supernatural Persuasion and Subterfuge rolls.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Add 2 dice to non-supernatural Persuasion and Subterfuge rolls.", 
                dicePool: "Auspex + Wits", 
                level: 3, 
                discipline: "auspex" 
            },
            // Additional Level 4 Powers
            { 
                name: "Mind Speech", 
                description: "The Kindred had learned not only how to pass their thoughts onto others but to listen to their responses as well. If successful the Kindred opens a two-way mental communication between himself and the target.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Two-way telepathic communication with target in visual range. No cost/test if eye contact or blood bonded.", 
                dicePool: "Auspex + Wits", 
                level: 4, 
                discipline: "auspex" 
            },
            { 
                name: "Clairvoyance", 
                description: "For creatures who are hunters and had been hunted in turn the ability to quickly assess their territory can be incredibly useful. If successful the Kindred will be provided with basic information about their immediate surroundings up to 10 kilometres (5 miles). Meeting the basic test difficulty will tell the Kindred the lay of the land, a rough number of mortals, animals, vegetation and hints of other supernatural creatures. For each success the Kindred exceeds the minimum test requirement, the more detailed information he will gather on the area.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Gather detailed information about area within 10km. Body enters Torpor during ritual.", 
                dicePool: "Auspex + Wits", 
                level: 4, 
                discipline: "auspex" 
            },
            { 
                name: "Sight of the Oracle", 
                description: "The most competent Auspex users who tap into the powers of premonition become akin to oracles within Kindred society. If successful the Kindred gains an extensive and important prediction of the future. This power doesn't necessarily target any single individual, object or location, although the player can advise the storyteller that those are of special interest to them. The result of the power is left to the discretion of the Storyteller but should be something linked with the main plot of the chronicle.",
                rouseChecks: 1, 
                amalgamPrerequisites: [], 
                summary: "Receive major plot-relevant visions of the future. Body enters Torpor during ritual.", 
                dicePool: "Auspex + Wits", 
                level: 4, 
                discipline: "auspex" 
            },
            // Additional Level 5 Powers
            { 
                name: "Master's Call", 
                description: "The Kindred is a master of Telepathy and can communicate with his thralls across great distances. The Kindred can use Mind Speech on Ghouls, Blood Bonded Kindred or living family members regardless of distance. For such targets Mind Speech no longer requires Visual range and the effects of the power have no range limit.",
                rouseChecks: 0, 
                amalgamPrerequisites: [], 
                summary: "Use Mind Speech on ghouls/blood bonded/family at unlimited range without visual requirement.", 
                dicePool: "None", 
                level: 5, 
                discipline: "auspex" 
            },
            { 
                name: "Astral Projection", 
                description: "The Kindred had learned to project his spirit out of his body. If successful the Kindred projects a spiritual avatar which looks like their own body. The avatar is considered a spirit. It is invisible to normal eye sight, can pass through walls and has the power of flight. The avatar can even enter other spiritual domains if he finds an access point to them. However, the Kindred does not have access to his disciplines while in his avatar form. Additionally, regardless if he is a spirit or not the Kindred will still be harmed by sunlight.",
                rouseChecks: 2, 
                amalgamPrerequisites: [], 
                summary: "Project spirit form that's invisible, can fly and pass through walls. Body in Torpor, no disciplines in spirit form.", 
                dicePool: "Auspex + Wits", 
                level: 5, 
                discipline: "auspex" 
            },
            // Additional Amalgam Powers
            {
                name: "Tyrant's Circle",
                description: "The user despises mental and spiritual intrusion. His spirit doesn't just block those who look too closely, it outright lashes out at them. Whenever the user is targeted by a power that seeks to discern information from the user's mind or spiritual aura the intruder suffers immense psychological pain. Initially, the power inflicts a 2 dice penalty to any individual attempting to read the user's mind or their spiritual aura. However, if the intruder does not make any successes on their rolls or has no dice to roll (or no roll is needed), once the penalty is applied, then they suffer a point of Aggravated Willpower Damage as well and are stunned for 1 Round.",
                summary: "Upgrade: Penalties and damage to those trying to read your mind or aura",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }],
                dicePool: "None",
                level: 1,
                discipline: "auspex",
            },
            {
                name: "Nikolai's Acuity",
                description: "The Kindred is well connected to the Madness Network and has a habit of tracing down those who possess a neurological divergence. When you successfully use this ability roll a D10 and apply the odds or evens result accordingly. Odds – You have managed to lock onto a mortal with a neurological disorder who is not yet connected to the Madness Network. Evens – You have managed to lock onto another Delirium user. Regardless of what result you get, when you lock onto a target using this power you will be able to discern their location for the 1 week and will know instinctively when you have found them.",
                summary: "Ritual: Locate mortals with neurological disorders or Delirium users",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "delirium", level: 1 }],
                dicePool: "Auspex + Delirium",
                level: 1,
                discipline: "auspex",
            },
            {
                name: "Terra's Unflinching Gaze",
                description: "Few things remain hidden from this Kindred, buried or otherwise. If successful, the user can see the spirit of the natural world around them. This sight doesn't work like normal Sense The Unseen or similar. Instead, to the user, the world becomes vibrant and bright as they see the spiritual emanations of the Earth itself. These emanations do not directly reveal the presence of supernatural entities or obfuscated individuals, but, much like the surface of water, every individual and object causes ripples to occur which the user can see. Mechanically the user adds 3 dice to any Awareness-based rolls and can perform a Wits + Awareness roll to see past supernatural obfuscation or determine the presence of spirits.",
                summary: "See spiritual emanations of Earth, +3 dice to Awareness rolls",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "protean", level: 1 }],
                dicePool: "Auspex + Protean",
                level: 1,
                discipline: "auspex",
            },
            {
                name: "Mental Sanctum",
                description: "A portion of the Kindred's mind remains an impartial observer during times of crisis. A small portion of the user's mind is kept separate from the rest of their thoughts. The nature of this minor personality is completely focused on advising its larger whole impartially and is protected from most forms of physical, mental and spiritual intrusion. When the user is impacted by a supernatural effect, the minor personality memorizes what occurs and provides this information afterwards as best as it can to its larger whole. While mechanically this power simply adds 2 dice to any attempts made by the user to resist ongoing mental, physical or spiritual manipulation (it cannot be used to prevent the manipulation from first occurring) it's uses vary and Storytellers are encouraged to apply it as a helpful storytelling tool.",
                summary: "Upgrade: +2 dice to resist ongoing manipulation, impartial mental advisor",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "valeren", level: 1 }],
                dicePool: "None",
                level: 1,
                discipline: "auspex",
            },
            {
                name: "Sense The Wellspring Of Life",
                description: "Time and distance can often keep a vampire from their loved ones. With this talisman, they might not be able to see them, but they will at least be assured of their safety. For the ritual to succeed the user needs a vial of the target's blood. During the alchemical ritual, the blood is reduced to a few drops worth and placed into a clear container (usually a small glass vial embedded in a locket-sized talisman). If the target is alive and healthy the blood in the talisman will remain vibrant and red. If the target is injured or ill it will turn a dark crimson. If the target dies or is dead, it will turn black.",
                summary: "Ritual: Create talisman that shows target's health status via blood color",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "quietus", level: 1 }],
                dicePool: "Auspex + Quietus",
                level: 1,
                discipline: "auspex",
            },
            { 
                name: "Strike The Ley Lines", 
                description: "The user seems to strike empty air at first only for the world around to shudder. Ley Lines are lines of spiritual energy that crisscross the world. Each Ley Line is a font of spiritual energy which is highly sought after by Mages, Cainite Sorcerers, Garou and other creatures. They are invisible to those without supernatural senses and extremely rare. This power acts as an Upgrade and an Ability. As an Upgrade, the user can sense and see Ley Lines when near them (within 10 meters or 30 feet). As an Ability, the user projects a portion of their spirit into their fists to strike the Ley Line itself. As Ley Lines are the equivalent of a major artery for the spiritual world the result of striking them can vary.", 
                rouseChecks: 1, 
                amalgamPrerequisites: [{ discipline: "potence", level: 2 }], 
                summary: "Strike Ley Lines for varied powerful effects, can sense Ley Lines.", 
                dicePool: "Auspex + Potence", 
                level: 2, 
                discipline: "auspex" 
            },
            { 
                name: "Seek The World Vein", 
                description: "The user enters a deep trance and is guided by spirits to a location of significant spiritual power. This power works as an Upgrade and an Ability. As an Upgrade, the user can sense and see Ley Lines when near them (within 10 meters or 30 feet). As an Ability, the user enters a trance-like state in which he will move to a location where a Ley Line can be accessed. When in such a trance they will still be able to operate vehicles, avoid obvious dangers (like walking into traffic) and retain the bare basic communication skills. This trance is broken if the user is attacked, or they reach their desired destination. Once the trance breaks the user will have no memory of their travel to the location and will likely not recognize their new surroundings. Regardless, they are, for all intents and purposes, now standing in front of an active Ley Line.", 
                rouseChecks: 1, 
                amalgamPrerequisites: [{ discipline: "koldunic", level: 2 }], 
                summary: "Ritual: Trance-guided travel to nearest Ley Line, can sense Ley Lines.", 
                dicePool: "Auspex + Koldunic", 
                level: 2, 
                discipline: "auspex" 
            },
            { 
                name: "Blessings Of The Angel's True Form", 
                description: "Innumerable eyes manifest across the user's body. Clothing and armour are no obstruction as the fleshy growths manifest upon them, fusing flesh and material. If successful, the user manifests dozens of eyes across their body. These eyes will even manifest upon any clothing they are wearing and armour itself is no obstruction. The fleshy growths fuse flesh and material temporarily. While the eyes remain present the user automatically passes any Awareness rolls and can see spirits (of all types), through all forms of darkness (supernatural or otherwise) and can even see Obfuscated individuals. However, the innumerable eyes create a confusing picture for the user and while their awareness is expanded to inhuman levels their other skills are impacted, causing the user to suffer a 1 dice penalty to all other rolls. In addition, the form itself creates a horrific sight and any Mortals witnessing the Kindred in this altered state will flee the Scene unless they pass a Willpower test (3). Enhanced Mortals and Kindred (while disturbed by the sight) are not affected.", 
                rouseChecks: 1, 
                amalgamPrerequisites: [{ discipline: "metamorphose", level: 2 }], 
                summary: "Manifest eyes across body for perfect awareness but -1 dice to other rolls, terrifies mortals.", 
                dicePool: "Auspex + Metamorphose", 
                level: 2, 
                discipline: "auspex" 
            },
            { 
                name: "A Moment Of Eternity", 
                description: "Time seems to stretch out and slow for the user. For a few brief moments, they can see their surroundings, unaffected by time itself. This Upgrade is allowed to be used once per Scene. The user can perform a Wits + Awareness roll to investigate a particular target or their general surroundings. This roll is unaffected by the chaos of the moment, giving the user a valuable ability to assess their surroundings or a particular target calmly. They can then apply the knowledge gleaned towards their next action accordingly. This analysis of the situation occurs outside of the normal order of play (in between two Rounds).", 
                rouseChecks: 1, 
                amalgamPrerequisites: [{ discipline: "celerity", level: 2 }], 
                summary: "Once per scene, analyze situation with unaffected Wits + Awareness roll outside normal play order.", 
                dicePool: "Wits + Awareness", 
                level: 2, 
                discipline: "auspex" 
            },
            { 
                name: "Wraith Sight", 
                description: "The vampire's supernatural perception allows them to see beyond the veil of death itself, perceiving spirits and wraiths with perfect clarity while also being able to interact with them as if they were solid. This enhanced spiritual sight reveals not only the presence of the restless dead but also their emotional states and general intentions. The vampire can see, hear, and even physically interact with spirits and wraiths as though they possessed corporeal forms. This interaction is bidirectional - spirits can also see and interact with the vampire normally.", 
                rouseChecks: 2, 
                amalgamPrerequisites: [{ discipline: "necromancy", level: 3 }], 
                summary: "See and physically interact with spirits and wraiths as if they were solid beings.", 
                dicePool: "Auspex + Wits", 
                level: 3, 
                discipline: "auspex" 
            },
            { 
                name: "Arad Asbu", 
                description: "Derived from Sumerian, 'to serve the shadows', this old ritual brings practitioners closer to the font of their power. If successful, the user communicates directly with the Abyss itself. This can be an incredibly uncomfortable experience for new practitioners as they are brought face to face with the font of their power and the malignant intelligence inherent in its predatory nature. Still, if one persists, he will be granted knowledge by the Abyss. The user adds 1 dice to any Oblivion-related roll they make for the rest of the Session. The ritual must be performed in a dark environment with little or no lights present.", 
                rouseChecks: 1, 
                amalgamPrerequisites: [{ discipline: "oblivion", level: 3 }], 
                summary: "Ritual: Communicate with the Abyss for knowledge, +1 dice to Oblivion rolls for session.", 
                dicePool: "Auspex + Oblivion", 
                level: 3, 
                discipline: "auspex" 
            },
            { 
                name: "A Familiar Face", 
                description: "No matter where this Vampire travels to, they have people who they always can call 'friend'. The user appears as a familiar face to any who meets them. No test needs to be made against Mortals. To those impacted, the user is at first unfamiliar, but the victim's mind soon forms false memories of their time together. This effect grows worse the more times the victim is impacted by the same power, as the false memories become stronger and more permanent. Over time the power will no longer need to be used as the victim will have created a whole false timeline of their life spent alongside the user. This usually occurs after the 5th successful use of this power on an individual.", 
                rouseChecks: 1, 
                amalgamPrerequisites: [{ discipline: "presence", level: 3 }], 
                summary: "Appear as familiar face to create false memories that become permanent after 5 uses.", 
                dicePool: "Auspex + Presence", 
                level: 3, 
                discipline: "auspex" 
            },
            { 
                name: "Find The Magos", 
                description: "Since the fall of Vienna, clan Tremere had lost many of its members to desertion. Over time it became apparent that these traitors would need to be hunted down to preserve the clan's secrets, thus a special elixir was created. For this power to work the user must recover an item from a ritual site. This could be a used vial, ash, dirt, blood, the remains of victims, or whatever might have been left behind, used or impacted by the ritual. Afterwards, the item they recovered is crushed and mixed with a healthy dose of the user's own vitae. If successful, the user will create enough elixir for up to 3 separate uses. Those who consume the drink will see a faint strand of red twisting and shifting through the air. If they follow the strand, it will lead them to the individual who cast the original Ritual. The strand bypasses all attempts at supernatural obfuscation or illusions and functions even on other Supernatural Creatures (Garou, Mages, Mummies etc.), as long as they perform a ritual they can be tracked.", 
                rouseChecks: 1, 
                amalgamPrerequisites: [{ discipline: "blood sorcery", level: 3 }], 
                summary: "Ritual: Create tracking elixir from ritual site remnants, creates visible strand leading to original caster.", 
                dicePool: "Auspex + Blood Sorcery", 
                level: 3, 
                discipline: "auspex" 
            },
            { 
                name: "Artemis's Blessing", 
                description: "This Vampire is a hunter of unparalleled skill, capable of tracking all forms of quarry. The user can track down the whereabouts of the last individual they fed from. Bottled blood counts as well. The effect materializes differently for each Kindred. Some might follow an invisible strand to their target, others might sniff out their quarry like a bloodhound and others might follow a specific melody which grows stronger the closer they come to their prey. In either event, unless the target is no longer on this plane of existence or more than 100 kilometres (60 miles) away, the user will be able to track them down. This power is so precise the user can even find their quarry if it is supernaturally obfuscated or underground.", 
                rouseChecks: 0, 
                amalgamPrerequisites: [{ discipline: "animalism", level: 4 }], 
                summary: "Track the last individual whose blood you sampled within 100km, bypasses supernatural obfuscation.", 
                dicePool: "None", 
                level: 4, 
                discipline: "auspex" 
            },
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
            { name: "Unerring Aim", description: "Make ranged attacks at Difficulty 1.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Make ranged attacks at Difficulty 1.", dicePool: "Dexterity + Firearms", level: 4, discipline: "celerity" },
            { name: "Unseen Strike", description: "Make melee attacks at Difficulty 1.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 4 }, { discipline: "celerity", level: 3 }], summary: "Make melee attacks at Difficulty 1 (Requires Blink).", dicePool: "Dexterity + Melee", level: 4, discipline: "celerity" },
            { name: "Jitter", description: "The vampire concentrates their accelerated vitae in a single limb to—in a sudden burst—push, pull, or grab something faster than eyes can see. While this power can't be used to launch a full-blown sneak attack, it allows the vampire to imperceptibly plant an item in someone's pocket, pull a gun out of a police officer's holster, or push an unaware victim under a literal, rather than a proverbial, bus. The user's sudden maneuver is impossible to be perceived with a naked eye. No roll is required against unprepared victims, but some circumstances might call for a test or contest at the Storyteller's discretion.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 3 }], summary: "Make imperceptible limb movements faster than eyes can see.", dicePool: "Dexterity + Melee or Larceny", level: 4, discipline: "celerity" },
            // Level 5
            { name: "Fastigum", description: "Perform two separate actions via speed.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "celerity", level: 3 }], summary: "Perform two separate actions via speed (Requires Preeminence).", dicePool: "Dexterity + Celerity", level: 5, discipline: "celerity" },
            { name: "Lightning Strike", description: "The Kindred disappears and re-appears in front of its intended target, often with the knife already firmly embedded in the victim. If successful the Kindred appears within Touch range of his intended target and for each success the Kindred beats the targets resistance roll by the target suffers a point of Superficial Damage. This power ignores a targets armour entirely. For story purposes the Kindred counts as having used a Melee weapon or his own fists to deliver the blow.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Teleport to target and deal damage based on successes vs resistance", dicePool: "Dexterity + Melee", level: 5, discipline: "celerity" },
            { name: "Split Second", description: "Retcon the ST's narration of events.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Retcon the ST's narration of events.", dicePool: "Wits + Celerity", level: 5, discipline: "celerity" },
            {
                name: "Retaliation Instinct",
                description: "Vampires with Celerity possess reflexes far beyond those of ordinary Cainites. This heightened reaction time allows them to retaliate instantly when ambushed or surprised, countering their attackers with blinding speed before the foe can capitalize on their advantage.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Instantly counterattack when ambushed or surprised",
                dicePool: "Attack roll at Difficulty 1",
                level: 1,
                discipline: "celerity",
            },
            {
                name: "Quickened Beasts",
                description: "The vampire can share a portion of their unnatural speed with the animals under their influence, enhancing their swarms or beasts with a nearly vampiric agility. The animals gain additional Dexterity equal to the vampire's dots in Celerity.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "animalism",
                        level: 1
                    }
                ],
                summary: "Enhances animals' speed with vampire's Celerity rating",
                dicePool: "Dexterity + Animalism",
                level: 2,
                discipline: "celerity",
            },
            {
                name: "Limited Flight",
                description: "Gangrel are often seen as creatures of the earth, but some among them have mastered the art of attuning their bodies to the sky and winds. The vampire can temporarily lighten their form, making their movements lighter, faster, and even allowing them to leap vast distances.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "protean",
                        level: 2
                    }
                ],
                summary: "Reduces gravity's effect allowing enhanced leaping, gliding, and safe falling",
                dicePool: "Dexterity + Protean",
                level: 4,
                discipline: "celerity",
            },
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
            {
                name: "Ghost Cloak",
                description: "With Ghost Cloak, the Malkavian subtly distorts reality around them, warping the perceptions of anyone who attempts to observe or interact with them. Whispers, strange shadows, and fleeting glimpses of the unreal invade the senses of onlookers, distracting and unsettling them.",
                rouseChecks: 0,
                amalgamPrerequisites: [
                    {
                        discipline: "obfuscate",
                        level: 1
                    }
                ],
                summary: "Distorts perceptions of observers, causing penalties to actions against the vampire",
                dicePool: "Manipulation + Delirium vs Wits + Resolve",
                level: 1,
                discipline: "delirium",
            },
            {
                name: "Synesthesia",
                description: "Synesthesia allows the Malkavian to rewire their neural pathways, distorting how their senses process the world around them. By redirecting stimuli to alternative senses, the vampire can perceive their surroundings in unique ways, such as seeing sounds or tasting colors.",
                rouseChecks: 0,
                amalgamPrerequisites: [
                    {
                        discipline: "auspex",
                        level: 1
                    }
                ],
                summary: "Redirects sensory perception, allowing perception through alternate senses",
                dicePool: "Resolve + Delirium",
                level: 1,
                discipline: "delirium",
            },
            {
                name: "Haunting",
                description: "The Malkavian can stir deep-seated fears, traumas, and regrets within their victim, manifesting these buried horrors as vivid sensory hallucinations. Victims are plagued by sounds, scents, disturbing emotions, and troubling visions that unearth their hidden fears.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Creates personal nightmare hallucinations based on victim's fears and traumas",
                dicePool: "Manipulation + Delirium vs Composure + Intelligence",
                level: 2,
                discipline: "delirium",
            },
            {
                name: "Eyes of Chaos",
                description: "The Malkavian Madness Network, known as the Cobweb, is an ever-present web of shared connection between those who carry Malkav's blood. With Delirium, a Malkavian can fish secrets from this chaotic sea of thoughts and visions, gaining cryptic insights into the machinations of Cainite politics.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "auspex",
                        level: 2
                    }
                ],
                summary: "Accesses the Malkavian Cobweb for cryptic insights and prophetic visions",
                dicePool: "Resolve + Delirium",
                level: 2,
                discipline: "delirium",
            },
            {
                name: "Gift of the Brother",
                description: "The vampire taps into the essence of Delirium to silence the Beast's influence and unravel the psychic bonds imposed by mental Disciplines. This secret Malkavian power allows its user to end a single ongoing mental Discipline effect afflicting their target.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Removes ongoing mental discipline effects and natural compulsions",
                dicePool: "Charisma + Delirium",
                level: 2,
                discipline: "delirium",
            },
            {
                name: "Repressed Desires",
                description: "The vampire, through a brief yet meaningful conversation, can unearth the deepest, most hidden desires of their victim. These desires may have been suppressed, denied, or not fully acknowledged by the victim, lurking in the recesses of their psyche.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Forces victim to act on their deepest hidden desires regardless of consequences",
                dicePool: "Manipulation + Delirium vs Intelligence + Composure",
                level: 3,
                discipline: "delirium",
            },
            {
                name: "Passion",
                description: "The vampire manipulates the target's dominant emotional state, either magnifying it to overwhelming intensity or stifling it into near non-existence. Passion can significantly alter how a target reacts to the world, from their emotional responses to their actions.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Amplifies or suppresses target's dominant emotion to extremes",
                dicePool: "Charisma + Delirium vs Composure + Resolve",
                level: 3,
                discipline: "delirium",
            },
            {
                name: "Subliminal Axiom",
                description: "The vampire can implant a subtle idea or belief into the target's subconscious through calm conversation, subtly influencing their actions based on that idea. This power is frequently employed by Sabbat infiltrators to destabilize Camarilla domains.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "obfuscate",
                        level: 2
                    }
                ],
                summary: "Implants subconscious beliefs that influence the target's actions and decisions",
                dicePool: "Resolve + Delirium vs Intelligence + Composure",
                level: 3,
                discipline: "delirium",
            },
            {
                name: "Voice of Madness",
                description: "The Malkavian can unleash a torrent of chaotic, maddening energy through their voice, plunging their victim into a frenzied state. The target is overwhelmed by either uncontrollable rage or sheer terror, bypassing all conventional means to resist Frenzy.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Forces target into unavoidable Fury or Terror Frenzy through maddening voice",
                dicePool: "Charisma + Delirium vs Composure + Resolve",
                level: 4,
                discipline: "delirium",
            },
            {
                name: "Psyche Reversal",
                description: "The vampire can compel a victim to act in direct opposition to their Tenets and Convictions, twisting their moral compass and pushing them toward erratic, self-destructive behavior. For the duration of this power, the target is driven by a Compulsion to violate their core beliefs.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Compels victim to act against their core beliefs and moral convictions",
                dicePool: "Resolve + Delirium vs Wits + Composure",
                level: 4,
                discipline: "delirium",
            },
            {
                name: "Phantasmal Confession",
                description: "Through a subtle manipulation of the victim's psyche, the vampire draws out the darkest secrets buried deep within their target's mind. This power compels the victim to confess their personal sins, misdeeds, and regrets.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "dominate",
                        level: 2
                    }
                ],
                summary: "Forces victim to confess their darkest secrets and personal transgressions",
                dicePool: "Manipulation + Delirium vs Wits + Composure",
                level: 4,
                discipline: "delirium",
            },
            {
                name: "Psychomemoria",
                description: "With Psychomemoria, the vampire can force a victim to relive memories linked to a specific emotion. This power creates an emotional and sensory link, allowing the vampire to experience the target's memories, thoughts, feelings, and sensations as if they were their own.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Forces victim to relive emotional memories while vampire experiences them too",
                dicePool: "Charisma + Delirium vs Wits + Subterfuge",
                level: 5,
                discipline: "delirium",
            },
            {
                name: "Psychosis",
                description: "Through subtle and calculated manipulation, the vampire can trigger a rapid and terrifying decline in the victim's mental state, causing them to display symptoms of various neurological or psychological disorders.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Inflicts temporary psychological flaws and compulsions on the victim",
                dicePool: "Manipulation + Delirium vs Composure + Intelligence",
                level: 5,
                discipline: "delirium",
            },
            {
                name: "Babble",
                description: "With this unsettling yet potent power, the vampire can link the souls of a group, allowing them to communicate telepathically over vast distances. Only the vampire who initiates the link can use true Telepathy to speak silently with all members.",
                rouseChecks: 2,
                amalgamPrerequisites: [
                    {
                        discipline: "auspex",
                        level: 5
                    }
                ],
                summary: "Creates telepathic group communication link over vast distances",
                dicePool: "Resolve + Delirium",
                level: 5,
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
            {
                name: "Abyssal Voice",
                description: "This power allows the Abyss Mystic to use their Dominate powers on wraiths, ghosts, and Abyssal creatures, that are not bound to them via a ritual or a fetter. Their voice resonates filled the weight of the Abyss.",
                rouseChecks: 0,
                amalgamPrerequisites: [
                    {
                        discipline: "oblivion",
                        level: 1
                    }
                ],
                summary: "Dominate can affect ghosts and abyssal creatures.",
                dicePool: "As per chosen Dominate power",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "Commanding Darkness",
                description: "Harnessing the terrifying essence of Oblivion, the vampire gains the ability to bypass the need for eye contact or even direct speech to use their Dominate powers. By addressing a target's shadow, the vampire can issue commands.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "oblivion",
                        level: 3
                    }
                ],
                summary: "Dominate can be issued to a target's shadow instead of direct eye contact.",
                dicePool: "As per chosen Dominate power",
                level: 3,
                discipline: "dominate",
            },
            {
                name: "Dreamstalker",
                description: "The Kyasid, masters of manipulating the boundaries between dreams and reality, can wield their vampiric powers within the dream world. By stepping into the dreams of mortals, they are able to exert their supernatural abilities as if they were still in the waking world.",
                rouseChecks: 0,
                amalgamPrerequisites: [
                    {
                        discipline: "oblivion",
                        level: 3
                    }
                ],
                summary: "Manifest Disciplines within the dream world, limited by Blood Potency.",
                dicePool: "None",
                level: 4,
                discipline: "dominate",
            },
            {
                name: "Dread Vessel",
                description: "Those Malkavians who know the Dread Vessel power are masters of spreading fear and paranoia with subtlety. By implanting dread into a single, unwitting subject, they unleash a ripple of terror that can spread unchecked through a population.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "delirium",
                        level: 2
                    }
                ],
                summary: "Creates contagious fear that spreads from target to nearby individuals",
                dicePool: "Resolve + Dominate vs Composure + Intelligence",
                level: 3,
                discipline: "dominate",
            },
            {
                name: "Disassociative Command",
                description: "The Malkavian can give a command that causes the target to dissociate from reality. The victim follows the order, but their mind fractures, making them lose track of their actions and disassociate from the consequences.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "delirium",
                        level: 2
                    }
                ],
                summary: "Commands target while causing dissociation from moral consequences",
                dicePool: "Manipulation + Dominate vs Resolve + Intelligence",
                level: 3,
                discipline: "dominate",
            },
            {
                name: "Guardian's Ward",
                description: "This power allows the vampire to protect themselves and their allies by instilling a primal fear in anyone who dares to approach. The vampire's Beast exerts an overwhelming presence that prevents others from closing in, creating a zone of safety around them.",
                rouseChecks: 2,
                amalgamPrerequisites: [
                    {
                        discipline: "presence",
                        level: 2
                    }
                ],
                summary: "Creates 3-meter fear zone that prevents approach to vampire and allies",
                dicePool: "Strength + Dominate vs Resolve + Composure",
                level: 3,
                discipline: "dominate",
            },
            {
                name: "Inert Vitae",
                description: "By channeling the power of Dominate into their target's body, the vampire can temporarily deaden their victim's vitae, rendering it inert. This terrifying ability prevents the target from making any Rouse Checks or using any powers that require Rousing the Blood.",
                rouseChecks: 2,
                amalgamPrerequisites: [
                    {
                        discipline: "fortitude",
                        level: 4
                    }
                ],
                summary: "Prevents target from making Rouse Checks or using blood-based powers",
                dicePool: "Stamina + Dominate vs Composure + Occult",
                level: 5,
                discipline: "dominate",
            },
            {
                name: "Leader's Mentality",
                description: "The vampire's predatory skills make them an expert at manipulating others or impressing them with their innate dominance over the crowd.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Adds Dominate rating to Manipulation, Leadership, and Subterfuge rolls",
                dicePool: "Intelligence + Resolve vs Manipulation + Dominate (to resist)",
                level: 1,
                discipline: "dominate",
            },
            {
                name: "Dignity of Blood",
                description: "Vampires learn this discipline to protect their minds from the effects of Dominate. This power allows the user to ignore all Dominate attempts, if the one who is attempting that is of a lower Generation.",
                rouseChecks: 0,
                amalgamPrerequisites: [
                    {
                        discipline: "fortitude",
                        level: 3
                    }
                ],
                summary: "Immune to Dominate from vampires of higher generation",
                dicePool: "None (passive immunity)",
                level: 3,
                discipline: "dominate",
            },
            {
                name: "Paladin's Example",
                description: "The paladins of the Sabbat developed this power to support their allies and lieges. A paladin knight with the mystic presence of this power inspires bravery and renewed strength among their fellow warriors.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "presence",
                        level: 2
                    }
                ],
                summary: "Grants Dominate bonus to allies' Melee and Brawl rolls within 300 meters",
                dicePool: "Charisma + Dominate",
                level: 4,
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
            {
                name: "Morphean Touch",
                description: "The vampire channels their Fortitude outwardly to put a target into a deep, forced sleep with a mere touch. By interrupting the target's energy flow, the vampire can render them unconscious temporarily.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Forces target into deep sleep through touch, removes pain for vampires",
                dicePool: "Intelligence + Fortitude vs Stamina + Resolve",
                level: 2,
                discipline: "fortitude",
            },
            {
                name: "Burning Touch",
                description: "The vampire has refined the ability they learned from Morphean Touch—turning a gentle, calming touch into one that inflicts excruciating pain. Instead of soothing pain, the vampire now channels it directly into their victim.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "celerity",
                        level: 2
                    }
                ],
                summary: "Inflicts overwhelming pain through touch, causing incapacitation",
                dicePool: "Resolve + Fortitude vs Stamina + Resolve",
                level: 3,
                discipline: "fortitude",
            },
            {
                name: "Martyr's Resilience",
                description: "The vampire, through their deep connection with others via the blood bond, gains the ability to protect those bound to them by absorbing damage on their behalf. Whether through a blood bond or Vinculum, the vampire can act as a shield.",
                rouseChecks: 0,
                amalgamPrerequisites: [
                    {
                        discipline: "auspex",
                        level: 3
                    }
                ],
                summary: "Absorbs damage intended for blood-bonded allies within line of sight",
                dicePool: "None (passive)",
                level: 4,
                discipline: "fortitude",
            },
            {
                name: "Armor of Fury",
                description: "The vampire summons a protective shield of crimson light, surrounding themselves with an aura of resilience that not only shields against physical harm but also strengthens their resistance to Frenzy.",
                rouseChecks: 2,
                amalgamPrerequisites: [
                    {
                        discipline: "auspex",
                        level: 4
                    }
                ],
                summary: "Creates damage-absorbing armor that provides Frenzy resistance",
                dicePool: "None (automatic)",
                level: 5,
                discipline: "fortitude",
            },
            {
                name: "Sculpting the Wound",
                description: "The vampire can accelerate their healing by concentrating and willing the flesh back into its original form.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Heals Superficial damage based on Metamorphose rating, once per night",
                dicePool: "None (automatic)",
                level: 1,
                discipline: "fortitude",
            },
            {
                name: "Vitae Bloat",
                description: "The vampire is able to store more Blood in their body, able to consume it at a later time. The user must be at their minimum Hunger that they can reach without draining a mortal or below it to store additional Blood.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Store extra blood for later consumption based on Protean/Metamorphose ratings",
                dicePool: "None (automatic)",
                level: 2,
                discipline: "fortitude",
            },
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
            {
                name: "Unity of Flesh",
                description: "The true master of the flesh does not simply mimic life — they transcend it. This power represents the pinnacle of the Metamorphosist's craft, allowing them to reshape not only humanoid forms but those of creatures far removed from mammal kingdom.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Extends Malleable Flesh to various animal categories (arthropods, jellies, etc.)",
                dicePool: "None (passive extension)",
                level: 2,
                discipline: "metamorphose",
            },
            {
                name: "Liquefy the Earthly Coil",
                description: "This gruesome power was originally developed to discretely dispose of corpses left behind from unholy experiments, ensuring that no trace remains to implicate the fleshcrafter. By touching a living being, the vampire can dissolve their flesh and bone into a soupy mass of blood.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "fortitude",
                        level: 2
                    }
                ],
                summary: "Dissolves body parts into blood, causing massive damage and creating vitae",
                dicePool: "Resolve + Metamorphose vs Stamina + Resolve",
                level: 2,
                discipline: "metamorphose",
            },
            {
                name: "Body Arsenal",
                description: "When the vampire activates this power, they reflexively bend, break and shift tissues in their body, allowing for violent and instantaneous formation of weapons and tools from within. These weapons are formed from their own flesh and bone.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Forms melee weapons from own flesh and bone, dealing aggravated damage to mortals",
                dicePool: "Strength + Metamorphose",
                level: 2,
                discipline: "metamorphose",
            },
            {
                name: "Horrid Form",
                description: "The Horrid Form of Protean is originally inspired by the Metamorphosists. This form warps the vampire's body into a grotesque figure of unparalleled terror. The vampire's height increases by nearly two meters, their body sprouting jagged claws, elongated fangs, and distorted features.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Transforms into monstrous form with standard Horrid Form benefits plus modifications",
                dicePool: "None (automatic)",
                level: 3,
                discipline: "metamorphose",
            },
            {
                name: "Body Impolitic",
                description: "The vampire can detach and animate a part of their own body, imbuing it with a fragment of their sentience and will. This gruesome power allows the vampire to command severed body parts to act independently.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "dominate",
                        level: 3
                    }
                ],
                summary: "Detaches and animates body parts with independent sentience and mobility",
                dicePool: "Resolve + Metamorphose",
                level: 3,
                discipline: "metamorphose",
            },
            {
                name: "Slow Decay",
                description: "With a mere touch and a few spoken words, the vampire initiates a slow, insidious transformation within their victim. The metamorphosis starts subtly, taking days to manifest, and its effects steadily worsen.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "delirium",
                        level: 2
                    }
                ],
                summary: "Implants delayed grotesque transformations that manifest after several nights",
                dicePool: "Resolve + Metamorphose vs Stamina + Resolve",
                level: 3,
                discipline: "metamorphose",
            },
            {
                name: "Bloodform",
                description: "This rare power lets the vampire take the form of an amorphous mass of blood, or to turn only part of their form to animate vitae.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Transform into blood form, can be used on detached body parts",
                dicePool: "None (automatic)",
                level: 4,
                discipline: "metamorphose",
            },
            {
                name: "Impolitic Mastery",
                description: "The vampire's mastery over their flesh extends to such an impolitic degree that even detached body parts maintain a connection to their will, allowing them to channel Disciplines through these extensions of themselves without risk of weakening the part itself.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Channel disciplines through detached body parts without damaging them",
                dicePool: "None (passive)",
                level: 4,
                discipline: "metamorphose",
            },
            {
                name: "Restructure the System",
                description: "This advanced power of Metamorphose allows the vampire to alter and repurpose the internal organs and biological systems of their own body or others in extraordinary ways. The vampire can reshape, modify, or outright destroy internal organs, reroute blood flow, or expel fluids.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Advanced internal organ manipulation for complex biological modifications",
                dicePool: "Intelligence + Metamorphose",
                level: 4,
                discipline: "metamorphose",
            },
            {
                name: "Flesh of Wind and Water",
                description: "For a vampire with this power, the limitations of time and physical manipulation no longer apply. The vampire's flesh ripples and shifts as swiftly and fluidly as wind and water, allowing for near-instantaneous transformations that would typically take far longer to achieve.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "celerity",
                        level: 2
                    }
                ],
                summary: "Accelerates personal metamorphose transformations to complete in one turn",
                dicePool: "None (passive acceleration)",
                level: 4,
                discipline: "metamorphose",
            },
            {
                name: "Cocoon",
                description: "The vampire secretes blood, forming an opaque, protective cocoon around their body. This cocoon shields the vampire from external threats, including sunlight, and provides a fortified layer of defense.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Creates protective blood cocoon that blocks sunlight and reduces damage",
                dicePool: "None (automatic)",
                level: 5,
                discipline: "metamorphose",
            },
            {
                name: "The Marauder Form",
                description: "Through further mastery of Metamorphose, the vampire's Horrid Form becomes an even more terrifying and lethal weapon, pushing the limits of their monstrous transformation.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Enhanced Horrid Form with +3 to all Physical Attributes and mythical abilities",
                dicePool: "None (passive enhancement)",
                level: 5,
                discipline: "metamorphose",
            },
            {
                name: "A Curse on the Mind",
                description: "Mastering manipulation of body and mind, the cainite speaks to the flesh of the insane, driving it into a broiling frenzy and forcing it to rebel against its owner. The cainite's words hold no sway or control over the extent to which the victim is affected.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "delirium",
                        level: 4
                    }
                ],
                summary: "Causes victim's body to violently transform based on existing Delirium effects",
                dicePool: "Manipulation + Metamorphose vs Willpower",
                level: 5,
                discipline: "metamorphose",
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
            {
                name: "Mask of the Beast",
                description: "With this power, the vampire can make others believe they are nothing more than an ordinary animal. To activate Mask of the Beast, the vampire must first come into contact with an animal of the species they wish to mimic.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "animalism",
                        level: 2
                    }
                ],
                summary: "Creates illusion of being a specific animal after communion with that species",
                dicePool: "None (automatic after communion)",
                level: 2,
                discipline: "obfuscate",
            },
            {
                name: "Cage of Secrets",
                description: "A dark and intricate blend of Delirium and Obfuscate allows the vampire to shield their mind from the probing or manipulation of others. Those who dare attempt to control or invade the vampire's psyche suffer cruel retaliation.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "delirium",
                        level: 3
                    }
                ],
                summary: "Blocks mental disciplines and punishes attackers with Delirium backlash",
                dicePool: "None (defensive)",
                level: 4,
                discipline: "obfuscate",
            },
            {
                name: "Twin Mirage",
                description: "With this advanced power, the vampire creates an illusory copy of themselves while simultaneously vanishing from view, combining the powers of Unseen Passage and Fata Morgana. The illusion is a convincing duplicate, capable of speech and mimicking actions.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Creates illusory double while becoming invisible for misdirection",
                dicePool: "Manipulation + Obfuscate vs Composure + Wits",
                level: 4,
                discipline: "obfuscate",
            },
            {
                name: "Maya",
                description: "Maya is a potent illusionary power mastered by the Romuva Ravnos, allowing them to create not only vivid hallucinations but ones that feel entirely real to the senses, creating a reality that traps both the mind and body.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "presence",
                        level: 5
                    }
                ],
                summary: "Creates area illusions so real they cause physical and psychological effects",
                dicePool: "Charisma + Obfuscate vs Resolve + Wits",
                level: 5,
                discipline: "obfuscate",
            },
            {
                name: "Horrid Reality",
                description: "This terrifying power allows the vampire to focus their illusory powers onto a single target, creating a deeply personal and believable illusion that can cause psychological and physical damage, if left untreated.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "auspex",
                        level: 2
                    }
                ],
                summary: "Creates personal nightmare illusion that causes real damage to single target",
                dicePool: "Manipulation + Obfuscate vs Composure + Intelligence",
                level: 5,
                discipline: "obfuscate",
            },
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
            { name: "Soaring Leap", description: "Jump enormous distances.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Jump enormous distances. Scales with potence", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
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
            {
                name: "Weak in the Knees",
                description: "By touching someone, the vampire makes their target feel so overwhelmed by their presence that the subject becomes weaker and clumsier while in close vicinity of the vampire.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Imposes dice penalties and can block Physical discipline usage",
                dicePool: "Charisma + Presence vs Composure + Resolve",
                level: 2,
                discipline: "presence",
            },
            {
                name: "Soul Stain",
                description: "By standing briefly in their victim's shadow, the vampire may give it a voice, making it capable of whispering all of the victim's darkest desires in their ear as they go about their normal business. The shadow continues to whisper in their ear until the sun rises.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "oblivion",
                        level: 2
                    }
                ],
                summary: "Victim's shadow whispers dark temptations, compelling them toward vice",
                dicePool: "Manipulation + Presence vs Composure + Intelligence",
                level: 3,
                discipline: "presence",
            },
            {
                name: "Friend to Foe",
                description: "The vampire can twist an emotional connection into a potent but imprecise experience of terror. By affecting a mortal, ghoul or Cainite with this fearsome power, the vampire plants a bomb of terror into their subject's mind, which goes off when an appropriate loved one or cohort draws near.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "obfuscate",
                        level: 3
                    }
                ],
                summary: "Plants terror triggered by specific relationships, causing fear or frenzy",
                dicePool: "Manipulation + Presence vs Wits + Intelligence",
                level: 4,
                discipline: "presence",
            },
            {
                name: "Whisper of the Old Gods",
                description: "By summoning the power of ancient spirits, the Romuva Ravnos can implant whispers into the minds of others, leading them astray or driving them toward a specific action. These whispers echo in the target's mind, compelling them to follow the vampire's desired path.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "obfuscate",
                        level: 2
                    }
                ],
                summary: "Implants compelling whispers perceived as divine guidance",
                dicePool: "Manipulation + Presence vs Composure + Intelligence",
                level: 3,
                discipline: "presence",
            },
            {
                name: "Mystical Veil",
                description: "The Romuva Ravnos have mastered the art of weaving their Obfuscate illusions with Presence to create mystical auras that affect both perception and technology. Mystical Veil allows the vampire to wrap themselves in a shroud of otherworldly influence.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    {
                        discipline: "obfuscate",
                        level: 4
                    }
                ],
                summary: "Creates divine aura that enhances social interactions and scrambles technology",
                dicePool: "Manipulation + Presence vs Composure + Wits",
                level: 5,
                discipline: "presence",
            },
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
            { name: "Rain of Blood", description: "The sorcerer causes a crimson downpour to fall over a wide area, turning the ground slick and red and causing panic among mortals. All mortals in the area must make a Composure + Resolve test (Difficulty 4) or flee in terror. The blood makes all movement treacherous, imposing a -2 dice penalty to all Physical tests involving movement. The rain lasts for one scene.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Cause a crimson downpour that terrifies mortals and hampers movement.", dicePool: "Manipulation + Blood Sorcery", level: 5, discipline: "blood sorcery" },
            { name: "Blood Scrying", description: "By gazing into a pool of blood, the sorcerer can view distant locations or people with whom they have a sympathetic connection. The caster must have either been to the location recently or possess something that belonged to the target within the last month. The vision lasts for one scene and shows events as they currently unfold.", rouseChecks: 1, amalgamPrerequisites: [], summary: "View distant locations or people through blood scrying.", dicePool: "Resolve + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Crimson Ward", description: "The sorcerer creates a protective barrier of swirling blood that deflects attacks. For the remainder of the scene, the caster gains +2 dice to Defense against all attacks. Additionally, any attacker who strikes the ward with a melee attack takes one point of Superficial Health damage as the blood lashes back at them.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Create a protective barrier of blood that enhances defense.", dicePool: "Stamina + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Sanguine Puppet", description: "The sorcerer animates a corpse using their own Blood, creating a mindless servant. The corpse has the Physical Attributes it possessed in life but no Mental or Social Attributes above 1. It follows simple commands and lasts until sunrise. If the corpse is destroyed, the sorcerer takes one level of Aggravated Health damage.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Animate a corpse as a blood-powered servant.", dicePool: "Manipulation + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Heart's Blood", description: "The sorcerer can extract the most potent blood directly from a victim's heart, making it incredibly nourishing. If the sorcerer feeds directly from a mortal's heart (requiring them to be restrained or willing), they gain twice the normal amount of Hunger satisfaction from the feeding. However, this invariably kills the mortal.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Extract supremely nourishing blood directly from a victim's heart.", dicePool: "Dexterity + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Another's Burden", description: "The vampire can lessen the pain of another by taking some or all of his suffering onto herself.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Transfers dice penalties from target to caster to reduce their suffering.", dicePool: "Resolve + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Burden Another", description: "The caster may reduce his own pain by inflicting it upon another.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Transfers caster's dice penalties to unwilling target.", dicePool: "Manipulation + Blood Sorcery vs Composure + Resolve", level: 4, discipline: "blood sorcery" },
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
            { name: "Blood from Bone", description: "Vampires with this power can draw sustenance from the residual mystic power that pools, calcifies and stagnates in a creature's bones. With this power, the vampire can slake some Hunger even from rotten corpses.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Feeds on mystical essence from bones to slake Hunger from corpses.", dicePool: "None (automatic with Willpower cost)", level: 1, discipline: "oblivion" },
            { name: "Moonlit Preservation", description: "The vampire can mystically halt the effects of decomposition in a dead body and preserve it in a suitable state for other uses. A recently deceased body can be perfectly preserved for a period of time without need of chemicals.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }], summary: "Preserves corpses from decomposition for use in rituals and ceremonies.", dicePool: "None (automatic)", level: 1, discipline: "oblivion" },

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
            { name: "Dreams of the Many", description: "As vampires are active during the night, dreams of mortals are a constant subconscious flood around them that is ignored by most of them. The Kyasid has a sort of sixth sense about the dreams of sleepers around them, allowing them to attune to dreams of only people who are asleep close enough to them.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Attune to dreams of mortals to glean symbolic insights or prophecies.", dicePool: "Wits + Oblivion vs Resolve + Intelligence", level: 2, discipline: "oblivion" },
            { name: "Halo of the Damned", description: "The vampire channels Oblivion spiritually rather than physically, and creates a cloud of spiritual darkness that clings only to the auras of the Children of Caine. In this way, the vampire can detect the presence of individual vampires in large crowds.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Reveals nearby vampires with black auras but impairs mortal interactions.", dicePool: "None (automatic detection)", level: 2, discipline: "oblivion" },

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
            { name: "Fear of Hell", description: "Afflicts a victim with an overwhelming fear of darkness, causing panic or Frenzy when in dark places.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Instills fear of the dark; targets panic when not in light.", dicePool: "Resolve + Oblivion vs Composure + Intelligence", level: 3, discipline: "oblivion" },
            { name: "Fortified Shadows", description: "The powers of Oblivion are known for their vulnerability to bright light, which can easily dispel summoned shadows and weaken the spirits and entities drawn from the Abyss. With this power, the vampire can protect their Oblivion manifestations.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Shadows and summoned entities resist light disruption for a scene.", dicePool: "None", level: 3, discipline: "oblivion" },
            { name: "Lucid Dreams", description: "The Kyasid, masters of navigating the subconscious and dream realms, can extend their awareness into a sleeping target's mind, subtly weaving themselves into the fabric of the dream. While they may appear as a friendly figure within the dreamscape, the Kyasid's very presence distorts the dream.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Enter and interact within a target's dream as a participant.", dicePool: "Wits + Occult (for disguise)", level: 3, discipline: "oblivion" },
            { name: "Tempest Strike", description: "The vampire can direct destructive Oblivion energies toward the living, unliving, and even the spirits. By reaching out their hand, a stream of decaying Oblivion energies right from the Labyrinth emanates from the vampire's palm, causing anything in its way to rot, decay and break apart.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Ranged decay attack that affects living, undead, and spiritual beings.", dicePool: "Resolve + Oblivion", level: 3, discipline: "oblivion" },


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
            { name: "Shadow Prison", description: "Trap a target within their own shadow, rendering them immobile and helpless. The victim becomes bound by tendrils of darkness that emerge from their shadow. They cannot move, speak, or take any actions while imprisoned. The prison lasts for one scene or until the vampire releases the victim.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Trap a target within their own shadow, rendering them immobile.", dicePool: "Manipulation + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Abyssal Communion", description: "Communicate with entities from the Abyss, gaining forbidden knowledge or requesting their aid. This power allows the vampire to speak with demons, wraiths, and other creatures of darkness. The information gained is often cryptic and may come at a price.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Communicate with entities from the Abyss for knowledge or aid.", dicePool: "Intelligence + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Entropic Shield", description: "Surround yourself with a barrier of pure entropy that deflects attacks and weakens enemies. Physical attacks have reduced effectiveness, and supernatural powers are diminished when used against the vampire. The shield also slowly drains the life force of anyone who remains too close for extended periods.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Create a barrier of entropy that deflects attacks and weakens enemies.", dicePool: "Stamina + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Mark of Damnation", description: "Draws all corruption in a mortal's heart to the surface, making them appear monstrously evil to all who see them.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Causes mortals to appear as vile monsters; others are compelled to attack or flee.", dicePool: "Manipulation + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Endymion's Sleep", description: "The Kyasid, as travelers between the realms of dreams and reality, possess the ability to guide others into the peaceful slumber of mortals or the sluggish haze of the day for fellow Cainites. This power allows the user to bridge the gap between wakefulness and sleep.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 4 }], summary: "Forces mortals into deep sleep or vampires into daylight lethargy.", dicePool: "Manipulation + Oblivion vs Resolve + Stamina", level: 4, discipline: "oblivion" },
            { name: "Spirit Guide", description: "The Kyasid's mastery over dreams extends beyond mere observation, allowing them to manipulate and shape the dreams of their targets with precision. Through this power, the vampire takes on the role of a 'guide' within the dream, influencing the dreamer's perceptions.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }], summary: "Enhanced dream manipulation with social bonuses and dream reshaping abilities.", dicePool: "Manipulation + Oblivion vs Intelligence + Composure", level: 4, discipline: "oblivion" },
            { name: "Shadow Parasite", description: "The vampire reaches out to the darkness within their victims, the permanent shadows inside lungs or surrounding organs; and as they do so, the shadows begin to grow in a writhing, wriggling tentacle of semi-sentient darkness, that is much like snakes.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "auspex", level: 3 }], summary: "Animates internal shadows to cause damage culminating in violent eruption.", dicePool: "Composure + Oblivion vs Stamina + Occult", level: 4, discipline: "oblivion" },

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
            { name: "Exsanguinate", description: "Drain all blood from a target, causing instant death to mortals and potentially destroying vampires. The target must be grappled or restrained. Roll Resolve + Oblivion vs target's Stamina + Resolve. If successful against a mortal, they die instantly. Against vampires, they take aggravated damage equal to their Blood Potency and must make a Stamina + Resolve roll vs difficulty 6 or enter torpor.", rouseChecks: 3, amalgamPrerequisites: [], summary: "Drain all blood from a target, potentially killing them instantly.", dicePool: "Resolve + Oblivion vs Stamina + Resolve", level: 5, discipline: "oblivion" },
            { name: "Shadowmend", description: "Use shadows to repair damaged objects or heal aggravated wounds. The vampire can restore Structure to objects or mend aggravated damage on themselves or others. Each success on Intelligence + Oblivion restores one point of Structure to an object or one level of aggravated damage. This process takes several minutes of concentration.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Use shadows to repair objects or heal aggravated wounds.", dicePool: "Intelligence + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Void Walk", description: "Step into the Abyss and emerge from any shadow within several miles. The vampire disappears into a shadow and can emerge from any shadow they have seen before within a number of miles equal to their Oblivion rating. The journey through the Abyss is harrowing and may attract unwanted attention from entities dwelling there.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Travel through the Abyss to emerge from distant shadows.", dicePool: "Wits + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Soul Burn", description: "Channel the destructive power of the Abyss to burn away a target's very essence. This power can permanently reduce a target's attributes or even destroy their soul entirely. Against mortals, it can cause instant death. Against supernatural beings, it inflicts terrible spiritual wounds that heal very slowly.", rouseChecks: 3, amalgamPrerequisites: [], summary: "Burn away a target's essence, potentially destroying their soul.", dicePool: "Resolve + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Abyss Gate", description: "Tear open a permanent portal to the Abyss, allowing creatures of darkness to enter the mortal world. This power requires enormous effort and comes with great risk, as the vampire cannot fully control what emerges from the gate. The portal remains open until the vampire falls unconscious or chooses to close it.", rouseChecks: 3, amalgamPrerequisites: [], summary: "Create a permanent portal to the Abyss with uncontrollable consequences.", dicePool: "Resolve + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Master of Shadows", description: "Gain absolute control over all shadows within a wide area, able to animate them, shape them, and use them as extensions of your will. Shadows can become solid to interact with objects, hide allies, attack enemies, or create complex constructs. This power effectively makes the vampire lord of all darkness in their domain.", rouseChecks: 3, amalgamPrerequisites: [], summary: "Gain absolute control over all shadows in a wide area.", dicePool: "Wits + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Oblivion's Embrace", description: "Temporarily merge with the Abyss itself, becoming a living embodiment of entropy and destruction. In this state, the vampire is immune to most forms of harm, can pass through solid matter, and their very presence causes decay and despair. However, each moment spent in this form risks permanent loss of humanity.", rouseChecks: 3, amalgamPrerequisites: [], summary: "Merge with the Abyss, becoming immune to harm but risking humanity.", dicePool: "Stamina + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Tenebrous Armor", description: "The vampire shrouds themselves in a living cloak of shadows that absorb and cushion impacts, deflecting strikes and attacks as if encased in an otherworldly armor.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Grants shadow armor absorbing damage and intimidating mortals.", dicePool: "Charisma + Intimidation (with bonus) vs Composure + Resolve (for mortals)", level: 5, discipline: "oblivion" },
        ],
    },
    "thin-blood alchemy": {
        clans: ["Thin-blood"],
        summary: "",
        logo: "",
        powers: [],
    },
    spiritus: {
        clans: ["Ahrimanes", "Lhiannan", "Caitiff"],
        summary: "Command and commune with spirits",
        logo: spiritusLogo,
        powers: [],
    },
    valeren: {
        clans: ["Salubri", "Caitiff"],
        summary: "Healing and protective magic of the warrior-healers",
        logo: valerenLogo,
        powers: [],
    },
    serpentis: {
        clans: ["Ministry", "Caitiff"],
        summary: "Shapeshifting and serpentine powers of the followers of Set",
        logo: serpentisLogo,
        powers: [],
    },
    quietus: {
        clans: ["Banu Haqim", "Caitiff"],
        summary: "Silent death and blood magic of the assassins",
        logo: quietusLogo,
        powers: [],
    },
    obtenebration: {
        clans: ["Lasombra", "Caitiff"],
        summary: "Manipulation of shadows and darkness",
        logo: oblivionLogo,
        powers: [],
    },
    necromancy: {
        clans: ["Hecata", "Lamia", "Nagaraja", "Samedi", "Cappadocian", "Giovanni", "Caitiff"],
        summary: "Death magic and communion with the dead",
        logo: necromancyLogo,
        powers: [],
    },
    melpominee: {
        clans: ["Daughters of Cacophony", "Caitiff"],
        summary: "Discipline of voice and sonic manipulation",
        logo: melpomineeLogo,
        powers: [],
    },
    koldunic: {
        clans: ["Tzimisce", "Caitiff"],
        summary: "Tzimisce blood sorcery and elemental manipulation",
        logo: koldunicLogo,
        powers: [],
    },
    chimestry: {
        clans: ["Ravnos", "Caitiff"],
        summary: "Discipline of illusions and phantasms",
        logo: chimestryLogo,
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
    { name: "The Poet's Tormentors", summary: "Summons unpredictable Blatherskites from dark spots identified through area scouting (stygian shroud or dread roil)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Oblivion; Difficulty 6", ingredients: "Nothing", level: 5 },

    // New Oblivion Ceremonies
    { name: "Marked for Death", summary: "Divines locations of those the death god wishes to claim for sacrifice", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "A water bowl, an iron cauldron, a paper map of the area to be scoured, a piece of flesh from the type of target, a Rouse checks worth of the caster's blood", level: 3 },
    { name: "Consecration in the Shadows", summary: "Doubles temple bane range and grants dice bonuses to cult rituals", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "A sacrifice that was Marked for Death (Level 3 Ceremony)", level: 4 },
    { name: "Death God's Blessing", summary: "Imbues a Cainite with the Death God's power, granting massive attribute and discipline bonuses", rouseChecks: 5, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "Five Rouse Checks worth of caster's blood, ash made from yew branches, five sacrifices Marked for Death, a Temple that has been Consecrated in Shadows", level: 5 },
    { name: "Weirdling Ward", summary: "Creates disorienting ward sigils that confuse and disorient intruders", rouseChecks: 1, requiredTime: "10 minutes", dicePool: "Intelligence + Oblivion", ingredients: "A silver cup filled with Kyasid's blood, a bone brush with animal fur", level: 2 },
    { name: "Lure of Arcadia", summary: "Traps sleeping vampires in fae-induced dreams, potentially providing cryptic insights", rouseChecks: 1, requiredTime: "10 minutes", dicePool: "Intelligence + Oblivion", ingredients: "A piece of silver", level: 4 },
    { name: "Sacrifice to the Nightmare", summary: "Sacrifices a victim to the Abyss, ensuring their complete destruction", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "Same as Weirdling Ward, pitch black chamber, and a sacrifice", level: 5 },
    { name: "Summon Epiales", summary: "Summons a Living Nightmare from a dreamer's fears into the physical world", rouseChecks: 2, requiredTime: "1 scene", dicePool: "Intelligence + Oblivion", ingredients: "Physical contact with the dreamer", level: 5 },
    { name: "Light Within the Shadows", summary: "Grants Oblivion's Sight to caster and others who gaze into summoned sphere", rouseChecks: 1, requiredTime: "5 minutes", dicePool: "Intelligence + Oblivion", ingredients: "None", level: 1 },
    { name: "Abyssal Candle", summary: "Creates a candle that enables telepathic communication with other candle holders", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "A foot-long wick of pure cotton, soaked in human blood for 24 hours", level: 1 },
    { name: "Walk the Abyss", summary: "Accelerates travel through the Abyss when used with Ex Nihilo", rouseChecks: 1, requiredTime: "10 minutes", dicePool: "Intelligence + Oblivion", ingredients: "The caster's blood", level: 1 },
    { name: "Ahriman's Servants", summary: "Summons small Abyssal entities to serve as spies and servants", rouseChecks: 1, requiredTime: "10 minutes", dicePool: "Intelligence + Oblivion", ingredients: "A burning candle, the caster's blood", level: 2 },
    { name: "Transubstantiation of Essence", summary: "Heals Aggravated damage by consuming Abyssal essence, but at a cost", rouseChecks: 1, requiredTime: "10 minutes", dicePool: "Intelligence + Oblivion", ingredients: "None", level: 2 },
    { name: "Drinking the Blood of Ahriman", summary: "Transforms the vampire's body with Abyssal power, enhancing physical attributes", rouseChecks: 1, requiredTime: "30 minutes", dicePool: "Intelligence + Oblivion", ingredients: "A knife that has never tasted blood", level: 3 },
    { name: "Calling the Hungry Shade", summary: "Summons a powerful Hungry Shade to serve the caster", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "The caster's vitae, a silver knife, a secluded space", level: 4 },
    { name: "Whispers in the Dark", summary: "Communes with the Abyss to gain forbidden knowledge, risking eternal torpor", rouseChecks: 1, requiredTime: "Variable", dicePool: "Intelligence + Oblivion", ingredients: "None", level: 5 }
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
{ name: "Warding Circle Against Magic", summary: "Prevents all Blood Sorcery, Oblivion, Rituals, and Ceremonies within the circle. Anyone attempting to use such powers against someone inside must contest Willpower vs. the caster's Intelligence + Blood Sorcery. Also defends against non-vampiric magic.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery vs. Willpower (see V5 Corebook pg. 275)", ingredients: "Circle inscribed with the same blade used to draw the caster's vitae.", level: 4 },

// New Blood Sorcery Rituals - Level 1
{ name: "Incantation of the Shepherd", summary: "Mystically locate all members of the caster's herd or mortals fed from repeatedly", rouseChecks: 1, requiredTime: "1 turn", dicePool: "Intelligence + Blood Sorcery", ingredients: "Glass object the size of an eye", level: 1 },
{ name: "Spring Sanctification", summary: "Sanctifies a white heifer to provide enhanced blood that can slake any vampire's hunger", rouseChecks: 2, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "One flawless white heifer, two Rouse checks worth of blood", level: 1 },

// New Blood Sorcery Rituals - Level 2
{ name: "Sigil of Authority", summary: "Creates a mystical sigil linking bearer to Crimson Curia authority", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Silver tipped blade, blood of the Sigil Investor (a Bishop from the Crimson Curia)", level: 2 },
{ name: "Blood Mead", summary: "Creates intoxicating mead that grants temporary health levels", rouseChecks: 2, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Honey mead (up to 5 gallons), two Rouse checks worth of caster's blood, a ceramic container decorated with chthonic sigils and verses praising Zagreus", level: 2 },
{ name: "Skull of Warning", summary: "Enchanted skull that screams when intruders enter protected room", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A skull, vitae of the caster", level: 2 },
{ name: "Amulet of Misfortune", summary: "Creates cursed amulet that reduces all dice pools for specific target", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Small item, body sample from recipient, vitae, poisonous herbs", level: 2 },
{ name: "Blood Wine Distillation", summary: "Preserves blood with supernatural properties for extended periods", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Silver basin, bone knife, dark glass bottle, wax, caster's blood", level: 2 },

// New Blood Sorcery Rituals - Level 3
{ name: "Flesh of Fiery Touch", summary: "Causes the caster's skin to burn anyone who touches it", rouseChecks: 1, requiredTime: "1 turn", dicePool: "Intelligence + Blood Sorcery", ingredients: "A small piece of wood, coal or other common fuel source, which can be ignited", level: 3 },
{ name: "Faerie Wine", summary: "Creates psychedelic wine that enhances Auspex and Delirium but impairs mental faculties", rouseChecks: 2, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Nightshade brew (up to five gallons), Morning Glory extract, two Rouse checks worth of caster's blood, a ceramic container decorated with chthonic sigils", level: 3 },
{ name: "Talisman of Protection", summary: "Creates protective talisman that aids resistance against hostile magic", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Small item, body sample from recipient, vitae, protective herbs", level: 3 },
{ name: "Eye of the Norn", summary: "Shows the face of the person the caster should confront or deal with most urgently", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "One mirror with a silver frame, the caster's blood, a silver needle", level: 3 },
{ name: "Claimed by Teliavelis", summary: "Converts Tremere to Telyav bloodline, changing disciplines and banes", rouseChecks: 1, requiredTime: "3 hours", dicePool: "Intelligence + Blood Sorcery", ingredients: "Earth from fulcrum, vitae from three Telyav, red moss from Estonia/Latvia bogs", level: 3 },
{ name: "Rite of Incarnation", summary: "Creates spiritual decoy using torpored vampire vessel for deception", rouseChecks: 4, requiredTime: "All night ritual in Shadow Temple", dicePool: "Intelligence + Blood Sorcery", ingredients: "Torpored vampire vessel of same clan, four Rouse checks of blood, soil from birthland, red moss", level: 3 },
{ name: "Scorpion's Curse", summary: "Ward that triggers Scorpion's Touch on anyone who touches the protected item", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Rowan wand, mixture of ash and caster's Blood", level: 3 },

// New Blood Sorcery Rituals - Level 4
{ name: "Lunar Ale", summary: "Creates intoxicating ale that removes inhibitions and reduces Stains gained", rouseChecks: 2, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Spring water (up to five gallons), dandelion brew (two liters), two Rouse checks worth of caster's blood, a ceramic container decorated with chthonic sigils", level: 4 },
{ name: "Witch's Familiar", summary: "Enchants small animal to steal Willpower from sleeping victims", rouseChecks: 1, requiredTime: "10 minutes", dicePool: "Intelligence + Blood Sorcery", ingredients: "A small animal, vitae of the caster", level: 4 },
{ name: "Craft the Needle of Mind's Eye", summary: "Creates enchanted needle required for astral projection ritual", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Wood or bone, fine carving instrument", level: 4 },
{ name: "Blood Essence", summary: "Distills victim's essence into consumable heart's blood for diablerie", rouseChecks: 2, requiredTime: "Extended diablerie process", dicePool: "Resolve + Blood Sorcery", ingredients: "Victim's complete vitae", level: 4 },
{ name: "Refine the Cocktail", summary: "Creates powerful blood cocktails that grant temporary attribute or discipline bonuses", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Silver basin, donor blood, caster's blood, bone brush with animal fur, magical herbs", level: 4 },

// New Blood Sorcery Rituals - Level 5
{ name: "Walk the Spirit Plains", summary: "Astral projection to various spirit realms using enchanted needle", rouseChecks: 1, requiredTime: "Self-stabbing with needle", dicePool: "Intelligence + Blood Sorcery", ingredients: "Needle of the Mind's Eye", level: 5 },
{ name: "Sacrifice of Odin", summary: "Sacrifice a body part for enhanced willpower effects and temporary bonuses", rouseChecks: 1, requiredTime: "1 turn", dicePool: "Intelligence + Blood Sorcery", ingredients: "One silver tipped knife", level: 5 }
];

export const powerIsRitual = (p: Power | Ritual | Ceremony): p is Ritual | Ceremony => {
    return (p as any)["ingredients"] !== undefined;
}