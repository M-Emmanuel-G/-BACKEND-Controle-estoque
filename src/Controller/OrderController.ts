import { Order, OrderDTO } from './../Models/Orders';
import { Request, Response } from 'express';
import { OrderBusiness } from './../Business/OrderBusiness';
export class OrderController{

    orderBusiness = new OrderBusiness();

    getOrders = async(req:Request, res:Response)=>{
        try {
            const result = await this.orderBusiness.getOrders()
            res.status(200).send(result);
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
    getOrderById = async(req:Request, res:Response)=>{
        try {

            const idOrder = req.params.idOrder
            

            const result = await this.orderBusiness.getOrderById(idOrder)
            res.status(200).send(result);
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
    createOrder = async(req:Request, res:Response)=>{
        try {
            const {deliveryTime, qtdBuy, totalValue, cnpj} = req.body
            const idProduct = req.params.idProduct

            const newOrder:OrderDTO = {
                deliveryTime,
                qtdBuy,
                totalValue,
                cnpj,
                idProduct
            }
            await this.orderBusiness.createOrder(newOrder)
            res.status(201).send({message:'Pedido realizado com sucesso.'})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}