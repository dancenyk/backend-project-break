# Tienda deportiva SportShop

El proyecto es una tienda deportiva que incluye ropa, zapatillas, accesorios y vitaminas. Los productos están guardados en una base de datos de mongo en Atlas. 


## Tecnologías utilizadas

- Frontend: HTML y CSS
- Lenguaje: JavaScript
- Base de datos: MongoDB (con MongoDB Atlas)
- Backend: Node.js y Express

## Instrucciones para poner en marcha la aplicación

- Paso 1: Instalar Node.js y npm
Si no tienes Node.js instalado, descárgalo e instálalo desde nodejs.org

- Paso 2: Verifica la instalación ejecutando los siguientes comandos en la terminal:
node -v
npm -v

- Paso 3: Haz fork del repositorio desde el GitHub
 https://github.com/dancenyk/backend-project-break

- Paso 4: Clona el repositorio 

- Paso 5: Instala las dependencias
 npm install express dotenv mongoose 

- Paso 6: Crea una cuenta en MongoDB Atlas
No olvides configurar el acceso IP (puedes elegir "Allow Access from Anywhere" durante el desarrollo).
Crea un usuario de base de datos y establece una contraseña segura.
Copia la URL de conexión a MongoDB Atlas. 

MONGO_URI=<tu conexión a MongoDB>


- Paso 7: Iniciar el servidor
Una vez configurado todo, puedes inicializar el servidor y ejecutar la aplicación con el siguiente comando:

npm start

Esto arrancará el servidor en el puerto que hayas definido (por defecto, http://localhost:3000). 

## Endpoints

- Públicos
GET / y GET /products: Muestra la página principal con todos los productos.
GET /register: Devuelve el formulario de registro de usuarios.
POST /register: Registra un nuevo usuario.
GET /login: Devuelve el formulario de inicio de sesión.

- Admin
GET /dashboard: Muestra todos los productos.
GET /dashboard/new: Devuelve un formulario para añadir un nuevo producto.
POST /dashboard/new: Crea un nuevo producto en la base de datos.
GET /dashboard/_id: Muestra los detalles de un producto específico.
PUT /dashboard/: Actualiza un producto existente.
GET /dashboard/edit: Devuelve un formulario para editar un producto.
DELETE /dashboard/delete: Elimina un producto de la base de datos.

- API
POST /products: Crea un nuevo producto.
GET /products: Devuelve todos los productos.
GET /products/: Devuelve los detalles de un producto específico.
PUT /products/edit/: Actualiza un producto existente.
DELETE /products/delete/: Elimina un producto de la base de datos.
