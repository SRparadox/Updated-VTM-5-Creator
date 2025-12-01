import { Center, ScrollArea, Stack, Text } from "@mantine/core"
import { Character, isVampireCharacter, isWerewolfCharacter } from "../data/UnifiedCharacter"
import { notDefault } from "../generator/utils"
import AttributesDisplay from "./components/AttributesDisplay"
import BasicsDisplay from "./components/BasicsDisplay"
import DisciplineDisplay from "./components/DisciplinesDisplay"
import MeritsAndFlawsDisplay from "./components/MeritsAndFlawsDisplay"
import SkillDisplay from "./components/SkillsDisplay"
import TouchstoneDisplay from "./components/TouchstoneDisplay"
import { globals } from "../globals"

export type SidebarProps = {
    character: Character
}

const Sidebar = ({ character }: SidebarProps) => {
    const height = globals.viewportHeightPx

    return (
        // Subtracting header-height
        <ScrollArea h={height - 60} type="never">
            <Stack>
                {/* Splat-specific primary identity */}
                {isVampireCharacter(character) && notDefault(character, "clan") ? (
                    <Text size="xl" style={{
                        fontFamily: "'CormorantGaramond-Bold', 'Cormorant-Bold', serif",
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        <Center>{character.clan}</Center>
                    </Text>
                ) : null}
                {isWerewolfCharacter(character) && notDefault(character, "tribe") ? (
                    <Text size="xl" style={{
                        fontFamily: "'CormorantGaramond-Bold', 'Cormorant-Bold', serif",
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        <Center>{character.tribe}</Center>
                    </Text>
                ) : null}

                {/* Vampire-specific info */}
                {isVampireCharacter(character) && notDefault(character, "sect") ? (
                    <Text size="lg" color="dimmed" style={{
                        fontFamily: "'Cormorant-SemiBold', 'CormorantGaramond-SemiBold', serif"
                    }}>
                        <Center>{character.sect}</Center>
                    </Text>
                ) : null}
                {isVampireCharacter(character) && notDefault(character, "religion") ? (
                    <Text size="md" color="dimmed" style={{
                        fontFamily: "'Cormorant-Regular', 'CormorantGaramond-Regular', serif"
                    }}>
                        <Center>{character.religion}</Center>
                    </Text>
                ) : null}

                {/* Werewolf-specific info */}
                {isWerewolfCharacter(character) && notDefault(character, "auspice") ? (
                    <Text size="lg" color="dimmed" style={{
                        fontFamily: "'Cormorant-SemiBold', 'CormorantGaramond-SemiBold', serif"
                    }}>
                        <Center>{character.auspice}</Center>
                    </Text>
                ) : null}
                {isWerewolfCharacter(character) && notDefault(character, "pack") ? (
                    <Text size="md" color="dimmed" style={{
                        fontFamily: "'Cormorant-Regular', 'CormorantGaramond-Regular', serif"
                    }}>
                        <Center>Pack: {character.pack}</Center>
                    </Text>
                ) : null}

                {/* Shared components */}
                {notDefault(character, "name") ? <BasicsDisplay character={character} /> : null}
                {notDefault(character, "attributes") ? <AttributesDisplay attributes={character.attributes} /> : null}
                {notDefault(character, "skills") ? <SkillDisplay skills={character.skills} /> : null}
                
                {/* Splat-specific stats */}
                {isVampireCharacter(character) && notDefault(character, "generation") ? (
                    <Text style={{
                        fontFamily: "'Cormorant-SemiBold', 'CormorantGaramond-SemiBold', serif"
                    }}>
                        <b>Generation:</b> {character.generation}
                    </Text>
                ) : null}
                {isWerewolfCharacter(character) && notDefault(character, "gnosis") ? (
                    <Text style={{
                        fontFamily: "'Cormorant-SemiBold', 'CormorantGaramond-SemiBold', serif"
                    }}>
                        <b>Gnosis:</b> {character.gnosis}
                    </Text>
                ) : null}

                {/* Splat-specific role/type */}
                {isVampireCharacter(character) && notDefault(character, "predatorType") ? (
                    <Text style={{
                        fontFamily: "'Cormorant-SemiBold', 'CormorantGaramond-SemiBold', serif"
                    }}>
                        <b>Predator Type:</b> {character.predatorType.name}
                    </Text>
                ) : null}

                {/* Powers display - works for both disciplines and gifts */}
                {(notDefault(character, "disciplines") || (isWerewolfCharacter(character) && notDefault(character, "gifts"))) ? (
                    <DisciplineDisplay 
                        powers={isWerewolfCharacter(character) ? character.gifts : character.disciplines} 
                        rituals={character.rituals} 
                        ceremonies={isVampireCharacter(character) ? character.ceremonies : []}
                        alchemy={isVampireCharacter(character) ? character.alchemy : []}
                    />
                ) : null}

                {/* Werewolf renown */}
                {isWerewolfCharacter(character) && (character.renown.glory > 0 || character.renown.honor > 0 || character.renown.wisdom > 0) ? (
                    <Stack spacing="xs">
                        <Text weight={700}>Renown</Text>
                        {character.renown.glory > 0 ? <Text size="sm"><b>Glory:</b> {character.renown.glory}</Text> : null}
                        {character.renown.honor > 0 ? <Text size="sm"><b>Honor:</b> {character.renown.honor}</Text> : null}
                        {character.renown.wisdom > 0 ? <Text size="sm"><b>Wisdom:</b> {character.renown.wisdom}</Text> : null}
                    </Stack>
                ) : null}

                {/* Shared components */}
                {notDefault(character, "touchstones") ? <TouchstoneDisplay touchstones={character.touchstones} /> : null}
                {notDefault(character, "merits") || notDefault(character, "flaws") ? (
                    <MeritsAndFlawsDisplay merits={character.merits} flaws={character.flaws} />
                ) : null}
            </Stack>
        </ScrollArea>
    )
}

export default Sidebar
