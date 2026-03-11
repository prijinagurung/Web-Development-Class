console.log('Hello Kings College')

var a = 5
var b = 6
var sum = a + b
console.log('The sum of a and b is', sum)

var x = 35
var y = 4
var remainder = x % y
console.log('The remainder of x/y is', remainder)

var v = 4;
if (true) {
    var v = 5;
}
console.log(v)

let l = 4;
if (true) {
    let l = 5;
}
console.log(l)

let c = 5
if(true) {
    // console.log(c) // -> this won't print as c has not been initilaized (initialization error)
    let c = 7; //with hoisting, "let c" is taken above the 1st console.log(c). However, the value assigned is not carried
                // So, error is shown//
    console.log(c)
}
console.log(c)


let p = 5
let q = 6
let r = 7

function addition(m,n) {
    return m+n;
}
console.log(addition(p,q))
console.log(addition(q,r))
console.log(addition(p,r))