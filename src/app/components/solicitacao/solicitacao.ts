import { Cliente } from "../cliente/Cliente";

export class Solicitacao {
    _id: string;
    descricao: string;
    cliente: Cliente;
    usuario: string;
    dataAbertura: Date;
    dataEncerramento: Date;
    status: boolean;
    replicas: boolean;
}