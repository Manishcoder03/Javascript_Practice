const userEmail = "manisj.gmail.com"

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("dont have user email");
}

//false value
// false, 0, -0, Bigint 0n, "", null, undefined, Nan
// truthy value
//"false", "0" " ", [], {}, function()

if (userEmail.length === 0) {
    console.log("array is empty");
    
}


