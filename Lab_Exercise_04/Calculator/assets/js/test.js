
let numbers = new Array();
let number1;
let number2;
let option;
let answer;

let add = function(numbers){
    let sum;
    sum = 0;
    numbers.forEach(number => {
        sum += parseInt(number);
    });
    return sum
};
let Average = function(numbers){
    let sum;
    sum = 0;
    numbers.forEach(number => {
        sum += parseFloat(number);
    });
    return sum / numbers.length;

};
let Substract = function(number1, number2){
    return number1 - number2
};
let multiply = function(numbers){
     let mult;
     mult = 1;
     numbers.forEach(number => {
         mult *= number;
     });

 };

 let  divide = function(number1, number2){
     if(parseInt(number2 == 0)){
         return "Undifiend."
     }
     else{
         return number1/number2;
     }
 };

 let Maximum = function(numbers){
    
    numbers.forEach(number => {
        maxx = Math.max(number)
            
    });
    return maxx;

 };

 let Minimum = function(numbers){
   
    numbers.forEach(number => {
    minm = Math.min(number)
            
    });
    return  minm
};



let Square = function(number1){

    return Math.Square(number1);
};



 (function (){

    option = prompt("What do you want to do \n 1. Add \n 2. Multiply \n 3. Substract \n 4. Divide \n 5. Maximum \n 6. Minimum \n 7, Average \n 8, Square");

    if (option == 1){
        let choice = prompt("How many numbers you wnat to add? ");
        for(let i = 0; i < parseInt(choice); i++){
            numbers[i] = prompt ("Enter number: " + (i + 1));
        }
        answer = add(numbers);
        console.log(answer);
    }
    else if (option == 2){
        let choice = prompt("How many numbers you wnat to multiply? ");
        for(let i = 0; i < parseInt(choice); i++){
            numbers[i] = prompt ("Enter number: " + (i + 1));
        }
        answer = multiply(numbers);
        console.log(answer);
    }
    else if (option == 3){
        number1 = prompt("Enter first number: ");
        number2 = prompt("Enter second number: ");
        answer = subtract(number1, number2);
        console.log(answer);
    }
    else if (option == 4){
        number1 = prompt("Enter first number: ");
        number2 = prompt("Enter second number: ");
        answer = divide(number1, number2);
        console.log(answer);

    }
    else if (option == 5){

        let choice = prompt("How many numbers you want to find Maximum? ");
        for(let i = 0; i < parseInt(choice); i++){
            numbers[i] = prompt ("Enter number: " + (i + 1));
        }
        answer = Maximum(numbers);
        console.log(answer);

    }
    else if (option == 6){
        let choice = prompt("How many numbers you want to find Maximum? ");
        for(let i = 0; i < parseInt(choice); i++){
            numbers[i] = prompt ("Enter number: " + (i + 1));
        }
        answer = Minimum(numbers);
        console.log(answer);
    }
    else if (option == 7){
        let choice = prompt("How many numbers you want to find Average? ");
        for(let i = 0; i < parseInt(choice); i++){
            numbers[i] = prompt ("Enter number: " + (i + 1));
        }
        answer = Average(numbers);
        console.log(answer);
    }
    else if (option == 8){
        choice = prompt("Number to make it square");
       
        answer = Square(numbers);
        console.log(answer);
    }
    else{
        console.log("Invalid Input");
    }
 })();
