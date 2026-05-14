// let myName = "sameer     "
// let myChannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sameer = function(){
    console.log(`sameer is present in all objects`);
}

Array.prototype.heySameer = function(){
    console.log(`Sameer says hello`);
    
}

// heroPower.sameer()
// myHeros.sameer()
// myHeros.heySameer()
 // heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true, 
  __proto__: TeachingSupport 
}

Teacher.__proto__ = User 

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Sameer".trueLength()
"icetea".trueLength()