//Getters and setters in JavaScript are special methods that allow you to define how an object’s properties are accessed and modified. These are typically defined using the get and set keywords. They are often used to encapsulate internal property logic, validate input, or compute derived properties.




class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()//_email is used to avoid stack overflow error as it will call the getter and setter again and again .
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Shivansh`//_password is used to avoid stack overflow error as it will call the getter and setter again and again .
    }

    set password(value){
        this._password = value
    }
}

const Shivansh = new User("shivansh@gamail.ai", "abc")
console.log(Shivansh.email);
console.log(Shivansh.password);