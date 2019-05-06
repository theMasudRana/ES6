/* var n = -12;

if(n > 0) {
    var result = "This number " +n+ " is positive";
} else {
    var result = "This number " +n+ " is negative";
}
console.log (result); */

// Even odd

/* var n = 0;
var result;
var remainder = n % 2;

if (0 == n) {
    result = "This is nutral number";
} else if (0 == remainder) {
    result = 'This number is even';
} else {
    result = 'This number is odd';
}
console.log(result); */



// Movie reating
/* var movieReating = 'pg';
var age = 18;
var result;
if(('pg' == movieReating && age >= 13) || ('r' == movieReating && age >= 18) || ('g' == movieReating)) {
    result = "You can watch this movie";
} else {
    result = "You can not watch this movie";
}
console.log(result); */
// Ternary operator
/* var number  = 9;
var result;
var remainder = number % 2;

result = (0 == remainder) ? 'Even' : 'Odd';
console.log('This number is',result);

var n = 10;
if(10 > 15) {
    console.log('Huge');
} else {
    console.log('Fuck');
} */

// Loop

/* var n = 0;
while(n <= 10) {
    console.log(n);
    n += 4;
} */


/* var i = 0;
do {
    i++;
    console.log(i);
    if(10 == i) {
        break;
    }
} while (true ); */

/* for (i = 0; i <= 10; i++) {
    if(i%2 != 0) {
        console.log(i);
    }
} */

/* var i, j;
for (i = 0, j = 10; i < 10; i++, j--) {
    console.log(i, j);
} */



/* var n = 5;
var factorial = 1;

for (i = 1; i < 10; i++) {
    factorial *= i;
    console.log(factorial);
} */

/* var series = '';
var n;

for (i = 1; i < 10; i++) {
    n = i * 2;
    series = series + n + ' ';
}
console.log(series);

var series = "1 ";
var n = 0;
for (var i = 1; i < 10; i++) {
    n += 3;
    series = series + n + ' ';
}
console.log(series);

var series = "";
var n = 0;
for (var i = 1; i < 10; i++) {
    n = i * i -1;
    series = series + n + ' ';
}
console.log(series); */

/* var brothers = ['Hasan', 'Sahan', 'Mamun', 'Masud'];

var lastElement = brothers.length - 1;
console.log(brothers[lastElement]); */

// var fruts = ['Mango', 'Apple', 'Orange'];
// fruts.push('Jackfruts');
// fruts.unshift('Litchi');
// console.log(fruts);

/* var males = ['Masud', 'Mamun', 'Sahan', 'rupa'];
var females = ['Halima', 'Anika'];

var lastPersone = males.pop();
females.push(lastPersone);

console.log(males, females); */

/* var list1 = [
    'a',
    'b',
    'c'
];

var list2 = [
    'd',
    'e',
    'f'
];

var list = list1.concat(list2);

console.log(list); */


