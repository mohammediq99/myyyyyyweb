/* global lesson */

/*
lesson name : calculate teat are charecters
difculity ; very esay 
what we will use : onkeyup  m textContent , if condition , 
*/


var myText = document.getElementById('text'),
    mySpan = document.getElementById("my-span");
myText.onkeyup = function () {
  'use strict';  
    mySpan.textContent = 50 - this.value.length;
  if ( mySpan.textContent < 0 ) {
      mySpan.style.color ="#f00";
  } else {
     mySpan.style.color ="#000"; 
  }
    
};