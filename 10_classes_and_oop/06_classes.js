class user {
    constructor(username,password,email){
        this.username=username
        this.password=password
        this.email=email
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
    capitaliseUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const allEntries=new user("shivansh",'1234',"mailatshivm@gmail.com")
console.log(allEntries);
console.log(allEntries.encryptPassword());
console.log(allEntries.capitaliseUsername());

//Behind the scene

function usercreate(username,password,email){
    this.username=username
        this.password=password
        this.email=email
}
usercreate.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}
usercreate.prototype.capitalUsername=function(){
     return `${this.username.toUpperCase()}`
}
const entries=new usercreate ('shivam','1234567','asdfgh@gmail.com')
console.log(entries.capitalUsername());
console.log(entries.encryptPassword());

class user1{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`user name is ${this.username}`);
    }
}
class teacher extends user1{
    constructor(username,email,password){
       super(username)
       this.email=email
       this.password=password
    }
    addcourse(){
        console.log(`A new course was added by ${this.username} and his email is ${this.email}`);
    }
}

const allEntries1=new user1('shiv','12345','shiv@gmail.com')
allEntries1.addcourse();
