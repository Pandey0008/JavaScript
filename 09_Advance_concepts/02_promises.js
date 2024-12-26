// 1st method to create a promise

const promiseone= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("New Promise created");
        resolve()//resolve ko then se link karne ke liye resolve function ko call karna hota hai
    },1000)
});

promiseone.then(function(){
    console.log("The new promise is resolved");
})
//.then() is used to handle the resolved promise (isse hum promise ko resolve se limk karte hai)

//2nd method to create a promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello shivansh Pandey")
        resolve()
    },2000)
}).then(function(){
    console.log("How are you Gentleman")
})

//3rd method to create a promise

const promiseThree=new Promise(function(resolve,reject){
     setTimeout(function(){
        resolve({username:"shivam",password:"12344",email:"shiv@gmail.com"})
     },3000)
})

promiseThree.then(function(userinfo){
 console.log(userinfo)
})

//4th method 

const promiseFour=new Promise(function(resolve,reject){
  let error=false
  setTimeout(function(){
    if(!error)  {
        resolve({username:"Shivam",password:"1234"})
      }
      else{
        reject("ERROR:Something Went Wrong")
      }
  },4000)
})


//chaining of promise using then and catch

promiseFour
.then(function(user){
    console.log(user)
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The Promise is Either resolved or rejected");
})

//5th method

const promiseFive=new Promise(function(resolve,reject){
    let error=true
    setTimeout(function(){
      if(!error)  {
          resolve({username:"Shiv",password:"12"})
        }
        else{
          reject("ERROR:Something Went Wrong")
        }
    },5000)
  })

  async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }
 catch(error){
    console.log(error);
 }
  }
  consumePromiseFive()


  //6th


//   async function getalldata() {
//    try {
//     const response =await fetch('https://api.github.com/users/Pandey0008')
//     const data= await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E:",error);
//    } 
//   }
//   getalldata()

  //7th

//   fetch('https://api.github.com/users/Pandey0008')
//   .then(function(response){
//     return response.json
//   })
//   .then(function(data){
// console.log(data);
//   })
//   .catch(function(error){
//     console.log(error);
//   })



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error))