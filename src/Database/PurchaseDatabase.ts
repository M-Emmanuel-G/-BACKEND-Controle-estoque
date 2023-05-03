import { Purchase } from "../Models/Purchase";
import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase {

    TABLE_NAME = "C_Purchase"

    getPurchase = async ()=>{
        try {
            const result = await PurchaseDatabase.connection(this.TABLE_NAME)
                .select()
                .join("C_Products","C_Purchase.fk_product","=","C_Products.idProduct")
                .join("C_Clients","C_Purchase.fk_client","=","C_Clients.id_clients")

            return result   

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getPurchaseByInvoice = async (invoice:string)=>{
        try {
            const result = await PurchaseDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {invoice}
                )
               
             return result   
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getPurchaseById = async (idPurchase:string)=>{
        try {
            
            const result = await PurchaseDatabase.connection(this.TABLE_NAME)
                .select()
                .join("C_Products","C_Purchase.fk_product","=","C_Products.idProduct")
                .join("C_Clients","C_Purchase.fk_client","=","C_Clients.id_clients")
                .where(
                    {
                        id_purchase : idPurchase
                    }
                )
               
             return result   

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createPurchase = async (purchase:Purchase)=>{
        try {
            const {idPurchase, qtdPurchase, date, idProduct, idClient, totalPurchase, invoice } = purchase

            await PurchaseDatabase.connection(this.TABLE_NAME)
                .insert({
                    id_purchase: idPurchase,
                    qtd_purchase: qtdPurchase,
                    date,
                    fk_product: idProduct,
                    fk_client: idClient,
                    total_purchase: totalPurchase,
                    invoice
                })

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}