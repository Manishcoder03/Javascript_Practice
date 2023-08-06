const user = {
    username: "Manish",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()
user.username = "bhai"
user.welcomeMessage()