//Initializing Types [Class, it has one propert and one method]
type bankAccountType = {money:number, deposit: (value:number)=>number};
type depositerType= {name:string,bankAccount:bankAccountType,hobbies:string[]};

//Creation of Method
function depositFunction (value:number) : number{
    return newBankAccount.money + value;
}

//Creation of object
let newBankAccount:bankAccountType = {
    money:2000,
    deposit:depositFunction
}

let newDepositer: depositerType = {
    name:"Anurag Asthana",
    bankAccount:newBankAccount,
    hobbies: ["Snooker","Coding"]
}
console.log(newDepositer.bankAccount.deposit(4000));