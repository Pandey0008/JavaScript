const setUsername=function(username){
    //complex db calls
    this.username=username
}
const createuser=function(username,email,password){
    setUsername.call(this,username)//call function is used to call the function of another object   // =>this stores the reference of another object
    this.email=email
    this.password=password
}
const AllEntries=new createuser("shivam","mailatshivm@gmail.com","12345")
console.log(AllEntries);
