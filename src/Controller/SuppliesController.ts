import { SuppliesDTO, UpdateSuppliesDTO } from '../Models/Supplies';
import { Request, Response } from 'express';
import { SuppliesBusiness } from '../Business/SuppliesBusiness';
export class SuppliesControlles {
    suppliesBusiness = new SuppliesBusiness()

    createSupply = async(req:Request, res:Response)=>{
        try {
            const {cnpj, nameSupply, phone, email} = req.body  
            
            const newSupply:SuppliesDTO = {
                cnpj,
                nameSupply,
                phone,
                email
            }

            await this.suppliesBusiness.createSupply(newSupply)
            res.status(201).send({message:"Fornecedor adicionado com sucesso."})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
    
    getSupply = async(req:Request, res:Response)=>{
        try {
            const result = await this.suppliesBusiness.getSupply()
            res.status(201).send(result)
        } catch (error:any) {
            res.status(200).send(error.message)
        }
    }

    deleteSupply = async(req:Request, res:Response)=>{
        try {
            const {cnpj} = req.params  

            await this.suppliesBusiness.deleteSupply(cnpj)
            res.status(201).send({message:"Fornecedor removido com sucesso."})
        } catch (error:any) {
            res.status(200).send(error.message)
        }
    }

    updateSupply = async(req:Request, res:Response)=>{
        try {
            const { nameSupply, phone, email} = req.body  
            const {cnpj} = req.params

            const newSupply:UpdateSuppliesDTO = {
                cnpj,
                nameSupply,
                phone,
                email
            }

            await this.suppliesBusiness.updateSupply(newSupply)
            res.status(201).send({message:"Fornecedor atualizado com sucesso."})
        } catch (error:any) {
            res.status(200).send(error.message)
        }
    }

    supplyByCnpj = async(req:Request, res:Response)=>{
        try {
            const {cnpj} = req.params  

            const result = await this.suppliesBusiness.supplyByCnpj(cnpj)
            res.status(201).send(result)
        } catch (error:any) {
            res.status(200).send(error.message)
        }
    }
}