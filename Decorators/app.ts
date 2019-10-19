//Below is a decorator which gets attached to a function
function Logged(constructorFn:Function){
    console.log(constructorFn);
}
@Logged
class PersonDec{
    constructor(){
        console.log("Constructor");
    }
}

//Below is a factory to a decorator which helps in deciding if a decorator should be attached to a constructor
function Logging(value:boolean){
    return value ? Logged:null;
}
@Logging(true) //based on boolean value it is decided if decorator will be attached or not
class CarDec{
}

//Advanced Decorators - associate a print method with all the objects of type plant
function Printable(constructorFn:Function){
    constructorFn.prototype.print=function(){
        console.log(this);
    }
}
@Printable
class PlantDec{
    name="Green Plant"
}
let plantDecObj=new PlantDec();
(<any>plantDecObj).print()//type casting is needed as the method is associated in the decorator function;

//Method Decorator
//These decorators are used for methods, these will execute for a method
//In below example we are creating a method decorator which will make the method non editable

class ProjectDec{
    projectName: string;
    constructor(name:string){
        this.projectName=name;
    }
    @Editable(false)
    calcBudget(){
        console.log(1000);
    }
}
let projectDecObj=new ProjectDec("COM");
projectDecObj.calcBudget(); //This will log 1000

/*projectDecObj.calcBudget=function(){
    console.log(2000) // without decorator in use this will override calcBudget function and print 2000
    //With decorator @Editable and parameter as false 
    //it will not override and print 1000 and make the function readonly
}*/
projectDecObj.calcBudget();

//Creating a method decorator
function Editable(value:boolean){
    return function(target:any,propName:string,descriptor:PropertyDescriptor){
      descriptor.writable=value;
    }
}

//Parameter Decorator 
//This is used for decorating a parameter which we pass to a method

class CourseDec{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    printStudentNumbers(mode:string, @PrintInfo printaAll:boolean){
        if(printaAll){
            console.log(10000);
        }
        else{
            console.log(2000);
        }
    }
}
let courseDecObj=new CourseDec("Super Course");
courseDecObj.printStudentNumbers("abc",true);
courseDecObj.printStudentNumbers("def",false);

//Parameter Decorator 
//We will attach this to printAll property, this will allow to execute some code when this decorator is attached

function PrintInfo(target:any, methodName:string, paramIndex:number){
    console.log(target); //Target to which this decorator is attached
    console.log(methodName) //The name of the method of which parameter is part of
    console.log(paramIndex); //The index at which the parameter is present in the method
}