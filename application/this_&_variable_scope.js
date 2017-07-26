var name = 'Jane';


var func = function doSomething() {
    var name = 'Jhone';
    
    var obj = {
        logName: function() {
            console.log('this from obj logger : '+ this); // -> will refer this as Window object
            /*
            // -> comment name at line 5 will result Jane since obj -> (outer env = func) => can not find name
                                                                func -> (outer env = global) => found Jane
            */
            console.log('Name from obj logger : '+ name); 
        }
    }
    console.log('this from function doSomething : '+ this); // -> will refer this as the 'obj'
    console.log('Name from function doSomething : '+ name); // func -> (outer env = global) => found Jane
    obj.logName();
}

func();


(function() {
    console.log('Name from IIFE : ' + name);
})();
