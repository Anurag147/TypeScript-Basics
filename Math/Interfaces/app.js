"use strict";
var PersonClass = (function () {
    function PersonClass() {
    }
    PersonClass.prototype.greetPerson = function (lastName) {
        console.log("Hello," + this.firstName + " " + lastName);
    };
    ;
    return PersonClass;
}());
var personClassObject = new PersonClass();
personClassObject.firstName = "Shru";
personClassObject.greetPerson("Asthana");
function ChangeNamePerson(person) {
    person.firstName = "Anna";
}
var personP = {
    firstName: "Anurag",
    age: 27,
    Address: "Pune",
    greetPerson: function (lastName) {
        console.log("Hello," + this.firstName + " " + lastName);
    }
};
ChangeNamePerson(personP);
personP.greetPerson("Asthana");
var agedP = {
    firstName: "Anu",
    age: 29,
    greetPerson: function (lastName) {
        console.log("Hi" + this.firstName + " " + lastName);
    }
};
console.log(agedP);
