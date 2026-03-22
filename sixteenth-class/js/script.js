// for (let i = 1; i<=20; i++) {
//     console.log(`2 * ${i} = ${2*i}`)
// }


//for 2 *(odd number)
// for (let i = 1; i<=20; i++) { 
//         console.log(`2 * ${i} = ${2*(i)}`)
//         i+= 1;
// } 
//alternative
// if (i%2 != 0) {
//     console.log(...)}
//other than this, can also use i+2 to skip in the for parameters itself


// let i =1;
// while (i<=20) {
//     console.log(`2 * ${i} = ${2*i}`)
//     i++;
// }


for (let i = 1; i<=20; i++) {
    if (i == 3) {
        continue;
    }
    if (i >= 15) {
        break;
    }
    console.log(i);
}

