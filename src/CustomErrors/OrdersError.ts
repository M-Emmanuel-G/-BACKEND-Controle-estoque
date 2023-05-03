import { CustomError } from "./CustomError";

export class ProductNotSave extends CustomError{
    constructor(){
        super(400, "Produto não cadastrado ")
    }
}

export class OrderNotFound extends CustomError{
    constructor(){
        super(400, "Pedido não localizado. ")
    }
}