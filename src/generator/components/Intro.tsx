import { faFileArrowUp, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon, Alert, Button, FileButton, Stack, Text, Box, Group, Title, Container } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import LoadModal from "../../components/LoadModal"
import ResetModal from "../../components/ResetModal"
import { Character } from "../../data/Character"
import ReactGA from "react-ga4"
import { globals } from "../../globals"
import vtmCoverImage from "../../resources/backgrounds/Vampire the Masquerade Cover.jpg"

type IntroProps = {
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const Intro = ({ setCharacter, nextStep }: IntroProps) => {
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${vtmCoverImage})`,
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
                    background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.15) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(139, 69, 19, 0.15) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(139, 69, 19, 0.4)',
                    borderRadius: '20px',
                    padding: globals.isPhoneScreen ? '30px 20px' : '50px 40px',
                    boxShadow: '0 20px 60px rgba(139, 69, 19, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
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
                        background: 'radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)',
                        pointerEvents: 'none',
                        animation: 'mysticalGlow 4s ease-in-out infinite alternate'
                    }}
                />
                
                <Stack align="center" spacing="xl" style={{ position: 'relative', zIndex: 1 }}>
                    <Title 
                        order={1}
                        style={{
                            fontSize: globals.isPhoneScreen ? '32px' : '48px',
                            fontFamily: "'CormorantGaramond-Bold', 'Cormorant-Bold', serif",
                            color: '#e8d5b7',
                            textShadow: '3px 3px 10px rgba(0, 0, 0, 0.9), 0 0 25px rgba(139, 69, 19, 0.6)',
                            letterSpacing: '3px',
                            textAlign: 'center',
                            marginBottom: '15px',
                            animation: 'titleGlow 2s ease-in-out infinite alternate',
                            fontWeight: 'bold'
                        }}
                    >
                        Vampire: The Masquerade
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
                                color: '#c9ada7',
                                lineHeight: 1.6,
                                fontFamily: "'Crimson Text', 'Georgia', serif"
                            }}
                        >
                            Craft your Kindred's destiny with this streamlined character creation experience, 
                            designed for both neophytes and seasoned vampires.
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
                                    color: '#d4af37', 
                                    textDecoration: 'none',
                                    borderBottom: '1px solid #d4af37',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#ffd700';
                                    e.currentTarget.style.textShadow = '0 0 8px #ffd700';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#d4af37';
                                    e.currentTarget.style.textShadow = 'none';
                                }}
                            >
                                Nerdbert
                            </Box>.
                        </Text>
                        
                        <Text 
                            style={{
                                fontSize: globals.smallerFontSize,
                                color: '#8b4513',
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
                                background: 'linear-gradient(135deg, #8b4513 0%, #a0522d 50%, #8b4513 100%)',
                                border: '2px solid #d4af37',
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
                            Begin Your Embrace
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
                                        color: '#d4af37',
                                        borderColor: '#d4af37',
                                        fontFamily: "'Crimson Text', serif",
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                    {...props}
                                >
                                    Resurrect Character
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
                            Final Death
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
                        border-color: rgba(139, 69, 19, 0.4);
                        box-shadow: 0 20px 60px rgba(139, 69, 19, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                    }
                    to {
                        border-color: rgba(139, 69, 19, 0.7);
                        box-shadow: 0 20px 60px rgba(139, 69, 19, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2);
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
                        text-shadow: 2px 2px 8px rgba(139, 69, 19, 0.8), 0 0 20px rgba(139, 69, 19, 0.4);
                    }
                    to {
                        text-shadow: 2px 2px 8px rgba(139, 69, 19, 1), 0 0 30px rgba(139, 69, 19, 0.6);
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
