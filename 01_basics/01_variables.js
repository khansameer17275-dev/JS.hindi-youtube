const accountId = 144553
let accountEmail = "khansameer17275@gmail.com"
var accountPassword = "12345"
accountCity = "Bhopal"

// accountId = 2 // not allowed

accountEmail = "fkhan1234@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])