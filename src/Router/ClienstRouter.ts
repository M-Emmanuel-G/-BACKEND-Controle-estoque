import express from 'express';
import { ClientsController } from '../Controller/ClientsController';

export const clientsRouter = express.Router()
const clientsController = new ClientsController()

clientsRouter.get('/get', clientsController.getClients)
clientsRouter.get('/getId/:idClient', clientsController.getClientById)
clientsRouter.post('/create', clientsController.createClient)
clientsRouter.patch('/update/:idClient', clientsController.updateClient)
clientsRouter.delete('/delete/:idClient', clientsController.removeClient)