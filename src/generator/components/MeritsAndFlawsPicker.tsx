import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Grid, ScrollArea, Stack, Tabs, Text, useMantineTheme } from "@mantine/core"
import { useEffect, useState } from "react"
import ReactGA from "react-ga4"
import { Character, MeritFlaw } from "../../data/Character"
import { isThinbloodFlaw, isThinbloodMerit, isGhoulFlaw, isGhoulMerit, isElderFlaw, isElderMerit, MeritOrFlaw, meritsAndFlaws, thinbloodMeritsAndFlaws, ghoulMeritsAndFlaws, elderMeritsAndFlaws, bargainFlaws } from "../../data/MeritsAndFlaws"
import { meritsAndFlaws as werewolfMeritsAndFlaws } from "../../data/WerewolfMeritsAndFlaws"
import { UnifiedCharacter } from "../../data/UnifiedCharacter"
import { PredatorTypes } from "../../data/PredatorType"
import { globals } from "../../globals"
import { Loresheets } from "./Loresheets"
import { isWerewolfCharacter } from "../../data/UnifiedCharacter"

type MeritsAndFlawsPickerProps = {
    character: UnifiedCharacter
    setCharacter: (character: UnifiedCharacter) => void
    nextStep: () => void
}

const flawIcon = () => {
    return <FontAwesomeIcon icon={faPlay} rotation={90} style={{ color: "#e03131" }} />
}
const meritIcon = () => {
    return <FontAwesomeIcon icon={faPlay} rotation={270} style={{ color: "rgb(47, 158, 68)" }} />
}

