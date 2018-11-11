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

// Date
// To create elements and its classes
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


// Item done
var doneItem = document.querySelector('.undone__list-item');
var checkbox = document.querySelector('.item__checkbox-in');
checkbox.addEventListener("change", checkMode);

function checkMode(){
  var checked = checkbox.checked;
  if(checked){
    doneItem.classList.remove ('undone__list-item');
    doneItem.classList.add ('done__list-item');
}
  else {
    doneItem.classList.add('undone__list-item');
    doneItem.classList.remove ('done__list-item');
}
}

// Modal

// Get the modal
var modal = document.querySelector('.modal');
// Get the button that opens the modal
var btn = document.querySelector('.footer__button');
// Get the button element that closes the modal
var add = document.querySelector('.modal__content-button');

var undoneList = document.querySelector('.undone__list');
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
