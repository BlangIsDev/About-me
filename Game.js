const circle=document.querySelector(".cir");

function move(x,y){
  circle.style.left=`${x-12}px`;
  circle.style.top=`${y-12}px`;
}

document.addEventListener("touchmove", (e)=>{
  const touches=e.touches[0];
  move(touches.clientX,touches.clientY);
})

document.addEventListener('touchmove', (e)=>{
  if (e.touches.length > 1) return; // Allow multitouch gestures
  e.preventDefault();
}, { passive: false });

