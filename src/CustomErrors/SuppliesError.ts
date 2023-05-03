import { CustomError } from "./CustomError";

export class SupplyNotFound extends CustomError{
    constructor(){
        super(400, "Fornecedor não encontrado.")
    }
}

export class EmailFormatInvalid extends CustomError{
    constructor(){
        super(400, "Formato de email inválido.")
    }
}

export class PhoneFormatInvalid extends CustomError{
    constructor(){
        super(400, "Formato de telefone inválido.")
    }
}

export class SupplyExist extends CustomError{
    constructor(){
        super(400, "Já existe um fornecedor cadastrado com este CNPJ.")
    }
}

