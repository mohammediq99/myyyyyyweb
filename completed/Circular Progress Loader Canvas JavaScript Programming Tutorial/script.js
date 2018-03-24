/* global lesson */

/*
lesson name : file upload progrees in canvsns  
difculity ;  esay 
what we will use : , 
*/
var ctx = document.getElementById('my_canvas').getContext('2d'),
    amoutloaded = 0,
    start = 4.72,
    cw = ctx.canvas.width,
    ch = ctx.canvas.height,
    diff; 
function prgress () {
  'use strict';
 diff = ((amoutloaded / 100) *Math.PI * 2 * 10).toFixed(2);
    ctx.clearRect(0,0,cw,ch);
    ctx.lineWidth =10;
    ctx.fillStyle = '#09f';
    ctx.strokeStyle ='#09f';
    ctx.textAlign = 'center';
    ctx.fillText(amoutloaded+'%',cw*.5,ch*.5 , cw);
    ctx.beginPath();
    ctx.arc(35,35, 30 , start, diff/10+start,false);
     ctx.stroke();
    amoutloaded+=1;
    if (amoutloaded > 100) {
        clearInterval(simulate);
        
    }
}

var simulate = setInterval (prgress, 50 );
