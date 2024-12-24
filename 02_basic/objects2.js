// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shivanshsh",
            lastname: "Pandey"
        }
    }
}

//console.log(regularUser.fullname);//{ userfullname: { firstname: 'Shivansh', lastname: 'Pandey' } } //=> object ke andar jitti bhi values ko access karna hai use "." (dot) laga ke kar skte hai

// to merge two or more objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj5 = Object.assign({}, obj1, obj2, obj4)//=> Object.assign ka use hum objects ko merge karne ke liye karte hai(Target,Source|| is case me {} ek empty object hai aur obj1,obj2,obj4 source objects hai jinko merge karna hai)
//console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6 = {...obj1, ...obj2,...obj4}//Spread Operator => is tarah se bhi hum objects ko merge kar sakte hai
//console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// Kayi baar jab database se data aata hai to "array object" ke form me hota hai. Jaise ki yaha pe users me 3 objects hai aur har object me id aur email hai. Ab agar hume kisi ek user ka email chahiye to hume uske index pe jana padega. Jaise ki agar hume 2nd user ka email chahiye to hume users[1].email likhna padega. Isse hume 2nd user ka email mil jayega.


// users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]//=>isme object ke keys aa jati hai 


// console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ] //=>isme object ke values aa jati hai array ke form me .


// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] //=>isme object ke keys aur values aa jati hai array ke form me jisme ek array me key aur value dono aa jate hai.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true //=>isme hum object ke andar koi bhi key check kar sakte hai ki wo object me hai ya nahi hai.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Shivansh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course// => isme hum object ke key ko rename kar rahe hai. Jaise ki courseInstructor ko instructor me rename kar rahe hai.(object destructuring)

console.log(courseInstructor);
console.log(instructor);//Shivansh
const {coursename:name}=course//=>object destructuring
console.log(name);//js in hindi

//json object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//API Format=> Application Programming Interface
// [
//     {},
//     {},
//     {}
// ]