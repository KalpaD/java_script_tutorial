/*
    This example explaines how closours work 
    
    the buildFunctions function will execute and add 3 anonymous functions
    to arr array. And none of the functions get executed, its just the declaration part.
    
    And at the end of the buildFunction it will return this array with functions and
    will be poped off from the execution stack.
    
    When it comes to execution phase of the anonymous functions all of them have 
    access to outer environment varibale environment which created by buildFunction() function.
    
    i.e when they fail to find a varibale named 'i' in their varibale environemnt they all will
    look in to outer variable environment and find the final value of i which is 3 at this point.
*/

function buildFunctions() {
    var arr = [];
    
    for(var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log('Value of i using var : ' +i);
            }
        );
    }
    
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

/*
    To solve this problem we need to preserve the value of i at the that moment.
    But for that we need a execution context with it's own varibale environment.
    Only way to create a execution context is to execute a function
    Hence we create IFFE with param i and store i's value in to j.
    and return a function which prints j when executed.
*/
function buildFunctions_improved() {
    var arr = [];
    
    for(var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log('Value of i using iffe: ' + j);
                }
            })(i)
        );
    }
    
    return arr;
}

var fs_imp = buildFunctions_improved();

fs_imp[0]();
fs_imp[1]();
fs_imp[2]();

/*
    In ES6 there is an elegent way to achive this. By declereing a varible with the
    let key word.
    
    The let statement declares a block scope local variable.
*/
function buildFunctions_improved_es6() {
    var arr = [];
    
    for(var i = 0; i < 3; i++) {
        let j = i;
        arr.push(
            function() {
                console.log('Value of i using es6 : ' + j);
            }
        );
    }
    
    return arr;
}

var fs_imp_es6 = buildFunctions_improved_es6();

fs_imp_es6[0]();
fs_imp_es6[1]();
fs_imp_es6[2]();

