/* global lesson */

/*
lesson name :Javascript Arabic Tutorials - Hide Placeholder On Input Focus
difculity ; very esay 
what we will use : setAttr , get Attr;
*/
var myInput = document.getElementById("myInput");
myInput.onfocus = function () {
    'use strict';
    // Stroe placehloder on backap
    
    this.setAttribute('data-place',this.getAttribute('placeholder'));
    //Empty PlaceHolder
    this.setAttribute('placeholder','');
}

myInput.onblur = function () {
    'use strict';
    // Stroe placehloder on backap
    
    this.setAttribute('placeholder',this.getAttribute('data-place'));
    //Empty PlaceHolder
    this.setAttribute('data-place','');
}

