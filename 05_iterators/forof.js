 // Array ko iterate karne ke liye for of loop ka use kar sakte hai

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);//1 2 3 4 5
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)//Each char is H Each char is e Each char is l Each char is l Each char is o Each char is   Each char is w Each char is o Each char is r Each char is l Each char is d Each char is !
}

// Maps => map is a collection of key value pairs where key can be any data type and value can be any data type (ye ek object hai jisme key value pair hota hai aur values unique hote hai)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);//Map(3) {"IN" => "India", "USA" => "United States of America", "Fr" => "France"}(ek value duplicate hai isi liye vo print nahi hui)

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}//IN :- India USA :- United States of America Fr :- France//=> forof loop se hum map ko iterate kar sakte hai

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
 
 
 const greeting="Hello Shivam jii !";
 for (const greet1 of greeting) {
    if (greet == " "){
        console.log("Space detected");
        continue;
    }
    console.log(`Each character is "${greet1}"`);
 }