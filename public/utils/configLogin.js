//Importo las funciones necesarias desde Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js'

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA5-OkL-NGuuO_wOUpXS1fBEuAM8id3kUE",
  authDomain: "fir-auth-32c38.firebaseapp.com",
  projectId: "fir-auth-32c38",
  storageBucket: "fir-auth-32c38.appspot.com",
  messagingSenderId: "689980783298",
  appId: "1:689980783298:web:d463bb768a40d1ac4b195b"
};

// Initializo Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);


//capturo el div para el mensaje




//Funcion login 
const login = async () => {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.textContent = '';

  try{
    //Obtengo los valores email and password
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    //Valido entrada
    if (!email || !password) {
      mensajeDiv.textContent = 'Email and password are required';
      return;
    }

    //Autentico el usuario con Firebase 
    const userCredential = await signInWithEmailAndPassword(auth, email,password)

    //Obtengo el token ID del usuario autenticado
    const idToken = await userCredential.user.getIdToken()

    //Envío el ID token al servidor

    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });

    const data = await response.json()


    if (data.success) {
      window.location.href = "/dashboard";
    }else{
      mensajeDiv.textContent = 'Login failed: ' + data.error;
      console.log(`No se ha podido logar ${data.error}`)
    }
  } catch (error){
    mensajeDiv.textContent = 'Error during login: ' + error.message;
    console.log(`No se ha podido logar ${error}`)
  } 
};

// Evento para el botón de inicio de sesión
document.getElementById("loginButton").addEventListener("click", login)