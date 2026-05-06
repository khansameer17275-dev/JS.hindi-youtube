const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock"); // same as above

setInterval(function ()  {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerText = date.toLocaleTimeString();
}, 1000);