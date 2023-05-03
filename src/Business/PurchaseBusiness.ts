import { ClientNotFound } from './../CustomErrors/ClientsError';
import { IdProductDTO, UpdateProducts } from './../Models/Products';
import { PleaseInsert, ProductNotFound } from './../CustomErrors/ProductsError';
import { Purchase, PurchaseDTO } from './../Models/Purchase';
import { PurchaseDatabase } from './../Database/PurchaseDatabase';
import { InvoiceNotFound, PurchaseNotFound, QuantityUnavailable, StockUnavailable } from '../CustomErrors/PurchaseError';
import { ProductsDatabase } from '../Database/ProductsDatabase';
import { ClientsDatabase } from '../Database/ClientsDatabase';
import { GenetareId } from '../Services/GenerateId';
import { CurrentTime } from '../Services/GetCurrentTime';
export class PurchaseBusiness{
    purchaseDatabase = new PurchaseDatabase()
    productDatabase = new ProductsDatabase()
    clientDatabase = new ClientsDatabase()

    getPurchase = async ()=>{
        try {
            
            const result = await this.purchaseDatabase.getPurchase()
            return result   

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getPurchaseByInvoice = async (invoice:string)=>{
        try {
            const verifyInvoice = await this.purchaseDatabase.getPurchaseByInvoice(invoice)
            if(verifyInvoice.length === 0) throw new InvoiceNotFound()

            const result = await this.purchaseDatabase.getPurchaseByInvoice(invoice)
            return result

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getPurchaseById = async (idPurchase:string)=>{
        try {
            const verifyInvoice = await this.purchaseDatabase.getPurchaseById(idPurchase)
            if(verifyInvoice.length === 0) throw new PurchaseNotFound()

            const result = await this.purchaseDatabase.getPurchaseById(idPurchase)
            
            return result

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createPurchase = async (purchase:PurchaseDTO)=>{
        try {
            const {qtdPurchase,idProduct, idClient } = purchase

            if(!qtdPurchase) throw new PleaseInsert();
            

            const idProd:IdProductDTO = {
                idProduct
            }
            
            const verifyProduct = await this.productDatabase.getProductById(idProd)
            if(verifyProduct.length === 0) throw new ProductNotFound();

            const verifyclient = await this.clientDatabase.getClientById(idClient)
            if(verifyclient.length === 0) throw new ClientNotFound()

            const totalPurchase = verifyProduct[0].sale_value * qtdPurchase

            const newStock = {
                idProduct,
                qtdStock : verifyProduct[0].qtd_stock - qtdPurchase
            }

            if(verifyProduct[0].qtd_stock === 0) throw new StockUnavailable()
            if(verifyProduct[0].qtd_stock < qtdPurchase) throw new QuantityUnavailable()
            
            
            
            const idPurchase = GenetareId.newID()
            const invoice = GenetareId.newID()
            const date = CurrentTime.GetTime()
            
            const newPurchase : Purchase = {
                idPurchase,
                invoice,
                date,
                qtdPurchase,
                totalPurchase,
                idClient,
                idProduct
            }
            
            await this.productDatabase.updateProduct(newStock)
            await this.purchaseDatabase.createPurchase(newPurchase)
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}