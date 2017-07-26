function greet(greeting) {
    
    return function(name) {
        console.log(greeting + ' ' + name);
    }
}

var greetfunc = greet('Hi');
greetfunc('Jhone');