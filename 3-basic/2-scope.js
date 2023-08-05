let a = 50 // Global Scope

if (true) {   //local scope
    let a = 10
    const b = 20
   // console.log("inner: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "manish.com" // this is nested function
       // console.log(username);
    }
   // console.log(website);

    two()
}

one()

if (true) {
    const username = "hitesh" // we are using instead function

    if (username === "hitesh") {
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}
// console.log(username);
