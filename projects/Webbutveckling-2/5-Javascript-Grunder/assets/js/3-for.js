


console.log("For loop started")
for(var i = 0; i < 10; i++ ) {
    console.log(`Count is ${i}`)
}
console.log("For loop ended")

for(var i = 0; i < 6; i+= 2) {
    console.log(i)
}

var str = "Hello World!";
for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
}



var myArr = ["HTML", "CSS", "JS", 35, 18, true, false];
var len = myArr.length;
for(var i = 0; i < len; i++) {
    console.log(myArr[i]);
}

for(var i = 0; i < 20; i++) {
    if( i % 2 == 0) {
        console.log(i);
    }
}

// Print all numbers between -10 and 19
for(var i = -10; i <= 19; i++) {
    console.log(i);
}

// Print all even numbers between 10 and 40
for(var i = 10; i <= 40; i++) {
    if( i % 2 == 0) {
        console.log(i)
    }
}

// Print all odd numbers between 300 and 333
for( var i = 300; i <= 333; i++) {
    if( i % 2 !== 0) {
        console.log(i)
    }
}

// Print all even numbers dividible by 5 and 3 between 5 and 50

for( var i = 5; i <= 50; i++) {
    if( i % 5 === 0 && i % 3 === 0) {
        console.log(i)
    }
}

function isEven(num) {
    if(num % 2 !== 0) {
        return `false`
    } else {
        return `true`
    }
}

isEven(1712); //true
isEven(1711); //false

// Multiplication tables

for(var i = 0; i <= 10; i++) {
    console.log(i*9);
}

for(var i = 0; i <= 10; i++) {
    console.log(i + ' * 9 = ' + i*9);
}

// Nested For-loops
// Square with 5*5 stars

var squareOutput = document.getElementsByClassName("square") [0];

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 5; j++) {
        squareOutput.innerHTML += "* ";
    }
    squareOutput.innerHTML += "</br>";
}

// Bonus: Use a nested for loop to show the tables
// for every multiplier from 0 t0 10 (100 results total)

var tableOutput = document.getElementsByClassName("table") [0];

for(var i = 0; i <= 10; i++) {
    for(var j = 0; j <= 10; j++) {
        var result = i*j
        tableOutput.innerHTML += ` ${i} * ${j} = ${result}`
    }
    tableOutput.innerHTML += "</br>";
}

// Create an array to hold your top choices (colors,food,games,presidents)
// For each choice, log to the screen a string like: "My #1 Choice is .-.-.

var myFavourite = ["blue", "green", "red", "black", "white"]

for(var i = 0; i < myFavourite.length; i++) {
    console.log(`My #${i + 1} color is ${myFavourite[i]}`)
}


var myFavourite = ["blue", "green", "red", "black", "white"]

for(var i = 0; i < myFavourite.length; i++) {
    var num = i + 1;
    var suffix;
    if(num == 1) {
        suffix = "st";
    } else if(num == 2) {
        suffix = "nd"
    } else if(num == 3) {
        suffix = "rd"
    } else {
        suffix = "th"
    } 
    console.log(`My ${num} ${suffix} color is ${myFavourite[i]}`)
}






