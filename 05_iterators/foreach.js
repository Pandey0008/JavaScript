//Array ke andar agr koi object hai to us object ko iterate karne ke liye hum forEach ka use kar sakte hai

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);//js ruby java python cpp
// } )

// coding.forEach( (item) => {
//     console.log(item);//js ruby java python cpp(arrows function ka use karke)
// } )

// function printMe(item){
//     console.log(item);//
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (val
) => {
    console.log(`${val.languageFileName} : ${val.languageName}`);//
    /*js : javascript
      java : java
      py : python*/
} )

// for each loop ka structure => (arrayname.forEach( function (isme kuch bhi likh sakte hai) ) {
   // console.log(upar jo parameter pass kiya hai uska use karte hue)
//}