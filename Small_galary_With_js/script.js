/* global lesson */

/*
lesson name : nav bar on js not in css like the last time 
difculity ; hard

what we will use : just style on functions 
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
function OpenDiv(){
    'use strict';
    var thediv = document.getElementById("MyDiv");
    thediv.style.transform ="scale(1)";
}
function CloseDiv(){
    'use strict';
    var thediv = document.getElementById("MyDiv");
    thediv.style.transform ="scale(0)";
}
function galary(id) {
    'use strict'; 
        var imgattr = document.getElementById(id).getAttribute('src');
    document.getElementById('p').setAttribute("src",imgattr);
    
    
}