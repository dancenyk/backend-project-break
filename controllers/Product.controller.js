const Product = require("../models/Product.js")

const productController = {
    async createProduct (req,res) {
        try{
            const newProduct = await Product.create({...req.body}) 
            res.status(201).json(newProduct);
        }catch (error){
            res.status(400).json({ message: "Error al crear el producto", error });
        }
    },

    async showProducts (req,res){
        try{
            const products = await Product.find();
            res.status(200).json(products)
    
        }catch (error){
            res.status(500).json({ message: "Error al obtener los productos", error });
    
        }
    },

    async showProducts (req, res){
        try{
            const allProducts = await Product.find();
            res.status(200).json(allProducts)
    
        }catch(error){
            res.status(500).json({ message: "Error al obtener los productos", error });
    
        }
    }
}

module.exports = productController

/*

showProducts: Devuelve la vista con todos los productos.
showProductById: Devuelve la vista con el detalle de un producto.
showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.
- createProduct: Crea un nuevo producto. Una vez creado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
showEditProduct: Devuelve la vista con el formulario para editar un producto.
updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
deleteProduct: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del dashboard.
*/