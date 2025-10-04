import { Usuarios } from "../models/UsuarioModel.js"

export function registrarUsuario() {
    let formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(formulario)
        let usuario = Object.fromEntries(formData)
        Usuarios.push(usuario)
        console.log(Usuarios)
    })
}