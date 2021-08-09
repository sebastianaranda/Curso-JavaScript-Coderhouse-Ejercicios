const usuarioAdmin = "admin";
const passAdmin = "admin";
let loginCorrecto = false;
let turnosDisponibles = 4;

while (!loginCorrecto) {
    const usuario = prompt("Ingrese su usuario:");
    const pass = prompt("Ingrese su contraseña:");
    loginCorrecto = (usuario === usuarioAdmin) && (pass === passAdmin);

    if (loginCorrecto) {
        alert("Login correcto - ¡Bienvenido!");
    } else {
        alert("Error, los datos ingresados son incorrectos.");
        continue;
    }

    for (let i = 1; i <= turnosDisponibles; i++) {
        let nombreUsuario = prompt("Ingrese un nombre para asignar:");
        console.log(`Variable i vale: ${i} - Turnos disponibles: ${turnosDisponibles - i} - Usuario asignado: ${nombreUsuario}`);
        alert(`Bienvenido ${nombreUsuario}, su turno es el número: ${i}. Quedan ${turnosDisponibles - i} turnos disponibles.`);
    }
    alert("Ya no hay turnos disponibles.")
}