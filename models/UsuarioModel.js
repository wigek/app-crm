import { consultarLocalStorage } from "../helpers/local-storage.js"
export let Usuarios = consultarLocalStorage("usuarios") || []