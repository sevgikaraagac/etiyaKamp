//This is a function inside an object
var student = {
    firstName:"Engin",
    lastName:"Demirog",
    fullName: function(){
        return this.firstName+ "" + this.lastName;
    }
}
alert(student.fullName());

//Object constructor
function Customer(first, last, city, country, age){
    this.first=first;
    this.last=last;
    this.city=city;
    this.age=age;
    this.country=country
}
var someCustomer = new Customer("Engin", "Demirog", "Ankara", "Turkey", 30);
alert(someCustomer.first);