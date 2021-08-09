//variables
const mayoriaEdad = 18;
const credencialAdmin = "admin";

let nombreUsuario = prompt("Ingrese su nombre, o credencial admin:");

if (nombreUsuario == credencialAdmin) {
    alert("Bienvenido al panel de administracion");
} else {
    let edadUsuario = prompt("Confirme su edad:");

    if (edadUsuario >= 18) {
        alert("Hola " + nombreUsuario + ", bienvenido al sitio.");
    } else {
        alert(nombreUsuario + ", para acceder al sitio debes ser mayor de edad.");
    }
}