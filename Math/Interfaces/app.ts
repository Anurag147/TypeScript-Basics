//Interface defines a contract, here it mandates the first name property
interface NamedPerson{
    firstName:string;
    age?:number; //This property is optional
    [propName:string]:any;
    //I dont know it can be any other property which name we dont know at this stage
    greetPerson(lastName:string):void; //Interface method
}

class PersonClass implements NamedPerson{
    firstName:string;
    greetPerson(lastName:string)
    {
        console.log("Hello,"+this.firstName+ " " +lastName);
    };
}

let personClassObject=new PersonClass();
personClassObject.firstName="Shru";
personClassObject.greetPerson("Asthana");

//Method using interface as argument 
function ChangeNamePerson(person:NamedPerson)
{
    person.firstName="Anna";
}
let personP={
    firstName:"Anurag",
    age: 27,
    Address:"Pune",
    greetPerson(lastName:string)
    {
        console.log("Hello,"+this.firstName+ " " +lastName);
    }
};
ChangeNamePerson(personP);
personP.greetPerson("Asthana");

//Interface Inheritance
interface AgedPerson extends NamedPerson{
    age:number;
}
let agedP:AgedPerson = {
    firstName:"Anu",
    age:29,
    greetPerson(lastName:string){
        console.log("Hi"+this.firstName+ " "+lastName);
    }
};
console.log(agedP);