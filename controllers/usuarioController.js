import { Usuarios } from "../models/UsuarioModel.js";

export function registrarUsuario() {
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(formulario);
        let usuario = Object.fromEntries(formData);
        usuario.hobbies = formData.getAll("hobbies");
        Usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(Usuarios));
        formulario.reset();
        alert("Usuario registrado exitosamente");
    });
}