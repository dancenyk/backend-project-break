const express = require ("express");
const router = express.Router();
const Product = require("../models/Product")
const productController = require("../controllers/Product.controller")

router.get('/', (req, res) => {
    res.redirect("/products");
  });
  
//GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
router.get("/products", productController.showProducts)

//GET /products/:productId: Devuelve el detalle de un producto.
router.get("/products/:productId", productController.showProductById); 

//GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
router.get("/dashboard", productController.showProducts)

//GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
router.get("/dashboard/new", productController.showNewProduct)

//GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
router.get("/dashboard/:productId/edit", productController.showEditProduct); 

//GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
router.get("/dashboard/:productId", productController.showProductById); 

//POST /dashboard: Crea un nuevo producto.
router.post("/dashboard", productController.createProduct)

//POST /dashboard/:productId: Actualiza un producto desde un form
router.post("/dashboard/:productId", productController.updateProduct); 

//PUT /dashboard/:productId: Actualiza un producto.
router.put("/dashboard/:productId", productController.updateProduct); 

// DELETE /dashboard/:productId/delete: Elimina un producto.
router.delete("/dashboard/:productId/delete", productController.deleteProduct); 


module.exports = router; 

