import { AppShell, BackgroundImage, Container, Navbar } from "@mantine/core"
import { useLocalStorage, useMediaQuery } from "@mantine/hooks"
import { useEffect, useState } from "react"
import "./App.css"
import { Character, getEmptyCharacter } from "./data/UnifiedCharacter"
import Generator from "./generator/Generator"
import AsideBar from "./sidebar/AsideBar"
import Sidebar from "./sidebar/Sidebar"
import SplatPicker, { SplatType } from "./components/SplatPicker"

import { useViewportSize } from "@mantine/hooks"
import { rndInt } from "./generator/utils"
import { globals } from "./globals"
import vtmCover from "./resources/backgrounds/Vampire the Masquerade Cover.jpg"
import werewolfCover from "./resources/backgrounds/Werewolf The Apocalypse Cover.jpg"

function App() {
    const { height: viewportHeight, width: viewportWidth } = useViewportSize()
    // TODO: Replace globals with a context or something..?
    globals.viewportHeightPx = viewportHeight
    globals.viewportWidthPx = viewportWidth
    globals.isPhoneScreen = useMediaQuery(`(max-width: ${globals.phoneScreenW}px)`)
    globals.isSmallScreen = useMediaQuery(`(max-width: ${globals.smallScreenW}px)`)

    useEffect(() => {
        globals.largeFontSize = globals.isPhoneScreen ? "21px" : "30px"
        globals.smallFontSize = globals.isPhoneScreen ? "16px" : "25px"
        globals.smallerFontSize = globals.isPhoneScreen ? "14px" : "20px"
    }, [globals.isPhoneScreen, globals.isSmallScreen])

    const [character, setCharacter] = useLocalStorage<Character>({ key: "character", defaultValue: getEmptyCharacter() })
    const [selectedStep, setSelectedStep] = useLocalStorage({ key: "selectedStep", defaultValue: 0 })
    const [selectedSplat, setSelectedSplat] = useLocalStorage<SplatType | null>({ key: "selectedSplat", defaultValue: null })
    // Use VTM cover as the main background

    const handleSplatSelection = (splat: SplatType) => {
        setSelectedSplat(splat)
        // Reset character and step when switching splats
        setCharacter(getEmptyCharacter(splat))
        setSelectedStep(0)
    }

    const [showAsideBar, setShowAsideBar] = useState(!globals.isSmallScreen)
    useEffect(() => {
        setShowAsideBar(!globals.isSmallScreen)
    }, [globals.isSmallScreen])

    return (
        <AppShell
            padding="0"
            navbar={
                globals.isSmallScreen ? (
                    <></>
                ) : (
                    <Navbar width={{ base: 300 }} height={"100%"} p="xs">
                        {<Sidebar character={character} />}
                    </Navbar>
                )
            }
            aside={showAsideBar ? <AsideBar selectedStep={selectedStep} setSelectedStep={setSelectedStep} character={character} /> : <></>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            {
                selectedSplat === null ? (
                    // Black background for splat picker
                    <div style={{ backgroundColor: "#000000", height: "99%" }}>
                        <SplatPicker onSplatSelected={handleSplatSelection} />
                    </div>
                ) : (
                    // Character-specific background for generator
                    <BackgroundImage 
                        h={"99%"} 
                        src={selectedSplat === "vampire" ? vtmCover : selectedSplat === "werewolf" ? werewolfCover : vtmCover}
                    >
                        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", height: "100%" }}>
                            <Container h={"100%"}>
                                <Generator
                                    character={character}
                                    setCharacter={setCharacter}
                                    selectedStep={selectedStep}
                                    setSelectedStep={setSelectedStep}
                                    onBackToSplatSelection={() => setSelectedSplat(null)}
                                />
                            </Container>
                        </div>
                    </BackgroundImage>
                )
            }
        </AppShell>
    )
}

export default App
