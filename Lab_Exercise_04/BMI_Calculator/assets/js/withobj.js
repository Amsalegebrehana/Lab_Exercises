let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers:[],
    weight: "",
    height: "",
    ageCalc: function() {
        return this.age = new Date().getFullYear() - this.birthYear;

    },
    checkVote: function(){
        let tempAge = this.ageCalc();
        if(tempAge>= 18){
            this.isEligibleToVote = true;
        }
    },
    calcBmi: function(){
        let bmi = this.weight/ Math.pow(this.height,2);
        console.log(bmi);
        if(bmi < 18.5){
            console.log("UnderWeight.");
        }
        else if(18.5 < bmi < 24.9){
            console.log("Normal");
        }
        else if( 25 < bmi < 29.9){
            console.log("OverWeight");
        }
        else if(bmi> 30){
            console.log("Obese");
        } 

    }

};
personProfile.firstName = prompt("Enter your name");
personProfile.lastName = prompt("Enter your Last name");
personProfile.birthYear = prompt("Enter your birthyear");
personProfile.job = prompt("Your proffesion ");
personProfile.weight = prompt("Enter your weight in kg");
personProfile.height = prompt("Enter your height in m");

personProfile.ageCalc();
personProfile.checkVote();

(function(){
    console.log("Full Name" + personProfile.firstName +" " + personProfile.lastName);
    console.log("Proffesion" + personProfile.job);
    console.log("Age"+ personProfile.age);
    console.log("Is Eligible to vote" + personProfile.isEligibleToVote);

});
personProfile.calcBmi()
