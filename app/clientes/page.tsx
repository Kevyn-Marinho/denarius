'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Container, Paper, Title } from '@mantine/core';
import ClienteList from '../../components/ClienteList/ClienteList';
import classes from './clientes.module.css';

const mockClientes: Cliente[] = [
  {
    id: 1,
    nome: 'João Silva',
    limiteDeCredito: 5000,
    rating: 'BBB',
    ratingPessoal: 'BBB',
    oferecer: true,
    liberado: true,
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    limiteDeCredito: 15000,
    rating: 'AAA',
    ratingPessoal: 'AA',
    oferecer: true,
    liberado: false,
  },
  {
    id: 3,
    nome: 'Carlos Souza',
    limiteDeCredito: 2000,
    rating: 'C',
    ratingPessoal: 'B',
    oferecer: false,
    liberado: false,
  },
];

export default function ClientesPage() {
  const router = useRouter();
  const [clientes, setClientes] = useState(mockClientes);

  const handleEdit = (id: number) => {
    return router.push(`/clientes/${id}`);
    // Aqui você pode implementar a lógica para abrir um formulário de edição
  };

  const handleDelete = (id: number) => {
    if (confirm(`Tem certeza que deseja excluir o cliente com ID: ${id}?`)) {
      setClientes(clientes.filter((cliente) => cliente.id !== id));
    }
  };

  const handleCreate = () => {
    return router.push(`/clientes/criar`);
    // Aqui você pode redirecionar ou abrir um modal para criar um novo cliente
  };

  return (
    <Container>
      <Paper>
        <div className={classes.title}>
          <Title order={2} mb="md" size="1.40em">
            Clientes
          </Title>
          <Button onClick={handleCreate}>Novo Usuário</Button>
        </div>
        <ClienteList
          clientes={clientes}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCreate={handleCreate}
        />
      </Paper>
    </Container>
  );
}
