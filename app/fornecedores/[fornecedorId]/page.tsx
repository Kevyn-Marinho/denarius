import FornecedorEdit from "@/components/FornecedorEdit/FornecedorEdit";

interface EditFornecedorProps {
  fornecedorId: string;
}

export default async function Page({ params }: { params: Promise<EditFornecedorProps> }) {
  const fornecedorId = (await params).fornecedorId;

  return <FornecedorEdit fornecedorId={fornecedorId} />
}
