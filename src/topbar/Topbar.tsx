import { Button, Burger, Center, Grid, Stack, Text, Title } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconArrowLeft } from "@tabler/icons-react"
import { Character } from "../data/UnifiedCharacter"
import { SplatType } from "../components/SplatPicker"
import { globals } from "../globals"
import TopMenu from "./TopMenu"

export type TopBarProps = {
    character: Character
    setCharacter: (character: Character) => void
    setSelectedStep: (step: number) => void
    setShowAsideBar: (v: boolean) => void
    selectedSplat: SplatType | null
    onBackToSplatSelection: () => void
}

const Topbar = ({ character, setCharacter, setSelectedStep, setShowAsideBar, selectedSplat, onBackToSplatSelection }: TopBarProps) => {
    const smallScreen = globals.isSmallScreen
    const phoneScreen = globals.isPhoneScreen
    const [burgerOpened, { toggle: toggleBurger }] = useDisclosure(false)

    const getSplatDisplayName = (splatType: SplatType | null) => {
        switch (splatType) {
            case "vampire": return "Vampire: The Masquerade"
            case "werewolf": return "Werewolf: The Apocalypse"
            case "hunter": return "Hunter: The Reckoning"
            case "mage": return "Mage: The Ascension"
            default: return "World of Darkness"
        }
    }

    return (
        <>
            <Grid>
                {smallScreen ? (
                    <Grid.Col span={1}>
                        <Burger
                            opened={burgerOpened}
                            onClick={() => {
                                setShowAsideBar(!burgerOpened)
                                toggleBurger()
                            }}
                            aria-label={burgerOpened ? "Close side bar" : "Open side bar"}
                        />
                    </Grid.Col>
                ) : null}
                <Grid.Col offset={smallScreen ? 0 : selectedSplat ? 2 : 4} span={smallScreen ? 6 : selectedSplat ? 6 : 4}>
                    <Center>
                        <Stack spacing={"0px"} ml={selectedSplat && !smallScreen ? "40px" : "80px"}>
                            {selectedSplat && !smallScreen && (
                                <Button
                                    variant="subtle"
                                    leftIcon={<IconArrowLeft size={16} />}
                                    onClick={onBackToSplatSelection}
                                    size="xs"
                                    style={{ alignSelf: "flex-start", marginBottom: "5px" }}
                                >
                                    Back to Selection
                                </Button>
                            )}
                            <span style={{ textAlign: "center" }}>
                                <Title style={{ display: "inline", marginLeft: selectedSplat ? "0px" : "50px" }} order={smallScreen ? 3 : 1}>
                                    {selectedSplat ? getSplatDisplayName(selectedSplat) : "Progeny"}
                                </Title>
                                {phoneScreen ? null : (
                                    <Text style={{ display: "inline", verticalAlign: "top" }} c="dimmed" fz="xs">
                                        {selectedSplat ? "" : "\u00A0 by Odin"}
                                    </Text>
                                )}
                            </span>

                            {phoneScreen ? null : (
                                <Text c="dimmed" fz="sm" ta="center">
                                    {selectedSplat ? "Character Creator" : "A VtM v5 Character Creator"}
                                </Text>
                            )}
                        </Stack>
                    </Center>
                </Grid.Col>

                <Grid.Col offset={smallScreen ? (selectedSplat ? 2 : 3) : 2} span={smallScreen && selectedSplat ? 3 : 2}>
                    <span style={{ float: "right", display: "flex", gap: "8px", alignItems: "center" }}>
                        {selectedSplat && smallScreen && (
                            <Button
                                variant="subtle"
                                leftIcon={<IconArrowLeft size={16} />}
                                onClick={onBackToSplatSelection}
                                size="xs"
                            >
                                Back
                            </Button>
                        )}
                        <TopMenu character={character} setCharacter={setCharacter} setSelectedStep={setSelectedStep} />
                    </span>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default Topbar
