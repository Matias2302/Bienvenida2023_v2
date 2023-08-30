/*=====NAVBAR COLOR=====*/

$(function () {
	$(document).scroll(function () {
	  var $nav = $("header");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });

/*======================*/


/*function MostrarContenido(n){
    var contenido = document.getElementById("info").children;

    for (var i = 0; i < contenido.length; i++){
        contenido[i].style.display = (i === n - 1) ? "block" : "none";
    }
}*/

/*
var contenidoActual = 0;
function MostrarContenido(n) {
  var content = document.getElementById("info").children;
  var buttons = document.getElementsByClassName("media-element");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
  buttons[n-1].classList.add("selected");
  content[contenidoActual].style.display = "none";
  content[n - 1].style.display = "block";
  contenidoActual = n - 1;
}*/

/*
var contenidoActual = 0;
function MostrarContenido(n) {
  var content = document.getElementById("info").children;
  var buttons = document.getElementsByClassName("media-element");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
  buttons[n - 1].classList.add("selected");
  content[n - 1].style.display = "block";
  content[n - 1].classList.add("fade");
  
  
  setTimeout(function(){
    content[contenidoActual].classList.remove("fade");
    content[contenidoActual].style.display = "none";
    contenidoActual = n - 1;
  },1000);
  
}
*/

/*====Cambio url=====*/
/*
const items = document.querySelectorAll(".media-element");

items.forEach(function(item) {
  item.addEventListener("click", function() {
    const url = this.getAttribute("data-url");
    window.location.href = url;
  });
});
*/

/*===Contenido dinámico con trigger====*/
var contenidoActual = 0;

function MostrarContenido(n) {
  var content = document.getElementById("info").children;
  var buttons = document.getElementsByClassName("media-element");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
  buttons[n-1].classList.add("selected");
  content[contenidoActual].classList.remove("fade-in");
  content[contenidoActual].style.display = "none";
  content[n - 1].style.display = "block";
  content[n - 1].classList.add("fade-in");
  setTimeout(function(){
    content[contenidoActual].style.opacity = 0;
    content[n - 1].style.opacity = 1;
    contenidoActual = n - 1;
  },200);
}

window.onload = function() {
    MostrarContenido(1);
  };

///acordeón
let acordeones = Array.from(document.querySelectorAll(".acordeon"));

acordeones.map(function (acordeon) {
  const titulo = acordeon.querySelector(".acordeon__titulo");
  const contenido = acordeon.querySelector(".acordeon__contenido");
  titulo.addEventListener("click", function () {
    acordeon.className =
      acordeon.className === "acordeon"
        ? "acordeon acordeon--activo"
        : "acordeon";
    if (acordeon.className === "acordeon acordeon--activo") {
      contenido.style.height = contenido.scrollHeight + "px";
    } else {
        requestAnimationFrame(function(){
            contenido.style.height = "0px";
        });
      
    }
  });
});
/////////////////////////////////////////////////////////////////
//////////////////////BLOQUES HORARIOS///////////////////////////
/////////////////////////////////////////////////////////////////

// URL de la hoja de cálculo de Google Sheets
const sheetURL = 'https://docs.google.com/spreadsheets/d/1jCM9f0qXtOkmjVmbZHsgkvPAJcj2SylIVLpBqmyYkHo/edit#gid=0';

// Clave de API de Google Sheets
const apiKey = 'AIzaSyCkd6fKfFJoF9iRFG23Wmj-oMOCkDjUpFE';

// ID de la hoja de cálculo y rango de celdas inicial que quieres leer (puedes obtenerlos de la URL de la hoja de cálculo)
const sheetID = '1jCM9f0qXtOkmjVmbZHsgkvPAJcj2SylIVLpBqmyYkHo';
var range = 'A2:G4'; // Rango inicial

// Construir la URL de la API inicial con el rango de celdas inicial
var apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;

// Función para mostrar los datos en una tabla con CSS Grid MATUTINO
function displayDataInGrid(data, tableId) {
    const gridContainer = document.getElementById(tableId);
// Generar las celdas con los datos y agregarlas a la tabla
  // Obtener la cantidad máxima de columnas en todas las filas para asegurarnos de que todas las filas tengan la misma cantidad de columnas
  const maxColumns = Math.max(...data.values.map(row => row.length));

  // Rellenar las celdas faltantes con valores en blanco
  const filledData = data.values.map(row => [...row, ...Array(maxColumns - row.length).fill("")]);

  // Generar las celdas con los datos y agregarlas a la tabla
  filledData.forEach((row, rowIndex) => {
    row.forEach((cellData, columnIndex) => {
      const gridItem = document.createElement('span');

      // Dejar el contenido del span vacío si la celda está vacía
      gridItem.textContent = cellData;

      gridContainer.appendChild(gridItem);

      // Agregar estilos a todas las celdas, incluidas las celdas vacías
      gridItem.classList.add('grid-item');

      // Identificar los cabezales y laterales y agregarles los estilos
      if (rowIndex === 0 || columnIndex === 0) {
        gridItem.classList.add('table-head');
      }
    });
  });
  } 
//fin funcion displayDataInGrid
//////////////////////////////////////////////////
function displayDataInGrid2(data, tableId) {
  const gridContainer = document.getElementById(tableId);
// Generar las celdas con los datos y agregarlas a la tabla
// Obtener la cantidad máxima de columnas en todas las filas para asegurarnos de que todas las filas tengan la misma cantidad de columnas
const maxColumns = Math.max(...data.values.map(row => row.length));

// Rellenar las celdas faltantes con valores en blanco
const filledData = data.values.map(row => [...row, ...Array(maxColumns - row.length).fill("")]);

// Generar las celdas con los datos y agregarlas a la tabla
filledData.forEach((row, rowIndex) => {
  row.forEach((cellData, columnIndex) => {
    const gridItem = document.createElement('span');

    // Dejar el contenido del span vacío si la celda está vacía
    gridItem.textContent = cellData;

    gridContainer.appendChild(gridItem);

    // Agregar estilos a todas las celdas, incluidas las celdas vacías
    gridItem.classList.add('grid-item');

    // Identificar los cabezales y laterales y agregarles los estilos
    if (rowIndex === 0 || columnIndex === 0) {
      gridItem.classList.add('table-head-2');
    }
  });
});
} 
function displayDataInGrid3(data, tableId) {
  const gridContainer = document.getElementById(tableId);
// Generar las celdas con los datos y agregarlas a la tabla
// Obtener la cantidad máxima de columnas en todas las filas para asegurarnos de que todas las filas tengan la misma cantidad de columnas
const maxColumns = Math.max(...data.values.map(row => row.length));

// Rellenar las celdas faltantes con valores en blanco
const filledData = data.values.map(row => [...row, ...Array(maxColumns - row.length).fill("")]);

// Generar las celdas con los datos y agregarlas a la tabla
filledData.forEach((row, rowIndex) => {
  row.forEach((cellData, columnIndex) => {
    const gridItem = document.createElement('span');

    // Dejar el contenido del span vacío si la celda está vacía
    gridItem.textContent = cellData;

    gridContainer.appendChild(gridItem);

    // Agregar estilos a todas las celdas, incluidas las celdas vacías
    gridItem.classList.add('grid-item');

    // Identificar los cabezales y laterales y agregarles los estilos
    if (rowIndex === 0 || columnIndex === 0) {
      gridItem.classList.add('table-head-3');
    }
  });
});
} 
//fin funcion displayDataInGrid
// Función para obtener los datos de la hoja de cálculo y mostrarlos en la tabla con CSS Grid
function fetchDataAndDisplay(tableId) {
    // Construir la URL de la API con el rango de celdas actual
    var apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;
  
    // Obtener los datos usando la apiUrl actualizada
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayDataInGrid(data, tableId))
        .catch(error => console.error('Error al obtener los datos:', error));
}
//VESPERTINO
// Función para obtener los datos de la hoja de cálculo y mostrarlos en la tabla con CSS Grid VESPERTINO
function fetchDataAndDisplay2(tableId) {
  // Construir la URL de la API con el rango de celdas actual
  var apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;

  // Obtener los datos usando la apiUrl actualizada
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayDataInGrid2(data, tableId))
      .catch(error => console.error('Error al obtener los datos:', error));
}
//NOCTURNO
// Función para obtener los datos de la hoja de cálculo y mostrarlos en la tabla con CSS Grid VESPERTINO
function fetchDataAndDisplay3(tableId) {
  // Construir la URL de la API con el rango de celdas actual
  var apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;

  // Obtener los datos usando la apiUrl actualizada
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayDataInGrid3(data, tableId))
      .catch(error => console.error('Error al obtener los datos:', error));
}


