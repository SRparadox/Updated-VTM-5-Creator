import { Card, Center, Grid, Image, ScrollArea, Text, Title } from "@mantine/core"
import { notifications } from "@mantine/notifications"
import { TribeName, tribeNameSchema } from "../../data/NameSchemas"
import { UnifiedCharacter, isWerewolfCharacter, syncWerewolfCompatibilityFields } from \"../../data/UnifiedCharacter\"
import { tribes } from "../../data/Tribes"
import { globals } from "../../globals"
import { notDefault } from "../utils"

type TribePickerProps = {
    character: UnifiedCharacter
    setCharacter: (character: UnifiedCharacter) => void
    nextStep: () => void
}

const TribePicker = ({ character, setCharacter, nextStep }: TribePickerProps) => {
    // Only render for werewolf characters
    if (!isWerewolfCharacter(character)) {
        return <Text size="xl">Error: TribePicker only works with werewolf characters</Text>
    }



    const c1 = "rgba(26, 27, 30, 0.90)"

    const createTribePick = (tribe: TribeName, c2: string) => {
        const bgColor = `linear-gradient(0deg, ${c1}, ${c2})`

        return (
            <Grid.Col key={tribe} xs={12} sm={6} md={4}>
                <Card
                    className="hoverCard"
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    style={{ 
                        background: bgColor, 
                        cursor: "pointer",
                        height: 320,
                        transition: "transform 0.2s ease",
                    }}
                    onClick={() => {
                        if ((notDefault(character, "gifts") || notDefault(character, "auspice")) && tribe !== character.tribe) {
                            notifications.show({
                                title: "Reset Gifts",
                                message: "Because you changed your tribe",
                                autoClose: 7000,
                                color: "yellow",
                            })

                            const updatedCharacter = syncWerewolfCompatibilityFields({
                                ...character,
                                tribe,
                                gifts: [],
                                availableGiftNames: tribes[tribe].gifts,
                                auspice: character.auspice,
                            })

                            setCharacter(updatedCharacter)
                        } else {
                            const updatedCharacter = syncWerewolfCompatibilityFields({
                                ...character,
                                tribe,
                                availableGiftNames: tribes[tribe].gifts,
                            })

                            setCharacter(updatedCharacter)
                        }

                        nextStep()
                    }}
                >
                    <Card.Section>
                        <Center pt={10}>
                            <Image 
                                fit="contain" 
                                src={tribes[tribe].logo} 
                                height={120} 
                                width={120} 
                                alt={tribe}
                                style={{ objectFit: "contain" }}
                            />
                        </Center>
                    </Card.Section>

                    <Center>
                        <Title order={3} p="md" align="center">{tribe}</Title>
                    </Center>

                    <Text size="sm" color="dimmed" align="center" style={{ height: 55, overflow: "hidden" }}>
                        {tribes[tribe].description}
                    </Text>
                    
                    <Text size="xs" align="center" color="yellow" mt="xs">
                        <b>Favor:</b> {tribes[tribe].favor}
                    </Text>
                    
                    <Text size="xs" align="center" color="blue" mt="xs">
                        +2 {tribes[tribe].renownType} Renown
                    </Text>
                </Card>
            </Grid.Col>
        )
    }

    const height = globals.viewportHeightPx
    return (
        <div style={{ height: height - 250 }}>
            <Text size={30} align="center">
                Pick your <b>Tribe</b>
            </Text>

            <Text align="center" size="xl" weight={700} color="red">
                Tribe
            </Text>
            <hr color="#e03131" />

            <ScrollArea style={{ height: height - 215 }} w="100%" p={20}>
                <Text align="center" size="xl" weight={700} mb="sm" mt="md" color="blue">
                    Guardians & Protectors
                </Text>
                <Grid grow m={0}>
                    {["Silver Fangs", "Children of Gaia", "Hart Wardens"]
                        .map((t) => tribeNameSchema.parse(t))
                        .map((tribe) => createTribePick(tribe, "rgba(26, 60, 125, 0.9)"))}
                </Grid>

                <Text align="center" size="xl" weight={700} mb="sm" mt="md" color="red">
                    Warriors & Fighters
                </Text>
                <Grid grow m={0}>
                    {["Black Furies", "Galestalkers", "Red Talons"]
                        .map((t) => tribeNameSchema.parse(t))
                        .map((tribe) => createTribePick(tribe, "rgba(134, 25, 25, 0.9)"))}
                </Grid>

                <Text align="center" size="xl" weight={700} mb="sm" mt="md" color="grape">
                    Mystics & Speakers
                </Text>

                <Grid grow m={0}>
                    {["Ghost Council", "Silent Striders"]
                        .map((t) => tribeNameSchema.parse(t))
                        .map((tribe) => createTribePick(tribe, "rgba(112, 54, 127, 0.9)"))}
                </Grid>

                <Text align="center" size="xl" weight={700} mb="sm" mt="md" color="green">
                    Urban Adapters
                </Text>
                <Grid grow m={0}>
                    {["Glass Walkers", "Bone Gnawers"]
                        .map((t) => tribeNameSchema.parse(t))
                        .map((tribe) => createTribePick(tribe, "rgba(47, 79, 47, 0.9)"))}
                </Grid>

                <Text align="center" size="xl" weight={700} mb="sm" mt="md" style={{ color: "rgb(175,175,175)" }}>
                    Political Powers
                </Text>
                <Grid grow m={0}>
                    {["Shadow Lords"]
                        .map((t) => tribeNameSchema.parse(t))
                        .map((tribe) => createTribePick(tribe, "rgba(134, 142, 150, 0.9)"))}
                </Grid>
            </ScrollArea>
        </div>
    )
}

export default TribePicker