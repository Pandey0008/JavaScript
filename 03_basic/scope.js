//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);//INNER: 10
    
}//=>global scope me jo bhi variable declare hoga vo block scope me bhi access ho sakta hai lekin agar koi variable block scope me declare hua hai to wo sirf us block me hi access hoga




console.log(a);//300
console.log(b);
console.log(c);

//**************Nested Scope**************

 
function one(){
    const username = "Shivansh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);//website is not defined//=>yaha pe website variable two() function ke scope me declare hua hai isliye function two()ke scope ke bahar access nahi ho sakta

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
console.log(website);//website is not defined//=>yaha pe website variable inner if block me declare hua hai isliye outer if block me access nahi ho sakta
}

console.log(username);//username is not defined//=>yaha pe username variable outer if block me declare hua hai isliye global scope me access nahi ho sakta


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//6
function addone(num){
    return num + 1
}



addTwo(5)//hoisting me function ko upar le jata hai lekin function expression ko nahi le jata
const addTwo = function(num){
    return num + 2
}