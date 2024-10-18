/*
- baseHtml: html común a todas las páginas. Puede contener elementos como la importación de estilos, etc.
- getNavBar: Genera la barra de navegación con las categorías. En caso de estar en el dashboard, también generará un enlace para subir un nuevo producto.
- getProductCards: Genera el html de los productos. Recibe un array de productos y devuelve el html de las tarjetas de los productos.
*/

function baseHtml() {
    return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SportShop</title>
      <link rel="stylesheet" href="styles.css">
  </head>
  <body>
      <header>
          
      </header>
  </body>
  </html>
  `;
  }


function getNavBar(categories){
    return `
    <nav>
        <a href="#">Products</a>
        <a href="#">Clothing</a>
        <a href="#">Footwear</a>
        <a href="#">Vitamins</a>
        <a href="#">Accesories</a>
        <a href="#">Login</a>
    </nav>
    `
}

function getProductCards(products) {
    let html = '<div class="product-container">';;
    for (let product of products) {
      html += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>${product.price}€</p>
          <a href="/products/${product._id}">
          <button>Ver detalle</button>
          </a>
          </div>
        </div>
      `;
    }
    return html;
  }

  function getProductbyId(product) {
      return `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>${product.price}€</p>
        </div>
      `;
  }





  module.exports = {baseHtml, getNavBar, getProductCards, getProductbyId}


