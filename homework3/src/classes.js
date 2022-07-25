function Customer(firstName, lastName){  //constructor
    this.firstName=firstName;  //public
    this.lastName=lastName;

    var someField="some value";  //private

    this.sendProduct = function (){  //operation
        alert("Product sent!");
    }
}
var engin= new Customer("Engin", "Demirog")
engin.sendProduct();

