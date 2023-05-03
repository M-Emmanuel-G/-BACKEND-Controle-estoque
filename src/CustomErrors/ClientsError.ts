import { CustomError } from './CustomError';

export class ClientNotFound extends CustomError{
    constructor(){
        super(400, "Client não encontrado. ")
    }
}

export class CPFClientExist extends CustomError{
    constructor(){
        super(400, "Já existe um cliente cadastrado com este CPF. ")
    }
}
export class EmailClientExist extends CustomError{
    constructor(){
        super(400, "Já existe um cliente cadastrado com este CPF. ")
    }
}
export class PhoneClientExist extends CustomError{
    constructor(){
        super(400, "Já existe um cliente cadastrado com este CPF. ")
    }
}