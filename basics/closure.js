
/* A closure is an expression (typically a function) that can have free variables
 together with an environment that binds those variables (that "closes" the expression).  */

 // the inner function contains the scope of the outer function.

 //The inner function can be accessed only from statements in the outer function.

 //The inner function forms a closure: the inner function can use the arguments and variables of
 //the outer function, while the outer function cannot use the arguments and variables of the inner function


 function outside(x) {
   function inside(y) {
     return x + y;
   }
   return inside;
 }
 fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
 console.log(outside(3));
 result = fn_inside(5); // returns 8
 console.log(result);
 result1 = outside(3)(5); // returns 8
 console.log(result1);

/* Notice how x is preserved when inside is returned. A closure must preserve the
arguments and variables in all scopes it references. Since each call provides potentially
 different arguments, a new closure is created for each call to outside.
 The memory can be freed only when the returned inside is no longer accessible.*/


 var createPet = function(name) {
   var sex;

   return {
     setName: function(newName) {
       name = newName;
     },

     getName: function() {
       return name;
     },

     getSex: function() {
       return sex;
     },

     setSex: function(newSex) {
       if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
         sex = newSex;
       }
     }
   }
 }

 var pet = createPet("Vivie");
 console.log('pet.getName() '+ pet.getName());                  // Vivie

 pet.setName("Oliver");
 pet.setSex("male");
 console.log('pet.getSex() '+pet.getSex());                   // male
 console.log('pet.getName() '+pet.getName());
