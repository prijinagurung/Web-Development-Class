const wraps = document.querySelectorAll('.wrapper');
//code to give box 1 and box 2 in each wrapper
// wraps.forEach(wrap => { //divides the blocks with class wrapper into individual sections
//     const boxes = wrap.querySelectorAll('.box');
//     boxes.forEach((box, index) => { //works in each of the box class to increase
//         box.innerText = `box ${++index}` //works on the inner text to change into box 1 and 2
//         //template literal used, so "box" is the to-print text
//     })
// })


//code to give diff outputs in each wrapper
//in const, use plural
//in forEach loop, use singular in the ( ) as the element appears once in each loop
wraps.forEach((wrap, i) => {
const boxes = wrap.querySelectorAll('.box');
    boxes.forEach((box, index) => {
            if (i == 0) {
                box.innerHTML = (index==0) ? 'first box' : 'second box';
            } else {
                box.innerText = `box ${++index}` //works on the inner text to change into box 1 and 2s
            }
    })
})


//event listener for toggle button
//for the following 3, "dark is the CSS attribute"
const btn = document.getElementById("toggleBtn");
btn.addEventListener('click', ()=> {
    console.log('clicked') //checks in console if the click action has been detected
    document.body.classList.toggle('dark');
})

const dark = document.getElementById("addDark");
dark.addEventListener('click', ()=> {
    console.log('clicked')
    document.body.classList.add('dark');
})

const light = document.getElementById("removeDark");
light.addEventListener('click', ()=> {
    console.log('clicked')
    document.body.classList.remove('dark');
})