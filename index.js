const express = require ("express");
const app = express();
const path = require('path');
const admin = require("firebase-admin")
const firebase = require("./config/firebase.js")
const cookieParser = require ("cookie-parser");


admin.initializeApp({
    credential: admin.credential.cert(firebase)
});

const PORT = process.env.PORT || 8080;
const {dbConnection} = require("./config/db")
const productRoutes = require("./routes/productRoutes")

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", productRoutes)

app.use(express.static(path.join(__dirname, 'public'))); 

dbConnection();

app.listen(PORT, ()=>{
    console.log(`Está escuchando en el http://localhost:${PORT}`)
})