const MeritsAndFlawsPicker = ({ character, setCharacter, nextStep }: MeritsAndFlawsPickerProps) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Merits-and-flaws Picker" })
    }, [])
    const theme = useMantineTheme()

    const [activeTab, setActiveTab] = useState<string | null>("merits")

    const [pickedMeritsAndFlaws, setPickedMeritsAndFlaws] = useState<MeritFlaw[]>([...character.merits, ...character.flaws])

    const isWerewolf = isWerewolfCharacter ? isWerewolfCharacter(character) : false
    const isGhoul = character.clan === "Ghoul"
    const isElder = character.isElder || character.isMethuselah
    
    // Use werewolf merits for werewolf characters, vampire merits for others
    const currentMeritsAndFlaws = isWerewolf ? werewolfMeritsAndFlaws : meritsAndFlaws
    
    // Calculate merit/flaw points - simplified for werewolf characters
    const getMeritFlawPoints = () => {
        if (isWerewolf) {
            return { merits: 15, flaws: 7 }; // Standard werewolf points
        }
        // Vampire point calculation based on years as vampire
        const yearsAsVampire = character.yearsAsVampire || 0;
        if (yearsAsVampire <= 50) return { merits: 7, flaws: 2 }; // Fledgling
        if (yearsAsVampire <= 170) return { merits: 14, flaws: 4 }; // Ancilla  
        if (yearsAsVampire <= 1000) return { merits: 21, flaws: 6 }; // Elder
        return { merits: 999, flaws: 999 }; // Ancient - unlimited like dev mode
    }
    
    const { merits: baseMeritPoints, flaws: baseFlawPoints } = getMeritFlawPoints()
    
    // For werewolf characters, use simple point calculation
    const usedMeritsLevel = isWerewolf 
        ? character.merits.reduce((acc, { level }) => acc + level, 0)
        : character.merits.filter((m) => !isThinbloodMerit(m.name) && !isGhoulMerit(m.name) && !isElderMerit(m.name)).reduce((acc, { level }) => acc + level, 0)
    const usedFLawsLevel = isWerewolf
        ? character.flaws.reduce((acc, { level }) => acc + level, 0) 
        : character.flaws.filter((f) => !isThinbloodFlaw(f.name) && !isGhoulFlaw(f.name) && !isElderFlaw(f.name)).reduce((acc, { level }) => acc + level, 0)

    const [remainingMerits, setRemainingMerits] = useState(baseMeritPoints - usedMeritsLevel)
    const [remainingFlaws, setRemainingFlaws] = useState(baseFlawPoints - usedFLawsLevel)
    
    // Update points when character data changes
    useEffect(() => {
        const { merits: newMeritPoints, flaws: newFlawPoints } = getMeritFlawPoints()
        const currentUsedMerits = isWerewolf 
            ? character.merits.reduce((acc, { level }) => acc + level, 0)
            : character.merits.filter((m) => !isThinbloodMerit(m.name) && !isGhoulMerit(m.name) && !isElderMerit(m.name)).reduce((acc, { level }) => acc + level, 0)
        const currentUsedFlaws = isWerewolf
            ? character.flaws.reduce((acc, { level }) => acc + level, 0)
            : character.flaws.filter((f) => !isThinbloodFlaw(f.name) && !isGhoulFlaw(f.name) && !isElderFlaw(f.name)).reduce((acc, { level }) => acc + level, 0)
        
        setRemainingMerits(newMeritPoints - currentUsedMerits)
        setRemainingFlaws(newFlawPoints - currentUsedFlaws)
    }, [character.yearsAsVampire, isWerewolf, character.merits, character.flaws])

    const isThinBlood = character.clan === "Thin-blood"
    const tbMeritCount = character.merits.filter((m) => isThinbloodMerit(m.name)).length
    const tbFlawCount = character.flaws.filter((f) => isThinbloodFlaw(f.name)).length
    const [remainingThinbloodMeritPoints, setRemainingThinbloodMeritPoints] = useState(tbFlawCount - tbMeritCount)

    // Elder merit/flaw balance - similar to thin-blood system
    const elderMeritCount = character.merits.filter((m) => isElderMerit(m.name)).length
    const elderFlawCount = character.flaws.filter((f) => isElderFlaw(f.name)).length
    const [remainingElderMeritPoints, setRemainingElderMeritPoints] = useState(elderFlawCount - elderMeritCount)

    const getMeritOrFlawLine = (meritOrFlaw: MeritOrFlaw, type: "flaw" | "merit" | "bargainflaw" = "merit"): JSX.Element => {
        const isBargain = (meritOrFlaw as any).type === "bargainflaw"
        const buttonColor = isBargain ? "grape" : type === "flaw" ? "red" : "green"
        const icon = isBargain ? <FontAwesomeIcon icon={faPlay} rotation={90} style={{ color: "purple" }} /> : type === "flaw" ? flawIcon() : meritIcon()

        const alreadyPickedItem = pickedMeritsAndFlaws.find((l) => l.name === meritOrFlaw.name)
        const wasPickedLevel = alreadyPickedItem?.level ?? 0

        // For werewolf characters, no predator type merits
        const predatorTypeMeritsFlaws = isWerewolf ? [] : PredatorTypes[character.predatorType?.name]?.meritsAndFlaws || []
        const meritInPredatorType = predatorTypeMeritsFlaws.find((m) => m.name === meritOrFlaw.name)
        const meritInPredatorTypeLevel = meritInPredatorType?.level ?? 0

        const devMode = globals.devMode;
        const createButton = (level: number) => {
            const cost = level - meritInPredatorTypeLevel
            return (
                <Button
                    key={meritOrFlaw.name + level}
                    disabled={devMode ? false : (meritInPredatorType && meritInPredatorType.level >= level) || (!!wasPickedLevel && wasPickedLevel >= level)}
                    onClick={() => {
                        if (devMode) {
                            setPickedMeritsAndFlaws([
                                ...pickedMeritsAndFlaws.filter((m) => m.name !== alreadyPickedItem?.name),
                                { name: meritOrFlaw.name, level, type: isBargain ? "bargainflaw" : type, summary: meritOrFlaw.summary },
                            ])
                            return;
                        }
                        if (isWerewolf) {
                            // Simplified werewolf logic
                            if (type === "flaw") {
                                if (remainingFlaws + wasPickedLevel < cost) return
                                setRemainingFlaws(remainingFlaws + wasPickedLevel - cost)
                            } else {
                                if (remainingMerits + wasPickedLevel < cost) return
                                setRemainingMerits(remainingMerits + wasPickedLevel - cost)
                            }
                        } else {
                            // Vampire logic
                            if (isBargain) {
                                setRemainingMerits(remainingMerits + cost) // add merit points
                            } else if (isThinbloodFlaw(meritOrFlaw.name)) {
                                setRemainingThinbloodMeritPoints(remainingThinbloodMeritPoints + 1)
                            } else if (isThinbloodMerit(meritOrFlaw.name)) {
                                if (remainingThinbloodMeritPoints < cost) return
                                setRemainingThinbloodMeritPoints(remainingThinbloodMeritPoints - 1)
                            } else if (isElderFlaw(meritOrFlaw.name)) {
                                setRemainingElderMeritPoints(remainingElderMeritPoints + 1)
                            } else if (isElderMerit(meritOrFlaw.name)) {
                                if (remainingElderMeritPoints < 1) return
                                setRemainingElderMeritPoints(remainingElderMeritPoints - 1)
                            } else if (isGhoulFlaw(meritOrFlaw.name)) {
                                if (remainingFlaws + wasPickedLevel < cost) return
                                setRemainingFlaws(remainingFlaws + wasPickedLevel - cost)
                            } else if (isGhoulMerit(meritOrFlaw.name)) {
                                if (remainingMerits + wasPickedLevel < cost) return
                                setRemainingMerits(remainingMerits + wasPickedLevel - cost)
                            } else if (type === "flaw") {
                                if (remainingFlaws + wasPickedLevel < cost) return
                                setRemainingFlaws(remainingFlaws + wasPickedLevel - cost)
                            } else {
                                if (remainingMerits + wasPickedLevel < cost) return
                                setRemainingMerits(remainingMerits + wasPickedLevel - cost)
                            }
                        }
                        setPickedMeritsAndFlaws([
                            ...pickedMeritsAndFlaws.filter((m) => m.name !== alreadyPickedItem?.name),
                            { name: meritOrFlaw.name, level, type: isBargain ? "bargainflaw" : type, summary: meritOrFlaw.summary },
                        ])
                    }}
                    style={{ marginRight: "5px" }}
                    compact
                    variant="outline"
                    color={buttonColor}
                >
                    {level}
                </Button>
            )
        }

    const bg = alreadyPickedItem ? { background: isBargain ? "rgba(128,0,128,0.15)" : type === "flaw" ? "rgba(255, 25, 25, 0.2)" : "rgba(50, 255, 100, 0.2)" } : {}
        const cost = wasPickedLevel - meritInPredatorTypeLevel
        return (
            <Text style={{ ...bg, padding: "5px" }} key={meritOrFlaw.name}>
                {icon} &nbsp;
                <b>{meritOrFlaw.name}</b> - {meritInPredatorType ? "Already picked in Predator Type" : meritOrFlaw.summary}
                <span>
                    &nbsp; {meritOrFlaw.cost.map((i) => createButton(i))}
                    {alreadyPickedItem ? (
                        <Button
                            onClick={() => {
                                setPickedMeritsAndFlaws([...pickedMeritsAndFlaws.filter((m) => m.name !== alreadyPickedItem?.name)])
                                if (isWerewolf) {
                                    // Simplified werewolf unpick logic
                                    type === "flaw" ? setRemainingFlaws(remainingFlaws + cost) : setRemainingMerits(remainingMerits + cost)
                                } else {
                                    // Vampire unpick logic
                                    if (isBargain) {
                                        setRemainingMerits(remainingMerits - alreadyPickedItem.level)
                                    } else if (isThinbloodFlaw(meritOrFlaw.name)) {
                                        setRemainingThinbloodMeritPoints(remainingThinbloodMeritPoints - 1)
                                    } else if (isThinbloodMerit(meritOrFlaw.name)) {
                                        setRemainingThinbloodMeritPoints(remainingThinbloodMeritPoints + 1)
                                    } else if (isElderFlaw(meritOrFlaw.name)) {
                                        setRemainingElderMeritPoints(remainingElderMeritPoints - 1)
                                    } else if (isElderMerit(meritOrFlaw.name)) {
                                        setRemainingElderMeritPoints(remainingElderMeritPoints + 1)
                                    } else if (isGhoulFlaw(meritOrFlaw.name)) {
                                        setRemainingFlaws(remainingFlaws + cost)
                                    } else if (isGhoulMerit(meritOrFlaw.name)) {
                                        setRemainingMerits(remainingMerits + cost)
                                    } else {
                                        type === "flaw" ? setRemainingFlaws(remainingFlaws + cost) : setRemainingMerits(remainingMerits + cost)
                                    }
                                }
                            }}
                            style={{ marginRight: "5px" }}
                            compact
                            variant="subtle"
                            color={"yellow"}
                        >
                            Unpick
                        </Button>
                    ) : null}
                </span>
            </Text>
        )
    }

    const height = globals.viewportHeightPx
    const isConfirmDisabled = !globals.devMode && (
        (isWerewolf && (remainingMerits < 0 || remainingFlaws < 0)) ||
        (isThinBlood && remainingThinbloodMeritPoints < 0) || 
        (isElder && remainingElderMeritPoints < 0)
    )
    return (
        <Stack align="center" mt={100}>
            {globals.devMode && (
                <div style={{ position: "absolute", top: 10, right: 20, zIndex: 1000 }}>
                    <Text fw={900} fz={"lg"} c="lime" bg="#222" p={6} style={{ borderRadius: 8 }}>
                        DEV MODE ACTIVE
                    </Text>
                </div>
            )}
            <Text fz={globals.largeFontSize} ta={"center"}>
                {globals.devMode ? (
                    "Dev Mode: No restrictions on picking merits, flaws, or loresheets!"
                ) : (
                    <span>
                        Remaining Advantage points: {remainingMerits} <br /> Remaining Flaw points: {remainingFlaws}
                    </span>
                )}
            </Text>
            <Text fz={globals.smallFontSize} ta={"center"} c={theme.colors.grape[6]}>
                Bargain Flaws (purple) increase your available merit points instead of using flaw points.
            </Text>

            <Tabs color="grape" value={activeTab} onTabChange={setActiveTab}>
                <Tabs.List grow>
                    <Tabs.Tab maw={isWerewolf ? "100%" : "30%"} value="merits">
                        Merits & Flaws
                    </Tabs.Tab>
                    {!isWerewolf && (
                        <Tabs.Tab maw={"70%"} value="loresheets">
                            Loresheets (optional & advanced)
                        </Tabs.Tab>
                    )}
                </Tabs.List>

                {/* Merits & Flaws */}
                <Tabs.Panel value="merits" pt="xs">
                    <ScrollArea h={height - 330} w={"100%"} p={20}>
                        {isWerewolf ? (
                            <>
                                <Text fz={globals.largeFontSize} ta={"center"} c={theme.colors.green[6]}>
                                    Werewolf Merits & Flaws
                                </Text>
                                <Text fz={globals.smallFontSize} ta={"center"} c={theme.colors.green[6]}>
                                    Merit Points: {remainingMerits} | Flaw Points: {remainingFlaws}
                                </Text>
                            </>
                        ) : isThinBlood ? (
                            <>
                                <Text fz={globals.largeFontSize} ta={"center"} c={theme.colors.grape[6]}>
                                    Pick Thin-blood flaws to gain Thin-blood merit points
                                </Text>
                                <Text fz={globals.smallFontSize} ta={"center"} c={theme.colors.grape[6]}>
                                    Points: {remainingThinbloodMeritPoints}
                                </Text>
                            </>
                        ) : isElder ? (
                            <>
                                <Text fz={globals.largeFontSize} ta={"center"} c={theme.colors.orange[6]}>
                                    Pick Elder flaws to gain Elder merit points
                                </Text>
                                <Text fz={globals.smallFontSize} ta={"center"} c={theme.colors.orange[6]}>
                                    Points: {remainingElderMeritPoints}
                                </Text>
                            </>
                        ) : (
                            <>
                                <Text fz={globals.largeFontSize} ta={"center"} c={theme.colors.blue[6]}>
                                    Vampire Merits & Flaws
                                </Text>
                                <Text fz={globals.smallFontSize} ta={"center"} c={theme.colors.blue[6]}>
                                    Merit Points: {remainingMerits} | Flaw Points: {remainingFlaws}
                                </Text>
                            </>
                        )}
                        <Grid m={0}>
                            {/* Thinbloods */}
                            {isThinBlood ? thinBloodMeritsAndFlawsComponent(getMeritOrFlawLine) : null}

                            {/* Ghouls */}
                            {isGhoul ? ghoulMeritsAndFlawsComponent(getMeritOrFlawLine) : null}

                            {/* Elders */}
                            {isElder ? elderMeritsAndFlawsComponent(getMeritOrFlawLine) : null}

                            {/* Regular merits and flaws */}
                            {((isWerewolf) || (!isThinBlood && !isGhoul)) && currentMeritsAndFlaws.map((category) => {
                                return (
                                    <Grid.Col span={6} key={category.title}>
                                        <Stack spacing={"xs"}>
                                            <Text fw={700} size={"xl"}>
                                                {category.title}
                                            </Text>
                                            <Divider mt={0} w={"50%"} />

                                            {category.merits.map((merit) => getMeritOrFlawLine(merit, "merit"))}
                                                                                        {category.title === "🟣 Dark Bargains"
                                                                                            ? category.flaws.map((flaw) => getMeritOrFlawLine(flaw, "bargainflaw"))
                                                                                            : category.flaws
                                                                                                    .filter((flaw) => !(bargainFlaws as any[]).some((b) => b.name === flaw.name))
                                                                                                    .map((flaw) => getMeritOrFlawLine(flaw, "flaw"))}
                                        </Stack>
                                    </Grid.Col>
                                )
                            })}
                        </Grid>
                    </ScrollArea>
                </Tabs.Panel>

                {/* Loresheets */}
                {!isWerewolf && (
                    <Tabs.Panel value="loresheets" pt="xs">
                        <Loresheets character={character} getMeritOrFlawLine={getMeritOrFlawLine} pickedMeritsAndFlaws={pickedMeritsAndFlaws} />
                    </Tabs.Panel>
                )}
            </Tabs>

            {isConfirmDisabled ? (
                <Text c={theme.colors.red[9]}>
                    {isWerewolf && (remainingMerits < 0 || remainingFlaws < 0)
                        ? `Need to balance points (Merits: ${remainingMerits}, Flaws: ${remainingFlaws})`
                        : isThinBlood && remainingThinbloodMeritPoints < 0 
                        ? "Need to balance Thin-blood merit points"
                        : isElder && remainingElderMeritPoints < 0
                        ? "Need to balance Elder merit points" 
                        : "Need to balance merit points"}
                </Text>
            ) : null}
            <Button
                color="grape"
                disabled={isConfirmDisabled}
                onClick={() => {
                    setCharacter({
                        ...character,
                        merits: pickedMeritsAndFlaws.filter((l) => l.type === "merit"),
                        flaws: pickedMeritsAndFlaws.filter((l) => l.type === "flaw" || l.type === "bargainflaw"),
                    })

                    ReactGA.event({
                        action: "merits confirm clicked",
                        category: "merits",
                        label: pickedMeritsAndFlaws.map((m) => `${m.name}: ${m.level}`).join(", "),
                    })

                    nextStep()
                }}
            >
                Confirm
            </Button>
        </Stack>
    )
}

