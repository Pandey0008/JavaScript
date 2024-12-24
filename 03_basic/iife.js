// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//immediately invoked function expression(IIFE) => ko hum () ke andar likh kar hi call karte hain aur end me () lagate hain call karne ke liye sath me ; bhi lagana hota hai end me.
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("Shivansh");//anonymous IIFE