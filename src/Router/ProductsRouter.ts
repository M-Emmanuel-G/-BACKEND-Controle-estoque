import { ProductsController } from './../Controller/ProductsController';
import express from "express";

export const productsRouter = express.Router()

const productsController = new ProductsController()

productsRouter.get('/get', productsController.getProducts)
productsRouter.get('/get/:idProduct', productsController.getProductById)
productsRouter.post('/create', productsController.createProduct)
productsRouter.delete('/delete/:idProduct', productsController.removeProduct)
productsRouter.patch('/update/:idProduct', productsController.updateProduct)