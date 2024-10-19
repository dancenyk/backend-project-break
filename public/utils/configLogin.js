import { application, json } from 'express';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js'

require("dotenv").config()

const firebaseConfig = {
  apiKey: "AIzaSyA5-OkL-NGuuO_wOUpXS1fBEuAM8id3kUE",
  authDomain: "fir-auth-32c38.firebaseapp.com",
  projectId: "fir-auth-32c38",
  storageBucket: "fir-auth-32c38.appspot.com",
  messagingSenderId: "689980783298",
  appId: "1:689980783298:web:d463bb768a40d1ac4b195b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);



//capturo el div para el mensaje
const mensaje = document.getElementById("mensaje")
//loginButton
const login = async () => {
  
  try{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const userCredential = await signInWithEmailAndPassword(auth, email,password)
    const idToken = await userCredential.user.getIdToken()

    const response = await fetch("/login",{
      method: "post",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ idToken }) 
    })

    const data = await response.json()
    if (data.success) {
      window.location.href = "/dashboard";
    }else{
      mensaje.textContent = "No se ha podido logar"
      console.log(`No se ha podido logar ${data.error}`)
    }

  } catch (error){
    console.log(`No se ha podido logar ${error}`)
  } 
}

document.getElementById("loginButton").addEventListener("click", login)