/* global lesson */

/*
lesson name : change Input Live On Input 
difculity ; very esay 
what we will use : onkeyup , textContent , 
*/


var myInput = document.querySelector('input'),
    myContent = document.querySelector('textarea'),
    mytitle = document.querySelector('h2'),
    myContentLive = document.querySelector('p');
myInput.onkeyup = function () {
  'use strict';
mytitle.textContent = this.value;    
};
myContent.onkeyup = function () {
    'use strict';
    myContentLive.textContent = this.value;
    
};
console.log(myInput);
console.log(myContent);
console.log(mytitle);
console.log(myContentLive);