var clock = document.getElementById("clock");
var date = document.getElementById("date");
var hiddenSection = document.getElementsByClassName("hiddenSection")[0];
var bg = document.getElementById("bg");

function myClock(){
    var d = new Date();
    clock.innerHTML = d.toLocaleTimeString();
    setInterval(myClock,1000)
}

myClock();

bg.addEventListener("keydown", function(e) {
    if(e.key === "d" || e.key == "D") {
        hiddenSection.classList.add("showDate");
        var d = new Date();
        hiddenSection.innerHTML = `${d.getDay()}/${d.getMonth()}-${d.getFullYear()}`
    }
    if(e.key == "c" || e.key == "C") {
        hiddenSection.classList.remove("showDate");
    }
});

