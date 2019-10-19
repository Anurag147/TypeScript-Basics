"use strict";
function depositFunction(value) {
    return newBankAccount.money + value;
}
var newBankAccount = {
    money: 2000,
    deposit: depositFunction
};
var newDepositer = {
    name: "Anurag Asthana",
    bankAccount: newBankAccount,
    hobbies: ["Snooker", "Coding"]
};
console.log(newDepositer.bankAccount.deposit(4000));
