import { Aside, Center, ScrollArea, Stepper } from "@mantine/core"
import { useState, useEffect } from "react"
import { Character, isWerewolfCharacter } from "../data/UnifiedCharacter"
import { globals } from "../globals"
import { getStepLabels } from "../generator/Generator"

export type AsideBarProps = {
    selectedStep: number
    setSelectedStep: (step: number) => void
    character: Character
}

const AsideBar = ({ selectedStep, setSelectedStep, character }: AsideBarProps) => {
    // Use the same step labels as the Generator for consistency
    const stepLabels = getStepLabels(character)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const isWerewolf = isWerewolfCharacter(character)
    
    // Track transition state locally
    useEffect(() => {
        setIsTransitioning(false)
    }, [selectedStep])
    
    // Simple accessibility logic - allow navigation to completed steps and next step
    const isStepAccessible = (stepIndex: number) => {
        // Always allow going back to previous steps
        if (stepIndex <= selectedStep) return true
        
        // Allow going to the next step
        if (stepIndex === selectedStep + 1) return true
        
        // Basic completion check for major steps
        const hasBasicInfo = character.clan && character.sect && character.generation > 0
        if (hasBasicInfo && stepIndex > 6) return true // After generation step
        
        return false
    }

    // Enhanced step navigation with transition coordination
    const handleStepClick = (stepIndex: number) => {
        if (!isStepAccessible(stepIndex) || stepIndex === selectedStep) return
        
        // Directly set the step - no complex coordination needed
        setSelectedStep(stepIndex)
    }

    const getStepper = () => {
        return (
            <div className={`custom-stepper ${isTransitioning ? 'transitioning' : ''} ${isWerewolf ? 'werewolf' : 'vampire'}`}>
                <Stepper
                    color="grape"
                    orientation="vertical"
                    active={selectedStep}
                    onStepClick={handleStepClick}
                    breakpoint="sm"
                    styles={(theme) => ({
                        step: {
                            transition: 'all 0.3s ease-in-out',
                        },
                        stepIcon: {
                            transition: 'all 0.3s ease-in-out',
                        },
                        stepBody: {
                            transition: 'all 0.3s ease-in-out',
                        }
                    })}
                >
                    {stepLabels.map((label, index) => {
                        const isCurrent = index === selectedStep
                        
                        return (
                            <Stepper.Step
                                key={label}
                                label={label}
                                description=""
                                disabled={!isStepAccessible(index)}
                                style={{
                                    cursor: isStepAccessible(index) ? 'pointer' : 'not-allowed'
                                }}
                            >
                                {" "}
                            </Stepper.Step>
                        )
                    })}
                </Stepper>
            </div>
        )
    }

    const height = globals.viewportHeightPx
    const scrollerHeight = 940
    return (
        <Aside p="md" hiddenBreakpoint="sm" width={{ xs: 200 }} style={{ zIndex: 0, overflow: 'visible' }}>
            <Center h={"100%"}>
                {height <= scrollerHeight ? (
                    <ScrollArea h={height - 100} style={{ overflow: 'visible' }}>
                        {getStepper()}
                    </ScrollArea>
                ) : (
                    <>{getStepper()}</>
                )}
            </Center>
        </Aside>
    )
}

export default AsideBar
