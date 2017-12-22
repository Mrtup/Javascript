var teclas = {
UP: 38,
LEFT: 37,
RIGHT: 39,
DOWN: 40 
};
console.log (teclas);

document.addEventListener("keyup", dibujarTeclado);

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
