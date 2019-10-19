function GenericMethod<T>(value:T)
{
    return value;
}
console.log(GenericMethod<number>(27));
console.log(GenericMethod<string>("Hello"));

//Built in Generics - Array
let numArray:Array<number>=[1,2,3,4,5];
numArray.push(6); //This is allowed
//numArray.push("anu") This is not allowed;

//Print array
function PrintAll<T>(args:T[])
{
    args.forEach((x)=>console.log(x));
}
PrintAll<string>(["A","B","C"]);

//Generic Class
class SimpleMath<T extends number | string>{
    baseValue:T;
    multiplyValue:T;
    calculate():number{
        return +this.baseValue * +this.multiplyValue;
    }
}
let spObject=new SimpleMath<number>();
spObject.baseValue=2;
spObject.multiplyValue=4;
console.log(spObject.calculate());

//Generic Class with two different types
class SimpleMathMixed<T extends number | string, U extends number | string>{
    baseValue:T;
    multiplyValue:U;
    calculate():number{
        return +this.baseValue * +this.multiplyValue;
    }
}
let spObjectMixed=new SimpleMathMixed<number,string>();
spObjectMixed.baseValue=2;
spObjectMixed.multiplyValue="4";
console.log(spObject.calculate());

//Exercise

class MyMap<T extends number | string>{
private map: {[Key:string]:T}={};
    setItem(key:string, item:T){
          this.map[key]=item;
    }
    printMap(){
        for(let kp in this.map)
        {
            console.log(kp, this.map[kp])
        }
    }
    getItem(key: string) {
      return this.map[key];
    }
}
const numberMap = new MyMap<number>();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
