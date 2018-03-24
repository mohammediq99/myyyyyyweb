/* global lesson */

/*
lesson name : check if ulr hask contains text 
difculity ; very esay 
what we will use : window.location.hash , indexof , substring 

*/
// method one
if (window.location.hash) {
    if (window.location.hash.indexOf('Mohammad') === 1){ // 0 == hash 
       document.documentElement.style.backgroundColor = '#000';
        
    }
    
}else {
console.log ("bad");
}

// Method Tow 
if (window.location.hash) {
    var hash = window.location.hash.substr(1);
     if ( hash == 'Mohammad' ){ // 0 == hash 
       document.documentElement.style.backgroundColor = '#F00';
        
    }
    
    
}else {
console.log ("bad");
}