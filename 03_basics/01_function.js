
function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("M")
    console.log("E")
    console.log("E")
    console.log("R")
}

//sayMyName()

//function addTwoNumbers(number1, number2){
    //console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);



function loginUserMesagge(username = "sam"){
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

 //console.log(loginUserMesagge("sameer"))
 console.log(loginUserMesagge())