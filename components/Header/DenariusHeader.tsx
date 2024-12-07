"use client";

import { Box, Container, Group, Text, Anchor } from "@mantine/core";
import classes from './DenariusHeader.module.css';

const DenariusHeader = () => {
  return (
    <Box
      component="header"
      className={classes.header}
    >
      <Container size="lg" className="flex items-center justify-between">
        {/* Project Name */}
        <Text size="xl" fw={700} color="white">
          Denarius
        </Text>
 
        {/* Navigation */}
        <Group>
          <Anchor href="/clientes" color="gray.4" underline="never">
            Clientes
          </Anchor>
          <Anchor href="/fornecedores" color="gray.4" underline="never">
            Fornecedores
          </Anchor>
        </Group>
      </Container>
    </Box>
  );
};

export default DenariusHeader;
