particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 600,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }
);

$(".btn__enter").click(function (e) {
    e.preventDefault();
    $(".welcome").fadeToggle(1500, function () {
        $(".houses").fadeIn(1500);
    });
});

/* Selectores */
const listaPersonajes = document.querySelector(".lista__personajes");
const listaCasas = document.querySelector(".houses__container");
let casa = "";

/* Listeners */
listaCasas.addEventListener('click', buscarCasa);

function buscarCasa(e) {
    e.preventDefault();
    if (e.target.classList.contains("gryffindor")) {
        casa = "gryffindor";
        pedirPersonajes(casa);
    }
    if (e.target.classList.contains("slytherin")) {
        casa = "slytherin";
        pedirPersonajes(casa);
    }
    if (e.target.classList.contains("ravenclaw")) {
        casa = "ravenclaw";
        pedirPersonajes(casa);
    }
    if (e.target.classList.contains("hufflepuff")) {
        casa = "hufflepuff";
        pedirPersonajes(casa);
    }

}

function renderizarPersonajesHTML(personajes) {
    listaPersonajes.innerHTML = '';
    listaPersonajes.style.display = "flex";
    personajes.forEach(personaje => {
        let { name, ancestry, actor, image } = personaje;
        if (ancestry == "") {
            ancestry = "Unknown";
        }
        const divPersonaje = document.createElement('div');
        divPersonaje.classList.add("personaje");
        divPersonaje.style.display = "none";
        divPersonaje.innerHTML = `
            <div class="personaje__fotoPerfil">
                <i class="personaje__fotoPerfil--escudo ${casa}"></i>
                <img class="personaje__fotoPerfil--imagen ${casa}" src="${image}" alt="">
            </div>
            <div class="personaje__datos">
                <p class="personaje__datos--nombreTitle">Nombre</p>
                <p class="personaje__datos--nombre">${name}</p>
                <p class="personaje__datos--generoTitle">Ascendencia</p>
                <p class="personaje__datos--genero">${ancestry}</p>
                <p class="personaje__datos--casaTitle">Actor / Actriz</p>
                <p class="personaje__datos--casa">${actor}</p>
            </div>
            `
        listaPersonajes.appendChild(divPersonaje);
        $(".personaje").slideDown(500);
    });
    $("html").animate(
        {
            scrollTop: $(".lista__personajes").offset().top
        }, 1000);
}

function pedirPersonajes(casa) {
    $.ajax({
        url: `https://hp-api.herokuapp.com/api/characters/house/${casa}`,
        method: `GET`,
        dataType: `JSON`,
        success: function (result, status, jqXHR) {
            renderizarPersonajesHTML(result);
        },
        error: function (jqXHR, status, error) {
            console.log(jqXHR);
            console.log(status);
            console.log(error);
        }
    });
}