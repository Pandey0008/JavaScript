// let myName = "Shivansh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);8//=>true length aapko string ka original length batata hai extra spaces ko remove karke
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Shivansh = function(){
    console.log(`Shivansh is present in all objects`);
}
Array.prototype.heyShivansh = function(){
    console.log(`Shivansh says hello`);
}
heroPower.Shivansh()
myHeros.Shivansh()
myHeros.heyShivansh()
//heroPower.heyShivansh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Shivansh".trueLength()
"iceTea".trueLength()