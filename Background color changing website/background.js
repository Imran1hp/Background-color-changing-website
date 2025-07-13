let body = document.getElementById("body");
let red = document.querySelector(".red-btn");
let blue = document.querySelector(".blue-btn");
let green = document.querySelector(".green-btn");
let black = document.querySelector(".black-btn");
let white = document.querySelector(".white-btn");


red.addEventListener('click',()=>{
changeColor("red");
removeColor(0);

})
blue.addEventListener('click',()=>{
    changeColor("blue");
    removeColor(1);
})
green.addEventListener('click',()=>{
    changeColor("green");
    removeColor(2)
})
black.addEventListener('click',()=>{
  changeColor("black");
  removeColor(3)
})

white.addEventListener('click',()=>{
  changeColor("white");
  removeColor(4);
})

function changeColor  (color)
{
body.classList.add(`${color}-bg`)

}
function removeColor(i){
const remColor =['red','blue','green','black','white'];
delete remColor[i];
remColor.forEach((col)=>{
body.classList.remove(`${col}-bg`)

})
}