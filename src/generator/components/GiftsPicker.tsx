import { Accordion, Badge, Button, Card, Grid, Group, ScrollArea, Stack, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import ReactGA from "react-ga4"
import { Character, isWerewolfCharacter, WerewolfCharacter } from "../../data/UnifiedCharacter"
import { Gift, getGiftsByCategory, GiftCategory } from "../../data/Gifts"
import { globals } from "../../globals"


type GiftsPickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const getAvailableGifts = (character: Character): Gift[] => {
    // Only werewolf characters have access to gifts
    if (!isWerewolfCharacter(character)) {
        return []
    }
    
    const werewolfChar = character as WerewolfCharacter
    const availableGifts: Gift[] = []
    
    // Add native gifts (available to all Garou)
    availableGifts.push(...getGiftsByCategory("Native"))
    
    // Add gifts based on auspice
    if (werewolfChar.auspice) {
        availableGifts.push(...getGiftsByCategory(werewolfChar.auspice as GiftCategory))
    }
    
    // Add gifts based on tribe  
    if (werewolfChar.tribe) {
        availableGifts.push(...getGiftsByCategory(werewolfChar.tribe as GiftCategory))
    }
    
    return availableGifts
}

const GiftsPicker = ({ character, setCharacter, nextStep }: GiftsPickerProps) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Gifts Picker" })
    }, [])
    
    // Only render for werewolf characters
    if (!isWerewolfCharacter(character)) {
        return (
            <div style={{ textAlign: "center", padding: "50px" }}>
                <Text size="xl" color="dimmed">This component is only available for werewolf characters</Text>
                <Button onClick={nextStep} variant="outline" style={{ marginTop: "20px" }}>Continue to Next Step</Button>
            </div>
        )
    }
    
    const werewolfChar = character as WerewolfCharacter

    const smallScreen = globals.isSmallScreen
    const [pickedGifts, setPickedGifts] = useState<Gift[]>([])

    const allPickedGifts = pickedGifts

    const availableGifts = getAvailableGifts(character)

    const isPicked = (gift: Gift) => {
        return allPickedGifts.map((gift) => gift.name).includes(gift.name)
    }

    // New gift selection rules: 1 from Auspice, 1 from Native, 1 from Tribe
    const canPickMoreGifts = (giftCategory: string) => {
        const currentCount = allPickedGifts.filter((p: Gift) => p.category === giftCategory).length
        
        // Always allow 1 gift from each category type
        if (giftCategory === "Native") {
            return currentCount < 1
        }
        
        // Check if this is an auspice gift
        const auspiceCategories = ["Ragabash", "Theurge", "Philodox", "Galliard", "Ahroun"]
        if (auspiceCategories.includes(giftCategory)) {
            const auspiceGiftsCount = allPickedGifts.filter((p: Gift) => auspiceCategories.includes(p.category)).length
            return auspiceGiftsCount < 1
        }
        
        // Check if this is a tribe gift
        const tribeCategories = ["Black Furies", "Bone Gnawers", "Children of Gaia", "Galestalkers", "Ghost Council", "Glass Walkers", "Hart Wardens", "Red Talons", "Shadow Lords", "Silent Striders", "Silver Fangs"]
        if (tribeCategories.includes(giftCategory)) {
            const tribeGiftsCount = allPickedGifts.filter((p: Gift) => tribeCategories.includes(p.category)).length
            return tribeGiftsCount < 1
        }
        
        return false
    }

    const validToMove = pickedGifts.length === 3 // Must have exactly 3 gifts: 1 Auspice, 1 Native, 1 Tribe

    const createGiftCard = (gift: Gift) => {
        const picked = isPicked(gift)
        const disabled = picked || !canPickMoreGifts(gift.category)

        return (
            <Card key={gift.name} withBorder shadow="sm" style={{ opacity: disabled ? 0.5 : 1 }}>
                <Stack spacing="xs">
                    <Group position="apart" align="flex-start">
                        <Text weight={500} size="sm">
                            {gift.name}
                        </Text>
                        <Badge size="xs" color={picked ? "green" : "gray"}>
                            {gift.renown}
                        </Badge>
                    </Group>
                    <Text size="xs" color="dimmed">
                        {gift.summary}
                    </Text>
                    {gift.dicePool && (
                        <Text size="xs" color="blue">
                            Dice Pool: {gift.dicePool}
                        </Text>
                    )}
                    <Group position="apart">
                        <Text size="xs" color="orange">
                            Cost: {gift.cost}
                        </Text>
                        <Text size="xs" color="gray">
                            Duration: {gift.duration}
                        </Text>
                    </Group>
                    <Button
                        size="xs"
                        disabled={disabled}
                        onClick={() => {
                            if (picked) return
                            
                            const newGifts = [...pickedGifts, gift]
                            setPickedGifts(newGifts)
                            
                            // Convert gifts to disciplines format for backward compatibility
                            const disciplinesFormat = newGifts.map(g => ({
                                name: g.name,
                                description: g.description,
                                summary: g.summary,
                                dicePool: g.dicePool,
                                level: 1,
                                discipline: "potence" as const, // Use consistent discipline for gifts
                                rouseChecks: 0,
                                amalgamPrerequisites: [],
                            }))
                            
                            setCharacter({
                                ...character,
                                disciplines: disciplinesFormat,
                            })

                            ReactGA.event({
                                action: "gift picked",
                                category: "character_creation",
                                label: gift.name,
                            })
                        }}
                        color={picked ? "green" : "blue"}
                    >
                        {picked ? "✓ Selected" : "Select Gift"}
                    </Button>
                </Stack>
            </Card>
        )
    }

    const createCategoryAccordion = (categoryName: string, categoryGifts: Gift[]) => {
        if (!categoryGifts.length) return null

        // Get the category type and count for display
        let pickedCount = 0
        const maxCount = 1
        let categoryDisplayName = categoryName

        if (categoryName === "Native") {
            pickedCount = allPickedGifts.filter((p: Gift) => p.category === "Native").length
            categoryDisplayName = "Native Gifts"
        } else {
            const auspiceCategories = ["Ragabash", "Theurge", "Philodox", "Galliard", "Ahroun"]
            const tribeCategories = ["Black Furies", "Bone Gnawers", "Children of Gaia", "Galestalkers", "Ghost Council", "Glass Walkers", "Hart Wardens", "Red Talons", "Shadow Lords", "Silent Striders", "Silver Fangs"]
            
            if (auspiceCategories.includes(categoryName)) {
                pickedCount = allPickedGifts.filter((p: Gift) => auspiceCategories.includes(p.category)).length
                categoryDisplayName = `${categoryName} Gifts (Auspice)`
            } else if (tribeCategories.includes(categoryName)) {
                pickedCount = allPickedGifts.filter((p: Gift) => tribeCategories.includes(p.category)).length
                categoryDisplayName = `${categoryName} Gifts (Tribe)`
            }
        }

        return (
            <Accordion.Item key={categoryName} value={categoryName}>
                <Accordion.Control>
                    <Group position="apart">
                        <Text weight={500}>{categoryDisplayName}</Text>
                        <Badge color={pickedCount >= maxCount ? "green" : "blue"}>
                            {pickedCount}/{maxCount}
                        </Badge>
                    </Group>
                </Accordion.Control>
                <Accordion.Panel>
                    <Grid>
                        {categoryGifts.map((gift) => (
                            <Grid.Col key={gift.name} span={smallScreen ? 12 : 6}>
                                {createGiftCard(gift)}
                            </Grid.Col>
                        ))}
                    </Grid>
                </Accordion.Panel>
            </Accordion.Item>
        )
    }

    // Group gifts by category, but only show categories the character has access to
    const giftsByCategory: Record<string, Gift[]> = {}
    availableGifts.forEach(gift => {
        // Only include gifts that the character should have access to
        if (gift.category === "Native" || 
            gift.category === werewolfChar.auspice || 
            gift.category === werewolfChar.tribe) {
            if (!giftsByCategory[gift.category]) {
                giftsByCategory[gift.category] = []
            }
            giftsByCategory[gift.category].push(gift)
        }
    })

    const height = globals.viewportHeightPx

    return (
        <div style={{ width: smallScreen ? "393px" : "810px", marginTop: globals.isPhoneScreen ? "60px" : "80px" }}>
            <Stack spacing="lg">
                <div>
                    <Text size="xl" weight={700} align="center">
                        Choose Your Gifts
                    </Text>
                    <Text size="sm" color="dimmed" align="center">
                        Select 3 Gifts: 1 from your Auspice, 1 Native Gift, and 1 from your Tribe
                    </Text>
                </div>

                <ScrollArea style={{ height: height - 260 }}>
                    <Accordion variant="contained" multiple>
                        {Object.entries(giftsByCategory).map(([categoryName, categoryGifts]) =>
                            createCategoryAccordion(categoryName, categoryGifts)
                        )}
                    </Accordion>
                </ScrollArea>

                <div style={{ position: "sticky", bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "10px", borderRadius: "8px", marginTop: "10px" }}>
                    <Group position="center" spacing="lg">
                        <Text size="sm" color="dimmed">
                            Selected: {pickedGifts.length}/3 gifts
                        </Text>
                        <Button
                            color="red"
                            onClick={() => {
                                setPickedGifts([])
                                setCharacter({
                                    ...character,
                                    disciplines: [],
                                })
                            }}
                            disabled={pickedGifts.length === 0}
                        >
                            Reset Selection
                        </Button>
                        <Button
                            disabled={!validToMove}
                            onClick={() => {
                                ReactGA.event({
                                    action: "gifts completed",
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

export default GiftsPicker