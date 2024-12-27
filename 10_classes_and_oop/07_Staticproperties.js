//Class: A class is a blueprint that defines the properties (attributes) and methods (functions) that objects created from that class will have. It defines the structure and behavior that the instances of the class will follow.


//Instance: An instance is a specific realization of a class. When you create an object from a class, that object is an instance of the class.



class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }// =>The static keyword is used in class definitions to define static methods and static properties. These static members belong to the class itself, not to instances of the class.
}

const Shivansh = new User("Shivans")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());