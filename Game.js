const circle=document.querySelector(".cir");

function move(x,y){
  circle.style.left=`${x-12}px`;
  circle.style.top=`${y-12}px`;
}

document.addEventListener("touchmove", (e)=>{
  const touches=e.touches[0];
  move(touches.clientX,touches.clientY);
})

circle.addEventListener("click", ()=>{document.addEventListener("mousemove", (e)=>{
  move(e.clientX,e.clientY);
})})


function getRandomColor(){
  var hex="123456789ABCDEF"
  var col="#"
  for(let i=0;i<6; i++){
    col+=hex[Math.floor(Math.random() * 16)];
  }
  return col;
}

function cc(){
  circle.style.backgroundColor=getRandomColor();
  requestAnimationFrame(cc)
}
requestAnimationFrame(cc);
