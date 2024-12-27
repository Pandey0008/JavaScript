//*********Lexical Scoping**********//  

// /*Lexical Scoping=>Lexical scoping (also known as static scoping) means that the scope of a variable is determined by its position in the source code. In JavaScript, functions are lexically scoped, meaning that they have access to variables defined in their outer scopes.*/

function outer() {
    let outerVar = "I am in the outer scope";
    function inner() {
      console.log(outerVar); // Accessing a variable from the outer function
    }
    inner();
  }
  outer(); // Output: "I am in the outer scope"
  /*In this example, inner can access outerVar because of lexical scoping. The scope of outerVar is determined at the time of writing the code. */

  //Agar function ke andar function hai to inner vala function outer vale function ke variables ka access le sakta ha but outer vala function inner vale function ke variables ka access kabhi nhi le sakta 


  //*******Closure*********/


  // /*Closure=>A closure is a function that "remembers" the variables from its outer scope even after that scope has exited. Closures are created every time a function is defined, allowing it to retain access to its lexical environment. */

  function createCounter() {
    let count = 0; // Private variable
  
    return function () {
      count++; // Accessing the outer variable
      return count;
    };
  }
  
  const counter = createCounter();
  
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  

  //In this example, the inner function returned by createCounter forms a closure. It retains access to count, even after createCounter has finished execution.