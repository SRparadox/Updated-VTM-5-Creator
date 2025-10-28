import { Card, Modal, Stack, Text, Title, Group, Button } from "@mantine/core";
import { useState } from "react";
import { ClanName } from "~/data/NameSchemas";
import { clans } from "../../data/Clans";

interface ClanBaneModalProps {
  opened: boolean;
  clan: ClanName;
  onSelect: (bane: string, compulsion: string) => void;
  onClose: () => void;
}

const ClanBaneModal = ({ opened, clan, onSelect, onClose }: ClanBaneModalProps) => {
  const [selectedBane, setSelectedBane] = useState<string>("");
  const [selectedCompulsion, setSelectedCompulsion] = useState<string>("");
  
  const banes: string[] = clans[clan]?.banes || [];
  const compulsions: string[] = clans[clan]?.compulsions || [];

  const handleConfirm = () => {
    if (selectedBane && selectedCompulsion) {
      onSelect(selectedBane, selectedCompulsion);
      setSelectedBane("");
      setSelectedCompulsion("");
    }
  };

  const handleClose = () => {
    setSelectedBane("");
    setSelectedCompulsion("");
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={<Title order={3}>Select Bane and Compulsion</Title>}
      centered
      size="xl" // Make modal larger for two columns
      styles={{
        body: { minHeight: 400 },
        title: { fontSize: 28, textAlign: "center" },
      }}
    >
      <Group align="flex-start" spacing="lg">
        {/* Banes Section */}
        <Stack spacing="md" style={{ flex: 1 }}>
          <Title order={4} style={{ color: "#c92a2a", textAlign: "center" }}>
            Select a Bane
          </Title>
          {banes.filter(Boolean).map((bane: string, idx: number) => (
            <Card
              key={idx}
              shadow="md"
              padding="lg"
              radius="md"
              withBorder
              style={{ 
                cursor: "pointer", 
                background: selectedBane === bane ? "#ffebee" : "#fff0f0", 
                borderColor: selectedBane === bane ? "#c92a2a" : "#e0e0e0",
                borderWidth: selectedBane === bane ? 2 : 1
              }}
              onClick={() => setSelectedBane(bane)}
            >
              <Text size="sm" align="center" style={{ fontWeight: 500, color: "#c92a2a" }}>
                {bane}
              </Text>
            </Card>
          ))}
          {banes.filter(Boolean).length === 0 && (
            <Text align="center">No banes available for this clan.</Text>
          )}
        </Stack>

        {/* Compulsions Section */}
        <Stack spacing="md" style={{ flex: 1 }}>
          <Title order={4} style={{ color: "#1976d2", textAlign: "center" }}>
            Select a Compulsion
          </Title>
          {compulsions.filter(Boolean).map((compulsion: string, idx: number) => (
            <Card
              key={idx}
              shadow="md"
              padding="lg"
              radius="md"
              withBorder
              style={{ 
                cursor: "pointer", 
                background: selectedCompulsion === compulsion ? "#e3f2fd" : "#f0f8ff", 
                borderColor: selectedCompulsion === compulsion ? "#1976d2" : "#e0e0e0",
                borderWidth: selectedCompulsion === compulsion ? 2 : 1
              }}
              onClick={() => setSelectedCompulsion(compulsion)}
            >
              <Text size="sm" align="center" style={{ fontWeight: 500, color: "#1976d2" }}>
                {compulsion}
              </Text>
            </Card>
          ))}
          {compulsions.filter(Boolean).length === 0 && (
            <Text align="center">No compulsions available for this clan.</Text>
          )}
        </Stack>
      </Group>

      {/* Confirm Button */}
      <Group position="center" mt="lg">
        <Button 
          onClick={handleConfirm}
          disabled={!selectedBane || !selectedCompulsion}
          size="lg"
        >
          Confirm Selection
        </Button>
      </Group>
    </Modal>
  );
};

export default ClanBaneModal;
