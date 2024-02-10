// let text = document.querySelector('h2');

// text.innerText = text.innerText + " from Apna College students"

let divs = document.querySelectorAll('.box')

divs[0].innerText = 'new unique value 1'
divs[1].innerText = 'new unique value 2'
divs[2].innerText = 'new unique value 3'

let divs = document.querySelectorAll('.box');

let indx = 1;

for(let div of divs){
    div.innerText = `new unique value ${indx}`
    indx++
}

