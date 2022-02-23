

function twinkle() {
    console.log("Blinka lilla stjärna där")
}


twinkle();

// Arguments
// Declare a function
function square(num) {
    console.log(num*num);
}

// Call a function
square(4);
square(10);

function area(length, width) {
    console.log(`The area is: ${Math.floor(length * width)}cm`)
}

area(10,5);
area(5.4,19);

function sayHello(name) {
    console.log(`Hello there, ${name}`);
}

sayHello(`Elias`);
// sayHello(prompt("What is your name?"));

function greet(p1, p2, p3, p4) {
    console.log(`Hello, ${p1}, ${p2}, ${p3}, ${p4}`)
}

greet(`Elias`, `valter`, `Natanael`,`adrian`);

var resultOfSquare = document.getElementsByClassName("result")[0];
function toSquare(x) {
   return x * x;
}

resultOfSquare.innerHTML = `4 squared is ${toSquare(4)}`;

function quadrupleMe(x) {
    return x * 4; 
}

resultOfSquare.innerHTML = `<p> Quadruple this ${quadrupleMe(5)} </p>`;

var storeFunc =  quadrupleMe(7);
resultOfSquare.innerHTML = `${storeFunc * storeFunc}`;


// Higher order function
// H1
var showTime = document.getElementById("showTime");

// Start Button

var start = document.getElementById("startTime");

// Stop button
var stopp = document.getElementById("stopTime");

// global var for clear interval 
var myInterval;

// function 
function myTimer(){
    var d = new Date();
    showTime.innerHTML = d.toLocaleTimeString();
}

myTimer();



// Start button event listener 

start.addEventListener("click", function() {
    myInterval = setInterval(myTimer,1000);
})

function stopTimer() {
    clearInterval(myInterval);
}

// Stop button event listener

stopp.addEventListener("click", function() {
    stopTimer();
})


var fortuneButton = document.getElementById("fortune");

job = ["Graphic Designer", "Chef", "Pilot", "Photographer", "Programmer", "Web developer", "Manager", "Engineer"]
place = ["Sweden", "Ukraine", "France", "Russia", "USA", "Switzerland", "Denmark", "Norway"]
wife = ["Kajsa", "Kristina", "Erika", "Cecilia", "Maria", "Marianne", "Elin", "Karin"]
children = [1,2,3,4,5,6,7,8,9,10]

function tellFortune() {
    fortuneButton.innerHTML = (`I will work as a ${job[Math.floor(Math.floor(Math.random()*job.length))]} in ${place[Math.floor(Math.floor(Math.random()*place.length))]} with ${wife[Math.floor(Math.floor(Math.random()*wife.length))]} and have ${children[Math.floor(Math.floor(Math.random()*children.length))]} children`)
}

fortuneButton.addEventListener("click", function(){
    tellFortune();
})

