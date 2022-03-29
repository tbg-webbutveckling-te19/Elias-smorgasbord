
var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var scoreCap = document.getElementById("scoreCap");
var setCap = document.getElementById("setCap");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var win = document.getElementById("win");

var scoreP1 = 0;
var scoreP2 = 0;
setCap.value = 0;
scoreCap.innerHTML =`Playing to ${setCap.value}`;

p1.addEventListener("click", function() {
    if(setCap.value == 0) {
        scoreP1 = 0;
        win.innerHTML = "Please choose how many points you need to win";
        exit();
    }
    scoreP1 += 1;
    scoreCap.innerHTML = `Playing to ${setCap.value}`;
    p1Score.innerHTML = `${scoreP1}`;
    if(scoreP1 == setCap.value) {
        p1Score.style.color = "green";
        win.innerHTML = `Player 1 Won! <br>To play again press reset</br>`;
    } 
})


p2.addEventListener("click", function() {
    if(setCap.value == 0) {
        scoreP2 = 0;
        p2Score.style.color = "green";
        win.innerHTML = "Please choose how many points you need to win";
        exit();
    }
    scoreP2 += 1;
    scoreCap.innerHTML = `Playing to ${setCap.value}`;
    p2Score.innerHTML = `${scoreP2}`;
    if(scoreP2 == setCap.value) {
        p2Score.style.color = "green";
        win.innerHTML = `Player 2 Won! <br>To play again press reset</br>`;
    }
    
})


reset.addEventListener("click", function(){
    restart();
})
function restart() {
    scoreP1 = 0; 
    scoreP2 = 0;
    p1Score.innerHTML = "0";
    p2Score.innerHTML = "0";
    win.innerHTML = "";
    p2Score.style.color = "black";
    p1Score.style.color = "black";
    scoreCap.innerHTML ="Playing to:"
}