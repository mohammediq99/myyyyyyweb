/* global lesson */

/*
lesson name : 1=>2=>. Javascript Capture Keyboard Input Tutorial HTML Application Programming
difculity ; very esay 
what we will use : , 
*/
document.onkeydown =  function () {
    'use strict';
     var kp = String.fromCharCode(event.keyCode);
    var kc = event.keyCode ;
    document.getElementById('kp').textContent = kp;
    document.getElementById('kc').textContent = kc;
    document.getElementById('state').textContent ='key pressing is ' + kp;
    if (kp ==='W'){
        alert("put the code to do some thing with W key");
    } else  if (kp ==='A'){
        alert("put the code to do some thing with A key");
    } else  if (kp ==='S'){
        alert("put the code to do some thing with S key");
    } else  if (kp ==='D'){
        alert("put the code to do some thing with D key");
    }
};
document.onkeyup = function () {
  'use strict';
    var kp = String.fromCharCode(event.keyCode);
     document.getElementById('state').textContent ='key pressed is ' + kp;
};
