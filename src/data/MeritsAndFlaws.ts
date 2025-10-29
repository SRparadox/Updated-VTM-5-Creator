// --- Bargain Flaws ---
export const bargainFlaws = [
    { name: "Ill-Fated Warrior", cost: [1], summary: "Whenever you take Health Damage, of either kind, you take an additional point of Superficial Health Damage at the end of that turn.", type: "bargainflaw", color: "purple" },
    { name: "Hollowing Curse", cost: [1], summary: "Your physical flesh can be restored like any other Cainite's, up until a point. You can only Rouse to Mend the last two marked boxes on your Health Tracker upon gaining a Stain or waking each night.", type: "bargainflaw", color: "purple" },
    { name: "Oculus Infernus", cost: [1], summary: "A third eye opens on your forehead whenever you roll a Messy Critical or enter Frenzy. While this eye is open you can only see out of it, as your normal eyes lose vision. It also burns a fiery color, making it Difficult to hide.", type: "bargainflaw", color: "purple" },
    { name: "Swarn's Favor", cost: [1], summary: "Flies or other insects always seem to gather in the same room as you, or will blanket windows and other entrances, and will linger suspiciously in the area you were in for up to an hour afterward. Up to once per session, you lose one die at the Storyteller's discretion as the swarming pests thwart your actions in some way.", type: "bargainflaw", color: "purple" },
    { name: "Restless Dreams", cost: [1,2], summary: "Your day-sleep is disturbed by visions from the world beyond. You regain one less Willpower when waking each night for each dot of this Merit.", type: "bargainflaw", color: "purple" },
    { name: "Diabolical Touchstone", cost: [2], summary: "Choose one of your Touchstones. This Touchstone acts as an anchor to a hellish power that you've made your Dark Bargain with. If they are damaged, you take the same amount and type of damage, in addition to any Stains gained. If they are destroyed, your highest Discipline Level or Attribute Rating (Your choice) is permanently reduced by 1.", type: "bargainflaw", color: "purple" },
    { name: "Baleblooded", cost: [2], summary: "Your blood sublimates intonoxious black fumes, a swarm of insects, or even ignites into Baleflame at random. These things are always detrimental to you when they occur, and because your vitae transmutes as soon as it leaves your body, you cannot Embrace or Ghoul.", type: "bargainflaw", color: "purple" },
    { name: "Chernobog's Legacy", cost: [2], summary: "At Hunger 4 or higher, your body contorts into alien and demonic aspects, reducing your Looks to Repulsive and causing a -1 die penalty to a Physical Skill of the Storyteller's choice.", type: "bargainflaw", color: "purple" },
    { name: "Putrescent Slumber", cost: [2], summary: "You can only sleep when submerged in blood, rotting offal, or under a pile of cadavers. Waking having not slept in this way impairs you Physically, Socially, or Mentally the next night, causing a two-dice penalty in any related Attribute pools.", type: "bargainflaw", color: "purple" },
    { name: "Kiss of Mania", cost: [2], summary: "Slaking one or more Hunger when feeding directly from a vessel infficts a deranged Compulsion upon the victim, and Vampires you feed on may immediately give in to Fury Frenzy, with you as their target.", type: "bargainflaw", color: "purple" },
    { name: "Perpetual Liar", cost: [2], summary: "You are unable to tell the Truth and must lie, constantly. Whenever you attempt to speak the truth you must make a Willpower Test; Difficulty 3. If you succeed you can speak a number of Truths equal to the margin plus one for the remainder of the scene. If you fail you take a point of Willpower Damage.", type: "bargainflaw", color: "purple" },
    { name: "Smouldering Decay", cost: [3], summary: "Your flesh constantly withers due to rot or a slow burn over the course of the night, reaching its apex near dawn or when you're at Hunger 4 or greater, upon which you become charred black bones, held together by crimson veins and twanging sinew.", type: "bargainflaw", color: "purple" },
    { name: "Monstrous Reflection", cost: [3], summary: "Reflective surfaces betray you as a demonic silhouette blanketed in darkness, with an occult sigil at the center of your mass, along with a writhing eye. The appearance can distort or alter further at the Storyteller's discretion, but should always appear as a demonic breach of the Masquerade.", type: "bargainflaw", color: "purple" },
    { name: "Murderous Shadow", cost: [3], summary: "Your shadow has a will of its own, and will occasionally leave you to pursue its own ambitions. At the Storyteller's discretion, this shadow may have certain powers of Oblivion when it acts. In its absence, you no longer cast a proper shadow, which may be noticed by others as a breach of the Masquerade. Worse still, when it does return, it is usually after committing an extravagantly horrendous murder nearby. If you take this Dark Bargan with Pareidolian, expect to be ever-vigilant of a shadow that will undermine you at every turn.", type: "bargainflaw", color: "purple" },
]
import { Character } from "./Character"
import { ClanName } from "./NameSchemas"

export type MeritOrFlaw = { name: string; cost: number[]; summary: string }

export type MeritsAndFlaws = {
    title: string
    merits: MeritOrFlaw[]
    flaws: MeritOrFlaw[]
}

export const ghoulMeritsAndFlaws: MeritsAndFlaws[] = [
    {
        title: "🩸 Ghoul Backgrounds",
        merits: [
            { name: "Blood Empathy", cost: [2], summary: "The ghoul can feel if their regnant is in danger or otherwise, needs them immediately, this does not allow for telepathic communication." },
            { name: "Unseemly Aura", cost: [2], summary: "Their aura has become indistinguishable from a Kindred." },
            { name: "Adrenal Surge", cost: [1], summary: "Like a vampire, you can augment your abilities for a brief time by calling on the power of the Blood. You gain the ability to Blood Surge as if you had a Blood Potency of 0, equal to that of a thin-blood vampire. When you do so, you suffer 1 point Aggravated damage opposed to making a Rouse Check." },
            { name: "Altered Metabolism", cost: [1], summary: "Your vitae slows your metabolism and makes your body more efficient, so you need to eat and sleep less. You requiring half as much food and water each day and only need to sleep every other day." },
            { name: "Blood Healing", cost: [1], summary: "Consuming vampiric blood instantly revitalizes you. The first time in a night you ingest vitae, you either heal 1 Superficial damage or 1 Aggravated damage is converted into Superficial damage." },
            { name: "Efficient Biology", cost: [1], summary: "Your body burns through vitae at a slower rate than other ghouls, making you a highly desirable servant. You only need to be fed vitae once every three months rather than once a month to remain as a ghoul." },
            { name: "Guilty Conscience", cost: [1], summary: "Your pronounced moral compass fills you with regret for misdeeds and transgressions. You add one extra die to all Remorse tests." },
            { name: "Inhuman Strength", cost: [1], summary: "Vampire blood increases your physical strength, maximizing the impact of your blows. When you succeed at a feat of strength or on a Brawl or Melee attack, you can reroll one die without spending Willpower, potentially increasing the margin." },
            { name: "Nose for Blood", cost: [1], summary: "Your craving for blood makes you sensitive to its odour. You add one extra dice to appropriate Mental dice pools to detect and identify blood or locate injured creatures." },
            { name: "Subservient", cost: [1], summary: "The goals of your master become your own. When following the orders of your domitor or regnant, you treat this task as an Ambition for purposes of recovering Aggravated Willpower damage." },
            { name: "Twisted Urges", cost: [1], summary: "You are drawn to all manner of temptations. When you engage in a vice or guilty pleasure for at least an entire scene, you can recover one point of Superficial Willpower damage as if you had accomplished your Desire." },
            { name: "Intoxicating Blood", cost: [2], summary: "Your blood retains all your recent emotions and lingering Resonance, causing vampires that feed on you become euphoric and dizzy. A vampire that feeds on you subtracts one dice from all dice pools for a number of scenes equal to the Hunger sated on you." },
            { name: "Unwavering Loyalty", cost: [2], summary: "The bond between you and your master is almost unbreakable. When you attempt to resist a Discipline or similar supernatural ability using a Mental Attribute, you can add one extra die to your pool. This Merit does not function against powers used by your domitor." },
            { name: "Relentless Dedication", cost: [2], summary: "Your loyalty to your master pushes you beyond normal limits. Once per session, when you are Impaired from damage, you can ignore this penalty for one scene provided you are directly following your domitor's orders." },
            { name: "Subtle Aura", cost: [2], summary: "The Blood lies partially dormant within you until you call upon its power. Your aura shows you as a mundane human and not a ghoul, unless you are actively using a Discipline power." },
            { name: "Potent Blood", cost: [3], summary: "Once per session, when you would take Aggravated damage in place of making a Rouse Check (such as when using a Discipline power or using a Blood Surge with the Adrenal Surge Merit) you can choose to instead take two Superficial damage." },
        ],
        flaws: [
            { name: "Baneful Blood", cost: [1,2], summary: "The character experiences the bane of their first domitor, this does not change if they get a new domitor. The domitor must be of Clan Lasombra, Malkavian, Ministry, Nosferatu, Ravnos, Salubri, or Toreador." },
            { name: "Crone's Curse", cost: [2], summary: "The character appears at least a decade older than they actually are which reduces their health tracker by one." },
            { name: "Distressing Fangs", cost: [1], summary: "Having developed fangs like kindred, the character suffers one die on Social pools with mortals." },
            { name: "Bestial Temper", cost: [1], summary: "As the Thin-Blood flaw (see Vampire: the Masquerade, p. 182)." },
            { name: "Blood Addict", cost: [1], summary: "You have a physical or psychological addiction to vitae, which gives you the intense urge to consume blood—particularly vampiric blood. When you see or smell vitae, you lose two dice from all pools for the rest of the scene or until you satisfy your craving. If you also have the Bestial Temper flaw you might need to test against hunger frenzy." },
            { name: "Degenerate", cost: [1], summary: "Despite the restorative properties of the Blood, your body shows signs of decay, addiction, and the lingering scabs from old wounds. Individuals trying to identify you as inhuman add one die to relevant dice pools. This increases to 2 dice if your Health tracker is more than half full." },
            { name: "Delicious Blood", cost: [1], summary: "Your blood is intoxicatingly delicious, making it challenging for vampires to stop drinking from you. When a Kindred feeds on you, they must make Hungry Frenzy Test at Difficulty 2 to stop before they are completely satiated." },
            { name: "Touch of the Beast", cost: [1], summary: "The vitae empowers your base desires, granting you a true Beast. You have 1 Hunger that can never be satiated, which can trigger Messy Criticals and Bestial Failures, as well as inducing Compulsions." },
            { name: "Vitae Sink", cost: [1], summary: "You rapidly burn through vitae. You need to be fed Blood every two weeks to remain a ghoul." },
            { name: "Sunlight Sensitivity", cost: [2], summary: "The vitae in your body quiets during the day, making you sluggish and less responsive. You cannot use Discipline powers during the day and you suffer a two die penalty on all tasks while in direct sunlight." },
        ],
    },
    {
        title: "🎭 Mask",
        merits: [
            { name: "Mask", cost: [1,2], summary: "A fake identity that allows the vampire to keep their true selves away from mortal's prying eyes, including getting bank accounts, a birth certificate and everything else a vampire might need to masquerade as a human." },
            { name: "Zeroed", cost: [1], summary: "All of the character's past self has been purged from all systems as if they never existed. The character must have a 2-dot mask in order to take this." },
            { name: "Cobbler", cost: [1], summary: "The ability to create or source out masks. Making a mask takes 3 days per dot. The character must have a 2-dot mask in order to take this." },
        ],
        flaws: [],
    },
    {
        title: "👥 Mawla",
        merits: [
            { name: "Mawla", cost: [1,2,3,4,5], summary: "Another kindred who has taken them under their wing to mentor them." },
            { name: "Assimilated", cost: [1], summary: "Through your Mawla's influence, you've been accepted—at least partially—by the local members of their clan. You feel like one of them now, and may share their beliefs, customs, or even prejudices toward other groups and clans. Your adoptive clan may be more willing to share information with you, allow you to use their hunting grounds, or invite you to clan-only gatherings. Not everyone approves of this arrangement, though—either in the adoptive clan or your own." },
            { name: "Raised by Wolves", cost: [1], summary: "Your Mawla took you in at a very early stage in your unlife, essentially replacing your absent sire—dead or otherwise. They taught you everything you know about the Kindred ways and gifts of the Blood. Replace one of your in-clan Disciplines (in which you have no dots) with one of your Mawla's in-clan Disciplines." },
            { name: "Pack Hunt", cost: [1], summary: "You and your Mawla occasionally hunt together. Once per story, if your Mawla hunts alongside you, you can automatically succeed on your hunting roll. Additionally, add one extra die to your Predator pool if you convince another Kindred to hunt with you." },
        ],
        flaws: [
            { name: "Adversary", cost: [1,2,3,4,5], summary: "Another kindred who perhaps liked the character, but now goes out of their way to ruin their lives in any way they can. Rated two levels higher than the Mawla value." },
            { name: "Secret Master", cost: [1], summary: "Your Mawla gives you tasks that must be completed quietly. The character must have a Mawla to take this." },
            { name: "Trophy Childe", cost: [1], summary: "While they still act as your Mawla, kindness wasn't the main reason they adopted you. Perhaps it was a political statement, an open act of defiance against the Primogen or the Prince, a mockery at your clan's expense, or an attempt to humiliate your sire. Everyone knows about it—and some Kindred hold a grudge. You inherit the following Background Flaws from your Mawla: Enemy, Infamy, Adversary, and Stalkers. Treat them as one dot lower than the original versions." },
        ],
    },
    {
        title: "💰 Resources",
        merits: [
            { name: "Resources", cost: [1,2,3,4,5], summary: "Cash flow, be it from stock trading or inheritance to working as a barista at night." },
            { name: "Steady Income", cost: [1], summary: "Your money works for you. Through smart investments, passive income, or a well-diversified portfolio, you never have to worry about the well running completely dry. If you lose a dot of Resources, you regain it for free after three nights. This Advantage can't raise your Resources above 3." },
        ],
        flaws: [
            { name: "Destitute", cost: [1], summary: "No money, no home, and no monetary value beyond themselves." },
            { name: "Honest-To-God Job", cost: [1], summary: "Maybe the business you run on the side requires constant supervision. Maybe you feel guilty enough about preying on mortals that you want at least your money to be clean. Or maybe you simply find it hard to make ends meet—even as a vampire. Either way, you have a job. A real one. Whether you're a self-employed entrepreneur, a gig artist, or a wage slave, once per story—and whenever you want to raise your Resources—you must spend a significant amount of time working. Treat this work as a Project (see Vampire: the Masquerade, pp. 417-420), and determine the exact nature of your work with the Storyteller. If you fail to deliver what is expected of you, this Flaw is forfeited and you immediately lose a total of 2 dots between your Resources and Mask Backgrounds. If you can't lose those either, you instead gain the Resources Flaw Destitute." },
            { name: "Red-Flagged", cost: [1], summary: "Good news? You're not fully compromised—yet. Bad news? One of your bank accounts or shell companies has landed on a three-letter agency's watchlist. Maybe you slipped up or got set up by another Kindred. Maybe it all happened way before your Embrace. Back then, it was just a nuisance. Now, it could be lethal. Nobody's freezing your assets or sending a SWAT team to your Haven—yet—but you need to monitor your expenditures closely, because someone else probably already is." },
        ],
    },
    {
        title: "👤 Retainers",
        merits: [
            { name: "Retainers", cost: [1,2,3], summary: "Loyal followers who will do the character's bidding, sometimes Ghouls and/or Blood Bonded." },
            { name: "Body Double", cost: [1], summary: "One of your Retainers bears an uncanny resemblance to you—you found and blood bound them specifically to serve as your identical twin, or perhaps received them as a gift from a Tzimisce who owed you a boon. They can make public appearances for you during the day, serve your sentence in prison, or even perform the ultimate sacrifice to cover your own tracks—unknowingly, of course." },
        ],
        flaws: [
            { name: "Stalkers", cost: [1], summary: "Something about the character tends to attract others who get a little bit too attached and just won't let go. Be it a former retainer or a past lover, should they get rid of them, another soon appears." },
            { name: "Rogue Ghoul", cost: [1], summary: "A former ghoul, now free of your influence, harbors a bitter grudge—whether for being blood bound and mistreated, denied the cursed gift of the Embrace, or simply from years of witnessing your atrocities. They know better than to confront you directly. Instead, they'll weaponize every scrap of knowledge they have on you—your allies, routines, and preferences—to make your unlife miserable." },
        ],
    },
    {
        title: "🏛️ Status",
        merits: [
            { name: "Status", cost: [1,2,3,4,5], summary: "The character has built a name for themselves in their Faction." },
            { name: "City Secrets", cost: [1,2,3], summary: "This grants knowledge about the city's Kindred power structure. If this secret is about mortal business it's only a way to explain Influence. This information can be sold at a high price, but its value lies in protection as the people involved may not want this information sold off and will do their best to keep you happy, for a time anyway. This can only be taken at a maximum of three times with each being a different secret." },
            { name: "Autonomy of the Grave", cost: [4], summary: "You’ve essentially been given a free pass when it comes to certain offenses within a domain. Work with your Storyteller to determine the specifics. So long as your trespasses fall within this remit, you don’t suffer the same consequences as other vampires. Push your luck too often or flaunt your privileges, and you may find yourself with more enemies than friends." },
        ],
        flaws: [
            { name: "Suspect", cost: [1], summary: "Breaking the rules or weaseling out of something owed has netted this character the ire of this Sect. Stay out of sight and mind and nothing will happen until they prove their worth again but until then take a 2 dice penalty to Social tests with the offended Factions." },
            { name: "Shunned", cost: [2], summary: "Despised by a Sect, a line was crossed that never should have been, and now members of this group actively work against them at any opportunity." },
            { name: "Frozen in Time", cost: [1], summary: "You were Embraced before maturity or long past your prime, making it hard to be taken seriously. Suffer a 1-Die penalty to all Social Pools against Kindred of your creator’s sect." },
        ],
    },
    {
        title: "📚 Linguistics",
        merits: [
            { name: "Linguistics", cost: [1,2,3,4,5], summary: "Each dot allows the character to read, write and speak fluently in another language outside of the default two they already know, which is their native language and the language of the Domain." },
            { name: "Dead Tongues", cost: [1], summary: "You know languages considered extinct, with no living native speakers—whether out of necessity for your research, or taught to you by your sire, who still remembers when they were in active use. Each dot in this Merit grants you knowledge of two dead languages." },
            { name: "Intuitive Communicator", cost: [1], summary: "You've spent half your life traveling the world—far and wide—or hunched over dusty books and tomes in all manner of languages, both dead and living. You might not be able to fluently speak anything other than your native tongue, but something has clicked for you, and you get this whole language thing now. You can communicate basic ideas and simple commands without knowing the language—using the odd phrase you picked up along the way, a mix of words from various other tongues, gesticulation, facial expressions, and onomatopoeia. This works with Discipline powers that require issuing simple voice commands, such as the Dominate power Compel. You still can't read or write in languages you don't know, but you can roll Intelligence + Academics against Difficulty 5 to understand anything spoken back to you." },
            { name: "Polyglot", cost: [1], summary: "Practice makes perfect, and to say you've merely learned some languages would be an understatement. You have meticulously taken them apart—piece by piece—like a watchmaker, and mastered all there is to know about them. With this intimate understanding, the more of them you know, the easier it becomes to learn new ones. Each dot of the Linguistics Merit allows you to read, write, and speak in three new languages instead of just one, as fluently as a native." },
        ],
        flaws: [
            { name: "Illiterate", cost: [2], summary: "The Character cannot read nor write and their Science and Academics Skills may not go beyond 1 dot." },
        ],
    },
    {
        title: "👤 Looks",
        merits: [
            { name: "Beautiful", cost: [2], summary: "Add one die to related Social pools" },
            { name: "Stunning", cost: [4], summary: "Add two dice to related Social pools" },
            { name: "Semblance of the Methuselah", cost: [1,2], summary: "With an appearance strikingly similar to a methuselah, gain one die on rolls to impress, intimidate or attract the attention who recognize your face. As well as gain other bonuses such as status or additional die when meeting the methuselah they resemble." },
            { name: "Famous Face", cost: [1], summary: "Appear as someone famous and gain two dice in social tests where this works to their benefit. Take a two-dice penalty whenever they attempt to hide in a crowd or avoid recognition." },
            { name: "Ingénue", cost: [1], summary: "They appear innocent and blameless, add two dice to any rolls related to avoiding suspicion or deflecting blame at the Storytellers' discretion." },
            { name: "Remarkable Feature", cost: [1], summary: "Possessing a rare, memorable feature such as eye color or unusual complexion. Add two-dice to social interactions with strangers and take a one-die penalty to disguise yourself." },
            { name: "Skin-Deep Beauty", cost: [1], summary: "You maintain a healthy-looking façade, while your core rots more with each passing night. After draining and killing your prey, you automatically take on the Blush of Life, and while at Hunger 0, treat your Humanity score as one point higher than it actually is (maximum 10) for the purposes of eating, drinking, or sexual intercourse. This Merit doesn't combine with others that treat your Humanity as higher—if you have multiple ways to treat your Humanity as higher than it is, choose the most effective one in any situation." },
        ],
        flaws: [
            { name: "Ugly", cost: [1], summary: "Lose one die from related Social pools" },
            { name: "Repulsive", cost: [2], summary: "Lose two dice from related Social pools" },
            { name: "Stench", cost: [1], summary: "Their breath and body odor are supernaturally foul. Lose one die from seduction and similar Social pools, and lose two from Stealth pools unless they are upwind." },
            { name: "Transparent", cost: [1], summary: "Unable to lie due to a terrible poker face or a strong urge to be truthful. Lose one die in any pools requiring Subterfuge, they cannot take any dots in Subterfuge either." },
            { name: "Unblinking Visage", cost: [2], summary: "Treat Humanity as two lower (Min 0) when using Blush of Life, eating, drinking, or sexual intercourse." },
            { name: "Debilitating Scar", cost: [2], summary: "You have a wound that never fully heals, sapping your strength. Reduce one Physical Attribute by 1, to a minimum of 1. You cannot raise it above 4 with experience." },
            { name: "Insult to Nature", cost: [2], summary: "You simply should not be. You have overstayed your welcome and do not belong in this world anymore. Even the very animated corpse that hosts your squalid spirit seems to work against the pretense of you still being one of the living. Whenever you activate a Discipline power, you lose your Blush of Life." },
            { name: "Sharp-Set Visage", cost: [1], summary: "Your Beast refuses to stay hidden while starving, making it impossible to maintain the Blush of Life at Hunger 5. If you manage to temporarily satisfy the Beast by reducing your Hunger to 4 or lower, the Blush of Life does not return automatically—retaking it requires a new Rouse Check." },
        ],
    },
    {
        title: "💊 Substance Use",
        merits: [
            { name: "High Functioning Addict", cost: [1], summary: "Add one die to either Physical, Social, or Mental pool when the last feeding had the drug of their desire." },
        ],
        flaws: [
            { name: "Addiction", cost: [1], summary: "Unless the action is to immediately gain their drug, lose one die to all pools if the last feeding was not on the drug of their choice." },
            { name: "Hopeless Addiction", cost: [2], summary: "Unless the action is to immediately gain their drug, lose two dice to all pools if the last feeding was not on the drug of their choice." },
            { name: "Blood Addict", cost: [1], summary: "It's not just about the Hunger with you. You simply crave this stuff—the viscous, metallic, warm, throat-filling sensation of drinking the forbidden nectar. Maybe you used to be a ghoul, and the addiction stayed with you, or perhaps this is just the way you are. Either way, each night after waking from your day-sleep, you cannot spend or recover Willpower until you get your fix of fresh, warm blood." },
            { name: "Eternal Bender", cost: [1], summary: "If the last person you fed on wasn't under the influence of a drug or substance you haven't tried in the past seven nights, you lose one die from all pools, except pools for actions that will immediately get you such blood." },
        ],
    },
    {
        title: "🔮 Supernatural",
        merits: [
            { name: "Nihilus", cost: [2], summary: "You're like a walking suicide note. Something about you is so aberrant that it drains all color and hope from the world. The Veil thins in your presence, reducing the difficulty of Oblivion Ceremony rolls made nearby by 1. If you linger too long in one place—such as your Haven—it will eventually attract unwanted visitors from beyond the Shroud." },
            { name: "Wraithbound", cost: [2], summary: "Whether consciously or not, you are the binding fetter of a Wraith—someone you were very close to in your previous life or even after the Embrace. While such a connection is extremely rare, it can be highly beneficial, as the spirit will not want its fetter destroyed. Whenever the Storyteller deems it appropriate, the ghost can manifest in a variety of ways to warn you of impending danger that could result in your Final Death. However, acting against the spirit's convictions might provoke the apparition into fits of anger." },
        ],
        flaws: [
            { name: "Two Masters", cost: [1], summary: "Be Blood Bound to two individuals at the same time." },
        ],
    },
    {
        title: "🤝 Allies",
        merits: [
            { name: "Allies", cost: [2,3,4,5,6], summary: "A group of mortals who will support or aid the vampire. Family, friends, or an organization that has loyalty to the vampire. Build them between (• - ••••) Effectiveness and (•-•••) Reliability, the maximum amount of total points is 6. Effectiveness defines how proficient they are at a task. Reliability determines how dependable they are." },
            { name: "Kindred Spirit", cost: [3], summary: "One of your Touchstones is a true, selfless friend—a living tether to the mortal world, not just a distant reminder of what's at stake. Whether aware of your condition or not, they choose to help you fight your demons, and you—blind to the risks of getting too close—take what they offer in spades. Treat them as a three-dot Ally (see Vampire: the Masquerade, pp. 184-185). Once per story, if you spend a scene with them—in shared silence, heartfelt confession, or long, restless conversation—you may erase one Stain from your Humanity tracker. As good as it sounds, entrusting the weight of your damned soul to a single mortal is an enormous burden. Should your Humanity ever fail, they'll be the first you drag into hell with you." },
            { name: "Unlikely Alliance", cost: [4], summary: "As unlikely as it is fragile, this peculiar alliance ties you to another supernatural being—a mage, werewolf, wraith, changeling, or something else entirely—just as young, naive, and inexperienced as you. They are not your Ally in the full sense of the word, but will help you—mostly because they need something from you as well. Treat them as a four-dot Ally (see Vampire: the Masquerade, pp. 376-377 and Cults of the Blood Gods, p. 216), and determine the details of this relationship with the Storyteller. Once per story, you may ask for their help—an equivalent of a major boon—but they will expect the same from you in return. You don't even want to know what will happen to both of you when word of your business arrangement gets out—and it will." },
        ],
        flaws: [
            { name: "Enemy", cost: [1,2,3,4,5], summary: "The opposite to Allies, and are rated two dots less than their effectiveness." },
        ],
    },
    {
        title: "📞 Contacts",
        merits: [
            { name: "Contacts", cost: [1,2,3], summary: "These are mortals who can get the character information, items or other things of value." },
        ],
        flaws: [],
    },
    {
        title: "⭐ Fame",
        merits: [
            { name: "Fame", cost: [1,2,3,4,5], summary: "Mortal fame is a dangerous game, the character might have once been a pop singer, actress, or other celebrity. The level of fame can subtract from tests against fans or hunting. There is a downside as people may remember the character as their face is plastered on a nearby billboard. Fame can be bought to apply in Vampire society as well." },
            { name: "Battle-Hardened", cost: [2], summary: "You were already used to violence in your mortal life. Whenever you make a Willpower Check in response to deliberate violence directly against you or by you, you gain a 2-Die bonus to the roll." },
        ],
        flaws: [
            { name: "Dark Secret", cost: [1,2,3,4,5], summary: "What they've done is still a secret, except to one or two very motivated enemies." },
            { name: "Infamy", cost: [1,2,3,4,5], summary: "They've done something atrocious and others know." },
            { name: "Banned From", cost: [1,2,3], summary: "Small cities are one dot, medium cities are two dots, large cities are three dots." },
        ],
    },
    {
        title: "💼 Influence",
        merits: [
            { name: "Influence", cost: [1,2,3,4,5], summary: "They have sway in mortal communities, be they political, through financial status and prestige, or manipulation. By default, this merit only applies to a specific group or region of the city." },
        ],
        flaws: [
            { name: "Disliked", cost: [1], summary: "Subtract one die from Social tests involving groups outside of the character's loyal followers." },
            { name: "Despised", cost: [2], summary: "One group/region of the city goes out of its way to destroy the character's plans." },
        ],
    },
    {
        title: "🏠 Haven",
        merits: [
            { name: "Haven", cost: [1,2,3], summary: "A vampire without Haven dots is able to find a safe place for the night. However, Haven dots make it that much more secure and private per dot." },
            { name: "Hidden Armory", cost: [1,2,3,4,5], summary: "Each dot adds one pistol and one firearm inside the haven, safely concealed." },
            { name: "Cell", cost: [1,2,3,4,5], summary: "Allows two prisoners to be stored inside. Each additional dot either allows the character to store twice as many prisoners or adds +1 to the attempts to escape. Not available in one dot havens." },
            { name: "Watchmen", cost: [1,2,3,4,5], summary: "Each dot supplies 4 Average Mortals and one Gifted Mortal to watch over the haven." },
            { name: "Laboratory", cost: [1,2,3,4,5], summary: "Each dot of this merit contributes to dice rolls related to one Science or Technology specialty or for Alchemy pools when using Fixatio. Not available in one dot havens." },
            { name: "Library", cost: [1,2,3,4,5], summary: "Each dot of this merit contributes to dice rolls for one Academics, Investigation or Occult specialty. Small havens are limited to one dot." },
            { name: "Location", cost: [1], summary: "The place in which this haven resides gives a +2 dice bonus (or +2 enemies Difficulty) on relevant rolls from either Chasse or base Haven rating. If this does not work, with the Storyteller the player can craft a custom bonus. Example, living in the heart of downtown allows the character to have a +2 bonus to etiquette rolls to pick up local rumors." },
            { name: "Luxury", cost: [1], summary: "Rich and full of value, the haven is well decorated with high-end décor and items. +2 dice bonus to Social tests when mortals are inside the haven. Without at least 3 dots in Resources, these items are stolen or illegally obtained." },
            { name: "Postern", cost: [1,2,3,4,5], summary: "The haven has some kind of secret exit that allows them a safe passage out. For each dot of this merit add one die to pools of evasion or escaping surveillance near the haven." },
            { name: "Security System", cost: [1,2,3,4,5], summary: "For each dot of this merit, add one die to pools to resist unwelcome guests into the haven." },
            { name: "Surgery", cost: [1], summary: "Add two die to relevant pools for relevant tests performed in havens." },
            { name: "Warding", cost: [1,2,3,4,5], summary: "This haven possesses some type of magic warding that repels supernatural entities. Each dot of this merit adds one die to pools to resist supernatural scrying and whatever else the Storyteller allows." },
            { name: "Holy Ground", cost: [1], summary: "The haven has significance to the character's cult, granting them the ability to call upon a large group of cultists to protect their haven once per story." },
            { name: "Shrine", cost: [1,2,3], summary: "A shrine is present in the haven, adding a bonus equivalent to the dots in searching, preparing or otherwise obtaining Ritual or Ceremony ingredients." },
            { name: "Business Establishment", cost: [2,3], summary: "The haven is rented out to a business or is run as a business by the Kindred themselves. This gives both benefits and drawbacks, such as a ready stream of income but also being very much on the grid and local enforcement being aware of the location. This reduces the Haven's base dots by one for pools involving the Haven's privacy and defenses against either (pick one) financial or criminal intrusions. Dots in this merit roughly equal Resources but do not stack onto existing Resources for the character." },
            { name: "Furcus", cost: [1,2,3], summary: "The haven is located on veins of the earth or a frayed spot in the Veil. Each dot in this merit adds one die to Rituals or Ceremony dice pools used at the furcus." },
            { name: "Machine Shop", cost: [1,2,3,4,5], summary: "Each dot of this merit adds one dice to the pool for Craft rolls. It also adds this to other tests related to building, repairing, or disassembling machinery or equipment." },
        ],
        flaws: [
            { name: "No Haven", cost: [1], summary: "The character must make a basic test to find a secure resting place." },
            { name: "Creepy", cost: [1], summary: "Take a two-dice penalty on Social pools in the haven with mortals." },
            { name: "Haunted", cost: [1,2,3,4,5], summary: "There is a supernatural manifestation taking hold over the haven." },
            { name: "Compromised", cost: [2], summary: "This haven is on a watchlist and may have been raided at some point." },
            { name: "Shared", cost: [1,2], summary: "The haven is not entirely owned by the character, instead being shared with other Kindred or having a Kindred landlord. This does not need to be taken by Coteries, as that only has as many problems as they make mutually in play." },
        ],
    },
    {
        title: "🎯 Other",
        merits: [
            { name: "Check the Trunk", cost: [1], summary: "Easy access to an armory or cache of tools, none of these items can exceed the value of something a Resources 2 character could access. Add two dice to Preperation Rolls." },
            { name: "Side Hustler", cost: [2], summary: "Once per session they can get their hands on an item, information, or access to an event as if they had two dots in the related Resources, Contacts, or Influence." },
            { name: "Tempered Will", cost: [3], summary: "They are always aware when someone is attempting to use Dominate or Presence against them. They may add two additional dice to resistance pools once per session, which can only be taken by those with no dots in Dominate or Presence." },
            { name: "Untouchable", cost: [5], summary: "Once per story they are able to escape all official punishment for a crime that would otherwise see them destroyed." },
            { name: "Mystic of the Void", cost: [1,2], summary: "Choose a single Oblivion Power they do not know. They count as knowing that power for the purpose of prerequisites to learning Oblivion Ceremonies. Hecata and Lasombra can choose three Oblivion Powers they do not know instead of just one." },
            { name: "Gehenna Prepper", cost: [1], summary: "Second Inquisition, the Sabbat, or the Antediluvians awakening from millennia-long torpor—you know one of those nights all hell will break loose, and you are ready for it. Whether by your own planning, your clanmates, or other accomplices, you have caches, stashes, and safehouses hidden throughout the domain. Once per story, you can burn one of these spots to find a conventional weapon of your choice, two blood bags, and a safe place to spend the day." },
            { name: "Lie Told Thousand Times", cost: [1], summary: "For years, you have practiced telling a carefully crafted version of a made-up story, as if your unlife depended on it—whether to solidify your Mask, conceal your true agenda, or bury past transgressions beneath multiple layers of elaborate lies. You can now tell this story without the slightest hint of hesitation. Add three additional dice to your pool when doing so. You can purchase this Merit more than once—each instance covering a different story." },
        ],
        flaws: [
            { name: "Knowledge Hungry", cost: [1], summary: "At character creation pick a topic that your character desires to study. When they come across the methods to learn these things, they must make a Willpower roll at Difficulty 3 to resist." },
            { name: "Prestation Debts", cost: [1], summary: "They owe other Kindred boons, even if these boons are paid off the Kindred lords over them. The Boon-owning Kindred keeps a one-die bonus in Social combat against the one who owes it." },
            { name: "Risk-Taker Errata", cost: [1], summary: "When confronted with a risky temptation that the character hasn't done before, they suffer a two-dice penalty for all actions till they participate or the scene ends." },
            { name: "Weak-Willed", cost: [2], summary: "Even when they are aware that someone is attempting to sway they may not use the active resistance systems to avoid the attempts." },
        ],
    },
    {
        title: "📜 Archaic",
        merits: [
            { name: "Bygone Lore", cost: [1], summary: "You know many a Kindred tale of old—the myths, legends, stories, and hearsay. Perhaps this knowledge was passed down to you by your sire, or you gathered it from other clan members during your travels. At the Storyteller's discretion, add two dice to any Academics or Occult pools related to old Kindred lore. These stories often lack detail and may contradict one another, but they can still help you paint a vivid picture of things thought lost to the annals of time." },
        ],
        flaws: [
            { name: "Out of Time", cost: [1], summary: "Though embraced decades ago, you remain, in practice, little more than a fledgling, having spent most of that time with a wooden stake driven through your unbeating heart, in torpor—an act of punishment, or perhaps one of mercy. While you can adapt to the modern nights, it will take years to work out the kinks. Your Academics, Drive, Etiquette, Firearms, Medicine, Politics, Science, and Technology skills reflect the knowledge and sensibilities of your own era. Raising any of these skills by at least one dot after character creation removes this drawback for that skill. You may also take the Archaic Flaw Living in the Past during character creation." },
        ],
    },
    {
        title: "⛓️ Bonding",
        merits: [],
        flaws: [
            { name: "Sired Into Thralldom", cost: [2], summary: "Either due to the unusual circumstances surrounding your Embrace, or through the sheer potency of your sire's exceptionally strong vitae, you are now eternally blood bound to them. Until they meet their Final Death, this Bond's Strength always equals 3, never weakens, and cannot be broken through regular means." },
        ],
    },
]

