/* global lesson */

/*
lesson name : Genrate seral number
difculity ; advansce
what we will use : Math , substr  , 
*/

function generateserail() {
    'use strict';
    var chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        seraillengh = 20,
        rserail = '',
        i,
        randomNumber,
        p =  document.getElementById('ser');
    for (i; i < 20; i = i + 1) {
        randomNumber = 25 ;
        rserail = rserail + chars.substring(randomNumber, randomNumber + 1);
    }
    p.innerHTML = rserail;
    
    alert(randomNumber);
}