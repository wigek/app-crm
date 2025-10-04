//TODO METODO INMUTABLE DE RECORRIDO RECIBE COMO ARGUMENTO UNA FUNCIÓN ANÓNIMA. LA FUNCIÓN ANONIMA RECIBE COMO PARAMETRO UNA VARIABLE DE ITERACIÓN.
import { expresiones } from "./expresiones.js";

let inputs = document.querySelectorAll("form div input");
let arregloInputs = [...inputs]; //acá convertimos el htmlcollection o nodelist en un arreglo 

// console.log(inputs);
// console.log(arregloInputs);


arregloInputs.map((input) => {
    input.addEventListener("keyup", (e) => {//el keyup es un evento que se dispara cuando se suelta una tecla 
        switch (e.target.name) {
            case "nombre":
                if (expresiones.texto.test(e.target.value)) {
                    e.target.style.borderColor = "green"; //e.target es el input que disparó el evento
                } else {
                    document.getElementById("nombre").style.borderColor = "red";
                }
                break;
            case "apellido":
                if (expresiones.texto.test(e.target.value)) {
                    e.target.classList.add("correcto");//agrega una clase al elemento y modificarlo según esa clase
                    e.target.classList.remove("incorrecto");
                } else {
                    e.target.classList.add("incorrecto");
                    e.target.classList.remove("correcto");
                }
                break;
            case "documento":
                if (expresiones.documento.test(e.target.value)) {
                    e.target.classList.add("correcto");//agrega una clase al elemento y modificarlo según esa clase
                    e.target.classList.remove("incorrecto");
                } else {
                    e.target.classList.add("incorrecto");
                    e.target.classList.remove("correcto");
                }
                break;
            case "telefono":
                if (expresiones.telefono.test(e.target.value)) {
                    e.target.classList.add("correcto");//agrega una clase al elemento y modificarlo según esa clase
                    e.target.classList.remove("incorrecto");
                } else {
                    e.target.classList.add("incorrecto");
                    e.target.classList.remove("correcto");
                }
                break;
            case "contrasena":
                if (expresiones.contrasena.test(e.target.value)) {
                    e.target.classList.add("correcto");//agrega una clase al elemento y modificarlo según esa clase
                    e.target.classList.remove("incorrecto");
                } else {
                    e.target.classList.add("incorrecto");
                    e.target.classList.remove("correcto");
                }
                break;
            case "correo":
                if (expresiones.correo.test(e.target.value)) {
                    e.target.classList.add("correcto");//agrega una clase al elemento y modificarlo según esa clase
                    e.target.classList.remove("incorrecto");
                } else {
                    e.target.classList.add("incorrecto");
                    e.target.classList.remove("correcto");
                }
                break;
            default:
                break;
        }
    })
})

let lista = document.querySelectorAll('#genero');
lista.addEventListener('change', (e) => {
    if (e.target.value !== "") {
        e.target.classList.add("correcto");//agrega una clase al elemento y modificarlo según esa clase
        e.target.classList.remove("incorrecto");
    } else {
        e.target.classList.add("incorrecto");
        e.target.classList.remove("correcto");
    }
});

let hobbies = document.querySelectorAll("input[name='hobbies']");
hobbies.forEach((hobbie)=>{
    hobbie.addEventListener("change", (e)=>{
        let hobbiesChek= document.querySelectorAll("input[name='hobbies']:checked");
        let cajaHobbies= document.querySelectorAll(".formulario__grupo--hobbies");
        if (hobbiesChek.length>0) {
            cajaHobbies.classList.add("correcto");//agrega una clase al elemento y modificarlo según esa clase
            cajaHobbies.classList.remove("incorrecto");
        }else {
            cajaHobbies.classList.add("incorrecto");
            cajaHobbies.classList.remove("correcto");
        }
    })
}) 