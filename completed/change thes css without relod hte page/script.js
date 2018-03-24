/* global lesson */

/*
lesson name : change the theme for the web site with out reload it 
difculity ; very esay and big changes 
what we will use : , 
*/
function swapStyleSheet(sheet) {
  'use strict';  
    document.getElementById('pagestyle').setAttribute('href' , sheet);
};