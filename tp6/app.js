//Variables
let btnTexto = document.querySelector('#botontexto')
let btnColor = document.querySelector('#botonColor')
let btnFondo = document.querySelector('#botonLetra')
let btnLetra = document.querySelector('#botonFondo')
let btnTamaño = document.querySelector('#botonTamaño')
let btnReiniciar = document.querySelector('#botonReiniciar')


let p = document.querySelector('#parrafo')
btnTexto.onclick = function(){
    p.textContent = 'Bienvenido a programación'
}
btnColor.onclick = function (){
    p.style.color = 'white'
}
btnFondo.onclick = function(){
    p.style.backgroundColor = 'green'
}
btnLetra.onclick = function(){
    p.style.fontFamily = 'IMPACT'
}
btnTamaño.onclick = function(){
    p.style.fontSize = '30px'
}
btnReiniciar.onclick = function(){
    p.textContent = 'Bienvenido al TP6'
    p.style.backgroundColor = 'rgb(69, 93, 102)'
    p.style.color = 'black'
    p.style.fontFamily = 'Arial, Helvetica, sans-serif'
    p.style.fontSize = '15px'
}


