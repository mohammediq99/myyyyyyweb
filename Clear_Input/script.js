/* global lesson */

/*
lesson name : Clear Input placeholer on fucus
difculity ; very esay 
what we will use : onkeyup  m textContent , if condition , 
*/

var input = document.getElementById('input');
input.onfocus = function () {
    'use strict';
    if ( this.placeholder == "Type your name ") {
        this.placeholder = "";
    }
    
    
}
input.onblur = function () {
    'use strict';
    if ( this.placeholder == "") {
        this.placeholder = "Type your name ";
    }
    
    
}