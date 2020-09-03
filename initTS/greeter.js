var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Helo, " + person.firstName + " " + person.lastName;
}
var user = new Student("Kona", "N", "yuto");
document.body.innerHTML = greeter(user);
