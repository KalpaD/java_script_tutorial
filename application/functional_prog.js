/**
 * This function apply given funcation to array items.
 * @param {Number} arr  Array of items. 
 * @param {function} fn Function to apply on the array items.
 */
function mapForEach(inArr, fn) {
    var outArrr = [];
    for (var i =0; i < inArr.length; i ++) {
        outArrr.push(fn(inArr[i]));
    }
    return outArrr;
}

var array = [1, 2, 3];
console.log(`Input array : ${array}`);

var array_1 = mapForEach(array, function(item) {
    return item * 2;
});

console.log(`Output array : ${array_1}`);

// Another example using boolean values

var checkLimit = function(limiter, item) {
    return item > limiter;
}

function applyBind(limiter) {
    // return a function checklimit with it's 1st paramter pre-set to limiter
    return checkLimit.bind(this, limiter);
}

// Here the bind function will set the 1st argument of the  checkLimit function.
var boolArr = mapForEach(array, applyBind(1));
console.log(boolArr);

