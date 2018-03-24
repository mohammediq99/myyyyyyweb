/* global lesson */

/*
lesson name : show passwor
difculity ; very esay 
what we will use : if , set attr , this 
*/


var  myButton = document.querySelector('button'),
    myPassword = document.querySelector('input');
myButton.onclick = function () {
    'use strict';
    if ( this.textContent ==='show password'){
    myPassword.setAttribute('type', 'text');
        this.textContent = "hide password";
    } else if (this.textContent ==='hide password'){
        myPassword.setAttribute('type', 'password');
        this.textContent = "show password";
    }
    
};