export const thinbloodMeritsAndFlaws: MeritsAndFlaws = {
    title: "◐ Thin-blood specific",
    merits: [
        { name: "Anarch Comrades", cost: [1], summary: "A coterie of Anarchs considers you their pet" },
        {
            name: "Camarilla Contact",
            cost: [1],
            summary: "A Camarilla recruiter promises you admittance, but treats you badly and asks you to do tasks",
        },
        { name: "Catenating Blood", cost: [1], summary: "You can create blood bonds and embrace new Vampires" },
        {
            name: "Day Drinker",
            cost: [1],
            summary: "Walking in the sun doesn't damage you, but removes all your Vampiric abilities and halves your health",
        },
        { name: "Discipline Affinity", cost: [1], summary: "Pick a Discipline (lv1) that you can increase like a normal Vampire" },
        { name: "Lifelike", cost: [1], summary: "Your body appears fully human, with a beating heart and a working stomach" },
        { name: "Thin-blood Alchemist", cost: [1], summary: "Gain one dot and one formula in Thin-blood Alchemy" },
        { name: "Vampiric Resilience", cost: [1], summary: "Suffer only superficial damage from most sources, like a normal Vampire" },
    ],
    flaws: [
        { name: "Baby Teeth", cost: [1], summary: "Your teeth are useless for feeding, you need to cut your victims" },
        { name: "Bestial Temper", cost: [1], summary: "Be weak to frenzy like a normal vampire" },
        { name: "Branded by the Camarilla", cost: [1], summary: "The Camarilla have their eyes peeled on you" },
        { name: "Shunned by the Anarchs", cost: [1], summary: "Anarchs shun you" },
        { name: "Clan Curse", cost: [1], summary: "Pick a Clan Curse (severity 1)" },
        { name: "Dead Flesh", cost: [1], summary: "Your flesh slowly rots, -1 to social tests with Mortals" },
        { name: "Mortal Frailty", cost: [1], summary: "Cannot rouse your blood to heal yourself" },
        { name: "Vitae Dependency", cost: [1], summary: "Need to drink Vampire vitae once a week to use Disciplines" },
    ],
}
export const elderMeritsAndFlaws: MeritsAndFlaws = {
    title: "Elder Merits & Flaws",
    merits: [
        { name: "Loyal Childe", cost: [1], summary: "Your childe's loyalty goes beyond any Blood Bond, being born of true affection and admiration. She would do almost anything to aid you, and you trust her as you do no other among the Kindred. This Childe is built as an Ancillae and when you call, they come as soon as possible, usually appearing once per Story." },
        { name: "Holdings", cost: [1], summary: "During your long existence, you have acquired several properties that you have been modifying for years to provide you with protection, numerous places to rest and emergency escape routes. This counts as a rating 3 Haven with 4 Haven Merits." },
        { name: "Paramour", cost: [1], summary: "You have a long-term amorous relationship with another Elder. This lover has almost no secrets to you and vice versa, aiding each other during the ages. The Paramour is built as an Elder and when you call, they come as soon as possible, usually appearing once per Story." },
        { name: "Paranoia", cost: [1], summary: "You know that there are many vampires, hunters, Garou and the like who would love to destroy you. You go out of your way to prepare contingency plans, vary your movement patterns and habits, and otherwise make yourself a difficult target. Once per story, you can choose to automatically succeed in a roll against an Ambush." },
        { name: "Patience", cost: [1], summary: "Those who wait and watch are in a position to take full advantage of the vagaries of time. Once per story, you can choose to automatically overcome a Frenzy check. For the rest of the Scene, all subsequent provocations are at +1 Difficulty." },
        { name: "Military Force", cost: [1], summary: "When a vampire reaches Elder status, they finally get the chance to gain control of human institutions that prevail through force. This may include local police, troopers, FBI, street gangs, crime bosses, biker packs or bands of thrill-seeking young people. Build them as a well-armed group of Gifted Mortals and when you call, they come as soon as possible, usually appearing once per Story." },
        { name: "Beckoning Resistance", cost: [1], summary: "Similar to the merit Bond Resistance, your Blood rebels against control from the Antediluvians. Add two die to your dice pools to resist the Beckoning." },
    ],
    flaws: [
        { name: "Vengeful Childe", cost: [1], summary: "You have sired another Kindred that hates you. Not only does your childe not aid you in your dealings with others, but she actively works towards your detriment. She and her pawns might screw one of your operations in a way that forces you to personally intervene to fix it. This Childe is built as an Ancillae and her merits are spent into a personal 'army' that seeks your destruction." },
        { name: "Death Wish", cost: [1], summary: "You have an unconscious wish to die the True Death. Twice per Session, the Storyteller might ask you to reroll a successful Skill check. This second roll can be enhanced by spending Willpower as normal. The least successful of the two rolls is the actual result of your action." },
        { name: "Emotional Isolation", cost: [1], summary: "You have seen too many friends and family, Kindred and kine alike, swept away on the river of time and cast into oblivion. The pain of seeing so many die while you continued to exist was so horrible, that you have now isolated yourself emotionally from all others. When you accrue Stains from those around you getting hurt, you cannot mitigate them with your Convictions." },
        { name: "Ennui", cost: [1], summary: "You have seen enough to know that nothing is ever truly new: the same events and so-called passions are merely replayed again and again, with only the faces and names shifting as the many, many years go by. You rarely pay attention to those around you, assuming you know all there is to know of them once you have determined what part they play on the world stage. You are unable to perform Insight and Awareness rolls on people you already know unless you spend Willpower." },
        { name: "Jilted Paramour", cost: [1], summary: "You had a long-term relationship with a fellow Elder. With time you grew weary and ended it. Unfortunately, she did not take the ending of the affair well and has apparently developed a strong antipathy for you. You both know many of each other's secrets and this has caused a stalemate thus far. The Paramour is built as an Elder and might be behind inexplicable failed enterprises or against you directly when the Storyteller decides to." },
        { name: "Extreme Paranoia", cost: [1], summary: "You are constantly alert for signs that one or more of your acquaintances are actually seeking to commit diablerie upon you, stake you, or worse. Whenever someone you know performs an act that appears selfless, you must make a successful Frenzy check against a Difficulty decided by the Storyteller to resist branding them traitors and attack them in Fury Frenzy." },
        { name: "Routine", cost: [1], summary: "Through the ages you have settled into somewhat of a routine. You tend to go to the same places at the same time of the year, and to move from haven to haven in a predictable order. If others studied your behaviour closely, they might be able to take advantage of it to do you harm. If the circumstances are appropriate, once per Story, the Storyteller might ask you to automatically fail a roll against an Ambush." },
        { name: "Beckoning Junkie", cost: [1], summary: "Similar to the flaw Bond Junkie, the Call is too sweet for you to resist. Subtract two die from your dice pools to act against the Beckoning. This flaw should only be taken if the Storyteller opts to use the mechanical system for the Beckoning." },
    ],
}

export const isThinbloodMerit = (m: string) => !!thinbloodMeritsAndFlaws.merits.find((tbm) => tbm.name === m)
export const isThinbloodFlaw = (f: string) => !!thinbloodMeritsAndFlaws.flaws.find((tbf) => tbf.name === f)
export const isThinbloodMeritOrFlaw = (mf: string) => isThinbloodMerit(mf) || isThinbloodFlaw(mf)

export const isElderMerit = (m: string) => !!elderMeritsAndFlaws.merits.find((em) => em.name === m)
export const isElderFlaw = (f: string) => !!elderMeritsAndFlaws.flaws.find((ef) => ef.name === f)
export const isElderMeritOrFlaw = (mf: string) => isElderMerit(mf) || isElderFlaw(mf)

export const isGhoulMerit = (m: string) => !!ghoulMeritsAndFlaws.some(category => category.merits.find((gm) => gm.name === m))
export const isGhoulFlaw = (f: string) => !!ghoulMeritsAndFlaws.some(category => category.flaws.find((gf) => gf.name === f))
export const isGhoulMeritOrFlaw = (mf: string) => isGhoulMerit(mf) || isGhoulFlaw(mf)

export const meritsAndFlaws: MeritsAndFlaws[] = [
    {
        title: "🩸 Diablerie",
        merits: [],
        flaws: [
            { name: "Blatant Diablerist", cost: [1], summary: "Powers and Merits capable of sensing Diablerie will always reveal evidence of Diablerie even if the test would otherwise fail to show any information." },
            { name: "Inherited Bane", cost: [2], summary: "You gain another Clan's Bane in addition to your own. Tremere can use this Flaw to gain the Salubri's Bane without commiting Diablerie." },
        ],
    },
    {
        title: "🟣 Dark Bargains",
        merits: [],
        flaws: bargainFlaws,
    },
    {
        title: "🦠 Contagion",
        merits: [],
        flaws: [
            { name: "Disease Vector", cost: [1], summary: "When feeding from a sick mortal, the illness is always contracted and will be passed onto the next vessel." },
            { name: "Plaguebringer", cost: [1,2], summary: "The Kindred carries a disease that cannot be removed from their vitae. At one dot the disease is minor with visible traces, at two dots the disease can be potentially fatal if not treated. It is passed through the bite." },
        ],
    },
    {
        title: "🧠 Psychological",
        merits: [
            { name: "Unholy Will", cost: [2,4], summary: "With two dots, add one die to any pool when resisting or contesting against an individual with True Faith when related to their faith. Suffer one less point of damage from holy sources. At four dots, add two dice and suffer two fewer points of damage." },
            { name: "Zealotry", cost: [1,2,3], summary: "For each dot, once per session when succeeding with a normal roll that aligns to the character's Conviction, turn it into a messy critical." },
            { name: "Penitence", cost: [1,2,3,4,5], summary: "Once per session, take one point of self-inflicted Superficial Health Damage in exchange for one point of Superficial Willpower damage." },
            { name: "Soothed Beast", cost: [1], summary: "With a SPC as an obsession, once per session they can ignore one Bestial or Messy Critical. Gain three Stains if they die." },
            { name: "False Love", cost: [1], summary: "With a SPC as an obsession, when in their presence treat the character's Humanity as one higher (Max 10) for Blush of Life, eating, drinking, or sexual intercourse. Gain three Stains if they die." },
            { name: "Wild Heart", cost: [2], summary: "Add +2 Bonus Dice towards any Social and Mental pools made when interacting with animals. Bonus is +3 at Hunger 4 or higher." },
            { name: "Anti-Aesthetical", cost: [2], summary: "While in a surrounding you consider beautiful or comfortable, gain +1 Bonus Die to resist Fury Frenzy." },
            { name: "Living Empathy", cost: [2], summary: "When interacting with Mortals socially, treat your Humanity as one higher." },
            { name: "Tortured Artist", cost: [2], summary: "While under the effects of a Compulsion, add dice to any creative efforts equal to the largest Dice Penalty that Compulsion confers. Cannot suffer penalties from Compulsions to your creative dice pools." },
            { name: "Utterly Enthralled", cost: [2], summary: "A piece of art, a building, or another Kindred has a psychological grip on you. Spending a Scene in its presence restores a point of Willpower, if it is damaged you take a Stain, and its outright destruction warrants 2 Stains." },
            { name: "Creative Existentialist", cost: [3], summary: "You suffer no penalties to creating art due to being at Humanity 5 or lower." },
            { name: "Aeneas", cost: [2,3], summary: "Your tenacity compounds upon itself when contested. When taking this Merit choose one of your Convictions. Whenever you roll your current Willpower, add a Bonus die to the roll if it's made in the name of one of your convictions. If taken at three dots, double this bonus." },
            { name: "What Must Be Done", cost: [2], summary: "When another Kindred would take an action that you know would give them a Stain, you can choose to take that action in their place, gaining the Stains they would. Should one of your convictions guard against those Stains, they guard against an additional Stain." },
            { name: "Self-Righteous", cost: [2], summary: "Choose one of your Convictions. When you Blood Surge a pool to attack a Storyteller Character in the name of that Conviction, add an additional die to the pool. However if that roll fails you gain a Stain. If it's a Bestial Failure you gain two Stains instead." },
            { name: "Vindicated", cost: [2], summary: "Choose one of your Convictions. It shields against an additional Stain, however when it does, that Conviction cannot shield from anymore Stains until the end of the Story or you spend an extended period, usually most of a night, with the associated Touchstone. Whichever happens first." },
        ],
        flaws: [
            { name: "Beacon of Profanity", cost: [1], summary: "Mortals with any amount of True Faith can sense your presence, regardless of True Faith level." },
            { name: "Crisis of Faith", cost: [1], summary: "Whenever there is a bestial failure, take one point of superficial Willpower damage in addition to other outcomes." },
            { name: "Horrible Scars of Penitence", cost: [1], summary: "Equivalent to Repulsive when around those not within the cult." },
            { name: "Groveling Worm", cost: [2], summary: "Must scourge their own flesh once per session for two points of Superficial Health damage or suffer one point of Aggravated Willpower damage at the next session. Cannot be taken with Penitence Merit." },
            { name: "Animals Are Better Than People", cost: [1], summary: "Can't stand to see animals get hurt or mistreated. If you don't act to prevent it, take a point of Aggravated Willpower Damage." },
            { name: "Zoophilist", cost: [1,2], summary: "Struggle to understand Humans. Suffer a -1 Die penalty in all Etiquette, Insight, and Leadership pools made in relation to Mortals and other Cainites for each dot in this flaw and can't take non-Animal related Specialities in those same Skills." },
            { name: "Dissilusioned Dead", cost: [1], summary: "Your skill remains, but in death your work doesn't evolve or change anymore. Cannot purchase dots or specialties in Craft, Insight, or Academics." },
            { name: "Phthonus Incarnate", cost: [1], summary: "Irrational jealousy for those important to you. When a Touchstone, Obsession, or Vendetta shows preference for someone else, suffer a -2 Dice Penalty to Willpower pools for the scene." },
            { name: "Demesure", cost: [2], summary: "Extravagant pride in a trait. When insulted, take an additional point of Willpower Damage. If it provokes Frenzy, Difficulty to resist is increased by 2." },
            { name: "Subjugated by Urge", cost: [2], summary: "Your Beast has a grip on your psyche. Whenever you suffer a Compulsion that causes a penalty to your Dice Pool, the severity of that penalty is further increased by your Bane." },
                { name: "Knowledge Hungry", cost: [1], summary: "At character creation pick a topic that your character desires to study. When they come across the methods to learn these things, they must make a Willpower roll at Difficulty 3 to resist." },
                { name: "Risk-Taker Errata", cost: [1], summary: "When confronted with a risky temptation that the character hasn't done before, they suffer a two-dice penalty for all actions till they participate or the scene ends." },
                { name: "Weak-Willed", cost: [2], summary: "Even when they are aware that someone is attempting to sway they may not use the active resistance systems to avoid the attempts." },
                { name: "Beast of Habit", cost: [1], summary: "Like Pavlov's dogs, whenever you find yourself in a situation that strongly reminds you of your modus predationis, the Beast begins to salivate deep within you. Immediately roll to resist a Hunger Frenzy at a Difficulty equal to your current Hunger." },
                { name: "Fear of Letting Go", cost: [1], summary: "There is someone from your past life—dead or alive—that you simply cannot let go of, no matter what. You gain one Stain whenever you go to day-sleep without them—or their remains—by your side. If you lose them permanently, you immediately gain three Stains." },
                { name: "Phantasmagoria", cost: [1], summary: "You are tormented by visions rooted in guilt over your past deeds, traumatic experiences, or bestowed upon you by a malevolent supernatural force. The daymares can range from vividly reliving your mortal birth, the very act of your Embrace, a looped memory of a lover dying by your hand, or visions of the impending Gehenna. Each night, you wake from day-sleep screaming and suffer one point of Superficial Willpower damage." },
             { name: "Failure Instinct", cost: [1], summary: "Your mind sometimes struggles to recover. Perhaps due to a particularly traumatic Embrace, or the simple fact that you can't regain forward momentum. When you fail a roll in the presence of another Kindred, you suffer a -1 die penalty to the next roll you make until the end of the Scene." },
            { name: "Religious Prohibition", cost: [2], summary: "You do your best to refrain from feeding, fasting for as long as you can. You cannot do Quick Hunts unless at Hunger 3 or higher, and all other rolls made towards hunting while at Hunger 0 to 2 suffer a -2 die penalty." },
            { name: "Blood Broker", cost: [1], summary: "You regard blood as the only true currency. Accepting payment in Boons or Backgrounds (such as Status or Resources) inflicts 1 point of Aggravated Willpower damage. If offered Vitae, you must take 1 point of Aggravated Willpower damage to refuse it. This does not necessarily indicate addiction beyond that of a typical vampire, it merely reflects your belief that blood is worth more than favors, titles, or wealth." },
        ].filter(flaw => !bargainFlaws.some(b => b.name === flaw.name)),
    },
    {
        title: "✨ Supernatural",
        merits: [],
        flaws: [
            { name: "Two Masters", cost: [1], summary: "Be Blood Bound to two individuals at the same time." },
        ],
    },
    {
        title: "💄 Looks",
        merits: [
            { name: "Beautiful", cost: [2], summary: "Add one die to related Social pools." },
            { name: "Stunning", cost: [4], summary: "Add two dice to related Social pools." },
            { name: "Semblance of the Methuselah", cost: [1,2], summary: "With an appearance strikingly similar to a methuselah, gain one die on rolls to impress, intimidate or attract attention from those who recognize your face. May also grant status or additional dice when meeting the methuselah they resemble." },
            { name: "Famous Face", cost: [1], summary: "Appear as someone famous and gain two dice in social tests where this works to your benefit. Take a two-dice penalty when trying to hide in a crowd or avoid recognition." },
            { name: "Ingénue", cost: [1], summary: "Appear innocent and blameless; add two dice to any rolls related to avoiding suspicion or deflecting blame (Storyteller’s discretion)." },
            { name: "Remarkable Feature", cost: [1], summary: "Possess a rare, memorable feature (e.g., eye color, complexion). Add two dice to social interactions with strangers, but take a one-die penalty to disguise yourself." },
            { name: "Up All Night", cost: [2,4], summary: "Treat Humanity as one higher (max 10), or two dots higher if taken at four dots, when using Blush of Life, eating, drinking, or sexual intercourse." },
            { name: "Naamah", cost: [2], summary: "When you have a Stain or Humanity 5 or lower, suffer no penalties to seduction pools and automatically gain Beautiful. If you already have Beautiful, gain Stunning instead. While under the Looks effect, you can have sexual intercourse and may enjoy it. Nosferatu with this Merit add two dice to Obfuscate pools to resist supernatural detection instead of gaining Beautiful." },
            { name: "Unblemished Rose", cost: [1], summary: "While you have no damaged Health or Willpower, automatically gain Blush of Life and Beautiful. If you already have Beautiful, gain Stunning instead." },
            { name: "Scotomizatic Contour", cost: [1,3], summary: "Your outlier physicality is strangely at odds with the divinations of others. Add half your positive ratings in your other Looks Merits (rounded up) to your pools to resist supernatural perceptions, such as Auspex. Nosferatu must take this Merit at three dots, and instead add their Bane Severity (unhalved and unrounded) to such pools." },

        ],
        flaws: [
            { name: "Ugly", cost: [1], summary: "Lose one die from related Social pools." },
            { name: "Repulsive", cost: [2], summary: "Lose two dice from related Social pools." },
            { name: "Stench", cost: [1], summary: "Breath and body odor are supernaturally foul. Lose one die from seduction and similar Social pools, and lose two from Stealth pools unless upwind." },
            { name: "Transparent", cost: [1], summary: "Unable to lie due to a terrible poker face or urge to be truthful. Lose one die in any pools requiring Subterfuge, cannot take any dots in Subterfuge." },
            { name: "Unblinking Visage", cost: [2], summary: "Treat Humanity as two lower (Min 0) when using Blush of Life, eating, drinking, or sexual intercourse." },
            { name: "Demonic Countenance", cost: [1], summary: "When you lose Humanity you gain a permanent demonic feature. Difficulties to hide these features are increased by 1 for each, and you get a -1 Die penalty to a specific Skill. Features and penalty stay even if Humanity is regained." },
            { name: "Theriocephaly", cost: [2], summary: "Your head is transformed into that of an animal. Difficulties to hide your countenance are increased by 2, but you gain a free Specialty related to the transformation. Not mutually exclusive with positive Looks Merits." },
            { name: "Perculiarly off-putting", cost: [1,2], summary: "You're not bad looking, but a specific Clan finds you repulsive. Lose two dice from all Social Pools when conversing with the chosen Clan. Positive Looks Merits have no effect on the chosen Clan. Only Nosferatu and Hecata may purchase this as a two-dot flaw." },
        ],
    },
    {
        title: "🏠 Haven",
        merits: [
            { name: "Haven", cost: [1, 2, 3], summary: "secure homebase, 1 - apartment, 3 - big building" },
            { name: "Hidden Armory", cost: [1], summary: "weapons and armor in your haven" },
            { name: "Cell", cost: [1], summary: "you can imprison people in your haven" },
            { name: "Watchmen", cost: [1], summary: "mortal security guards" },
            { name: "Luxury", cost: [1], summary: "+2 Dice on Social rolls in your haven, they can be illegally obtained." },
                { name: "Library", cost: [1,2,3], summary: "Each dot of this merit contributes to dice rolls for one Academics, Investigation or Occult specialty. Small havens are limited to one dot." },
                { name: "Location", cost: [1], summary: "The place in which this haven resides gives a +2 dice bonus (or +2 enemies Difficulty) on relevant rolls from either Chasse or base Haven rating. If this does not work, with the Storyteller the player can craft a custom bonus. Example, living in the heart of downtown allows the character to have a +2 bonus to etiquette rolls to pick up local rumors." },
                { name: "Postern", cost: [1,2,3,4,5], summary: "The haven has some kind of secret exit that allows them a safe passage out. For each dot of this merit add one die to pools of evasion or escaping surveillance near the haven." },
                { name: "Security System", cost: [1,2,3,4,5], summary: "For each dot of this merit, add one die to pools to resist unwelcome guests into the haven." },
                { name: "Surgery", cost: [1], summary: "Add two die to relevant pools for relevant tests performed in havens." },
                { name: "Warding", cost: [1,2,3,4,5], summary: "This haven possesses some type of magic warding that repels supernatural entities. Each dot of this merit adds one die to pools to resist supernatural scrying and whatever else the Storyteller allows." },
                { name: "Holy Ground", cost: [1], summary: "The haven has significance to the character's cult, granting them the ability to call upon a large group of cultists to protect their haven once per story." },
                { name: "Shrine", cost: [1,2,3], summary: "A shrine is present in the haven, adding a bonus equivalent to the dots in searching, preparing or otherwise obtaining Ritual or Ceremony ingredients." },
                { name: "Business Establishment", cost: [2,3,4], summary: "The haven is rented out to a business or is run as a business by the Kindred themselves. This gives both benefits and drawbacks, such as a ready stream of income but also being very much on the grid and local enforcement being aware of the location. This reduces the Haven’s base dots by one for pools involving the Haven’s privacy and defenses against either (pick one) financial or criminal intrusions. Dots in this merit roughly equal Resources but do not stack onto existing Resources for the character." },
                { name: "Furcus", cost: [1,2,3], summary: "The haven is located on veins of the earth or a frayed spot in the Veil. Each dot in this merit adds one die to Rituals or Ceremony dice pools used at the furcus." },
                { name: "Machine Shop", cost: [1,2,3,4,5], summary: "Each dot of this merit adds one dice to the pool for Craft rolls. It also adds this to other tests related to building, repairing, or disassembling machinery or equipment." },
                { name: "Mobile Shelter", cost: [1,2,3], summary: "Your haven is mobile, allowing you to take it with you in some way and still remain secure. A one dot Haven is small and portable, like a Sunbag with some camping amenities, a two-dot would be something like a small car or pop-up shelter, while a three-dot would be a large van or RV. The security of a Mobile Haven's base rating is partially gained primarily from its mobile nature, rather than being as secure as an equivalent structure." },
                { name: "Nightspot", cost: [1,2,3,4,5], summary: "This Haven is known to the broader society of Kindred in the area, and functions as a place of interest. For each dot in this Background, add a die to convince others to hold functions and events at your establishment." },
                { name: "Regular", cost: [1,2,3], summary: "You have some regulars that can act as equivalent dots in Allies,Contacts or Fame once per Story." },
                { name: "Terrific Acoustics", cost: [1,2], summary: "Your Haven features good acoustics. Add 1 die to all Performance-pools to sing or play musical instruments for each dot in this addon." },
                { name: "Watering Hole", cost: [1,2], summary: "This Haven has a large gathering of Kine. It serves as a location with an equivalent of twice this Background's rating of Herd, which anyone in attendance can use." },
                 { name: "Mobile Shelter", cost: [1], summary: "Your haven is mobile, allowing you to take it with you in some way and still remain secure. A one dot Haven is small and portable, like a Sunbag with some camping amenities, a two-dot would be something like a small car or pop-up shelter, while a three-dot would be a large van or RV. The security of a Mobile Haven's base rating is partially gained primarily from its mobile nature, rather than being as secure as an equivalent structure." },
            { name: "House of Leaves", cost: [1,2,3], summary: "Your Haven is a space with impossible geometry, rooms vanish and appear as needed. Perhaps it rests on a spiraling leyline, rests in a place that was never fully created, or simply borders on the reflective nothingness of the Abyss. Once per Session, your Haven functions as if it had an equal number of dots in either Cell, Library, or Hidden Armory. These spaces last until a new room is manifested, at which point any Character or animate thing within is ejected from the front door and any inanimate objects are lost until the room is made to re-appear." },
        ],
        flaws: [
            { name: "No Haven", cost: [1], summary: "you don't have a home" },
            { name: "Haunted", cost: [1], summary: "ghostly presence in your haven" },
            {
                name: "Creepy",
                cost: [1],
                summary: "your haven looks like the den of a serial killer, neighbors might phone in a tip to the police",
            },
            { name: "Compromised", cost: [2], summary: "your haven is on a watchlist" },
                { name: "Shared", cost: [1,2], summary: "The haven is not entirely owned by the character, instead being shared with other Kindred or having a Kindred landlord. This does not need to be taken by Coteries, as that only has as many problems as they make mutually in play." },
                { name: "Total Eyesore", cost: [1], summary: "Your haven is particularly unpleasant to look at, even if it's otherwise completely functional and even comfortable. Toreador always suffer from their Clan Bane whenever it's in their sightlines, and serious discussion or Social Pools needed for it, suffer a two dice penalty, as those present are distracted by peeling wallpaper, a terrible smell, or gaudy decorations." },
        ],
    },
    {
        title: "💰 Resources",
        merits: [
            {
                name: "Resources",
                cost: [1, 2, 3, 4, 5],
                summary: "wealth & income, 1 - you can afford basics, 5 - you can afford anything money can buy",
            },
            {
                name: "Check the Trunk",
                cost: [1],
                summary: "Get easy access to an armory or tools; none of the items can be more valuable than Resources 2",
            },
            {
                name: "Side Hustler",
                cost: [2],
                summary: "Once per session they can get their hands on an item, information, or access to an event as if they had two dots in the related Resources, Contacts, or Influence.",
            },
                {
                    name: "Masterwork",
                    cost: [2,3,4,5],
                    summary: "You have a piece of art that isn't just valuable, it accumulates value. This work can be sold for a number of Dots in Resources equal to the Masterwork's rating, minus one. At the end of each Story, you may roll dice equal to the number of dots in this Merit. On a Crit increase the number of dots in the associated masterwork by 1, up to 5. Additionally if a sufficiently long time passes, such as fifty years, the rating increases by 1 automatically, as age tends to make such works more valuable."
                },
        ],
        flaws: [{ name: "Destitute", cost: [1], summary: "poor & no income" }],
    },
    {
        title: "🩸 Feeding",
        merits: [
            { name: "Bloodhound", cost: [1], summary: "smell resonance in mortal blood" },
            {
                name: "High-functioning addict",
                cost: [1],
                summary: "add a die to one category of pool (choose once) when the last person you fed from was on your drug",
            },
            { name: "Iron Gullet", cost: [3], summary: "able to feed on rancid blood" },
            { name: "Vessel Recognition", cost: [1], summary: "With a Resolve + Awareness test at Difficulty 2 they can tell if a mortal has been fed on recently. A critical win lets them sense if the feed is recurring, meaning there is a chance it’s a herd member." },
            { name: "Private Reserve", cost: [4], summary: "You have access to a very unique source of blood born of a mutual understanding with a very unique individual. Add the individual in question to the Relationship Map, as well as the specifics of your deal with them. Once per session you can feed off of this 'private reserve', reducing your total Hunger to 1 with zero adverse effects. If anyone finds out about your source, they may want a taste for themselves." },
            { name: "Organovore", cost: [2], summary: "Slake only by consuming human flesh and organs." },
            { name: "Vein Tapper", cost: [1], summary: "Finding the act of feeding to be personal, they go out of their way to feed from the unaware, drugged or unconscious victims." },
            { name: "Faith Drinker", cost: [2], summary: "Slake 1 additional Hunger from those who are actively religious. Feeding on those with True Faith slakes twice as much Hunger. Cannot reduce Hunger below zero. If multiple effects would allow you to slake an additional point of Hunger, choose the one and ignore the rest." },
            { name: "Gratifying Predation", cost: [1], summary: "When you successfully hunt in accordance to your chosen Predator Type, you also restore 1 Willpower." },
            { name: "Courser", cost: [1,2], summary: "Supernaturally acute sense of smell for Animals and their Blood. Add 1 bonus die to any olfactory pools to track an animal's scent, or 2 dice if they're bleeding. Bonus is increased by 1 more die if taken as a two-dot Merit." },
            { name: "Prey Specialization", cost: [2,4], summary: "For every two dots in this Merit choose a specific type of prey. You get +1 bonus die to any rolls made to hunt that prey." },
            { name: "Solitary Hunter", cost: [3], summary: "When you hunt down and feed from prey on your own, slake 1 additional Hunger. Cannot reduce Hunger below zero." },
            { name: "Efficient Metabolism", cost: [4], summary: "For every 2 Hunger you slake, slake 1 more. Cannot reduce Hunger below zero. Cannot be taken with Solitary Hunter or any other Merit that slakes bonus Hunger." },
            { name: "Prey on the weary", cost: [1], summary: "When you slake at least 2 Hunger from someone who has a fully marked Willpower Tracker or a Compulsion, you always gain an Intense Phlegmatic Resonance." },
            { name: "Romantic Duet", cost: [1], summary: "When you slake at least one Hunger from a vessel that's simultaneously being fed from by another Kindred, you slake an additional point of Hunger. If multiple effects would allow you to slake additional Hunger, choose one and ignore the rest. If the Kindred feeding with you is your Obsession they also benefit from this Merit's effect." },
            { name: "Tormentor", cost: [2], summary: "When you deal Superficial Willpower Damage to someone who has a Compulsion, or a non-Kindred who has a physical injury, you may remove one of your own Compulsions." },
             { name: "Cyclical Offering", cost: [1], summary: "When you feed using a Power or Ceremony of Oblivion (i.e. Rapacious Communion or Hunger of Ahriman) your Ceremony Tests have their Difficulties reduced by 1 for the remainder of the night." },
            { name: "Alû", cost: [2], summary: "When you feed on a sleeping victim, your bite induces sleep paralysis that lingers for a few hypnagogic moments afterwards. Even if victims wake, they will be in a hypnagogic and post-euphoric state. Their attempts to remember your features require a Resolve + Intelligence; Difficulty 3 Test. They remember one feature, such as skin or hair color, for each success beyond the margin. Egregious damage or significant pain, such as from a messy feeding will break the effects of this merit. Hecata cannot purchase this Merit." },
            { name: "Machiavellivore", cost: [2], summary: "You can convert your dots in Contacts, Retainer, and Allies into an equal rating of Herd. However this damages the converted Background in the same way that Herd is damaged. They do not convert back until the end of the Story, and while damaged they may be too weak or uncompliant to use." },
            { name: "Prey on the Proud", cost: [2], summary: "When you slake at least 2 Hunger from someone who has no marked Willpower Tracker, you always gain an Intense Choleric Resonance." },

        ],
        flaws: [
            { name: "Prey Exclusion", cost: [1], summary: "Unable to feed from a certain group and take Stains as if breaking a Chronicle Tenet when they do." },
            { name: "Methuselah's Thirst", cost: [1], summary: "Hunger can only be slaked to 0 by Supernatural blood." },
            { name: "Farmer", cost: [2], summary: "Must spend 2 Willpower Points to feed on human blood. Ventrue may not take this." },
            { name: "Dependent", cost: [2], summary: "You rely on a single mortal for all your blood. If you feed on any mortal other than your chosen blood doll, you take a Stain. If your blood doll dies from something other than your Embrace, you take two additional Stains. While you do not have a blood doll, you do not take stains for feeding from other mortals." },
            { name: "Intermittent Fasting", cost: [2], summary: "You strive to feed no more than once per night so as to limit the burden you impose on the world. If you feed more than once on a given night, you take a Stain." },
            { name: "Deflecting Hunger", cost: [2], summary: "You can only feed from those with higher Humanity than you. Feeding from such individuals brings you calm, allowing you to gain a Phelgmatic resonance in place of what you might normally gain." },
            { name: "Sacrificial Sustenance", cost: [2], summary: "Your faith in the Outer Dark has perverted your tastes. You must spend a point of Willpower for each Hunger slaked from anyone other than your Touchstones." },
            { name: "Connoisseur", cost: [2], summary: "You slake one less Hunger from blood that doesn't have an Intense or Acute Resonance, and your Hunger can only be fully Slaked by draining a vessel with a Dyscrasia." },
            { name: "Dead Palette", cost: [2], summary: "You cannot taste or gain a Resonance, and by extension cannot benefit from them. This flaw cannot be taken if you have Bloodhound or Connoisseur." },
            { name: "Glutton", cost: [2], summary: "Your Hunger can only be fully slaked when consuming at least half your weight in the flesh and blood of other supernatural creatures." },
            { name: "Ravenous Thirst", cost: [2], summary: "Your Hunger cannot be reduced below 2 without draining and killing a Mortal or Supernatural creature." },
            { name: "Taste of the Kill", cost: [2], summary: "You refuse to drink from anyone that is helpless or unable to defend themselves. Whenever you feed on one of these individuals you take a point of Aggravated Willpower damage for each Hunger slaked." },
            { name: "Narrow Appetence", cost: [1], summary: "Pick a specific Resonance when you take this flaw. You slake one less Hunger from blood that doesn't match your chosen Resonance." },
            { name: "Cormorant", cost: [1,2], summary: "When you drink, you always try to do it deeply. When you Slake at least 1 Hunger, you must pass a Willpower Test; Difficulty 2 (or 4 if this is taken as a 2-dot flaw), or you will instead overfeed." },
            { name: "Organovore", cost: [2], summary: "your hunger demands human flesh and organs" },
            { name: "Addiction", cost: [1], summary: "-1 die on all pools if the last person you fed from wasn't on your drug" },
            { name: "Hopeless Addiction", cost: [2], summary: "-2 dice on all pools if the last person you fed from wasn't on your drug" },
            { name: "Aching Hunger", cost: [1], summary: "The craving for vitae wracks your body with pain—your innards audibly growl as your body trembles. You suffer one point of Superficial Health damage whenever you fail a Rouse Check while at Hunger 3 or higher." },
            { name: "Agonizing Hunger", cost: [1], summary: "Vitae is the source of unlife—without it, you are but a corpse, and you feel this more strongly than others. Devoid of Blood, your undead body crumbles to the dust from which it came under the slightest pressure. While at Hunger 4 or higher, you receive all Physical damage as Aggravated damage." },
            { name: "Glutton", cost: [2], summary: "You have an insatiable appetite for Blood, slaking 1 level of Hunger less than normal under all circumstances." },
            { name: "Maladaptive Hunter", cost: [1], summary: "You find it extremely difficult to improvise or adapt to new hunting techniques. You suffer one point of Aggravated Willpower damage when attempting to feed in any way that does not align with your Predator Type." },
            { name: "Messy Eater", cost: [1], summary: "When feeding directly from your victims' veins, you always leave splatters of blood on their clothing, your own clothing, and the surrounding area. You can spend extra time cleaning afterward, but without proper tools and detergents, you can't fully hide the evidence. Any messy critical or bestial failure while feeding turns your hunting grounds into a literal bloodbath—the consequences are left to the Storyteller's discretion." },
            { name: "Resonance Junkie", cost: [1], summary: "You crave vitae infused with a specific Blood Resonance—whether shaped by a strong emotion, a certain hormone, or a substance addictive to mortals. When feeding on any other type of mortal blood, you slake 1 level of Hunger less than you normally would—the regular stuff simply doesn't do it for you anymore." },
            { name: "Vicious Emesis", cost: [1], summary: "Whenever you attempt to eject undigested food, drink, or rancid blood, you vomit violently and profusely, losing a significant amount of your own vitae in the process. As your body is contorted by painful spasms, you are left temporarily vulnerable, and your Hunger automatically increases by 1." },
            { name: "Rapacious Appetite", cost: [2], summary: "Your Beast wants to hunt, feed, and hunt again. You cannot reduce your Hunger to zero the first time you feed each night. This supersedes any other effects and traits that would allow you to reduce your Hunger to 0." },

        ],
    },
    {
        title: "🕰 Keeping up with the times",
        merits: [],
        flaws: [
            { name: "Living in the Past", cost: [1], summary: "you have outdated views & convictions" },
            { name: "Archaic", cost: [1], summary: "Technology skill stuck at 0" },
        ],
    },
    {
        title: "🌙 Mythic",
        merits: [
            { name: "Eat Food", cost: [2], summary: "Can consume food but still with no nourishment." },
            { name: "Cold Dead Hunger", cost: [3], summary: "Add two dice to resist Hunger frenzy." },
            { name: "Pack Diablerie", cost: [2], summary: "Will always be the one to take the soul unless they otherwise choose during Diablerie. If they help another consume the soul, they gain 5 experience points to spend as if they'd committed the Diablerie themselves." },
            { name: "Luck of the Devil", cost: [4], summary: "Once per session when misfortune occurs it can be redirected towards someone close to them for the victim to take the fall." },
            { name: "Nuit Mode", cost: [2], summary: "The Kindred’s body does not revert to its death-state each night, enabling them to keep new haircuts and body modifications. Can mend these changes anytime as if they were Aggravated damage. Does not work for characters with BP higher than 1." },
            { name: "Twice Cursed", cost: [2], summary: "Take the Clan’s variant Bane in addition to the regular Bane. The Storyteller can prohibit this flaw if the second Bane wouldn’t mesh with the chronicle." },
            { name: "Early Riser", cost: [1], summary: "Always awaken the moment the sun sets, regardless of Humanity rating." },
            { name: "Ishtar's Sweet Sap", cost: [2], summary: "Your blood carries properties associated with the goddess Ishtar. Anyone who drinks at least one Rouse Check worth of your Vitae adds +1 Bonus Die to their pools to create art or sexually satisfy others. You also gain this bonus when you Blood Surge those same pools." },
            { name: "Tempered Will", cost: [3], summary: "Always aware when someone is attempting to use Dominate or Presence against them. May add two additional dice to resistance pools once per session, which can only be taken by those with no dots in Dominate or Presence." },
            { name: "Predatory Affinity", cost: [3], summary: "You bear an innate mastery of a Discipline born out of your preferred method of predation rather than derived from your bloodline. You can take dots in one Out-of-Clan Discipline you would receive from your Predator Type as though it were an In-Clan Discipline. Caitiff gain an extra dot in a Predator Type Discipline. Thin-Bloods cannot take this unless they already possess the Discipline Affinity Merit." },
            { name: "King of the Beasts", cost: [2], summary: "Animals, especially carnivores, do not shy away from you. When rolling to interact with predatory beasts, you can use Social Skills other than Animal Ken if appropriate. If you learn Animalism, gain a 2-Die Bonus to powers meant to sway or subdue predators." },
            { name: "Somnophore", cost: [4], summary: "Whether it's a gentle sting or a brutal laceration, something about your Kiss leaves mortal victims utterly delirious—unable to recall the last few moments of their lives, and more importantly, your face. Those fed upon more than once begin to suffer recurring nightmares of a faceless figure, with no proof their experiences—ecstatic or horrifying—were ever real." },
        { name: "Deacon of the Deep", cost: [1,2,3], summary: "When you get a 1 or a 10 on a Rouse Check as part of the cost for a Ceremony of Oblivion, add +1 Bonus Die to your Resolve pools until dawn. This bonus cannot exceed the dots in this Merit." },
            { name: "Asneisen", cost: [1], summary: "Your Shadow is an extension of, hopefully, your will. When you get a 1 or 10 on a Rouse Check, your Shadow can be mentally commanded to make a brief, simple, interaction with anything it's cast over. Examples include opening a door, pressing a button, or pushing an object. It can do this a number of times per night equal to your Bane Severity." },
        ],
        flaws: [
            { name: "Folkloric Bane", cost: [1], summary: "Take Aggravated Damage when touching a specific object rooted in vampire mythos of what harms them, example Silver." },
            { name: "Folkloric Block", cost: [1], summary: "Must spend Willpower or move away from a specific object vampires are known to fear in Vampire Mythos, example Holy Symbols." },
            { name: "Stigmata", cost: [1], summary: "Bleed from wounds on the hands, feet, and forehead when at Hunger 4." },
            { name: "Stake Bait", cost: [2], summary: "When staked they meet Final Death." },
            { name: "Starving Decay", cost: [2], summary: "When their Hunger is 3 or higher their body shrivels and decays. Take a two-dice penalty to Physical tests, and social interactions with mortals, this Flaw can risk the Masquerade." },
            { name: "Famished", cost: [1], summary: "When you reach Hunger 4 you become thin and desiccated with your skin and flesh pulled tight against your bones, and your muscles and organs atrophying to almost nothing. While this doesn't affect your physical abilities, it is almost impossible to hide, as even the slimmest or slightest built Kindred become so incredibly thin that it appears they have barely any interior muscles or organs at all." },
            { name: "Permanent Fangs", cost: [1], summary: "You cannot retract your fangs, making it impossible to hide them. This may contextually reduce Dice Pools by 1, but may also, more rarely, increase certain Dice Pools by 1." },
            { name: "Revenant Mind", cost: [2], summary: "The Embrace was traumatic, occluding or erasing sections of memory. Upon taking this Flaw at character creation, subtract 1 from your starting Humanity." },
            { name: "Deathsight", cost: [2], summary: "You can peer past the Shroud unbidden. When an Insight, Awareness, Investigation, or Occult roll results in a Total or Bestial Failure, suffer a 2-Die penalty to all subsequent Social Pools for the rest of the scene." },
            { name: "Devil in the Details", cost: [2], summary: "You are locked into an ironclad pact with a supernatural force. Work with your Storyteller to define the pact. Whenever you fail to uphold your end or violate a clause, take a point of Aggravated Willpower Damage." },
            { name: "Blood Drunk", cost: [1], summary: "Drinking blood puts you in a state of blissful intoxication, much like the stupor experienced by kine after alcohol. You truly feel immortal now. Everything seems possible—except maybe walking in a straight line or not having a giggle at a funeral. While drunk on vitae, you cannot recover Willpower, and treat any failure as a bestial failure—too dazed and clumsy to keep the Beast on a leash. How long the effects last depends on the potency and vintage of what you consumed—mortal blood only lasts an hour, while elder vitae can keep you inebriated for the entire night." },
            { name: "Cadaveric Poison", cost: [1], summary: "Your mouth produces putrescent toxins, which can prove lethal to mortals if transmitted through kissing, intercourse, or licking their wounds. Those affected immediately begin to feel violently ill, and if they don't receive professional medical care within the next hour, they die a painful death, warranting a Stain." },
            { name: "Day-Sleepwalker", cost: [1], summary: "For reasons unknown, your undead body sleepwalks during the day, attempting to reenact old routines from your previous life—or even wander outside. You can try circumventing this by preparing yourself and your surroundings beforehand. However, simple solutions might not be enough, as your sleepwalking body knows how to open doors, untie basic knots, and—if your strength allows—tear down boarded windows, or even break chains." },
            { name: "Dead Asleep", cost: [1], summary: "Your Beast detests the waking hours of the day and slumbers far deeper than that of other Kindred. Nothing can wake you from your day-sleep—not even fire or the scorching rays of the sun." },
            { name: "Posthumous Bloom", cost: [1], summary: "Your hair and nails grow rapidly during your day-sleep, each night reaching the exact length they would have attained had they been growing since the moment of your Embrace." },
            { name: "Rigor Mortis", cost: [1], summary: "Your body never fully recovered from postmortem rigidity, which becomes especially noticeable when you begin to move after standing still, even for a short moment. At first glance, it may appear as severe muscle soreness or the early stages of a rheumatic or genetic condition. You automatically fail all Initiative rolls and always act last during combat and similar encounters—you might be fully aware of what's happening to you and around you, but your stiff body needs a few heartbeats to adjust and catch up." },
            { name: "Timorous", cost: [1], summary: "When you get a 1 or a 10 on a Rouse Check, you suffer a -1 die penalty to your Composure pools for the rest of the scene." },
            { name: "Inner-Void", cost: [1], summary: "When you get a 1 or a 10 on a Rouse Check, you lose your current resonance, including intensity." },
            { name: "Mirror Imago", cost: [1], summary: "When you get a 1 or a 10 on a Rouse Check, a nearby mirror cracks or shatters." },
            { name: "Annulled Aspect", cost: [2], summary: "When you get a 1 or a 10 on a Rouse Check, you become a deeper dark. For the rest of the Scene you take Superficial Willpower Damage equal to your Bane each turn while in direct bright light." },
            { name: "Weird Banality", cost: [2], summary: "Your blood is amalgamated with one or more otherworldly substances, giving you a bizarre weakness to wrought-iron. Touching the metal inflicts a point of Aggravated Health Damage, and damage from such weapons are dealt as Aggravated. As long as Aggravated Damage from such a source remains, you also suffer a -1 die penalty to your Discipline Pools." },
            { name: "Exanimus", cost: [1,2], summary: "You're especially warped by the touch of the void, thinning your presence in mundane reality. You gain the Lasombra's Bane at Severity 1. Only Lasombra with this Flaw may take it as a two-dot flaw and when they take it, it instead increases their Bane Severity by 1." },
        ],
    },
    {
        title: "👺 Mask",
        merits: [
            { name: "Mask", cost: [1, 2], summary: "fake identity with fake documents, lv2 can pass background checks" },
            { name: "Zeroed", cost: [1], summary: "all your real records are purged, you officially don't exist" },
            { name: "Cobbler", cost: [1], summary: "You can make or source masks for others" },
        ],
        flaws: [
            { name: "Known Corpse", cost: [1], summary: "others know you're dead" },
            { name: "Known Blankbody", cost: [2], summary: "Certain governments / organizations know you're a vampire" },
        ],
    },
    {
        title: "🗣 Linguistics",
        merits: [{ name: "Linguistics", cost: [1], summary: "fluently speak another language" }],
        flaws: [{ name: "Illiterate", cost: [2], summary: "Can't read or write, Academics and Science capped at 1" }],
    },
    {
        title: "🧛 Kindred",
        merits: [
            { name: "Mawla", cost: [1, 2, 3, 4, 5], summary: "kindred mentor to advise or help you" },
            { name: "Status", cost: [1, 2, 3, 4, 5], summary: "positive reputation within a faction" },
            { name: "Untouchable", cost: [5], summary: "Once per story they are able to escape all official punishment for a crime that would otherwise see them destroyed." },
                { name: "City Secrets", cost: [1,2,3], summary: "This grants knowledge about the city’s Kindred power structure. If this secret is about mortal business it’s only a way to explain Influence. This information can be sold at a high price, but its value lies in protection as the people involved may not want this information sold off and will do their best to keep you happy, for a time anyway. This can only be taken at a maximum of three times with each being a different secret." },
                { name: "Two Face", cost: [1], summary: "You cultivate trust and attachment, but know when best to turn practiced barbs towards those same individuals if needed. When you enter Social Combat with an individual that trusts you, any Specialties you have add +2 Bonus Dice, on top of any other bonuses." },
                { name: "Fear Monger", cost: [3], summary: "When you get 5 or more Successes on any Dice Pool that includes Intimidation, the next Social Pool you make in the same scene gets an additional Bonus Die." },
                { name: "Reputation", cost: [1,2,3,4], summary: "For each dot in this Background, you gain a trait that directly impacts your Social pools whenever it comes up, positively or negatively. Examples of a reputation include things such as Reliable, Deadeye, Cunning, or Loyal. Add +1 Bonus Die to Social Pools made in line with your reputation, or in regard to it. However you suffer a -1 Die penalty to Social Pools made against your reputation." },
        ],
        flaws: [
            { name: "Adversary", cost: [1], summary: "kindred enemy" },
            { name: "Suspect", cost: [1], summary: "bad reputation within a faction, -2 on Social tests with them" },
            { name: "Shunned", cost: [2], summary: "despised by a faction" },
            {
                name: "Dark Secret",
                cost: [1, 2],
                summary:
                    "You have a dark secret, like owing a debt to bad people or having escaped a blood hunt for masquerade breaching in another city",
            },
                { name: "Prestation Debts", cost: [1], summary: "They owe other Kindred boons, even if these boons are paid off the Kindred lords over them. The Boon-owning Kindred keeps a one-die bonus in Social combat against the one who owes it." },
                { name: "Kalokagathia", cost: [1], summary: "Beauty may be in the eye of whoever beholds it, but you equate what you behold with qualities beyond mere looks, thinking skin deep appearances provide insight to a person's quality of character. Those who have a positive Looks Merit, such as Beautiful or Stunning, gain an additional +1 Bonus Die in any Social and Discipline Pools they use against you. Additionally you cannot attempt to make empathetic or Insight-based rolls on characters with negative Looks Flaws, such as Ugly or Repulsive." },
                { name: "Pariah", cost: [2], summary: "You've been made into an outcast within the Domain, and everyone regards you with little favor and gives very little leeway or benefit of the doubt. You cannot gain official titles within the Domain and cannot buy positive Status, Fame, or Reputation, except in regards to others who are also Pariahs." },
                { name: "Abusive Sire", cost: [1,2], summary: "Some Lasombra continue to test their Childer even after the Embrace and while most Kindred have little love lost for their Sire, yours is especially cruel and demanding. Your Sire adds dice equal to the dots in this Flaw to any Manipulation or threats against your Touchstones." },

        ],
    },
        {
            title: "🐾 Bestial",
            merits: [
                { name: "Frenzy's Catharsis", cost: [1], summary: "After you Frenzy for at least one Scene, choose Physical, Social, or Mental. Add 1 die to all pools of the chosen type for the rest of the night." },
                { name: "Inhuman Advisor", cost: [2], summary: "When you reach or start a scene at Hunger 4 or 5, your Beast will give you a Desire for the scene. All Dice Pools made towards achieving this desire get +2 Bonus Dice. This bonus is increased to +3 at Hunger 5." },
                { name: "Hunger's Bargain", cost: [2,3,4], summary: "When you slake at least one Hunger, add +1 Bonus Dice to resist Frenzy for the remainder of the scene. If taken at four dots increase the bonus to +2 Bonus Dice." },
                { name: "Predatory Eloquence", cost: [3], summary: "You add +1 Bonus Dice to any Social dice pools made while Hunting, your predatory nature shining through as an allure, or warning, of imminent danger." },
                { name: "Boon of Artemis", cost: [2], summary: "Your Beast desires as you do when you're hungry enough, and prods you towards the crimson indulgence that both of you seek. While at Hunger 4 or higher when you perform a Quick Hunt, add two additional dice to the roll, however any Criticals on a quickhunt are always considered Messy." },
                { name: "Capricious Purgation", cost: [2], summary: "Whenever you rid yourself of a compulsion through an effect other than it naturally ending through passage of time, you recover a point of Superficial or Aggravated Willpower." },
                { name: "Cajolded Beast", cost: [2], summary: "While in Frenzy, you may make a Willpower Test; Difficulty equal to your unmarked Humanity, to assume control for one turn. This Test cannot be made if you have any Stains." },
                { name: "Fight or Flight", cost: [2,3,4], summary: "When taking this Merit pick Terror or Fury Frenzy. Add +1 bonus die to resist the chosen Frenzy, but you suffer a -1 die penalty to resist the other. This bonus and penalty is doubled if this Merit is purchased at three dots." },
                { name: "Cruel Slice", cost: [1,2,3], summary: "Your Beast revels in especially gruesome destruction. Your messy criticals that inflict physical harm to others restore an amount of Superficial Willpower equal to the dots in this Merit." },

            ],
                flaws: [
                    { name: "Bestial Impulse", cost: [1], summary: "When you reach or start a scene at Hunger 4 or 5, your Beast will give you a Desire for the scene. All Dice Pools that aren't made towards achieving this desire get a -2 Dice penalty. This penalty is increased to -4 at Hunger 5." },
                    { name: "Monstrous Countenance", cost: [1], summary: "When you lose Humanity you gain a permanent animal feature. Difficulties to hide these features are increased by 1 for each that you have and give you a -1 Die penalty to a specific Skill. Even if you somehow gain the lost Humanity back, the feature stays." },
                    { name: "Animal Antipathy", cost: [1,2], summary: "For each dot in this Flaw choose a type of Animal, such as Cat, Canid, Bird, or Rodent. That Animal will never converse with you and is completely immune to your powers of Animalism. In certain cases they will also attack you unprovoked." },
                    { name: "Wraking Hunger", cost: [1,2], summary: "Your Hunger directly wracks your physical body. While your Hunger rating is higher than your Stamina rating, your Physical Attribute pools cannot exceed your current Hunger. If your Stamina is 4 or higher this Flaw can only be purchased at one dot." },
                    { name: "Doomed Romantic", cost: [2], summary: "You feel the weight of your waning Humanity far more than others. Whenever you would make a Remorse Check at the end of a Session, you first gain another Stain." },
                    { name: "Hopeless Dependant", cost: [2], summary: "You're less comfortable whilst all on your own, and so seek company with your Beast. Whenever you're in a Scene without any other Kindred—even enemy Kindred—your Difficulties to resist Frenzy are increased by your Bane Severity." },
                    { name: "Kinder Aberrance", cost: [2], summary: "While your Humanity is at 6 or above, you have a -1 die penalty to any pools made to Manipulate or lie to Humans, if your Humanity is at 5 or below this penalty applies to Kindred instead." },
                    { name: "Tempestuous Temperament", cost: [2], summary: "This odd quirk of the Beast, is found in those who spend a great deal of time near the sea or in particularly storming areas of the world. While it's raining your difficulties to resist Frenzy are increased by 1. During particularly bad storms the severity of this increase is doubled." },
                
                ],
        },
    {
        title: "⛓️ Bonding",
        merits: [ 
            { name: "Bond Resistance", cost: [1,2,3], summary: "Add one die to resist Blood Bonds per level of this merit." },
            { name: "Short Bond", cost: [2], summary: "Bonds decrease by two levels each month if not reinforced." },
            { name: "Unbondable", cost: [5], summary: "Unable to be bonded." },
            { name: "Bonds of Fealty", cost: [3], summary: "Your Dominate powers do not require eye contact on those bound to you. (Requires Dominate.)" },
            { name: "Enduring Bond", cost: [1], summary: "The bonds you create last longer, only weakening every other month." },
            { name: "Sin Bound", cost: [2], summary: "When someone of lower Humanity than you drinks your blood, they move two steps towards a bond, rather than one." },
            { name: "Shackle Eater", cost: [2], summary: "When you slake at least 1 Hunger by drinking the blood of the vampire you’re Blood Bound to, slake 1 additional Hunger (cannot reduce Hunger below zero)." },
            { name: "Deeper Bond", cost: [2], summary: "When an animal drinks at least a Rouse Check worth of your blood, they move two steps towards a bond with you, rather than one. Certain powers of Bonding (e.g., choosing a Famulus) take only two nights, not three." },
            { name: "Tithed Bibitor", cost: [1], summary: "An oddly specific circumstance of the blood that is rarely seen outside of Lasombra faithful. When you drink Vitae that is offered freely, it cannot bond you." },

        ],
        flaws: [
            { name: "Long Bond", cost: [1], summary: "blood bonds on you take longer to wane" },
            { name: "Bond Junkie", cost: [1], summary: "lose one die on all actions that go against your blood bond" },
            { name: "Bondslave", cost: [2], summary: "blood bonds on you are created on the first drink" },
            { name: "Animal Vagary", cost: [2], summary: "Your Blood suffers from a strange quirk that prevents it from bonding sentient Mortals, Kindred, and most other Supernatural Creatures. You can only create Blood Bonds with animals." },
            { name: "Manille Inversee", cost: [2], summary: "The bonding properties of your blood are treacherous. When someone drinks your Vitae, you gain a step towards a Blood Bond to them, instead of them to you. This can bond you even to non Kindred, such as animals or Mortals. This effect occurs even for Tremere. You cannot take unbondable with this Merit." },
        ],
    },
    {
        title: "👱 Mortals",
        merits: [
            { name: "Retainer", cost: [1, 2, 3], summary: "loyal mortal servant, 1 - weak lowlife, 3 - skilled professional retainer" },
            { name: "Allies", cost: [1, 2, 3, 4, 5], summary: "group of mortals to advise or help you" },
            { name: "Contacts", cost: [1, 2, 3], summary: "mortals who provide information or valuable items" },
            {
                name: "Herd",
                cost: [1, 2, 3, 4, 5],
                summary:
                    "group of mortals who let you feed, 1 - a couple of people, 5 - large group and you can freely pick desired resonances",
            },
            {
                name: "Fame",
                cost: [1, 2, 3, 4, 5],
                summary: "1 - a select subculture loves you, 5 - you are well known and loved globally",
            },
        ],
        flaws: [
            { name: "Stalkers", cost: [1], summary: "unwanted mortal followers" },
            { name: "Enemy", cost: [1, 2], summary: "group of mortals that want to harm you" },
            { name: "Obvious Predator", cost: [2], summary: "mortals are scared of you, can't keep Herd" },
            {
                name: "Infamy",
                cost: [1, 2, 3, 4, 5],
                summary: "1 - a select subculture despises you, 5 - you are well known and hated globally",
            },
        ],
    },
    {
        title: "⚔️ Vendetta",
        merits: [
            { name: "Beholding Affliction", cost: [1], summary: "Whenever one of your Rituals or Ceremonies negatively affects your Vendetta directly, you innately know their direction for the remainder of the night." },
            { name: "Crushing Abasement", cost: [1], summary: "Whenever a Storyteller Character is introduced or revealed to be the leader of several other Characters, you may immediately mark them as your Vendetta." },
            { name: "Bloody Errancy", cost: [2], summary: "You cannot be Bloodbound to your Vendetta. If you're already bound to a Vendetta, that bond's strength cannot increase." },
            { name: "Masticating Foe", cost: [2], summary: "If your Vendetta Surges their Blood to bolster an Attribute, the next time you make an aggressive roll against them in the same Scene, you may pin one of your Hunger Dice to a 10 and set it aside." },
            { name: "Spiteful Embrace", cost: [3], summary: "If you Embrace your Vendetta, they immediately enter into a Level 3 Blood Bond with you. However this bond will always break within a month and you can never bond them again through any other means." },
            { name: "Bittersweet Tooth", cost: [3], summary: "Add one bonus die to any pools made whilst Diablerizing your Vendetta. If your Humanity is 3 or lower, double this bonus." },
            { name: "Bitter Campaign", cost: [1,2,3], summary: "When you launch a Project to damage your Vendetta's Backgrounds, you may add this Background to the Stake in addition to any others used. If you do, each time you make a Project Roll for that Project, you restore an amount of Superficial or Aggravated Willpower Damage equal to the number of dots in this Background." },
        ],
        flaws: [
            { name: "Vindictive Feed", cost: [2], summary: "You can only reduce your Hunger to zero by feeding on and draining your Vendetta." },
            { name: "Nemomaniac", cost: [1,2], summary: "While your Vendetta is in the scene, your Discipline Pools suffer a penalty equal to this rating when they don't include or affect your Vendetta directly and immediately." },
        ],
    },
    {
        title: "⚡ Sabbat",
        merits: [
            { name: "Ductis", cost: [1,2,3,4,5], summary: "The leader of a Pack. Your Packmates who want to contest your leadership with a Social Pool must beat this Background's rating as a Difficulty. Even if they do, you may spend Willpower to still Contest their roll normally. Only one Pack member may possess this Background." },
            { name: "Pack Priest", cost: [1,2,3,4,5], summary: "The spiritual anchor of a Pack. At the end of each session, Packmates may come to you for guidance in resisting the pull of their Beast. You may remove a total number of Stains, up to your rating in this Background, divided among any who seek your council. For each Stain removed, the recipient suffers one point of Aggravated Willpower damage. Other members of your Pack may spend experience to buy dots in this Background for you. Only one Pack member may possess this Background." },
            { name: "Pack Tactics", cost: [1,2], summary: "When you successfully Teamwork with a Packmate, or they with you, you both recover a point of Superficial Willpower or if taken at two-dots, you can choose to instead recover a point of Aggravated Willpower. This cannot recover an amount of Willpower greater than your Bond Strength to that Packmate each Session." },
            { name: "Vaulderie Ritae", cost: [1], summary: "Usually taken by the Pack Priest. This Background means you know how to properly perform the Vaulderie. This ritae requires each member of a Pack to spill their blood into a sacred chalice (or any liquid-tight container large enough). You then bless and mix the vitae. Finally each participant drinks, increasing Bond Strength by 1, up to 3, amongst all who participate. Characters with Occult 3 or higher who are in a Pack can take this Background for free at the Storyteller's discretion." },
        ],
        flaws: [],
    },
    {
        title: "⚖️ Amercements",
        merits: [],
        flaws: [
            { name: "Amercement of Prosperity", cost: [1,2], summary: "Your total Resources cannot exceed three dots. If this flaw is taken at one dot your Resources cannot exceed two dots." },
            { name: "Amercement of Line", cost: [1,2], summary: "You bear a visible brand or symbol of your subservience to the Camarilla (Or whoever placed this mark on you). Those who belong to the group that marked you add this Flaw's dots to their Status in regards to Social pools made against you." },
            { name: "Amercement of Boons", cost: [1], summary: "You cannot hold or keep Major or Life Boons of any kind. Even if one is offered to you, it will not be kept or respected." },
            { name: "Amercement of Innocence", cost: [1], summary: "You are forbidden from using, performing, or assisting with the Powers and Ceremonies of Oblivion." },
            { name: "Amercement of Valiance", cost: [1], summary: "You have been given a specific area of the Domain to keep safe for Kindred. This usually requires you to deal with Hunters, Anarchs, Sabbat, or other creatures. You're given little support or assistance for this job." },
            { name: "Amercement of Blood", cost: [1,2], summary: "You are given a Herd (•). You are only allowed to feed from this designated Herd, and possibly those outside the boundaries of the city's Domain. If this Flaw is taken at two dots you are banned from feeding within city limits outright." },
            { name: "Amercement of Power", cost: [2], summary: "You cannot gain Status except in regards to those outside the local Domain, with others who have this Flaw, or with similar Flaws, such as Pariahs." },
            { name: "Amercement of Duty", cost: [2], summary: "You are assigned as a personal servant to another Kindred. Once per Story, they may require something of you and you must obey." },
            { name: "Amercement of Collective", cost: [2], summary: "You are held responsible for the crimes of all Lasombra in the domain. You suffer a two dice penalty to shift blame away from yourself, and a three dice penalty to shift blame away if it's due to the actions of another Lasombra." },
            { name: "Amercement of Menials", cost: [2], summary: "You cannot have or keep blood-bound Ghouls and the only Retainers you have are blood-bound Ghouls provided by the local authority of the Domain (such as the Sheriff, Primogen, Prince, etc.)" },
            { name: "Amercement of Shackles", cost: [2], summary: "You must drink directly from a designated member of the court once per week, usually resulting in a full Blood Bond. This Flaw is not mutually exclusive with other Merits that affect Bonding, such as Unbondable. However, keeping up the charade would be wise." },
            { name: "Amercement of Domain", cost: [2], summary: "You may not hold Domain. Claims to Domain, even if won or taken, are given directly to someone else who may allow you to use it at their discretion." },
            { name: "Amercement of Congregation", cost: [2], summary: "You cannot have Lasombra Mawlas and any attempts at communication with another Lasombra must first be approved by a member of the local authority of the Domain (such as the Sheriff, Primogen, Prince, etc.)." },
        ],
    },
]

