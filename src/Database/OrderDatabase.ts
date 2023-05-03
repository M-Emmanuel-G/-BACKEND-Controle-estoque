import { Order } from "../Models/Orders";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
    TABLE_NAME = "C_Product_Supply";
    
    GetOrders = async()=>{
        try {
            const result = OrderDatabase.connection(this.TABLE_NAME)
                .select('*')
                .join("C_Products","C_Product_Supply.fk_product","=","C_Products.idProduct")
                .join("C_Suppliers","C_Product_Supply.CNPJ","=","C_Suppliers.cnpj")
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getOrderById = async(idOrder:string)=>{
        try {
            
            const result = await OrderDatabase.connection(this.TABLE_NAME)
                .select('*')
                .join("C_Products","C_Product_Supply.fk_product","=","C_Products.idProduct")
                .join("C_Suppliers","C_Product_Supply.CNPJ","=","C_Suppliers.cnpj")
                .where({
                    id_order:idOrder
                })
                return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
    createOrder = async(newOrder:Order)=>{
        try {
            const {idOrder, deliveryTime, qtdBuy, totalValue, idProduct, cnpj, valueUnit} = newOrder
            await OrderDatabase.connection(this.TABLE_NAME)
                .insert({
                    id_order: idOrder,
                    qtd_purchase:qtdBuy,
                    value_purchase: totalValue,
                    delivery_time: deliveryTime,
                    fk_product: idProduct,
                    cnpj,
                    value_unit: valueUnit
                })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}