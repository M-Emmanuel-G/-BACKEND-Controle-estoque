import { ClientsDTO, UpdateClientsDTO } from './../Models/Clients';
import { ClientBusiness } from './../Business/ClientsBusiness';
import { Request, Response } from "express";

export class ClientsController{

    clienstBusiness = new ClientBusiness()

    getClients = async (req:Request, res:Response)=>{
        try {

            const result = await this.clienstBusiness.getClients()
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    createClient = async(req:Request, res:Response)=>{
        try {

            const newClient:ClientsDTO = {
                nameClient : req.body.nameClient,
                cpf:req.body.cpf,
                phone:req.body.phone,
                email:req.body.email,
            }

            await this.clienstBusiness.createClient(newClient)
            res.status(201).send({message:'Cliente Cadastrado com sucesso.'})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    removeClient = async(req:Request, res:Response)=>{
        try {
            const {idClient} = req.params

            await this.clienstBusiness.removeClient(idClient)

            res.status(200).send({message:"O cliente foi removido..."})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getClientById = async(req:Request, res:Response)=>{
        try {

            const {idClient} = req.params

            const result = await this.clienstBusiness.getClientById(idClient)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    updateClient = async(req:Request, res:Response)=>{
        try {
            
            const updateClient:UpdateClientsDTO = {

                idClient: req.params.idClient,
                nameClient : req.body.nameClient,
                cpf:req.body.cpf,
                phone:req.body.phone,
                email:req.body.email,
            }

            await this.clienstBusiness.updateClient(updateClient)

            res.status(200).send({message:"O cliente foi atualizado com sucesso."})
                
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}