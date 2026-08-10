let edad = 20
let texto = document.querySelector("#texto")
let btn1 = document.querySelector("#btn1")

btn1.onclick = function() {
    if (edad >= 18)  {
        texto.textContent = "Eres mayor de edad"
    }
    else {
        texto.textContent = "Eres menor de edad"
    }
}
let nombreUsuario = "juan"
let nombre = document.querySelector('#nombre')
let btn2 = document.querySelector('#btn2')

btn2.onclick = function() {
    nombre.textContent = "Bienvenido juan"
}
