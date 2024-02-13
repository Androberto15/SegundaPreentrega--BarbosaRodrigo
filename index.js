//JUMBOTROn



   const jumbotronDiv = document.getElementById("jumbotron");
  
    function createJumbotron(title, description) {
      const jumbotronContent = `
        <div class="jumbotron-inner">
          <h1>${title}</h1>
          <p>${description}</p>
        </div>
      `;
      jumbotronDiv.innerHTML = jumbotronContent;
    }
  
    // Llamada a la función para crear el jumbotron con los datos deseados
    const jumbotronTitle = "Bienvenido";
    const jumbotronDescription = "Jumbotron dinámico";
    createJumbotron(jumbotronTitle, jumbotronDescription);
  
  //////////////////////////////////////////////
  // Saludo

  ///////////////////////////////////////
let nombre = prompt("Ingresá su nombre");
let apellido = prompt("Ingresá su apellido");
let nombreCompleto = nombre + " " + apellido;

// Función para calcular el total de la compra
const calcularTotalCompra = (productos) => {
    return productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
};

// Función para mostrar el resumen parcial de la compra
const mostrarResumenParcial = (productos) => {
    let resumen = "Resumen parcial de la compra:\n";
    for (let producto of productos) {
        resumen += `${producto.cantidad} ${producto.nombre}: $${producto.precio * producto.cantidad}\n`;
    }
    return resumen;
};

let productosComprados = [];

do {
    let saludar = prompt("Hola " + nombreCompleto + ", ¿te gustaría comprar algo hoy? (escribe si o no)");

    const validarRespuesta = (respuesta, callbackSi, callbackNo) => {
        if (respuesta === "si") {
            callbackSi();
        } else if (respuesta === "no") {
            callbackNo();
        } else {
            alert("Opción no válida.");
        }
    };

    const elegirProducto = () => {
        let producto = prompt("Tenemos pantalones ($20.000), remeras ($15.000) y zapatillas ($120.000). Escribe 'pantalon', 'remera' o 'zapatilla' según tu elección").toLocaleLowerCase();
        let precio;
        switch (producto) {
            case "pantalon":
                precio = 20000;
                break;
            case "remera":
                precio = 15000;
                break;
            case "zapatilla":
                precio = 120000;
                break;
            default:
                alert("Producto no válido.");
                break;
        }
        if (precio) {
            let cantidad = parseInt(prompt("¿Cuántas unidades desea comprar?"));
            if (!isNaN(cantidad) && cantidad > 0) {
                productosComprados.push({ nombre: producto, precio: precio, cantidad: cantidad });
                let totalParcial = calcularTotalCompra(productosComprados);
                alert("El total parcial de su compra es: $" + totalParcial);
            } else {
                alert("Ingresá una cantidad válida.");
            }
        }
    };

    validarRespuesta(saludar, elegirProducto, () => alert("Hasta la próxima, " + nombreCompleto));

} while (confirm("¿Deseas seguir comprando?"));

if (productosComprados.length > 0) {
    let resumenParcial = mostrarResumenParcial(productosComprados);
    alert(resumenParcial);
    let eliminarProducto = confirm("¿Deseas eliminar algún producto del carrito de compras?");
    if (eliminarProducto) {
        let productoAEliminar = prompt("Ingresá el nombre del producto que desea eliminar: (pantalon, remera, zapatilla)").toLowerCase();
        productosComprados = productosComprados.filter(producto => producto.nombre !== productoAEliminar);
        let nuevoTotal = calcularTotalCompra(productosComprados);
        alert("El total actualizado de tu compra es: $" + nuevoTotal);
    }
    let totalCompra = calcularTotalCompra(productosComprados);
    alert("Total de la compra: $" + totalCompra + "\nGracias por tu compra, " + nombreCompleto);
} else {
    alert("No hiciste ninguna compra. Hasta luego, " + nombreCompleto);
}





  //NAVBAR

const links = [
    {text: "Inicio", url:"#"},
    {text: "Nosotros", url:"#"},
    {text: "Servicios", url:"#"},
    {text: "Productos", url:"#"}, 
    {text: "Contacto", url:"#"}    
];

// Obtener el elemento de la barra de navegación
const navBar = document.getElementById("navBar");

// Función para crear y agregar los enlaces dinámicamente
function crearEnlace(texto, url) {
    const ancla = document.createElement('a');
    ancla.textContent = texto;
    ancla.href = url;
    return ancla;
}

// Recorrer la lista de enlaces y agregarlos a la barra de navegación
links.forEach(link => {
    const nuevoEnlace = crearEnlace(link.text, link.url);
    navBar.appendChild(nuevoEnlace);
});

// Modificación: Añadir una clase CSS al último enlace para estilizarlo
const ultimoEnlace = navBar.lastChild;
ultimoEnlace.classList.add("ultimo-enlace");



///Tarjetas:


class Producto {
    constructor(id, nombre, descripcion, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = `/img/${imagen}`;
        this.precio = precio;
    }
}

// Array de objetos de productos
const productosDisponibles = [
    new Producto(1, "Camisa", "Camisa de algodón", "camisa.jpg", 5000),
    new Producto(2, "Jean", "Jean", "jean.jpg", 10000),
    new Producto(3, "Zapatos", "Zapatos", "zapatos.jpg", 15000),
    new Producto(4, "Gorra", "Gorra", "gorra.jpg", 2000),
    new Producto(5, "Bufanda", "Bufanda", "bufanda.jpg", 3000),
    new Producto(5, "Sueter", "Sueter", "sueter.jpg", 3000)
];

// Llamo a los nodos desde HTML
const contenedorProductos = document.getElementById("productosContainer");

// Función para agregar cards de productos al contenedor
function agregarCards(productos) {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <h2>${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p>${producto.descripcion}</p> 
        <p>Precio: $${producto.precio}</p> 
        <button class="btn-comprar" data-id="${producto.id}">Comprar</button>
        `;
        contenedorProductos.appendChild(card);
    });
}

// Llamo a la función para agregar las cards de productos
agregarCards(productosDisponibles);




