let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);//0 2 4 6 8 10
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 1

do {
    console.log(`Score is ${score}`);//Score is 1 Score is 2 Score is 3 Score is 4 Score is 5 Score is 6 Score is 7 Score is 8 Score is 9 Score is 10
    score++
} while (score <= 10);


let marks = 11

do {
    console.log(`Mark is ${marks}`);//Mark is 11
    score++
} while (score <= 10);//do while loop me condition false hoti hai to ek bar to code execute hota hai kyuki pahle code ek bar execute hota hai fir condition check hoti hai