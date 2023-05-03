import { SupplyNotFound, SupplyExist } from './../CustomErrors/SuppliesError';
import { PleaseInsert } from './../CustomErrors/ProductsError';
import { SuppliesDTO, UpdateSuppliesDTO } from "../Models/Supplies";
import { SuppliesDatabase } from '../Database/Suppliersdatabase';
import { EmailFormatInvalid, PhoneFormatInvalid} from '../CustomErrors/SuppliesError';

export class SuppliesBusiness{

    suppliesDatabase = new SuppliesDatabase()

    createSupply = async(supply:SuppliesDTO)=>{
        try {
            const {cnpj, nameSupply, phone, email} = supply
            if(!cnpj || !nameSupply || !phone || !email) throw new PleaseInsert()

            const verifySupply = await this.suppliesDatabase.supplyByCnpj(cnpj)
            if(verifySupply.length !== 0) throw new SupplyExist()

            if(!email.includes('@') || !email.includes(".com")) throw new EmailFormatInvalid()
            if(phone.length > 14) throw new PhoneFormatInvalid()

            const newSupply:SuppliesDTO = {
                cnpj,
                nameSupply,
                phone,
                email
            }

            await this.suppliesDatabase.createSupply(newSupply)
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getSupply= async ()=>{
        try {
            const result = await this.suppliesDatabase.getSupply()
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    deleteSupply = async (cnpj:string)=>{
        try {
            const verifySupply = await this.suppliesDatabase.supplyByCnpj(cnpj)
            if(verifySupply.length === 0) throw new SupplyNotFound()

            await this.suppliesDatabase.deleteSupply(cnpj)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateSupply = async (updateSupply:UpdateSuppliesDTO)=>{
        try {
            const cnpj = updateSupply.cnpj as string
            const phone = updateSupply.phone as string
            const email = updateSupply.email as string
           
           
            const verifySupply = await this.suppliesDatabase.supplyByCnpj(cnpj)
            if(verifySupply.length === 0) throw new SupplyNotFound()

            if(!email.includes('@') || !email.includes(".com")) throw new EmailFormatInvalid()
            if(phone.length > 14) throw new PhoneFormatInvalid()
            
            await this.suppliesDatabase.updateSupply(updateSupply)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    supplyByCnpj= async (cnpj:string)=>{
        try {
            const result = await this.suppliesDatabase.supplyByCnpj(cnpj)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
}