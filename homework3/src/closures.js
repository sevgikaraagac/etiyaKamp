// var counter =0;
// function add(){
//     counter+=1;
//     alert(counter)
// }

//  function someOtherFunction(){
//      counter+=10;
//  }

 var add = (function(){
     var counter = 0;
     return function(){
         return counter+=1;
     }
 })();