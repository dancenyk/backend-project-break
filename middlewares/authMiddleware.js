const admin = require("firebase-admin")
const auth = admin.auth

const checkAuth = (req, res, next) =>{
    const idCookie = req.cookies.token
}