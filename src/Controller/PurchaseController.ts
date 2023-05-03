import { PurchaseDTO } from './../Models/Purchase';
import { PurchaseBusiness } from './../Business/PurchaseBusiness';
import { Request, Response } from "express";

export class PurchasController{

    purchaseBusiness = new PurchaseBusiness()

    getPurchase = async (req:Request, res:Response)=>{
        try {
            const result = await this.purchaseBusiness.getPurchase()
            res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getPurchaseByInvoice = async (req:Request, res:Response)=>{
        try {
            const {invoice} = req.params
            
            const result = await this.purchaseBusiness.getPurchaseByInvoice(invoice)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getPurchaseById = async (req:Request, res:Response)=>{
        try {
            const {idPurchase} = req.params
            
            const result = await this.purchaseBusiness.getPurchaseById(idPurchase)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    createPurchase = async (req:Request, res:Response)=>{
        try {

            const newPurchase:PurchaseDTO  = {
                qtdPurchase: req.body.qtdPurchase,
                idClient:req.params.idClient,
                idProduct: req.params.idProduct
            }

            await this.purchaseBusiness.createPurchase(newPurchase)
            res.status(200).send({message:"Compra realizada com sucesso..."})
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}