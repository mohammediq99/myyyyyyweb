/* global lesson */

/*
lesson name : calculate teat are charecters
difculity ; very esay 
what we will use : onkeyup  m textContent , if condition , 
*/

function changeColor(color) {
    'use strict';
    var x= document.getElementById("color");
    x.style.backgroundColor = color;

}
function myFunction(event) {
    'use strict';
    document.querySelector('p').textContent = event.target.tagName;
}