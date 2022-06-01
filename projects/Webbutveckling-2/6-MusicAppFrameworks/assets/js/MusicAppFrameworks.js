$(document).ready(function(){
    // var yellow = document.getElementById("yellow");
    var addVolume = document.getElementById("volAdd");
    var minVolume = document.getElementById("volMin");
    var volumeChange = document.getElementById("volume");
    var music = document.querySelector("#music");
    var movingBar = document.getElementById("movingBar")
    // var restart = document.getElementById("restart");
    var restartNow = document.getElementById("restartNow")

    function musicBar() {
        music.value += 1
    }
    var sound = new Howl({
        src: ['../assets/lib/audio/As You Fade Away - NEFFEX.mp3'],
        volume: 0.5,
    })
    

    $(`#yellow`).on("click", function(){
        sound.play();
    })
    var mTime
    $(`#play`).on("click", function(){
        sound.play();  
        mTime = setInterval(musicBar,1000)
    })

    $(`#pause`).on("click", function(){
        sound.pause();
        clearInterval(mTime); 
    })

    $("#volAdd").on("click", function(){
        var vol = sound.volume(); 
        vol += 0.1; 
        if(vol > 1){
           vol = 1; 
        }
        sound.volume(vol)
    })
    $("#volMin").on("click", function(){
        var vol = sound.volume(); 
         vol -= 0.1; 
        if(vol < 0){
            vol = 1;
        }
        sound.volume(vol)
    }); 

    $("#restart").on("click", function(){
        sound.src.currentTime = 1
        sound.pause();
        sound.play();
    })
    addVolume.addEventListener("click", function() {
        volumeChange.value += 0.1;
    })
    minVolume.addEventListener("click", function() {
        volumeChange.value -= 0.1;
    })



    // yellow.addEventListener("click",function(){
    //     yellow.setAttribute('src','../assets/images/rsz_1pausebutton.png')
    //     yellow.classList.add("modify")
    // })










})

   


