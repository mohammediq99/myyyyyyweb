/* global lesson */

/*
lesson name : Custom data attr from html css ang js
difculity ; intermedite 
what we will use : , 
*/
var rockets , altit , speed , distance;
function activeRockets(){
    rockets = document.querySelectorAll('div');
  
    for (var i =0 ; i<=rockets.length-1 ; i++){
        altit = rockets[i].dataset.alt;
        speed = rockets[i].dataset.speed;
        distance = rockets[i].dataset.distance;
        rockets[i].style.top = altit ="px";
        rockets[i].style.transitionDuration = speed+"s";
        rockets[i].style.left = distance+"px";
        
    }
    
  
    
}
window.addEventListener("load", activeRockets);
//console.log(rockets[1]);