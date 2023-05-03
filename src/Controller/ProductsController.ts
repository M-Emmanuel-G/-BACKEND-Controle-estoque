import { IdProductDTO, UpdateProducts } from './../Models/Products';
import { Request, Response } from "express";
import { ProductsBusiness } from "../Business/ProductsBusiness";
import { ProductsDTO } from "../Models/Products";

export class ProductsController{
    productsBusiness = new ProductsBusiness()
    getProducts = async(req:Request, res:Response)=>{
        try {
            const result =await  this.productsBusiness.getProducts()
            
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    createProduct = async(req:Request, res:Response)=>{
        try {

            const {product, qtdStock, purchasePrice, saleValue} = req.body

            const newProduct:ProductsDTO = {
                product,
                qtdStock,
                purchasePrice,
                saleValue
            }

            await this.productsBusiness.createProduct(newProduct)

            res.status(201).send({message:'O produto foi adicionado com sucesso.'})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    removeProduct = async(req:Request, res:Response)=>{
        try {
            const idProduct = req.params.idProduct

            const newIdProduct:IdProductDTO = {
                idProduct
            }

            await this.productsBusiness.removeProduct(newIdProduct)

            res.status(200).send({message:'O produto foi removido com sucesso.'})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    updateProduct = async(req:Request, res:Response)=>{
        try {
            const {idProduct} = req.params
            const {product, qtdStock, purchasePrice, saleValue} = req.body

            const updateProduct: UpdateProducts = {
                idProduct,
                product,
                qtdStock,
                purchasePrice,
                saleValue
            }
            
            await this.productsBusiness.updateProduct(updateProduct)
            res.status(201).send({message:'O produto foi atualizado com sucesso.'})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    getProductById = async(req:Request, res:Response)=>{
        try {
            const {idProduct} = req.params;

            const idProd:IdProductDTO = {
                idProduct
            }
            const result =await  this.productsBusiness.getProductById(idProd)
            
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}