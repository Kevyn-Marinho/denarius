'use client'
import { Button, Group, Text, Title } from "@mantine/core";
import classes from "./Welcome.module.css";
import { useRouter } from "next/navigation";

export function Welcome() {
  const router = useRouter();
    return (
        <>
            <Title className={classes.title} ta="center" mt={100}>
                Bem vindo ao <br />
                <Text
                    inherit
                    variant="gradient"
                    component="span"
                    gradient={{ from: "pink", to: "yellow" }}
                >
                    Denarius
                </Text>
            </Title>
            <Group justify="center" mt="xl">
                <Button onClick={() => router.push('/clientes')}>Clientes</Button>
                <Button onClick={() => router.push('/fornecedores')}>Fornecedores</Button>
            </Group>
        </>
    );
}
