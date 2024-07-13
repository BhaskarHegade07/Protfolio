
window.addEventListener('load',()=>{
  const loader = document.querySelector('.loader').style.display = 'none';
  
});

var typed = new Typed('.text-animation', {
    strings: ["FrontEnd Developer", "Web Developer"],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
  });


var curs = document.getElementById("cursor");
document.addEventListener("mousemove",function(event){
    curs.style.left = event.x+20 + "px";
    curs.style.top = event.y+20 + "px";
})