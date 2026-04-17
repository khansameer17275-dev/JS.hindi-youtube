// # Primitive

// 7 type : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456769822n



// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Sameer",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myYoutubename = "khansameerdotcom"

let anothername = "myYoutubename"
anothername = "The Coder"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "khansameer@google.com"

console.log(userOne.email);
console.log(userTwo.email);


