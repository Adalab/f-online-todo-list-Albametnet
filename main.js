'use strict';

var headerDateNumber = document.querySelector ('.header__date-number');
var headerDateRemain = document.querySelector ('.header__date-remain');

var months = new Array 
("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var weekDays = new Array
("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var currentDate = new Date ();
var weekDay = weekDays[currentDate.getDay()]
var monthDay = currentDate.getDate()
var remainDate = (months[currentDate.getMonth()] + ", " + currentDate.getFullYear());

// to create elements and its classes
var number = document.createElement('p');
headerDateNumber.appendChild(number);
number.classList.add ('header__date-today');

var day = document.createElement('p');
day.classList.add ('header__date-day')
headerDateRemain.appendChild(day);

var monthAndYear = document.createElement('p');
monthAndYear.classList.add ('header__date-month');
headerDateRemain.appendChild(monthAndYear);

// to write data on new elements
day.innerHTML = weekDay;
number.innerHTML = monthDay;
monthAndYear.innerHTML = remainDate;


// logica para pasar un item a la lista de hehcos

// var field = document.querySelector ('.item__checkbox-in');
// var  undone= document.querySelector ('.undone__list-item');


// function taskDone (){
// if(field.checked == true){
//   undone.classList.remove('undone__list-item');
//   undone.classList.add ('done__list-item');
// }
// }

field.addEventListener ('click', taskDone);