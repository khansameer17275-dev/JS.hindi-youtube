//FileSystemDirectoryHandle('https://something.com').then().catch().finally()

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