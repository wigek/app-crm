export let expresiones ={
    texto:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    documento:/^\d{7,14}$/,
    telefono:/^\d{7,14}$/, // 7 a 14 numeros. 
    contraseña:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/ // 8 a 16 digitos, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.
}