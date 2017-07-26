/*
    true || false               -> true
    undefined || 'hello'        -> 'hello' // It returns the value that can be coerce to 'true'
    'hi' || 'hello'             -> First one that can be coerce to 'true'
    
*/

function greet(name) {
    name = name || '<Your Name Here>'
    console.log('Hello ' + name);
}

greet();
greet('Jhone');