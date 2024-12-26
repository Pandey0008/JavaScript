const user = {
    username: "Shivansh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");//Got user details from database
        console.log(`Username: ${this.username}`);//Username: Shivansh
        console.log(this);//this ka use krke hm object ke andar ke current properties ko access karte hai
    }
}



console.log(user.username)
console.log(user.getUserDetails());
console.log(this);// empty obj will be created because this this is in global scope

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}

const userOne = new User("Shivansh", 12, true)
const userTwo = new User("Shivam", 11, false)
console.log(userOne.constructor);
console.log(userTwo);

// jaise hi new keyword likhte hai JavaScript me --


//1> Ek empty object create hota hai jisko instance kaha jata hai
//2>Ek constructor function call hota hai new keyword karan aur sare arguments ko pack krke de deta hai
//3> Is step me jitte bhi this create huye hai vo isme add on ho jate hai 
//4>Last step me function call hota hai to mil jata hai output