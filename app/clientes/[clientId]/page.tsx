import ClienteEdit from "@/components/ClienteEdit/ClienteEdit";

interface EditClientProps {
  clientId: string;
}

export default async function Page({ params }: { params: Promise<EditClientProps> }) {
  const clientId = (await params).clientId;

  return <ClienteEdit clienteId={clientId} />
}
