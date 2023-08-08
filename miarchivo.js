//Información para el usuario
  alert("¡Bienvenid@ al mundo de la Fotografía! \nEn esta web puedes encontrar 3 tamaños de fotos: \nPequeñas ($590CLP) \nMedianas ($790CLP) \nGrandes ($990CLP)");
  
//Catálogo de productos
  const productos = [
      {nombre: "pequeñas", precio: 590},
      {nombre: "medianas", precio: 790},
      {nombre: "grandes", precio: 990}
  ];

//Definir carrito
  const carrito = [];

//Función para añadir objetos al carrito
  function agregarAlCarrito(indiceProducto, cantidad){
      let producto = productos[indiceProducto];
      carrito.push({producto: producto, cantidad: cantidad});
  }
  
//Función para calcular el total del carrito
  function calcularTotalCarrito() {
      let total = 0;
      for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].producto.precio * carrito[i].cantidad;
      }
      return total;
  }
  
//Solicitar cuál será la compra al usuario
  while (true) {
      let productoElegido = parseInt(prompt("Elige un producto por su número: \nFotos pequeñas(0) \nFotos medianas (1) \nFotos grandes (2). \nElige 3 si no deseas comprar o si finalizaste de añadir cosas en tu carrito"));
      
      if (productoElegido === 3) {
        break; 
      }
      
      let cantidadElegida = parseInt(prompt("Ingresa la cantidad:"));
      agregarAlCarrito(productoElegido, cantidadElegida);
  }
  
// Crear una lista de los item comprados
let carritoInfo = "Carrito de Compras:\n";

for (var i = 0; i < carrito.length; i++) {
    let item = carrito[i];
    carritoInfo += `${item.cantidad} x Fotos ${item.producto.nombre} - Precio unitario: $${item.producto.precio}\n`;
}

carritoInfo += `Total: $${calcularTotalCarrito()}`;

//Mostrar el resultado 
  alert(carritoInfo);
  


