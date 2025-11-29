import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Group, Modal, Stack, Text } from "@mantine/core"
import { Character, getEmptyCharacter } from "../data/UnifiedCharacter"

export type ResetModalProps = {
    character: Character
    setCharacter: (character: Character) => void
    setSelectedStep: (step: number) => void
    resetModalOpened: boolean
    closeResetModal: () => void
}

const ResetModal = ({ character, resetModalOpened, closeResetModal, setCharacter, setSelectedStep }: ResetModalProps) => {
    return (
        <Modal opened={resetModalOpened} onClose={closeResetModal} title="" centered withCloseButton={false}>
            <Stack>
                <Text fz={"xl"} ta="center">
                    Reset current character?
                </Text>
                <Divider my="sm" />
                <Group position="apart">
                    <Button color="yellow" variant="subtle" leftIcon={<FontAwesomeIcon icon={faXmark} />} onClick={closeResetModal}>
                        Cancel
                    </Button>

                    <Button
                        color="red"
                        onClick={async () => {
                            setCharacter(getEmptyCharacter(character.splat))
                            setSelectedStep(0)

                            closeResetModal()
                        }}
                    >
                        Reset character
                    </Button>
                </Group>
            </Stack>
        </Modal>
    )
}

export default ResetModal
