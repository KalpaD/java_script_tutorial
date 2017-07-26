/*
This will cause a problem since function statment can not be anonymous
function(name) {
     console.log( 'Hello '+ name);
}
*/

//So let's wrap this function statment with paranthesis
// It will not throw an error but not output since it has not been invoked.
( function(name) {
     console.log( 'Hello '+ name);
} );

// Then we run this function
// We call it Immediatly Invoked Function Expression.

(function(name) {
    console.log( 'Hello '+ name);
})('Jhone');





