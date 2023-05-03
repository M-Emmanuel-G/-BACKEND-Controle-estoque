export interface Products{
    idProduct: string,
    product: string,
    qtd_stock: number,
    purchase_price: number,
    sale_value:number
}

export interface ProductsDTO{
    product: string,
    qtdStock: number,
    purchasePrice: number,
    saleValue:number
}

export interface IdProductDTO{
    idProduct:string
}

export interface UpdateProducts{
    idProduct: string,
    product?: string,
    qtdStock?: number,
    purchasePrice?: number,
    saleValue?:number
}