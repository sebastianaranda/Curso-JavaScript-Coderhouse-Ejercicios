/* Selectores */
const listaProductos = document.querySelector('#lista-productos');
const tableCarrito = document.querySelector("#lista-carrito tbody");
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
let carrito = [];

/* Listeners */
listaProductos.addEventListener('click', agregarProducto);
tableCarrito.addEventListener('click', borrarProducto);
btnVaciarCarrito.addEventListener('click', vaciarCarrito);
document.addEventListener('DOMContentLoaded', () => {

	if (JSON.parse(localStorage.getItem('carrito'))) {
		carrito = JSON.parse(localStorage.getItem('carrito'));
		insertarCarritoHTML();
	}
});

function vaciarCarrito() {
	carrito = [];
	insertarCarritoHTML();
}


function borrarProducto(e) {
	e.preventDefault();

	if (e.target.classList.contains("borrar-producto")) {
		/* Opcion 1 */
		// const productoSeleccionado = e.target.parentElement.parentElement;
		// const productoId = e.target.getAttribute('data-id');

		// /* Borrar del HTML */
		// productoSeleccionado.remove();

		// /* Borrar de la variable carrito */
		// carrito = carrito.filter(producto => producto.id !== productoId);

		// /* Actualizar el storage */
		// guardarCarritoStorage();

		/* Opcion 2 */
		const productoId = e.target.getAttribute('data-id');
		carrito = carrito.filter(producto => producto.id !== productoId);
		insertarCarritoHTML();
	}
}

function agregarProducto(e) {
	e.preventDefault();

	if (e.target.classList.contains("agregar-carrito")) {
		const cardProducto = e.target.parentElement.parentElement;

		obtenerDatosProducto(cardProducto);
	}
}

function obtenerDatosProducto(cardProducto) {

	const productoAgregado = {
		imagen: cardProducto.querySelector('img').src,
		nombre: cardProducto.querySelector('h4').textContent,
		precio: cardProducto.querySelector('.precio span').textContent,
		cantidad: 1,
		id: cardProducto.querySelector('a').getAttribute('data-id')
	};

	const existe = carrito.some(producto => producto.id === productoAgregado.id);

	if (existe) {
		const productos = carrito.map(producto => {
			if (producto.id === productoAgregado.id) {
				producto.cantidad++;
				producto.precio = `$${Number(productoAgregado.precio.slice(1)) * producto.cantidad}`
				// return producto;
			} else {
				// return producto;
			}
			return producto;
		});
		/* Spread operator */
		carrito = [...productos];
	} else {
		// carrito.push(productoAgregado);
		carrito = [...carrito, productoAgregado];
	}


	insertarCarritoHTML();
}

function insertarCarritoHTML() {

	borrarCarritoHTML();

	carrito.forEach(producto => {
		/* Destructuring de objetos */
		const { imagen, nombre, precio, cantidad, id } = producto;

		const row = document.createElement('tr');
		row.innerHTML = `
		<td>
			<img src="${imagen}" width='100%'>
		</td>
		<td>${nombre}</td>
		<td>${precio}</td>
		<td>${cantidad}</td>
		<td>
			<a href="#" class="borrar-producto" data-id="${id}">X</a>
		</td>
		`
		tableCarrito.appendChild(row);
	});
	guardarCarritoStorage();
}

function borrarCarritoHTML() {
	/* Forma "lenta" */
	// tableCarrito.innerHTML = '';

	/* Forma rapida */
	while (tableCarrito.firstChild) {
		tableCarrito.removeChild(tableCarrito.firstChild);
	}
}

function guardarCarritoStorage() {
	localStorage.setItem('carrito', JSON.stringify(carrito));
}