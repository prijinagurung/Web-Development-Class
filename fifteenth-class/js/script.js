// let a=50
// if (a>20) {
//     //alert (`The value of a is ${a} and it is greater than 20.`); //static string (without concat)
//     //using backtick with value in ${x}
// } else {
//     //alert ('The value of a is ' + a + ' and it is smaller than 20.');
//     //using normal concat 
// }


// let b = 80
// if (b<50) {
//     alert(`The value of ${b} is less than 50.`);
// } else if (b<75) {
//     alert(`The value of ${b} is less than 75.`);
// } else {
//     alert (`The value of ${b} is less than 100.`);
// }


let num = '5'
if (num === 5) {
    alert(`The number 5 is a number.`)
} else if (num == 5) {
    alert (`The number is a string.`)
} else {
    alert (`The number is not 5.`)
}
console.log(typeof(num))


let d=10
let msg = (d<5)?'The value of d is less than 5.':'The value of d is greater or equal to 5.'
console.log(msg)
