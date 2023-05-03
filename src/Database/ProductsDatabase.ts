import { IdProductDTO, Products, UpdateProducts } from "../Models/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase{
    TABLE_NAME = 'C_Products'
    getProducts = async ()=>{
        try {
            const result = ProductsDatabase.connection(this.TABLE_NAME)
                .select('*')
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createProduct = async(product:Products)=>{
        try {
            await ProductsDatabase.connection(this.TABLE_NAME)
                .insert(product)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeProduct = async(product:IdProductDTO)=>{
        try {
            const { idProduct } = product
            
            await ProductsDatabase.connection(this.TABLE_NAME)
                .delete()
                .where({
                    idProduct
                })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getProductById = async(idProduct:IdProductDTO)=>{
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where(idProduct)
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    updateProduct = async(updateProduct:UpdateProducts)=>{
        try {

            const {product, qtdStock, purchasePrice, saleValue, idProduct} = updateProduct
            
            await ProductsDatabase.connection(this.TABLE_NAME)
                .update({
                    product: product,
                    qtd_stock: qtdStock,
                    purchase_price: purchasePrice,
                    sale_value: saleValue
                })
                .where({
                    idProduct
                })
                
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}