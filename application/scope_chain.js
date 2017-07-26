function func_1() {
    var myVar = 2;
    func_2();
}

function func_2() {
    console.log('myVar value is : ' + myVar);
}

var myVar = 1;
func_1();
