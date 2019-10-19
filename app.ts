console.log("TS Works");

//String variable
let myName='Anurag';
//myName=1;
//This conversion will not work as TypeScript compiler detects the variable is of string type

//Integer variable
let myID=1;
//myID='1';
//This conversion will not work as TypeScript compiler detects the variable is of int type

//Boolean variable
let myHobbies=false;
//myHobbies='1';
//This conversion will not work as TypeScript compiler detects the variable is of boolean type

//Assigning Types explicitly
let myRealAge:number=28;

//Initializing Arrays
let arrNumber:number[]=[1,2,3,4,5]
let arrStrings:string[]=["A","B","C","D","Es"]
//arrNumber=['C','D']
//This conversion is not allowed

//Tuples
let myAddress: [string,number]=["Kunal Icon",6];
//Order is important in Tuple, so below will not work
//let myAddress1: [string,number]=[6,"Kunal Icon"];

//Enums
enum Color {
    Gray,
    Blue,
    Green
}
let enmColor:Color = Color.Green;

//any type, you can change type from string to int, it uses similar to javascript type conversion
let car:any="BMW"
car=1;

//Functions 
//Using type script you can make the function to return only desired type as opposed to javascript where any type could be returned
function ReturnName():string
{
    return myName;
}
function PrintName():void
{
    console.log(myName);
}

//Argument Types - argument can also be constrained to use a type as opposed to plain JS
function multiply(num1:number,num2:number):number
{
    return num1*num2;
}

//function types - 
//The difference between TS and JS here is you can create a variable as function type and apply arguments and return type to it
let myFuncVar: (val1:number, val2:number)=> number;
myFuncVar=multiply;
console.log(myFuncVar(1,2));

//Creation of object in TyeScript

//Standard javscript object
let myObject = {
    name: "Anurag",
    age:28
}
//Typescript object
let myTSObject: {name:string ,age:number} =
{
    name:"Anurag",
    age:28,
}

//Creation of a type

type complexType = {data:number[],name:string};
let complexObject:complexType = {
    data: [1,2,3,4,5],
    name:"Anurag",
}

//Union Types - You can assign any of the type for a variable based on types defined
let myRealAgeUpdate: string | number = 27;
myRealAgeUpdate="27";
//Both will work but you cant assign this variable to boolean

//Check types at run time
let finalValue=38
if(typeof finalValue == "number")
{
    console.log("This is a number");
}

//After enabling strict null checks to true, we cannot asssign null to any varaible of other type
let myNotNullableNumber=12;
//myNotNullableNumber=null; This code will not work
//But below will work as null is also a type
let myNullableNumber=null

const maxValue=100;
//maxValue=101; non changeable constant values here
let someString="abc"

function PrintString():void{
    //console.log(someString); //This will be undefined as let variables are block scopes
    let someString="def";
    console.log(someString);
}

//Arrow functions
const someFuncVal=(number1:number,number2:number):number =>
{
    return number1+number2;
}
console.log(someFuncVal(1,4));

//Default Parameters
const countDown = (start:number=20):void =>
{
    console.log(start);
    while(start>0)
    {
        start--;
    }
    console.log(start);
}
countDown();

//Spread operator - It is used to spread items in array to a list
console.log("Spread Operator")
let numberArr:number[]=[1,2,3,4,5]
//console.log(Math.max(numberArr)); //This code will not work as number array is not allowed here 
//But it will work when we use spread operator
console.log(Math.max(...numberArr));

//The REST operator, will combine inputted number list to an array
console.log("Rest Operator")
const makeArray = (...args:number[]) =>{
    return console.log(args);
}
makeArray(1,2,3,4,5);

//Destructuring Arrays - Can convert arrays data to multiple object and index n all are managed internally
console.log("Destructuring Arrays");
let StringArr:string[]=["Anurag","Asthana"]
let [firstName,surName]=StringArr;
console.log(firstName, surName);

//Destructuring Objects - Can convert arrays data to multiple object and index n all are managed internally
console.log("Destructuring objects");
let userData = {usrName:"Anu",age:27};
let {usrName,age}=userData;
console.log(usrName,age)

//Template Literals - Used for making complex strings
console.log("Template Literals");
let userName="Anurag";
let complexString = `This is a heading
This is a body
This is your name:${userName}`;
console.log(complexString);
