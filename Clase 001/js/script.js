// Variables
const valorTicket = 150;
console.log("Cada ticket cuesta: $" + valorTicket);
let cantTickets;
let nombreUsuario;
let valorTotal;

nombreUsuario = prompt("Hola, ingrese su nombre para comenzar la reserva:");
console.log("El nombre ingresado fue: " + nombreUsuario);

alert("¡Hola " + nombreUsuario + ", bienvenido!");

cantTickets = prompt("El valor de cada ticket es: $" + valorTicket + ". Ingrese la cantidad de ticket deseados:");
console.log("La cantidad seleccionada fue: " + cantTickets);

if (!isNaN(cantTickets)) {
    valorTotal = valorTicket * cantTickets;
    console.log("El valor total es: " + valorTotal);
    alert("¡Muchas gracias por su compra " + nombreUsuario + "! El costo total de su pedido es: $" + valorTotal);
} else {
    alert("La cantidad ingresada no es válida, vuelva a cargar la página para comenzar.");
}