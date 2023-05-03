import { CustomError } from "./CustomError";

export class PleaseInsert extends CustomError{
    constructor(){
        super(422, 'Todas a informações devem ser inseridas.')
    }
}

export class ValueNull extends CustomError{
    constructor(){
        super(400, 'Os valores nao podem ser 0.')
    }
}

export class ProductNotFound extends CustomError{
    constructor(){
        super(400, 'Produto não localizado ou não existe.')
    }
}

export class IdProductNotInserted extends CustomError{
    constructor(){
        super(400, 'O Id não foi inserido.')
    }
}