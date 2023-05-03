import { SupplyNotFound } from './../CustomErrors/SuppliesError';
import { SuppliesDatabase } from './../Database/Suppliersdatabase';
import { IdProductDTO } from './../Models/Products';
import { Order, OrderDTO } from './../Models/Orders';
import { OrderDatabase } from "../Database/OrderDatabase";
import { GenetareId } from '../Services/GenerateId';
import { PleaseInsert } from '../CustomErrors/ProductsError';
import { ProductsDatabase } from '../Database/ProductsDatabase';
import { OrderNotFound, ProductNotSave } from '../CustomErrors/OrdersError';

export class OrderBusiness{

    orderDatabase= new OrderDatabase();
    productDatabase = new ProductsDatabase();
    supplierDatabase = new SuppliesDatabase();

    getOrders = async()=>{
        try {
            const result = await this.orderDatabase.GetOrders()
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getOrderById = async(idOrder:string)=>{
        try {
            
            const result = await this.orderDatabase.getOrderById(idOrder)
            if(result.length === 0) throw new OrderNotFound()
            return result
            

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createOrder = async(Order:OrderDTO)=>{
        try {
            const { qtdBuy, totalValue, deliveryTime, idProduct, cnpj } = Order

            if(!qtdBuy || !totalValue || !deliveryTime || !idProduct || !cnpj) throw new PleaseInsert();

            const idProd:IdProductDTO = {
                idProduct
            }
            
            const verifyProduct =  await this.productDatabase.getProductById(idProd)
            if(verifyProduct.length === 0) throw new ProductNotSave()

            const verifySupply = await this.supplierDatabase.supplyByCnpj(cnpj)
            if(verifySupply.length === 0) throw new SupplyNotFound

            const idOrder = GenetareId.newID()
            const valueUnit = totalValue / qtdBuy

            const newOrder:Order = {
                idOrder,
                qtdBuy,
                totalValue,
                deliveryTime,
                idProduct,
                cnpj,
                valueUnit
            }

            const update = {
                idProduct,
                qtdStock: verifyProduct[0].qtd_stock + qtdBuy
            }       
                 
            await this.productDatabase.updateProduct(update)
            await this.orderDatabase.createOrder(newOrder)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}