function myName() {
    console.log("m");  // we have to create function
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}


myName()

function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
    
}

addTwoNumber(3, 4)

function logginUserMessage(username = "avani"){
    return `${username} Just Logged In`
}
console.log(logginUserMessage("manish"))

function calculatePriceCart(...num1){
    return num1
}

console.log(calculatePriceCart(500, 400, 522, 450, 452));

const user = {
    username : "manish",
    price : 245
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)