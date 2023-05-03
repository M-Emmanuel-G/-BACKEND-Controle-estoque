import { SuppliesDTO, UpdateSuppliesDTO } from "../Models/Supplies";
import { BaseDatabase } from "./BaseDatabase";

export class SuppliesDatabase extends BaseDatabase {
    TABLE_NAME = "C_Suppliers"

    getSupply = async ()=>{
        try {
            const result = SuppliesDatabase.connection(this.TABLE_NAME)
                .select()
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
    createSupply = async(newSupply:SuppliesDTO)=>{
        try {

            const {cnpj, nameSupply, phone, email} = newSupply

            await SuppliesDatabase.connection(this.TABLE_NAME)
                .insert({
                    cnpj,
                    name_supply : nameSupply,
                    phone,
                    email
                })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    supplyByCnpj = async (cnpj:string)=>{
            try {
                const result = await SuppliesDatabase.connection(this.TABLE_NAME)
                    .select()
                    .where({cnpj})
                return result
            } catch (error:any) {
                throw new Error(error.message);
            }
    }

    deleteSupply = async (cnpj:string)=>{
        try {
            await SuppliesDatabase.connection(this.TABLE_NAME)
                .delete()
                .where({cnpj})
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateSupply = async (updateSupply:UpdateSuppliesDTO)=>{
        try {
            const {cnpj, nameSupply, phone, email} = updateSupply

            SuppliesDatabase.connection(this.TABLE_NAME)
                .update({
                    name_supply: nameSupply,
                    phone,
                    email
                })
                .where({cnpj: cnpj})
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}
