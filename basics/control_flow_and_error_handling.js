//Control flow and error handling

//Block Statements

var x = 1;
{
  var x= 2;
}
 console.log(x);
/*
This outputs 2 because the var x statement within the block is in the same scope as the var x statement before the block.
In C or Java, the equivalent code would have outputted 1.Starting with ECMAScript 6, the let variable declaration is block scoped.
See the let reference page for more information.
*/

//Falsy values

//The following values will evaluate to false:

/*
false
undefined
null
0
NaN
the empty string ("")

*/

//Do not confuse the primitive boolean values true and false with the true and false values of the Boolean object. For example:

var b = new Boolean(false);
if(b){console.log("true");}

//Exception handling

//throw statement

//throw "Error2";
//throw 42;
//throw true;


//try...catch statement

function getMonthName (mo) {
  mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo] != null) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = "unknown";
  //logMyErrors(e); // pass exception object to error handler
}
