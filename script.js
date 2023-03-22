document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  
  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");

  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
button.onclick = function() {
  let imgSrc;
  let result;
  let q1Score;
  let q2Score;
  let q3Score;
  let q4Score;

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
  // question 4 condintionals
    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
  if (counter >= 4 && counter <= 5 ){
  displayResult.innerHTML = "You are the 2014 Enesco Home Grown Banana Dachshund!" + '<img src="https://i.imgur.com/g7Qrwv2.jpg" class="resultPic">'
}
  else if (counter >= 6 && counter <= 8){
    displayResult.innerHTML = "You are the 2009 Enesco Home Grown Pear Hen Chick!" + '<img src= "https://i.imgur.com/xqWKTUs.jpg" class="resultPic">'
  }
  else if (counter >= 9 && counter <= 10){
    displayResult.innerHTML = "You are the 2011 Enesco Home Grown Carrot Goldfish!" + '<img src= "https://i.imgur.com/xTqSwkH.jpg" class="resultPic">'
  }
  else if (counter >=11 && counter <=12){
    displayResult.innerHTML = "You are the (RARE) 2004 Enesco Home Grown Cauliflower Sheep!" + '<img src="https://i.imgur.com/S8lErdr.jpg" class="resultPic">'
  }
  else if (counter >=13 && counter <=15){
    displayResult.innerHTML = "You are the 2010 Enesco Home Grown Pineapple Porcupine!" + '<img src="https://i.imgur.com/tM0QJ4I.jpg" class="resultPic">'
  }
  else {
    displayResult.innerHTML = "You are the (RARE) 2011 Enesco Home Grown Cabbage Elephant!" + '<img src="https://i.imgur.com/EvMZYHH.jpg"class="resultPic">'
  }


 //see line 29 :)
    

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.



  };
} 

let answerPic1List = ["readingPic" , "curiousPic" , "familyPic" , "bananaPic"];
let answerPic2List = ["bakingPic" , "motivatedPic" , "friendsPic" , "pearPic"];
let answerPic3List = ["partyingPic" , "adventurousPic" , "coworkersPic" , "carrotPic"];
let answerPic4List = ["instrumentPic" , "relaxedPic" , "myselfPic" , "lettucePic"];

answerPic1List[0] = document.querySelector(".readingPic");
answerPic1List[1] = document.querySelector(".curiousPic");
answerPic1List[2] = document.querySelector(".familyPic");
answerPic1List[3] = document.querySelector(".bananaPic");
answerPic2List[0] = document.querySelector(".bakingPic");
answerPic2List[1] = document.querySelector(".motivatedPic");
answerPic2List[2] = document.querySelector(".friendsPic");
answerPic2List[3] = document.querySelector(".pearPic");
answerPic3List[0] = document.querySelector(".partyingPic");
answerPic3List[1] = document.querySelector(".adventurousPic");
answerPic3List[2] = document.querySelector(".coworkersPic");
answerPic3List[3] = document.querySelector(".carrotPic");
answerPic4List[0] = document.querySelector(".instrumentPic");
answerPic4List[1] = document.querySelector(".relaxedPic");
answerPic4List[2] = document.querySelector(".myselfPic");
answerPic4List[3] = document.querySelector(".lettucePic");

let counter = 0

answerPic1List.forEach(pic => {
  pic.onmouseover = function() {
    if (pic.style.border !== "4px solid red") {
  pic.style.border = "4px solid #bfbfbf" }
};
 pic.onmouseout = function(){
   if (pic.style.border !== "4px solid red"){
  pic.style.border = "none" } 
};
pic.onclick = function(){ 
counter = counter + 1
pic.style.border = "4px solid red" };
});

answerPic2List.forEach(pic => {
  pic.onmouseover = function() {
    if (pic.style.border !== "4px solid red") {
  pic.style.border = "4px solid #bfbfbf" }
};
 pic.onmouseout = function(){
   if (pic.style.border !== "4px solid red"){
  pic.style.border = "none" } 
};
pic.onclick = function(){ 
counter = counter + 2
pic.style.border = "4px solid red" };
});

answerPic3List.forEach(pic => {
  pic.onmouseover = function() {
    if (pic.style.border !== "4px solid red") {
  pic.style.border = "4px solid #bfbfbf" }
};
 pic.onmouseout = function(){
   if (pic.style.border !== "4px solid red"){
  pic.style.border = "none" } 
};
pic.onclick = function(){ 
counter = counter + 3
pic.style.border = "4px solid red" };
});

answerPic4List.forEach(pic => {
  pic.onmouseover = function() {
    if (pic.style.border !== "4px solid red") {
  pic.style.border = "4px solid #bfbfbf" }
};
 pic.onmouseout = function(){
   if (pic.style.border !== "4px solid red"){
  pic.style.border = "none" } 
};
pic.onclick = function(){ 
counter = counter + 4
pic.style.border = "4px solid red" };
});
console.log(counter);


