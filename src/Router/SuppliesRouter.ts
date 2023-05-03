import { SuppliesControlles } from '../Controller/SuppliesController';
import express from "express";

export const suppliesRouter = express.Router()

const suppliesController = new SuppliesControlles()

suppliesRouter.get('/supply/:cnpj', suppliesController.supplyByCnpj)
suppliesRouter.get('/get', suppliesController.getSupply)
suppliesRouter.post('/create', suppliesController.createSupply)
suppliesRouter.delete('/delete/:cnpj', suppliesController.deleteSupply)
suppliesRouter.patch('/update/:cnpj', suppliesController.updateSupply)