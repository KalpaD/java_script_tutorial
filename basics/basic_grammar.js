//Comments

// one line comment

/*
 a multiline comment
*/

//Declaratioins

var varibale;
//let block_scope_variable;
const read_only_named_constant;


var a = 67;
console.log("The value of a is :" + a);
//console.log("The value of a is :" + b); //SyntaxError: Unexpected identifier


//You can use undefined to determine whether a variable has a value.
var input;
if(input === undefined){
    console.log("undefined");
}else{
    console.log("defined");
}
//undefined value behaves as false when used in a boolean context
//var myArray = [];
//if (!myArray[0]) myFunction();

//The undefined value converts to NaN when used in numaric context.
//var a;
//a + 2 = NaN

//when we evaluate null varibale , the null value behaves as 0 in numaric context and as false
//in boolen context
var n = null;
console.log(n * 32);

//variable scope
 if(true){
   var x = 5; // this variable is in globle scope
 }
 console.log("x : "+x);

//if(true){
//  let y = 5;
//}
//console.log("y : "+y); // ReferenceError: y is not defined

//variable hoisting
//JavaScript is that you can refer to a variable declared later, without getting an exception. This concept is known as hoisting;
//However, variables that aren't initialized yet will return a value of undefined.
/**
 * Example 1
 */
console.log(y === undefined); // logs "true"
var y = 3;

/**
* Example 2
*/
(function(){ console.log(myvar); //undefined
  var myvar = "local value";
})();

/*Because of hoisting, all var statements in a function should be placed as near to the top of the function as possible.
 This best practice increases the clarity of the code. */

//Global variables
/*
Global variables are in fact properties of the global object. In web pages the global object is window,
so you can set and access global variables using the window.variable syntax.
*/

//Constants
//You can create a read-only, named constant with the const keyword.
const prefix = '213';

/*
You cannot declare a constant with the same name as a "function" or "variable" in the same scope. For example:

function f(){};
const f = 5;

function f() {
  const g = 5;
  var g;
}
*/

//Data structures and types
//The latest ECMAScript standard defines seven data types:
/*
Boolean  true , false

null  A specil keyword donoting a null value.

undefined - A top level property whose value is undefined

Number

String

Symbol A data type whose instance are unique and immutable.

and Object
*/

//JavaScript is dynamically typed language

x = "The answer is " + 42 // "The answer is 42"
y = 42 + " is the answer" // "42 is the answer"


//Converting String to Numbers

parseInt();
parseFloat();

//Literals
/* we use literals to represent values in JavaScript . These are fixed values, not variables, that you litarally
   provide in your script.

   Array Literals
   Boolean Literals
   Floating-point Literals
   Integers
   Object Litarals
   String Litarals

*/

//Array literals

var cofee = ["French Roast" , "Colombian", "Kona"];

var fish = ["Lion", , "Angel"]; //valid array 
