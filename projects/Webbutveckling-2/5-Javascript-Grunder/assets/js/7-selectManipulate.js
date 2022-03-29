
// select an element and then manipulate it

// select
// var h1 = document.querySelector("h1");

// Manipulate
// h1.style.color = "red";

// Toggle Background Color

// select
var bg = document.getElementsByTagName("body")[0];
var isGreen = false; 

// manipulate

// var interval = setInterval(function() {
//     if(isGreen) {
//         bg.style.backgroundColor = "white";
//     } else {
//         bg.style.backgroundColor = "green";
//     }
//     isGreen = !isGreen;
// }, 1500);

// // Clear Interval

// bg.addEventListener("dblclick", function() {
//     clearInterval(interval);
// })

// select by ID
var element = document.getElementById("highlight");
console.log(element);
console.dir(element);

// select by classname
var elements = document.getElementsByClassName("bolded"); //Nodelist
console.log(elements);
console.dir(elements);

// Select By tagname
var eles = document.getElementsByTagName("li"); //Nodelist
console.log(eles);
console.dir(eles);

//Select By queryselector
//selects a string argument and returns the first element that matches a given css style selector

var queryTag = document.querySelector(".bolded"); // Only return the first element
console.log(queryTag);
console.dir(queryTag);

//select by queryselectorAll
//Takes a string argument and returns a list of elements that matches a given css style selector

var queryTagAll = document.querySelectorAll("h1"); //Nodelist
console.log(queryTagAll);
console.dir(queryTagAll);


var alt1 = document.getElementById("first");
var alt2 = document.getElementsByClassName("special")[0];
var alt3 = document.getElementsByTagName("p")[0];
var alt4 = document.querySelector("p");
var alt5 = document.querySelectorAll("p")[0];


// DOM Manipulation 


var element = document.querySelector("#highlight");

// Manipulate with WET CODE
// element.style.color = "blue";
// element.style.border = "10px solid black";
// element.style.fontSize = "55px";
// element.style.backgroundColor = "#eee";


element.classList.add("some-class");


// select
var tag = document.querySelector("h1");

// add a class
tag.classList.add("another-class");

// Remove a class
tag.classList.remove("another-class");

// toggle a class
tag.classList.toggle("another-class");



// Manipulating text and content 

// select
var pEle = document.querySelector(".test");

pEle.textContent = "This is an <strong>awesome<strong> paragraph";
pEle.innerHTML = "This is an <strong>awesome<strong> paragraph";

// chaining methods 
document.getElementsByTagName("h1")[0].textContent = "Chaining Methods";
document.getElementsByTagName("h1")[0].innerHTML = "<i>Chaining Methods</i>";

// Manipulating attributes

var link = document.querySelector("a");

// get attr of link, href

console.log(link.getAttribute("href")); //http://google.com

// change href attribute
link.setAttribute("href", "http://tannbergsskolan.nu");


// change img source 
var img = document.getElementsByTagName("img")[0];
img.setAttribute("src","assets/images/bk3Me.jpg");
img.setAttribute("alt","separation of concerns");
img.setAttribute("title", "SOC");


// Making things interactive with events
// select
var btn = document.querySelector("button");

// manipulate
btn.addEventListener("click", () => {
    document.querySelector("button + p").innerHTML = "YEAY I've been clicked!"
})

// select 
var lis = document.querySelectorAll("li"); //nodelist

// Manipulate 
// Loop through all the list items and add an event listener
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        // this.style.textDecoration = "line-through";
        this.classList.toggle("todo");
    })
}



