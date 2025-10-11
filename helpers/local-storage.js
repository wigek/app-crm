export function guardarLocalStorage(llave, valor ){
    localStorage.setItem(llave, JSON.stringify(valor)); //el setitem es una fiunción del localStorage que permite almacernar contenido dentro del navegador. Está función recibe siempre dos argumentos, el primero es la llave y el segundo es el valor que se va a almacenar
}

export function consultarLocalStorage(llave){
    return JSON.parse(localStorage.getItem(llave));
}

export function eliminarLocalStorage(llave){
    localStorage.removeItem(llave);
}