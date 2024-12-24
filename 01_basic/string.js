 const name="Shivansh"
 const age= "23"
 console.log(name+" "+age);// Shivansh 23
console.log(`Hello my name is ${name} and my age is ${age}`);//Hello my name is Shivansh and my age is 23

const myName=new String("Shivansh")
console.log(myName);//[String: 'Shivansh']
console.log(myName.length);//8
console.log(myName.toLowerCase());//shivansh
console.log(myName.toUpperCase());//SHIVANSH
console.log(myName.indexOf('v'));//3
console.log(myName.charAt(3));//v

const newstring=myName.substring(0,4)
console.log(newstring);//Shiv
const newstring1=myName.substring(4,8)
console.log(newstring1.toUpperCase());//ANSH

const anotherstring=myName.slice(-7,4)
console.log(anotherstring);//hiv

const newStringOne = "   Shivansh    "
console.log(newStringOne);//   Shivansh    
console.log(newStringOne.trim());//Shivansh( unwanted spaces hat jate hai)

const url = "https://Shivansh.com/shivansh%20pandey12"

console.log(url.replace('%20', '-'))//https://Shivansh.com/shivansh-pandey12

console.log(url.includes('sundar'))//false

console.log(myName.split('-'));//[ 'Shivansh' ]

  