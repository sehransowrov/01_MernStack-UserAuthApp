import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Burger
      lineSize={5}
      size="xl"
      opened={opened}
      onClick={toggle}
      aria-label="Toggle navigation"
    />
  );
}
// 