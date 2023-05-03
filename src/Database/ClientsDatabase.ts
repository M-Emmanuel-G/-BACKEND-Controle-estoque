import { Clients, UpdateClientsDTO } from './../Models/Clients';
import { BaseDatabase } from "./BaseDatabase";

export class ClientsDatabase extends BaseDatabase{
    TABLE_NAME = 'C_Clients'
    getClients = async ()=>{
        try {
            const result = ClientsDatabase.connection(this.TABLE_NAME)
                .select('*')
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createClient = async(client:Clients)=>{
        try {
            const {idClient, nameClient, cpf, phone, email} = client

            await ClientsDatabase.connection(this.TABLE_NAME)
                .insert({
                    id_clients: idClient,
                    name_clients: nameClient,
                    cpf,
                    phone,
                    email
                })

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeClient = async(idClient:string)=>{
        try {
            await ClientsDatabase.connection(this.TABLE_NAME)
                .delete()
                .where(
                    {
                        id_clients:idClient
                    }
                )
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getClientById = async(idClient:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {
                        id_clients:idClient
                    }
                )
                return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getClientByCPF = async(cpf:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {cpf}
                )
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getClientByEmail = async(email:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {email}
                )
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getClientByPhone = async(phone:string)=>{
        try {
            const result = await ClientsDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {phone}
                )
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateClient = async(updateClient:UpdateClientsDTO)=>{
        try {
            const { idClient, nameClient, email, phone, cpf} = updateClient
            
            await ClientsDatabase.connection(this.TABLE_NAME)
                .update(
                    {
                        name_client: nameClient,
                        phone,
                        email
                    }
                )
                .where({
                    id_clients:idClient
                })
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}