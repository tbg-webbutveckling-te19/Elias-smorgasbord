
var rndmArray = ["Adam", 35, false];
var makeArray = [];
var Makearray = new Array();

console.log(rndmArray[2]);
console.log(rndmArray.length);

// Methods to the array object
// push(), pop(), shift(), unshift(), indexOf(), slice(), reverse(),


// push() - appends element at the end of an array

var colors = ["red", "green", "blue"];
console.log(colors);
colors.push("purple")
console.log(colors);

// pop() remove an item at the end of an array

colors.pop();
console.log(colors);

// unshift add an item at the beginning of an array
colors.unshift("yellow");
console.log(colors);

// shift - remove an item at the beginning of an array

colors.shift();
console.log(colors);

// indexOf() find the index of an item in the array

console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("black")); returns -1 because it does not exist

// slice() - copy parts of an array

var fruits = ["banana", "orange", "lemon", "mango", "pear"]

// Use slice to copy the second and third fruit

var citrus = fruits.slice(1,3);
console.log(citrus);

// Exclude the first item but copy the rest
var citrus = fruits.slice(1);
console.log(citrus);

// reverse() - reverse the order in an array
citrus.reverse();
console.log(citrus);


// array groups

var groups = [["A", "B", "C"], [], []]; 
console.log(groups[0][0])


var games = ["Zelda", "Megaman", "Iceclimbers", "Mario"];


for(var i = 0;i <games.length; i++) {
    console.log(games[i])
}

games.forEach(function(game){
    console.log(game);
})

var countries = ["Sweden", "Schweiz", "Finland", "Germany", "Iceland", "Norway"]

countries.forEach(function(country){
    console.log(country)
})


var cars = ["Audi", "Mercedes", "Volvo", "BMW"]

cars.forEach(function(car){
    console.log(car)
})


var nmbrs =[-3,-8,-2]
function max(list){
    biggestNmbr=-Infinity
    list.forEach(function(count){
        if (biggestNmbr<count){
            biggestNmbr=count
        }
    })
    return biggestNmbr
}
console.log(max(nmbrs))