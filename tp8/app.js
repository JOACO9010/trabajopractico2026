let texto = document.querySelector("#Ej1")
let botonEj1 = document.querySelector("#btn1")
let input1 = document.querySelector("#input1")

botonEj1.onclick = function() {
    if (input1.value >= 18)  {
        texto.textContent = "Eres mayor de edad"
    }
    else {
        texto.textContent = "Eres menor de edad"
    }
}

let Ej2 = document.querySelector('#Ej2')
let botonEj2 = document.querySelector('#btn2')
let input2 = document.querySelector("#input2")

botonEj2.onclick = function(){
    if (input2.value == 'Julian'){
        Ej2.textContent = "Bienvenido Julian, ¿como estas?"
    } else {
        Ej2.textContent = "Bienvenido usuario"
    }
}

let Ej3 = document.querySelector('#Ej3')
let botonEj3 = document.querySelector('#btn3')
let input3 = document.querySelector('#input3')

botonEj3.onclick = function(){
    if (input3.value == 'Jorge'|| input3.value == 'Roberto'){
        Ej3.textContent = 'Bienvenido ' + input3.value + ', ¿como estas?' 
    } else {
        Ej3.textContent = 'Bienvenido ' + input3.value
    }
}

let Ej4 = document.querySelector('#Ej4')
let botonEj4 = document.querySelector('#btn4')
let input4 = document.querySelector('#input4')

botonEj4.onclick = function(){
    if (input4.value > 0) {
        Ej4.textContent = 'el numero es positivo'
    } else if (input4.value < 0) {
        Ej4.textContent = 'el numero es negativo'
    } else {
        Ej4.textContent = 'el numero es cero'
    }
}

let Ej5 = document.querySelector('#Ej5')
let botonEj5 = document.querySelector('#btn5')
let input5 = document.querySelector('#input5')

botonEj5.onclick = function(){
    if (input5.value >= 6 && input5.value <= 11) {
        Ej5.textContent = 'niño'
    } else if (input5.value>= 12 && input5.value <= 18) {
        Ej5.textContent = 'adolescente'
    } else if (input5.value>= 19 && input5.value <= 26) {
        Ej5.textContent = 'joven'
    } else if (input5.value>= 27 && input5.value <= 59) {
        Ej5.textContent = 'adulto'
    } else if (input5.value>= 60) {
        Ej5.textContent = 'anciano'
    } else {
        Ej5.textContent = 'edad no valida'
    }
}
let Ej6 = document.querySelector("#Ej6")
let botonEj6 = document.querySelector('#btn6')
let input6 = document.querySelector('#input6')

botonEj6.onclick = function(){
    if (input6.value == 'lunes' || input6.value == 'martes' || input6.value == 'miercoles' || input6.value == 'jueves' || input6.value == 'viernes') {
        Ej6.textContent = 'es un dia laborable'
    } else if (input6.value == 'sabado' || input6.value == 'domingo') {
        Ej6.textContent = 'es fin de semana'
    }
}

let Ej7 = document.querySelector('#Ej7')
let botonEj7 = document.querySelector('#btn7')
let input7 = document.querySelector('#input7')

botonEj7.onclick = function(){
    if (input7.value == 'secreto') {
        Ej7.textContent = 'acceso concedido'
    } else {
        Ej7.textContent = 'acceso denegado'
    }
}



