const moveCount = document.querySelector(`.moveCount`);
const peg = document.querySelector(`.peg`);
var peg1 = document.querySelector(`.peg1`);
var peg2 = document.querySelector(`.peg2`);
var peg3 = document.querySelector(`.peg3`);
let discA = document.querySelector(`.discA`);
let discB = document.querySelector(`.discB`);
let discC = document.querySelector(`.discC`);
const resetGame = document.querySelector(`.resetGame`);
const minMoves = document.querySelector(`.minMoves`);

let currentNode 

var moveCounter = 0;

// reset button to reload game
function restartGame(e) {
    location.reload()
}

// This sequence allows disc to be picked up and dragged to the users choice of selected areas.

function hasPrevSib(element) {
    // console.log(element.target.previousElementSibling)
    // console.log(element)
    if (element.target.previousElementSibling){
        return true
    }
    return false
}

function discStart(ev) {
    if (!hasPrevSib(ev)) {
        ev.dataTransfer.setData("text/plain", ev.target.className)
        // console.log(ev.toElement.classList[0])
        let clicked = ev.toElement.classList[0]
        currentNode = document.querySelector(`.${clicked}`)
        // console.log(`is ${currentNode.dataset.value}`)
    }
}

function pegDragEnter(ev) {
    ev.preventDefault();
    // console.log(ev)
}

function pegDragOver(ev) {
    ev.preventDefault();
}

function pegDrop(ev) {
// console.log(ev.target)
function hasChildNodes() {
    for (let i = 0; i < ev.target.childNodes.length; i++) {
        // console.log(ev.target)
        if (ev.target.childNodes[i].dataset && ev.target.childNodes[i].dataset.value < currentNode.dataset.value){

            return false;
        }
    }
    return true
} 
if(hasChildNodes()){

    const className = ev.dataTransfer.getData("text/plain").split(" ")[0]
    if (className) {
        var disc = document.querySelector("." + className);
        ev.target.prepend(disc)
        window.d = ev
        moveCounter++
        moveCount.innerHTML = moveCounter;
        // console.log(ev.target.childNodes)
}
}
else {
    console.error('illegal move, stop cheating!')
}
winGame();
}

// Added Event Listeners with each function, could be more DRY by combining 
discA.addEventListener("dragstart", discStart);
discB.addEventListener("dragstart", discStart);
discC.addEventListener("dragstart", discStart);

discA.addEventListener("click", hasPrevSib);
discC.addEventListener("click", hasPrevSib);
discB.addEventListener("click", hasPrevSib);

peg1.addEventListener("dragenter", pegDragEnter);
peg1.addEventListener("dragover", pegDragOver);
peg1.addEventListener("drop", pegDrop);

peg2.addEventListener("dragenter", pegDragEnter);
peg2.addEventListener("dragover", pegDragOver);
peg2.addEventListener("drop", pegDrop);

peg3.addEventListener("dragenter", pegDragEnter);
peg3.addEventListener("dragover", pegDragOver);
peg3.addEventListener("drop",pegDrop);

// function for win 
function winGame(ev) {
    if (peg3.childNodes.length == 3) {
        window.alert(`Winner winner, chicken dinner!`)
    }
}


// using function to move disc from source to destination
// function (disc, source,destination, intermediate)
// steps to solve 3 disc game 
// source -> dest
// source -> inter
// dest -> inter
// source -> dest
// inter -> source
// inter -> dest
// source -> dest
// solver - strech feature
// discs = 3;
// function gameThreeDiscs (discs, peg1, peg3, peg2) {
//     if(discs === 3) {
//         move (discs - 1, peg1, peg3, peg2);
//     } else if (discs === 2){
//         move (discs - 1, peg1, peg2, peg3);
//     } else {
//         move (discs, peg3, peg2, peg1);
//         move(discs, peg1, peg3, peg2)
//         move(discs -1, peg2, peg1, peg1)
//         move(discs, peg2, peg3, peg1)
//         move(discs, peg1, peg3, peg2)
//     }
//     }