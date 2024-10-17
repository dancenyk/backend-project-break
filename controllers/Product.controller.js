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

    async showProductById (req,res){
        try{
            const productById = await Product.findById(req.params.productId);
            if (!productById){
                return res.status(404).json({ message: "Product not founded"});
            }
            res.json(productById)
    
        }catch (error){
            res.status(500).json({ message: "Error al obtener los productos", error });
    
        }
    },

    async showNewProduct (req,res) {
        try{
        res.send(`
        <form action="/dashboard" method="POST">
        <input type="text" name="name" placeholder="Product Name" /> <br>
        <input type="text" name="description" placeholder="Product Description" /> <br>
        <input type="text" name="category" placeholder="Product Category"/> <br>
        <input type="text" name="brand" placeholder="Brand" /> <br>
        <input type="text" name="color" placeholder="Product Color" /> <br>
        <input type="text" name="image" placeholder="Image URL"/> <br>
        <input type="text" name="size" placeholder="Product Size"/> <br>
        <input type="text" name="gender" placeholder="gender" /><br>
        <input type="number" name="price" placeholder="Product Price" /><br>
        
        <button type="submit">Add Product</button>
        </form>
        `);

        } catch (error) {
        console.error("Error rendering new product form:", error);
        res.status(500).send("Internal Server Error");
        }
    },
    
    async showEditProduct (req,res){
        try{
            const productById = await Product.findById(req.params.productId);
            if (!productById){
                return res.status(404).json({ message: "Product not founded"});
            }
            res.send(`
            <form action="/dashboard" method="POST">
            <input type="text" name="name" placeholder="Product Name"/> <br>
            <input type="text" name="description" placeholder="Product Description"/> <br>
            <input type="number" name="price" placeholder="Product Price"/><br>
            <input type="text" name="image" placeholder="Image URL" /> <br>
            <input type="text" name="category" placeholder="Product Category"/> <br>
            <input type="text" name="size" placeholder="Product Size"/> <br>
            <input type="text" name="brand" placeholder="Brand"/> <br>
            <input type="text" name="color" placeholder="Product Color"/> <br>
            <input type="text" name="gender" placeholder="gender"><br>
          
            <button type="submit">Save</button>
            </form>       
            `)
        }catch (error){
            res.status(500).json({ message: "Error al obtener los productos", error });
    
        }

    },

    async updateProduct (req,res) {
       
            try{ 
                const idProduct = req.params.productId;
                const body = req.body;
        
                const updatedProduct = await Product.findByIdAndUpdate( 
                    idProduct, 
                    body,
                    {new: true});
                if (!updatedProduct){
                    return res.status(404).json({ message: "Product not founded"});
                }
                res.json(updatedProduct);
        
            }catch (error){
                res.status(500).json({ message: "Error al obtener los productos", error });
        
            }
    },

    async deleteProduct (req,res){
        try{
            const idProduct = req.params.productId;
            const productById = await Product.findByIdAndDelete(idProduct);
            if (!productById){
                return res.status(404).json({ message: "Product not founded"});
            }
            res.json(productById)
    
        }catch (error){
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