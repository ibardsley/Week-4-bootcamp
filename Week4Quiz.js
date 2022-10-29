const createFullName = (firstName, lastName) => firstName + " " + lastName;


const doubleNumber = number => number * 2;



const getEvenNumbers = array => {

let evenNumbers = [];

for(let i of array){

if(i % 2 === 0) {

evenNumbers.push(i);

 }

}

return evenNumbers;

}

// The product owner on your development team believes they've seen a pattern as to which customers purchase the most socks. 
// To verify, you've been asked to write a function that processes an array of customer objects and return a new array that 
// contains only customers that match ANY of the following criteria:

// name starts with a 'C' (upper or lowercase)
// address contains no undefined fields
// the city is Peoria and the state is AZ
// membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
// The array of customer objects will have the following schema:

// const customers = [
//     {
//         name: 'Sam',
//         address: {
//             street: '1234 W Bell Rd',
//             city: 'Phoenix',
//             zip: '85308',
//             state: 'AZ'
//         },
//         membershipLevel: 'GOLD',
//         age: 32
//     },
//     //more customers with the same schema
// ];

// Note: The solution to this problem does not require the use of callbacks. You will also need to use dot notation to access the properties. For example, customers[0].name would return "Sam".

// Answer

const customersWhoPurchaseTheMostStock = (customers) => {
    const newArray = customers.filter((customer) => {
        if(customer.name[0].toLowerCase() === "c"){
                return true;
        }

        if(customer.address['street'] !== undefined ||
        customer.address['city'] !== undefined ||
        customer.address['zip'] !== undefined ||
        customer.address['state'] !== undefined){
            return true;
        }
        if(customer.address.city === 'Peoria' && customer.address.state === 'AZ'){
            return true;
        }
        if(customer.membershipLevel === 'Gold' || 
        customer.membershipLevel === 'Platinum' || 
        customer.age < 29 && customer.membershipLevel === 'Silver'){
            return true;
        }
    })
        
}
customersWhoPurchaseTheMostStock(customers);