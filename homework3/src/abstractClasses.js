var Person = {
    name:"None",
    email:"None",
    sendEmail:function(){
        alert("Mail sent to:" + this.name + "/" + this.email);
    }
}

function Customer(name, email){
    this.name=name;
    this.email=email;
    //Other staff
}

function Employee(name, email){
    this.name=name;
    this.email=email;
    //Other staff
}

Customer.prototype=Person;
var someCustomer = new Customer("engin", "engin@goliq.net");
someCustomer.sendEmail();

Employee.prototype=Person;
var someEmployee = new Employee("salih", "salih@goliq.net");
someEmployee.sendEmail();