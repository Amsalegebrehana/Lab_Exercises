
let option;
let accounts = new Array();
let currentBalance;
let maxWithdraw = 1000000;
let minWithdraw = 25;

let account1 = {
    name: "First Account",
    currentBalance: 100
}

let account2 = {
    name: "Second Account",
    currentBalance: 200
}

let accept = function(accountName){
    if(accountName === 'First Account'){
        return account1;
    }
    else if(accountName === 'Second Account'){
        return account2;
    }
}
let withdrawal = function(currentBalance, amount){
    if (amount < minWithdraw){
        console.log("You are required to withdraw a minimum of 25.")
    }
    else if (amount > maxWithdraw){
        console.log("Maximum withdrawal is 1000000");
    }
    else{
        currentBalance -= amount;
        return currentBalance;
    }
};
let deposit = function(currentBalance, amount){
    currentBalance += parseInt(amount);
    return currentBalance;
};

let transfer = function( account1, account2, amount){
    account1.currentBalance = account1.currentBalance - parseInt(amount);
    account2.currentBalance = account2.currentBalance + parseInt(amount);

    return account1, account2;
};

let knowBalance = function(account){
    return account.currentBalance;
};
 

(function (){
    option = prompt("Choose operation: \n 1, withdrawal \n 2, deposit \n3, Transfer   \n4, Balance");

    if(option == 1){
        input = prompt("Account names \n 1,First Account \n 2, Second Account \n Enter account name: ");
        account = accept(input);
        amount = prompt("Enter amount: ")
        account.currentBalance = withdrawal(account.currentBalance, amount);
        console.log("Your balance is " + account.currentBalance)
    }
    else if(option == 2){
        input = prompt("Account names \n 1,First Account \n 2, Second Account \n Enter account name: ");
        account = accept(input);
        amount = prompt("Enter amount: ")
        account.currentBalance = deposit(account.currentBalance, amount);
        console.log("Your balance is " + account.currentBalance)
    }
    else if(option == 3){
        input = prompt("Account names \n 1,First Account \n 2, Second Account \n Enter account name: ");
        accoun1 = accept(input);
        input2 = prompt("Enter account name: ");
        accoun2 = accept(input2);
        amount = prompt("Enter amount: ")
        accoun1, accoun2 = transfer(accoun1, accoun2, amount);
        console.log("First Account balance is " , accoun1.currentBalance)
        console.log("Second Account balance is " , accoun2.currentBalance)
  
    }
    else if(option == 4){
        input = prompt("Account names \n 1,First Account \n 2,Second Account \n Enter account name: ");
        account = accept(input);
        console.log("Your balance is" + account.balance);
    }
    else{
        console.log("Invalid Input!");
    }

})();
