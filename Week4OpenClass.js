// Convert the following function myFunction into an arrow function. Refer to the new function as fancyAlgorithm.
// function myFunction(num1, num2, num3) {
//     let value = 0
//     for(let i = 0; i < num3; i++){
//         value = (value + num2) * num1;
//     }
//     return value / (num1 * (num3 * 10));
// }

const fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for(let i = 0; i < num3; i++){
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10));
}

// Convert the following function addTwoInputs into an arrow function. Refer to the new function as returnSum.
// function addTwoInputs(a,b) { return a+b; }

const returnSum = (a, b) => {
    return a + b;
}
// Faster way to write - let returnSum = (a,b) => a+b;


// Convert the following function myFunction into an arrow function. Refer to the new function as monthlyPayment.

// function myFunction(yearlyPayment){
//     let monthly = yearlyPayment / 12;
//     return monthly.toFixed(2);
// }

const monthlyPayment = yearlyPayment => {
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
}


// Convert the following function myFunction into an arrow function. Refer to the new function as revert.
// function myFunction(value){ return !value; }

const revert = value => {
    return !value;
}
// easier way to write > let revert = (value) => !value;


// Convert the following function myFunction into an arrow function. Refer to the new function as pythagoras.
// function myFunction(num1, num2) { return Math.sqrt((num1*num2)+(num2*num2)); }

var a = 4 
var b = 7

const pythagoras = (num1, num2) => {
    return Math.sqrt((num1 * num2) + (num2 * num2));
};

console.log(pythagoras(a, b));

// let pythagoras = (num1, num2) => Math.sqrt((num1*num2)+(num2*num2));

// Convert the following function myFunction into an arrow function. Refer to the new function as returnSquareRoot.
// function myFunction(num) { return Math.sqrt(num); }

const returnSquareRoot = num => Math.sqrt(num);

// Convert the following function myFunction into an arrow function. Refer to the new function as xor.

// function myFunction(num1, num2){
//     return num1 ^ num2;
// }

const xor = (num1, num2) => num1 ^ num2;

// Convert the following function myFunction into an arrow function. Refer to the new function as returnNumber.
// function myFunction(num) { return `Your number is ${num}` ; }

const returnNumber = num => `Your number is ${num}`;