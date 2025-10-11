import { consultarLocalStorage } from "../helpers/local-storage";


export let Usuarios=consultarLocalStorage("usuarios") || []; //si no hay usuarios en el local storage, entonces inicializamos el array como un array vacío