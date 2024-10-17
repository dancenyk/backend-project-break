/*
Creación de rutas
Vamos a crear las rutas CRUD para los productos. Al usar formularios html, las rutas serán de tipo GET y POST. Las rutas deberían tener una estructura similar a esta:
*/

const express = require ("express");
const router = express.Router();
const Product = require("../models/Product")
const productController = require("../controllers/Product.controller")


//POST /dashboard: Crea un nuevo producto.
router.post("/dashboard", productController.createProduct)

//GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
router.get("/products", productController.showProducts)

//GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
router.get("/dashboard", productController.showProducts)


router.get("/", (req,res)=>{
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <a href="#">Clothing</a>
            <a href="#">Footwear</a>
            <a href="#">Vitamins</a>
            <a href="#">Accesories</a>
            <a href="#">Login</a>
        </nav>
    </header>
</body>
</html>  
    `)
})


//GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.

router.get("/dashboard/new", (req,res)=>{
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
})




//PUT /dashboard/:productId: Actualiza un producto.

router.put("/dashboard/:productId", async (req, res)=>{
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
}); 


// DELETE /dashboard/:productId/delete: Elimina un producto.

router.delete("/dashboard/:productId/delete", async (req, res)=>{
    
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
}); 
  

//GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.

router.get("/dashboard/:productId", async (req, res)=>{
    try{
        const productById = await Product.findById(req.params.productId);
        if (!productById){
            return res.status(404).json({ message: "Product not founded"});
        }
        res.json(productById)

    }catch (error){
        res.status(500).json({ message: "Error al obtener los productos", error });

    }
}); 


//*GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.

router.get("/dashboard/:productId/edit", async (req, res)=>{
    try{
        const productById = await Product.findById(req.params.productId);
        if (!productById){
            return res.status(404).json({ message: "Product not founded"});
        }
        res.send(`
        <form action="/dashboard" method="PUT">
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
}); 

//GET /products/:productId: Devuelve el detalle de un producto.

router.get("/products/:productId", async (req, res)=>{
    try{
        const productById = await Product.findById(req.params.productId);
        if (!productById){
            return res.status(404).json({ message: "Product not founded"});
        }
        res.json(productById)

    }catch (error){
        res.status(500).json({ message: "Error al obtener los productos", error });

    }
}); 



module.exports = router; 

