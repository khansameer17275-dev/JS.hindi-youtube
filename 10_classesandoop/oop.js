const user = {
    username: "sameer",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
     
}
const user2 = {
    username: "farhan",
    loginCount: 10,
    signedIn: true,

     getUserDetails: function(){
        // console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
       // console.log(this);
        
    }
     
}

// console.log(user2.username);
 // console.log(user2.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}


const userOne = new User("Sahir", 12, true)
const userTwo = new User("Farhan", 15, true)

console.log(userOne.constructor);
// console.log(userTwo);



// 1. Constructor Function banayi

// Ye ek normal function hai, lekin kyuki tum ise new keyword ke saath use kar rahe ho, isliye ye constructor function ban gaya.

// Iska kaam hai:
// ➡️ naye user objects banana.

// Parameters
// username
// loginCount
// isLoggedIn

// Ye values function call ke time pass hoti hain.

// Example:

// new User("Sahir", 12, true)

// to:

// username = "Sahir"
// loginCount = 12
// isLoggedIn = true
// 2. this keyword
// this.username = username;
// this.loginCount = loginCount;
// this.isLoggedIn = isLoggedIn

// this current object ko represent karta hai jo new keyword banata hai.

// Internally JS karta hai:

// const obj = {}

// fir:

// obj.username = "Sahir"
// obj.loginCount = 12
// obj.isLoggedIn = true
// 3. Method add kiya
// this.greeting = function(){
//     console.log(`Welcome ${this.username}`);
// }

// Ye object ke andar ek function add kar raha hai.

// Example:

// userOne.greeting()

// Output:

// Welcome Sahir
// 4. return this
// return this

// Ye current object return karta hai.

// BUT:

// new keyword already automatically object return karta hai.

// Isliye normally constructor me ye nahi likhte.

// 5. Object create hua
// const userOne = new User("Sahir", 12, true)
// Internally kya hua?
// Step 1

// Empty object bana:

// {}
// Step 2

// this us object ko point karne laga.

// Step 3

// Properties add hui:

// {
//  username: "Sahir",
//  loginCount: 12,
//  isLoggedIn: true
// }
// Step 4

// Object return ho gaya.

// 6. Dusra object
// const userTwo = new User("Farhan", 15, true)

// Ab completely naya object bana.

// {
//  username: "Farhan",
//  loginCount: 15,
//  isLoggedIn: true
// }
// IMPORTANT

// Agar new nahi lagate:

// const userOne = User("Sahir", 12, true)

// to:

// ❌ naya object properly nahi banta
// ❌ this global object ban sakta hai
// ❌ data overwrite ho sakta hai

// Isliye constructor function ke saath new important hai.

// 7. Constructor property
// console.log(userOne.constructor);

// Output:

// [Function: User]

// Meaning:

// ➡️ userOne object ko User function ne create kiya hai.