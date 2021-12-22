var count = 0;
console.log("While loop started")
while(count < 10) {
    console.log(`Count is ${count}`)
    count++;
}
console.log("''''''While loop ended")

// do while
var counter = 0;
console.log("Do while has started")
do {
    console.log(`Counter is ${counter}`);
    counter++;
} while(counter < 5) {
    console.log(`Do while has ended`)
}

// While playing card is not equal to hearts - Continue to draw a new card

var btnDraw = document.getElementById("draw");
var congratsText = document.getElementById("congratsText")
btnDraw.addEventListener("click", function() { 
    // Lista ut vilken färg
    do {
        var cardSuit = Math.floor(Math.random()*4);
        // Lista ut vilken valör det är
        var cardValue = Math.floor((Math.random() *14)+1);
        if(cardValue === 1) {
            cardValue += 1
        } else if(cardValue === 11) {
            cardValue = "Jack"
        }
         else if(cardValue === 12) {
            cardValue = "Queen"
        
        } else if(cardValue === 13) {
            cardValue = "King"
        } else if(cardValue === 14) {
            cardValue = "Ace"
        }
        switch(cardSuit) {
            case 0: 
                console.log(`You drew ${cardValue} of Hearts`)
                break;
            case 1: 
                console.log(`You drew ${cardValue} of Spades`)
                break;
            case 2: 
                console.log(`You drew ${cardValue} of Clubs`)
                break;
            case 3: 
                console.log(`You drew ${cardValue} of Diamonds`)
                break;
            default: 
                console.log(`No such card in this deck`)
        }
         
    }   
    while(cardSuit !== 0) {
        console.log(`Congratulations! You drew a ${cardValue}`);
        congratsText.setAttribute("src", "https://images.fineartamerica.com/images/artworkimages/medium/1/hearts-deck-of-cards-custom-home-fashions-transparent.png")
    }
    
    // Beroende på färg ska något göras
    // Så länge som färgen inte är hjärter ska korten fortsätta dras
})