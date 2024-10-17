const express = require ("express");
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;
const {dbConnection} = require("./config/db")
const productRoutes = require("./routes/productRoutes")

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.use("/", productRoutes)

dbConnection();

app.listen(PORT, ()=>{
    console.log(`Está escuchando en el http://localhost:${PORT}`)
})
