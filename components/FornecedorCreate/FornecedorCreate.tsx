'use client';

import React, { useEffect, useState } from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  Anchor,
  Button,
  Container,
  Grid,
  NumberInput,
  Paper,
  TextInput,
  Title,
} from '@mantine/core';

interface FornecedorEditProps {
  fornecedorId: string | string[] | undefined ;
}

const FornecedorEdit: React.FC<FornecedorEditProps> = ({ fornecedorId }) => {
  const [fornecedor, setFornecedor] = useState({
    id: 5,
    nome: 'Gabriel Denerius',
    ramo: 'BBB',
  } as Fornecedor);
  
  function getById(){} 
  function update(){}


  useEffect(() => {
    /// fetch
    /// setCliente()
  }, [fornecedorId]);

  const handleChange = (field: any, value: any) => {
    setFornecedor({ ...fornecedor, [field]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert('Enviado para o back');
  };

  return (
    <Container>
      <Paper>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Anchor fw={600} href="/fornecedores">
            <IconArrowLeft></IconArrowLeft>
          </Anchor>
          <Title order={2} mb="md" style={{ marginLeft: '20px' }}>
            Criar Fornecedor
          </Title>
        </div>
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, xs: 12 }}>
            <TextInput
              label="Nome"
              value={fornecedor.nome}
              onChange={(event) => handleChange('nome', event.currentTarget.value)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12 }}>
            <NumberInput
              label="Limite de Crédito"
              min={0}
              value={fornecedor.ramo}
              onChange={(value) => handleChange('ramo', value)}
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
export default FornecedorEdit;
