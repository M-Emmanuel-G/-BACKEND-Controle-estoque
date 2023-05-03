import express from 'express';
import { PurchasController } from '../Controller/PurchaseController';

export const purchaseRouter = express.Router()
const purchaseController = new PurchasController()

purchaseRouter.get('/get',purchaseController.getPurchase)
purchaseRouter.get('/get/:invoice', purchaseController.getPurchaseByInvoice)
purchaseRouter.get('/purchase/:idPurchase', purchaseController.getPurchaseById)
purchaseRouter.post('/create/:idProduct/:idClient',purchaseController.createPurchase)