/////////////MATUTINO 1//////////////////////
const tableId1 = 'data-grid-1';
fetchDataAndDisplay(tableId1);
////////////////////////////////////////////////////////
/////////////MATUTINO 2//////////////////////
range = 'A9:G11'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId2 = 'data-grid-2';
fetchDataAndDisplay(tableId2); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
/////////////MATUTINO 3//////////////////////
range = 'A16:G20'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId3 = 'data-grid-3';
fetchDataAndDisplay(tableId3); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
/////////////MATUTINO 4//////////////////////
range = 'A44:G46'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId4 = 'data-grid-4';
fetchDataAndDisplay(tableId4); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
/////////////MATUTINO 5//////////////////////
range = 'A51:G53'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId5 = 'data-grid-5';
fetchDataAndDisplay(tableId5); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
/////////////MATUTINO 6//////////////////////
range = 'A58:G62'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId6 = 'data-grid-6';
fetchDataAndDisplay(tableId6); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
/////////////MATUTINO 7//////////////////////
range = 'A65:G67'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId7 = 'data-grid-7';
fetchDataAndDisplay(tableId7); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
/////////////MATUTINO 8//////////////////////
range = 'A72:G74'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId7_2 = 'data-grid-7-2';
fetchDataAndDisplay(tableId7_2); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
/////////////MATUTINO 9//////////////////////
range = 'A79:G81'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId7_3 = 'data-grid-7-3';
fetchDataAndDisplay(tableId7_3); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
/////////////MATUTINO 10//////////////////////
range = 'A86:G87'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId7_4 = 'data-grid-7-4';
fetchDataAndDisplay(tableId7_4); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////


