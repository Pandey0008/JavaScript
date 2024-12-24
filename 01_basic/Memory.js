/*   

************MEMORY************
#  Stack Memory(Primitive Datatype =>Jab bhi stack memory use hoti hai usme jo bhi variable declare hota hai uski copy provide ki jati hai)


let myName="Shivansh"
let myanotherName=myName
console.log(myanotherName);//Shivansh
myanotherName="Shivam"
console.log(myanotherName);//Shivam console.log(myName);//Shivansh
    
#  Heap Memory(Non-Primitive Datatype=>Jab bhi koi array,Function,Object heap memory me hota hai to vaha se hme reference milta hai original value ka that is koi bhi change karne par original value me changes hote hai)
 
let user1={ 
 email:"shivam@123",
 password:"shiv"
}
 let user2=user1
 console.log(user2);//{ email: 'shivam@123', password: 'shiv' }
 user2.email="shivam@3"
 console.log(user1.email);//shivam@3
 console.log(user2.email);//shivam@3
 
 */