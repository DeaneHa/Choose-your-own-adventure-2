/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title");
let storyOpening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optiononescreen = document.querySelector(".option-one-screen");
let optiontwoscreen = document.querySelector(".option-two-screen");
let optiononeending = document.querySelector(".option-one-end");
let optiontwoending = document.querySelector(".option-two-end");
let greeting = document.querySelector("p");
let input = document.querySelector("input");
let start = document.querySelector(".start");




title.innerHTML = "A New Day";



optionOne.onclick=function () {   
  title.style.display="none";
storyOpening.style.display="none";
buttons.style.display="none";
  optiononescreen.style.display="block";
    optiononeending.style.display="none";
};


optionTwo.onclick=function(){
  title.style.display="none";
  storyOpening.style.display="none";
  buttons.style.display="none";
    optiontwoscreen.style.display="block";
    optiontwoending.style.display="none";
};

optiononescreen.onclick=function(){
optiononescreen.style.display="none";
  optiononeending.style.display="block";

};


optiontwoscreen.onclick=function(){
optiontwoscreen.style.display="none";
  optiontwoending.style.display="block";
};
  
start.onclick=function(){
let name=input.value;
  storyOpening.style.display="block";
  buttons.style.display="block";
  title.innerHTML=`<h1> Hi ${name}! </h1>`
console.log(name);}; 
