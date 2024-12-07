'use client';

import React, { useState } from 'react';
import { Container, Grid, Paper, ScrollArea, Table, ThemeIcon, Tooltip } from '@mantine/core';
import cx from 'clsx';
import classes from './ClientList.module.css';
import { IconPencil, IconTrash } from '@tabler/icons-react';

type Rating = 'AAA' | 'AA' | 'A' | 'BBB' | 'BB' | 'B' | 'C';

interface ClientListProps {
  clientes: Cliente[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onCreate: () => void;
}

const ClienteList: React.FC<ClientListProps> = ({ clientes, onEdit, onDelete, onCreate }) => {
  const [scrolled, setScrolled] = useState(false);

  
  const rows = clientes.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.nome}</Table.Td>
      <Table.Td>{row.liberado? 'Sim' : 'Não'}</Table.Td>
      <Table.Td>{row.limiteDeCredito}</Table.Td>
      <Table.Td>{row.rating}</Table.Td>
      <Table.Td>{row.ratingPessoal? 'Sim' : 'Não'}</Table.Td>
      <Table.Td>{row.oferecer ? 'Sim' : 'Não'}</Table.Td>
      <Table.Td>
        <ThemeIcon
              variant="light"
              size="lg"
              radius="xl"
              color="#ffffff"
              style={{
                  cursor: "pointer",
                  boxShadow: `0px 5px 10px rgba(143, 149, 178, 0.1)`,
              }}
              onClick={() => onEdit(row.id)}
          >
            <IconPencil size={18} color="#ABB5BF" />
          </ThemeIcon>
          <ThemeIcon
              variant="light"
              size="lg"
              radius="xl"
              color="#ffffff"
              style={{
                  cursor: "pointer",
                  boxShadow: `0px 5px 10px rgba(143, 149, 178, 0.1)`,
              }}
              onClick={() => onDelete(row.id)}
          >
            <IconTrash size={18} color="#ABB5BF" />
          </ThemeIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container>
      <Paper>
        <Grid>
          <Grid.Col >
          <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
            <Table miw={700}>
              <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                <Table.Tr>
                  <Table.Th>Nome</Table.Th>
                  <Table.Th>Liberado</Table.Th>
                  <Table.Th>Limite de Crédito</Table.Th>
                  <Table.Th>Rating</Table.Th>
                  <Table.Th>Rating Pessoal</Table.Th>
                  <Table.Th>Oferecer</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </ScrollArea>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};
export default ClienteList;
