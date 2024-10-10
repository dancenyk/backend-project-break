const express = require ("express");
const app = express();
const PORT = process.env.PORT || 8080;
const {dbConnection} = require("./config/config")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("<h1>hola</h1>")
})

dbConnection();

app.listen(PORT, ()=>{
    console.log(`Está escuchando en el http://localhost:${PORT}`)
})


