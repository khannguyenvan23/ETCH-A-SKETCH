let getDomTable = document.querySelector(".table");
let getClearButton = document.getElementById('clear');
let setAmout = document.getElementById('setAmout');
let setBlackColor = document.getElementById('blackColor');
let setRandomColor = document.getElementById('randomColor');
let listSquare;
let checkColor = 1;
let amountSquare = 10;
let listColor = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#4caf50", "#fffde7", "#795548"]

/* compute areaSquare */

const areaSquare = function(amountSquare){
    return 500 / amountSquare;
}
/* Create square */


function createTable(areaSquare, amountSquare) {
    for(let x = 0; x < amountSquare; x++ ){
        for(let y = 0; y < amountSquare; y ++ ){
             getDomTable.innerHTML += `<div  class="box" style="width: ${areaSquare}px; height: ${areaSquare}px;"></div>`;
        }
        getDomTable.innerHTML += `<div style="clear:both;"></div>`
   
    }
    // Get each box
    listSquare = document.querySelectorAll(".table>div.box");
    
    // Paint
    listSquare.forEach(square => {
        square.addEventListener("mouseover",paintColor);    
    });
}

/* paint */
function changeColor(){
    if(this.id === "randomColor"){
        checkColor = -1;
    } else {
        checkColor = 1;
    }
   
}
function paintColor(){
    let randomColor =checkColor=== -1? listColor[Math.floor(Math.random() * listColor.length)]: "black";
    this.style.backgroundColor = randomColor;
}


/* Lear paint */

function clearTable() {
    listSquare.forEach(square =>{
        square.style.backgroundColor = "white";
    })
}
/* Set amount of square */
function setAmountSquare(){
    amountSquare = prompt("Set amount");
    getDomTable.innerHTML ="";
    let areaSquar2 = areaSquare(amountSquare);
    createTable(areaSquar2, amountSquare);
}
/* Control */
let areaSquar = areaSquare(amountSquare);
createTable(areaSquar, amountSquare);

// Add Event Listener
getClearButton.addEventListener('click', clearTable);
setAmout.addEventListener('click', setAmountSquare);
setBlackColor.addEventListener('click', changeColor);
setRandomColor.addEventListener('click', changeColor);