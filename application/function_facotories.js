function makeGreetign(language) {
    
    return function(fname, lname) {
        
        if(language === 'en') {
            console.log('Hello ' + fname +' '+ lname);
        }
        
        if(language === 'en') {
            console.log('Hola ' + fname +' '+ lname);
        }
    }
}
/*
Note that here following statments create function factory
*/
var greetEn = makeGreetign('en');
var greetSp = makeGreetign('es');

// We invoke the the functiond obtained above here and those functions
// implicitly have access to language varibale which is hidden at execution level
// using closures to pass hidden varibales to functions.
greetEn('Jhone', 'Doe');
greetSp('Jhone', 'Doe');

