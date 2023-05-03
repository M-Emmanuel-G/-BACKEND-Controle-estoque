import { clientsRouter } from './Router/ClienstRouter';
import { productsRouter } from './Router/ProductsRouter';
import express from "express"
import cors from 'cors'
import { suppliesRouter } from './Router/SuppliesRouter';
import { ordersRouter } from './Router/OrdersRouter';
import { purchaseRouter } from './Router/PurchaseRouter';

export const app = express()

app.use(express.json())
app.use(cors())

app.use('/products', productsRouter)
app.use('/suppliers', suppliesRouter)
app.use('/orders', ordersRouter)
app.use('/clients', clientsRouter)
app.use('/purchases', purchaseRouter)

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});