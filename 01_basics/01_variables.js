const accountId = 14453
let accountEmail = "annu@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountState;

//accountId = 2// not allowed

accountEmail = "as@as.com"
accountPassword = "21212121"
accountCity = "Ghaziabad"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
