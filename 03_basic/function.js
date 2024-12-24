 //Function Declaration =>function keyword||Function name||()syntax||{}body


 function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() //=>() function ko execute karne ke liye use karte hai. Is case me sayMyName() function ko execute karne ke liye use kiya gaya hai. 

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    let result = number1 + number2
     return result//=> return keyword ka use function se kuch value return karne ke liye karte hai. Is case me result variable ki value return ki ja rahi hai.
   
     //  return number1 + number2//=>isme bhi same result aayega jo ki upar wale line me aaya hai.
}

const result = addTwoNumbers(3, 5)//=>isme 3 and 5 arguments hai jo ki addTwoNumbers function ke parameters me ja rahe hai.

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1)/*=>isme 3 dot matlab "rest operator" hai ...num1 ka use hum multiple arguments ko ek array me store karne ke liye karte hai.*/{
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))//[ 500, 2000 ]//=>isme 500 and 2000 arguments hai jo ki ...num1 me store ho gaye hai.

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));