export interface SuppliesDTO{
    cnpj:string
    nameSupply:string
    phone: string
    email:string
}

export interface UpdateSuppliesDTO{
    cnpj?:string
    nameSupply?:string
    phone?: string
    email?:string
}

export interface UpdateSupplies{
    cnpj?:string
    name_supply?:string
    phone?: string
    email?:string
}