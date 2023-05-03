import { ProductNotFound } from './../CustomErrors/ProductsError';
import { IdProductDTO, UpdateProducts } from './../Models/Products';
import { IdProductNotInserted, PleaseInsert, ValueNull } from "../CustomErrors/ProductsError";
import { ProductsDatabase } from "../Database/ProductsDatabase";
import { Products, ProductsDTO } from "../Models/Products";
import { GenetareId } from "../Services/GenerateId";

export class ProductsBusiness{
    productsDatabase = new ProductsDatabase()
    getProducts = async()=>{
        try {
            const result = this.productsDatabase.getProducts()
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createProduct = async(newProduct:ProductsDTO)=>{
        try {
            
            const {product, qtdStock, purchasePrice, saleValue} = newProduct

            if(!product || !qtdStock || !purchasePrice || !saleValue) throw new PleaseInsert()
            if(qtdStock === 0 || purchasePrice === 0 || saleValue == 0 ) throw new ValueNull()

            const id = GenetareId.newID()
            
             const createProduct : Products = {
                idProduct:id,
                product,
                qtd_stock: qtdStock,
                purchase_price: purchasePrice,
                sale_value : saleValue
             }

             await this.productsDatabase.createProduct(createProduct)
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeProduct = async(idProduct:IdProductDTO)=>{
        try {
            if(!idProduct) throw new IdProductNotInserted();
            const productExist = await this.productsDatabase.getProductById(idProduct)

            if(productExist.length === 0) throw new ProductNotFound();

            await this.productsDatabase.removeProduct(idProduct)
            
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateProduct = async(updateProduct:UpdateProducts)=>{
        try {
            const { idProduct } = updateProduct

            const verifyID:IdProductDTO = {
                idProduct
            }

            const productExist = await this.productsDatabase.getProductById(verifyID)
            if(productExist.length === 0) throw new ProductNotFound;
            
            await this.productsDatabase.updateProduct(updateProduct)

         } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
    getProductById = async(idProduct:IdProductDTO)=>{
        try {
            const result = this.productsDatabase.getProductById(idProduct)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}