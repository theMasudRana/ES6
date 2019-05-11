/* ------------------
Template Literals
---------------------*/

/* 
let word1 = 'Masud';
let word2 = 'Rana';

// fullName = word1 + ' ' + word2;
fullName = `${word1} ${word2}`;
console.log(fullName);
*/

/* ---------------------------
Destructureing object
------------------------------ */

/* const personalInformation = {
    firstName: 'Masud',
    lastName: 'Rana',
    city: 'Dhaka',
    zipCode: 1216
}; */

/* const {
    firstName,
    lastName
} = personalInformation; */
/* const {
    firstName: fn,
    lastName: ln
} = personalInformation; */

// console.log(`${firstName} ${lastName}`);
// console.log(`${fn} ${ln}`);

/* ---------------------------
Destructureing array
------------------------------ */

/* let [firstName, middleName, lastName] = ['Masud', 'Rana', 'Dhaka'];
lastName = 'Something else';
console.log(lastName); */

/* ---------------------------
Object Literal
------------------------------ */

/* function addressMaker(city, state) {
    // Old way of doing this type of operation    
    // const newAddress = { newCity: city, newState: state }; 
    

    // New way of doing this in es6
    const newAddress = {
        city,
        state   
    };
    console.log(newAddress);

}
addressMaker('Pabna', 'Ishwardi'); */

/* function addressMaker(address) {
    const {
        city,
        state
    } = address;

    const newAddress = {
        city,
        state,
        country: 'Bangladesh'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}
addressMaker({
    city: 'Pabna',
    state: 'Ishwardi',
    country: 'Bangladesh'
}); */

/* ---------------------------
For of Loop
------------------------------ */

/* let incomes = [30000, 40000, 50000];
let total = 0;

for( const incom of incomes ) {
    // console.log(incom);
    total += incom;
    console.log(total);
    
}

let fullName = 'MasudRana';
for(const char of fullName) {
    console.log(char);
} */

/* ---------------------------
Spread Operator
------------------------------ */
/* let exampleArray = [1,2,3,4];
let exampleArray2 = [...exampleArray];
exampleArray2.push('Masud Rana');
console.log(exampleArray2);

// Spread operator in function
function myFunc(...nums) {
    console.log(nums);
}
myFunc(5,6,9); */

/* ---------------------------
Arrow Functions
------------------------------ */
// syntex
// () => {}
// Spread operator in function
function add(...nums) {
    let total = nums.reduce((x, y) => x + y);
    console.log(total);
}
add(5, 6, 9);

const materials = [
    'Bricks',
    'Water',
    'Fire',
    'Gas'
];
// Standard example
const mat1 = materials.map(function (material) {
    return material.length;
});

console.log(mat1);

// Arrow function extended
const mat2 = materials.map((material) => {
    return material.length;
});
console.log(mat2);

// Arrow function shorters
const mat3 = materials.map(material => material.length);
console.log(mat3); 