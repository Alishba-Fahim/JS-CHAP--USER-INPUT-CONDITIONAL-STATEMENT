
// ------------CHAPTER # 09-11-----------------------------------


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


var city = prompt("Write a city name");
if (city == "karachi" || city == "Karachi" || city == "k");
    document.write("Welcome to city of lights</br></br>");


    //========================================================================================================================================

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender (Male/Female);");

if (gender == "male") {
    document.write(`Good Morning! Sir </br></br>`);
  } else {
    document.write(`Good Morning Ma’am </br></br>`);
  }

  //==========================================================================================================================

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var color = prompt("write color of road traffic signal");
if(color == "Red" || color ==  "red"||  color == "RED" ){
  document.write("Must stop</br></br>");
}
else if(color == "Yellow" || color == "YELLOW"|| color == "yellow"){
    document.write("Ready to move</br></br>");
}
else if(color == "Green" | color == "GREEN" || color == "green"){
    document.write("Move now/<br></br>");
}
else{
    document.write("please enter a right color of road traffic signal.</br></br>");
}

//==========================================================================================================================================

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var car_fuel = prompt(`How many fuel are remaining in litres!`);
if (car_fuel < 0.25) {
    document.write(`Please refill the fuel in your car!</br> `);
} 
else {
    document.write(`No need for refilling! </br></br>`);
  }
  


  //==========================================================================================================================

//   5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
var a = 4;
if (++a ===5){  
  // this condition shows an alert.
    alert("given condition for variable (a) is true");
};


// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
//}

var b = 82;
if (b++ === 83) {
  // this condition does not show an alert.
  alert("given condition for variable (b) is true");
}

// c. var c = 12;

// if (c++ === 13){
// alert("condition 1 is true");
// }

 var c = 12;
 if (c++ === 13){
      // this condition does not show an alert.
 alert("condition 1 is true");
 }

// if (c === 13){
// alert("condition 2 is true");
// }

if (c === 13){
      // this condition shows an alert.
 alert("condition 2 is true");
}


// if (++c < 14){
// alert("condition 3 is true");
// }

if (++c < 14){
    // this condition does not show an alert.
 alert("condition 3 is true");
 }



// if(c === 14){
// alert("condition 4 is true");
// }

if(c === 14){
     // this condition does not show an alert.
 alert("condition 4 is true");
}


// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

 var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
     // this condition shows an alert.
alert("The cost equals");
}


// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
 
if (true){
       // this condition shows an alert.
 alert("True");
 }
 if (false){
 alert("False");
}



// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

 if("car" < "cat"){
      // this condition shows an alert.
 alert("car is smaller than cat");
 }
 //===================================================================================================================

//  6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

document.write("<h2>Mark Sheet: </h2> </br>");
var english = Number.parseInt(prompt("Enter Obtained Marks of English!"));
var Physics = Number.parseInt(prompt("Enter Obtained Marks of Physics!"));
var chemistry = Number.parseInt(prompt("Enter Obtained Marks of Chemistry!"));
var obtained_marks = `${english + Physics + chemistry}`;
var total_marks = prompt("Enter Total Marks");
document.write(`Total Marks: ${total_marks} </br>`);
document.write(`Marks Obtained: ${obtained_marks} </br>`);
var total_per = (obtained_marks / total_marks) * 100;
document.write(`Percentage: ${total_per}% </br>`)

if (total_per >= 80) {
    document.write(`Grade: A-one </br>`);
    document.write(`Remarks: Excellent!</br></br>`);
  } else if (total_per >= 70) {
    document.write(`Grade: A</br>`);
    document.write(`Remarks: Good!</br></br>`);
  } else if (total_per >= 60) {
    document.write(`Grade: B</br>`);
    document.write(`Remarks: You Need to Improve!</br></br>`);
  } else if (total_per < 60) {
    document.write(`Grade: Fail</br>`);
    document.write(`Remarks: Sorry!</br></br>`);
  } else {
    document.write(`You are expelled</br></br>`);
  }
  

  //========================================================================================================================


//   7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secret_number = 4;
var $guess_num = prompt("Guess Secret Number!");
 if($guess_num == 4 ){
   document.write("Bingo! Correct answer.</br></br>");
 }
 else if($guess_num == 5 ){
    document.write("Close enough to the correct answer </br></br>");
}
 else{
    document.write("Better Luck next time.</br></br>");
 }

//===================================================================================================================================

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.



var new_number = prompt(`Write a number?`);

number = parseInt(new_number);

// Check if the number is divisible by 3
if (number % 3 === 0) {
    document.write(`The number ${new_number} is divisible by 3.</br></br>`);
} else {
    document.write(`The number ${new_number} is not divisible by 3.</br></br>`);
}

//=======================================================================================================================================================


// 9. Write a program that checks whether the given input is an
// even number or an odd number

var $number = prompt(`Enter a number?`);

var number2 = parseInt($number);

if (number2 % 2 === 0) {
    document.write(`</br>The number ${number2} is even.</br></br>`);
} else {
    document.write(`</br>The number ${number2} is odd.</br></br>`);
}


//=======================================================================================================================================


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = prompt(`Enter a Tempreture`);
if (temperature >= 40) {
    document.write(`It is too hot outside!</br></br>`);
  } else if (temperature >= 30) {
    document.write(`The Weather today is Normal!</br></br>`);
  } else if (temperature >= 20) {
    document.write(`Today's Weather is cool!</br></br>`);
  } else if (temperature > 10) {
    document.write(`OMG! Today's weather is so Cool!</br></br>`);
  } else {
    document.write(`It is Summer</br></br>`);
  }

  //======================================================================================================


//   11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

var num1 = Number.parseInt(prompt("Enter First Number"));
var num2 = Number.parseInt(prompt("Enter Second Number"));
var Operator = prompt("Enter the operator to perform the operation!");

if (Operator == "+") {
  document.write(`Addition: ${num1 + num2} </br></br>`);
} else if (Operator == "-") {
  document.write(`Subtraction: ${num1 - num2} </br></br>`);
} else if (Operator == "*") {
  document.write(`Multiplication: ${num1 * num2} </br></br>`);
} else if (Operator == "/") {
  document.write(`Division: ${num1 / num2} </br></br>`);
} else if (Operator == "%") {
  document.write(`Modulus: ${num1 % num2} </br></br>`);
} else {
  document.write(`Invalid operation </br></br>`);
}
  

//==============================================================================================================================