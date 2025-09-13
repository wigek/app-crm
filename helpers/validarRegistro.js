/* 
querySelectorAll

*/

let inputs = document.getElementsByClassName("formulario__entrada")
let arregloInputs = [...inputs]
console.log(inputs)
console.log(arregloInputs)

arregloInputs.map((input)=> {
    console.log(input)
})
