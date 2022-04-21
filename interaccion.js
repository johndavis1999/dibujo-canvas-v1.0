var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

var mouse = {
    UP:1
}

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);


/*document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);*/
document.addEventListener("mousemove", movimientoMouse);

var cuadro = document.getElementById("folio");
var papel = cuadro.getContext("2d");
var x = 5;
var y = 5;
var estadoClick; //Guarda estado del click
var xmov, ymov; //almacena coordenafas en x - y
var color = "black";
var grosorLapiz = 2;

dibujarLinea("red", 1,1,1,768, papel);
dibujarLinea("red", 1,1,1024,1, papel);
dibujarLinea("red", 1024,1,1024,768, papel);
dibujarLinea("red", 1,768,1024,768, papel);

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var color = "brown";
    var movimiento = 1;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(color, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            console.log("flecha hacia arriba");
        break;
        case teclas.DOWN:
            dibujarLinea(color, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            console.log("flecha hacia abajo");
        break;
        case teclas.LEFT:
            dibujarLinea(color, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            console.log("flecha hacia derecha");
        break;
        case teclas.RIGHT:
            dibujarLinea(color, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            console.log("flecha hacia izquierda");
        break;
        default:
            console.log("otra tecla");
        break;
    }
}
/*
function presionarMouse(evento)
{
    estadoClick = 1; //El click presionado
  xm = evento.layerX;
  ym = evento.layerY;
}

function soltarMouse(evento)
{
    estadoClick = 0; //El click suelto
    xm = evento.layerX;
    ym = evento.layerY;
}
*/
function movimientoMouse(evento)
{
    (evento.buttons == 1)? //Solo dibuja si el click esta presionado
  
  dibujarLinea(color, xm, ym, evento.layerX, evento.layerY, papel) : 0;
  xm=evento.layerX;
	ym=evento.layerY;
}
