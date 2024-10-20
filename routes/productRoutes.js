const express = require ("express");
const router = express.Router();
const Product = require("../models/Product");

const productController = require("../controllers/Product.controller");
const productApiController = require("../controllers/ApiControllers.js"); 

const path = require("path");
const admin = require("firebase-admin");
const auth = admin.auth();



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


// Rutas API
router.get("/api/products", productApiController.showProducts);
router.get("/api/products/:productId", productApiController.showProductById);
router.post("/api/products", productApiController.createProduct);
router.put("/api/products/:productId", productApiController.updateProduct);
router.delete("/api/products/:productId", productApiController.deleteProduct);

//Register
router.get("/register", (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/views', "register.html"))
})

router.post("/register", async (req, res)=>{
  const {email, password} = req.body
  try {
    await auth.createUser({
      email,
      password
    });
    res.redirect("/login")


  }catch (error){
    console.error(`error interno:${error}`)
    res.redirect("/register")
  }
})

//Login

router.get("/login", (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/views', "login.html"))
})

router.post('/login', async (req, res) => {
  const { idToken } = req.body;
  try {
    // Verifica el ID token
    await auth.verifyIdToken(idToken);

    // Guardar el ID token en una cookie
    res.cookie('token', idToken, { httpOnly: true, secure: false }); // Usa secure: true en producción. Es un atributo de los navegadores para las cookies y evitar XXS
    res.json({ success: true });
  } catch (error) {
    console.error('Error verifying ID token:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
});


module.exports = router; 
