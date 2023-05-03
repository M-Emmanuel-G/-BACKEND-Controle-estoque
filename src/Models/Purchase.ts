export interface Purchase{
    idPurchase: string;
    qtdPurchase: number;
    invoice: string;
    date:string;
    idProduct: string;
    idClient: string;
    totalPurchase: number;
}

export interface PurchaseDTO{
    qtdPurchase: number;
    idProduct: string;
    idClient: string;
}