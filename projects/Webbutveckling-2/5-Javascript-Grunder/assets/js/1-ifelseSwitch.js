// Greater than

var age = 18;
if(age >= 18) {
    console.log("Du får ta körkort.");
} else {
    console.log("Du är för ung för att ta körkort.");
}

// If something is equal to
// var lesson = "Math";
// if(lesson === "English") {
//     console.log("We have " + lesson);
// } else if(lesson === "History") {
//     console.log("We have " + lesson);
// } else if(lesson === "Biology") {
//     console.log("We have " + lesson)
// } else {
//     console.log("We have spare time.");
// }

var user = document.getElementById("userInput");
var subject = document.getElementById("showSubject");

user.addEventListener("keydown", function(e) {
    // console.log(e.key);
    if(e.key === "Enter") {
        if(user.value.indexOf("En") === 0 || user.value.indexOf("en") === 0) {
            console.log("We have English")
        }else if(user.value.indexOf("Hi") === 0 || user.value.indexOf("hi") === 0) {
            console.log("We have History")
        }else if(user.value.indexOf("Bi") === 0 || user.value.indexOf("bi") === 0) {
            console.log("We have Biology")
        } else {
            console.log("We have spare time.")
        }
        subject.innerHTML = user.value;
        user.value = ""
    }
})
var showWeather = document.getElementById("showWeather")
var isSunny = Math.random(); 
if(isSunny < .5) {
    showWeather.innerHTML = "Put on some warm clothes today."
} else {
    showWeather.innerHTML = "Put on some shorts today"
}

var d = new Date();

var showTime = document.getElementById("time");

// showTime.innerHTML = `${d.getHours()}.${d.getMinutes()}.${d.getSeconds()}`; 
showTime.innerHTML = d.toLocaleTimeString();


if(d.getHours() <= 12) {
    console.log("Good Morning!")
} else {
    console.log("Good evening!")
}

if(d.getHours() < 14) {
    if(d.getMonth() > 9 || d.getMonth() < 2) {
        console.log("Go to sleep and wake up when its spring")
    } else {
        console.log("Good Morning!")
    }
} else {
    console.log("Good Evening!")
}

// Switch statement

var grade = "A";
switch(grade) {
    case "A": console.log("Great Job! You got an A!")
    break;

    case "B": console.log("Good job! You got a B!")
    break;

    case "C": console.log("Allright! You got a C!")
    break;

    case "D": console.log("Good. You got a D")
    break;

    case "E": console.log("Good! You got an E!")
    break;

    case "F": console.log("You did not pass!")
    break;
    default: 
        console.log("An error has occured")


}

var day = document.getElementById("showDay")
var currentday = d.getDay()

switch(currentday) {
    case  0: 
        showDay.innerHTML = "Det är söndag"
        break; 
    case  1: 
        showDay.innerHTML = "Det är Måndag"
        break;
    case  2: 
        showDay.innerHTML = "Det är Tisdag"
        break; 
    case  3: 
        showDay.innerHTML = "Det är onsdag"
        break; 
    case  4: 
        showDay.innerHTML = "Det är Torsdag"
        break; 
    case  5: 
        showDay.innerHTML = "Det är Fredag"
        break;
    case  6: 
        showDay.innerHTML = "Det är lördag"
        break;
    default: 
        showDay.innerHTML = ("An error has occured");
}

// Control the Square

var square = document.getElementById("square"); 


square.setAttribute("style",
    "position: absolute; bottom:100px; left: 640px;");

var innerWidth = window.innerWidth - 50;
var innerHeight = window.innerHeight - 50;

console.log(innerWidth)
console.log(innerHeight)
document.addEventListener("keydown", function(e) {
    switch(e.key) {
        case "ArrowLeft":
            keyLeft();
            break;
        case "ArrowRight":
                keyRight();
                break;
            
            break;
        case "ArrowUp":
            var bottomNumbers = square.style.bottom.replace("px","");
                var bottom = Number(bottomNumbers);
                var speed = 5;
                if(bottom < innerHeight) {
                    square.style.bottom = `${bottom + speed}px`
                }
            break;
        case "ArrowDown":
            var bottomNumbers = square.style.bottom.replace("px","");
                var bottom = Number(bottomNumbers);
                var speed = 5;
                if(bottom > 0) {
                    square.style.bottom = `${bottom - speed}px`
                }
            break;
        
    }
})

// Functions 

function keyLeft() {
    var leftNumbers = square.style.left.replace("px","");
    var left = Number(leftNumbers);

     var speed = 5;
     if(left > 0) {
     square.style.left = `${left - speed}px`
    
    }
}

function keyRight() {
    var leftNumbers = square.style.left.replace("px","");
     var left = Number(leftNumbers);
    var speed = 5;
    if(left < innerWidth) {
    square.style.left = `${left + speed}px`
                
    }
                
}