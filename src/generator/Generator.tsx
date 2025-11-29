import { Center, Text } from "@mantine/core"
import { Character, containsBloodSorcery, isThinBlood, isVampireCharacter, isWerewolfCharacter } from "../data/UnifiedCharacter"
import AttributePicker from "./components/AttributePicker"
import BasicsPicker from "./components/BasicsPicker"
import ClanPicker from "./components/ClanPicker"
import SectPicker from "./components/SectPicker"
import ReligionPicker from "./components/ReligionPicker"
import DisciplinesPicker from "./components/DisciplinesPicker"
import { Power } from "../data/Disciplines";
import Final from "./components/Final"
import GenerationPicker from "./components/GenerationPicker"
import AgePicker from "./components/AgePicker"
import ElderPowerPicker from "./components/ElderPowerPicker"
import MethuselahPowerPicker from "./components/MethuselahPowerPicker"
import Intro from "./components/Intro"
import MeritsAndFlawsPicker from "./components/MeritsAndFlawsPicker"
import PredatorTypePicker from "./components/PredatorTypePicker"
import RolePicker from "./components/RolePicker"
import SkillsPicker from "./components/SkillsPicker"
import TouchstonePicker from "./components/TouchstonePicker"
import ErrorBoundary from "../components/ErrorBoundary"
import RitualsPicker from "./components/RitualsPicker"
import CeremoniesPicker from "./components/CeremoniesPicker"
import AlchemyPicker from "./components/AlchemyPicker"
import TribePicker from "./components/TribePicker"
import AuspicePicker from "./components/AuspicePicker"
import GiftsPicker from "./components/GiftsPicker"


// Export functions to get step labels dynamically based on splat
export function getVampireStepLabels(character: Character) {
    if (!isVampireCharacter(character)) return [];
    
    const hasBloodSorcery = containsBloodSorcery(character.disciplines);
    const hasOblivion = character.disciplines.some((power: Power) => power.discipline === "oblivion");
    const hasThinBloodAlchemy = isThinBlood(character);
    
    // Check if character generation qualifies for Elder/Methuselah powers
    const isElderGeneration = character.generation <= 9 && character.generation >= 6;
    const isMethuselahGeneration = character.generation <= 5 && character.generation >= 4;
    const qualifiesForElderPowers = isElderGeneration || isMethuselahGeneration;
    
    const labels = [
        "Intro",
        "Clan",
        "Sect",
        "Religion",
        "Attributes",
        "Skills",
        "Generation",
    ];
    
    // Only show Age step if generation qualifies for Elder/Methuselah powers
    if (qualifiesForElderPowers) {
        labels.push("Age");
    }
    
    // Only show Elder Powers if character is flagged as Elder or Methuselah
    if (character.isElder || character.isMethuselah) {
        labels.push("Elder Powers");
    }
    
    // Only show Methuselah Powers if character is flagged as Methuselah
    if (character.isMethuselah) {
        labels.push("Methuselah Powers");
    }
    
    labels.push(character.clan === "Ghoul" ? "Role" : "Predator Type");
    labels.push("Basics");
    labels.push("Disciplines");
    
    if (hasBloodSorcery) labels.push("Rituals");
    if (hasOblivion) labels.push("Ceremonies");
    if (hasThinBloodAlchemy) labels.push("Alchemy");
    labels.push("Touchstones");
    labels.push("Merits & Flaws");
    labels.push("Final");
    return labels;
}

export function getWerewolfStepLabels(character: Character) {
    if (!isWerewolfCharacter(character)) return [];
    
    return [
        "Intro",
        "Tribe", 
        "Attributes",
        "Skills",
        "Auspice",
        "Basics",
        "Gifts",
        "Touchstones",
        "Merits & Flaws", 
        "Final"
    ];
}

export function getStepLabels(character: Character) {
    if (isVampireCharacter(character)) {
        return getVampireStepLabels(character);
    } else if (isWerewolfCharacter(character)) {
        return getWerewolfStepLabels(character);
    }
    return [];
}

export type GeneratorProps = {
    character: Character
    setCharacter: (character: Character) => void

    selectedStep: number
    setSelectedStep: (step: number) => void
}

const containsOblivion = (powers: Power[]) => powers.some((power) => power.discipline === "oblivion");

