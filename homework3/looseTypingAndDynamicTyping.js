//Loose Typing
// var number=10;
// number="Ten";
// alert(number);

//dynamicTyping
var customer={
id:1,
contactName:"Engin Demirog"
}
customer.country="Turkey";
customer.sayHello = function(){
alert("Hello"+ this.contactName);
}
customer.sayHello();