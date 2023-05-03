import { OrderController } from './../Controller/OrderController';
import express from "express";

export const ordersRouter = express.Router()

const orderController = new OrderController()

ordersRouter.get(`/order`,orderController.getOrders)
ordersRouter.get(`/order/:idOrder`,orderController.getOrderById)
ordersRouter.post(`/create/:idProduct`,orderController.createOrder)