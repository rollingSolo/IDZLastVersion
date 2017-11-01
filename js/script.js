$(document).ready(function(){
  $('.sl-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true
  });
});


let button = document.getElementById('btn'); 

function getRandomDeg() { 

return Math.ceil(Math.random() * 360 ); 
// return Math.ceil((Math.random() * 180) - 90); 
} 

function setBodyFilter(deg){ 
document.body.style.filter = 'hue-rotate(' + deg + 'deg)'; 
console.log(deg); 
} 

function scrollToTop(){ 
window.scrollTo(0,0); 
} 
button.addEventListener('click',function(){ 
setBodyFilter(getRandomDeg()); 
scrollToTop(); 

});