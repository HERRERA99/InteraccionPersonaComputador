//columna respecto de la cual se esta ordenando la tabla
var columnaOrden = -1;

//forma en la que esta ordenada la tabla
var ordenAscendente = false;

/**
 * Ordena las filas de una tabla respecto del valor de una
 * columna, de forma ascendente o descendente, en funcion de
 * como esta.
 * @param {*} columna la columna respecto de la que se ordena.
 */
function ordenarTabla(columna) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tablaDatos");

  if (columna == columnaOrden && ordenAscendente) {
    ordenAscendente = false;
    cambiarDireccionTriangulo(columna, "descendente");
  } else {
    ordenAscendente = true;
    columnaOrden = columna;
    cambiarDireccionTriangulo(columna, "ascendente");
  }

  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[columna].innerHTML;
      y = rows[i + 1].getElementsByTagName("td")[columna].innerHTML;

      if ((ordenAscendente && x.localeCompare(y) > 0) ||
        (!ordenAscendente && x.localeCompare(y) < 0)) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function obtenerIdTriangulo(columna) {
  // Devuelve el ID del triángulo correspondiente a la columna
  var idsTriangulos = ["trianguloCiudad", "trianguloDescripcion", "trianguloFecha", "trianguloHoras", "trianguloCoste"];
  return idsTriangulos[columna];
}

function resetearDireccionesTriangulo() {
  // Resetea la dirección de todos los triángulos a predeterminado
  var idsTriangulos = ["trianguloCiudad", "trianguloDescripcion", "trianguloFecha", "trianguloHoras", "trianguloCoste"];
  for (var i = 0; i < idsTriangulos.length; i++) {
    var imagenTriangulo = document.getElementById(idsTriangulos[i]);
    imagenTriangulo.style.visibility = "hidden";
  }
}

function cambiarDireccionTriangulo(columna, direccion) {
  // Resetea la dirección de todos los triángulos a predeterminado
  resetearDireccionesTriangulo();

  // Obtiene el elemento de la imagen del triángulo correspondiente a la columna
  var imagenTriangulo = document.getElementById(obtenerIdTriangulo(columna));

  // Aplica una rotación según la dirección proporcionada
  if (direccion === "ascendente") {
    imagenTriangulo.style.transform = "rotate(180deg)";
  } else if (direccion === "descendente") {
    imagenTriangulo.style.transform = "rotate(0deg)";
  }

  // Hace visible solo la imagen del triángulo que estás ordenando
  imagenTriangulo.style.visibility = "visible";
}


function aplicarEstilos() {
  var colorBordes = document.getElementById('InputColorBordes').value;
  var colorFondo = document.getElementById('InputColorFondo').value;
  var tamanhoLetra = document.getElementById('tamanhoLetra').value;
  var colorLetra = document.getElementById('InputColorLetra').value;
  var colorCabeceraTabla = document.getElementById('InputColorCabeceraTabla').value;

  var colorCabecera = document.getElementById('InputColorcabecera').value;
  var colorFondoPagina = document.getElementById('InputColorFondoPagina').value;
  var colorContenedorOpciones = document.getElementById('InputColorContenedorOpciones').value;
  var colorFondoEsconder = document.getElementById('InputColorFondoEsconder').value;
  var colorBotonAplicar = document.getElementById('InputColorBotonAplicarEstilos').value;

  // Establecer estilos para la tabla
  document.getElementById('tablaDatos').style.borderColor = colorBordes;
  document.getElementById('tablaDatos').style.backgroundColor = colorFondo;
  document.getElementById('tablaDatos').style.fontSize = tamanhoLetra + 'px';
  document.getElementById('tablaDatos').style.color = colorLetra;

  // Establecer estilos para la cabecera de la tabla
  document.getElementById('cabeceraPagina').style.backgroundColor = colorCabecera;

  // Establecer estilos para el fondo de la página
  document.body.style.backgroundColor = colorFondoPagina;

  // Establecer estilos para el contenedor de opciones
  document.getElementById('contenedorOpciones').style.backgroundColor = colorContenedorOpciones;
  document.getElementById('contenedorEstilos').style.backgroundColor = colorContenedorOpciones;

  var contenedorColumnas = document.getElementById('contenedorOcultarColumnas');

  // Acceder a todos los divs dentro del contenedor
  var divsEnContenedor = contenedorColumnas.getElementsByTagName('div');

  // Iterar sobre cada div y cambiar el fondo
  for (var i = 0; i < divsEnContenedor.length; i++) {
    divsEnContenedor[i].style.backgroundColor = colorFondoEsconder; // Reemplaza 'tu_color_aqui' con el color deseado
  }

  document.getElementById('contenedorOcultarColumnas').style.backgroundColor = colorFondoEsconder;

  document.getElementById('botonAplicar').style.backgroundColor = colorBotonAplicar;

  var contenedorTitulos = document.getElementById('trTabla');

  // Acceder a todos los ths dentro del contenedor
  var thsEnContenedor = contenedorTitulos.getElementsByTagName('th');

  // Iterar sobre cada th y cambiar el fondo
  for (var i = 0; i < thsEnContenedor.length; i++) {
    thsEnContenedor[i].style.backgroundColor = colorCabeceraTabla; // Reemplaza 'tu_color_aqui' con el color deseado
  }

  document.getElementById('cabeceraTabla').style.backgroundColor = colorCabeceraTabla;

  changeFont();
}

function changeFont() {
  var fontSelector = document.getElementById("selectorDeFuentes");
  var selectedFont = fontSelector.options[fontSelector.selectedIndex].value;

  var table = document.getElementById("tablaDatos");
  table.style.fontFamily = selectedFont;
}


