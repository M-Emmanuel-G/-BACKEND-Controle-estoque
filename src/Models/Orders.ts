export interface Order {
    idOrder: string;
    qtdBuy:number;
    totalValue:number;
    deliveryTime:string
    cnpj:string;
    idProduct:string;
    valueUnit: number
}

export interface OrderDTO {
    qtdBuy:number;
    totalValue:number;
    cnpj:string;
    idProduct:string;
    deliveryTime:string
}