function thinBloodMeritsAndFlawsComponent(getMeritOrFlawLine: (meritOrFlaw: MeritOrFlaw, type: "flaw" | "merit") => JSX.Element) {
    return (
        <>
            <Grid.Col span={6}>
                <Stack spacing={"xs"}>
                    <Text fw={700} size={"xl"}>
                        Thin-blood merits
                    </Text>
                    <Divider mt={0} w={"50%"} />

                    {thinbloodMeritsAndFlaws.merits.map((merit) => getMeritOrFlawLine(merit, "merit"))}
                </Stack>
            </Grid.Col>
            <Grid.Col span={6}>
                <Stack spacing={"xs"}>
                    <Text fw={700} size={"xl"}>
                        Thin-blood flaws
                    </Text>
                    <Divider mt={0} w={"50%"} />

                    {thinbloodMeritsAndFlaws.flaws.map((flaw) => getMeritOrFlawLine(flaw, "flaw"))}
                </Stack>
            </Grid.Col>

            <Divider mt={0} w={"100%"} my={"lg"} />
        </>
    )
}

function elderMeritsAndFlawsComponent(getMeritOrFlawLine: (meritOrFlaw: MeritOrFlaw, type: "flaw" | "merit") => JSX.Element) {
    return (
        <>
            <Grid.Col span={6}>
                <Stack spacing={"xs"}>
                    <Text fw={700} size={"xl"} c="orange">
                        Elder merits
                    </Text>
                    <Divider mt={0} w={"50%"} />

                    {elderMeritsAndFlaws.merits.map((merit) => getMeritOrFlawLine(merit, "merit"))}
                </Stack>
            </Grid.Col>
            <Grid.Col span={6}>
                <Stack spacing={"xs"}>
                    <Text fw={700} size={"xl"} c="orange">
                        Elder flaws
                    </Text>
                    <Divider mt={0} w={"50%"} />

                    {elderMeritsAndFlaws.flaws.map((flaw) => getMeritOrFlawLine(flaw, "flaw"))}
                </Stack>
            </Grid.Col>

            <Divider mt={0} w={"100%"} my={"lg"} />
        </>
    )
}

function ghoulMeritsAndFlawsComponent(getMeritOrFlawLine: (meritOrFlaw: MeritOrFlaw, type: "flaw" | "merit") => JSX.Element) {
    return (
        <>
            {ghoulMeritsAndFlaws.map((category) => {
                return (
                    <Grid.Col span={6} key={category.title}>
                        <Stack spacing={"xs"}>
                            <Text fw={700} size={"xl"}>
                                {category.title}
                            </Text>
                            <Divider mt={0} w={"50%"} />

                            {category.merits.map((merit) => getMeritOrFlawLine(merit, "merit"))}
                            {category.flaws.map((flaw) => getMeritOrFlawLine(flaw, "flaw"))}
                        </Stack>
                    </Grid.Col>
                )
            })}
            <Divider mt={0} w={"100%"} my={"lg"} />
        </>
    )
}

export default MeritsAndFlawsPicker
