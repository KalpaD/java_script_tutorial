//function scope
//varibales defined in the global scope
var num1= 30,
    num2=3,
    name="kalpa";

//this function defined in the global scope
function multiply(){
  return num1 * num2;
}

//A function defined in the global scope can access all variables defined in the global scope.
//A function defined inside another function can also access all variables defined in its parent
//function and any other variable to which the parent function has access.
function getScore () {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

module.exports.getScore = getScore;
module.exports.multiply = multiply;