const Generator = ({ character, setCharacter, selectedStep, setSelectedStep }: GeneratorProps) => {
    // Define the props type for all step components
    type StepProps = {
        character: Character;
        setCharacter: (character: Character) => void;
        nextStep: () => void;
    };

    const getVampireSteps = (): ((props: StepProps) => JSX.Element)[] => {
        if (!isVampireCharacter(character)) return [];
        
        const hasBloodSorcery = containsBloodSorcery(character.disciplines);
        const hasOblivion = containsOblivion(character.disciplines);
        const hasThinBloodAlchemy = isThinBlood(character);

        const isElderGeneration = character.generation <= 9 && character.generation >= 6;
        const isMethuselahGeneration = character.generation <= 5 && character.generation >= 4;
        const qualifiesForElderPowers = isElderGeneration || isMethuselahGeneration;
        
        const steps: ((props: StepProps) => JSX.Element)[] = [
            (props) => <Intro {...props} />, // 0
            (props) => <ClanPicker {...props} />, // 1
            (props) => <SectPicker {...props} />, // 2
            (props) => <ReligionPicker {...props} />, // 3
            (props) => <AttributePicker {...props} />, // 4
            (props) => <SkillsPicker {...props} />, // 5
            (props) => <GenerationPicker {...props} />, // 6
        ];
        
        // Only add Age step if generation qualifies for Elder/Methuselah powers
        if (qualifiesForElderPowers) {
            steps.push((props) => <AgePicker {...props} />);
        }
        
        // Only add Elder Powers step if character is flagged as Elder or Methuselah
        if (character.isElder || character.isMethuselah) {
            steps.push((props) => <ElderPowerPicker {...props} />);
        }
        
        // Only add Methuselah Powers step if character is flagged as Methuselah
        if (character.isMethuselah) {
            steps.push((props) => <MethuselahPowerPicker {...props} />);
        }
        
        steps.push((props) => character.clan === "Ghoul" ? <RolePicker {...props} /> : <PredatorTypePicker {...props} />);
        steps.push((props) => <BasicsPicker {...props} />);
        steps.push((props) => <DisciplinesPicker {...props} />);
        
        if (hasBloodSorcery) steps.push((props) => <RitualsPicker {...props} />);
        if (hasOblivion) steps.push((props) => <CeremoniesPicker {...props} />);
        if (hasThinBloodAlchemy) steps.push((props) => <AlchemyPicker {...props} />);
        steps.push((props) => <TouchstonePicker {...props} />);
        steps.push((props) => <MeritsAndFlawsPicker {...props} />);
        steps.push((props) => <Final {...props} setSelectedStep={setSelectedStep} />);
        
        return steps;
    };

    const getWerewolfSteps = (): ((props: StepProps) => JSX.Element)[] => {
        if (!isWerewolfCharacter(character)) return [];
        
        return [
            (props) => <Intro {...props} />, // 0
            (props) => <TribePicker {...props} />, // 1
            (props) => <AttributePicker {...props} />, // 2
            (props) => <SkillsPicker {...props} />, // 3 
            (props) => <AuspicePicker {...props} />, // 4
            (props) => <BasicsPicker {...props} />, // 5
            (props) => <GiftsPicker {...props} />, // 6
            (props) => <TouchstonePicker {...props} />, // 7
            (props) => <MeritsAndFlawsPicker {...props} />, // 8
            (props) => <Final {...props} setSelectedStep={setSelectedStep} />, // 9
        ];
    };

    const getSteps = () => {
        if (isVampireCharacter(character)) {
            return getVampireSteps();
        } else if (isWerewolfCharacter(character)) {
            return getWerewolfSteps();
        }
        return [];
    };

    const steps = getSteps();

    const getStepComponent = () => {
        if (selectedStep < steps.length) {
            const StepComponent = steps[selectedStep];
            return StepComponent({
                character,
                setCharacter,
                nextStep: () => setSelectedStep(selectedStep + 1),
            });
        }
        return <Text size={"xl"}>{`Error: Step ${selectedStep} is not implemented for ${character.splat}`}</Text>;
    };

    return (
        <Center h={"100%"}>
            <ErrorBoundary key={selectedStep}>{getStepComponent()}</ErrorBoundary>
        </Center>
    )
}

export default Generator
