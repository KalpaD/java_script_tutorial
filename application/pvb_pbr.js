//primitives are pass by value in javascript

var a = 3;
var b;

b = a;
a = 2;

console.log(a);  // 2
console.log(b);  // 3  b has not been chnaged.


var c = { greeting: 'hi'}
var d;

d = c;
c.greeting = 'hello';

console.log(c); // hello
console.log(d); // hello both have been chnaged sinc they are pointing to same memory location.