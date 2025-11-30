import { Button, Card, Center, Grid, Group, ScrollArea, Stack, Text, Title } from "@mantine/core"
import { useState } from "react"
import { Character } from "../../data/UnifiedCharacter"

// Safe import for werewolf functionality that might not be fully implemented
let isWerewolfCharacter: ((character: Character) => boolean) | undefined;
let syncWerewolfCompatibilityFields: ((character: Character) => Character) | undefined;
try {
    const unifiedCharacterModule = require("../../data/UnifiedCharacter");
    isWerewolfCharacter = unifiedCharacterModule.isWerewolfCharacter;
    syncWerewolfCompatibilityFields = unifiedCharacterModule.syncWerewolfCompatibilityFields;
} catch (error) {
    console.warn("Werewolf functionality not available:", error);
    isWerewolfCharacter = undefined;
    syncWerewolfCompatibilityFields = undefined;
}
import { Gift, giftsByCategory } from "../../data/Gifts"
import { Power } from "../../data/Disciplines"
import { globals } from "../../globals"

type GiftsPickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const GiftsPicker = ({ character, setCharacter, nextStep }: GiftsPickerProps) => {
    // Only render for werewolf characters - gracefully handle if werewolf functionality is disabled
    if (!isWerewolfCharacter || !isWerewolfCharacter(character)) {
        return (
            <Center style={{ height: '400px' }}>
                <Stack align="center" spacing="md">
                    <Text size="xl" color="dimmed">Werewolf functionality is currently under development</Text>
                    <Button onClick={nextStep} variant="outline">Continue to Next Step</Button>
                </Stack>
            </Center>
        )
    }

    const [selectedGifts, setSelectedGifts] = useState<Gift[]>([])

    const convertGiftToPower = (gift: Gift): Power => ({
        name: gift.name,
        discipline: "", // Use empty discipline name for gifts
        level: 1, // Default level
        summary: gift.summary,
        description: gift.description,
        dicePool: gift.dicePool,
        rouseChecks: 0, // Gifts don't use rouse checks, they use Rage/Gnosis
        amalgamPrerequisites: []
    })

    const handleGiftSelect = (gift: Gift) => {
        const isSelected = selectedGifts.some(g => g.name === gift.name)
        
        if (isSelected) {
            setSelectedGifts(selectedGifts.filter(g => g.name !== gift.name))
        } else {
            if (selectedGifts.length < 3) { // Limit to 3 gifts
                setSelectedGifts([...selectedGifts, gift])
            }
        }
    }

    const handleNext = () => {
        const giftPowers = selectedGifts.map(convertGiftToPower)
        
        const updatedCharacter = syncWerewolfCompatibilityFields 
            ? syncWerewolfCompatibilityFields({
                ...character,
                gifts: giftPowers,
            })
            : {
                ...character,
                gifts: giftPowers,
            };

        setCharacter(updatedCharacter)
        nextStep()
    }

    // Get available gifts based on tribe and auspice
    const availableGifts = [
        ...giftsByCategory.Native,
        ...giftsByCategory[character.auspice as keyof typeof giftsByCategory] || [],
        ...giftsByCategory[character.tribe as keyof typeof giftsByCategory] || [],
    ]

    const height = globals.viewportHeightPx

    return (
        <div style={{ height: height - 250 }}>
            <Text size={30} align="center">
                Choose your starting <b>Gifts</b>
            </Text>

            <Text align="center" size="xl" weight={700} color="red">
                Gifts ({selectedGifts.length}/3)
            </Text>
            <hr color="#e03131" />

            <ScrollArea style={{ height: height - 280 }} w="100%" p={20}>
                <Grid>
                    {availableGifts.map((gift) => {
                        const isSelected = selectedGifts.some(g => g.name === gift.name)
                        
                        return (
                            <Grid.Col key={gift.name} xs={12} sm={6} md={4}>
                                <Card
                                    padding="lg"
                                    radius="md"
                                    style={{
                                        cursor: "pointer",
                                        height: 200,
                                        border: isSelected ? "2px solid #51cf66" : "1px solid #495057",
                                        backgroundColor: isSelected ? "rgba(81, 207, 102, 0.1)" : undefined,
                                        transition: "all 0.2s ease",
                                    }}
                                    onClick={() => handleGiftSelect(gift)}
                                >
                                    <Stack spacing="xs" style={{ height: "100%" }} justify="space-between">
                                        <div>
                                            <Title order={4} align="center">{gift.name}</Title>
                                            <Text size="xs" color="dimmed" align="center" mb="sm">
                                                {gift.category} • {gift.renown}
                                            </Text>
                                            <Text size="sm" style={{ minHeight: 60, overflow: "hidden" }}>
                                                {gift.summary}
                                            </Text>
                                        </div>
                                        <div>
                                            <Text size="xs" color="dimmed">
                                                <b>Dice Pool:</b> {gift.dicePool}
                                            </Text>
                                            <Text size="xs" color="dimmed">
                                                <b>Cost:</b> {gift.cost}
                                            </Text>
                                        </div>
                                    </Stack>
                                </Card>
                            </Grid.Col>
                        )
                    })}
                </Grid>
            </ScrollArea>

            <Center mt="md">
                <Group>
                    <Button
                        onClick={handleNext}
                        size="lg"
                        disabled={selectedGifts.length === 0}
                    >
                        Continue with {selectedGifts.length} Gift{selectedGifts.length !== 1 ? 's' : ''}
                    </Button>
                </Group>
            </Center>
        </div>
    )
}

export default GiftsPicker