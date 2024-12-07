type Rating = 'AAA' | 'AA' | 'A' | 'BBB' | 'BB' | 'B' | 'C';
type IndicadorIEDest = '1' | '2' | '9';

interface Cliente {
  id: number;
  nome: string;
  limiteDeCredito?: number;
  rating?: Rating; 
  ratingPessoal?: Rating;
  comentario?: string;
  indicadoPor?: string;
  indicadorIE?: IndicadorIEDest;
  idEstrangeiro?: string;
  ratingNovo?: string; 
  oferecer?: boolean;
  liberado?: boolean; 
}

interface ClienteHistorico {
  cliente: Cliente;
  campo: string;
  valorAnterior?: string;
  valorAtual?: string;
  createdOn: Date;
}