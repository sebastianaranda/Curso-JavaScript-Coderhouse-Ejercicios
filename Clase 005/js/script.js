let carrito = 0;
let seleccionDeMenu;

class Producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.stock = stock;
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

function menuCompra() {
    seleccionDeMenu = 9;
    while (seleccionDeMenu != 0) {
        seleccionDeMenu = Number(prompt(`Ingrese el número ID del producto que desea seleccionar: 1-${figuraColeccionable.nombre} / 2-${remeraEstampada.nombre} / 9-Checkout / 0-Salir`));
        switch (seleccionDeMenu) {
            case 1:
                carritoFiguras();
                break;
            case 2:
                carritoRemeras();
                break;
            case 9:
                checkout();
                break;
            default:
                break;
        }
    }
}

function carritoFiguras() {
    let cantFiguras = Number(prompt(`El valor por unidad es $${figuraColeccionable.precio}. Ingrese la cantidad que desea adquirir: `));
    if (figuraColeccionable.vender(cantFiguras)) {
        carrito = carrito + (figuraColeccionable.precio * cantFiguras);
        alert(`Se agregaron ${cantFiguras} unidades de ${figuraColeccionable.nombre} al carrito. Total parcial: $${carrito}.`);
        console.log(`Valor de carrito actualizado $${carrito}`);
    } else {
        alert(`Lamentablemente no hay suficiente stock. ${figuraColeccionable.nombre} en stock: ${figuraColeccionable.stock}`);
    }

}

function carritoRemeras() {
    let cantRemeras = Number(prompt(`El valor por unidad es $${remeraEstampada.precio}. Ingrese la cantidad que desea adquirir:`));
    if (remeraEstampada.vender(cantRemeras)) {
        carrito = carrito + (remeraEstampada.precio * cantRemeras);
        alert(`Se agregaron ${cantRemeras} unidades de ${remeraEstampada.nombre} al carrito. Total parcial: $${carrito}.`);
        console.log(`Valor de carrito actualizado $${carrito}`);
    } else {
        alert(`Lamentablemente no hay suficiente stock. ${remeraEstampada.nombre} en stock: ${remeraEstampada.stock}`);
    }
}

function vaciarCarrito() {
    return carrito = 0;
}

function checkout() {
    if (carrito != 0) {
        let opcionChechout = 0;
        while ((opcionChechout != 1) && (opcionChechout != 9)) {
            opcionChechout = Number(prompt(`Su carrito tiene un valor de: $${carrito}. Ingrese 1 para confirmar la compra o 9 para seguir comprando.`));
            if (opcionChechout == 1) {
                alert(`Los $${carrito} ya fueron debitados de su cuenta. ¡Muchas gracias por su compra!`);
                vaciarCarrito();
                console.log(`Valor de carrito actualizado despues de compra exitosa $${carrito}`);
            }
        }
    } else {
        alert("Su carrito se encuentra vacío, agregue productos para continuar.");
    }
}

const remeraEstampada = new Producto("Remera Estampada", 750, 10);
const figuraColeccionable = new Producto("Figura Coleccionable", 1500, 5);

while (seleccionDeMenu != 0) {
    menuCompra();
}
alert("Gracias por su visita, ¡vuelva pronto!");