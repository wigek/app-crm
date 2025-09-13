//TODO METODO INMUTABLE DE RECORRIDO RECIBE COMO ARGUMENTO UNA FUNCIÓN ANÓNIMA. LA FUNCIÓN ANONIMA RECIBE COMO PARAMETRO UNA VARIABLE DE ITERACIÓN.

let inputs=document.querySelectorAll("form div input");
let arregloInputs=[...inputs]; //acá convertimos el htmlcollection o nodelist en un arreglo 
console.log(inputs);
console.log(arregloInputs);


arregloInputs.map((input)=>{
    console.log(input);
})

