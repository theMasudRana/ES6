/* const headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.innerText = 'Awesome';

const listItems = document.getElementsByClassName('list-group-item');
console.log(listItems);

listItems[1].textContent = 'Hello 2 bewtiful';
// listItems[1].style.fontWeight = 'bold';

for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = '#f4f4f4';
}

const header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 2px red';



const input = document.querySelector('input');
input.value = 'Awesome';

  */

/* const listOdd = document.querySelectorAll('li:nth-child(odd)');

for ( i = 0; i < listOdd.length; i++) {
    listOdd[i].style.backgroundColor = '#f0f0f0';
} */

/* const listParent = document.querySelector('#items');
// console.log(listParent.parentNode);
listParent.lastElementChild.style.backgroundColor = 'red';
listParent.previousElementSibling.textContent = "WOW!!";


const newDiv = document.createElement('div');
newDiv.className = 'text-class';
newDiv.textContent = 'Hello World';
newDiv.setAttribute('title', 'This is Title');
console.log(newDiv);

const cotainer = document.querySelector('.container');
const before = document.querySelector('.container h1');

cotainer.insertBefore(newDiv, before); */


/* const removeButton = document.getElementById('remove-button');

removeButton.addEventListener('click', removeFunc);

function removeFunc(e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.clientX);
  const output = document.getElementById('output');
  output.innerHTML = '<h2>' + e.target.id + '</h2>';
} */


/* const button = document.getElementById('remove-button');
button.addEventListener('click', eventType);
button.addEventListener('dblclick', eventType);
button.addEventListener('mousedown', eventType);
button.addEventListener('mouseup', eventType);
button.addEventListener('mouseover', eventType);
button.addEventListener('mouseenter', eventType);
button.addEventListener('mouseleave', eventType);
button.addEventListener('mousemove', eventType);


function eventType(e) {
  console.log('Event Type ' + e.type);
  
} */

/* const textInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form'); */

/* textInput.addEventListener('keydown', runEven);
textInput.addEventListener('focus', runEven);
textInput.addEventListener('blur', runEven); */
/* const tt = document.querySelector('.custom-select');
tt.addEventListener('change', runEven);

function runEven(e) {
  console.log(e.type);
  console.log(e.target.value);
} */

var str = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(str);
