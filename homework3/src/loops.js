// for(var i=0; i<=10; i++){
//     alert(i);
// }

//For loop with break
// for(var i=0; i<=10; i++){
//     if(i==5){
//         break;
//     }
//     alert(i);
// }

// //For loop with continue
// for(var i=0; i<=10; i++){
//     if(i==5){
//         continue;
//     }
//     alert(i);
// }

//While
//  var number=1;
//  while(number<10){
//      alert(number);
//      number=number+1;
//  }

//do-While
var age=prompt("your age?");
var result="";
do{
    result+=age;
    result+="-";
    age--;
}
while(age>0)
    alert(result);