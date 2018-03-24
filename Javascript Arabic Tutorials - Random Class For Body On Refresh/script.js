/* global lesson */

/*
lesson name : Random  Class on body
difculity ; very esay 
what we will use :array , math.floor , math.random , 
*/

var classlist1=["class-one","class-two","class-three","class-four"],
    randomKey = Math.floor( Math.random() * classlist1.length) ;
//console.log(classlist1[0]);
console.log(Math.floor( Math.random() * classlist1.length));
document.documentElement.setAttribute('class',classlist1[randomKey]);










