import { CPFClientExist, EmailClientExist, PhoneClientExist, ClientNotFound } from './../CustomErrors/ClientsError';
import { EmailFormatInvalid, PhoneFormatInvalid } from './../CustomErrors/SuppliesError';
import { PleaseInsert } from './../CustomErrors/ProductsError';
import { Clients, ClientsDTO, UpdateClientsDTO } from './../Models/Clients';
import { ClientsDatabase } from './../Database/ClientsDatabase';
import { GenetareId } from '../Services/GenerateId';
export class ClientBusiness{

    clientsDatabase = new ClientsDatabase()

    getClients = async ()=>{
        try {
            const result = await this.clientsDatabase.getClients()
            return result
              
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createClient = async(client:ClientsDTO)=>{
        try {

            const {nameClient, cpf, phone, email} = client

            if(!nameClient || !cpf || !phone || !email) throw new PleaseInsert()
            if(!email.includes('@') || !email.includes(".com")) throw new EmailFormatInvalid()
            if(phone.length > 14) throw new PhoneFormatInvalid()

            const verifyCpf = await this.clientsDatabase.getClientByCPF(cpf)
            if(verifyCpf.length === 1) throw new CPFClientExist()

            const verifyEmail = await this.clientsDatabase.getClientByEmail(cpf)
            if(verifyEmail.length === 1) throw new EmailClientExist()

            const verifyPhone = await this.clientsDatabase.getClientByPhone(cpf)
            if(verifyPhone.length === 1) throw new PhoneClientExist()

            const id = GenetareId.newID()

            const newClient:Clients = {
                idClient: id,
                nameClient,
                cpf,
                email,
                phone
            }

            await this.clientsDatabase.createClient(newClient)
            

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeClient = async(idClient:string)=>{
        try {
            const verifyClient = await this.clientsDatabase.getClientById(idClient)
                if(verifyClient.length === 0) throw new ClientNotFound()
                
                await this.clientsDatabase.removeClient(idClient)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getClientById = async(idClient:string)=>{
        try {
            const result = await this.clientsDatabase.getClientById(idClient)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateClient = async(updateClient:UpdateClientsDTO)=>{
        try {
            const { idClient, cpf ,nameClient, phone, email, } = updateClient
            
            if(!nameClient || !phone || !email) throw new PleaseInsert()
            if(!email.includes('@') || !email.includes(".com")) throw new EmailFormatInvalid()
            if(phone.length > 14) throw new PhoneFormatInvalid()

            const verifyClient = await this.clientsDatabase.getClientById(idClient)
            if(verifyClient.length === 0) throw new ClientNotFound()

            await this.clientsDatabase.updateClient(updateClient)
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}