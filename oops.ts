class Person{
    name: string;
    private type:string;
    protected age:number;

    constructor(name:string, public userName:string)
    {
        this.name=name;
    }
    public PrintAge(age:number)
    {
        this.age=age;
        console.log(this.age);
        this.PrintType("Solid");
    }
    private PrintType(type:string)
    {
        this.type=type;
        console.log(this.type);
    }
}
let person =new Person("Anurag","Anura90");
console.log(person);
person.PrintAge(29);
//person.PrintType("Solid"); This won't work now as method is now made private, 
//it wil be accessible with in the classs

//Inheritance - Private properties or methods are non accessible from child classes
//Protected properties and methods are used for accessing from child classes

class Asthana extends Person{
    constructor(userName:string){
        super("Asthana",userName);
    }
}
let asthana=new Asthana("Anura90");
console.log(asthana)

//Getters and Setters
class Plant{
    private _species:string = "Default";
    get species()
    {
        return this._species;
    }
    set species(value: string)
    {
        if(value.length>3)
        {
            this._species=value;
        }
        else
        {
            this._species="Default";
        }
    }
}
let plant=new Plant();
console.log(plant.species);
plant.species="AB";
console.log(plant.species);
plant.species="Green Plant";
console.log(plant.species);

//Static Properties and Methods
class Helpers
{
    static PI:number=3.14;
    static calculateCircleArea(radius:number)
    {
        return this.PI * (radius*radius);
    }
}
console.log(2* Helpers.PI);
console.log(Helpers.calculateCircleArea(4));

//Abstract Classes
abstract class Project
{
    projectName:string="Default";
    budget:number=1000;

    abstract changeName(name:string):void;

    calcbudget(){
        return this.budget*2;
    }
}
class ITproject extends Project{
    changeName(name:string):void{
        this.projectName=name;
    }
}
let newPrj=new ITproject();
console.log(newPrj);
newPrj.changeName("EYCOM");
console.log(newPrj);

//singleton design pattern
class OnlyOne {
    private static instance:OnlyOne;
    private constructor (name:string){

    }
    static GetInstance()
    {
        if(!OnlyOne.instance)
        {
            OnlyOne.instance=new OnlyOne("This is a string");
        }
        else
        {
            return OnlyOne.instance;
        }
    }
}
//Only one instance will be created for both
let obj=OnlyOne.GetInstance();
let obj1=OnlyOne.GetInstance();
