var texto = document.getElementById ("txcaja");
var boton = document.getElementById ("botoncito");
boton.addEventListener ("click", DibujoPorClic);

var d = document.getElementById ("dibujo");
var lienzo = d.getContext ("2d");

function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    console.log (lienzo);
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo (xinicial,yinicial);
    lienzo.lineTo (xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function DibujoPorClic ()
{

    var lineas = parseInt(texto.value);
    var l = bot;
    var yi, xf, xi, yf;
    var colo = "red";

for (1 = 0; 1 < lineas; 1++)
    {
        yi =10 * l;
        xf =10 * (l + 1);
        xi =10* l;
        yf =10* (l + 1);
     DibujarLinea(colo, 0, yi, xf, 300);
     DibujarLinea(colo, xi, 0, 300, yf);
        console.log ("linea" + 1);
    }

DibujarLinea (colo,1,1,1,299);
DibujarLinea (colo,1,299,299,299);
}
