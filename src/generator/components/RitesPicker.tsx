import { Accordion, Badge, Button, Card, Grid, Group, ScrollArea, Stack, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import ReactGA from "react-ga4"
import { Character, isWerewolfCharacter } from "../../data/UnifiedCharacter"
import { Rite, getRitesByType } from "../../data/Rites"
import { globals } from "../../globals"
import { upcase } from "../utils"

type RitesPickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const RitesPicker = ({ character, setCharacter, nextStep }: RitesPickerProps) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Rites Picker" })
    }, [])

    const smallScreen = globals.isSmallScreen
    const [pickedRite, setPickedRite] = useState<Rite | null>(null)

    const isPicked = (rite: Rite) => {
        return pickedRite?.name === rite.name
    }

    const validToMove = pickedRite !== null // Must have exactly 1 rite selected

    const createRiteCard = (rite: Rite) => {
        const picked = isPicked(rite)

        return (
            <Card key={rite.name} withBorder shadow="sm" style={{ opacity: picked ? 1 : (pickedRite ? 0.5 : 1) }}>
                <Stack spacing="xs">
                    <Group position="apart" align="flex-start">
                        <Text weight={500} size="sm">
                            {rite.name}
                        </Text>
                        <Group spacing="xs">
                            {rite.renown && (
                                <Badge size="xs" color="blue">
                                    {rite.renown}
                                </Badge>
                            )}
                            <Badge size="xs" color="gray" variant="outline">
                                Diff: {rite.difficulty}
                            </Badge>
                        </Group>
                    </Group>
                    <Text size="xs" color="dimmed">
                        {rite.summary}
                    </Text>
                    <Text size="xs" color="green">
                        Pool: {rite.pool}
                    </Text>
                    <Button
                        size="xs"
                        disabled={pickedRite !== null && !picked}
                        onClick={() => {
                            if (picked) {
                                // Unpick the rite
                                setPickedRite(null)
                                if (isWerewolfCharacter(character)) {
                                    setCharacter({
                                        ...character,
                                        rites: [],
                                    })
                                }
                            } else {
                                // Pick this rite
                                setPickedRite(rite)
                                if (isWerewolfCharacter(character)) {
                                    setCharacter({
                                        ...character,
                                        rites: [rite],
                                    })
                                }
                            }

                            ReactGA.event({
                                action: picked ? "rite unpicked" : "rite picked",
                                category: "character_creation",
                                label: rite.name,
                            })
                        }}
                        color={picked ? "red" : "blue"}
                        variant={picked ? "outline" : "filled"}
                    >
                        {picked ? "✗ Remove" : "✓ Select Rite"}
                    </Button>
                </Stack>
            </Card>
        )
    }

    const createCategoryAccordion = (categoryName: string, categoryRites: Rite[]) => {
        if (!categoryRites.length) return null

        const hasPickedRite = pickedRite && categoryRites.some(r => r.name === pickedRite.name)

        return (
            <Accordion.Item key={categoryName} value={categoryName}>
                <Accordion.Control>
                    <Group position="apart">
                        <Text weight={500}>{upcase(categoryName)} Rites</Text>
                        <Badge color={hasPickedRite ? "green" : "blue"}>
                            {categoryRites.length} available
                        </Badge>
                    </Group>
                </Accordion.Control>
                <Accordion.Panel>
                    <Grid>
                        {categoryRites.map((rite) => (
                            <Grid.Col key={rite.name} span={smallScreen ? 12 : 6}>
                                {createRiteCard(rite)}
                            </Grid.Col>
                        ))}
                    </Grid>
                </Accordion.Panel>
            </Accordion.Item>
        )
    }

    // Get rites organized by category
    const commonRites = getRitesByType("Common")
    const socialRites = getRitesByType("Social") 
    const mysticalRites = getRitesByType("Mystical")

    const height = globals.viewportHeightPx

    return (
        <div style={{ width: smallScreen ? "393px" : "810px", marginTop: globals.isPhoneScreen ? "40px" : "60px" }}>
            <Stack spacing="lg">
                <div style={{ marginBottom: "20px" }}>
                    <Text size="xl" weight={700} align="center" mb="sm">
                        Choose Your Rite
                    </Text>
                    <Text size="sm" color="dimmed" align="center">
                        Select 1 ritual that your character knows how to perform
                    </Text>
                </div>

                <ScrollArea style={{ height: height - 260, marginTop: "10px" }}>
                    <Accordion variant="contained" multiple>
                        {createCategoryAccordion("Common", commonRites)}
                        {createCategoryAccordion("Social", socialRites)}
                        {createCategoryAccordion("Mystical", mysticalRites)}
                    </Accordion>
                </ScrollArea>

                <div style={{ position: "sticky", bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "10px", borderRadius: "8px", marginTop: "10px" }}>
                    <Group position="center" spacing="lg">
                        <Text size="sm" color="dimmed">
                            Selected: {pickedRite ? pickedRite.name : "None"}
                        </Text>
                        <Button
                            color="red"
                            onClick={() => {
                                setPickedRite(null)
                                if (isWerewolfCharacter(character)) {
                                    setCharacter({
                                        ...character,
                                        rites: [],
                                    })
                                }
                            }}
                            disabled={pickedRite === null}
                        >
                            Reset Selection
                        </Button>
                        <Button
                            disabled={!validToMove}
                            onClick={() => {
                                ReactGA.event({
                                    action: "rites completed",
                                    category: "character_creation",
                                })
                                nextStep()
                            }}
                        >
                            Continue
                        </Button>
                    </Group>
                </div>
            </Stack>
        </div>
    )
}

export default RitesPicker