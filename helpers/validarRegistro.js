import { expresiones } from "./expresiones.js"
export function validarFormulario() {
    let inputs = document.getElementsByClassName("formulario__entrada")
    let arregloInputs = [...inputs]
    arregloInputs.map((input) => {
        input.addEventListener("keyup", (e) => {
            switch (e.target.id) {
                case "nombre":
                    if (expresiones.texto.test(e.target.value)) {
                        e.target.style.borderColor = "green"
                    } else {
                        document.getElementById("nombre").style.borderColor = "red"
                    }
                    break;
                case "apellido":
                    if (expresiones.texto.test(e.target.value)) {
                        e.target.classList.add("correcto")
                        e.target.classList.remove("incorrecto")
                    } else {
                        e.target.classList.add("incorrecto")
                        e.target.classList.remove("correcto")
                    }
                    break
                case "documento":
                    if (expresiones.numero.test(e.target.value)) {
                        e.target.classList.add("correcto")
                        e.target.classList.remove("incorrecto")
                    } else {
                        e.target.classList.add("incorrecto")
                        e.target.classList.remove("correcto")
                    }
                    break
                case "telefono":
                    if (expresiones.telefono.test(e.target.value)) {
                        e.target.classList.add("correcto")
                        e.target.classList.remove("incorrecto")
                    } else {
                        e.target.classList.add("incorrecto")
                        e.target.classList.remove("correcto")
                    }
                    break;
                case "correo":
                    if (expresiones.correo.test(e.target.value)) {
                        e.target.classList.add("correcto")
                        e.target.classList.remove("incorrecto")
                    } else {
                        e.target.classList.add("incorrecto")
                        e.target.classList.remove("correcto")
                    }
                    break;
                case "contrasena":
                    if (expresiones.contrasena.test(e.target.value)) {
                        e.target.classList.add("correcto")
                        e.target.classList.remove("incorrecto")
                    } else {
                        e.target.classList.add("incorrecto")
                        e.target.classList.remove("correcto")
                    }
                    break;
            }
        })
    })

    let lista = document.querySelector('#genero')
    lista.addEventListener("change", (e) => {
        if (e.target.value !== "") {
            e.target.classList.add("correcto")
            e.target.classList.remove("incorrecto")
        } else {
            e.target.classList.add("incorrecto")
            e.target.classList.remove("correcto")
        }
    })

    let hobbies = document.querySelectorAll("input[name='hobbies']")
    hobbies.forEach((hobbie) => {
        hobbie.addEventListener("change", () => {
            let hobbiesCheck = document.querySelectorAll("input[name='hobbies']:checked")
            let cajaHobbies = document.querySelector(".formulario__grupo--hobbies")
            if (hobbiesCheck.length > 0) {
                cajaHobbies.classList.add("correcto")
                cajaHobbies.classList.remove("bg-danger")
            } else {
                cajaHobbies.classList.add("bg-danger")
                cajaHobbies.classList.remove("correcto")
            }
        })
    })

}


