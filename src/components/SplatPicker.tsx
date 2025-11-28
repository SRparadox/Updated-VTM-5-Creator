import { Button, Card, Container, Grid, Group, Image, Stack, Text, Title } from "@mantine/core"
import { IconBat, IconMoon, IconSword, IconWand } from "@tabler/icons-react"

export type SplatType = "vampire" | "werewolf" | "hunter" | "mage"

export interface SplatPickerProps {
    onSplatSelected: (splat: SplatType) => void
}

interface SplatOption {
    type: SplatType
    name: string
    subtitle: string
    description: string
    icon: React.ReactNode
    color: string
    available: boolean
    comingSoon?: boolean
}

const splatOptions: SplatOption[] = [
    {
        type: "vampire",
        name: "Vampire: The Masquerade",
        subtitle: "Kindred of the Night",
        description: "Create vampires from the World of Darkness. Choose your clan, sect, and predator type in the eternal struggle for power and survival.",
        icon: <IconBat size={48} />,
        color: "red",
        available: true,
    },
    {
        type: "werewolf", 
        name: "Werewolf: The Apocalypse",
        subtitle: "Warriors of Gaia",
        description: "Create werewolves fighting against the corruption of the Wyrm. Select your tribe, auspice, and gifts in the battle for Gaia.",
        icon: <IconMoon size={48} />,
        color: "yellow",
        available: true,
    },
    {
        type: "hunter",
        name: "Hunter: The Reckoning", 
        subtitle: "Imbued Mortals",
        description: "Create hunters awakened to the supernatural truth. Choose your creed and edges in the fight against the monsters.",
        icon: <IconSword size={48} />,
        color: "blue",
        available: false,
        comingSoon: true,
    },
    {
        type: "mage",
        name: "Mage: The Ascension",
        subtitle: "Awakened Reality Shapers",
        description: "Create mages who bend reality to their will. Select your tradition and spheres in the Ascension War.",
        icon: <IconWand size={48} />,
        color: "purple", 
        available: false,
        comingSoon: true,
    },
]

const SplatPicker = ({ onSplatSelected }: SplatPickerProps) => {
    return (
        <Container size="lg" py={50}>
            <Stack align="center" spacing={30}>
                <Stack align="center" spacing={10}>
                    <Title order={1} size={48} align="center" color="white">
                        World of Darkness
                    </Title>
                    <Title order={2} size={24} align="center" color="dimmed">
                        Character Creator
                    </Title>
                    <Text size="lg" align="center" color="dimmed" mt={10}>
                        Choose your supernatural template to begin character creation
                    </Text>
                </Stack>

                <Grid gutter={30} justify="center">
                    {splatOptions.map((splat) => (
                        <Grid.Col key={splat.type} span={{ base: 12, sm: 6, lg: 6 }}>
                            <Card
                                shadow="xl"
                                padding="xl"
                                radius="md"
                                h={280}
                                style={{
                                    backgroundColor: splat.available 
                                        ? "rgba(0, 0, 0, 0.8)" 
                                        : "rgba(50, 50, 50, 0.6)",
                                    border: splat.available 
                                        ? `2px solid var(--mantine-color-${splat.color}-6)` 
                                        : "2px solid var(--mantine-color-gray-6)",
                                    cursor: splat.available ? "pointer" : "not-allowed",
                                    transition: "all 0.2s ease",
                                    opacity: splat.available ? 1 : 0.7,
                                }}
                                onClick={() => splat.available && onSplatSelected(splat.type)}
                            >
                                <Stack align="center" justify="space-between" h="100%">
                                    <Stack align="center" spacing={15}>
                                        <Group position="center" style={{ color: `var(--mantine-color-${splat.color}-4)` }}>
                                            {splat.icon}
                                        </Group>
                                        
                                        <Stack align="center" spacing={5}>
                                            <Title order={3} size={20} align="center" color="white">
                                                {splat.name}
                                            </Title>
                                            <Text size="sm" align="center" color={`${splat.color}.4`} fw={600}>
                                                {splat.subtitle}
                                            </Text>
                                        </Stack>

                                        <Text size="sm" align="center" color="dimmed" style={{ minHeight: 60 }}>
                                            {splat.description}
                                        </Text>
                                    </Stack>

                                    <Group position="center" w="100%">
                                        {splat.available ? (
                                            <Button
                                                variant="filled"
                                                color={splat.color}
                                                size="md"
                                                fullWidth
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    onSplatSelected(splat.type)
                                                }}
                                            >
                                                Create Character
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="outline"
                                                color="gray"
                                                size="md"
                                                fullWidth
                                                disabled
                                            >
                                                {splat.comingSoon ? "Coming Soon" : "Unavailable"}
                                            </Button>
                                        )}
                                    </Group>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>

                <Text size="sm" align="center" color="dimmed" mt={20}>
                    More supernatural templates will be added over time. Each template features unique character creation rules and options.
                </Text>
            </Stack>
        </Container>
    )
}

export default SplatPicker