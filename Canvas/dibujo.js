var d = document.getElementById ("dibujo");
var lienzo = d.getContext ("2d");

DibujarLinea("red", 10, 300, 220,10);
DibujarLinea("blue", 15, 300, 220,10);
DibujarLinea("blue", 20, 300, 220,10);

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
