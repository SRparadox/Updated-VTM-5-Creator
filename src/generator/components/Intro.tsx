import { faFileArrowUp, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon, Alert, Button, FileButton, Stack, Text, Box, Group, Title, Container } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconBrandGithub, IconBrandReddit } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import LoadModal from "../../components/LoadModal"
import ResetModal from "../../components/ResetModal"
import { Character, isWerewolfCharacter } from "../../data/UnifiedCharacter"
import ReactGA from "react-ga4"
import { globals } from "../../globals"
import vtmCoverImage from "../../resources/backgrounds/Vampire the Masquerade Cover.jpg"
import werewolfCoverImage from "../../resources/backgrounds/Werewolf The Apocalypse Cover.jpg"

type IntroProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const Intro = ({ character, setCharacter, nextStep }: IntroProps) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Intro" })
    }, [])

    const [loadedFile, setLoadedFile] = useState<File | null>(null)
    const [loadModalOpened, { open: openLoadModal, close: closeLoadModal }] = useDisclosure(false)
    const [resetModalOpened, { open: openResetModal, close: closeResetModal }] = useDisclosure(false)

    // Dummy setSelectedStep for ResetModal compatibility
    const setSelectedStep = () => {};

    const [devMode, setDevMode] = useState(globals.devMode);

    const handleDevModeToggle = () => {
        globals.devMode = !devMode;
        setDevMode(globals.devMode);
    };

    // Determine if this is a werewolf character
    const isWerewolf = isWerewolfCharacter(character);
    
    // Dynamic content based on character type
    const backgroundImage = isWerewolf ? werewolfCoverImage : vtmCoverImage;
    const mainTitle = isWerewolf ? "Werewolf: The Apocalypse" : "Vampire: The Masquerade";
    const subtitle = isWerewolf ? "Character Creator" : "Character Creator";
    const flavorText1 = isWerewolf 
        ? "Shape your Garou's destiny in the war against the Wyrm, designed for both cubs and experienced warriors of Gaia."
        : "Craft your Kindred's destiny with this streamlined character creation experience, designed for both neophytes and seasoned vampires.";
    const actionButtonText = isWerewolf ? "Embrace the Rage" : "Begin Your Embrace";
    const resetButtonText = isWerewolf ? "Return to Gaia" : "Final Death";
    const loadButtonText = isWerewolf ? "Awaken Garou" : "Resurrect Character";
    
    // Dynamic styling
    const titleFontFamily = isWerewolf 
        ? "'GillSans ExtraBold', 'Gill Sans', 'Arial Black', sans-serif"
        : "'CormorantGaramond-Bold', 'Cormorant-Bold', serif";
    const primaryColor = isWerewolf ? '#2d5a27' : '#8b4513'; // Forest green for werewolf, brown for vampire
    const secondaryColor = isWerewolf ? '#4a7c59' : '#d4af37'; // Lighter green vs gold
    const accentColor = isWerewolf ? '#6b8e23' : '#c9ada7'; // Olive vs tan
    
    // Helper function to convert hex to rgba
    const hexToRgba = (hex: string, alpha: number = 1) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return (
        <Container 
            size="lg" 
            mt={globals.isPhoneScreen ? "75px" : "50px"}
            style={{ 
                animation: 'fadeInUp 1.2s ease-out',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                borderRadius: '10px',
                padding: '20px'
            }}
        >
            <Box
                style={{
                    background: `linear-gradient(135deg, ${hexToRgba(primaryColor, 0.15)} 0%, rgba(0, 0, 0, 0.8) 50%, ${hexToRgba(primaryColor, 0.15)} 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${hexToRgba(primaryColor, 0.4)}`,
                    borderRadius: '20px',
                    padding: globals.isPhoneScreen ? '30px 20px' : '50px 40px',
                    boxShadow: `0 20px 60px ${hexToRgba(primaryColor, 0.3)}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                    position: 'relative',
                    overflow: 'hidden',
                    animation: 'glowBorder 3s ease-in-out infinite alternate'
                }}
            >
                {/* Decorative elements */}
                <Box
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `radial-gradient(circle at 20% 50%, ${hexToRgba(primaryColor, 0.1)} 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${hexToRgba(primaryColor, 0.1)} 0%, transparent 50%)`,
                        pointerEvents: 'none',
                        animation: 'mysticalGlow 4s ease-in-out infinite alternate'
                    }}
                />
                
                <Stack align="center" spacing="xl" style={{ position: 'relative', zIndex: 1 }}>
                    <Title 
                        order={1}
                        style={{
                            fontSize: globals.isPhoneScreen ? '32px' : '48px',
                            fontFamily: titleFontFamily,
                            color: isWerewolf ? '#f0f8e8' : '#e8d5b7',
                            textShadow: `3px 3px 10px rgba(0, 0, 0, 0.9), 0 0 25px ${hexToRgba(primaryColor, 0.6)}`,
                            letterSpacing: isWerewolf ? '2px' : '3px',
                            textAlign: 'center',
                            marginBottom: '15px',
                            animation: 'titleGlow 2s ease-in-out infinite alternate',
                            fontWeight: 'bold'
                        }}
                    >
                        {mainTitle}
                    </Title>
                    
                    <Text 
                        style={{
                            fontSize: globals.isPhoneScreen ? '18px' : '24px',
                            fontFamily: "'Cormorant-SemiBoldItalic', 'CormorantGaramond-Italic', serif",
                            color: '#d4af37',
                            textAlign: 'center',
                            fontStyle: 'italic',
                            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)',
                            marginBottom: '25px',
                            fontWeight: '600'
                        }}
                    >
                        Character Creator
                    </Text>

                    <Stack spacing="md" style={{ maxWidth: '600px', textAlign: 'center' }}>
                        <Text 
                            style={{
                                fontSize: globals.smallerFontSize,
                                color: accentColor,
                                lineHeight: 1.6,
                                fontFamily: "'Crimson Text', 'Georgia', serif"
                            }}
                        >
                            {flavorText1}
                        </Text>
                        
                        <Text 
                            style={{
                                fontSize: globals.smallerFontSize,
                                color: '#c9ada7',
                                lineHeight: 1.6,
                                fontFamily: "'Crimson Text', 'Georgia', serif"
                            }}
                        >
                            Export your character to PDF format or save locally for future sessions. 
                            PDF template graciously provided by{" "}
                            <Box 
                                component="a" 
                                href="https://linktr.ee/nerdbert"
                                style={{ 
                                    color: secondaryColor, 
                                    textDecoration: 'none',
                                    borderBottom: `1px solid ${secondaryColor}`,
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = isWerewolf ? '#90ee90' : '#ffd700';
                                    e.currentTarget.style.textShadow = `0 0 8px ${isWerewolf ? '#90ee90' : '#ffd700'}`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = secondaryColor;
                                    e.currentTarget.style.textShadow = 'none';
                                }}
                            >
                                Nerdbert
                            </Box>.
                        </Text>
                        
                        <Text 
                            style={{
                                fontSize: globals.smallerFontSize,
                                color: primaryColor,
                                fontWeight: 500,
                                fontFamily: "'Crimson Text', 'Georgia', serif"
                            }}
                        >
                            ⚠️ Your data remains local - remember to save your work before the sun rises!
                        </Text>
                    </Stack>

                    <Group spacing="lg" style={{ marginTop: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {devMode && (
                            <Button
                                size="xs"
                                color="yellow"
                                variant="filled"
                                onClick={handleDevModeToggle}
                                style={{
                                    fontFamily: "'Crimson Text', serif",
                                    animation: 'devModePulse 2s ease-in-out infinite'
                                }}
                            >
                                Dev Mode Active
                            </Button>
                        )}
                        
                        <Button 
                            leftIcon={<FontAwesomeIcon icon={faPlay} />} 
                            size="xl" 
                            color="grape"
                            onClick={nextStep}
                            style={{
                                background: `linear-gradient(135deg, ${primaryColor} 0%, ${hexToRgba(secondaryColor, 0.8)} 50%, ${primaryColor} 100%)`,
                                border: `2px solid ${secondaryColor}`,
                                fontSize: globals.isPhoneScreen ? '16px' : '20px',
                                fontFamily: "'Cinzel', serif",
                                fontWeight: 600,
                                letterSpacing: '1px',
                                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
                                boxShadow: '0 8px 25px rgba(139, 69, 19, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                                transition: 'all 0.3s ease',
                                animation: 'breathe 3s ease-in-out infinite'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 12px 35px rgba(139, 69, 19, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                            }}
                        >
                            {actionButtonText}
                        </Button>
                    </Group>

                    <Group spacing="md" style={{ marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <FileButton
                            onChange={async (payload: File | null) => {
                                if (!payload) return
                                setLoadedFile(payload)
                                openLoadModal()
                            }}
                            accept="application/json"
                        >
                            {(props) => (
                                <Button 
                                    leftIcon={<FontAwesomeIcon icon={faFileArrowUp} />} 
                                    size="md" 
                                    variant="outline"
                                    style={{
                                        color: secondaryColor,
                                        borderColor: secondaryColor,
                                        fontFamily: "'Crimson Text', serif",
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = hexToRgba(secondaryColor, 0.1);
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                    {...props}
                                >
                                    {loadButtonText}
                                </Button>
                            )}
                        </FileButton>
                        
                        <Button
                            leftIcon={<FontAwesomeIcon icon={faTrash} />}
                            size="md"
                            variant="subtle"
                            color="red"
                            onClick={() => {
                                // @ts-ignore
                                import('../../data/Character').then(mod => setCharacter(mod.getEmptyCharacter()));
                            }}
                            style={{
                                fontFamily: "'Crimson Text', serif",
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {resetButtonText}
                        </Button>
                        
                        {!devMode && (
                            <Button
                                size="xs"
                                variant="subtle"
                                color="gray"
                                onClick={handleDevModeToggle}
                                style={{
                                    fontFamily: "'Crimson Text', serif",
                                    opacity: 0.7
                                }}
                            >
                                Dev Mode
                            </Button>
                        )}
                    </Group>
                </Stack>
            </Box>

            <LoadModal
                loadedFile={loadedFile}
                setCharacter={setCharacter}
                loadModalOpened={loadModalOpened}
                closeLoadModal={closeLoadModal}
            />
            
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes glowBorder {
                    from {
                        border-color: ${hexToRgba(primaryColor, 0.4)};
                        box-shadow: 0 20px 60px ${hexToRgba(primaryColor, 0.3)}, inset 0 1px 0 rgba(255, 255, 255, 0.1);
                    }
                    to {
                        border-color: ${hexToRgba(primaryColor, 0.7)};
                        box-shadow: 0 20px 60px ${hexToRgba(primaryColor, 0.5)}, inset 0 1px 0 rgba(255, 255, 255, 0.2);
                    }
                }
                
                @keyframes mysticalGlow {
                    from {
                        opacity: 0.3;
                    }
                    to {
                        opacity: 0.7;
                    }
                }
                
                @keyframes titleGlow {
                    from {
                        text-shadow: 2px 2px 8px ${hexToRgba(primaryColor, 0.8)}, 0 0 20px ${hexToRgba(primaryColor, 0.4)};
                    }
                    to {
                        text-shadow: 2px 2px 8px ${primaryColor}, 0 0 30px ${hexToRgba(primaryColor, 0.6)};
                    }
                }
                
                @keyframes breathe {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.02);
                    }
                }
                
                @keyframes devModePulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                }
            `}</style>
        </Container>
    )
}

export default Intro
