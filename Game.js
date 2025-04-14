const circle=document.querySelector(".cir");

function move(x,y){
  circle.style.left=`${x-12}px`;
  circle.style.top=`${y-12}px`;
}

document.addEventListener("touchmove", (e)=>{
  const touches=e.touches[0];
  move(touches.clientX,touches.clientY);
})


