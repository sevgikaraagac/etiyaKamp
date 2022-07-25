function sendEmail(personInterface){
    var to = personInterface.eMail;
    var name = personInterface.name;

    var send = function(){
        alert("Mail sent to: " +name + "/" + to);
    }
    send();

}

function Customer(name, eMail){
    this.name=name;
    this.eMail = eMail;
    //Other staff
}

function Employee(name, eMail){
    this.name=name;
    this.eMail = eMail;
    //Other staff
}
var someCustomer = new Customer("engin", "engin@goliq.net");
sendEmail(someCustomer)
var someEmployee = new Employee("salih", "salih@goliq.net");
sendEmail(someEmployee)

