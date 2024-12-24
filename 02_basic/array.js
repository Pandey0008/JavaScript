// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);//2

      /***********Array methods**********/


//myArr.push(6)//=>(push element in last)

//myArr.push(7)//=>(push element in last)

//myArr.pop()//=>(pop elements from last)

//myArr.unshift(9)//(9 will be inserted in the beginning of the array)


//myArr.shift()//(array will be shifted 1 point towards left)

// console.log(myArr.includes(9));=>(Boolean)//false


// console.log(myArr.indexOf(3));//2

const newArr = myArr.join()

// console.log(myArr);

//console.log(typeof newArr);//string(join changes datatype to string)

// console.log( newArr);


// slice vs splice

console.log("A ", myArr);//A  [ 0, 1, 2, 3, 4, 5 ]


//SLICE(last range include nhi hoti slice me)


const myn1 = myArr.slice(1, 3)//=>[from the index where you want to print,to the index where you want to print]

console.log(myn1);//[1,2]
console.log("B ", myArr);//B  [ 0, 1, 2, 3, 4, 5 ]

//SPLICE(us poore  portion ko hi remove kar deta hai original array se aur slice me last range include hoti hai)

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);//C  [ 0, 4, 5 ]

console.log(myn2);//[ 1, 2, 3 ]