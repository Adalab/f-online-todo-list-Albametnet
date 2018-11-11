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

// field.addEventListener ('click', taskDone);

// modal
// Get the modal
var modal = document.querySelector('.modal');

var undoneList = document.querySelector('.undone__list');
// Get the button that opens the modal
var btn = document.querySelector('.footer__button');

// Get the button element that closes the modal
var add = document.querySelector('.modal__content-button');

var myTask = document.querySelector('.modal__content-in');



function showModal() {
modal.classList.remove ('modal');
modal.classList.add ('modal__opened');
}


function addTask() {
// To create li
var undoneItem = document.createElement('li');
undoneItem.classList.add ('undone__list-item')
undoneList.appendChild(undoneItem);
// To create input
var itemCheckbox = document.createElement('input');
itemCheckbox.setAttribute("type", "checkbox");
itemCheckbox.classList.add ('item__checkbox-in');
undoneItem.appendChild(itemCheckbox);
// To create label
var itemLabel = document.createElement('label');
itemLabel.classList.add ('item__checkbox-label');
undoneItem.appendChild(itemLabel);
// To create span 
var itemSpan = document.createElement('span');
itemSpan.classList.add ('check');
itemLabel.appendChild(itemSpan);
// To write input on item label
itemLabel.innerHTML = (myTask.value);
// To close modal window
modal.classList.remove ('modal__opened');
modal.classList.add ('modal');
}

function closeModal () {
modal.classList.remove ('modal__opened');
modal.classList.add ('modal');
}

add.addEventListener ('click', addTask);
btn.addEventListener ('click', showModal);

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }