// scope ke andar return keyword  ka use karte hai values ko print karne ke liye

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)//41,51,61,71,81,91,101 //=>chaining of map and filter("." laga ke chaining ki jati hai)

console.log(newNums);