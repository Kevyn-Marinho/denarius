'use client';

import React, { useState } from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import {
    Anchor,
  Button,
  Checkbox,
  Container,
  Grid,
  NumberInput,
  Paper,
  Select,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

interface ClientFormProps {
  initialData: Cliente;
  onSubmit: any;
}

const ClienteForm = ({ initialData, onSubmit }: ClientFormProps) => {
  const [cliente, setCliente] = useState({
    id: 0,
    nome: '',
    limiteDeCredito: 0,
    rating: 'BBB',
    ratingPessoal: 'BBB',
    comentario: '',
    indicadoPor: '',
    indicadorIE: '9',
    idEstrangeiro: '',
    ratingNovo: 'Médio',
    oferecer: true,
    liberado: false,
    numIndicacoes: 0,
  } as Cliente);


  const handleChange = (field: any, value: any) => {
    setCliente({ ...cliente, [field]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(cliente);
  };

  return (
    <Container>
      <Paper>
        <div style={{display: "flex", alignItems: "center"}}>
          <Anchor
            fw={600}
            href="/clientes"
          >
            <IconArrowLeft></IconArrowLeft>
          </Anchor>
          <Title order={2} mb="md"  style={{marginLeft: "20px"}}>
            Cadastrar Cliente
          </Title>
        </div>
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, xs: 12 }}>
            <TextInput
              label="Nome"
              value={cliente.nome}
              onChange={(event) => handleChange('nome', event.currentTarget.value)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12 }}>
            <NumberInput
              label="Limite de Crédito"
              min={0}
              value={cliente.limiteDeCredito}
              onChange={(value) => handleChange('limiteDeCredito', value)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 6 }}>
            <Select
              label="Rating"
              value={cliente.rating}
              onChange={(value) => handleChange('rating', value)}
              data={['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'C']}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 6 }}>
            <Select
              label="Rating Pessoal"
              value={cliente.ratingPessoal}
              onChange={(value) => handleChange('ratingPessoal', value)}
              data={['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'C']}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12 }}>
            <TextInput
              label="Indicado Por"
              value={cliente.indicadoPor}
              onChange={(event) => handleChange('indicadoPor', event.currentTarget.value)}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 6 }}>
            <Select
              label="Indicador IE"
              value={cliente.indicadorIE}
              onChange={(value) => handleChange('indicadorIE', value)}
              data={['1', '2', '9']}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 6 }}>
            <TextInput
              label="ID Estrangeiro"
              value={cliente.idEstrangeiro}
              onChange={(event) => handleChange('idEstrangeiro', event.currentTarget.value)}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12 }}>
            <Checkbox
              label="Oferecer"
              checked={cliente.oferecer}
              onChange={(event) => handleChange('oferecer', event.currentTarget.checked)}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12 }}>
            <Textarea
              label="Comentário"
              value={cliente.comentario}
              onChange={(event) => handleChange('comentario', event.currentTarget.value)}
            />
          </Grid.Col>
          <br />
          <Grid.Col span={{ base: 12 }}>
            <Button onClick={handleSubmit} type="submit">
              Salvar
            </Button>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ClienteForm;
