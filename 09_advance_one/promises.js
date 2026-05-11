//FileSystemDirectoryHandle('https://something.com').then().catch().finally()

const { useTransition } = require("react");

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // promise complete
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
     console.log("Async task 2");
     resolve()   
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


