// singleton

// Object.create: Is method se bhi hum object ko create kar sakte hai

// object literals : Is method se object create karne ke liye hum curly braces " {} " ke andar keys aur uske values ko likhte hai aur "," se seperate karte hai.

const mySym = Symbol ("key1")

// object ke andar symbol ko create karne ke liye humesha key ko square brackets "[]" ka use karte hai 

const JsUser = {
    name: "Shivansh",
    "full name": "Shivansh Pandey",
    [mySym]: 'key1',
    age: 18,
    location: "Jaipur",
    email: "shivansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)//shivansh@google.com //=>hum (dot)"." se bhi object ko access kar skate hai

console.log(JsUser["email"])// shivansh@google.com//=>hum Square brackets "[]" se bhi object ko access kar skte hai

console.log(JsUser["full name"])//Shivansh Pandey

console.log(JsUser [mySym])//mykey1// =>symbol ko access karne ke liye humesha "[]" (Square Brackets) ka use karte hai

JsUser.email = "shivansh@chatgpt.com"
//Object.freeze(JsUser)// freeze ki help se hum js object ko freeze kar dete jisse further changes naa ki jaa sake

JsUser.email = "shivansh@microsoft.com"
console.log(JsUser);/* {
    name: 'Shivansh',
    'full name': 'Shivansh Pandey',
    age: 18,
    location: 'Jaipur',
    email: 'shivansh@microsoft.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'mykey1'
  } */

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// backticks `` ka use hum string interpolation ke liye kate hai 

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());//Hello JS user
console.log(JsUser.greetingTwo());//Hello JS user, Shivansh