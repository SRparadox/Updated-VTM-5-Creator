import { Card, Center, Grid, Image, ScrollArea, Text, Title, Button, Stack } from "@mantine/core"

import { AuspiceName, auspiceNameSchema } from "../../data/NameSchemas"
import { Character } from "../../data/UnifiedCharacter"
import { auspices } from "../../data/Auspices"
import { globals } from "../../globals"

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

type AuspicePickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const AuspicePicker = ({ character, setCharacter, nextStep }: AuspicePickerProps) => {
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

    const c1 = "rgba(26, 27, 30, 0.90)"

    const createAuspicePick = (auspice: AuspiceName, c2: string) => {
        const bgColor = `linear-gradient(0deg, ${c1}, ${c2})`

        return (
            <Grid.Col key={auspice} xs={12} sm={6} md={6}>
                <Card
                    className="hoverCard"
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    style={{ 
                        background: bgColor, 
                        cursor: "pointer",
                        height: 300,
                        transition: "transform 0.2s ease",
                    }}
                    onClick={() => {
                        const updatedCharacter = syncWerewolfCompatibilityFields
                            ? syncWerewolfCompatibilityFields({
                                ...character,
                                auspice: auspice as AuspiceName,
                            })
                            : {
                                ...character,
                                auspice: auspice as AuspiceName,
                            };

                        setCharacter(updatedCharacter)
                        nextStep()
                    }}
                >
                    <Card.Section>
                        <Center pt={10}>
                            <Image 
                                fit="contain" 
                                src={auspices[auspice].logo} 
                                height={120} 
                                width={120} 
                                alt={auspice}
                                style={{ objectFit: "contain" }}
                            />
                        </Center>
                    </Card.Section>

                    <Center>
                        <Title order={3} p="md" align="center">{auspice}</Title>
                    </Center>
                    
                    <Center>
                        <Text size="sm" color="blue" weight={500} mb="xs">
                            {auspices[auspice].moonPhase}
                        </Text>
                    </Center>

                    <Text size="sm" color="dimmed" align="center" style={{ height: 40, overflow: "hidden" }}>
                        {auspices[auspice].description}
                    </Text>
                </Card>
            </Grid.Col>
        )
    }

    const height = globals.viewportHeightPx
    return (
        <div style={{ height: height - 250 }}>
            <Text size={30} align="center">
                Choose the <b>Auspice</b> you were born under
            </Text>

            <Text align="center" size="xl" weight={700} color="red">
                Auspice
            </Text>
            <hr color="#e03131" />

            <ScrollArea style={{ height: height - 215 }} w="100%" p={20}>
                <Grid grow m={0}>
                    {["Ragabash", "Theurge", "Philodox", "Galliard", "Ahroun"]
                        .map((a) => auspiceNameSchema.parse(a))
                        .map((auspice) => createAuspicePick(auspice, "rgba(112, 54, 127, 0.9)"))}
                </Grid>
            </ScrollArea>
        </div>
    )
}

export default AuspicePicker