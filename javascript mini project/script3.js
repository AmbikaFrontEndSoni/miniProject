var main=document.querySelector('.main');
var box=document.querySelector('.box');

main.addEventListener("mousemove",function(arrow){
    box.style.left=arrow.x+"px"
    box.style.top=arrow.y+"px"
})