export type RequirementFunction = (character: Character) => boolean

export type Loresheet = {
    title: string
    summary: string
    source: string
    requirementFunctions: RequirementFunction[]
    merits: MeritOrFlaw[]
}

// Requirement function generators
const isClan = (clan: ClanName) => (character: Character) => character.clan === clan
const hasAnimalism = (character: Character) => 
    character.availableDisciplineNames.includes("animalism") || 
    character.disciplines.some((d: any) => d.discipline === "animalism")
const isGangrel = (character: Character) => character.clan === "Gangrel"
const isAquarii = (character: Character) => character.clan === "Aquarii"
const isSabbat = (character: Character) => character.sect === "Sabbat"
const isLasombra = (character: Character) => character.clan === "Lasombra"
const hasOblivion = (character: Character) => 
    character.availableDisciplineNames.includes("oblivion") || 
    character.disciplines.some((d: any) => d.discipline === "oblivion")
const isKiasyd = (character: Character) => character.clan === "Kiasyd"
const isBaali = (character: Character) => character.clan === "Baali"
const isLasombraOrBaali = (character: Character) => character.clan === "Lasombra" || character.clan === "Baali"

export const loresheets: Loresheet[] = [
    {
        title: "The Bahari",
        summary:
            "Adherents to the Path of Lilith who seek enlightenment through pain and conflict. They have low compassion, engage in fleshly pleasures and form strict parenthood relationships over lesser Kindred.",
        source: "Core V5 p382",
        requirementFunctions: [],
        merits: [
            { name: "Dangerous Reputation", cost: [1], summary: "Once per story, add 2 dice to intimidation against Caine-Worshippers." },
            {
                name: "Ritual Scarification",
                cost: [2],
                summary: "Once per session, scar yourself with 1 aggravated dmg to recover 1 aggravated willpower.",
            },
            {
                name: "Sacrifice the Children",
                cost: [3],
                summary: "If you diablerize your childe, add 3 dice to your Resolve + Humanity + Blood Potency roll to absorb disciplines.",
            },
            {
                name: "The Womb's Blood",
                cost: [4],
                summary: "Once per story, drink blood from an uterus to receive +2 Stamina or Resolve until dawn.",
            },
            {
                name: "First-Cursed",
                cost: [5],
                summary:
                    "Walk in first hour of daylight in the morning and before sunset, engage in intercourse without Blush of Life, gain 'Obvious Predator' flaw, Slander social tests against you have -1 difficulty, Vampires using Auspex against you have half Resolve and Willpower until end of scene.",
            },
        ],
    },
    {
        title: "Theo Bell",
        summary:
            "Theo is a former Camarilla lapdog who defected to the Anarch after killing Hardestadt at the Convention of Prague. He inspired countless Brujah to overthrough Camarilla Princes to form Anarch bastions and now acts as liasion between high-status Camarilla and Anarch.",
        source: "Core V5 p383",
        requirementFunctions: [],
        merits: [
            {
                name: "Rebel Cell",
                cost: [1],
                summary:
                    "Once per story, command rebellious mortals (3 dot Ally equivalent) to do one dangerous task for you without your presence.",
            },
            {
                name: "True Anarch",
                cost: [2],
                summary: "Get 2 automatic successes on any Investigation roll concerning Vampires who defected to the Anarch Movement.",
            },
            {
                name: "Contact Information",
                cost: [3],
                summary: "Get a message to Theo Bell. Effects on the game depend on the Story Teller.",
            },
            {
                name: "Bell's Circle",
                cost: [4],
                summary: "Gain Theo Bell as a 5 dot Mawla, but your association with him also has drawbacks.",
            },
            {
                name: "Sect Neutrality",
                cost: [5],
                summary:
                    "You have a small group of loyal Brujah followers who you can influence in any direction (Camarilla, Anarch, independent group). Until they rebel against you, spend 5 dots among Contacts, Haven (safe houses), Mawla and Retainers.",
            },
        ],
    },
    {
        title: "Cainite Heresy",
        summary:
            "Members of the Cainite Heresy believe Caine was the true messiah and Christ was his Second Coming. Vampires are his angels on Earth.",
        source: "Core V5 p384",
        requirementFunctions: [],
        merits: [
            {
                name: "Let He Who Hath Understanding",
                cost: [1],
                summary:
                    "Once per story, the Storyteller will give you one free clue to investigate the Heresy's plans now or in the past.",
            },
            {
                name: "Hand of the Heresy",
                cost: [2],
                summary:
                    "Take a total of three dots among Allies, Herd, Mawla or Retainers to represent your role in the city's Heresy group. Also take the Dark Secret (Heresy) flaw.",
            },
            { name: "Counter-Inquisition", cost: [3], summary: "Smell True Faith on humans" },
            {
                name: "Red Celebrant",
                cost: [4],
                summary: "Once per story, perform an elaborate ritual to trigger something akin to frenzy in a group of humans.",
            },
            {
                name: "The One Named in Prophecy",
                cost: [5],
                summary:
                    "You're an essential member of the Heresy. Once per story, use this fact to determine the winner of a Social conflict if you can make a plausible argument for it.",
            },
        ],
    },
    {
        title: "Carna",
        summary:
            "Carna is a powerful Tremere who has formed her own House to oppose the Tremere Pyramid. She fights for modernization and women's rights.",
        source: "Core V5 p385",
        requirementFunctions: [],
        merits: [
            { name: "Embrace the Vision", cost: [1], summary: "When around members of House Carna, gain 1 die to all Willpower tests." },
            {
                name: "The Rebel Trail",
                cost: [2],
                summary:
                    "When you're at risk of becoming Blood Bound, make a Willpower test against the Blood Potency of the ingested vitae to ignore it.",
            },
            {
                name: "Unorthodox Rituals",
                cost: [3],
                summary:
                    "Once per story, perform a known ritual without expending blood. On a messy critical you become deranged in some way until the end of the story.",
            },
            {
                name: "Reimagined Bond",
                cost: [4],
                summary:
                    "Form mutual Blood Bonds between yourself, your partner and Carna (even though she's absent) when having sex. Lasts until end of the story.",
            },
            {
                name: "Book of the Grave-War",
                cost: [5],
                summary:
                    "Gain one automatic success on all Occult tests regarding Gehenna and breaking shackles binding Vampires to their elders. Become immune to Blood Bonds. Tremere seek to destroy you and the book.",
            },
        ],
    },
    {
        title: "The Circulatory System",
        summary: "The Circulatory System is a human trafficking ring looking for the tastiest blood and exploring Resonances.",
        source: "Core V5 p386",
        requirementFunctions: [],
        merits: [
            {
                name: "Tap into the System",
                cost: [1],
                summary: "Once per story, request specific blood vessels from the Circulatory System.",
            },
            {
                name: "Little Black Book",
                cost: [2],
                summary:
                    "Gain one die to Investigation, Alchemy, Medicine and Science rolls regarding tracking down or testing specific blood. Research new 2 dot and 3 dot thin-blood Alchemy at double speed.",
            },
            {
                name: "Farm Upstate",
                cost: [3],
                summary:
                    "You know about a farm of mortals with potent blood (Equivalent to Herd 4). You can feed on them once a week or attack the farm and take full control.",
            },
            { name: "Secure Transit", cost: [4], summary: "Gain access to armed, secure transport vans." },
            {
                name: "Blood Sommelier",
                cost: [5],
                summary:
                    "Add 2 dice to any test to discover the Resonance of blood and select 3 dots of Contacts, Allies or Haven Merits to explain your knowledge. Once per story, ask the Story Teller the properties of the most valuable vessel's blood.",
            },
        ],
    },
    {
        title: "Convention of Thorns",
        summary:
            "You have deep historical knowledge of the Convention of Thorns, where the Camarilla was founded and the Traditions were set in stone.",
        source: "Core V5 p387",
        requirementFunctions: [],
        merits: [
            {
                name: "Thorns Historian",
                cost: [1],
                summary:
                    "You know details of the many small agreements made at the Convention of Thorns and can use them to apply legal pressure. Once per story, ask the Storyteller for a piece of known information regarding the convention.",
            },
            {
                name: "Tradition Master",
                cost: [2],
                summary:
                    "Once per Chronicle, exercise fringe laws in domains where ruling clans may be sympathetic to unaccepted Traditions of Thorns.",
            },
            {
                name: "Convention Secrets",
                cost: [3],
                summary:
                    "Gain 1 die on Social tests involving Kindred who were present at the Convention. You know secrets that may be worth a Major Boon to a powerful vampire. Once the story, ask the Storyteller for the name of a kindred who needs your knowledge.",
            },
            { name: "Prospective Justicar", cost: [4], summary: "You have powerful support for becoming the next Justicar of your clan." },
            {
                name: "New Traditions",
                cost: [5],
                summary:
                    "You can propose a new tradition or alteration to an existing one. Your voice will be heard by the Camarila's inner circle without prior judgement.",
            },
        ],
    },
    {
        title: "The First Inquisition",
        summary:
            "You have special information on the First Inquisition that burned many vampires in the middle ages, and you can use that knowledge to manipulate or avoid the Second Inquisition of current times.",
        source: "Core V5 p388",
        requirementFunctions: [],
        merits: [
            {
                name: "Mistakes of the Past",
                cost: [1],
                summary: "Once per story, ask the Storyteller for one piece of information regarding the First Inquisition.",
            },
            {
                name: "Names of the Guilty",
                cost: [2],
                summary:
                    "Once per story, ask the Storyteller for the name of one descendant of a traitor vampire, who sold others out to the First Inquisition, in your domain (if there is one).",
            },
            {
                name: "The Sect of St. James",
                cost: [3],
                summary: "Once per story, use an abbot connected to remnants of the First Inquisition as 4 dot Contact.",
            },
            {
                name: "The Second Act",
                cost: [4],
                summary:
                    "You have a Contact within the Second Inquisition. You have no power over them, but you can get information from them or feed them disinformation.",
            },
            {
                name: "Black Spot",
                cost: [5],
                summary:
                    "You know a place in your domain that the Second Inquisition will not enter. But what is so holy or unholy about this place that they won't dare enter?",
            },
        ],
    },
    {
        title: "Golconda",
        summary:
            "Golconda is a mythical enlightenment that vampires can supposedly reach. It is rumored to provide powerful benefits like quelling your inner beast and walking in sunlight.",
        source: "Core V5 p389",
        requirementFunctions: [],
        merits: [
            {
                name: "Seeds of Golconda",
                cost: [1],
                summary: "Once per session, ask the Storyteller if an action will jeopardize the chance of pursuing Golconda.",
            },
            {
                name: "The One True Way",
                cost: [2],
                summary:
                    "You own a pamphlet that, once per story, gives you 3 extra dice on a Social test involving the nature of Golconda.",
            },
            {
                name: "Saulot's Disciple",
                cost: [3],
                summary: "Whenever you willingly frenzy, make a note. You can automatically succeed on your next frenzy test.",
            },
            {
                name: "Satisfy the Hunger",
                cost: [4],
                summary: "Once per session, you can lower your Hunger by 1 (not below 1) without feeding.",
            },
            {
                name: "Greet the Sun",
                cost: [5],
                summary: "Once per story, walk a day in sunlight. At nightfall of that day you go into Hunger frenzy.",
            },
        ],
    },
    {
        title: "Descendant of Hardestadt",
        summary:
            "Hardestadt was the most important Ventrue for 800 years until Theo Bell killed him. He was the Ventrue founding member of the Camarilla.",
        source: "Core V5 p390",
        requirementFunctions: [isClan("Ventrue")],
        merits: [
            { name: "Voice of Hardestadt", cost: [1], summary: "You can speak over any noise and draw attention." },
            {
                name: "Supreme Leader",
                cost: [2],
                summary: "Once per story, take no penalty to your dice pool for sending people into danger.",
            },
            { name: "Ventrue Pillar", cost: [3], summary: "You always have 3 dots of Status with Ventrue." },
            {
                name: "Line to the Founders",
                cost: [4],
                summary:
                    "Once per chronicle, message one of the Camarilla's founders. If your request is important enough, they will respond.",
            },
            {
                name: "Hardestadt's Heir",
                cost: [5],
                summary:
                    "You have a signed document declaring you Hardestadt's heir. It says that when you take the name 'Hardestadt', the Camarilla will obey you and the Anarchs will swarm to take you down.",
            },
        ],
    },
    {
        title: "Descendant of Helena",
        summary:
            "Owner of the most popular Vampire nightclub who may or may not be trying to wake the Toreador Antediluvian. She's beautiful and a brilliant artist - the exemplary Toreador.",
        source: "Core V5 p391",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            {
                name: "Skin-Deep",
                cost: [1],
                summary:
                    "Once per story, drop Helena's name in conversation with a Toreador or Vampire who knows her to gain 1 Status with them. Do it more to make everyone sick of you.",
            },
            {
                name: "Real Talent",
                cost: [2],
                summary:
                    "Choose one of Craft, Etiquette or Performance. Increasing this Skill costs half as many XP as usually (rounded down).",
            },
            {
                name: "Embrace the Stereotypes",
                cost: [3],
                summary:
                    "Once per story, host a party to increase your Status or Influence by two dots with an invited group. The increase lasts until the party ends.",
            },
            { name: "Divine Purity", cost: [4], summary: "Add 2 dice to all tests to avoid blame for your actions." },
            {
                name: "Succubus Club Franchise",
                cost: [5],
                summary:
                    "Open a franchise of the famous Succubus Club. While it's open, gain 2 dots to your coterie's domain's Chasse rating. Select four dots among Resources, Fame and Status among all Vampires.",
            },
        ],
    },
    {
        title: "Sect War Veteran",
        summary:
            "The Sect War was a massive clash between the Camarilla and the Sabbat from the 1990s to the early 2000s in North America. During this conflict the Sabbat murdered their way through Camarilla and Anarch domains, though they have been mostly repelled by the Camarilla by now.",
        source: "Core V5 p392",
        requirementFunctions: [],
        merits: [
            {
                name: "Survivor",
                cost: [1],
                summary: "Once per story, ask the Storyteller for a piece of information relating to the sect war in your domain.",
            },
            { name: "Active Participant", cost: [2], summary: "Take 3 dots of Status or Mawla related to your veteran status." },
            {
                name: "Trophy Kill",
                cost: [3],
                summary:
                    "Once per story, use the legend of you killing a well known Vampire during the war to bypass a contest where it might assist.",
            },
            {
                name: "No Vampire's Land",
                cost: [4],
                summary:
                    "Add 2 dots to your Domain's Portillon, add 2 dice to Streetwise, Larceny and Stealth tests in your and 2 neighboring domains regarding using hidden sanctuaries, armories, tunnel networks and side streets.",
            },
            { name: "Sect Agitator", cost: [5], summary: "Add 2 dice to all Social tests to inflame sectarian tension." },
        ],
    },
    {
        title: "The Trinity",
        summary:
            "The Trinity of Michael, Antonius and The Dracon were the leaders of Constantinople during the Golden Age where Vampires of all believes could exist in harmony. This utopia was broken apart by the Crusades, a Methusela's mania and Setite corruption, turning the Trinity against each other. Many yearn for their return to their former glory.",
        source: "Core V5 p393",
        requirementFunctions: [],
        merits: [
            { name: "Constantinople", cost: [1], summary: "Once per story, ask the Storyteller a question about Constantinople's past." },
            {
                name: "Antonius' Architecture",
                cost: [2],
                summary:
                    "Add 2 dice to any Politics test involving domain government. Once per story, mediate and calm any court debate, quashing violence with action and profundity.",
            },
            {
                name: "The Dream",
                cost: [3],
                summary:
                    "Add 1 die to any Insight test when trying to gauge another's Beast. Once per story, spend a Willpower point to allow another Vampire to re-roll up to 3 dice when resisting frenzy.",
            },
            {
                name: "The Dracon",
                cost: [4],
                summary: "Gain the Dracon as 5 dot Mawla. He can assisst you with spiritual and Discipline matters.",
            },
            {
                name: "The New Trinity",
                cost: [5],
                summary:
                    "You and two friends are prophecised to rebuild Constantinople into a new city. Once per story, remove up to 5 Stains you gained while pursuing this goal.",
            },
        ],
    },
    {
        title: "Jeanette / Therese Voerman",
        summary:
            "The Voerman sister run the second most famous Vampire nightclub, The Asylum in LA. They hate each other, despite the fact that they are secretly two personalities inhabiting the same body. They prove that Malkavians can be as inspired and prosperous as any Toreador or Ventrue.",
        source: "Core V5 p394",
        requirementFunctions: [],
        merits: [
            {
                name: "Asylum Membership",
                cost: [1],
                summary: "You never have to wait in queue to enter The Asylum and you may hunt there twice per session (Difficulty 2).",
            },
            {
                name: "Performing Monkey",
                cost: [2],
                summary: "The sisters frequently give you missions that they generously reward with boons.",
            },
            {
                name: "Jeanette's Favorite",
                cost: [3],
                summary:
                    "Gain Jeanette as a 4 dot Mawla, but only for Malkavian and Anarch dealings. She lets you use the club to host parties, lets you rest there during days and does favors for you.",
            },
            {
                name: "Therese's Favorite",
                cost: [4],
                summary: "Gain Therese as a 3 dot Mawla. She speaks up for you in any regnum and can school you in business and finance.",
            },
            {
                name: "Asylum Operator",
                cost: [5],
                summary:
                    "Run a franchise of The Asylum in your domain. As long as it is open, spend 4 dots between Haven, Herd, Resources or Chasse of your Domain. If you want, your club can be an Elysium.",
            },
        ],
    },
    {
        title: "The Week of Nightmares",
        summary:
            "The red star Anthelios heralded the Week of Nightmares, where the Ravnos Antediluvian purged its own clan and thin-blooded Vampires emerged. You witnessed and survived the mania and now watch for signs of dooms to come.",
        source: "Core V5 p395",
        requirementFunctions: [],
        merits: [
            { name: "Oral History", cost: [1], summary: "Add 3 dice to Performance tests to tell the story of the Week of Nightmares." },
            {
                name: "Ravnos Remains",
                cost: [2],
                summary:
                    "Gain 3 dots of Mawla representing a group of Ravnos as contacts. They carry news and warnings to you and can be convinced to cast mightly illusions once per story.",
            },
            {
                name: "I Was There",
                cost: [3],
                summary:
                    "Once per story, use your status as a survivor to earn a minor boon from a Kindred historian, Ravnos or occultist.",
            },
            {
                name: "The Red Star",
                cost: [4],
                summary:
                    "Once per story, you can either reduce your hunger to 2 or gain 1 die to the pools of one Discipline for a night by staring at the star Anthelios for 10 minutes.",
            },
            {
                name: "Blood of Zapathasura",
                cost: [5],
                summary:
                    "You own a small vial containing the Blood of the Ravnos Antediluvian. What happens when it is imbibed is up to the Storyteller.",
            },
        ],
    },
    {
        title: "Rudi",
        summary:
            "An Anarch representative for the oppressed minorities in Vampire society. He's close to Mortals and fights for their rights as well. Some European Princes worry that he will lead a revolt against the establishments in the near future.",
        source: "Core V5 p396",
        requirementFunctions: [],
        merits: [
            {
                name: "Newfound Rights",
                cost: [1],
                summary: "Once per story, reroll any one Skill test dice pool when striking out against the establishment.",
            },
            {
                name: "Them and Theirs",
                cost: [2],
                summary: "You can feel when a Touchstone of any member of your coterie comes under threat, but you don't feel which one.",
            },
            {
                name: "Gangrel Advocate",
                cost: [3],
                summary:
                    "Add 1 die to Social tests with Gangrel. You can organize truce meetings between Gangrel and Camarilla representatives with a Charisma + Politics test. (Difficulty set by Storyteller)",
            },
            {
                name: "The Bear Pack",
                cost: [4],
                summary:
                    "Gain the Bear Pack as 3 dot Mawla. They can get in verbal and physical fights for you. Once per story, they and you get 1 automatic success when trying to rouse Anarchs against the establishment.",
            },
            {
                name: "Rudi's Army",
                cost: [5],
                summary:
                    "You hold sway over an army of revolutionaries that you can rile up against Vampire or Mortal governments. Split 5 points among Allies, Influence and Contacts, that can be directed, but never controlled.",
            },
        ],
    },
    {
        title: "Descendant of Tyler",
        summary:
            "Tyler is the Brujah revolutionary that inspired the Anarch Movement. Tyler herself is no longer convinced that violence is the answer, but her followers still think so.",
        source: "Core V5 p397",
        requirementFunctions: [isClan("Brujah")],
        merits: [
            {
                name: "Instigator",
                cost: [1],
                summary: "Once per story, add 2 dice to a roll to persuade a mortal crowd into violent action.",
            },
            {
                name: "Champion of the Cause",
                cost: [2],
                summary: "Gain 2 dots of Status with rebels during a rebellion. Rebels come to you looking for advice or leadership.",
            },
            {
                name: "Tyler's Mercy",
                cost: [3],
                summary: "Once per story, when frenzying, take a Brujah compulsion to immediately end your frenzy.",
            },
            {
                name: "The Furores",
                cost: [4],
                summary:
                    "Once per chronicle, the Furores arm you and you gain assets, influence, and surprise 5 dot Allies. Can only be used to attempt to take down a Prince, Baron or higher status Vampire.",
            },
            {
                name: "Permanent Revolution",
                cost: [5],
                summary:
                    "You have already taken down one Sect figurehead and continue your revolution. Anarchs stop to listen to you, Brujah Anarchs follow your every command.",
            },
        ],
    },
    {
        title: "Descendant of Zelios",
        summary:
            "A great Nosferatu Architect and planner who disappeared beneath New York in 1990. He is responsible for many Nosferatu labyrinths, dungeons and prisons.",
        source: "Core V5 p398",
        requirementFunctions: [isClan("Nosferatu")],
        merits: [
            { name: "Sanctuary", cost: [1], summary: "Split 2 dots among Haven-Postern and Haven-Security System." },
            {
                name: "Saboteur",
                cost: [2],
                summary:
                    "Collapse a building with merely a hammer over the course of as many nights as the Storyteller sets. (4 for a family home, 9 for a skyscraper)",
            },
            {
                name: "On Commission",
                cost: [3],
                summary:
                    "Gain one minor boon per story from a Vampire who asks you for advice on building their Haven. You know where many powerful Vampires sleep.",
            },
            {
                name: "The Labyrinth",
                cost: [4],
                summary:
                    "You have built a great maze beneath your domain. You can't use it as Haven as it terrifies you, but you can escape into it when chased and none can pursue you.",
            },
            {
                name: "Sense the Ley Lines",
                cost: [5],
                summary:
                    "You can sense Ley Lines. Sleeping near them allows Vampires to roll 2 dice and pick the highest on their rouse check when awakening.",
            },
        ],
    },
    {
        title: "Descendant of Vasantasena",
        summary:
            "A free-will-enthusiast who preached against the Blood Bond and traditional Vampire hierarchy in the middle ages. She is a former member of the Camarilla and the Sabbat and wants to fight the Antediluvians.",
        source: "Core V5 p399",
        requirementFunctions: [isClan("Malkavian")],
        merits: [
            {
                name: "Agent of Chaos",
                cost: [1],
                summary: "Once per session, while in a chaotic situation, re-roll 1 die without spending Willpower.",
            },
            {
                name: "Hear My Words",
                cost: [2],
                summary:
                    "Once per story, provide counsel to somebody in a chaotic situation. They may re-roll 1 die in a future test within the same situation.",
            },
            {
                name: "Scent the Bond",
                cost: [3],
                summary: "Once per story, roll Resolve + Awareness (Difficulty 4) to smell the Blood Bond on a bonded and bonding Vampire.",
            },
            {
                name: "Destroy the Bond",
                cost: [4],
                summary: "Drink a mouthful of a Vampires blood and ride out a frenzy to break a Blood Bond on them.",
            },
            {
                name: "Sabbat Becomes Camarilla",
                cost: [5],
                summary:
                    "Once per story, deprogram a Vampire from their sect beliefs. To do so, completely isolate them in an atmosphere of perfumes. Once per 3 nights, roll Intelligence or Charisma + Insight. You win after achieving a number of total successes equal to twice the subject's Willpower.",
            },
        ],
    },
    {
        title: "High Clan",
        summary:
            "Even though 'High' and 'Low' clans were abolished with the formation of the Camarilla, in your domain these rules still hold to some degree. Historically, High Clans include the Lasombra, Toreador, Tzimisce and Ventrue, sometimes the Brujah and Hecata and rarely the Tremere. In other parts of the world, the Banu Haqim and Ministry are considered High Clans.",
        source: "Core V5 p400",
        requirementFunctions: [],
        merits: [
            {
                name: "Peacock",
                cost: [1],
                summary: "Once per session, reroll a single die when commanding deference from one non-titled vampire in your domain.",
            },
            {
                name: "Sway the Low",
                cost: [2],
                summary:
                    "You have bullied Low Clan Vampires equivalent to 3 dots of Mawla into loyalty to you. Gain 3 extra dice to Intimidation or Leadership against those Vampires. If you ever roll a total failure on such a test you must compensate them or they turn on you.",
            },
            {
                name: "Elevate the Low",
                cost: [3],
                summary:
                    "Once per chronicle, raise a Low Clan Vampire into High Clan status. Gain 1 die on Social tests against Low Clan Vampires when you allude to elevating them.",
            },
            {
                name: "Embraced to Rule",
                cost: [4],
                summary:
                    "Add 1 die to Leadership tests involving High Clan Vampires. Once per story, other High Clan Vampires vote for you or allow you to take a position of power unless they have personal grievances with you.",
            },
            { name: "Blessed, not Cursed", cost: [5], summary: "Once per session, spend one Willpower to ignore your Clan Bane." },
        ],
    },
    {
        title: "Low Clan",
        summary:
            "You're a member of a Clan that is considered lowly in your domain (typically those are one or more of the Gangrel, Malkavians and Nosferatu. Sometimes also Brujah and Tremere). This means many treat you as less-than, but you also have access to rebels and counter culture.",
        source: "Core V5 p401",
        requirementFunctions: [],
        merits: [
            {
                name: "Thick Hide",
                cost: [1],
                summary: "Once per story, ignore verbal attacks or provocations for a scene without rolling.",
            },
            {
                name: "Cursed with Pride",
                cost: [2],
                summary: "Once per story, gain an automatic success in a roll when incorporating your Clan Bane.",
            },
            { name: "Uncanny Kinship", cost: [3], summary: "Select 3 dots from Mawla or Statusfrom other Low Clans in the domain." },
            {
                name: "Trade Among Equals",
                cost: [4],
                summary:
                    "Select another Low Clan's Discipline. You can buy dots of that Discipline using experience points as if it was in-clan for you.",
            },
            {
                name: "Criticality Incident",
                cost: [5],
                summary:
                    "Add 1 die to all rolls for projects undermining High Clans in your domain. Once per chronicle, sacrifice 10 of your Background dots to bring down the same number of High Clan Vampires in a coup.",
            },
        ],
    },
    {
        title: "Ambrus Maropis",
        summary:
            "A well liked trend-setter among Camarilla society. Many don't know he is a Nosferatu as he uses intermediaries to interact with Princes and Barons while remaining hidden himself. At heart, he is an introverted anime & gaming nerd and a skilled hacker and software developer.",
        source: "Core V5 p402",
        requirementFunctions: [],
        merits: [
            {
                name: "True Believer",
                cost: [1],
                summary: "Gain a 1 die bonus to tests for finding shared Kindred hiding places in your city.",
            },
            {
                name: "Clandestine Information",
                cost: [2],
                summary: "Once per story, get one piece of information stored online about a mortal within 2-20 hours.",
            },
            {
                name: "Taught by the Best",
                cost: [3],
                summary:
                    "Consider Ambrus a 3 dot Mawla. He can set you up with your personal hacker for 'friend prices' or get intel on a wide array of topics like SI dealings or the current fashion trends in obscure subcultures.",
            },
            {
                name: "Back Door Panopticon",
                cost: [4],
                summary:
                    "Once per story, log into a PRISM backdoor to get two automatic successes on any Investigation involving anyone's cell activity or online presence.",
            },
            {
                name: "On Another Grid Entirely",
                cost: [5],
                summary:
                    "Gain two 2 dot Mask cover identities, gain the Zeroed merit, get 3 extra dice to resist attempts to discover your online activities or your undertakings in the mortal world.",
            },
        ],
    },
    {
        title: "Carmelita Neillson",
        summary:
            "A Vampire-journalist chronicling the stories of ancient vampires and recording the history of Kindred society. Carmelita has established many hidden libraries in hidden locations. Carmelita is hired to debrief recently awoken Methuselahs, investigate ruined temples and interpreting Sabbat scripture.",
        source: "Core V5 p403",
        requirementFunctions: [],
        merits: [
            {
                name: "The Art of Story",
                cost: [1],
                summary: "Toreadors always lend you their ear when you speak of historic lore or mythic tales.",
            },
            {
                name: "The Art of Will",
                cost: [2],
                summary:
                    "Once per session, meditate before resting for the day and pass a Resolve + Academics test of difficulty 5 to awaken with an additional point of Willpower.",
            },
            {
                name: "Neillson Library",
                cost: [3],
                summary:
                    "Serve as curator to a hidden library which serves as a 2 dot Haven with a 2 dot Library. Other Vampires meet there as well.",
            },
            {
                name: "Interview With the Methuselah",
                cost: [4],
                summary: "Once per story, ask the Storyteller to provide you a secret about one of the clans in your domain.",
            },
            {
                name: "Ancestor's Tomb",
                cost: [5],
                summary:
                    "You are tasked with guarding the resting place of one of your ancestors. While you keep it safe, once per story, call upon Carmelita for a Major Boon. If you fail to guard the tomb, there will be consequences.",
            },
        ],
    },
    {
        title: "Fiorenza Savona",
        summary:
            "A relatively freshly turned Ventrue with massive sway among the Mortals of the political and business elite. She has her hands in NGOs, the UN and the Davos elite and likes to maintain rigid power structures.",
        source: "Core V5 p404",
        requirementFunctions: [],
        merits: [
            {
                name: "On Fiorenza's List",
                cost: [1],
                summary: "Gain a Gifted Mortal Retainer (Bodyguard, Driver, Butler..) who openly spies on you for Fiorenza.",
            },
            {
                name: "Breakfast with Fiorenza",
                cost: [2],
                summary: "Once per story, meet Fiorenza. This can be lucrative or informative, if you ask the right questions.",
            },
            {
                name: "Friendly Benefits",
                cost: [3],
                summary:
                    "Gain Fiorenza as 3 dot Mawla who can provide you with insider trading tips, expensive cars or private planes or sweet-talk ruffled Ventrue for you. If you overuse or abuse this connection, she will cut you off.",
            },
            {
                name: "The Directorate",
                cost: [4],
                summary:
                    "Become Blood Bound to a shadowy Ventrue Directorate that wants you to break Fiorenza to their will. They provide you with 6 dots to spend among Contacts, Mawla and Resources.",
            },
            {
                name: "Government Motion",
                cost: [5],
                summary:
                    "Once per chronicle, Fiorenza will influence a Mortal political leader for you. This leads to you gaining 5 dice to distribute as you like among any roll involving government action.",
            },
        ],
    },
    {
        title: "Descendant of Karl Schrekt",
        summary:
            "Hardcore-traditionalist & former Camarilla Justicar. Karl was a Vampire hunter before his embrace in 1235 and has gained massive respect as ruthless and strong enforcer of the Camarilla, hunting supernatural threats.",
        source: "Core V5 p405",
        requirementFunctions: [isClan("Tremere")],
        merits: [
            {
                name: "Remember the House",
                cost: [1],
                summary: "Once per story, ask the Storyteller for one piece of information about House Tremere before the Pyramid fell.",
            },
            {
                name: "Hardliner",
                cost: [2],
                summary: "With the Storyteller's agreement, add 2 dice to any test to resist attempts to sway you from Schrekt's goals.",
            },
            {
                name: "Ritual Preparedness",
                cost: [3],
                summary: "Once per story, perform one of your rituals in five minutes & without preparation.",
            },
            {
                name: "Archon's Bane",
                cost: [4],
                summary:
                    "Have a supernatural 4 dot Ally (Werewolf, Mage, Wraith, Changeling...) who is being hunted. Once per story, they come to your aid.",
            },
            {
                name: "Know the World",
                cost: [5],
                summary:
                    "Gain 3 dots in Haven-Library and pick 3 Specialties in Occult. Once per story, ask the Storyteller a simple question about non-Vampire supernatural creatures.",
            },
        ],
    },
    {
        title: "Descendant of Xaviar",
        summary:
            "Former Gangrel Justicar who saw his cotery eaten by an Antediluvian. He left the Camarilla because they ignored his warnings and died mysteriously soon after.",
        source: "Core V5 p406",
        requirementFunctions: [isClan("Gangrel")],
        merits: [
            { name: "Martyred Ancestor", cost: [1], summary: "Gain 2 dots of Status with other Gangrel in your domain." },
            {
                name: "Where the Bodies Are Buried",
                cost: [2],
                summary: "Make Resolve + Awareness check to detect Vampires merged or torpid in soil below you.",
            },
            {
                name: "Loyal Hound",
                cost: [3],
                summary:
                    "Spend 4 dots among Domain, Herd and Status. Non-Camarilla Gangrel despise you for staying loyal to the Camarilla.",
            },
            {
                name: "Monstrous Bat",
                cost: [4],
                summary:
                    "Once per story, turn into a man-sized bat. In this form, gain +1 to all Physical Attributes, glide in the air and do +1 Aggravated dmg with bites.",
            },
            {
                name: "Experienced the Antediluvian",
                cost: [5],
                summary:
                    "Once per story, while touching open ground, sense another Gangrels location and drain some vitae from the to reset your Hunger to 2.",
            },
        ],
    },
    {
        title: "Descendant of Roger de Camden",
        summary:
            "Roger is an ancient and shadowy Cappadocian Vampire who currently rules as Prince of Edinburgh. He is known as a scholar of the boundaries between life and death, a martyr and a survivor.",
        source: "Ash and Bone p171",
        requirementFunctions: [isClan("Hecata")],
        merits: [
            {
                name: "Proud Childe",
                cost: [1],
                summary: "Gain 2 points to status while in a Hecata-controlled environment.",
            },
            {
                name: "Corpsense",
                cost: [2],
                summary:
                    "Gain 2 dice to any pool for investigating the cause of injury or death of a body. Wraiths can communicate with you more easily.",
            },
            {
                name: "Eye to Eye",
                cost: [3],
                summary: "Gain 2 dice to any Persuasion or Intimidation when talking to Ventrue.",
            },
            {
                name: "The Way of all Flesh",
                cost: [4],
                summary: "You can embrace old corpses unless they're rotted beyond recognition.",
            },
            {
                name: "Perchance to Dream",
                cost: [5],
                summary: "You can wander the Shadowlands while resting or while in torpor.",
            },
        ],
    },
    {
        title: "Children of Tenochtitlan",
        summary:
            "Originally Aztec Vampires that were oppressed by the Giovanni and are now looking for a new leader and planning their revenge.",
        source: "Blood Gods p221",
        requirementFunctions: [isClan("Hecata")],
        merits: [
            {
                name: "Hiding from the Wolf",
                cost: [1],
                summary: "Gain 1 die to any roll to hide.",
            },
            {
                name: "Ghostly Instincts",
                cost: [2],
                summary: "Gain 2 dice on any Oblivion Ceremony roll involving summoning, control or destruction of ghosts.",
            },
            {
                name: "Forward Thinking",
                cost: [3],
                summary:
                    "Once per story, you can reroll any Skill roll. Once per scene, you can reroll a skill roll against another Hecata, with +1 success if they're a Harbinger of Skulls.",
            },
            {
                name: "Necromantic Prodigy",
                cost: [4],
                summary: "Get +2 successes on any roll necessary for activating a necromantic Oblivion Ceremony.",
            },
            {
                name: "Next in Line",
                cost: [5],
                summary:
                    "Get 2 points of Status with Hecata, gain an Ally among the Anziani who acts as 5 dot Mawla once every other story.",
            },
        ],
    },
    {
        title: "Flesh-Eaters",
        summary: "The Nagaraja are flesh-eating Vampires. They are feared by many and often sadistic killers.",
        source: "Blood Gods p223",
        requirementFunctions: [isClan("Nagaraja")],
        merits: [
            {
                name: "Viscus",
                cost: [1],
                summary:
                    "Biting mortals and causing wounds acts like drinking blood for you, slaking your hunger. You can also eat fresh corpses.",
            },
            {
                name: "Unseen Spirit",
                cost: [2],
                summary:
                    "Gain the 'Cloak of Shadows' Discipline, but it only works against ghosts. If you already have Obfuscate, all your Obfuscate abilities work against ghosts as well.",
            },
            {
                name: "The Perfect Murder",
                cost: [3],
                summary:
                    "If you have at least one night to plan, gain +1 success on any roll during an intentional murder scene (can be negated by 'Send a Murderer')",
            },
            {
                name: "Send a Murderer",
                cost: [4],
                summary:
                    "Get +2 dice to rolls for studying murder scenes of tracking killers. Spend 3 dots among Contacts with mortal police, vampire investigators and Status.",
            },
            {
                name: "Monstrous Bite",
                cost: [5],
                summary:
                    "Your fangs can grow into daggers, giving you +1 success on Intimidation rolls, 3 bite damage and removes the 'called shot penalty' from bite attacks.",
            },
        ],
    },
    {
        title: "La Famiglia Giovanni",
        summary:
            "The Giovanni are an ancient and respected mafioso family of Vampires. They are the most powerful part of the Hecata clan, and they'll do everything to keep it that way.",
        source: "Blood Gods p225",
        requirementFunctions: [isClan("Giovanni")],
        merits: [
            {
                name: "A Cousin's Ear",
                cost: [1],
                summary:
                    "Once per session, ask another Giovanni a direct question and get a direct answer. You'll have to honestly answer a question in return. Once per story, get a favor from a mortal member of the family.",
            },
            {
                name: "Faded Glamour",
                cost: [2],
                summary: "Once per session, add an automatic success to a social roll against another Hecata or their servants.",
            },
            {
                name: "Petty Cash",
                cost: [3],
                summary:
                    "Spend four dots among 'Resources' and 'Retainers'. Elder members of the family can take these from you at any time.",
            },
            {
                name: "Spectre Servant",
                cost: [4],
                summary:
                    "You gain a spectre to act as your servant (4 dot 'Ally', use stats from Core book p. 377) that you can summon once per session. It will arrive within 10 hours.",
            },
            {
                name: "Aspiring Anziani",
                cost: [5],
                summary: "Gain 5 dots of 'Status' among Hecata, and get a private audience with the Capuchin every few stories.",
            },
        ],
    },
    {
        title: "The Nation of Blood / Descendants of the Baron",
        summary:
            "Vampires formerly known as the Samedi. They commonly work as mercenary spies and necromancers, or run secret religious circles practicing vodou magic. The clan curse rots their flesh or, in some cases, exposes raw bone, giving them an even more corpse-like appearance than most vampires.",
        source: "Blood Gods p222",
        requirementFunctions: [isClan("Samedi")],
        merits: [
            {
                name: "CSI Shit",
                cost: [1],
                summary: "You can easily identify the cause of death when inspecting a corpse (roll if it's magically concealed)",
            },
            {
                name: "Pound of Flesh",
                cost: [2],
                summary:
                    "If you accept a freely given gift, you and the giver receive a dice penalty based on each character's Bane Severity for one night.",
            },
            {
                name: "Treat Yourself",
                cost: [3],
                summary:
                    "Once per night, you can indulge in a vice just like a human would, without any of the usual vampiric downsides (eg. a meal, drinks, sex, a cigar)",
            },
            {
                name: "My Setite Friend",
                cost: [4],
                summary:
                    "You have a friend in the Ministry. Once per story, you can ask a favor that is as powerful as 3 dots in the appropriate Merits (Alles, Influence, Resources...)",
            },
            {
                name: "The Silk Hat",
                cost: [5],
                summary:
                    "You are next in the line of succession of the Baron. Before you step up into his position, you have him as a 5 dot Mawla (his help comes in cryptic and mysterious ways). If you take his place, it might just be a job, or maybe you gain his mystical powers. Either way, you certainly gain his enemies.",
            },
        ],
    },


    {
        title: "Blood of Artio",
        summary: "While many kindred have been known throughout history to have a deep tie with the beast and animals of the world, there are those rare few whose blood holds a certain quality and potency that allows for an ever deeper bond, whose blood causes an increased rate of growth and strength within their animal ghouls.",
        source: "Custom",
        requirementFunctions: [hasAnimalism],
        merits: [
            { name: "Animal Whisperer", cost: [1], summary: "You're a natural in your methods to communicate, train, and manage animals. Your specialties in specific animals add two dice instead of one, and the first time in a session that you succeed in a pool that includes one of those specialties, regain one Willpower." },
            { name: "Clever Creatures", cost: [2], summary: "Animals you breed are naturally quick-witted and fast to learn. Add one die to their Social and Mental pools, and any Tests to get one of your bred animals to understand something to follow instructions are reduced by 1." },
            { name: "Monstrous Growth", cost: [3], summary: "When you Ghoul an animal, your vitae bolsters its size beyond what's typical for it. Your animals are roughly twenty-five percent larger, increasing their Health Tracker by 2, their Physical Attributes by 1, and they gain two dots in a Discipline you have at Level 2 or higher, rather than one. Your chosen animal deals non-halved Superficial Damage on critical attacks." },
            { name: "Beckoning Blood", cost: [4], summary: "There's something in your blood that calls out to animals, pulling them to where it's spilled and causing them to swarm its location. When at least one Rouse Check's worth of your Blood is exposed to open air, it attracts nearby animals to the scene, drawn by a preternatural instinct to find it. While this is usually a boon, it may also be a curse, as those with this blood must take care not to draw unwanted animals, especially those meant to track you, who will get a two-dice bonus to such pools." },
            { name: "Famulus Amplius", cost: [5], summary: "Your blood affects animals in ways that surpass even the most practiced and masterful of Animalism. You may Blood Bond an animal and treat it as if it were a Famulus. If you already have a Famulus, you may get a second one through the use of this Background." },
        ],
    },
    {
        title: "Feral Child",
        summary: "You never really knew your parents, and conjuring up their faces in your memory only leaves you with distorted flashes, the smell of blood, and screams from your oldest nightmares. You were young when taken from them, an infant or child. You were left in the woods, amongst a pack of beasts.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "One of the Pack", cost: [1], summary: "Your family was a pack of wolves, who taught you how to hunt and survive in the wilds. You gain these wolves as an Ally (●●) that can be called on for assistance and will automatically show up at least once per Story. Additionally, all canids treat you with an innate sense of deference, and will be friendly unless specifically instructed to attack you by their master." },
            { name: "Canid Mind", cost: [2], summary: "Your teeth are exceptionally sharp, and you have learned the methods of hunting and fighting from your canid family. Add one die to your attack pools made to bite or carry objects in your mouth. You also add three dice to any non-combat pools while in the shape of a canid. However you must spend one Willpower to revert to human form." },
            { name: "Skulking Wolf", cost: [3], summary: "You've learned how to move and position when you've been heavily weakened or injured. When your Health Tracker is fully marked, your Survival, Stealth, and Awareness pools suffer no penalties and you instead add two dice to those same pools. Specialties in those pools also add an additional die while under this effect." },
            { name: "Bestial Ignorance", cost: [4], summary: "Raised amongst the wilds, where social hierarchy was defined by the strongest leader, you lend little credence to the status of your more civilized peers. You only take Willpower Damage from the margin of loss from Social Contests. Additional damage from others present, or from Status, do nothing." },
            { name: "Family Resemblance", cost: [5], summary: "You struggled, bled, and cried with your family in the wilds. You are as much them as they are you, a fact true down to your bones. Once per story, you can make two Rouse Checks to take the shape of an enormous Dire Wolf that has great size and strength. You can do this even without the powers of Protean, however if you have four or more dots in Protean, you may use this ability as many times as you wish." },
        ],
    },
    {
        title: "The Hushed Chorus",
        summary: "Since the fall of Schrecknet and the revelation that sparked the Second Inquisition, digital technology of any kind is compromised. A group of Kindred, stationed in Detroit, has created a decentralized network of well-trained animals and messengers that comprise 'nests', each assigned to a member of what is now aptly named The Hushed Chorus.",
        source: "Custom",
        requirementFunctions: [hasAnimalism],
        merits: [
            { name: "A Link in the Chain", cost: [1], summary: "You're trusted enough to have been given information on a few Ghouls, well-trained animals, unsuspecting Mortals, and even one or two Kindred. Gain them as Contacts (●●) - 'Chorus Links'. You may use one of these dots to ensure a message gets where it needs to anonymously, even if it's to another city. However that dot is unusable for the remainder of the current story." },
            { name: "One With The Chorus", cost: [2], summary: "You've proven to have a talent for delivering messages. Once per story you can ask a superior to transfer all deliveries meant for a specific Kindred so you might deliver them personally. This usually nets you addresses and information on that Kindred." },
            { name: "Owl-Mask", cost: [3], summary: "The Hushed Chorus only works as well as it does because each member is anonymous. You've proved that you're capable of staying indifferent and anonymous in your work, and the Operators have gifted you a secret Haven (●) with the Security (●) addon, and a Mask (●●) that has been zeroed. If any of these backgrounds are compromised, they will not be replaced, however." },
            { name: "Nest of Whispers", cost: [4], summary: "The Chorus in any given area operates via a series of unincorporated 'Nests', with each Nest being made up of one or two Kindred that are responsible for ensuring all Chorus messages get to where they need to be. You have a Nest in your city, and see all the deliveries of information within it, coming into it, and going outwards. You can key off of the way information flows to know well ahead of time when someone within the city is setting up to make a big move." },
            { name: "A Song of Whispers", cost: [5], summary: "The Operators have passed down a task specifically for you to personally carry out. This message or item must be delivered to the head of a Domain, Sect, or Clan. While they trust your ability and methods to ensure delivery, disclosing this message to others, delaying its arrival, or simply keeping it for yourself will affect Kindred society at large. Then again, getting into the same room as the receiver could yield opportunity enough." },
        ],
    },
    {
        title: "Lorekeeper",
        summary: "Lorekeepers are Gangrel who safeguard a mythical oration technique that dates back to pre-history, even before the so-called 'Dark Ages' of the Masquerade. Their duty is to pass down stories, usually parables and fables of note, to keep their Clan strong.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "Ennoia Edda", cost: [1], summary: "You know the epic of Ennoia, an allegorical poem several hours long when spoken in its entirety. Once per Story, you may orate a part of the Edda to an audience with a Test of Charisma + Performance; Difficulty 3. Passing the test grants a benefit to those listening: LIFE WITH WOLVES: Re-roll an entire pool that includes Animal Ken or Animalism when using Willpower. SURVIVAL IN ENOCH: Survival may be used in place of Streetwise for the remainder of the Story. WISE SPIDER'S GUIDANCE: Spend two points of Willpower to become immune to Willpower Damage for one Turn. A HOME IN WILDERNESS: When Riding the Wave during Frenzy, add two dice to your physical Discipline Pools." },
            { name: "Raconteur", cost: [2], summary: "Your orations spread like wildfire, stirring the hearts and minds of those that hear them in ways that are borne through your Clan's blood. Once per story, when you tell the tale of another person's deeds, you increase their Fame by one for the remainder of the Chronicle." },
            { name: "Trial by Ordeal", cost: [3], summary: "In the days before Kindred institutions of law and order, the Lorekeepers were seen as a wise and impartial group amongst Kindred. Once per story you can hold a duel or contest for two parties to settle their disagreements, which they will agree to. You are the arbiter of this Ordeal and decide the rules of engagement that the participants must follow. So long as you remain neutral, the outcome will be the settlement of the disagreement." },
            { name: "Seeker of Understanding and Power", cost: [4], summary: "You know of an Elder Kindred, a holy place, or an artifact of old. Whenever the object of your seeking, once per Story you may make an Intelligence + Academics or Investigation; Difficulty 3 Test. Passing this Test grants you once piece of true information about the topic, such as what it is, where it is, or what it does. Upon achieving twelve total successes across these tests, you find the object and it teaches you a new Discipline with a dot in it. It is treated as in-Clan for you." },
            { name: "The Wild Hunt", cost: [5], summary: "Amongst Kindred, the act of Hunting has always been a passtime, a universal truth that equalizes all castes of society, friend or foe. You know the tales of the grand hunts of old. The celebrations of ending one era and beginning anew and one per Chronicle you can hold such an event as an Elysium-like gathering, aimed at a specific festival or celebration of the end of an event and the beginning of another. Your Status is increased to (●●●●●) during the Story leading up to the Festival and during the event." },
        ],
    },
    {
        title: "Pagans of the Old Ways",
        summary: "In ages past, the Clan of the Beast were practitioners of what are now referred to as pagan arts and ceremonies. These individuals frequently considered themselves witches, shamans, druids, or medicine makers, and mastered the natural magics of the world long before men rose to walk on two legs.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "Spirit Knowing", cost: [1], summary: "Your mentor has taught and can see and commune nature spirits in an area, so long as you've rested there at least three days within the last week. As long as you have, you can make a Test of Resolve + Occult; Difficulty 3, to attempt to commune with a local spirit. This spirit counts as a Contact (●●) and give you information that tends to be occult-aligned, though they demand steep prices if offended." },
            { name: "Vestige of Old", cost: [2], summary: "Your mentor has transfused a vestige of their old power into you. Your eyes have a subtle green glimmer that betrays your affiliation and emotional state to some degree, conferring a one die penalty to resist Insight pools. However you add two dice to any Social or Mental Skill pools made outside of populated areas." },
            { name: "Bounty of the Forest", cost: [3], summary: "You and your Mentor perform a ritual to infuse the seed of a tree with blood from the both of you. When planted, the seed sprouts to a sapling immediately, growing to adulthood within a lunar cycle. This tree has brilliant crimson leaves that can be used as additional ingredients for Blood Rituals performed in your domain, reducing their difficulty by 2. If ever this tree is destroyed, your mentor will refuse to grant you the privilege of another." },
            { name: "Bounty of Sun and Moon", cost: [4], summary: "Inscribing a rune upon your body symbolizing either your greatest enemy, the Sun, or your constant companion, the Moon, you gain a benefit. With the inscription of the Sun, you reduce the first instance Aggravated Damage from Sunlight or Fire in a scene by two. The inscription of the Moon grants you a one die bonus based on the Moon's phase; +1 to Dexterity pools on New Moon, +1 to Strength pools on a Full moon, or +1 to Charisma in any other phase." },
            { name: "The Crone's Design", cost: [5], summary: "The revelations of your Mentor's intentions have become apparent. Like the land you draw power from, you are fertile soil from which their practices will bloom anew. The power of the old ways now flows through you, and you have been given the knowledge how to teach others in the same way you've been taught. Additionally while within fifty miles of your place of rest, you automatically pass any Rouse Checks made to wake or use Blush of Life, and you add three dice to your Blood Sorcery and Protean pools." },
        ],
    },
    {
        title: "Path of the Beast",
        summary: "A philosophy and set of guidelines said to have been outlined by Ennoia, founder of the Gangrel Clan, after she reflected on the corruption that had enveloped the First City. The Path of the Beast has two primary purposes: To ensure the follower's survival at all costs, and to control and manage the whims of their Beast.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "Survival is Blood", cost: [1], summary: "Blood slaked controls your Beast and ensures your survival. You gain the Bloodhound (●) Feeding Merit, and also add a bonus die to any Athletics, Survival, Insight, and Investigation pools made towards tracking and anticipating your prey's location." },
            { name: "Trophy of the Feat", cost: [2], summary: "When you take a trophy or memento from someone you best or prey upon, restore a Willpower point. If you have that trophy on you, add one bonus die to any pools made to coerce or frighten that same person or someone they were close to." },
            { name: "Marked Target", cost: [3], summary: "Each night is another potential hunt, another chance to mark a person as prey. Upon waking from Daysleep, choose a specific individual or a type of animal as your prey. Until dawn, you get a bonus die to any Physical Skill pool made with that person as the target. Additionally supernatural attempts for your prey to hide or mask themselves from you have their Difficulties increased by an amount equal to your current Hunger." },
            { name: "Red Queen's Decree", cost: [4], summary: "Predator and prey are in a constant race to survive, and it takes all their running just to stay in place. You adapt to this fluctuation better than most, and whenever you are beaten in a contest by another, you may move a point from one Skill used in the beaten pool to another in the same category. The categories being Physical, Social, or Mental, as your mind, body, and blood shifts to anticipate conflict." },
            { name: "Hunter Hunted", cost: [5], summary: "Your reputation as an apex predator has reached the ears of an Elder Kindred, who has decided to hunt you. You gain the Adversary Flaw (●●●). You are incredibly outmatched by this individual, however you've sharpened your mind and fangs to take down larger targets than you. Once per chronicle, in a single scene, you add four dice to all pools to out-maneuver or overcome any actions or obstacles this Elder has made against you. If you best this Elder, and make of them your prey, you may diablerize them without suffering automatic Humanity loss. You are also granted the Elder's Haven (●●●), Resources (●●), and Status (●●) and Fame (●●) amongst local Kindred." },
        ],
    },
    {
        title: "The Thing That's Seen You",
        summary: "The ancient wilderness calls to most Gangrel. Its vast and dark expanse is a comfort in ways that keeps one sane, away from the stress and anxiety of every night life. Out there in the untouched stretches of land, something else keeps you company from a lonely distance. A shape pressed up against the ambience of the night. The Thing That's Seen You.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "Midnight Encounter", cost: [1], summary: "You've seen it. The Thing That's Seen You. Out there somewhere. A silhouette against the darkness of the Wilderness. You may recount this tale to everyone and anyone, in a way you see fit. Whether a romanticized story of some ancient thing of the woods, or a horrible nightmare that's carved itself into the cliffs. All those that hear the story gain a 1 die bonus or penalty to any pools to navigate or understand the Wilderness for the rest of the Story." },
            { name: "Inhuman Effigy", cost: [2], summary: "You've found a strange effigy in the Wilderness, humanoid in shape, made of twisted sticks and wound tight in plant matter that mimics the appearance of your clothing, albeit in a rudimentary fashion. When you enter daysleep with this effigy on your person, you may sleep anywhere in the Forest, even under an open sky, and suffer no ill effects, or be found by anyone. However the effigy will be gone upon waking." },
            { name: "The Thing that Hunts", cost: [3], summary: "Hunting in the Wilderness has always felt the most natural to you, animals, hikers, it doesn't matter. It feels right. Once per story, when you hunt in the Wilderness, the Thing That's Seen You hunts with you, always a blur in a radius out of sight. If you successfully feed during this hunt, your blood shifts, and you gain a Choleric Dyscrasia, regardless of the resonance of your prey. If you fail this hunt you wake the next night racked with wounds, conferring three Aggravated Damage." },
            { name: "A Tribute of Rage", cost: [4], summary: "You frequent the Wilderness enough to know there's few others 'allowed' there. Once per Chronicle, when you spend at least a few hours wandering the Wilderness, you stumble across a Garou, horribly mangled, and with your name carved in their flesh. It will not survive its circumstance, and you are fit to do with it as you please." },
            { name: "The Thing Upon You", cost: [5], summary: "The Thing That's Seen You has taken a greater interest in you. You can see it, in the distance, its shape pressed against the background of your nights. Even when you move into the supposed bastion of despised civilization, you catch it at your periphery, moving soundlessly across the rooftops, amidst reflections in plate glass, crawling under cars. Once per Chronicle, a character that would be a great danger to you is found mangled and agitated, and even if they are alive, cannot confront you until the end of the next Story." },
        ],
    },
    {
        title: "The World-Anew Movement",
        summary: "The Industrial Revolution and its consequences have been a disaster for Kindred. It has fortified the Kine to such an extent that they have become aware of us. They've seen passed our 'Masques' and only those of 'High Clan' tend to survive the Second Inquisition.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "The Tale of A Rolling Country", cost: [1], summary: "A story, wrought with consequence. You tell the tale of land, beautiful and bountiful with life, and how Ferals once roamed in freedom from the encroaching lights of society, where prey was plentiful. Telling this story always attracts Gangrel, and other like-minded individuals who will listen in, regardless of standing or relationship." },
            { name: "Fire and Rebirth", cost: [2], summary: "You know that small steps lead to bigger ventures. When you destroy a piece of equipment or structure owned by a proponent of civilization, especially a commercial asset, you restore a point of Willpower. This can occur up to two times in a single Story." },
            { name: "Like Minds of Destructive Kind", cost: [3], summary: "You have gotten into contact with an individual who keeps their distance that counts as a Contact (●●●) who feeds you strategic information about corruption and commercial overreach in the city that impacts the environment. You can ask them to assist you on information they provide, and they will appear in person as a Werewolf Vandal, but cannot be contacted again until the end of the next Story." },
            { name: "At What Point To Escalate", cost: [4], summary: "You know that people won't change on their own. There needs to be a push towards a return to a primordial, purer, way of unlife. Kindred are the creators of their own prisons. Once per Story you can tear down a Kindred socially, adding their own Status to the resulting Willpower Damage you deal you to them. If you manage to impair them with this attempt, they will willfully give up a dot in one of their Backgrounds." },
            { name: "Apocalyptic Holdout", cost: [5], summary: "Someday you'll go too far and attract too much attention. Every facet of your identity will get burned. You've prepared a contingency. You know the right people. Once per Chronicle you can fake your death, and appear as a completely different person with the Backgrounds purchased on this Loresheet, and redistribute any other Backgrounds you have to be associated with new people, places, and things. Even your appearance will be altered by someone you know; A Thin-Blood Alchemist, Tzimisce Fleshshaper, or a rare Volgirre." },
        ],
    },
    {
        title: "Wolves of Wall Street",
        summary: "Unlike the others of your Clan that have shied away from society, these Wolves have embraced it. Most especially the financial world, which is cut-throat predation at its most social. You've seen the influence, the power, the largest corporations hold. To you they are the behemoths and leviathans of the modern nights.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "Predatory Evaluation", cost: [1], summary: "You know every beast has its burdens and its weaknesses, and the same is true for these commercial institutions. Once per story you can identify a pivotal weakness somewhere in a commercial institution that can be exploited. The disorganized mailing list, the outdated security system, or the easily purchased loyalty of an insider are all examples of a company's soft spot." },
            { name: "Corporate Wolf", cost: [2], summary: "You know where to hit and how to capitalize on it in ways that garner you considerable prestige and fear amongst your peers in the corporate world. Whenever you manage to damage the Backgrounds of another individual that are tied to their assets or income, specifically through play or with a Project, you gain Status (●) that can be used amongst your fellow wolves, or to intimidate outsiders." },
            { name: "Pack Acquisition", cost: [3], summary: "Nothing wagered, nothing gained. You've established yourself in the Wolf Pack and can call for their assistance to run down an enemy too large for you alone. Once per Story, you can spend your Status in the Wolf Pack to automatically damage twice that many Resource dots of another character. You can gain no Background from doing this, however, as the other members of the pack take the lion's share for themselves, and your call for assistance grants you no positive reputation in their eyes." },
            { name: "It's All Liquid", cost: [4], summary: "Meat spoils if not eaten quickly, so having eyes bigger than your stomach is usually a benefit when in the wilds. At any point you can sacrifice any number of your dots in Resources to gain two dots of temporary Resources for each one spent. These temporary resources cannot be sacrificed for any other effect, but can be spent to get what you need immediately. Sacrificed and temporary Resources are lost at the end of the current session." },
            { name: "Feral Buyout", cost: [5], summary: "Your influence has expanded and taken root in one of the major corporate entities in your city, specifically one that another major Kindred player owns. You effectively have Influence (●●●) within this company, and can make major decisions that affect its operation and aims. It also has its own Resources (●●●) that can be used however you see fit. However the Kindred in control is treated an Adversary (●●) and will constantly undermine your efforts elsewhere until you give up your control." },
        ],
    },
    {
        title: "Country Gangrel",
        summary: "The lineage of the Country Gangrel were once some of the most prominent murderers and scouts of the Sabbat. Rarely were these Gangrel subject to the zealotry of the Sabbat itself, and instead got along with their packmates primarily because of how inhuman they loved to be as they stalked the ages and feasted on the blood of order.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "House on the Edge", cost: [1], summary: "You've made a place for yourself on the edge of wilderness, beyond the authority of other Kindred. You have a Haven (●) with a Postern (●) that is unknown to anyone else as long as you keep it that way." },
            { name: "Mixed Blessings", cost: [2], summary: "The transformations and manifestations of your Beast can be extensive, but also beneficial. Once per Story, when you Blood Surge a Dice Pool that includes a Discipline, add an additional die to the surged pool, however you manifest a Bestial Feature afterward, even if you have an alternate Bane." },
            { name: "A Beast I Am", cost: [3], summary: "The thrashes of the Beast in your blood perform in a manner beyond the comprehensions of other Clans. The fact of the matter is that you and your Beast have aims that align, like enemies with a common goal. Once per Session, when you have a Messy Critical, add an additional number of Successes to the roll equal to your current Hunger, however your Hunger automatically increases by 1 afterward." },
            { name: "Survivor of the Wastes", cost: [4], summary: "Survival is in your blood, through and through. Your predecessors have shrugged off death numerous times, making you hardier and stronger than others in your Clan. Once per Chronicle, when you heal from a crippling injury that caused an impairment, you may permanently increase your Strength, Dexterity, or Stamina by one, up to a maximum of five." },
            { name: "Shifts in Blood and Body", cost: [5], summary: "A fluid and constantly changing shape allows one to survive destruction and help ensure you thrive against odds that would've killed you previously. You gain a dot in Fortitude or Protean, and at the beginning of each Story you may switch a power in one of them for another power at an equal or lower level." },
        ],
    },
    {
        title: "Blood Raven's Flock",
        summary: "Known for a brutal and efficient knack at trafficking information, the Blood Raven was a Dark Ages Elder of Londinium who accrued enough information and blackmail on the Baronies of Avalon that Mithras himself began to grow wary of the network of scheming and secret mongering.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "Talons of the Blood Raven", cost: [1], summary: "One of your hands and forearms has taken on the likeness of a crow's leg, with thick scaly skin and long curved talons. The limb keeps this likeness even under other transformations. This arm counts as a Light +2 Brawling natural weapon, which is increased to +3 while under the effects of a Protean power, such as Feral Weapons or Altered Assault. However you lose 1 die from any pools that require precise manipulation with both hands." },
            { name: "Avian Aid", cost: [2], summary: "The birds of the world share a natural kinship with you, and will attempt to aid you. Once per session, a bird can appear to lend a hand or point you in the right direction, such as tapping on the window of a shop your target fled into, hopping around outside of an alleyway that can be used as a good escape route, or swooping down to grab a small item and dropping it before you." },
            { name: "Murder of Informants", cost: [3], summary: "Your bloodline has a natural propensity to exert a network of information gathering throughout the city, to the point that you have, likely without even realizing it, created one for yourself. You gain four dots to distribute between different kindred-related institutions, clans, and sects throughout the city in the form of Mawlas, Retainers, and Contacts, however you must keep these individuals anonymous, else they will vanish." },
            { name: "Feathered Court", cost: [4], summary: "The current Blood Raven, head of your Bloodline, holds you in high regard, impressed with your abilities, they have admitted you into their personalized network of information gathering known as the Feathered Court. Membership in this Court has granted you a very large Raven with red-tipped wings. This creature's primary function is to ferry information from you to others in this network, and is considered a one dot Retainer that serves as an additional Famulus in regards to Discipline Powers –even if you don't have Animalism, or already have another Famulus. When this background is taken, at the start of a new Story, or whenever you deliver useful intelligence to the Blood Raven, you gain a secret from another character of your choice." },
            { name: "Corvidian Anatomica", cost: [5], summary: "The twisting transformations of your bloodline manifest more overtly, causing black feathers to grow from your skin and large wings to sprout from your back. You lose Beautiful or Stunning Looks Merits and any attempts to hide your mutations have their difficulties increased by 2. However you gain the ability to glide through the air at running speed, a +2 Dice bonus to Stealth pools, and when you use your powers of Obfuscate they also affect anyone under your wings." },
        ],
    },
    {
        title: "Regal Knights of Avalon",
        summary: "In the dark age of centuries passed the young Gangrel, Godfrey d'Auffay, set out to join a chivalrous order. Viewing honor, confraternity, and a strong code of chivalry as the best defense against his Beast. However in the Dark Ages, when the line between the High and Low clans of Cainite society was regularly drawn in blood, a lord of little renown and of a Feral's lineage hardly warranted membership in the orders of the High.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "A Knight's Squire", cost: [1], summary: "Under your care is a mortal squire who serves you and provides you with a lifeline to humanity and honour. This Squire counts as a Retainer (●●), doing their best to assist you. Mistreating this Squire inflicts a Stain upon you, and if they die you take three Stains. If you choose this Squire as a Touchstone, their associated Conviction defends against two stains rather than one." },
            { name: "Noble Blood", cost: [2], summary: "Your forebears have proven themselves contrary to the system of High and Low clans for centuries, and have gained an ingrained respect from both. When a distinction between High and Low clans occurs, regardless of context, you are considered a member of both, preventing the negative social connotations from either, and gain three bonus dice to any Charisma pools for the rest of that scene." },
            { name: "Regal Beastclaw", cost: [3], summary: "Your forebears forsook the animalistic approach to solving their conflicts, and instead put their faith in the industriousness of humanity to sharpen their minds against the Beast. When you take this merit, choose a melee weapon. You gain a specialty in Melee for that weapon and it deals non-halved damage to creatures of horror (Werewolves, Wraiths, Faeries, mortal magic wielders, and Kindred who assume monstrous forms, as well as other appropriate supernaturals). When you grip this weapon tightly in both hands for a turn, add one die to resist Frenzy." },
            { name: "Thou Shalt Not Recoil", cost: [4], summary: "Etched in your vitae is the strength of mind to remain steadfast against thy Beast. The lower of either your Composure or Resolve is increased by 1, up to a maximum of 5. However whenever you enter Fear Frenzy, or gain a Fear-related Compulsion, you gain 1 automatic Stain." },
            { name: "Thy Cup Runneth Over", cost: [5], summary: "From Sire to Childer, you've been gifted or bequeathed a goblet depicting the scene of Prince Mithras, as he sits upon his throne, and Sir Godfrey, who kneels in proposition of your Order. Drinking blessed water from the goblet allows you to add your Humanity rating as bonus dice to any pools made to resist the effects of Oblivion and Blood Sorcery, and also gives you an innate sense of who wields such powers, for the remainder of the night. Once per story, you may present the goblet to others for them to drink. Those that do gain half your Humanity, rounded up, as bonus dice to resist the same powers." },
        ],
    },
    {
        title: "The Valkyrie",
        summary: "Valkyrie or Einherjar, battle-fate or army of one. Those who choose to raise the slain as eternal warriors, and the warriors who were chosen when slaine. This ancient bloodline or warriors hail from the Viking Age, where they were borne out of the fallen warriors of the battlefield and embraced in preparation for the inevitable time of Ragnorok.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "Heroic Espousal", cost: [1], summary: "Once per Story, you can regale an audience with a tale of your deeds. This story catches everyone's attention, overpowering even most Presence powers." },
            { name: "Memory & Thought", cost: [2], summary: "The Valkyries claim that the All-Father's Ravens circumnavigate all the world each night, returning to Odin at nightfall to tell him of what they witnessed. A pair of ravens roost near to your haven, always watching and listening. Once per story you may ask them a single question, which they will answer succinctly and truthfully with almost preternatural knowledge. After this they will refuse elaboration, and refrain from further answers." },
            { name: "Claws of Fenrir", cost: [3], summary: "The Einherjar were notorious for their endless rage and terrible Hunger. While at Hunger 3 or higher, and while having a Sanguine Resonance, you may make a Rouse Check to grow long steel-hard claws that count as a +3 Light Brawling weapon that deals non-halved Superficial Damage." },
            { name: "Their Armor, Drenched in Blood", cost: [4], summary: "Einherjar and Valkyrie alike don the blood of their enemies upon their apparel, so that all might see their fierce might. When you score a critical hit with a Brawl or Melee attack, those struck have their Hunger increased by 1 as even vitae is pulled from their body by the blows. Spreading this blood over your face and apparel adds 1 to your Strength, Dexterity, and Resolve pools for the remainder of the scene." },
            { name: "They Send Shrieking Spears", cost: [5], summary: "Legendary are the Valkyries when marshaled for war, descending upon the night with such inhuman ferocity and skill, that their powers would buckle the sunder the armor of champions, pillars of gods, and set a kingdom to the flame. Once per Chronicle, when you would initiate open combat that's likely to involve the leader of a Sect and its forces, you may find a swan, raven, or horse, whispering to it Brunhilde's name. Within the same night a Valkyrie will descend upon the conflict and attempt to turn the tide in your favor, however any slain may be taken with her back to Valhalla upon her departure." },
        ],
    },
    {
        title: "Clutch of the Wise Spider",
        summary: "This Gangrel Bloodline originated in South America, where they lived alongside the native people and served as the guardians of secreted knowledge and artisanal mastery among the Kindred. the Wise Spider was known for her ability to weave intricate illusions and enchantments that could trap and confound her enemies.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "Weaver of Secrets", cost: [1], summary: "You have a natural knack for acquiring and hoarding information. You gain 1 bonus die on all Investigation rolls, and once per session, you can reveal a pertinent piece of information that you learned at some point in the past." },
            { name: "Spider's Web", cost: [2], summary: "You can weave intricate webs of connection and information across the city. You gain one dot each of Contacts and Resources for free. These represent the network of informants and the subtle favors that flow through your web of connections." },
            { name: "Wise Spider's Cunning", cost: [3], summary: "Your bloodline has taught you to be patient and calculating, always thinking several moves ahead. You may spend a point of Willpower to add your Wits + Academics dice to any Manipulation roll, representing your ability to outmaneuver opponents through superior knowledge and planning." },
            { name: "Silk of Deception", cost: [4], summary: "You can weave illusions as easily as a spider spins silk. Once per night, you may create a minor illusion affecting one of the five senses (sight, sound, smell, taste, or touch) for a number of viewers equal to your Manipulation + Subterfuge. The illusion lasts for one scene and affects an area no larger than a room." },
            { name: "Grandmother Spider's Gift", cost: [5], summary: "The ultimate teaching of your bloodline allows you to become one with the natural order of predator and prey. Once per story, you may enter a meditative state where you can perceive the 'web' of relationships and power in an area. This grants you perfect knowledge of who holds power over whom, what secrets bind people together, and how information flows through social networks in your current location." },
        ],
    },
    {
        title: "Coyotes",
        summary: "The Coyotes are a Gangrel bloodline that emerged from the American Southwest, where they learned to survive in the harsh desert environment by adapting the cunning and resourcefulness of their totem animal. Known for their adaptability and their ability to thrive where others merely survive.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "Desert Runner", cost: [1], summary: "Your body has adapted to the harsh conditions of the desert. You need only half the normal amount of blood to sustain yourself each night, and you suffer no penalties from extreme heat or dehydration. You also gain 2 bonus dice to Athletics rolls related to running or endurance." },
            { name: "Coyote's Cunning", cost: [2], summary: "You have inherited the legendary cunning of the coyote. Once per session, you may attempt to solve a problem through trickery rather than direct confrontation. The Storyteller should allow creative solutions that might normally be impossible, as long as they involve misdirection or clever thinking." },
            { name: "Pack Bond", cost: [3], summary: "Coyotes understand that survival often depends on the pack. You may form a supernatural bond with up to three other Kindred. While any member of your pack is within a mile of you, all pack members gain 1 bonus die to all rolls. If a pack member is in immediate danger, all other members instinctively know and feel compelled to help." },
            { name: "Adaptable Form", cost: [4], summary: "Your mastery of Protean extends beyond normal limitations. When using any Protean power that grants you animal traits, you may choose to manifest traits from any animal native to North America, not just those you've specifically learned. Each transformation grants appropriate abilities (flight for birds, swimming for fish, etc.) at the Storyteller's discretion." },
            { name: "Trickster's Last Laugh", cost: [5], summary: "In the direst situations, you can call upon the legendary resilience of the trickster. Once per story, when you would be destroyed or enter torpor, you may instead appear to die while actually entering a supernatural hiding state. You reappear at the next sunset at a location of safety, though you emerge at Hunger 5 and with one less Health level until you feed properly." },
        ],
    },
    {
        title: "Wendigo",
        summary: "Born from the frozen wastes of the far north, the Wendigo bloodline represents Gangrel who have embraced the cannibalistic hunger that comes with surviving in the most inhospitable environments. They embody the primal fear of starvation and the lengths one will go to in order to survive.",
        source: "Custom",
        requirementFunctions: [isGangrel],
        merits: [
            { name: "Endless Hunger", cost: [1], summary: "Your supernatural hunger extends beyond blood. You may sustain yourself partially by consuming raw flesh, reducing the amount of blood you need each night by one level. However, witnessing or participating in cannibalism never causes Staining for you, and you gain 1 die to Intimidation rolls against anyone who knows of your dietary habits." },
            { name: "Predator's Instinct", cost: [2], summary: "Your senses have been honed by countless nights of hunting in the wilderness. You automatically detect if someone in your presence is starving, injured, or otherwise vulnerable. You also gain 3 bonus dice to tracking rolls and can follow a trail that is up to a week old." },
            { name: "Frozen Heart", cost: [3], summary: "The cold of the north has seeped into your very essence. You are immune to the effects of cold and can survive in sub-freezing temperatures indefinitely. When in cold environments, you gain 2 bonus dice to all Stealth rolls as you move with supernatural grace through ice and snow." },
            { name: "Terror of the Wild", cost: [4], summary: "Your very presence evokes the primal fear of being hunted. Once per scene, you may spend a point of Willpower to force all mortals in your immediate vicinity to make a Composure + Resolve roll (Difficulty 3 + your Manipulation). Those who fail are overcome with supernatural dread and will flee if possible, or cower if they cannot escape." },
            { name: "Wendigo's Curse", cost: [5], summary: "You can pass on a portion of your endless hunger to others. Once per story, you may curse a target by making a contested Manipulation + Intimidation vs. their Composure + Resolve roll. If successful, they develop an uncontrollable hunger for raw flesh that lasts for one month. Mortals affected by this curse will become increasingly desperate and may resort to cannibalism. Other Kindred affected find their blood Hunger increases by 1 each night and cannot be reduced below 2 until the curse ends." },
        ],
    },
    {
        title: "Mariners",
        summary: "This aquatic bloodline of the Aquarii has spent centuries beneath the waves, learning the secrets of the deep ocean. They are masters of underwater survival and have developed unique abilities that allow them to thrive in aquatic environments where other Kindred would perish.",
        source: "Custom",
        requirementFunctions: [isAquarii],
        merits: [
            { name: "Depths Dweller", cost: [1], summary: "Your body has adapted perfectly to aquatic environments. You can remain underwater indefinitely without the need to surface, and water pressure at any depth poses no threat to you. You also gain 3 bonus dice to all Swimming rolls and can see clearly in underwater environments regardless of light conditions." },
            { name: "Call of the Deep", cost: [2], summary: "You can communicate with and command marine life within a reasonable distance. Fish, dolphins, whales, and other sea creatures will aid you if their nature allows it. Once per session, you can call upon sea life to perform a simple service, such as scouting, creating distractions, or carrying messages." },
            { name: "Pressure Adaptation", cost: [3], summary: "Your mastery over your physical form extends to manipulating internal pressure. You can compress or expand your body to fit through spaces that would normally be impossible, and you can survive crushing depths that would destroy other vessels. This also grants you 2 additional Health levels that only apply to bashing damage from pressure or impacts." },
            { name: "Tidal Strength", cost: [4], summary: "You can channel the relentless power of the ocean itself. When in or near large bodies of water, you may spend a Willpower point to add your Resolve rating to all Physical dice pools for the remainder of the scene. This power reaches its peak during high tide, when you gain an additional +2 dice to these pools." },
            { name: "Leviathan's Domain", cost: [5], summary: "You have established a supernatural connection to a specific body of water, making it your domain. Within this aquatic territory (roughly 10 square miles), you are aware of all significant events and can exert subtle influence over the environment. Ships may encounter unusual weather, sea creatures become more active, and the water itself seems to respond to your will. Once per story, you can call forth a great sea creature (whale, giant squid, etc.) to aid you, though it will only assist for one scene before returning to the depths." },
        ],
    },
    {
        title: "Beneath No Shadow",
        summary: "Former Sabbat Lasombra who rejected the idea of fighting for a cause ever again, preaching a creed of radical egoism and pursuing strength, ambition, and self-governance above all. They've found a home within the Anarchs as a militant movement focused on eradicating any threat to their sovereignty.",
        source: "Custom",
        requirementFunctions: [isLasombra],
        merits: [
            { name: "Total Autonomy", cost: [1], summary: "Whenever you roll a pool that includes bonus dice from another character's effects, including Teamwork, you gain a Stain. Whenever you could teamwork a roll to improve another Character's pool that is larger than your own, but instead roll it yourself, add two dice to your pool. If that roll fails you gain the Compulsion Debilitated, which confers a two dice penalty to your Dice Pools until the end of the Scene, or you Critically Succeed." },
            { name: "Will of Liberty & Ability", cost: [2], summary: "You have learned that the best path towards personal freedom is ability. You gain six free specialties in separate skills. However your powers of Dominate and Presence that affect others cost a point of Willpower in addition to any other costs." },
            { name: "Free Home", cost: [3], summary: "Your ambitions and resolve to remain free have carved out a small portion of land. On this spot is a Haven (●●) with enough nearby sources of food to count as Herd (●). You also gain a free dot in Security, Ward, and Location. Once per Story, while defending this Haven from others, double its rating. However this spot used to be a common feeding ground for a group of Anarchs who strive to take it back for the \"common cause\". This group counts as a constant Adversary (●●), but Once per Story they attempt to poach any Herd you have in this area or may compromise one of your other backgrounds (Contacts, Retainer, other Havens)" },
            { name: "No Control But Mine", cost: [4], summary: "Those that seek to undermine your will are the greatest threat to it. Whenever someone uses the powers of Dominate or Presence on you, your very blood automatically writhes to resist and despise them. They become an additional Vendetta. You can have up to three additional Vedettas gained this way and all of your Vendetta-based Merits affect each of them. You also gain three dots to spend across Vedetta Merits." },
            { name: "Egocentrism", cost: [5], summary: "Everything you do, you do because it is your will. Even your own morality cannot bend or break the mettle of your soul. You cannot gain Stains from acting in your own best interests, even if such acts go against your Convictions or harm those closest to you." },
        ],
    },
    {
        title: "The Ductus and the Pack",
        summary: "Sabbat characters only. When the Sect marched toward the Gehenna War, some were left behind to hold the line. Through strength, cunning, or terror, you became Ductus, leader of faithful remnants of the Sabbat, forging your Pack in battle. Leadership is your prize, seized in blood and proven every night since.",
        source: "Custom",
        requirementFunctions: [isSabbat],
        merits: [
            { name: "Pack Duties", cost: [1], summary: "At the start of each Story you may assign a specific duty to each of your Packmates (Find out what that Primogen is up to, rip off that Ghoul's head and bring it to me, find us a place to lay low for a few nights). Upon fulfilling their assignment, a Packmate recovers one Superficial or Aggravated point of Willpower." },
            { name: "Zealous Frenzy", cost: [2], summary: "The savage nature of the Gehenna War now boils in the Sect's blood, indoctrinating the very Beasts to the Black Hand. When you, or a Packmate would enter Frenzy of any kind, you may choose to take a point of Aggravated Willpower Damage to stoke their Beast towards zealous wrath, causing them to enter a Zealous Frenzy. While in this Frenzy a Cainite will attempt to carry out the beliefs of themselves and their Pack at all costs, ignoring even their own self-preservation, they will also attack their Packmates last. The total Stains gained while in a Zealous Frenzy are reduced by 1 when it ends." },
            { name: "Lead by the Sword", cost: [3], summary: "When you lead the charge, your Packmates add a bonus die to their first roll in the Scene. Once per Story, you may automatically settle any internal dispute within your Pack." },
            { name: "Blood of the Father", cost: [4], summary: "The blood of the entire pack flows through each member's veins. You and each other member of your Pack chooses a Discipline known by another member of the Pack. Each gains it as an in-Clan Discipline. If they have no dots in it, they gain one dot." },
            { name: "Reforged Blade", cost: [5], summary: "The efforts of you and your Pack will bear bloody fruit. Once per Story you may pick any Cainite, regardless of Sect. The chosen Cainite becomes an additional Vendetta for you and everyone in your Pack. Whilst working against this Vendetta, the numerical effects of every other Background on this Sheet are doubled, and any Teamworked pools add two additional dice." },
        ],
    },
    {
        title: "The Ductus and the Pack - Packmate Merits",
        summary: "These merits are available to Packmates of characters who have taken The Ductus and the Pack loresheet. Your Packmates can still take their own Loresheets as normal.",
        source: "Custom",
        requirementFunctions: [isSabbat],
        merits: [
            { name: "Pack Troth", cost: [1], summary: "While with at least two other Packmates, add a die to resist Dominate, Obfuscate, or Presence powers from non-Packmates." },
            { name: "Sympathetic Frenzy", cost: [2], summary: "When a member of your Pack enters into Frenzy, you may enter into the same Frenzy in solidarity. When the Frenzy ends, you restore Willpower equal to your Bond Strength to them." },
            { name: "Blurred Strands", cost: [3], summary: "Once per Story, you may automatically ignore the effects of a Packmates's Blood Bond, regardless of Strength." },
            { name: "Caine's Warcry", cost: [5], summary: "When you activate a Discipline Power that bolsters you in some way and has a duration of One Scene or less, you may make loud battle shout and another Rouse Check and choose a Packmate. If they also make a Rouse Check, they gain the same effects of that power, using your rating. (Examples include powers like Eyes of Oblivion, Prowess, Fleetness, or even Feral Weapons.)" },
        ],
    },
    {
        title: "NULL",
        summary: "Lasombra characters only. NULLs were legendary hackers who exploited the wrong weakness, drew attention from inhuman eyes, and saw data revealing a world of darkness. Embraced as punishment for their audacity, they rebuild a new digital frontier with their talents as trailblazers.",
        source: "Custom",
        requirementFunctions: [isLasombra],
        merits: [
            { name: "BANEWARE", cost: [1], summary: "Your very presence disrupts digital tech, and you're slowly learning to control this corruption. When touching a piece of modern technology you have a Specialty associated with, you can make a Rouse Check and make a Bane Severity + Technology; Difficulty 3 Test. A Win disables the tech for a number of minutes equal to the Successes on the roll, while a Critical fries it, requiring it to be repaired before it can be used again. Once per Story you may count your Bane Severity as one lower in regards to modern technology." },
            { name: "Digital Entropy", cost: [2], summary: "Your body bleeds static that slowly withers your secondary digital footprint, as if your mere presence is becoming void. Once per Story you can choose to be treated as Zeroed (Vampire the Masquerade Core Rulebook, Pg. 192) in regards to online data for a single night. Your face will be gone from online photos, records about you will feature corrupt data, and posts on social media simply won't load." },
            { name: "Undead OPS (Choose One)", cost: [3], summary: "You've been invited to join a Cainite hacker group. You gain one group as a Mawla (●●●) along with their benefits. But the others become Adversaries (●) NEONBYTES: Working for the Camarilla, they maintain the Masquerade and have a ledger of inter-Domain Boons. You can transfer your Boons between cities using NeonBytes and once per Story they transfer a free Minor Boon to you. This boon is on a Character of the Storyteller's choosing, however. 404_PUL$3: A frenetic and disruptive group, who seems to live for causing chaos. When staked in projects for digital espionage, add three additional dice to the launch roll. They're also a good way to make connections with Anarch VIPs. T0R_AnTuLA: A group that steals data to blackmail Kindred. When using digital means, add a bonus die to investigate Kindred and their Mortal-facing organizations or groups." },
            { name: "Cyber-Syndicate", cost: [4], summary: "Your time as a cyber specialist (hacker) garnered you quite the following and respect. You gain two Retainers(●●) that assist in digital endeavors, becoming your hands. You can always Teamwork with their tech-related pools, even if their Skill rating is lower than yours, and when you do, you add two dice instead of one." },
            { name: "Legacy Exploit", cost: [5], summary: "You've got the critical knowledge of zombie code, backdoors, automated breaches, and other exploitable avenues. Once per Story you can automatically breach any piece of digital security, even ignoring your Bane. This results in you gaining classified or sensitive data that can be blackmailed or sold for Major Boons and Backgrounds, or set up another Kindred for failure. Backgrounds gained this way are permanent and usually (●●) or more." },
        ],
    },
    {
        title: "Sword-Seraph Malchus",
        summary: "Sabbat characters only. With the Regent slain, war packs look to the Seraphim for salvation and strategy. Malchus, the Sword-Seraph, fused Abyssal rites with Diablerie sacrament, preaching that freedom is an illusion granted by the strong to the weak, and only through relentless pursuit of strength can one be truly free.",
        source: "Custom",
        requirementFunctions: [isSabbat],
        merits: [
            { name: "I Am Wielded", cost: [1], summary: "You bear ritual tattoos of Malchus' Abyssal power as jagged lines etched across your neck, shoulders, or chest. This marks you as a weapon of the Blade-Seraph's Host, resolute beyond mortal limits. You are always aware when someone uses Dominate or Presence on you. While committing Diablerie, add one die to Blood Surge rolls. If the Rouse Check for the Surge results in a 1 or 10, gain a Stain and add two dice instead." },
            { name: "Empty Conviction", cost: [2], summary: "Mortals are fragile and weak, suitable only as food. Your connections to them as anchors of your morality is a hindrance to your drive. If you commit harm against an innocent Human, reduce the Stains incurred by one for each Touchstone you lack beneath the standard limit of three. If you have no Touchstones at all, Once per Story, at the end of a Session, you may convert your Stains into an equal amount of Aggravated Damage." },
            { name: "Crown-Splitter", cost: [3], summary: "While in the olfactory range of a Character, you can make a Resolve + Awareness; Difficulty 3 Test. On a Win you know that Character's Blood Potency and you may make them your Vendetta. Add one die to any Mental pools made in Contests with a Vendetta that has a stronger Generation or Blood Potency than you." },
            { name: "Taken Prince", cost: [4], summary: "You've learned a Rite of Diablerie from Malchus or one of his Blade-Priests. Once per Story you can choose one Cainites you've Diablerize, raising your Hunger by 1 and vomiting out ink-black ichor that forms into a Taken. This Taken obeys only your commands. At the Scene's end, it violently rebinds to your soul, inflicting 1 Aggravated Willpower damage." },
            { name: "Via Laminarum", cost: [5], summary: "Malchus preaches that any being that can be cut down, should be cut down. That a soul holds worth only in its ability to preserve itself. This morality serves to vindicate any and all actions one performs to destroy the weak, and preserve their strength. You do not suffer an automatic loss of Humanity for committing Diablerie, however a portion of the power you take is tithed to this path's creator, the Blade-Seraph, reducing the total Experience gained from Diablerie by 10, down to a minimum of 5." },
        ],
    },
    {
        title: "The Hadal Companies",
        summary: "When Sabbat packs were left behind and watched their Sect collapse, the Hadal Companies emerged from this wreckage as a Kindred private military force. Led by ex-Ducti, these mercenaries sell hardened soldiers and ruthless solutions to those willing to pay, securing allegiance through purpose and boons.",
        source: "Custom",
        requirementFunctions: [],
        merits: [
            { name: "Cynical Merc", cost: [1], summary: "You've heard it all before. The call to a cause, the rousing speech, the charismatic appeals. They ring hollow. You're a professional first, not an idealist. Add a bonus die to any pools made towards negotiating a price for your services and to any pools made to resist the idealist rhetoric of a cause." },
            { name: "At Any Cost", cost: [2], summary: "Once per Story, when you use one of your applicable Backgrounds to quickly solve a problem, you can roll an appropriate Skill + that Background's rating against a Difficulty set by the Storyteller. You can always Succeed at a Cost on this roll, however the dots in the Background used will be damaged by the margin of failure until you take action to repair them." },
            { name: "Soldier's Fortune", cost: [3], summary: "You have your own Company. Each member is willing to fight —As long as they're paid of course. You gain three one-dot Mawlas. Work with your Storyteller to build each of them as Neonate with the Specialist Skill distribution. Add an additional die to Leadership rolls in regards to your Company. You can call on them to assist you, however they will always require compensation in the form of Boons, Backgrounds, or some kind of loot. Other Player Characters can take the place of one of these Neonates in your company if the two of you agree. That Player gains two free Specialties, one in a Skill of your choice, and one in their own choice." },
            { name: "Deep Debts", cost: [4], summary: "Work with your Storyteller to choose a powerful or influential Storyteller Character. At least Once per Story they require your services. If you succeed in solving their problem, they pay you in Boons, or in two dots of Backgrounds. Should you succeed in solving their problems twice in a row, they become your Mawla (●●●). However their enemies will offer rewards in the form of two dots of backgrounds, adding an additional dot at the start of each Story. Should the indebted Kindred die by your hand, they're yours for the taking." },
            { name: "Mercenary's Gambit", cost: [5], summary: "The time to play your hand is now. Other Hadal Companies, who operate under their own lieutenants have arrived in the city. Once per Story, you may call any number of their members to assist you. When doing this, the other Company counts as a Mawla (●●●●●) until the end of the Session. You can maintain them each Session thereafter, but doing so requires them to be paid in a cumulative upkeep of five dots of Backgrounds, increasing by two additional dots each Session. These dots are unusable while committed. As soon as you dismiss these companies, those backgrounds return." },
        ],
    },
    {
        title: "Liminal Space",
        summary: "Throughout history there have been spaces with a foreboding feel—an uncannyness or underlying sense of unapparent danger. These Liminal Spaces are both haven and hazard, avenue and destination, where unreality feeds the uncannyness and causes these spaces to fold in on themselves without regard for geometry.",
        source: "Custom",
        requirementFunctions: [],
        merits: [
            { name: "Heterotopia", cost: [1], summary: "You gain a Heterotopia, a type of Liminal Space, as a Haven (●). Others who enter this Haven must make a Test of Resolve + Awareness (Interiors) or Survival (Exteriors); Difficulty equal to the Haven's Rating, else they become lost for an hour. Each other Background you purchase on this sheet increases the rating of this Haven provided by this Background by one, and you need no justification for purchasing Haven Addons for it, as they seem to simply exist." },
            { name: "Skeined Meandering", cost: [2], summary: "Your understanding of liminal spaces has altered your understanding of space itself. Add three dice to any navigational pools to escape a place or location (supernatural or not) and add that same bonus when attempting to lead others into a place they'll get lost in. Malkavians and Lasombra add five dice instead." },
            { name: "DOP", cost: [3], summary: "Sometimes things go missing. Objects vanish from usual places without cause or people get lost in a part of town they swear they know. You've found a pocket, where such things and people vanish too. Once per Story you can will yourself into a place full of lost things. When you do, roll your Willpower; Difficulty 2. For each Success beyond the margin, you gain an equal number of dots to spend across Resources or Herd. These backgrounds are once again lost at the end of the Story." },
            { name: "Transcursion", cost: [4], summary: "Thresholds are the divide between two places. Any two if you move the right way. Once per Story, you can make a Rouse Check and a Resolve + Awareness or Survival; Difficulty 3 Test as you pass through a doorway or another threshold, and out of sight. A Win causes you to simply vanish and reappear in another location within fifty yards/meters adjacent to the one you were in. A 1 or a 10 on the Rouse Check inflicts a Stain, and a Bestial Failure releases an Asterius from the place you would've appeared." },
            { name: "Failure of Presence", cost: [5], summary: "Liminality is not merely the place of in-betweens. It's a time. A moment where the predictive state of a location is disconcertingly incorrect. Empty malls, vast abandoned rooms, a beach town in the midst of Autumn. Once every other Story you can take a point of Aggravated Willpower Damage to enforce a Failure of Presence at a location for a single Scene. During this time the location will be populated only by you and those you bring with you or allow, as well as aspects and conjurations of Oblivion. This place also counts as a Heterotopia with a five dot rating for purposes of escape and navigation." },
        ],
    },
    {
        title: "Vanta Capital",
        summary: "Lasombra characters only. Founded in the 1960s by Alarico Varez, Vanta Capital rose to dominate both mortal and Kindred finance. When Alarico vanished, the firm was dismantled, but a shadowed figure seized control. You now oversee a regional branch of this financial weapon under the auspices of the Clan of Shadows.",
        source: "Custom",
        requirementFunctions: [isLasombra],
        merits: [
            { name: "Night Shift", cost: [1], summary: "Employees fear your authority, even if they secretly conspire to take your position. Gain a Retainer (●), Contacts (●), and Herd (●) which symbolize those that work under you. If you falter or show weakness, a subordinate will seize their chance becoming a secret (●) Enemy until cowed or replaced. Once per Story you can make Quick Hunts within your own office, however a failed hunt attracts the Board." },
            { name: "Performance Review", cost: [2], summary: "Your department heads claw for your approval even at the cost of one another. Create three departments that you oversee. Each is concerned with a Kine or Kindred operation (i.e. Legal & Compliance, Investments & Acquisitions, Relations, Blood Assets, Boon Auditing, or Risk & Analytics). Each Story one of these three departments outmaneuvers the other two, granting you Influence (●●●) associated with that department. This influence is lost at the end of the story." },
            { name: "Shadow Ledger", cost: [3], summary: "Your time at the company, both mortal and immortal, has allowed you to carve out a covert reserve in the form of hidden acquisitions, shell companies, and ghost assets. Gain four dots to distribute between Contacts and Resources, neither of which can ever be tracked or found by other Kindred unless you reveal them. Additionally, Projects made to increase the ratings in these two backgrounds have their base difficulties decreased by one. You must always stake these backgrounds in such projects." },
            { name: "Purchased Services", cost: [4], summary: "Vanta Capital isn't just a business for Kine affairs, it manages Kindred ones too —And it does it so well that it's frequently hired to attack other Kindred. Every other Story someone hires Vanta to deal with another Kindred in your area, and the order has been passed down to you. You can choose one of two paths: FOLLOW ORDERS: You execute the plan given to you. You gain a permanent dot in Retainer, Contacts, Influence, or Herd as payment. UNDERMINE THE OPERATION: You warn the target and ensure they can counter Vanta's move and they give you two Major Boons. Add two dice to any pools made against Vanta for the remainder of the Story. This includes projects made for the Shadow Ledger background." },
            { name: "Play for the Crown", cost: [5], summary: "You've uncovered a devastating blackmail in regards to the founder and the board of Vanta that might even result in their destruction if it came to light. Once per Story, you may leverage this to demand four dots in a Background of your choice. You can also use Vanta Capital itself as a Stake in launched Projects, where it counts as five dots. Those projects also finish in half the time they'd normally take due to Vanta's connections. However you gain Alarico Cardenal and the Board as Adversaries (●●●), though they won't move against you openly." },
        ],
    },
    {
        title: "Pupil of Professor Vidar",
        summary: "Treacherous tale of Professor Walter Vidar, whose mortal life was stripped away and replaced with the cold ambition of the Clan of Shadows. At the height of his power, you were his favored pupil. Now, in his absence, you inherit the bones of his empire—his wealth, his methods, his enemies.",
        source: "Custom",
        requirementFunctions: [],
        merits: [
            { name: "Magister's Strings", cost: [1], summary: "Part of your Sire's front was as a professor, and he was a good one at that. He's taught you quite a bit in the ways of protecting your tools and assets. When someone tries to investigate your Allies, Contacts, Retainers, or Mawali, their difficulties to do so are increased by 1. If they fail their roll you're tipped off by the end of the night, though you may not know who it was." },
            { name: "The Blue Dahlia", cost: [2], summary: "The Professor's empire began as a small smuggling operation using his own small yacht. As his influence and power grew, he left it moored. You've found it, and even though it's nearly eighty years out of date, it still runs quick and quiet as ever. Gain it as a Haven (●) with the Mobile (●) and Armory (●) addons. Tests to spot it at night have their difficulties increased by its Haven rating." },
            { name: "Shadows of the Past", cost: [3], summary: "When making connections or working with the underbelly of the Domain's criminal world, you can make the claim of being the Professor's legacy. You may purchase criminal Contacts at a rate of two Experience per dot, rather than three. However those Contacts know your affiliation with Vidar, and might use it as leverage should they run into trouble with the law." },
            { name: "Horrors of a Lawful Rat", cost: [4], summary: "A relentless hunter, a loose end, a problem. The Nosferatu Reeve that hunted down the Professor has an heir of her own, but times are tough, and the Domains are rife with conflict. The new Reeve connects you to an old Sabbat Ductus and a Camarilla mainstay. Gain each as a Mawla (●●). Once per Story the Reeve or one of these Mawlas will have a task that you need to solve which doesn't benefit you. If you pull this task off three Stories in succession, you gain the Reeve as a Mawla (●●) that'll look the other way or speak to Barons on your behalf." },
            { name: "The Eternal Empire of Want", cost: [5], summary: "You've cast a wide enough net that you now have connections that supercede Sect allegiance. You know what every Kindred in the city wants, and in the rare cases that you don't, you know who can get you that information. When you want to find out what another Kindred wants or how to get it, you may make an Intellect + Contacts; Difficulty 5 Test. You've also secured the empire of your predecessor so well, that even if your Character suffers Final Death, you can choose your next Character to inherit up to ten dots of your Backgrounds for free at creation of your new one." },
        ],
    },
    {
        title: "Qabilat al-Khayal",
        summary: "Lasombra characters only. The Qabilat al-Khayal harbor more genuine believers in God's existence than any other bay't within the Ashirra. Using the Odense Pact and the Vermillion Wedding, many now find themselves easy entry into the Camarilla Domains.",
        source: "Custom",
        requirementFunctions: [isLasombra],
        merits: [
            { name: "Dual Allegiance", cost: [1], summary: "The Ashirra is defined by its strong communal ties within both Islamic society and their role within Cainite politics. Your Fame and Status in the Ashirra also applies to the Camarilla, as well as the reverse." },
            { name: "Mercantile Nights", cost: [2], summary: "The Ashirra's power as a Sect was largely hinged on its vast network of trade. The Qabilat al-Khayal were key figures in founding this trade, and unlike their cousins in the Sabbat, held structure and organization in higher regard than personal success. Greatness in Status earned, rather than taken. Once per Story you can locate an Ashirran Merchant who will give you a free item worth Resources (●). You and those who arrive with you can purchase additional items from this seller." },
            { name: "Aptitudes for Greatness", cost: [3], summary: "Members of the Qabilat al Khayal are Embraced for talents in politics and combat, and they're usually taught such things in regards to Cainite society and inter-Sect conflicts. You gain the free specialty 'Enemies of the Ashirra' in Stealth, Subterfuge, and Politics. You can also purchase this same Specialty in any other skill. The first time each Story a pool that includes a bonus from that specialty critically succeeds, increase the associated Skill by one, up to a maximum of four, as you are struck with a more broadly applicable knowledge of that skill." },
            { name: "A Scorching Fast", cost: [4], summary: "Fasting and mental Discipline, regardless of religious affiliations, has always been a part of the Ashirra and their tenets. When you roll to resist Hunger Frenzy, it is always done at Difficulty 2." },
            { name: "The Shadow's Head", cost: [5], summary: "The Ashirra has designated you as a high-value member of the Sect. In most matters of local governance and politics, your judgement and direction is taken into account and will be backed by the Ashirra and its members so long as it doesn't undermine them. This is also respected by the Les Amis Noirs, who may even move their Blood Courts to support appeals of Bloodhunts and other events. You also gain Status (●●●●) with the Ashirra, and a Lasombra Mawla (●●●) who has direct connections with Les Amis Noirs, ensuring open communication between you and them. All of this also makes you the definitive avenue of communication between the Ashirrah, the Camarilla, and the greater interests of the Lasombra in your city." },
        ],
    },
    {
        title: "Edge of the Sword",
        summary: "Sabbat characters only. You were hardly a shovelhead when the warcries sounded. While the faithful marched to their Gehenna Crusade, you were left as vanguard. Amidst isolation, you evolved, adapted, survived. This isn't a Sect conflict—it's a war of belief, and you wage your personal crusade.",
        source: "Custom",
        requirementFunctions: [isSabbat],
        merits: [
            { name: "Mark of Caine", cost: [1], summary: "Using a blade, you can etch, or carve, your personal symbol into a place, object, or person. Those that see this symbol become wary of you, feeling it in their very Beast. They add one die to their Awareness pools, but you add two dice to your Intimidation pools made against them until they leave the mark behind." },
            { name: "Every Arsenal, a Home", cost: [2], summary: "You have waged this war long enough to know that belief alone is not enough to defend your holdouts, but weapons are. Lots of weapons. You gain a Haven (●) and each one of your Havens also has a number of dots in Hidden Armory equal to its rating for free." },
            { name: "Shovel Party", cost: [3], summary: "Not true soldiers, but weapons to be wielded in a war that never stops. Once per story, you may take two Stains and perform a Mass Embrace, creating a pack shovelheads (Mawla ●●●) under your command. Confused but fanatical, they serve as disposable shock troops. Add two dice to any pools made to command them, and for the purpose of Merits and Backgrounds, they count as your Pack. They are destroyed or scattered by the end of the Story if you don't purchase them with Experience, however doing so costs 2 Experience per dot, rather than 3." },
            { name: "In his Image", cost: [4], summary: "Fear is the strongest weapon in your arsenal. When you brutalize a Mortal to within an inch of their life, you may leave them for others to find. One or more Kindred connected to that Character will be frozen to inaction for the remainder of the story and refuse to make any moves at all." },
            { name: "The Fire Rises", cost: [5], summary: "A cadre of Cainites, disillusioned and unstable, adopt your methods, and commit violence in your name. As a result, tracking your movements or identifying your direct involvement is always done as a -2 Called Shot. Additionally,you gain Fame (●●●) with this group of disillusioned outcasts as your myth spreads among the angry and forgotten. Once every other Story you can incite a violent uprising using this group, which will distract any Sect or Mortal institution until the end of the night." },
        ],
    },
    {
        title: "Abyssal Mystic",
        summary: "Characters with Oblivion only. Part philosophy, part esoteric practice, the path of the Abyssal Mystic is concealed behind metaphors of watery depths and complex hues of morality. Following the first Lasombra who plunged into the deepest darkness to wrest the secrets of the Abyss.",
        source: "Custom",
        requirementFunctions: [hasOblivion],
        merits: [
            { name: "Distant Heart", cost: [1], summary: "The Abyss numbs the mind and weakens the body via their attachments to the physical. When you take this Background, you may reduce your Stamina by 1 if it is 2 or higher. If you do, increase your Composure by 1 (This affects their associated Trackers). A 1 or 10 on a Rouse Check that would grant you a Stain recovers 3 Superficial Willpower or 1 Aggravated Willpower (This occurs even if that Stain is prevented). However you no longer recover Willpower in regards to your Ambition, Desire, or Touchstones." },
            { name: "Drown the Beast", cost: [2], summary: "The inclinations of your Beast are an aberrant influence. Once per Story, when you Frenzy you may roll your Resolve + Oblivion in place of the typical pool to resist Frenzy. On a Win, you cast your Beast into your shadow causing it to Frenzy in your place. While in this Frenzy it gains your powers of Oblivion and can even detach to sew chaos elsewhere." },
            { name: "Ex Nihilo", cost: [3], summary: "Before the beginning there was nothing. No division of light and dark, warmth and cold, reality and illusion. Yet from this nothing everything was made. You can take Oblivion powers without their Amalgam requirements. If they require a rating in a Discipline you don't have in order to function, use your Occult rating instead." },
            { name: "Oubliette", cost: [4], summary: "Mystics inevitably pursue a deeper darkness, a departure from reality, a place where they can be forgotten by mundanity and meditate away from the disruptive forces of creation. You have such a place, where light never shines and cannot shine. This Oubliette counts as a Haven(●●●) and while you dwell there you cannot be found or affected by supernatural forces outside of it, such as Wraiths, Sorcery, or Auspex. This place can still be found, however." },
            { name: "Via Negativa", cost: [5], summary: "The Abyss is beyond all categories, attributes, or names. It is a thing that refuses the limiting attachments to definition and the chains of reality. Your Oblivion pools suffer no Dice penalties of any kind from anything. Ever. Add a bonus die to your Oblivion and Occult pools for each of the following: ⬛ Your Health is fully marked (Injury nears insubstantiality). ⬛ Your Willpower is fully marked (Exhaustion is emptiness). ⬛ Your Hunger is at 0 (A Beast as silent as the void). ⬛ Your Humanity is 4 or lower (Hollow soul, hallowed soul)." },
        ],
    },
    {
        title: "Les Amis Noirs",
        summary: "Lasombra characters only. Over the centuries, the Friends have steered the Clan in ways that ensure its survival and prosperity. In the Modern Nights, this society orchestrated the Lasombra's abandonment of the Sabbat and forged inroads with the Camarilla. You are being watched and judged for an invitation.",
        source: "Custom",
        requirementFunctions: [isLasombra],
        merits: [
            { name: "Relentless Drive", cost: [1], summary: "Under the watchful eye of the Friends of the Night, failure cannot be an option. Once per Story when you choose to spend Willpower to re-roll up to three dice, you may take a point of Aggravated Willpower Damage instead. If you do, add two additional dice to those that are re-rolled." },
            { name: "A Friend in the Night", cost: [2], summary: "An unknown benefactor within the Friends watches your actions closely, taking a grim interest in your victories and failures. You gain them as a Mawla (●●●). Once per Story they will grant you access to Allies (●●●), Contacts (●●), or Resources (●●) at a moment's notice. However, whenever you suffer a clear failure to achieve a goal, especially in regards to your personal ambition, the Mawla, and any background they provided, vanish until the end of the next Story." },
            { name: "Blood Judge", cost: [3], summary: "Within the Friends of the Night are the Courts of Blood. These judiciary courts are as ancient as the Clan itself, and serve as a way to pass judgement over the worthiness of the members of the Clan of Shadows, deciding whether they should exist, or be diablerized. Once every-other Story you are invited to sit in, or perhaps even judge, a fellow Lasombra. One that you may or may not know. Their failures are laid bare, and you may openly argue for their salvation or destruction, making a Series Test requiring three separate Social Tests at Difficulty 4. Should you win each Test the court will side with your argument. Additionally being someone who has been invited to a Blood Court grants you Status (●●) and Fame (●) with the local Court. Increase your Fame by one more each time you attend such courtly matters." },
            { name: "Night's Mandate", cost: [4], summary: "You've been handed genuine authority by the Friends in order to test your resolve. Choose a grand, but attainable, goal. All Lasombra in the city must work towards that goal. Those that fail to advance it are brought to the Courts of Blood for summary judgement." },
            { name: "Friend of the Night", cost: [5], summary: "You are a full member of the Friends and the avatar of the group's will in your city. Add three dice to your Leadership, Politics, and Intimidation pools. Other prominent Kindred outside your Clan value (or fear) your actions and judgement and will refrain from openly moving against you, and more readily offer and accept your boons as forms of payment or placation. When you interact directly with Lasombra, regardless of Sect, your Status is treated as one dot higher than there's, so long as they themselves are not also a Friend of the Night." },
        ],
    },
    {
        title: "The Weirdling Kiasyd",
        summary: "Kiasyd characters only. Kiasyd have a long history of being associated with fae-creatures, infernal gods, or cryptids of the dark. One thing is certain, these Weirdlings live up to their name, with older ones being tall, thin as a rail, with glowing skin and pitch-black eyes.",
        source: "Custom",
        requirementFunctions: [isKiasyd],
        merits: [
            { name: "Fictional Accounts", cost: [1], summary: "You carve fact from fiction on a somatic and instinctual level. Whenever you're in conversation with someone who knows they're consciously lying, you suffer a point of Superficial Willpower Damage. This can manifest in a number of very uncomfortable ways, such as a ringing in the ears, an ice-pick headache, or your hands cramping. You can choose to disable this effect at any time, preventing the ability to detect lies, but also the resulting damage." },
            { name: "Off-Seeming (Choose one or More)", cost: [2], summary: "Older Kiasyd were known for several strange and horrible qualities, and though these have diluted with generations, they still present themselves in you: BAOBHAN SITH: Your hair is raven black with a subtle iridescence and feathery pinions have grown from your scalp, you can extend black talon-like claws that count as +1 Brawl weapons. When dug into flesh they can be used to feed, conferring the effects of your bite. BLACK-EYED CHILDE: Your eyes are pitch-black, from sclera to pupil, and you gain the Folkloric Block Flaw that requires you to spend a point of Willpower to enter a home uninvited. However your vision-based Resolve pools suffer no penalties due to darkness and you add two dice to your Intimidation pools made whilst in other's homes. ZEERNEBITE: Infernalism flows strong in your heritage. You may learn Blood Sorcery at out of Clan costs without a teacher, however you must spend willpower equal to your Bane Severity to keep from being repelled by holy iconography, and your Weird Banality Flaw also triggers when touching such objects." },
            { name: "Arcane Alignment", cost: [3], summary: "You operate as a courier or go-getter in occult matters for other Kindred. Once per Story you're given a task to find an occult-related object or rite, usually by your Sire, but also from others in the city. This has made you well-connected in the local occult and collector scenes. Spend four dots across Contacts and Mawlas that are related to those subcultures." },
            { name: "Riddle Phantastique", cost: [4], summary: "Your mind works in twists and turns, spirals and knots. Once per Story you can make a Rouse Check to tell a captivating riddle or conundrum and roll your Intelligence + Manipulation; Difficulty equal to any listener's Willpower. A Win forces those who heard the riddle to contemplate it for the rest of the Scene. Non-mortals can end the effect early by spending Willpower equal to the margin of Successes on your roll." },
            { name: "A Fool's Trick", cost: [5], summary: "The elders of your Bloodline were said to mold the nature of their seeming by weaving a glamour so grand it could fool reality. Even using it to forget their nature as a Kindred. Once per Session, for a single scene, you can become a Thin-blood, reducing your Blood Potency to zero, losing all but one dot in a single Discipline, and gaining the Lifelike Thin-blood Merit. You may even be able to learn Thin-blood Alchemy, and it's learned as an in-Clan Discipline for the purpose of gaining and advancing it, and it only works while you're Thin-blooded" },
        ],
    },
    {
        title: "Ombre di Cristo",
        summary: "Lasombra characters only. Some Lasombra claim that their Clan Embraced Christ himself after his crucifixion. Those of this line record that a repentant Methuselah named Kyros was the most likely. The majority of this Bloodline are Embraced from those who have lost everything, but keep their faith strong.",
        source: "Custom",
        requirementFunctions: [isLasombra],
        merits: [
            { name: "Sanguis Convictionis", cost: [1], summary: "When a Mortal drinks a Rouse Check of your Vitae directly from the vein, choose one of your Convictions. It heals them of a chronic condition or permanent impairment (i.e. diabetes, blindness, or even a missing limb) for up to one month. However if they don't act in accordance with the chosen Conviction, their afflictions return by the end of the Scene, usually with increased severity, and they must drink from you again. You can cure a condition or impairment for each Conviction you have with additional drinks." },
            { name: "Venia an Damnatio", cost: [2], summary: "When someone lashes out against you for the first time each Story, you may choose to forgive or condemn them. If you forgive them you may roll your Humanity when resisting their Discipline pools in place of other stats. When you condemn them you may roll your Stains and unmarked Humanity in place of an Attribute when using your Disciplines against them." },
            { name: "Incorruptibilitas", cost: [3], summary: "Your Vitae cannot be changed into another substance and can't be used as an ingredient in Alchemy, Ceremonies, or Rituals. You are also immune to any effects that would rot or decay your flesh while under the Blush of Life." },
            { name: "Timor Reverentialis", cost: [4], summary: "Your close affiliation with religious institutions grants you nine dots to spend across Allies, Contacts, and Herd from that group. However you gain a group of deadly SI mortals as an Enemy (●●●) that know you're a Blankbody." },
            { name: "Zelus Renatus", cost: [5], summary: "Whenever you fail a Remorse Test, you may choose to have a crisis of Conviction, removing one of your Convictions until the end of the Story, but preventing the loss of Humanity. At the start of the next Story, the Conviction returns, but takes on a more inhuman and rigid theme, such as \"Salvation lay in repentance.\" becoming \"Salvation lay in suffering.\" or \"Leave the world better than you found it.\" becoming \"Remake the world better than you found it.\"" },
        ],
    },
    {
        title: "Angellis Ater",
        summary: "Lasombra or Baali characters only. Bloodline of Satanist Lasombra, who have taken the beliefs and sacraments of their Catholic Clanmates and twisted them into acts of rebellious infernalism. These \"Black Angels\" believe that Obtenebration's power comes from Satan himself.",
        source: "Custom",
        requirementFunctions: [isLasombraOrBaali],
        merits: [
            { name: "Guiltfeeder", cost: [1], summary: "You are an agent of Satan, with a thirst for corruption as much as Blood. Whenever another Character receives one or more Stains in your presence, you restore an equal amount of Health or Willpower, Superficial or Aggravated." },
            { name: "Demonic Tutor", cost: [2], summary: "The Black Church has long held an audience for any profane soul, however none were as unholy as the Baali, an ancient Assyrian Clan. You know of a Baali who is willing to teach you a deeply Infernal form of sorcery, allowing you to learn Blood Sorcery Powers and Rituals as Powers and Ceremonies of Oblivion instead. However the Baali will require you to do some hellish work that usually results in a Stain as payment." },
            { name: "Infernal Scarring", cost: [3], summary: "Ornate scars are marked across your upper back and down your spine. When you fail a Ritual or Ceremony Test, you may take Aggravated Health Damage equal to the margin of Failure to pass the Test, as your hellish Beast splits open the scars." },
            { name: "Profane Prayers", cost: [4], summary: "Once per Story you may pray to Satan and beg him to grant you power. The response wracks your soul with torment beyond even your imaginings, filling your unmarked Humanity Tracker with Stains. However his demonic providence allows you to use another background you have access to with a \"Once per Story\" maximum use effect an additional time this Session." },
            { name: "Damnation", cost: [5], summary: "It is your unholy calling to bring about the ruination of all that is right and just. Your black faith in the Prince of Lies makes any form of truth a mere falsehood of an oppressive divinity. Once per Story you can completely ignore the effects of True Faith for a Scene. While under this effect, blessed liquids boil, candles snuff, holy objects flash-heat to cherry red, and places of worship collapse to ruins as you manifest the wrath of Hell." },
        ],
    },
    {
        title: "Drowned Knights",
        summary: "Lasombra characters only. The Order of Saint Adjutor patrolled the shores and waters from Montpellier to Barcelona. These Knights moved their holdings to Palma and have slowly skewed their beliefs throughout the ages, infusing their Christian rites with their sea-based religion, worshiping the Sea as God.",
        source: "Custom",
        requirementFunctions: [isLasombra],
        merits: [
            { name: "A Knight's Menace", cost: [1], summary: "Before they became a group of Knights, your Bloodline was coldly composed in social engagements and vicious in conflict. While outside of physical combat your difficulties to resist Fury Frenzy are reduced by 2, but in combat they're increased by 2. Your shadow manifested by Oblivion always appears \"wet\" or \"drenched\", leaving behind dark moisture and sublimating with thin mist. Whilst in Fury Frenzy your shadow flickers and flashes, like clouds in a thunderstorm." },
            { name: "Tempestarii", cost: [2], summary: "Mortals that first became your Bloodline were tied directly to the Sea itself. When they became Christian Knights, this connection became the belief in a direct tie to God. A descendant of those Tempestarii has sworn an oath to you.They count as a Retainer (●●) that has a supernatural sense for storms and will perform a Ceremony that affects you as if you performed it." },
            { name: "Old Remembrances", cost: [3], summary: "The forebears of your lineage warred with civilizations since their dawn, and held weighty blades of near-inhuman size. The remembrance of their blood awakens in you while you hold similarly large and normally unwieldy arms. Choose a level 1 Animalism, Potence, or Oblivion power. While wielding a heavy melee weapon you gain that power as if you know it. Your level is treated as 1 for that power in regards to pools and ratings if you have no levels in it. Heavy melee weapons are Strength-based implements with a Damage Value of +4 or higher. Examples include sledgehammers, gas-operated chainsaws, steel beams, or the traditional Montante used by your order." },
            { name: "Thou Shalt Not Relent", cost: [4], summary: "Your order was formally founded as part of the Shadow Reconquista, which was a relentless crusade across the Belleraic Sea and the Iberian Peninsula to reclaim land. While in an enemy Domain, your Composure and Resolve pools are increased by 1" },
            { name: "The Salted", cost: [5], summary: "Your order has a long history of defending their holdings against all manner of Abyssal threats and Sorcery. Any Domain you're currently in, or defending, counts as two dots higher in its Portillon rating. This benefit is added even if the rating of an affected Background is already at its maximum rating. Additionally you gain five dots in Warding to spend across any Havens, even ones that aren't yours. You can redistribute these dots once per Story." },
        ],
    },
    {
        title: "Progeny of Gratiano",
        summary: "Lasombra characters only. Few Cainites have had as impactful a life as Gratiano. Born into wealth, quick to ambition, he plotted his Sire's destruction and succeeded via Diablerie. Though Gratiano never believed in legacy or lineage, you and his other descendants carry his blood and his talents for political upheaval and power.",
        source: "Custom",
        requirementFunctions: [isLasombra],
        merits: [
            { name: "Tongue of the Courtier", cost: [1], summary: "Gratiano played the role of the dutiful son before he committed patricide. Add a die to your Manipulations and Charisma pools made in regards to those whose authority or Status exceeds your own when showing obedience and concealing any true motives. When you betray a character you were previously obedient to, they become your Vendetta. When you defeat your Vendetta in Social Combat in a scene, you deal an additional point of non-halved Willpower Damage." },
            { name: "The Rebel's Call", cost: [2], summary: "Though the Lasombra hardly respect lineage or title, your blood gives you a gravitas that many Lasombra lack. You gain four dots to spend across Status and Mawlas in regards to Sabbat and Anarch Cainites, however you have an Adversary (●) in the form of a Lasombra seeking to take your head to buy their way into the Ivory Tower." },
            { name: "Fresh Opportunity", cost: [3], summary: "Like your line's progenitor, you not only seek out ascension, you act on it with a sharpened clarity. When a political position opens, or the chance at leadership presents itself, you may add four dice to the first pool you make to convince others that you're fit for the role." },
            { name: "A Certain Mastery", cost: [4], summary: "Gratiano was self-assured, even in the face of his elder siblings, and even in regards to his Sire. His mastery of the mental powers of manipulation gave him insights to thwart such powers as well. Like your ancestor, you are completely immune to the effects of Dominate and Presence powers you know." },
            { name: "Unfinished Legacy", cost: [5], summary: "Your blood carries a fragment of Gratiano's will—the iron resolve of one who defied the Lasombra Antediluvian and devoured him. You and those that taste your blood add two bonus dice to their Strength and Resolve Tests made towards Diablerie until they feed or reach Hunger 5. However those that successfully Diablerize you suffer an additional automatic Humanity loss." },
        ],
    },
    {
        title: "Ascetics of the Dark",
        summary: "Lasombra characters only. An Abyssal Bloodline with an anxious longing spiralling through their veins. These apophatic Kindred descend from unknown methuselahs who were Ascetics believing they could become tutelary deities via abstinence from light and warmth. They eventually make their own Pilgrimage to the Ādima Tamaḥ, the Primordial Dark.",
        source: "Custom",
        requirementFunctions: [isLasombra],
        merits: [
            { name: "Tutelary Rites", cost: [1], summary: "In life the Ascetics would travel abroad to freely teach their methods and masteries to others. This tutelary talent runs strong in your blood. You can teach Ceremonies you know to others, and when you do they learn them twice as fast and their costs to purchase with Experience are reduced to two per dot. Additionally you learn the Oblivion Ceremony Poet's Prose, even if you don't have the required Oblivion or the prerequisite power." },
            { name: "Beyond the Horizon", cost: [2], summary: "The pull of the unknown is constantly at the edge of your mind, you can open yourself to the whispering silence to drown out distractions and keep your mind steady. Your concentration cannot be interrupted as long as you wish to maintain it outside of provocations of Frenzy or if the interrupting effect is from a Critical." },
            { name: "Pilgrims of the Dark", cost: [3], summary: "Ādima Tamaḥ will be your final destination, and perseverance and survival on that journey requires physical and mental constancy that you've trained to endure. Once per Story, you may take a point of Aggravated Willpower Damage to pin a non-Hunger die to a 10 on all Willpower, Stamina, and Resolve Tests for the remainder of the Scene." },
            { name: "Nightless Night", cost: [4], summary: "The Abyssal depths boil within your skull. When you roll a pool that includes Auspex or Oblivion, you may pin one of your Hunger Dice to an automatic 10 and set it aside before rolling the rest of your pool. A Messy Critical on the roll causes the Abyss to spring forth into reality, manifesting as a dark doppelganger that actively works against you. This dark twin has all your Attributes, Skills, Disciplines, and Secondary Stats, however as a manifestation of Oblivion it suffers Aggravated Damage from direct bright light, and Superficial Damage from other light sources." },
            { name: "Poets and Elder Gods", cost: [5], summary: "You've come into contact with a descendant of the Scrivener, who you gain as a Mawla (●●●) that has three pages of the Scrivener's Manuscript. They will trade you a page in return for payment, usually in the form of at least one dot of Backgrounds or if you perform certain Powers or Ceremonies of Oblivion to help them, possibly even in combat. You can study a Manuscript Page to divine information that allows you to automatically pass any Resolve or Intelligence Test related to Oblivion. Each time you do this, the page becomes inert, and will offer no insights for the remainder of the Story." },
        ],
    },

    // Baali Loresheets
    {
        title: "Came Back Wrong",
        summary: "Baali or Hecata characters only. You died and died again, yet on the brink of Oblivion, something pulled you back - an entity claiming to be Nebiros, Marquis of the dead. With a powerful, eloquent intonation he offered you resurrection in return for your service.",
        source: "Custom",
        requirementFunctions: [
            (character: Character) => character.clan === "Baali" || character.clan === "Hecata"
        ],
        merits: [
            { name: "Fist of the Grave", cost: [1], summary: "Your body and soul writhe with tendrils of finality that wither even the insubstantial matter of Oblivion. When you Blood Surge your physical attacks, they can damage incorporeal beings, such as Wraiths, shadows of Oblivion, or other such entities." },
            { name: "Death Rite", cost: [2], summary: "Necromantic processions seep into your daysleep dreams. You learn the Oblivion Ceremony Gift of the Blood Pearl, even if you don't have the required Oblivion or Blood Sorcery, and once per Story when you use a Blood Pearl it automatically works with no Ceremony Test required." },
            { name: "In Nomine Nebiros", cost: [3], summary: "The Marquis tasks you with sending him the souls of those who were touched by the powers of the Outer Dark. Add three dice to any pools made to detect Infernalism in any character. Once per Chronicle, when you destroy a character touched by Infernalism, the lowest of your Stamina, Charisma, or Resolve is increased by 1, up to a maximum of 5." },
            { name: "House of Skulls", cost: [4], summary: "The location of your resurrection was a secreted place that a cult could operate in. You gain this space as a Haven (●●) with Ward (●). Wraiths who pass into these walls are trapped, and cannot leave without your say so, with some serving as Watchmen (●). However the place is also Haunted (●) by hellish sights." },
            { name: "Necroschism", cost: [5], summary: "You've learned to manipulate the strength of the infernal anchor that binds your soul to your new flesh. You may take a point of Aggravated Willpower Damage to split your body and soul apart. While a Wraith you are subject to the same rules and powers they are and cannot Rouse the Blood." },
        ],
    },
    {
        title: "Dealer of Needful Things",
        summary: "Baali characters only. You've quietly accumulated a stockpile of dangerous relics through trade, discovery, or perhaps more unsavory means. Now it's time to lay down roots and set up a shop for things people need. A mysterious vendor trafficking in strange, useful, forbidden objects.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Nicknacks", cost: [1], summary: "You seem to have an endless supply of small trinkets you give away to customers. You can sense when they are within two-hundred yards/meters of you, and those who take them have an inclination to listen to what you have to say, granting you +1 die to your Social pools to persuade them." },
            { name: "A Store Near You", cost: [2], summary: "The nature of your profession requires that you may need to, abruptly, relocate. Once per Story you can shutter your current location and move to a new one. This second location counts as a Haven (●●). Add one die to any pools made to sell something while in this Haven." },
            { name: "Devil's Paw", cost: [3], summary: "You always seem to have just the thing to solve a Cainite's problem, though it may come with unforeseen consequences later on. Once per night, provide an object that confers two bonus dice in a Skill towards a problem they wish to solve. However once resolved they suffer a two dice penalty." },
            { name: "Eclectic Collection", cost: [4], summary: "Your most valuable merchandise; Choose three Artifacts that you have in stock to sell. You can choose three more at the beginning of each Chronicle." },
            { name: "Cursed Curios", cost: [5], summary: "Everything you've ever sold now has an exceptional curse. At any time you can make a Resolve + Awareness; Difficulty 3 Test to get a brief glimpse of where the object is. While doing this, you may also spend a point of Willpower to provide the holder with a two-dice bonus or penalty to a skill." },
        ],
    },
    {
        title: "Sacrificial Descent",
        summary: "Baali characters only. Unlike your dull, reckless Clanmates, your lifeline to mortality isn't some trinket to be discarded in a crude offering. Your sire taught you the importance of sacrifice—that the corruption of what you need into something you can use is a ritual to grant power.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Dreams are Fleeting", cost: [1], summary: "You have begun the preparations with one of your Touchstones. Choose which, that Touchstone is Blood Bound to you, and you feel genuine affection for them. When you spend time with this Touchstone, add two dice to your Willpower Pools until the end of the next Session." },
            { name: "Such Delights to Show You", cost: [2], summary: "The emotional link to your Touchstones is a metaphysical tether, one that you can exploit. You can offer them a Devil's Bargain, if they accept they gain the usual backgrounds from it, and you can also burn your own Willpower to re-roll up to three of their Dice in a pool." },
            { name: "Prove Your Devotion", cost: [3], summary: "When you convince your Touchstone to perform an act that goes against their own convictions or beliefs, prevent any Stains you would gain from doing so. Additionally, if your Touchstone kills someone for you, you mend Superficial Health Damage appropriate for your Blood Potency, for free." },
            { name: "Mark of Conviction", cost: [4], summary: "As long as your Touchstone's Humanity is five or lower, their rotting soul opens them to physical corruption and at any time you can gain two Stains to transform them into a Marked One. This can be done even if they are nowhere near you." },
            { name: "Nooo Not Me!", cost: [5], summary: "The time to harvest the fruits of your corruptive labor has come. You can drain a Touchstone completely. Doing so grants you any Stains typical to harming and killing a Touchstone, however your Blood Potency is increased by 1. If you lose Humanity as a result of Stains gained from doing this, increase a Discipline's level by 1 as well." },
        ],
    },
    {
        title: "Den of Sin",
        summary: "Baali characters only. Since time immemorial, certain places have been marked by the calamities of their age. With your blood, now tainted by the might of infernalism, you can chart a path to the outer dark through acts of excess and debauchery.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "A Taste for Everyone", cost: [1], summary: "Increasing depravity within your den increases the available clientele. You gain your clients as a Herd (●). This Herd's rating is increased by one for each other Background you purchase from this Loresheet." },
            { name: "It Grows on You", cost: [2], summary: "Your Den of Sin has a strange life of its own, feeding on the withering humanity and growing in size and ability. Once per Session, when someone dies in a gruesome way within the walls of the Den, you gain a free dot to spend on its Haven rating, or an addon of your choice." },
            { name: "Powered by Damnation", cost: [3], summary: "Your clients unquestionably lose something when partaking in your offerings, but you on the other hand have gained power. Add two dice to your pools to temp others, and when they partake, add an additional die to one of your Discipline Pools for the remainder of the Session." },
            { name: "Warping Reality", cost: [4], summary: "Your Den of Sin has attained a level of connection with the Outer Dark, allowing you to subtly influence reality as its corruption pours forth. Once per Story you may warp reality within your Den, you may reroll any failed Social or Mental pools within the Den or automatically succeed on a single action involving mortal." },
            { name: "Patron of your Establishment", cost: [5], summary: "Your den of sin has become a nexus of infernal power and remarkably a lesser demon has manifested on its own accord. Choose a Demonic Entity and gain its mark immediately. It will treat you as its favored, though it also pursues its own strange ambitions." },
        ],
    },
    {
        title: "Heretic",
        summary: "Baali characters only. Within the Clan of Devils there exists a group of those who believe the original purpose of the Clan was not to awaken the ancients, but instead to commit any atrocity necessary to keep them asleep, to bar their way, to prevent their incursion into our world.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Solemn Temerity", cost: [1], summary: "You have borne witness to, or even spoken directly to, the source of infernal power. Once per Session, you may add 1 die to resist Terror Frenzy, if that Frenzy was triggered by an Infernal power, add 2 dice to resist instead." },
            { name: "A Task Greater than You or I", cost: [2], summary: "Your duty is a grim one, but one that must be done. Once per Story, when you roll to convince another that what you do, no matter how awful, is done for the good of the world, you may completely re-roll that Dice Pool." },
            { name: "Confidant", cost: [3], summary: "A fellow Cainite is wholly invested in your aims, having also witnessed the powers of the Outer Dark. They count as a Mawla (3) that will always assist with your Dark Sacrament, however they've drawn the attention of an Infernal Adversary (2)." },
            { name: "The Victim Soul", cost: [4], summary: "Things in the dark hunger for innocence more than anything. Once per Chronicle you can spend an hour meditating to find a mortal that is entirely pure or heart, spirit, and body. Sacrificing this individual as part of your Dark Sacrament thoroughly satiates a Child of the Outer Dark, and they will nullify the effects of an Blood Ritual or Ceremony of Oblivion outright for the remainder of the Story." },
            { name: "Dragonfall", cost: [5], summary: "You know of a Nexus of Leylines, bored into the earth by some cosmic fall. You've sworn to protect this site at all costs as Ceremonies and Rituals performed here have their Dice Pools increased by four, and any Infernalist who catches wind of it will use it to herald a powerful demonic incursion." },
        ],
    },
    {
        title: "Hunter Pawn",
        summary: "Baali characters only. The will of the outer dark is unknowable and unquestionable. For centuries, your cult has identified those with the potential for true faith and ensured they never unlock that power. Your role is to twist their lives into ones of obsession and hatred.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Mind Games", cost: [1], summary: "You understand the minds of those who seek to destroy you. Add one bonus die to Social and Mental pools when you attempt to ascertain their next move." },
            { name: "Indebted Tempter", cost: [2], summary: "You've ensnared a charming individual who will do anything to escape your grasp. They count as a Gifted Mortal Retainer (●●●●) with high Charisma and at least one Discipline Power. They are free-willed and will actively try to undermine you, however you possess an infernal contract that ensures they can't harm you." },
            { name: "Ritual of Adversity", cost: [3], summary: "Hate is powerful. By targeting the loved ones of those with divine potential, you draw them into darkness. You can ritualistically kill a loved one of a Storyteller Character with divine potential. This gains you a new Enemy (●●) as a Dark Bargain, allowing you to purchase two dots of advantages." },
            { name: "Strayed from the Path", cost: [4], summary: "Each corrupt act further molds a Chosen into your tool. Every time you successfully manipulate a Chosen into accumulating corruption or breaking their morals, their Déchéance rating increases. Upon reaching four, the hunter becomes a potent Dyscrasia." },
            { name: "The Adversary", cost: [5], summary: "The time has come to begin the final steps to usher in the Adversary. Once per chronicle, you may trigger the Chosen's transformation into the Adversary, provided they have committed sufficient atrocity or corruption as deemed by the Storyteller." },
        ],
    },
    {
        title: "The Lords of Red",
        summary: "Baali, Malkavian, or Thin-blood characters only. The post WWII era was defined by a massive surge in construction in Boston. Workers began to hear a strange hum resonating through the tunnels, which caught the attention of a Baali, creating the Red House.",
        source: "Custom",
        requirementFunctions: [
            (character: Character) => character.clan === "Baali" || character.clan === "Malkavian" || character.clan === "Thin-blood"
        ],
        merits: [
            { name: "More and More Now", cost: [1], summary: "You are a recognized member of the Red House with some standing. Once per Story you can call an Ally (●) to automatically assist you in anything you require. This Ally's effectiveness rating is increased by one dot for each other Background you purchase from this Loresheet." },
            { name: "You Want To Dream", cost: [2], summary: "You gain a Thin-blood Mawla (●) who serves the Red House, and can concoct the hallucinogenic drug, Blackburn. Unlike other Cainites who are affected by the drug, the Skill bonuses are not inverted for you. You can get a dose of Blackburn once per Story." },
            { name: "The Name of the Sound", cost: [3], summary: "You have personally gazed into the Red, the realm of the eponymous Lords, and it has resonated within you, allowing you to sense spiritual vibrations. Add three dice to any pools made to hear, and your powers of Auspex can be performed even if you only hear the target." },
            { name: "The Thunder Song", cost: [4], summary: "You have listened to the words of the Lords of Red for long enough that you have remembered their strange uttering phrases. You can become their speaker, pouring out their distorted word salad. Doing this for at least two full turns while afflicted with a Compulsion allows you to spread that Compulsion to Cainites who hear you." },
            { name: "You're in New You", cost: [5], summary: "Your skin has been marked with rippling black geometric patterns, which turn a deep red as your Hunger increases, and they can be used to manifest your powers of Oblivion as if they were shadows. You gain an effect based on your Clan." },
        ],
    },
    {
        title: "Mitéra Pollón",
        summary: "Baali characters only. Born from Khohfshiel, known to future occultists as Mitéra Pollón, meaning Mother of Many, her techniques are a fusion of the ancient rites of the First Tribe and more recent teachings of necromancy and thaumaturgy.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Flystrike", cost: [1], summary: "Scratches that Mitéra Pollón would inflict would fester and rot. When you Blood Surge an unarmed attack made with your nails, the wound infests with maggots, causing the victim 1 point of Superficial Damage each sunset. On the third sunset, the wound births a Vile Swarm under your command." },
            { name: "A Gathering of Ills", cost: [2], summary: "The title 'Mother of Many' not only reflected her power over unnatural hordes but also her strange attraction to society's ailing. These unfortunates flock to you as well, granting Herd (●●●). Unlike a typical Herd, they restore every two weeks, even if you kill them, and few will miss them when they're gone." },
            { name: "Inner Script", cost: [3], summary: "To lend power to her rites of summoning, Mitéra Pollón would peel back her skin and write their words on the inside of her flesh. Once per Chronicle, you may repeat this process and choose a Ritual or Ceremony you don't know that creates a minion with a Stat Block." },
            { name: "Army of Darkness", cost: [4], summary: "Any creatures created from your Disciplines, Rituals, Ceremonies, or from the Backgrounds on this Loresheet have their Health Tracker increased by your Occult, however all such creatures count as having your Bane." },
            { name: "Mother Made", cost: [5], summary: "Mitéra Pollón unintentionally achieved demonic apotheosis in the 18th century. You have learned fragments of her ritual. Once per Chronicle, perform the night-long process of wrapping another in layers of your dead flesh, making a Stamina + Resolve or Fortitude; Difficulty 4 Test. On a Win, Cainites become Baali Apostates, while Mortals become Marked Ones that obey your commands." },
        ],
    },
    {
        title: "Protégé of Laurence Cadwell",
        summary: "Baali characters only. Laurence Cadwell is infamous in many Baali circles. Seen as an aspiration by some, he is an accomplished Infernalist that has spent centuries scouring the earth for secrets and knowledge, all to achieve Demonhood.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Infernal Accolades", cost: [1], summary: "To understand the Pithos is to understand Laurence Cadwell. It tested your mind and resolve and you may telepathically communicate with him via the Pithos with an Intelligence + Occult; Difficulty 3 Test. Also, Difficulties to solve puzzles are reduced by 1 for you." },
            { name: "Jealous Follower", cost: [2], summary: "You know another follower of Cadwell, something that considers him a Cainite Celebrity, and is likely blood bound to him. Due to you being his protégé, you gain them as a Contact (4), however when you do too well, this Contact becomes jealous, turning into an Enemy (●)." },
            { name: "Coming Up Roses", cost: [3], summary: "While many may suspect you of foul play or infernalism, you always have a talent for emerging unscathed, just like Cadwell. Once per Story, you can automatically pass a Test to convince a single Cainite of your innocence in regards to Infernalism." },
            { name: "Whispering Relic", cost: [4], summary: "You can create an artifact that allows you to communicate quietly with whoever is holding it. It can also broadcast your Presence powers. When you speak through this relic, it sounds almost like an internal voice to the one who holds it." },
            { name: "Demi-Fiend Ascension", cost: [5], summary: "Once per Story you can attempt a complex Ritual that will lead to a partial ascension to Demonhood. This Ritual requires a profane location and passing an Intelligence + Blood Sorcery or Oblivion; Difficulty 12 Test. The difficulty on this Test is reduced by 3 for every catastrophic event that's taken place during the Chronicle." },
        ],
    },
    {
        title: "The Shadow of Goratrix",
        summary: "Baali or Tremere characters only. Before the fall of the Vienna Chantry, House Goratrix was despised. Known for delving into forbidden, reviled, and damned spellcraft, they served as intermediaries between the Pyramid and the occult, including the Sabbat and Infernalism.",
        source: "Custom",
        requirementFunctions: [
            (character: Character) => character.clan === "Baali" || character.clan === "Tremere"
        ],
        merits: [
            { name: "Warlock at Heart", cost: [1], summary: "You've frequented occult circles enough that you know the basics of Tremere life. Add two Dice to any pool that allows you to pass for a non-Infernalist Tremere. If one of these Tests ever Fails, you gain the Suspect Flaw (●)." },
            { name: "Anesidora's Folly", cost: [2], summary: "You have in your possession an unearthly artifact of demonic origin or affiliation. Its hellish properties add Dice to your Ceremony and Ritual Tests while you have it on you, but any Stains gained from those processions are doubled." },
            { name: "Eyes of Goratrix", cost: [3], summary: "Your relationship with your Mawla has sparked interest from others of the House, and the free Mawla gained from this Loresheet is increased to a four-dot group of Tremere. You also gain Influence (●●) in the local occult scene." },
            { name: "Lost Canon", cost: [4], summary: "You have a great occult library somewhere. You can learn two three-dot Rituals of your choice for free, even if they exceed your current Blood Sorcery level, and learning new Rituals takes half the time while in this Library." },
            { name: "The House to Order", cost: [5], summary: "Your services to House Goratrix have become a fundamental part of how they accumulate knowledge and amass standing in the Domain. Once per session, you can spur the House into action to facilitate your success against a rival." },
        ],
    },
    {
        title: "Shepherd of the Lost Flock",
        summary: "Baali characters only. Despite whispers of Shaitan stirring and nests fortifying their old holdings, the Clan of Devils has seen little unifying figures in the modern nights. That will change with you. You spread your influence and infernal teachings outwards.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "The Crook", cost: [1], summary: "You hold sway over the hearts and minds of your cult, guiding them and defending them at your discretion. Add a bonus die when Socially interacting with your cult. Add one more to members who are one of your free Backgrounds gained as part of this sheet." },
            { name: "Heeler", cost: [2], summary: "There's an especially competent member of your cult that's always there to solve a problem at a moment's notice. They count as an Ally (●●●) that always appears within an hour when called on, however each time they do something for you, you must make a Manipulation + Intimidation or Occult; Difficulty 3 Test to keep them under your thumb." },
            { name: "In Nomine Ducis", cost: [3], summary: "The demonic patron of your cult has grafted its blessing into your very flesh. When you take this Background choose two from Insight, Intimidation, Leadership, Performance, or Politics. You gain the Specialty 'Cultists' in the chosen Skill and may purchase additional dots in them at two experience per dot." },
            { name: "Bound in Blasphemy", cost: [4], summary: "Your patron in the Outer Dark has threaded their infernal influence through you and woven it through each of your flock. Choose a Discipline and a power in it that you know. Your cultists gain a dot in that Discipline as well as the power." },
            { name: "Blessing of the Gerasene", cost: [5], summary: "Your cult isn't a mere extension of your will, it is as much a part of your dead flesh and seared soul as your limbs and fangs. You can enter in a Torpor-like slumber and assume direct control of anyone that's been officially inducted into your cult." },
        ],
    },
    {
        title: "Touched by Flame",
        summary: "Baali characters only. Ever since childhood, you have been obsessed with fire. You would spend hours staring into the flames, your makeshift pyres burning higher and brighter with each new attempt. You suspected it wasn't as miraculous as others believed, as you could hear the mad whispers of the flames.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Embrace the Flames", cost: [1], summary: "You have always felt more at ease near the flames even as they threaten to consume you. Your Difficulties to resist Frenzy instigated by fire are reduced by two." },
            { name: "Voice in the Flames", cost: [2], summary: "You've learned to commune with those who have perished in fire, trapping their souls within the flames that took their lives. Once per Story you can Rouse the Blood and ignite the ashes or remnants of a fire that killed someone. Their writhing form manifests in the flames." },
            { name: "Baleflame Invocation", cost: [3], summary: "The nature of fire has changed in you, and so you can exude that change upon open flame. You can plunge a bare limb into an open flame, taking Aggravated Damage in the process, but turning that flame into Balefire." },
            { name: "Baptism of Fire", cost: [4], summary: "Just as you were chosen by the flames, you can mark another. Once per Chronicle you can sear a rune to ignite a sacrificial fire. If the building or area succumbs to the flames, only one survivor will emerge, bonded to you by the fire's dark will." },
            { name: "Wickerman", cost: [5], summary: "You have mastered the art of creating a Wickerman, a construct designed to trap living souls inside. When set ablaze with Balefire, it exerts supernatural control over all flames in the surrounding area. By rousing the blood and making a Manipulation + Occult roll, you can command nearby fire to obey your will." },
        ],
    },
    {
        title: "The Vessel",
        summary: "Baali characters only. For centuries, your cult has been dedicated to serving an aspect of the outer dark. You and your fellow cult members nurtured this entity, preparing for the day it would cross into your world. Now the burden falls solely on you as the last remaining vessel.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Compulsed to Success", cost: [1], summary: "The demonic creature coils within your skin, capitalizing on failure, and exploiting your will to overcome that failure. While under the effects of a Compulsion, you add an additional die to all pools that aren't penalized by that Compulsion." },
            { name: "Infernal Critical", cost: [2], summary: "Your Beast struggles for expression and freedom, only to be quelled into silence by something far older. Once per Session, when you get a Messy Critical, you may add an additional number of Successes equal to your Bane Severity, as the demon within triggers a hostile takeover." },
            { name: "Obedient Reflection", cost: [3], summary: "The glorious being within you is close to reality, and obedience to its demands is rewarded. Follow the demon's chosen obedience—even if it isn't present—by treating a reflection of yourself as if it were the entity. This grants you its Mark until the next night." },
            { name: "Supernatural Blindness", cost: [4], summary: "Those who attempt to peer behind the veil and know your true intent will find only the demon waiting for them. Anyone who fails an Auspex roll made against you loses access to their powers of Auspex for the rest of the night. Other supernatural entities like Wraiths avoid you outright." },
            { name: "Demon Manifestation", cost: [5], summary: "The being within you is no longer content to remain hidden. Once per Story, you may manifest your Demonic Patron. While you don't necessarily have direct control over this manifestation, you can choose when and where to employ its presence." },
        ],
    },
    {
        title: "Wormtongue",
        summary: "Baali characters only. Never has a member of the Clan of Devils been accused of being earnest or genuine. However, some Baali have perfected the art of subterfuge and manipulation, becoming supernaturally insidious and spreading unease and corruption into the very fabric of the Domains they frequent.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Perfidious Sage", cost: [1], summary: "Corruption is to be introduced into the minds of others as a measured act. When someone comes to you for advice or wisdom, add two dice to your Persuasion or Subterfuge pools during that Social exchange." },
            { name: "Inter-Clan Empathy", cost: [2], summary: "Throughout the history of Cainites, there have always been Baali who preferred and manipulated specific Clans over the others. Choose another Clan, a member of that Clan has become infatuated with you and counts as a Mawla (●●). Your Mental Discipline Powers suffer no penalties when used on the chosen Clan while they are in Frenzy or if you have a Compulsion." },
            { name: "Persecution Preparation", cost: [3], summary: "The repeated destruction of your Clan has resulted in practices of cultivating groups that can serve as a deflection, or pariah. You gain a group of impressionable Caitiff as a Mawla (●●●). If ever you need a scapegoat for your Infernalism, you can choose to have these clueless Cainites take the fall for you." },
            { name: "Alluring Form", cost: [4], summary: "Some of your line claim that the Baali were Sired by the Eldest, who tossed his ancient blood upon your ancestor's broken body as a mere afterthought. After slaking at least two Hunger when feeding directly from a victim, you may Rouse the Blood to shift your form to appear as a loved one of that victim for a single scene." },
            { name: "Crisis of Conviction", cost: [5], summary: "So insidious are your ways, that you can alter the very principles a Cainite lives by. When a Cainite suffers a Stain and they come to you for solace, they add three dice to their Remorse Check, however you can speak a pale whisper into their ear as they lament." },
        ],
    },

    // Bloodline Loresheets
    {
        title: "Bel-Karash's Tyranny",
        summary: "Bloodline; Baali or Ventrue characters only. In the time of the first cities, there existed the Ventrue Methuselah, Bel-Karash. Ruling with a draconian order, his laws were righteously enforced without exceptions. Having barely survived a rebellion, Bel-Karash fled and sought forbidden nest of exiles–Baali.",
        source: "Custom",
        requirementFunctions: [
            (character: Character) => character.clan === "Baali" || character.clan === "Ventrue"
        ],
        merits: [
            { name: "Grovel at my Feet", cost: [1], summary: "The first time each Session when someone shows you deference, by means of a bow, salute, or takes a knee, you recover a point of Willpower. If they did so out of genuine fear, recover two points instead." },
            { name: "Below My Notice", cost: [2], summary: "The slights of the wretches are rarely heard, and even more rarely valid. When your roll ties in Social Combat, you add an automatic Success, breaking the tie. Even when you lose a Contest in Social Combat, you take 1 less point of Willpower Damage before halving, down to a minimum of 1." },
            { name: "In Nomine Rex", cost: [3], summary: "You've been crowned by the golden god of Kings. Characters who have at least four Aggravated Willpower Damage will obey any command you give them, to the letter, not having the ability to resist. Your Dominate powers can even command those in this state against their very nature." },
            { name: "A King's Ransom", cost: [4], summary: "Your patron ensures all the small endeavors you make pay out, so long as you pay your respects of course. You have an ancient throne, made of gold. Once per Story you may bring a Character with greater Fame, Status, or Resources than you to its location." },
            { name: "Tyrant's Decree", cost: [5], summary: "Your blood is rife with a Tyrant's pedigree, and even though it may be weaker than your Elders, it still holds the power to bend them, break them. Once per Chronicle you gain a Level 5 Dominate Power of your Choice. This power automatically Succeeds on anyone who is one of your Backgrounds." },
        ],
    },
    {
        title: "Children of Huitzilopochtli",
        summary: "Bloodline; Baali characters only. Descendants of the ancient Baali who took up the mantle and status of the Aztec war god, Huitzilopochtli. These Infernalists used the beliefs and traditions of the Mexica Tribe to entrench themselves as divine agents.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Left-handed Mediator", cost: [1], summary: "Huitzilopochtli has sent a shadowy hummingbird to keep tabs on you from night-to-night. This dark creature counts as a Retainer (●●) that can speak and communicate with any other Children of Huitzilopochtli in ancient Nahuatl." },
            { name: "The Flower War", cost: [2], summary: "As the Aztec Empire began its descent in the face of invaders, famine, and plague, they sought to placate their masters through Ritual Wars. You are a member of the new Flower War called by Huitzilopochtli. Once per story you can call for a confrontation between your Coterie and Allies, and an enemy group." },
            { name: "Xiuhcoatl", cost: [3], summary: "TLENAMACAC You have been chosen by Huitzilopochtli to become a Fire Priest, and have been gifted an obsidian dagger. QUAUHTECA You have been chosen to become a venerated Eagle Warrior, and have been gifted a wooden sword embedded with obsidian." },
            { name: "Sacramental Humors", cost: [4], summary: "You know the rite of the four humors, which requires you to remove four hearts, one of each resonance, and offer them to Huitzilopochtli before consuming them. Doing this increases your Blood Sorcery rating by 1, up to 5, and grants you a new power at your new maximum." },
            { name: "Cuauhocelotl", cost: [5], summary: "A venerated Eagle Knight of your deity has arrived in your City to aid you. It counts as a Retainer (●●●●●) and while it will aid in your efforts, it also has its own instructions and a greater design that you will likely never be privy to." },
        ],
    },
    {
        title: "Dark Apostasy",
        summary: "Bloodline; Baali characters only. Not all members of the Baali were Embraced as such to begin with, whether it be through guile or willingly giving into the temptation of infernal power, a Kindred can find themselves 're-Embraced' into the Clan of Devils.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Infernal Accolades", cost: [1], summary: "Apostates are considered new blood, a mix up from the main Clan of the Baali, and so they are regarded as being able to approach Infernalism with unconventional insights. Whenever you impress another Infernalist, restore a point of Willpower. However disappointing them invites their wrath." },
            { name: "Friend from Fool", cost: [2], summary: "A member of your original Clan is completely unaware of your Embrace into the Baali. They count as a Mawla (●●) that trusts you implicitly and will always put their own reputation on the line. Even when given hard evidence of your Infernalism, they will stay by your side." },
            { name: "In Nomine Primi", cost: [3], summary: "Through diabolic research or infernal intuition, you have learned a single glyph of a demon's True Name. By using your Vitae to inscribe this glyph on the floor of a small space. You may kneel before this glyph and utter your Sire's name, forcing them to make a Willpower Test; Difficulty equal to your Occult to resist being beckoned to the location of the glyph." },
            { name: "Clans Within Clans", cost: [4], summary: "You know exactly what your previous Clan's desires are, what irks them, what boils their blood. Add an additional Die to any Tests made towards inciting a Fury Frenzy in those of lower Status than you that are a part of your original Clan." },
            { name: "Advent of New Blood", cost: [5], summary: "The Infernal power of your Blood has become strong enough to beget Childer in your own making. When you Embrace, your Childer inherits your in-Clan Discipline spread as their own, having both your original Clans Bane, as well as the Baali Bane." },
        ],
    },
    {
        title: "First Born of Gehenna",
        summary: "Bloodline; Thin-blood characters only. In these modern nights, the Final Nights, the Thin-Bloods are seen by Infernalist Cainites as omens of the world's inevitable destruction. They are drawn into dark tutelage, learning the truths of the Outer Dark.",
        source: "Custom",
        requirementFunctions: [
            (character: Character) => character.clan === "Thin-blood"
        ],
        merits: [
            { name: "Volatile Volantis", cost: [1], summary: "Your blood harbors life, warmth, and the burning dark within it. Using your blood as an ingredient in Thin-Blood Alchemy, Ceremonies, or Rituals, adds an automatic success to the result, however a Critical on that roll is always treated as Messy." },
            { name: "Saturnian Upheaval", cost: [2], summary: "Limitation, transformation, succession. You are the process made to challenge and change the mundane into glory. You can rally your fellow Thin-Bloods in an attempt to cause a major disruption, such as a blackout or structural collapse." },
            { name: "In Nomine Veritatis", cost: [3], summary: "There is a truth behind the curtain of reality. You are their antenna, converting the vibrations into true sight. Once per Story, you can perceive any falsehood or a contrivance of Blood Sorcery or Mental Disciplines, adding six dice to resist the effect." },
            { name: "The Horn of Abraxas", cost: [4], summary: "You have a flute made from strange porous stone. Once per Story, you can blow the horn in the remote wilderness to summon the Black Skulls, a group of Marked Ones that will heed a single command, but require a payment of enough Blackburn for their group, as well as a mortal." },
            { name: "Infernalis Macula", cost: [5], summary: "You have been stained by the Outer Dark, or something out there somewhere. Baali and other Infernalists will recognize this conceptual bruise immediately upon seeing or hearing you. You gain all Baali as a Mawla (●●●), as well as Fame (●●●) with them." },
        ],
    },
    {
        title: "Flesh of Chernobog",
        summary: "Bloodline; Baali or Tzimisce or Gargoyle characters only. The creator of the Tzimisce is frequently referred to simply as 'The Eldest'. Eventually granting the dark gift to a powerful Koldun who would become Byelobog. After his most cherished Priestess was sacrificed to the Outer Dark, The Eldest Embraced the Infernalist, who quickly took the name Chernobog.",
        source: "Custom",
        requirementFunctions: [
            (character: Character) => character.clan === "Baali" || character.clan === "Tzimisce" || character.clan === "Gargoyle"
        ],
        merits: [
            { name: "Shape of the Father", cost: [1], summary: "Your flesh can be slightly altered at will, becoming an obvious breach of the Masquerade, and a pretty clear sign of your Infernal nature to anyone with Occult 4 or higher, but granting +1 die to your Dominate, Blood Sorcery, or Protean pools." },
            { name: "Reactive Chimera", cost: [2], summary: "The infernal nature of your blood mingles with your protean flesh, causing it to alter in shape to give you whatever transformations you need to resist. Add two dice to your defensive pools in Contests against Physical Pools." },
            { name: "Defiler of Flesh", cost: [3], summary: "Even without the conscious mastery of Fleshcraft, those of Chernobog's line can make a Rouse the Blood to mold another's flesh with an extended touch to imprint a scar that bores down to their very soul. Those marked by this power treat their Humanity as 1 lower." },
            { name: "Overblesser", cost: [4], summary: "Chernobog held the shaping of flesh, soul, and mind as a divine act. The penultimate ritual of this doctrine is the Overblesser, a living altar made through the union of five mortals conjoined through thread or Fleshcraft, and force-fed nothing but blood for three consecutive nights." },
            { name: "Mark of the Black God", cost: [5], summary: "You can peel off a piece of your own skin and graft it to a Mortal. This flesh will grow exponentially into a tumorous mass, conferring a Physical Attribute penalty of -1 that increases by -1 more each night until it's removed, or until the victim becomes immobile." },
        ],
    },
    {
        title: "Husks of Azaneal",
        summary: "Bloodline; Baali or Lasombra characters only. Azaneal is a figure of terrible importance within the canon of the Baali. Some claim he is the original Shaitan. What is for certain is that Azaneal rose in the 11th century, claimed himself true Shaitan, and called the Baali to his sovereignty.",
        source: "Custom",
        requirementFunctions: [
            (character: Character) => character.clan === "Baali" || character.clan === "Lasombra"
        ],
        merits: [
            { name: "Targeted Redaction", cost: [1], summary: "Azaneal's Childer were cursed with infertility, however they found a concept, a ritual, a decree of the Outer Dark. What is taken is made yours. You cannot Embrace, and were not Embraced. You were taken into the darkness and what you were was stolen. You only ever roll a single die for your Remorse Tests." },
            { name: "Different Times", cost: [2], summary: "The Second Inquisition now makes open conflict impossible, forcing you to alter your hunting methods. You gain a bonus based on your Clan, with Lasombra Apostates gaining both benefits. These bonuses are doubled during hunts: BAALI Your specialties in Subterfuge add an additional die. LASOMBRA Your specialties in Stealth add an additional die." },
            { name: "A Distant Pull", cost: [3], summary: "Your forebears walked the halls below Chorazin, a place so profane that it is said to be closest to Hell. You have a sense for such cursed places, knowing where any are within 1 mile/1.5 kilometers and being able to identify their Décheance rating simply by sight." },
            { name: "Until Its Return", cost: [4], summary: "In the ancient days, Azaneal bartered occult secrets with the Angellis Ater, a group of Lasombra Infernalists. One such individual has sought you out, and will do any dirty work you request so long as you teach them Infernalism." },
            { name: "Thin Precipice", cost: [5], summary: "Your war is too dangerous to pursue, but too dangerous to disregard. Once per Chronicle, when you move into overt conflict with another large group, you have access to eight dots to spend on emergency Backgrounds that can aid you. Success or failure, these Backgrounds completely vanish at the start of the next Session." },
        ],
    },
    {
        title: "Knights of Teeth",
        summary: "Bloodline; Baali characters only. In the 13th century, the French Crown fell into massive debt to the Templar Knight. King Philip IV of France instead sought to disband the order entirely, accusing them of heresy. A small company of such Knights, hearing the whispers of salvation from the jawbone of a goat, fled across the southern sea to Utica.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "A Knight's Blood", cost: [1], summary: "Your very blood holds the processions of your origins in it, and you are willing to perform them with brutal efficacy. You add two dice to Rituals and Ceremonies for each Stain they would mark on your Humanity Tracker due to performing them." },
            { name: "Chaplain of the Damned", cost: [2], summary: "You have a Ghoul chaplain as part of your standing within the Order. Providing you with occult guidance and record keeping, as well as spiritual support when needed. Your chaplain counts as a Average Mortal Retainer (●●) with a rating of four in Academics and Occult." },
            { name: "The Comfort of Teeth", cost: [3], summary: "When you take this merit, you are given a serrated +3 melee weapon of your forebears, its edge lined with preserved vampire teeth. You gain a specialty in Melee for that weapon and its attacks ignore armor. On a Critical Win, the attack counts as if you had bit the target directly." },
            { name: "Thou Shalt Not Falter", cost: [4], summary: "Your will and your mind are sharp, even as your drive might wane. Whenever you would make a Willpower Test, you may instead make the Test with your Intelligence or Resolve. This pool cannot receive bonuses of any kind save from those that increase the used Attribute directly." },
            { name: "Omne Datum Optimum", cost: [5], summary: "The goat-headed patron of your order has sent to you one of its teeth. Placing it at where you perform your Dark Sacrament aligns the path of esoteric influence with the crater in Utica, turning it into a place of power and completely removing it from the notice of mundane mortals." },
        ],
    },
    {
        title: "The Misbegotten Khofilim",
        summary: "Bloodline; Baali characters only. Born from Khohfshiel, the supposed son of a mortal woman and a fel-god of the First Tribe, who was later Embraced during the Great Deluge. This Bloodline's main principle is to blaze their own trail beyond the Path of Cinders.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Lightbearer", cost: [1], summary: "Knowledge is the path to freedom, a tool of rebellion, an insight into ascension. When you get a Critical Success with a pool that uses Academics, Occult, Science, or Technology, you permanently gain a free specialty in the used Skill associated with the Test." },
            { name: "Agony of a Miracle", cost: [2], summary: "Pain is an avenue of understanding and power. Anguish igniting hope. While you have total Aggravated Damage, either Health or Willpower, equal to or greater than your Bane Severity, count your Bane Severity as one lower for everything other than this Background." },
            { name: "In Nomine Libertatis", cost: [3], summary: "A fragment of Khohfshiel's grace has been etched into your soul, filling you with a profound drive for self-governance. Whenever an opponent rolls a Dice Pool to convince you to do something you don't want to do, even through the use of Disciplines, you may choose to automatically resist their pool." },
            { name: "Temptation Radiant", cost: [4], summary: "Your blood is suffused with the radiant allure of enlightenment and defiance. Subtract 1 die from all Social Pools that don't include Charisma, but your Charisma Attribute is increased by 1, up to a maximum of 5." },
            { name: "Tyranny of Heaven", cost: [5], summary: "Faith is the foundation of one's self, whether that faith be external, towards others, expressed in the processions of religions, or found inwards towards one's personal growth. Whenever you pass a Remorse Check, you gain True Faith (●) until the end of the Story." },
        ],
    },
    {
        title: "The Molochim",
        summary: "Bloodline; Baali characters only. The descendants of Moloch have ever been the most deliberate and systematic of the Clan of Devils. Their Embraces are specific, identifying a number of psychological traits within the chosen Kine over several years before they are tempted with power.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Child of Ba'al Hammon", cost: [1], summary: "You are the descendant of Moloch, who was worshiped by the Kine of Carthage as a god. Your powers of Presence are free when used on Mortals without True Faith, and on a Critical Win, can convince them to even cause physical harm to others." },
            { name: "Persisting Affections", cost: [2], summary: "Moloch and Troile loved one another so deeply, that even as Carthage fell, Moloch stayed with his lover to defend it. You lose a die to resist Persuasion pools made by Brujah, however add an automatic success to your Charisma and Manipulation pools made towards that same Clan." },
            { name: "Subtle Work", cost: [3], summary: "When you suggest a course of action that makes another character go against their Convictions, they gain an automatic Success in completing the task until the Session ends. If they lose Humanity from this action, they automatically prevent the next Stain from similar actions." },
            { name: "Cold Methods", cost: [4], summary: "Moloch preferred a measured approach to the profane powers of his Clan. You were Embraced because you showed rationality and pragmatism when it came to applications of power. Once per Story you can automatically pass an uncontested Composure Test." },
            { name: "Carthage Spawner", cost: [5], summary: "You feel the pull of an ancient resting place somewhere in the world, a kind of Beckoning –but in reverse. The space in which you perform your Dark Sacrament becomes warped by a distant Infernalism, causing the earth to open and spew forth a manifestation of Oblivion, powerful weapon or artifact." },
        ],
    },
    {
        title: "Orphans of the Undying Pestilence",
        summary: "Bloodline; Baali characters only. The bloodline of Nergal craves power most of all the Bloodlines of the Clan of Devils. Willing to take any risk, make any show of power, and commit any atrocity to gain demonic potency. Out of all the Baali, they have weaved themselves into the power structures.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "Left-handed Mediator", cost: [1], summary: "Your blood attracts swarms of flies, rats, cockroaches, and any other manner of nearby scavenger animal or insect when spilled. Once per Story, add your Presence to tests to manipulate these creatures." },
            { name: "The Devil in the Details", cost: [2], summary: "You intrinsically pick up gossip and secrets. Gain an extra die when overhearing or persuading other Cainites. If you solve a Cainite's problem, you gain them as a one-dot Mawla until the end of the next Story; alternatively, you can always make their problem worse." },
            { name: "In Nomine Pestilentiae", cost: [3], summary: "Your founder was obsessed with knowing the true names of demons to bolster his already god-like power. You know a fragment of a demon's True Name. Make a Test of Resolve + Occult to speak it, causing a nearby Mortal to become fouled and anemic." },
            { name: "Folly to Grieve", cost: [4], summary: "Add three dice to your Ceremony Test when reanimating the dead. Fully draining a mortal allows you to reanimate them as a Diseased Corpse by Rousing your Blood and spending a point of Willpower." },
            { name: "Brood-Spawn Sovereign", cost: [5], summary: "Generations of vermin live and die within you, and you have grown a Hive Queen within your dead flesh. You may expel the Hive Queen, which must seek out a new host at your command, and burrow into their flesh." },
        ],
    },
    {
        title: "Scions of the Unchristened",
        summary: "Bloodline; Baali characters only. Third to rise from the hell-pit of corpses that had begotten the profane trinity of Baali Methuselahs, the Nameless was no more, or less, powerful than the others, but was the most insidious, enigmatic, and mindful of weaving a complex obfuscation through the aeons.",
        source: "Custom",
        requirementFunctions: [isBaali],
        merits: [
            { name: "The Stranger", cost: [1], summary: "Knowledge is power, and so you know that using its absence is a form of power in and of itself. Add 1 Die to any Manipulation, Wits, or Resolve pools when in conflict with someone who doesn't know your name." },
            { name: "The Third Lover", cost: [2], summary: "Certain legends hold that the Nameless was a lover to either Nergal or Moloch. Whatever the case, this power of 'love' is innate to you as well, and when you have sex with a Touchstone, yours or another Kindred you know, you may transfer one Superficial Health Damage between the group." },
            { name: "Sine Nomine", cost: [3], summary: "While Nergal obsessed over learning the True Names of demons, your lineage has always found power in the utter lack of a True Name. Once per Chronicle, you can inscribe the voidwrought sigil of the Nameless onto another's forehead, removing the knowledge of your existence from their mind entirely." },
            { name: "Inscrutable Shift", cost: [4], summary: "Your physical and mental endurance shifts and adapts, churning to ensure that you remain unknowable. Once per story you may switch your ratings in Composure, Resolve, and Stamina between one another. Your Health and Willpower reflects this shift." },
            { name: "Nameless, Formless, Shapeless", cost: [5], summary: "The true nature of being is to have a name. However the nature of your bloodline is to have no true nature, to have no True Name, and to be unknown. Once per story, you can choose to not exist for a single scene." },
        ],
    },
    {
        title: "Supplicants of the Lost Elk",
        summary: "Bloodline; Baali or Gangrel characters only. In the ancient days of the First Cities, the Gangrel hunted not just for sport, but for survival. Amongst their quarry was a mighty Elk, thought to be the familiar of a second generation Cainite. The Elk, driven to near-starvation, collapsed next to a deep pond.",
        source: "Custom",
        requirementFunctions: [
            (character: Character) => character.clan === "Baali" || character.clan === "Gangrel"
        ],
        merits: [
            { name: "Blood of the Sleeper", cost: [1], summary: "Animals that you Ghoul gain Eyes of the Beast as an additional free power. This doesn't provide them with any additional dots in Protean." },
            { name: "Sacred Parasite", cost: [2], summary: "A Blessed Tick, the size of a melon and fat with the Elk's profane blood, has been granted to you. Affixing this creature to your body requires two Rouse Checks, and grants one of several abilities until its removal: Velvet Eruption, Cervidae Centaurus, or Bellowing Bleat." },
            { name: "The Ritual", cost: [3], summary: "You can eviscerate a mortal under a full or new moon, and drop a Rouse of your blood in the gutted remains. Carrion animals will swarm the offering, consuming it within an hour. You can read the bones, which will point to a place the Elk has been." },
            { name: "Blessing of Starvation", cost: [4], summary: "The blessings of Elk are bestowed upon those who are as famished as it was. While at Hunger 4 or higher, your Blood Potency is increased by 1, and you add two dice to your Survival and Awareness pools." },
            { name: "Waapiti's Wrath", cost: [5], summary: "You can leave the offal of six mortals as an offering to the Lost Elk to gain its favor. During the same night, you may Rouse the Blood and make a Resolve + Occult; Difficulty 3 Test. On a Win a shadowy figment of Lost Elk will manifest and perform a single action." },
        ],
    },

    {
        title: "Abstracts",
        summary: "Toreador characters only. Those who abandon the Camarilla to chase that ethereal sensation of being free and alive are called the Abstracts—though they would simply say they refuse to die a second time. For many Abstracts, the Anarch Movement offers fertile ground—a place where their obsession and hunger for self-expression cannot and will not be limited by 'good taste,' endless codes of conduct, or the obligations of the Camarilla.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Provocative Imagery", cost: [1], summary: "You know how to force your audience to feel something. Add an additional die to rolls for using art to influence or provoke a reaction in others. If your work challenges an authority figure or tradition, add two dice instead." },
            { name: "Blood is Blood", cost: [2], summary: "You have a kindred spirit in another sect. Though ideology divides you, they see you as family, a reckless soul in need of protection. Gain that individual as a Mawla (••). Once per story, you can ask them for the equivalent of a Minor Boon so long as it doesn't actively harm their position. If sect tensions rise too high, this Mawla may be forced to betray you to prove their allegiance to their Sect—but will always give you a subtle warning before doing so." },
            { name: "Obsession Piece", cost: [3], summary: "You possess the work of a rebel or an abstract that came before you. Whenever you share a scene with it taking the time to admire it you regain 2 Willpower. Additionally, it serves as a source of inspiration for your own creations, halving the cost of purchasing advantages related to your work are halved. However, if this masterpiece is damaged or subjected to a scathing critique, gain a Stain." },
            { name: "Exhibited", cost: [4], summary: "You have orchestrated a great work, a project, a symbol that lays bare the crime or misgiving of a single kindred, word of what they are, of what they have done is now on the lips of every kindred. Choose one effect: CARICATURE A ruthless mockery anyone who leverages this caricature gains +1 damage to social pools against the target additionally it negates their Status for the night. RALLYING CRY The artwork grants a two dice bonus to social rolls and a free reroll when rallying others to the cause that the work depicts. PROFOUND TRUTH Looking upon the work forces a Willpower; Difficulty 4 Test. On a fail the onlook experiences a profound truth. Kindred gain an appropriate compulsion, while others take two points of non-halved Willpower Damage." },
            { name: "Change the Narrative", cost: [5], summary: "Through your work and influence, you reshape how the Kindred world perceives someone—either elevating their reputation or turning allies against them as public opinion shifts. Once per Chronicle, choose a Kindred and add or subtract up to six dots across Mawla, Contact, Allies, or Status. This shift lasts until the end of the Story, unless you manage to keep it relevant, otherwise Kindred social circles will tend to abruptly move onto the next scandal, shifting these alliances away elsewhere." },
        ]
    },
    {
        title: "Aspiring Harpy",
        summary: "Toreador characters only. Ever since your Embrace, you have been captivated by the callous power that the Harpy holds as judge, tastemaker, and breaker of reputation. You've observed from afar Kindred for the position, so rarely assigned, and instead attained through underhanded, but decisive, methods. Leveraging their social influence, amassing supporters via ruthless tactics that make most mortal bullies look tame.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "The Vibe", cost: [1], summary: "You're on the cutting edge of Kindred opinion in your Domain. Once per session, you can automatically glean a general, public, opinion of the Kindred in your area by simply thinking on background gossip, or conversations you've had within the last few nights. You also have Status (••) with Kindred so long as you aligned with that opinion." },
            { name: "Popular Opinion", cost: [2], summary: "Your thoughts on matters of Social standing are followed by at least a few other Kindred. Gain a group of no-Status Kindred as Mawla (•) and Fame (•) or Status (•) amongst them. Add an additional free dot to this Fame or Status for each other Background purchased on this sheet." },
            { name: "The Blacklist", cost: [3], summary: "You've uncovered the Touchstone of another Kindred, giving you leverage over them. At the start of each Story, you may pressure that Kindred to provide you with Allies (•••), Contacts (•••), Retainer (•••), or gain them as a Mawla (••) and add two bonus dice to Social pools made against them, as you leverage their Touchstone. That background lasts until the end of the Story or until used, whichever comes first. These benefits last until the end of the current Story, after which the choice repeats." },
            { name: "Dirty Secrets", cost: [4], summary: "It's your job to know where people wash their dirty laundry and what skeletons are in their closets. You learn three Dark Secrets. One from someone who owes you a Boon, a second from someone with less Status than you, and finally a third from someone with more Status than you. As long as you keep these secrets add an additional Bonus Die to any pools made in Social Combat with those characters." },
            { name: "Boons Ungiven", cost: [5], summary: "Your leverage and influence over the local Kindred Domain grows stronger in nightly matters, so much so that you become a keeper of the tradition of prestation–More widely called a Boonkeeper. Upon taking this Background, choose four non-Player Kindred and split them into two groups. The Storyteller chooses one of these groups, and you gain a Major Boon over each Kindred in that group. Repeat this process at the beginning of each Chronicle." },
        ]
    },
    {
        title: "Copper Sun",
        summary: "Toreador characters only. The band was an experiment. A handful of daring Kindred who sang of something real—who bled their true nature into lyrics about hunger, addiction, abjection, and the slow, inescapable rot of the damned. Kine and Kindred alike danced to the song of the doomed, their broken melodies sinking into marrow, refusing to be forgotten. But it wasn't supposed to last. The Camarilla smothered them. Anarch warlords took offense at their nihilism and spilled their guts on the club floor. Hunters burned their havens to the ground. The band died, again and again. But the idea of Copper Sun refused to stay buried.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Sparkling Feedback", cost: [1], summary: "The music you make isn't just meant to send a message, it's a resonating feeling that anyone can relate to, and feeds back positively into you. When an audience is captivated, emotionally moved, or responds positively to your performance as a band, every member restores a point of Willpower. In addition music related specialities add an additional die" },
            { name: "Copperheads", cost: [2], summary: "A devoted following is always an indication of a band's success, and Copper Sun has always had it. You gain two of Herd in the form of Groupies, well as a band bus that counts as a Haven (•) with Mobile Shelter (•). This bus is large enough to house your bandmates and the fans provided by this Merit." },
            { name: "Charismatic Impact", cost: [3], summary: "Turning people into fans just takes a certain amount of showmanship, performance, or style. Gain Fame (••) with your fanbase, and once per Session when you happen upon a non-fan that isn't an Enemy or Antagonist, you can attempt to turn them into a fan with a Charisma + Performance or Fame; Difficulty 3 Test. You can also do this to a group, such as a small audience, with Difficulty increased to 5." },
            { name: "This One Goes Out", cost: [4], summary: "Once per session, when you perform a song publicly, you can choose a Character in the audience to dedicate it to with Charisma + Performance. If you do this with praising intent, that Character adds half the successes, rounded down, to their next Willpower pool that night. If you do it with derision, that character instead takes Superficial Willpower Damage equal to the Successes plus your Fame instead." },
            { name: "Never Fade Away", cost: [5], summary: "The truth of the matter is that your time's running out. Always has been since you donned the mantle of the Copper Sun, but that doesn't mean you won't go down without a fight. When a Sect or the Second Inquisition has finally had enough of you, you can go down swinging. Any Backgrounds that are also your fans become an equal rating in Allies that will always answer your call until the end of the current Story, providing you with refuge, accouterments, vehicles, and anything else, and will be willing to rally behind you if you move against those that seek to snuff you out. Any Background used this way become damaged until the end of the next Story, however, as they drop off your radar to lay low." },
        ]
    },
    {
        title: "Echoes of the Beckoned",
        summary: "Toreador characters only. The Beckoning has been a cataclysmic shift across Kindred society, but for you it's been outright profound. You shared a romantic bond with an Elder, and while others whispered behind your back, claiming you just a tool, toy, or pet, you know in your unbeating heart that it was far more. It had to be. They were as devoted to you, as you to them, and your relationship was made of two halves that fit together to create a whole. It was supposed to last forever.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Belong to Only One", cost: [1], summary: "You belong only to your lost love, and no one else. When you Blood Surge a pool to resist another's Charisma, Manipulation, or Mental Disciplines, add an additional die. If these pools mean to coax you romantically, add two additional dice to the Surge instead." },
            { name: "Love's Echoes", cost: [2], summary: "Your love taught you much about the Kindred world, but also was open of their worldly experience at large. Though you lived a life of your own, and have had your number of lifeless nights, the lessons from these intimate moments ring in your mind still. Once per Story, when failing an action, you may take a full turn and make a Test of Intelligence + Resolve; Difficulty 3 to search your memory. On a Win add the margin of Successes to the previously failed pool made again in the same Scene. A failure on this Test results in taking a point of Aggravated Willpower Damage however, as your heart sinks and you realize there might be a hole in your love's experience." },
            { name: "Cherished Inheritance", cost: [3], summary: "While your love has gone, what they love remains. You've happened across two of your love's Touchstones that tied them to their Humanity. Surely they must be protected at all costs if your love were to ever return. These Touchstones are counted as a Retainer (••) and a Contact (••), and both of them become your Obsession." },
            { name: "Lonely Legacy", cost: [4], summary: "Your love has left behind many secrets. Information they held dear. Once per Story the Storyteller permanently gives you two-dots in a Background of their choice; A secret library behind a false door, an anonymous benefactor that provides unlikely help, and even a cache of wealth are just some examples. However the Storyteller may also choose to, instead, give you information on up to three dots in another Character's Backgrounds, including flaws such as Dark Secrets, or where they hide their wealth. This information is usually discovered at random, on old notes, by time-release delivery or in some other mysterious manner." },
            { name: "Bonded by Grief", cost: [5], summary: "Your lover had a sordid past with a previously unknown Childer, who cared deeply for your beckoned lover as well. Wandering at a loss until they found you, they've been requested by your love to watch over you. They count as a Mawla (••••) that will do anything to ensure your safety and when you spend time commiserating, or continuing your love's aims or ambitions, you restore a point of Willpower. Despite this, you serve as an eternal reminder for their lost Sire, and their smothering attachment to you could be for better or worse." },
        ]
    },
    {
        title: "Exemplars of Aksum",
        summary: "Toreador characters only. A group of combat-minded Roses, sometimes referred to as 'Thorns' within certain circles of the Camarilla. These Exemplars seek to be the most martially-capable Kindred in their Domain, and usually have an even mix of arrogance and talent, with a mind tempered to consider physical and strategic adversity and strife as a baseline state of undeath. Founded by the Toreador Elder, Lady Meliora Aksum, the Exemplars once consisted solely of her own Bloodline.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Death Dealer", cost: [1], summary: "Exemplars pride themselves not just in their ability to hunt Kine and Kindred, but to bring down other threats to the Domains of their home. Choose a type of non-Kindred monstrous opponent that isn't broadly applicable, such as Infernalists, Shapeshifters, Wraiths, Szlachtas, etc. You gain the chosen creature as a Specialty in Athletics, Brawl, Firearms, or Melee, and also in both Intimidation and Academics." },
            { name: "Wet van Orde", cost: [2], summary: "Law and order are foremost in the Exemplar's conduct. You have Status (•••) with the local Kindred enforcers of order in the city, including figures such as the Hounds, Sheriff, Scourge, Praetorian, or even an Archon. When they need another hand, you're the first they call on for assistance, additionally if such a position opens, you're likely on the shortlist of considered Kindred." },
            { name: "War-Time Leader", cost: [3], summary: "Combat is always around the corner, and you're talented at group tactics needed for victory. You have two Ghouled Retainers (•• each) that are adept at combat. When you know a specific conflict is on the horizon, you can spend at least a night practicing tactics with them, if you do, add an additional die to any Teamwork pools made between the three of you during that specific conflict." },
            { name: "Sum Meliora", cost: [4], summary: "You aim to embody the same reputation as Lady Meliora herself. Whenever you take down an opponent from another Sect, increase your Fame by one dot, or two if they were Bloodhunted, up to a maximum of four. However if you're defeated by an opponent this Fame is lost, and you must build it back again. Once per Story you may add this Fame to pools made to coerce, lead, or inspire another Kindred." },
            { name: "Spina Bellorum", cost: [5], summary: "You've been given the rank of War Master, and it falls upon you to protect the Domain from external threats, usually of a Kindred nature, though there are a great number of terrible things that go bump in the night. You have a fortified Haven (••••) with Hidden Armory (••) that serves as your command center. During times of open conflict with Anarchs, Sabbat, Hecata, Atavists, or any manner of other supernatural group that threatens the safety of the City, the Kindred look to you for strategic advice and wisdom to maintain the sanctity and order of their Domains." },
        ]
    },
    {
        title: "Philistine",
        summary: "Toreador characters only. Once a derogatory term given to Toreador who resisted the Clan's artistic inclinations, it has now become a moniker for members who are frustrated by the hedonism and trivial pursuits of their clan. The term now encapsulates a broader segment of Toreador, from perfectionists who believe that the pursuit of art distracts from skills applicable to the accruing of power, to younger Toreador dejected by artistic standards they cannot ever hope to meet.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Petty Spite", cost: [1], summary: "When you would gain the Toreador Clan Compulsion Obsession (VtM Core Rulebook, Pg. 210), you instead gain Denigrade, which confers a -3 Dice penalty to Charisma and Insight pools until you attack someone's taste in art, or until the scene ends. Whenever you successfully rid yourself of this compulsion by acting in an appropriate fashion, you recover three Willpower." },
            { name: "Utilitarian Perfectionist", cost: [2], summary: "Useful talents are what matters most, and you've honed talents in such areas in your spare time. Art-related Specialties cost you five experience to purchase instead of three, however you gain two non-Art Specialties in Skills of your choice. Your Retainers also have these gained Specialties." },
            { name: "Will of Crete", cost: [3], summary: "In the ancient days your Clan was worshiped as gods. Tribute was a means of control, art was meant to inspire obedience, and beauty a manipulative tool with no deeper purpose. While under the effects of your Bane your suffer no penalty to any pools that include Manipulation or Leadership." },
            { name: "Prune the Rose", cost: [4], summary: "You've spent enough time among your fellow Kindred that you've not only identified what their artistic preferences are, but know what mechanisms they employ to enjoy them. You know these preferences, even amongst non-Toreador, and can exploit them. Add two dice to any pools made towards manipulating people via their preferences, and once per Story you may damage two dots in your Backgrounds to automatically damage an equal amount in another's Fame or Status circles until the end of the Chronicle." },
            { name: "Adversity from Art", cost: [5], summary: "Frivolous expressions are your anathema, and you can cultivate this opinion amongst the other local Kindred, even in other Clans. Once per Chronicle, you can outright destroy a piece of art, such as a treasured artifact, renowned gallery, the iconic statue at the center of the city, etc. and you will receive nothing but total support for doing so. This act strikes such a quaking blow to the local Toreador that they fall into in-fighting and blame-shifting in their attempts to fix it, or overcome the loss of the piece at least until the end of the next Story." },
        ]
    },
    {
        title: "The Scarlet Thread Society",
        summary: "Toreador characters only. Founded by Jasmine Bertin after her Embrace into the Toreador, in life she belonged to a family of merchants that designed and sold fashionable textiles and clothing, specializing in both practical and high fashion of the day. After her Embrace, by a Kindred client, Jasmine's talents were made to be eternal. However she quickly found the Courts of Kindred to be strict, suffocating, and overly polite, to the point of stagnation.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Boutique", cost: [1], summary: "You own and operate your own personal shop that sells clothing and jewelry. Various Kindred will approach your shop for couture fashion, and your Craft specialties add two dice instead of one while working within your boutique. Additionally Projects launched and Tests made toward crafting fashionable attire have their pools increased by one more." },
            { name: "Threaded Wear", cost: [2], summary: "The work of the Scarlet Thread has spread enough that various members of the local Kindred court can communicate via what they wear and when. These Kindred count as a Mawla (•••) and come to you for clothing that spreads specific messages, ones you will always know, and will remain discrete outside of your circle. They can even spread your personal messages without knowing to others within the Society, however this Mawla group will likely refrain from helping in other ways." },
            { name: "Stunning Garb", cost: [3], summary: "You have a hand-made work that stuns onlookers to the point that it counts as the wearer having the Stunning (••••) Looks Merit. This counts even for Nosferatu and other individuals who can't normally gain such Merits, as the outfit itself gives them the mental and physical confidence to ignore even a Bane. This effect lasts a single evening, and the next time it's worn it confers no bonuses. You can launch a Project to create a new outfit of such quality whenever you wish, however it must always be made for a specific character." },
            { name: "Scarlet Hall", cost: [4], summary: "Several members have organized to create a Guildhall for your private organization. You gain six dots to spend across Contacts, Haven, Haven Addons, Resources, and Status, however this guild has placed you as the local head, deferring to you for any complications." },
            { name: "Jasmine Needlework", cost: [5], summary: "All your passion and technique have been poured into this singular creation—a Masterwork (•••••) of unmatched craftsmanship. Designed for a specific setting, it functions as a Mask (••), allowing the wearer to blend seamlessly into that world. They feel compelled to wear it when appropriate. If the wearer has no Status, they gain •• while adorned in this piece. The creator is always considered one dot lower in Status than the wearer, recognized as their tailor or architect. Your name is whispered in the wake of their rise" },
        ]
    },
    {
        title: "Progeny of Madam Thorne",
        summary: "Toreador characters only. Troubled is the tale of Vanessa Thorne, whose mortal life was plagued by poverty and ever-demanding means of pragmatism and cunning to survive in the seedy underbelly of L.A. and was embraced by a duped lover within the Clan of the Rose. As a member of the Anarch Free State of Venice, just south of Santa Monica, Thorne became known as the Black Rose, and accrued a great deal of wealth and influence puppeting mortal and Kindred alike.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Deceiver of Fools", cost: [1], summary: "A lie is a truth until proven wrong, and you're good at twisting the truth. You gain three dots to spend across two of your choice amongst Allies, Contacts, or Mawla, and further purchases in such backgrounds cost two experience per dot, rather than three. However, one of those Backgrounds is always aware when you lie to them." },
            { name: "Tech Noir", cost: [2], summary: "Your late Sire had a shadowy club that counts as a Haven (••) with Luxury (•) and Security (•). Once per Story you can ensure any deal that goes down here won't get out, ever, unless you or one of the participants has loose lips. However local authorities are constantly casing the joint, looking for any reason to rummage through it and take it from you." },
            { name: "Thorns of the Past", cost: [3], summary: "While defending in Social Combat, you can imply that you're the Childe of the Black Rose of Venice Beach. If you do your attacker takes a point of Willpower Damage and you suffer no Compulsions from Bestial Failures. You can do this once per Story." },
            { name: "Fangs of an Old Wolf", cost: [4], summary: "A handsome devil, a murder, a mystery. Evidence of who killed your Sire has fallen into your lap providing you with Resources (••) and Contacts (••), but all of it points to the dangerous Gangrel, Inspector Wolfe. However even a cursory glance of this evidence looks like a set up for Wolfe. Hiring him to find the real killer will cost the Resources and Contacts provided by this Background, however finding who dunnit will solve a legendary murder case, awarding you Status (••) and a waterfront Haven (••) with Security (•••)." },
            { name: "The Cold Comfort of Monsters", cost: [5], summary: "You've been entangled in the lives and unlives of the city long enough now to know the talents and occupations of all the biggest players, as long as they aren't operating against their usual business, you know what it is that they do and how good they are doing it, and if you don't, you know who you can manipulate into telling you. When you need someone to get something done, and do it quietly and perfectly, you can roll Manipulation + Contacts; Difficulty 5 to find the perfect person for the job, however if it's a big ask, they'll refuse you without proper compensation. However, as long as they're happy, it'll always go off without a hitch..." },
        ]
    },
    {
        title: "Guild of the Watchers",
        summary: "Toreador characters only. The only conflict that should be pursued is the conflict between the interests of the Camarilla, and that of the Toreador. The Watchers are an guild of Toreador that was created with the advent of the Camarilla, their sole aim to ensure the interests, control, and power of the Clan of the Rose remains a constant. That the Rose's place is secure, and not throttled by the vines of others in their own garden.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Midnight Encounter", cost: [1], summary: "You have a Mask (••) specifically for Kindred society, one that stands up under the scrutiny of a Sect of your choosing. If this mask becomes compromised due to being affiliated with a breaking of the Traditions, or any other local Kindred laws, you can pin the Mask on another Kindred entirely, but you lose it forever." },
            { name: "Garden Variety Nepotism", cost: [2], summary: "As a member of the Watchers, your duty is to get members of your own Clan into key positions. Each time you manage to raise the clout of another Toreador, including getting them into a titled position or raising their Status, Fame, or Influence, they become part of a group of Mawlas (•••) for you." },
            { name: "A Useful Fool", cost: [3], summary: "You have either managed to get a relative moron from another Clan into a prominent position, or know such an individual with a great deal of pull in the local politics. They're easily influenced, to the point that you add three dice to any Manipulation pools made towards them, making them a useful puppet." },
            { name: "Zhdanov Doctrine", cost: [4], summary: "Art is culture, and the Watchers maintain a discerning control over both. Once per Story you can blast an artist as undesirable, reducing the rating of all of their Masterworks to two dots, at the same time praising another artist, counting their Masterworks as two dots higher. This lasts until the end of the current story and only affects the local scene, or groups you have Status in." },
            { name: "Catastrophic Fall", cost: [5], summary: "A city is always beset by peril, by adversity, or by some other circumstance of scandal. Once per Chronicle you can call on other Watchers to orchestrate a calamitous event that will destroy the reputation of an entire Clan in your City. From that point on, no member of that Clan can have their Status with the Camarilla, or anyone directly affiliated with them, raised above two dots and any titles they hold will be ceremonial at best." },
        ]
    },
    {
        title: "Ivory Mask",
        summary: "Toreador characters only. A guild created by Rafael de Corazon mere months after the Inner Circle was formed. The Ivory Mask was created to safeguard the Ivory Tower's interests outside its spheres of influence. While Brujah scream for revolution and Venture wield their economic sovereignty as a sceptre, the Roses in the Ivory Mask operate with subtlety and elegance, acting as ambassadors who whisper the right words in the wrong ears to ensure the Camarilla's interests.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Sect Tutelage", cost: [1], summary: "You have been trained in the political intricacies of Sects. Gain a free Specialty in Politics (Camarilla, Anarchs, or Independent Kindred). That specialty adds an additional die to pools made towards getting information on the secret meeting places of that Sect." },
            { name: "Court of Whispers", cost: [2], summary: "You have a network of useful people that have an eye to the sky and an ear to the ground. Take this network as a Mawla (••) that has an idea of rumors and recent events that few others do. When you stake them on projects to sabotage, manipulate, or strengthen relationships between any two Sects, they add an additional two dice to the Launch roll." },
            { name: "Compromised Solution", cost: [3], summary: "You've created a Mask (••) with Zeroed (•) specifically used to communicate anonymously. Once per Story, when using this Mask, you may provide another Kindred with false information that seems completely legitimate, only for it to collapse into utter nonsense when it would best suit you." },
            { name: "Opportunistic Dilemma", cost: [4], summary: "Once per Story, a desperate Kindred from another Sect approaches you with a problem. Whether it's smuggling assets, securing a secret meeting, or eliminating an obstacle, they need your help—and you are willing to provide this aid if indirectly. Add two bonus dice to Social pools made to convince your Background to solve the problem for you. This keeps you hands clean if things go wrong, and once the issue is resolved, that Kindred will be in your debt, a dangerous position to be in." },
            { name: "Diplomatic Impunity", cost: [5], summary: "You have the full authority of your Prince and act as their voice when they're not present. To harm or disrespect you is to insult the Camarilla itself. While acting in the Ivory Mask's, or the Camarilla's, best interest, you may treat your Status as equal to your Prince's in regards to other members of the Camarilla. When you call on this Status in conversation with those outside of your Sect, you can add it to your Intimidation pools to cow them into silence, putting fear enough in them that they'll keep their mouth shut, while within the Camarilla itself you can use it to override the objections of an Kindred with less Status than you, automatically." },
        ]
    },
    {
        title: "The Crimson Angels",
        summary: "Bloodline; Toreador characters only. Art requires a certain form of cruelty. The Toreador have always claimed to be the closest to humanity, using it as a way to portray themselves as moral—but that also means reflecting its darker hues. The fascination with the morbid, the curiosity of how a body is torn apart on the train tracks, or how a head bursts like a firework when the trigger is pulled. The crescendo of a stalked victim, killed at the perfectly dramatic moment. These darker inclinations have always lurked within the Toreador, mingling with the inhumanity of the Beast. The crimson angels, unlike the others, embrace it.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Bloody Indulgence", cost: [1], summary: "You derive pleasure from the act of artful killing. When you go for the killing blow you may use Performance in place of another skill. If the kill is successful, you restore a point of Willpower. If it was a Critical Success, you may restore a point of Aggravated Willpower Damage." },
            { name: "Play With Your Food", cost: [2], summary: "At the start of each Story, choose a mortal Obsession. Any Stains gained from violent acts while chasing or hunting your Obsession are reduced by one and you add a bonus die to any pools made to attack others Mortals on your path. You gain no Stains if your Obsession dies by your own actions. If you do not feed on your Obsession by the end of the Story, you receive a point of Aggravated Willpower Damage." },
            { name: "Strings of Fixation", cost: [3], summary: "At the start of each Story you fixate on a Mortal Storyteller Character, making them your Vendetta. You study your target, getting to know others in their life and their daily routines. These people count as Herd (•••) and Contacts (••). However at the end of each Story, if your Vendetta still lives, you take a point of Aggravated Willpower Damage." },
            { name: "Sublime Terror", cost: [4], summary: "Your Bloodline has warped Obfuscate into a terrifying power. Once per Story, you may add your Obfuscate to any pools that would invoke fear in a target. A Win rattles the victim to the core, causing non-halved Willpower Damage equal to the margin of Success. Mortals who take Aggravated Willpower Damage from this collapse into paralytic terror, while Kindred must Test for Terror Frenzy; Difficulty equal to the damage taken." },
            { name: "Death Mask Production", cost: [5], summary: "You've become something of a legend, gaining Fame (••) in the underground horror media and fiction scene, and now Death Mask Productions, the infamous snuff film distributor, has taken notice counting as a Contact (••). Once per Story, you may release a recording, evidence, or a recreation of a kill to gain three dots of Backgrounds across Retainer or Resources that last until the end of the current Story. These come in the form of admirers that offer themselves or wealthy buyers and collectors willing to pay for your work. At any time you can choose to make the 'Final Cut', draining the head of Death Mask Productions, losing them as a Contact and instead gaining a Dyscrasia of the Storyteller's choice, and creating a recording of the deed that counts as a Masterwork (••) with the addons Exposure( •) and Erie Flaw( •)." },
        ]
    },
    {
        title: "Pride of Ishtar",
        summary: "Bloodline; Toreador characters only. This Legacy lineage of the Toreador claims direct lineage to Babylonian goddess, the Queen of Heaven herself, Ishtar. Unlike the other Legacies of the Laibon, the Ishtarri lack a definitive origin in Africa, but none-the-less have become an intrinsic piece of the culture across the continent, specializing in socializing and networking between groups that are normally partitioned from one another, most especially Mortals and the Undead.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Love & Vice", cost: [1], summary: "You keep in your company a pair of Retainers (• each), who even without a Blood Bond, adore you above all others. Each of these mortals has the Beautiful (••) and High Functioning Addict (•) Merits, as well as the Hopeless Addiction (••) Flaw (Vampire the Masquerade Core Rulebook, Pg. 179)." },
            { name: "Lioness of War", cost: [2], summary: "Ishtar was a goddess of conflict and power. These Laibon have favorably compared themselves to Lions, and when pressed into physical fights show why. Once per Story, you can make a Rouse Check to call upon this fierceness, rolling seven dice to attack in place of other Attributes or Skills. This attack suffers no Minor Action Penalty to close short distances, and has a +2 Damage Modifier regardless of what's used." },
            { name: "Wealth in a Life of Death", cost: [3], summary: "Even more than the rest of their Clan, the Ishtarri interface with mortals on a nightly basis, navigating mortal society with uncanny ability and grace. You gain five dots to spend across Allies and Contacts. At any point you may kill these individuals for their wealth and belongings, immediately granting you that many dots in temporary Resources that last until the end of the current Story." },
            { name: "House of Heaven", cost: [4], summary: "The Ishtarri differ from other Roses due to their need to be directly involved with humans, to belong and be accepted by them –And to a As many of them as they can. This runs strong in your blood, in your Beast. You've managed to create a safe Haven (••) with Luxury (•) and Herd (•), symbolizing humans who languish in your den of indulgences. At the end of each Story, so long as this Haven persists and remains secure, increase the Herd rating that lives there by one dot. This Herd cannot exceed five dots, however you can send the excess members to another one of your Havens, if you have more." },
            { name: "Swallowed by Vice", cost: [5], summary: "The Ishtarri have only ever been their own undoing as they strive to bury themselves under a mountain of their indulgences. At the start of each Story, pick a vice that negatively impacts you. Whenever you're able to spend a full scene deeply indulging in that vice, you may restore any amount of your Superficial or Aggravated Willpower Damage, however the indulgence is so tectonic that it damages one of your other Backgrounds." },
        ]
    },
    {
        title: "Leucosianites, the Sorrowful Sirens",
        summary: "Bloodline; Toreador characters only. The Sirens are a bloodline rumored to come from a Toreador named Leucosia fell deeply in love with a thracian king but the Thracian king only feigned his adoration hoping that she would give him the embrace that he may save his true love from death, when Leucosia gave him her greatest possession her blood. The king abandoned her, this broke Leucosia who filled with betrayal and rage snuck into his palace and broke his bones and drained his true love in front of him, so that he may feel to have what they love taken away.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Passionate Appetite", cost: [1], summary: "Legend holds that Leucosia drew sustenance from heightened emotions, which subdued her very Beast. Once per Story when you slake at least one Hunger from a victim with an Intense or Acute Resonance, you may remove that Resonance to Slake any additional point of Hunger, this cannot reduce your Hunger to zero. If multiple effects would cause you to reduce additional Hunger, choose one and ignore the rest." },
            { name: "What Lies Beneath", cost: [2], summary: "Your bloodline has developed a keen sense for rooting out the deep seated passions of those around you as you beast craves for that emotional high. You can make a Rouse Check to automatically pierce another character's façade and see how they truly feel, however you gain the Toreador Clan Compulsion (Vampire the Masquerade Core Rulebook, Pg. 210) with that Character serving as the subject of their fixation." },
            { name: "The One Who Stayed", cost: [3], summary: "You've made mistakes in the past, gotten too close to Kine and your Beast lashed out. In at least one case, you've kept close to a Kindred that had been close to a Kine you hurt, whether out of sympathy or opportunity, providing them with emotional stability and they with you. You gain them as a Mawla (••) and when either of you comforts the other, you restore a point of Aggravated Willpower Damage. Add an additional die to Disciplines you use against them, but if they ever find out what you did, your unmarked Humanity is filled with Stains." },
            { name: "Leucosia Vengeance", cost: [4], summary: "Your blood stirs and lashes out and tears at yourself in a vengeful fashion, akin to Leucosia herself when she was betrayed. When a Contact, Retainer, Ally, Mawla, or Obsession betrays you in some way, they become your Vendetta. Add three dice to any Discipline Pools used against them. Additionally, Vendetta addons you purchase cost two experience per dot, rather than three." },
            { name: "Siren Song", cost: [5], summary: "Your Bloodline's namesake isn't mere suggestion, they were masterful makers of thralls and fools that served them. Once per story, when you successfully seduce a mortal, they become a Retainer with dots appropriate to their usefulness, if that mortal is your Obsession, add your Hunger in bonus dice to any rolls made towards seducing them for the remainder of the scene and they remain your Obsession until the end of the next Story even if another effect would cause you to gain a different one. Your Dominate and Presence add twice their dice against Retainers gained from this Background. These Retainers last until the end of the Chronicle, and can be purchased as permanent Retainers at a cost of 2 experience per dot." },
        ]
    },
    {
        title: "Blood Knights of Lady Sabella",
        summary: "Bloodline; Toreador characters only. Bloodline with origins amongst the Order of the Blood of Sabella. These chivalric Kindred are rare in the modern age, Embraced only from Kine who are willing to put their lives on the line for those they care for, namely the biological descendants of Lady Sabella herself. These descendants have since spread across the world, causing this Bloodline to expand in a similar breadth, as each Embraced into this line are done so specifically to guard such a descendant, and who were likely close to them in life.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "A Knight's Ward", cost: [1], summary: "The cornerstone of your order is that each Knight has a Charge, whom they share a deep protective bond with. Your Charge is also your Obsession, you gain the Humanity Shield (••) Merit and the Until Death (•) Flaw. Additionally, add a bonus die to your Stamina pools while in the presence of your Charge." },
            { name: "Peace and Lavender", cost: [2], summary: "The Lady Sabella refrained from ever giving into her Hunger, instead choosing eternal torpor amongst the lavender and roses of her family tomb. Her resolve and poise runs in your blood, and once per Story, you may forgo making a Rouse Check and instead spend two points of Willpower. In the presence of your Charge, this cost is reduced to a single point of Willpower." },
            { name: "Valiant Guard", cost: [3], summary: "Your forebears forsook selfish aims as part of their oath to defend their Charge, using shields as their primary implements in combat. While wielding a shield, add an additional bonus die when you make an All-Out Defense and anyone standing on the opposite side of you from attackers count as having full cover. In modern nights, anything large enough to cover your upper body, durable enough to take a hit, and light enough for you to carry, counts as a shield. Contemporary Knights have used everything from ballistic shields, to soldered hub caps with a grip on the back." },
            { name: "Thou Shalt Not Forsake", cost: [4], summary: "Though your Bloodline lacks the inherent talent for supernatural senses and divination, a glimpse of that ability can still be called on, though only in regards to those important to you. At any time you may take a full turn to concentrate with your eyes closed, visualizing your Charge, a Touchstone, member of your Herd, or your Obsession, and roll a number of dice equal to your Humanity; Difficulty 3. On a Win you see a still image of the chosen individual and what state they're currently in, a Critical Win also allows you to see their immediate surroundings. Individuals with Auspex or similar abilities will always know they're being watched." },
            { name: "The Mortal Gifts", cost: [5], summary: "Your Charge has begun to manifest strange supernatural gifts. Becoming a Gifted Mortal with two dots in one Discipline, and one in another. These Disciplines are not vampiric in origin, and should be treated as inherent abilities due to some unique condition or previously unknown heritage. These new abilities have attracted the attention of a Kindred or another supernatural threat in the form of a supernatural Enemy (•••) or Adversary (•••), who seeks to harm or take your Charge from you." },
        ]
    },
    {
        title: "Scriveners of the Dark",
        summary: "Bloodline; Toreador characters only. A shadowy bloodline with a bleak fixation spiralling through their minds. These darkly-blooded Kindred descend from the enigmatic Scrivener of the Dark, a Toreador poet who became seduced by darkness and the dread that came with it, treading abyssal waters to craft alien fiction and painted with ever darker pigments. Many of this line live their existence without ever really knowing what they are.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Creator's Dilemma", cost: [1], summary: "Reality is a mere fabric, overlaying a vast ocean of night, and your creative power can send out ripples to alter its shape. Once per Story, you may spend a scene creating a piece of fine art that portrays your current Desire (VtM Core Rulebook, Pg. 174). For the rest of the Story, add two bonus dice to any pools to obtain that Desire within the current Scene, and such pools suffer no penalties from Compulsions. However your Dice Pools made to avoid that Desire suffer a two-dice penalty." },
            { name: "Dark Disquiet", cost: [2], summary: "A constant unease lay at the back of your mind and in your blood, so when instances of tension, fear, or anxiety occur, you're poised to keep from looking away. When you resist a fear response, including provoked Frenzy, it must beat a difficulty equal to your Marked Willpower.You cannot use this Background if you are Mentally Impaired." },
            { name: "The Poet's Muse", cost: [3], summary: "Your Bloodline was born from the seductive dark. Whenever you attempt to understand something that usually requires an Academics or Occult roll, you may instead spend a scene creating fine art of any kind and use that art's creative pool instead, allowing the darkness itself to drip-feed you understanding. When you do this, pin one of your Hunger Dice to an automatic 10, setting it aside and rolling the remainder of the pool. A Win on the Test grants you understanding, and you gain a free specialty in your used Skill in regards to it, however a Messy Critical causes you to take non-halved Superficial Willpower Damage equal to the Successes, in addition to any other repercussions." },
            { name: "Herald of Darkness", cost: [4], summary: "The abyssal depths scratches from within. Gain one free dot in the Oblivion Discipline and it's counted as in-Clan for the purposes of purchasing additional dots with experience. However a 1 or 10 on a Rouse Check made when activating a power or ceremony of Oblivion causes the Abyss to spring forth into reality, manifesting as a dark doppelganger that actively works against you. This dark twin has all your Attributes, Skills, Disciplines, and Secondary Stats, however as a manifestation of Oblivion it suffers Aggravated Damage from direct bright light, and Superficial Damage from other light sources." },
            { name: "Children of the Elder God", cost: [5], summary: "The Scrivener's Manuscript sent ripples out into the sea of night, attracting the Ascetics of the Dark, a group of Lasombra practicing primordial mysticism. You have three pages of the Scrivener's Manuscript, counting as a Masterwork (•••). You also gain an Ascetic of the Dark as a Mawla (•••). You can give any number of these pages to the Ascetic, reducing the rating of the Masterwork by one dot, and they will repay you in equal Backgrounds of your choice, or perform a Power or Ceremony of Oblivion for you, even in combat. Alternatively, the value of these pages increases if you hold on to them, as per any Masterwork." },
        ]
    },
    {
        title: "Bacchic Enthrallers",
        summary: "Bloodline; Toreador characters only. The Bacchic dancers are beings of primal revelry, obsessed with life and indulging deeply in its pleasures. Originating in Greece as a Dionysian cult, they expressed their devotion through drug-fueled ecstasy and frenzied dances that often ended in sacrificial offerings. These rituals burned away the hardship of their worshipper's lives, transforming them into devout followers reborn in the dancer's image.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "The Invitation", cost: [1], summary: "The Bacchic Dancer's allure is subtle: a whispered invitation, a knowing look, a perfectly extended hand, coaxing others to abandon their burdens—if only for a night. Add a bonus die to your Persuasion and Subterfuge pools when urging someone to act spontaneously or indulge in something long denied. On a Win, you both recover a point of Superficial Willpower." },
            { name: "On the Pulse", cost: [2], summary: "You know every shadow, every heartbeat, every shifting body in your chosen venue. Here, you gain Status (••) when dealing with Kine as your reputation and a two dice bonus to evasive pools when slipping effortlessly through the crowd. Once per story you may pick a nameless mortal who has locked eyes with you, danced too close, or tasted something they shouldn't have. For the rest of the session, they become your Retainer (•), caught in your wake, willing to do as you ask—until they wake up the next day with only a fading dream of you." },
            { name: "Step to My world", cost: [3], summary: "Once someone joins the dance, their resistance begins to slip as the motion amplifies your supernatural powers. Add a bonus Die to Presence and Dominate pools made to convince someone to dance with you. Double that bonus in regards to people dancing with you already." },
            { name: "Dionyisian Release", cost: [4], summary: "You exude a pheromone-like pull, lowering inhibitions and stirring the Beast of others. Once per Story, when another Character becomes mentally impaired due to your actions, you can make a Rouse Check to force them into a state of ecstatic abandon—where they confess their deepest desires and act without hesitation for the remainder of the Scene. Unlike Frenzy, this is not rage, hunger, or fear of the Beast—it is surrender, indulgence, and reckless want. While they're in this state, add three bonus Dice to your Charisma and Manipulation pools made against them." },
            { name: "The Bacchanalia", cost: [5], summary: "You can host an extravagant Bacchanalia, drawing crowds from across the city and beyond. The revelry attracts Herd (•••••) with Intense or better Resonances, as Mortals spontaneously provide music, food, drink, and entertainment. Attendees enter a euphoric haze, remembering only their feelings, while Kindred freely gain the Blush of Life, savoring Mortal pleasures such as food, drink, and sex. Kindred can extend the party with a Difficulty 3 Willpower Test each hour past sunrise. Those who declined the invite suffer a one-dot damage to their Status until the end of the current Story. A Bacchanalia cannot be held again until after the end of the next Story." },
        ]
    },
    {
        title: "The Aberrant Volgirre",
        summary: "Bloodline; Toreador characters only. An obscure group of Toreador whose lineage stems from the Methuselah Philippe Volgirre, a French Baron that had already lived a long miserable unlife by the War of Princes at the start of the 13th century. Volgirre was mired in a deep cynicism, and dwelled on the artistic pursuits of petty spite or outright agony, even fostering such preferences in his own Childer, who existed in a state of misery as his muses, or under his cruel tutelage.",
        source: "Custom",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            { name: "Alla Prima", cost: [1], summary: "Baron Volgirre's fascination with pain was complimented by a talent in fleshcraft, something usually seen only amongst the Tzimisce. You may purchase the powers of Vicissitude and Fleshcrafting using levels in Auspex as the required Amalgam in place of Dominate. This can affect other such powers at the Storyteller's discretion." },
            { name: "Pittura dal Vivo", cost: [2], summary: "Vestiges of precision and grace still linger in fleeting bursts somewhere in your rosy blood. When taking this Background, choose a Level 1 Celerity Power. You can make a Rouse Check to gain that power for a Scene, treating it as if you had one dot in Celerity for its pools and other mechanics if you have none. You must still pay any other costs associated with using it." },
            { name: "Intaglio", cost: [3], summary: "Your Bloodline's defection from the Sabbat came with a number of promises and perks from the Ivory Tower as part of the deal. The local Camarilla authority has provided you with a Mask (••) that gives you a false name and lineage, as well as a Haven (••). The details of these backgrounds are fully known by who provided them so snubbing or betraying them may damage or remove one or both backgrounds until you make amends." },
            { name: "Vieux Amis", cost: [4], summary: "While the Volgirre have been a secret addition to the Camarilla for almost two decades, their former peers amongst the Lasombra are rather new ones. You and a Lasombra who has recently joined the Camarilla are in a mutual level three blood bond due to a Sabbat blood rite. This same rite has ensured that this bond will never fade, but has the benefit of making you unbondable to all others." },
            { name: "Arte Vivente", cost: [5], summary: "Part of why your Bloodline was welcomed into the fold of the Camarilla was due to the Volgirre having almost six centuries of unique art. Much of this art was the result of your Bloodline's ability to mold flesh and bone. You have a Ghouled Retainer (••••) that has been either passed down to you by your Sire, or simply gifted to you by another of your line. This Retainer is a work of living art, whose body was used as canvas. They have Stunning (••••) and count as a Masterwork (••) that you and one other Toreador is Utterly Enthralled (••) with." },
        ]
    },
    // {
    //     title: "Sample",
    //     summary: "Sample",
    //     source: "Core V5 p394",
    //     requirementFunctions: [],
    //     merits: [
    //         { name: "Sample", cost: [1], summary: "SampleSummary" },
    //         { name: "Sample", cost: [2], summary: "SampleSummary" },
    //         { name: "Sample", cost: [3], summary: "SampleSummary" },
    //         { name: "Sample", cost: [4], summary: "SampleSummary" },
    //         { name: "Sample", cost: [5], summary: "SampleSummary" },
    //     ]
    // },
]
