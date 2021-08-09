const carrito = [];
let propiedad = "";
let criterio = "";

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

function ordenarPorStock(carrito, criterio) {
    switch (criterio) {
        case "MENOR":
            for (let i = 0; i < carrito.length; i++) {
                for (let x = 1; x < (carrito.length - i); x++) {
                    if (carrito[x - 1].stock > carrito[x].stock) {
                        mayor = carrito[x - 1];
                        carrito[x - 1] = carrito[x];
                        carrito[x] = mayor;
                    }
                }
            }
            console.log("------Carrito ordenado por stock de Menor a Mayor------");
            console.table(carrito);
            break;
        case "MAYOR":
            for (let i = 0; i < carrito.length; i++) {
                for (let x = 1; x < (carrito.length - i); x++) {
                    if (carrito[x - 1].stock < carrito[x].stock) {
                        menor = carrito[x - 1];
                        carrito[x - 1] = carrito[x];
                        carrito[x] = menor;
                    }
                }
            }
            console.log("------Carrito ordenado por stock de Mayor a Menor------");
            console.table(carrito);
            break;
        default:
            break;
    }
}

function ordenarPorPrecio(carrito, criterio) {
    switch (criterio) {
        case "MENOR":
            for (let i = 0; i < carrito.length; i++) {
                for (let x = 1; x < (carrito.length - i); x++) {
                    if (carrito[x - 1].precio > carrito[x].precio) {
                        mayor = carrito[x - 1];
                        carrito[x - 1] = carrito[x];
                        carrito[x] = mayor;
                    }
                }
            }
            console.log("------Carrito ordenado por precio de Menor a Mayor------");
            console.table(carrito);
            break;
        case "MAYOR":
            for (let i = 0; i < carrito.length; i++) {
                for (let x = 1; x < (carrito.length - i); x++) {
                    if (carrito[x - 1].precio < carrito[x].precio) {
                        menor = carrito[x - 1];
                        carrito[x - 1] = carrito[x];
                        carrito[x] = menor;
                    }
                }
            }
            console.log("------Carrito ordenado por precio de Mayor a Menor------");
            console.table(carrito);
            break;
        default:
            break;
    }
}

carrito.push(new Producto("Monitor", 27000, 15));
carrito.push(new Producto("Gabinete", 7000, 3));
carrito.push(new Producto("Mouse", 3500, 50));
carrito.push(new Producto("Teclado", 5000, 10));
carrito.push(new Producto("Cooler", 2400, 7));
carrito.push(new Producto("Mousepad", 1400, 9));
carrito.push(new Producto("Placa de video", 146000, 2));
carrito.push(new Producto("Memoria RAM", 8900, 20));
carrito.push(new Producto("Webcam", 3790, 34));
carrito.push(new Producto("Disco Rigido", 6490, 14));

console.log("--------Carrito original--------");
console.table(carrito);

while ((propiedad.toUpperCase() != "PRECIO") && (propiedad.toUpperCase() != "STOCK")) {
    propiedad = prompt("Ingrese si desea ordenar los productos por PRECIO o STOCK.").toUpperCase();
}

while ((criterio.toUpperCase() != "MAYOR") && (criterio.toUpperCase() != "MENOR")) {
    criterio = prompt("Ingrese MAYOR o MENOR para ordenar el listado:").toUpperCase();
}

switch (propiedad) {
    case "PRECIO":
        ordenarPorPrecio(carrito, criterio);
        break;
    case "STOCK":
        ordenarPorStock(carrito, criterio);
        break;
    default:
        break;
}