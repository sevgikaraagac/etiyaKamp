function Person(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

function Student(favoriteCourse){
    this.favoriteCourse=favoriteCourse;
}

Student.prototype=new Person("Engin", "Demirog");

var engin = new Student("Programming");
alert(engin.firstName + " " + engin.lastName + " loves " + engin.favoriteCourse);
