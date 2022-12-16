document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  
  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");

  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
button.onclick = function() {
  let imgSrc;
  let result;
  let q1Score;
  let q2Score;
  let q3Score;
  let q4Score;

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.

  let answer1 = document.querySelector(".q1").value;
  let answer2 = document.querySelector(".q2").value;
  let answer3 = document.querySelector(".q3").value;
  let answer4 = document.querySelector(".q4").value;
    let counter = 0
    // task 7: create a conditional statement for the responses to Question 1 based on the user input.

 if (answer1 === "Reading") {
   counter =  counter + 1 
 }
  else if (answer1 === "Baking") {
    counter = counter + 2
  }
    else if (answer1 === "Partying"){
        counter = counter + 3
      } 
      else {
          counter = counter + 4
        } 
 

    // task 8: create a conditional statement for the responses to Question 2 based on the user input.

if (answer2 === "Curious") {
   counter =  counter + 1 
 }
  else if (answer2 === "Motivated") {
    counter = counter + 2
  }
    else if (answer2 === "Adventurous"){
        counter = counter + 3
      } 
      else {
          counter = counter + 4
        } 


    // task 9: create a conditional statement for the responses to Question 3 based on the user input.

  if (answer3 === "Family") {
   counter =  counter + 1 
 }
  else if (answer3 === "Friends") {
    counter = counter + 2
  }
    else if (answer3 === "Co-workers"){
        counter = counter + 3
      } 
      else {
          counter = counter + 4
        } 

  // question 4 condintionals

if (answer4 === "Banana") {
   counter =  counter + 1 
 }
  else if (answer4 === "Pear") {
    counter = counter + 2
  }
    else if (answer4 === "Carrot"){
        counter = counter + 3
      } 
      else {
          counter = counter + 4
        } 

    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.


 //see line 29 :)
    

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.

if (counter >= 4 && counter <= 5 ){
  displayResult.innerHTML = "You are the 2014 Enesco Home Grown Banana Dachshund!" + '<img src="https://i.imgur.com/g7Qrwv2.jpg">'
}
  else if (counter >= 6 && counter <= 8){
    displayResult.innerHTML = "You are the 2009 Enesco Home Grown Pear Hen Chick!" + '<img src= "https://i.imgur.com/xqWKTUs.jpg">'
  }
  else if (counter >= 9 && counter <= 10){
    displayResult.innerHTML = "You are the 2011 Enesco Home Grown Carrot Goldfish!" + '<img src= "https://i.imgur.com/xTqSwkH.jpg">'
  }
  else if (counter >=11 && counter <=12){
    displayResult.innerHTML = "You are the (RARE) 2004 Enesco Home Grown Cauliflower Sheep!" + '<img src="https://i.imgur.com/S8lErdr.jpg">'
  }
  else if (counter >=13 && counter <=15){
    displayResult.innerHTML = "You are the 2010 Enesco Home Grown Pineapple Porcupine!" + '<img src="https://i.imgur.com/tM0QJ4I.jpg">'
  }
  else {
    displayResult.innerHTML = "You are the (RARE) 2011 Enesco Home Grown Cabbage Elephant!" + '<img src="https://i.imgur.com/EvMZYHH.jpg">'
  }


  };
}