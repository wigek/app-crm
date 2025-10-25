import { Usuarios } from "../models/UsuarioModel.js";
import { guardarLocalStorage } from "../helpers/local-storage.js";

export function registrarUsuario() {
  let formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formulario);
    let usuario = Object.fromEntries(formData);
    Usuarios.push(usuario);
    guardarLocalStorage("usuarios", Usuarios);
    console.log(Usuarios);
    window.location.href = "/views/panel.html";
  });
}

function listarUsuarios() {
  let listarUsuarios = document.getElementById("listarUsuarios");
  Usuarios.forEach((usuario) => {
    let card = document.createElement("article");
    let nombre = document.createElement("h3");
    let documento = document.createElement("p");
    let correo = document.createElement("p");
    let telefono = document.createElement("p");
    let genero = document.createElement("p");
    let hobbies = document.createElement("p");
    let editar = document.createElement("button");
    let eliminar = document.createElement("button");
    card.classList.add("card-usuario")
    nombre.textContent = usuario.nombre;
    documento.textContent = usuario.documento;
    correo.textContent = usuario.correo;
    telefono.textContent = usuario.telefono;
    genero.textContent = usuario.genero;
    hobbies.textContent = usuario.hobbies;
    editar.textContent = "Editar";
    eliminar.textContent = "Eliminar";
    card.append(
      nombre,
      documento,
      correo,
      telefono,
      genero,
      hobbies,
      editar,
      eliminar
    );
    listarUsuarios.append(card);
  });
}
listarUsuarios();
