var person = {
    firstname: 'Jhone',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logname =  function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: '+ lang1 + ' ' +lang2);
    console.log('----------------------------------');
}
// The bind() method creates a new (copy of the ) function that, 
// when called, has its this keyword set to the provided value,
// Using bind we can control the value of this when the function get executed.
var logPersonName = logname.bind(person);
logPersonName('en');

/*
We can use call() also to change the mening of 'this' at execution
call() is more flexible it allow us not just to control 'this'
but also to pass varibales to the function.
*/
logname.call(person, 'en', 'es');

/* 
apply() do the same thing as call() the only diffrence is the
it takes arguments as an array insted of set of singale value.
*/
logname.apply(person, ['en', 'es']);

/*Controlling 'this' more and more*/
// This is what we call function borrowing

var person2 = {
    firstname: 'Sherlock',
    lastname: 'Holms'
    // note that this person object does not have the getFullName function.
}

// And we are going to to borrow the function in person object but control 'this' by 
// using apply()

console.log(person.getFullName.apply(person2));

