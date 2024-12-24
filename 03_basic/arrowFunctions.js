

const user = {
    username: "Shivansh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//this keyword ki help se hum object me current context ko refer karte hain
       console.log(this);//{ username: 'Shivansh', price: 999, welcomeMessage: [Function: welcomeMessage] }
    }

}

user.welcomeMessage()//Shivansh , welcome to website
user.username = "sam"
user.welcomeMessage()//sam , welcome to website

console.log(this);

function chai1(){
    let username = "hitesh"
    console.log(this.username);//this ka use function ke scope me nahi hota
}

chai1()

const chai2 = function () {
    let username = "hitesh"
    console.log(this.username);
}
 
 
const chai3 =  () =>{
    let username = "hitesh"
    console.log(this);//
}


chai3()
/********* Arrow Function *********/
const addTwo = (num1, num2) => {
    return num1 + num2
}

const addThree = (num1, num2) =>  num1 + num2//implicit return => agar function me sirf ek line of code hai to return keyword aur curly braces ki jarurat nahi hoti
 
const addfive= (num1, num2) => ( num1 + num2 )

const addsix = (num1, num2) => ({username: "hitesh"})//agar object return karna hai to uske liye object ko round braces me wrap karna padega


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()