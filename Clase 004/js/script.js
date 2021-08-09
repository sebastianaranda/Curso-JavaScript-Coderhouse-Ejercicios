const figuraColeccionable = 1500;
const remera = 750;
let carrito = 0;
let seleccionDeMenu;

function menuCompra() {
    seleccionDeMenu = 9;
    while (seleccionDeMenu != 0) {
        seleccionDeMenu = Number(prompt("Ingrese el número ID del producto que desea seleccionar: 1-Figura Coleccionable / 2-Remera / 9-Checkout / 0-Salir"));
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
    let cantFiguras = Number(prompt(`El valor por unidad es $${figuraColeccionable}. Ingrese la cantidad que desea adquirir: `));
    carrito = carrito + (figuraColeccionable * cantFiguras);
    alert(`Se agregaron con exito ${cantFiguras} figuras al carrito. Total parcial: $${carrito}.`);
    console.log(`Valor de carrito actualizado $${carrito}`);
}

function carritoRemeras() {
    let cantRemeras = Number(prompt(`El valor por unidad es $${remera}. Ingrese la cantidad que desea adquirir:`));
    carrito = carrito + (remera * cantRemeras);
    alert(`Se agregaron con exito ${cantRemeras} remeras al carrito. Total parcial: $${carrito}.`);
    console.log(`Valor de carrito actualizado $${carrito}`);
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

while (seleccionDeMenu != 0) {
    menuCompra();
}
alert("Gracias por su visita, ¡vuelva pronto!");
