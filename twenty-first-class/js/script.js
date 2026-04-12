// here, the document. is used for all required
// if there is a parent named smthg, there would be parent.
// also, .id is not written, only .class

const textBox = document.getElementById('textBox');
const redBtn = document.getElementById('redBtn');
if (redBtn) {
    redBtn.addEventListener('click', () => {
        textBox.innerText = `The red button is clicked.`;
    })
}

const yellowBtn = document.getElementById('yellowBtn');
if (yellowBtn) {
    yellowBtn.addEventListener('click', () => {
        textBox.innerText = `The yellow button is clicked.`;
    })
}

const blueBtn = document.getElementById('blueBtn');
if (blueBtn) {
    blueBtn.addEventListener('click', () => {
        textBox.innerText = `The blue button is clicked.`;
    })
}
// since the action of click detection is repetitive, we can use EVENT DELEGATION to resolve redundancy for memory saving


//alternative using function
// textBox.innerText = ...


setTimeout (()=> {
    console.log('setTimeout called');
}, 1000) // in milliseconds//

count = 0;
const intervalFlag = setInterval (()=> {
    console.log('setTimeout called');
    count++;
if (count >= 5) {
    clearInterval(intervalFlag);
    console.log ('Interval Cleared');
}
}, 1000) // in milliseconds//


//testing event loop
console.log(1)

setTimeout(() => {
console.log(2);
}, 100)

setTimeout(() => {
console.log(3);
}, 0)

Promise.resolve ()
.then(() => {
    console.log (4);
})

.then(() => {
    console.log (5);
})

console.log(6)