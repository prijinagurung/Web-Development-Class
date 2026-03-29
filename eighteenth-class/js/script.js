const boss = document.getElementById('boss');
//console.log(boss); //this shows the entire element in the console
boss.innerText = 'Gurung Prijina'; //this changes the text inside the element


//the needed code is kept inside the arrow function if script is kept in head 
// window.addEventListener ('DOMContentLoaded', ()=> {
// })


const boxes = document.getElementsByClassName ('box'); //use "Elements" since there are multiple
console.log(boxes);


//to print the array elements turn by turn
// let i = 2;
// while (i<=2) {
//     console.log(boxes);
//     i++;
// }


for (let i = 0; i <=boxes.length; i++) {
    if (i==0) {
        boxes[i].innerText = "Box 1"; //this is to access the array elements which are stored as class box = {boxes[0], boxes[1]}
    }
    else if (i==1) {
        boxes[i].innerText = "Box 2";
    }
}


const boxess = document.querySelectorAll ('.box'); //for all "box" in the system
boxess.forEach ((boxx, index) => { //no for loop required as this loops on its own, boxx and index are simply parameters
    if (index==(boxess.length-1)) {
        boxx.innerText = 'Nested Box'; //doesn't need [i] indexing since forEach gives new one each time by itself
    }     
})
//working: it starts from 0 to 2 as we have 3 "box" classes in the html