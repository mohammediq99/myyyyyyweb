/* global lesson */

/*
lesson name : 
difculity : hard
what we will use: , 
*/
function _(id){
    'use strict';
return (document.getElementById(id));
}
function pupulate(s1,s2){
 
    'use strict';
    
    var s1 = document.getElementById(s1),
        s2= document.getElementById(s2);
    s2.innerHTML ="";
if(s1. == "chev"){
    var optionArray = [, 'choverlate 512','choverlate 442','choverlate-2018'];
alert("Iam Choosed");
}
for (option in optionArray){
    var pair = optionArray[option];
    var newoption = document.createElement("option");
    newoption.textContent = pair;
    s2.options.add(newoption);
}
}