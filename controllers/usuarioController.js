import { Usuarios } from "../models/UsuarioModel.js"
import { guardarLocalStorage } from "../helpers/local-storage.js"

export function registrarUsuario() {
    let formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(formulario)
        let usuario = Object.fromEntries(formData)
        Usuarios.push(usuario)
        guardarLocalStorage("usuarios", Usuarios)
        console.log(Usuarios)
    })
}