////////////////////VESPERTINO 1///////////////////////////////////////
range = 'A23:G24'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId8 = 'data-grid-8';
fetchDataAndDisplay2(tableId8); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
////////////////////VESPERTINO 2///////////////////////////////////////
range = 'A93:G94'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId8_1 = 'data-grid-8-1';
fetchDataAndDisplay2(tableId8_1); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////


////////////////////NOCTURNO 1///////////////////////////////////////
range = 'A30:G32'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId9 = 'data-grid-9';
fetchDataAndDisplay3(tableId9); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
////////////////////NOCTURNO 2///////////////////////////////////////
range = 'A37:G40'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId10 = 'data-grid-10';
fetchDataAndDisplay3(tableId10); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
////////////////////NOCTURNO 3///////////////////////////////////////
range = 'A100:G102'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId11 = 'data-grid-11';
fetchDataAndDisplay3(tableId11); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
////////////////////NOCTURNO 4///////////////////////////////////////
range = 'A107:G109'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId12 = 'data-grid-12';
fetchDataAndDisplay3(tableId12); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
////////////////////NOCTURNO 5///////////////////////////////////////
range = 'A114:G116'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId13 = 'data-grid-13';
fetchDataAndDisplay3(tableId13); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
////////////////////NOCTURNO 6///////////////////////////////////////
range = 'A121:G123'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId14 = 'data-grid-14';
fetchDataAndDisplay3(tableId14); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
////////////////////NOCTURNO 7///////////////////////////////////////
range = 'A128:G129'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId15 = 'data-grid-15';
fetchDataAndDisplay3(tableId15); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
////////////////////NOCTURNO 8///////////////////////////////////////
range = 'A135:G137'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId16 = 'data-grid-16';
fetchDataAndDisplay3(tableId16); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
////////////////////NOCTURNO 9///////////////////////////////////////
range = 'A142:G144'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId16_1 = 'data-grid-16-1';
fetchDataAndDisplay3(tableId16_1); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////
////////////////////NOCTURNO 9///////////////////////////////////////
range = 'A149:G151'; // Por ejemplo, para cambiar el rango a Hoja1!A10:F15
// Y luego actualizas la apiUrl con el nuevo rango antes de llamar a fetchDataAndDisplay() para cada tabla:
const tableId16_2 = 'data-grid-16-2';
fetchDataAndDisplay3(tableId16_2); // Muestra los datos en la tabla con ID data-grid-1
//////////////////////////////////////////////////////////////