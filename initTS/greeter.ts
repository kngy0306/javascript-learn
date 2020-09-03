class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Helo, " + person.firstName + " " + person.lastName;
}

let user = new Student("Kona", "nakada", "yuto");

document.body.innerHTML = greeter(user);
