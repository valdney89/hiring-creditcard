import { Address } from "./address";
import { Product } from "./product";

export interface Hiring {
    name: string,
    email: string,
    cpf: string,
    sexo: string,
    dataNascimento: string,
    nomeMae: string,
    celular: number,
    renda: number,
    diaVencimento: number,
    endereco: Address,
    cartaoEscolhido: Product,
}
