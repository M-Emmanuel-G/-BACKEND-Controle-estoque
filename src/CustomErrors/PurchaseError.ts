import { CustomError } from './CustomError';

export class InvoiceNotFound extends CustomError{
    constructor(){
        super(400, "Nota fiscal não localizada.")
    }
}

export class PurchaseNotFound extends CustomError{
    constructor(){
        super(400, "Compra não localizada. ")
    }
}

export class StockUnavailable extends CustomError{
    constructor(){
        super(400, "Estoque indisponivel. ")
    }
}
export class QuantityUnavailable extends CustomError{
    constructor(){
        super(400, "Quantidade para compra indisponivel. ")
    }
}