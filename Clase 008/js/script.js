/* Identifico elementos */
const marcas = document.querySelector(".marcas");
const marcasTitulo = document.querySelector(".titulo");
/* Creo nuevo elementos */
const alerta = document.createElement("div");
alerta.classList.add("alert", "marcas__alerta", "marcas__alerta-hidden");

function alertaSuccess(){
    alerta.classList.add("alert-success");
    alerta.classList.remove("alert-danger","alert-primary","alert-warning","marcas__alerta-hidden");
    /* Agrego elemento nuevo al html */
    marcas.insertBefore(alerta,marcasTitulo);
}

function alertaNoStock(){
    alerta.classList.add("alert-danger");
    alerta.classList.remove("alert-success","alert-primary","alert-warning","marcas__alerta-hidden");
    /* Agrego elemento nuevo al html */
    marcas.insertBefore(alerta,marcasTitulo);
}

function alertaProductoAgregado(){
    alerta.classList.add("alert-primary");
    alerta.classList.remove("alert-success","alert-danger","alert-warning","marcas__alerta-hidden");
    /* Agrego elemento nuevo al html */
    marcas.insertBefore(alerta,marcasTitulo);
}

function alertaCarritoVacio(texto){
    alerta.textContent = texto;
    alerta.classList.add("alert-warning");
    alerta.classList.remove("alert-success", "alert-danger", "alert-primary", "marcas__alerta-hidden");
    /* Agrego elemento nuevo al html */
    marcas.insertBefore(alerta,marcasTitulo);
}

let seleccionDeMenu;
const carrito = [];

class Producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.stock = Number(stock);
    }

    vender(cant) {
        if (this.stock >= cant) {
            this.stock = this.stock - cant;
            console.log(`Se vendieron ${cant} unidades. Quedan en stock: ${this.stock}`);
            return true;
        } else {
            console.log("No hay stock suficiente");
            return false;
        }
    }
}

function cargarCarrito(cantVendida, productoVendido) {
    for (let i = 0; i < cantVendida; i++) {
        carrito.push(productoVendido);
    }
}

function menuCompra() {
    seleccionDeMenu = 9;
    while (seleccionDeMenu != 0) {
        seleccionDeMenu = Number(prompt(`Ingrese el número ID del producto que desea seleccionar:\n\n1 - ${figuraColeccionable.nombre} \n\n2 - ${remeraEstampada.nombre}\n\n9 - Checkout\n\n0 - Salir\n\n`));
        switch (seleccionDeMenu) {
            case 1:
                venderProducto(figuraColeccionable);
                break;
            case 2:
                venderProducto(remeraEstampada);
                break;
            case 9:
                checkout();
                break;
            default:
                break;
        }
    }
}

function totalCarrito() {
    let parcial = 0;
    for (let i = 0; i < carrito.length; i++) {
        parcial = parcial + carrito[i].precio;
    }
    return parcial;
}

function venderProducto(producto) {
    let cant = Number(prompt(`El valor por unidad es $${producto.precio}.\n\nIngrese la cantidad que desea adquirir:\n\n`));
    if (producto.vender(cant)) {
        cargarCarrito(cant, producto);
        console.log(`Valor de carrito actualizado $${totalCarrito()}`);
        console.table(carrito);
        alerta.textContent = `Se agregaron ${cant} unidades de ${producto.nombre} al carrito, por un valor de: $${producto.precio * cant}.`;
        alertaProductoAgregado();
        alert(`Se agregaron ${cant} unidades de ${producto.nombre} al carrito, por un valor de: $${producto.precio * cant}.`);
    } else {
        alerta.textContent = `Lamentablemente no hay suficiente stock.\n\n${producto.nombre} en stock: ${producto.stock}.`;
        alertaNoStock();
        alert(`Lamentablemente no hay suficiente stock.\n\n${producto.nombre} en stock: ${producto.stock}.`);
    }
}

function vaciarCarrito(carrito) {
    while (carrito.length) {
        carrito.pop();
    }
}

function checkout() {
    if (carrito.length > 0) {
        let totalDeCompra = totalCarrito();
        let opcionCheckout = 0;
        while ((opcionCheckout != 1) && (opcionCheckout != 9)) {
            opcionCheckout = Number(prompt(`Su carrito tiene un valor de: $${totalDeCompra}. Ingrese una opción:\n\n1 - Confirmar compra\n\n9 - Seguir comprando\n\n`));
            if (opcionCheckout == 1) {
                console.log("El usuario compro los siguientes productos:")
                console.table(carrito);
                alerta.textContent = `Los $${totalDeCompra} ya fueron debitados de su cuenta.\n\n¡Muchas gracias por su compra!`;
                alertaSuccess();
                alert(`Los $${totalDeCompra} ya fueron debitados de su cuenta.\n\n¡Muchas gracias por su compra!`);
                vaciarCarrito(carrito);
            }
        }
    } else {
        alertaCarritoVacio(`Su carrito se encuentra vacío, agregue productos para continuar.`);
        alert(`Su carrito se encuentra vacío, agregue productos para continuar.`);
    }
}

const remeraEstampada = new Producto("Remera Estampada", 750, 6);
const figuraColeccionable = new Producto("Figura Coleccionable", 1500, 4);


while (seleccionDeMenu != 0) {
    menuCompra();
}
alert("Gracias por su visita, ¡vuelva pronto!");