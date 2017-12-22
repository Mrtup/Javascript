var teclas = {
UP: 38,
LEFT: 37,
RIGHT: 39,
DOWN: 40 
};
console.log (teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
// FUNCIONES CON  if
{
    if (evento.keyCode == teclas.UP)
        {
            console.log ("tecla arriba");
        }
    if (evento.keyCode == teclas.DOWN)
        {
            console.log ("tecla abajo");
        }
    if (evento.keyCode == teclas.LEFT)
        {
            console.log ("tecla izquierda");
        }
    if (evento.keyCode == teclas.RIGHT)
    {
        console.log ("tecla derecha");
    }
}