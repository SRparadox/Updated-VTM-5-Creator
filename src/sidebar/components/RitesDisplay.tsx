import { List, Stack, Title } from "@mantine/core";
import { Rite } from "../../data/Rites";

export type RitesProps = {
    rites: Rite[];
}

const RitesDisplay = ({ rites }: RitesProps) => {
    if (!rites.length) return null;

    return (
        <Stack spacing="sm">
            <Title order={4}>Rites</Title>
            <List>
                {rites.map((rite) => (
                    <List.Item key={rite.name} icon={"🌙"}>
                        {rite.name}
                        {rite.renown && ` (${rite.renown})`}
                    </List.Item>
                ))}
            </List>
        </Stack>
    );
};

export default RitesDisplay;