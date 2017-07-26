var b = function() {
    //This 'this' will refer to global execution context
    console.log(this);
}


//b();


var c = {
    name: 'The c object',
    log: function() {
        // This 'this' will refer to object containing this function.
        console.log(this);
        
        var setname = function(newname) {
            // This 'this' will refer to global execution context
            // Welcome to weired JavaScript.
            this.name = newname;
        }
        setname('Update name from inner function');
        console.log(this);
    }
};

c.log();


var d = {
    name: 'The d object',
    log: function() {
        // To overcome above situation we can simply assign self variable to
        // to the 'this' which we are interested.
        var self = this; // now self varible will have the execution context of d object.
        
        var setname = function(newname) {
            self.name = newname;
        }
        
        setname('Updated name from inner function.')
        console.log(self);
    }
}

d.log();