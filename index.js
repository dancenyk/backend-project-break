const express = require ("express");
const app = express();
const PORT = process.env.PORT || 8080;
const {dbConnection} = require("./config/db")
const productRoutes = require("./routes/productRoutes")

//middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", productRoutes)


dbConnection();

app.listen(PORT, ()=>{
    console.log(`Está escuchando en el http://localhost:${PORT}`)
})


