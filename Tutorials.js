// Const and Let
// ES6 added more syntax to be used including classes
// declaring a variable was updated from just var to add
// Let and Const
// Let declared variables tha t only exists within a block scope
// the variable no longer exists outside the block
// the same variable can be used in different blocks
var x = 10;
{
    let x = 2;
    // let keeps the variable inside the block 2
}
// outside the block x is still = to 10 

// Const used to create a constant which means you cannot
// change a value once it is set. Useful for when you have values
// you give a name and it will never change such as PI in math.

const pi = 3.14159

console.log(pi);

// pi = 6;
// console.log(pi); //will not print as it is trying to change the
// already declared PI constant.


// Template literal
// enhance the way we can work with strings by adding some 
// additional features.
// Template literals are declared like strings but are surrounded by
// back ticks `` below the esc key
// create multi line strings rather than need to concat strings
// 
let myString = `Hello
World
my name
is Nick`;

console.log(myString);

// also provide a way to simply interprelate variables and expressions
// into our string. fancy word for execute code inside a string or
// different language
// use interprelation in our template literals by wrapping any js we want to execute in ${}
console.log(`six times five = ${5 * 6}`); //anything inside the {} will be exeuted in the string

// useful when you have a string and you need to perform some kind of operation to make the 
// string more dynamic template literal which can make a variable or code 
// more dynamic

// Arrow functions very useful and favorite update
// writing functions become easier to read however it does not
// just change the syntax to make it look pretty it also adds the additional
// functionality of biding the current scope to the function
// making things much easier
// arrow functions bind the current score to the function

let creatFullName = (firstName, lastName) => firstName + ' ' + lastName;
// or with the back ticks `` `${firstName} ${lastName}`; and the space it implied with the space between the two curly braces

console.log(creatFullName('Tom', 'Sawyer'));
// much less verbose as somethings are ommitted such as the return
// a few rules
// multiple lines or {} are needed due to multiple lines
// if we want to return something we need the return

let someFunction = (a, b) => {
    let result = '';
    for (let i = 0; i < b; i++){
        result += a;
    }
    return result;
};
console.log(someFunction('hello', 3));

// another rule - if you only have 1 parameter you do not need the ()
// if you have 0 parameters then you still need the ()
// best practice is to create a const variable to the arrow function
// so the value will not be changed later in the code.


// Callbacks
// JS is single threaded so it runs one line at a time
// not usually a problem until we have a line of code the reads or writes to
// an external program or has to wait for something outside our codes control
// when this happens the line of code waiting for an external resource could
// stop lines of code from running until the line completes which would be non conformant
// As a means of working around this JS was built to be event driven
// which means it doesnt wait for each line of code to finish it moves to the next line
// after calling each line. This way JS can perform better when dealing with code which may depend 
// on an external resource or just may take longer.
// This means that some lines of code may not have finished executing before the next lines finish
// which means you cannot rely on a value to be present in a linear fashion like we're used to

let userName = sentHttpRequest('getUser');
console.log(userName);//userName would be undefined because the request hasn't been returned

// to overcome this issue js has callbacks
// functions are objects which means we can pass them into other functions as arguments
// callbacks is when we pass a function into another function to be execute after that code is complete so not to cause a delay
// write code a little different

function logUserName(user) {
    console.log(user);
}

sendHttpRequest('getUser', logUserName)
// the logusername function is passed into the senhttprequest function as an argument
// the sendhttprequest does what it needs and then the last line is to call to the logusername function
// where it passes the username it grabbed in as an argument and the console.log logs it out

sendHttpRequest('getUser', user => console.log(user));
// using the arrow function this creates a functions because it doesn't have a name
// just being used in the one call. if using over and over better to use the previous method with a specific name
// when we work with other libraries there will be calls that will be asynchronus that take a call back
// pass in a function by name or annonymously and that function is executed at the end of the function of the 3rd 
// party library that we are using
// *** Mistake to avoid *** 
// dont pass in a function with the () after the function because we are so used to calling
// with the () however if () is used it will call the function and then it won't work because we aren't passing an argument 
// we want to not incoke it we just want to pass the name in not the invocation so the code will run
// and when it calls the function the function itself will ask for the user.

// Promises
// more used than call back
// solves the same problem as a call back but are much cleaner to write
// and produce code that is easier to read
// Promise is an object representing the eventual completion or failure of an
// asynchronus operation. This means asynchronus functions can return a promise and then
// we can use that promise to say when this resolves do some thing if it was successful
// or do something else if it was not. We can then use the "Then" and "Catch" methods on a promoise to handle the completion
// or failure of the operation relatively.
// If I have a mthod that returns a promise it could be handled like this

doSomethingThatReturnsAPromise() //this is the function being called
    .then((value) => { //pass function into then
        console.log(value); //log it out
    }).catch((err) => { //if error then do something else
        console.error(err); // log out as error to make it red
    })

// if successful a value is returned if not an error is noted

function handleEvent(value) {
    console.log(value);
}

function handleError(err) {
    console.log(err);
}

doSomethingThatReturnsAPromise()
    .then(handleEvent)
    .catch(handleError);

// Promise is something that's going to happen in the future
// if successful do something, if not catch error/exception doing something else
// Promises can return other promises allowing us to further chain our then and catches
// to read ascync codes in what looks like a linear fashion making it a lot cleaner than having a lot of
// nested call backs that can end up really hard to read in a lot of curly braces.
// If a promise successfuly resolves without error than the function in "Then" will happen and
// if it catches an error than the function in the "Catch" is going to happen.