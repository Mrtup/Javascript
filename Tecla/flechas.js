var teclas = {
UP: 38,
LEFT: 37,
RIGHT: 39,
DOWN: 40 
};
console.log (teclas);

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById ("area_de_dibujo");
var papel = cuadrito.getContext ("2d");
var x =150;
var y =150;

DibujarLinea("red", 149,149,151,151, papel);

function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo (xinicial,yinicial);
    lienzo.lineTo (xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
// FUNCIONES CON swich
{
    switch (evento.keyCode)
    {
    case teclas.UP:
    console.log ("tecla arriba");
    break;
    case teclas.LEFT:
    break;
    case teclas.RIGHT:
    break;
    case teclas.DOWN:
    console.log ("tecla abajo");
    break;
    }
}
