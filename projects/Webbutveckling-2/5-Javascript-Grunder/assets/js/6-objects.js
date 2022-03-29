/*
***************************************
Create your own code - movieDB
***************************************
*/
 
// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Iterate through the array with a forEach and print out something that looks like:
/* 
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/


var movies = [
    {
        title: "Titanic",
        rating: 4,
        hasWatched: false
    },

    {
        title: "True Memoirs of an International Assasin",
        rating: 5, 
        hasWatched: true
    },

    {
        title: "Tenet",
        rating: 4,
        hasWatched: true
    },

    {
        title: "Once upon a time in Hollywood",
        rating: 1,
        hasWatched: false
    },


];

moviesWatchlist = document.getElementById("moviesWatchlist");
movies.forEach(function(movies){
    if (movies.hasWatched == true) {
        moviesWatchlist.innerHTML += ` <br> You have seen: ${movies.title} <br> Rating:${movies.rating} stars`;
    }
    if (movies.hasWatched == false) {
        moviesWatchlist.innerHTML += ` <br> You have not seen: ${movies.title} <br> Rating:${movies.rating} stars`;
    }

})

var div = document.getElementById("animals");
var animalBtn = document.getElementsByClassName("animalBtn");
var aDog = document.getElementById("audioDog");
var aCat = document.getElementById("audioCat");
var aWolf = document.getElementById("audioWolf");
var aCow = document.getElementById("audioCow");



// var animalSound = {
//     dog:'Woof',
//     cat:'mjau',
//     wolf: 'aoo',
//     cow: 'moo',
// }

var animalSound = {
    dog: function() {
        div.innerHTML = "Woof";
        aDog.play();
    },

    cat: function() {
        div.innerHTML = "Meow";
        aCat.play();

    },
    wolf: function() {
        div.innerHTML = "Aouu";
        aWolf.play();
    },
    cow: function() {
        div.innerHTML = "Muuu";
        aCow.play();
    },
}

for(var i = 0; i < animalBtn.length; i++) {
    animalBtn[i].addEventListener("click", function() {
        switch(this.innerHTML) {
            case 'Dog': {
                animalSound.dog();
                break;
            }
            case 'Cat': {
                animalSound.cat();
                break;
            }
            case 'Wolf': {
                animalSound.wolf();
                break;
            }
            case 'Cow': {
                animalSound.cow();
                break;
            }
        }
    })
}

// animalSounds = document.getElementById('animalSounds');

// animalSounds.innerHTML += `<br> Dog ${animalSound.dog} <br> Cat ${animalSound.cat} <br> Wolf ${animalSound.wolf} <br> Cow ${animalSound.cow} <br>`



addFriend = document.getElementById("addFriend");
removeFriend = document.getElementById("removeFriend");

var friends = ['John Doe', 'Craig Johnson', 'Jimmy Smith'];


var friendModule = [

    {
        addF: friends.push(addFriend.value),

    },

    {
        removeF: friends.shift(removeFriend.value),
        
    },

];
addFriend.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        friends.push(addFriend.value);
    }
});
                 /* Har inte listat ut hur jag använder mig av friendModule, förutom det är det löst*/
removeFriend.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        friends.shift(removeFriend.value);
    }
});


