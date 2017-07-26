// test 1.
console.log(1 < 2 < 3);

//test 2
/* Less than operator has left-to-right associativity
            (3 < 2)  < 1
              false  < 1
       Number(false) < 1
                 0   < 1  -> true
*/
console.log(3 < 2 < 1);


console.log('false == 0 results : '+ (false == 0));

var a = false;
console.log('var a = false; \n a == 0 results : ' + (a == 0));

var b = null;
console.log('var b = null; \n b == 0 results : ' + (b == 0) + '\t So weired..');

console.log('false == 0 results ' + (false == 0)); //-> true
console.log('null == 0 results ' + (null == 0)); //-> true)
console.log('null < 1 results ' + (null < 1)); //-> true