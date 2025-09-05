import { Button, Divider, Grid, ScrollArea, Space, Stack, Text, Tooltip } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { useEffect, useState } from "react"
import ReactGA from "react-ga4"
import { Character } from "../../data/Character"
import { PredatorTypes } from "../../data/PredatorType"
import { globals } from "../../globals"
import PredatorTypeModal from "../../components/PredatorTypeModal"
import { PredatorTypeName } from "~/data/NameSchemas"

type PredatorTypePickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const PredatorTypePicker = ({ character, setCharacter, nextStep }: PredatorTypePickerProps) => {
    const phoneScreen = globals.isPhoneScreen

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Predator-Type Picker" })
    }, [])
    const isThinBlood = character.clan === "Thin-blood"

    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false)
    const [pickedPredatorType, setPickedPredatorType] = useState<PredatorTypeName>("")

    const [specialty, setSpecialty] = useState("")
    const [discipline, setDiscipline] = useState("")

    const createButton = (predatorTypeName: PredatorTypeName, color: string) => {
        const ventrueDisabled = character.clan === "Ventrue" && ["Bagger", "Farmer"].includes(predatorTypeName)

        return (
            <Tooltip
                label={PredatorTypes[predatorTypeName].summary}
                key={predatorTypeName}
                transitionProps={{ transition: "slide-up", duration: 200 }}
            >
                <Button
                    disabled={ventrueDisabled || isThinBlood}
                    color={color}
                    onClick={() => {
                        const firstSpecialtyOption = PredatorTypes[predatorTypeName].specialtyOptions[0]
                        const firstDisciplineOption = PredatorTypes[predatorTypeName].disciplineOptions[0]

                        setPickedPredatorType(predatorTypeName)
                        setSpecialty(`${firstSpecialtyOption?.skill}_${firstSpecialtyOption?.name}`)
                        setDiscipline(firstDisciplineOption?.name)
                        openModal()
                    }}
                >
                    {predatorTypeName}
                </Button>
            </Tooltip>
        )
    }

    const createPredatorTypeStack = () => (
        <Stack spacing="xl">
            <Grid m={0}>
                <Grid.Col span={4}>
                    <h1>Violent</h1>
                </Grid.Col>
                <Grid.Col offset={phoneScreen ? 1 : 0} span={phoneScreen ? 6 : 4}>
                    <Stack>
                        {([
                            "Alleycat", "Extortionist", "Roadside Killer", "Montero",
                            "Tithe Collector", "Incarcerator", "Abductor", "Cazador", "Rival Predators", "Cannibal", "Civilization Destroyer"
                        ] as PredatorTypeName[]).map((predatorTypeName) =>
                            createButton(predatorTypeName, "red")
                        )}
                    </Stack>
                </Grid.Col>
            </Grid>

            <Divider color="grape" />

            <Grid m={0}>
                <Grid.Col span={4}>
                    <h1>Sociable</h1>
                </Grid.Col>
                <Grid.Col offset={phoneScreen ? 1 : 0} span={phoneScreen ? 6 : 4}>
                    <Stack>
                        {([
                            "Cleaver", "Consensualist", "Osiris", "Scene Queen", "Siren",
                            "Blood Baby", "Codependent", "Patron Of The Arts", "Cardillac", "Sacred Harlot", "Two Face", "Fear Monger", "Reputation"
                        ] as PredatorTypeName[]).map((predatorTypeName) =>
                            createButton(predatorTypeName, "grape")
                        )}
                    </Stack>
                </Grid.Col>
            </Grid>

            <Divider color="gray" />

            <Grid m={0}>
                <Grid.Col span={4}>
                    <h1>Stealth</h1>
                </Grid.Col>
                <Grid.Col offset={phoneScreen ? 1 : 0} span={phoneScreen ? 6 : 4}>
                    <Stack>
                        {([
                            "Sandman", "Graverobber", "Grim Reaper", "Pursuer", "Trapdoor",
                            "Ambulance Chaser", "Opportunist", "Cucuy", "Harvester", "Maskless", "Pet Collaborator", "Tormentor", "Nomadic Feeder", "Xenophile"
                        ] as PredatorTypeName[]).map((predatorTypeName) =>
                            createButton(predatorTypeName, "gray")
                        )}
                    </Stack>
                </Grid.Col>
            </Grid>

            <Divider color="violet" />

            <Grid m={0}>
                <Grid.Col span={4}>
                    <h1>Excluding Mortals</h1>
                </Grid.Col>
                <Grid.Col offset={phoneScreen ? 1 : 0} span={phoneScreen ? 6 : 4}>
                    <Stack>
                        {([
                            "Bagger", "Blood Leech", "Farmer",
                            "Condiment King", "Delivery Diner", "Sin Eater", "Intermittent Faster"
                        ] as PredatorTypeName[]).map((predatorTypeName) =>
                            createButton(predatorTypeName, "violet")
                        )}
                    </Stack>
                </Grid.Col>
            </Grid>
        </Stack>
    )

    const height = globals.viewportHeightPx
    const heightBreakPoint = 1250
    return (
        <div style={{ width: "100%", marginTop: height < heightBreakPoint ? "50px" : "55px" }}>
            <Text fz={globals.largeFontSize} ta={"center"}>
                {isThinBlood ? (
                    <div>
                        <b>Thin-bloods</b> do not have a predator type
                        {
                            <Button
                                ml={"20px"}
                                color={"red"}
                                onClick={() => {
                                    ReactGA.event({
                                        action: "predatortype confirm clicked",
                                        category: "predator type",
                                        label: "thin-blood - no predator type",
                                    })

                                    nextStep()
                                }}
                            >
                                Continue
                            </Button>
                        }
                    </div>
                ) : (
                    <div>
                        How do you <b>obtain blood?</b>
                    </div>
                )}
            </Text>

            <Text mt={"xl"} ta="center" fz="xl" fw={700} c="red">
                Predator Type
            </Text>
            <hr color="#e03131" />
            <Space h={"sm"} />

            {height < heightBreakPoint ? <ScrollArea h={height - 230}>{createPredatorTypeStack()}</ScrollArea> : createPredatorTypeStack()}

            {pickedPredatorType != "" ? (
                <PredatorTypeModal
                    modalOpened={modalOpened}
                    closeModal={closeModal}
                    character={character}
                    pickedPredatorType={pickedPredatorType}
                    setCharacter={setCharacter}
                    nextStep={nextStep}
                    specialty={specialty}
                    setSpecialty={setSpecialty}
                    discipline={discipline}
                    setDiscipline={setDiscipline}
                />
            ) : null}
        </div>
    )
}

export default PredatorTypePicker
