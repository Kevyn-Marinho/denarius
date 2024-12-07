'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Container, Paper, Title } from '@mantine/core';
import FornecedorList from '../../components/FornecedorList/FornecedorList';
import classes from './fornecedor.module.css';

const mockFornecedor: Fornecedor[] = [
  {
    id: 1,
    nome: 'João Silva',
    ramo: 'Ramo 1',
  },
  {
    id: 2,
    nome: 'Alceu Valença',
    ramo: 'Ramo 2',
  },
  {
    id: 3,
    nome: 'Chris Branas',
    ramo: 'Ramo 3',
  },
];

export default function ClientesPage() {
  const router = useRouter();
  const [fornecedores, setFornecedores] = useState(mockFornecedor);

  const handleEdit = (id: number) => {
    return router.push(`/fornecedores/${id}`);
    // Aqui você pode implementar a lógica para abrir um formulário de edição
  };

  const handleDelete = (id: number) => {
    if (confirm(`Tem certeza que deseja excluir o cliente com ID: ${id}?`)) {
      setFornecedores(fornecedores.filter((cliente) => cliente.id !== id));
    }
  };

  const handleCreate = () => {
    return router.push(`/fornecedores/criar`);
    // Aqui você pode redirecionar ou abrir um modal para criar um novo cliente
  };

  return (
    <Container>
      <Paper>
        <div className={classes.title}>
          <Title order={2} mb="md" size="1.40em">
            Fornecedores
          </Title>
          <Button onClick={handleCreate}>Novo Fornecedor</Button>
        </div>
        <FornecedorList
          fornecedores={fornecedores}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCreate={handleCreate}
        />
      </Paper>
    </Container>
  );
}
