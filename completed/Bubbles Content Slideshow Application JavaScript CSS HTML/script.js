/* global lesson */

/*
lesson name : curser by js and css
difculity ; intermedite 
what we will use : , 
*/
function _(x) {return document.getElementById(x);}
var ba, bi=0 , intrval ;
var bca = [
    '<h1>Heading 1</h2><p>Content for heading 1</p>',
        '<h1>Heading 2</h2><p>Content for heading 2</p>',
    '<h1>Heading 3</h2><p>Content for heading 3</p>',
    '<h1>Heading 4</h2><p>Content for heading 4</p>'
];
function bubbles(bi) {
    _('bubblecontent').style.opacity ='0';
    for (var i =0 ; i < ba.length ; i++){ba[i].style.background = "rgba(0,0,0,0.5)";}
    ba[bi].style.background = '#999';
    setTimeout(function () {
       _('bubblecontent').innerHTML = bca[bi];
               _('bubblecontent').style.opacity = 1;

    },300);
}
function bubblesslide () {
    bi++;
    if (bi == ba.length){bi=0;}
    bubbles(bi);
}
window.addEventListener("load", function () {
   ba = _("bubbles").children;
intrval = setInterval(bubblesslide , 1000);
});