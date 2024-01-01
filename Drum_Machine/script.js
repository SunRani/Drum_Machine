var one = document.getElementById("Q");
var two = document.getElementById("W");
var three = document.getElementById("E");
var four = document.getElementById("A");
var five = document.getElementById("S");
var six = document.getElementById("D");
var seven = document.getElementById("Z");
var eight = document.getElementById("X");
var nine = document.getElementById("C");

var s1 = "Heater 1";
var s2 = "Heater 2";
var s3 = "Heater 3";
var s4 = "Heater 4";
var s5 = "Clap";
var s6 = "Open HH";
var s7 = "Kick n' Hat";
var s8 = "Kick";
var s9 = "Closed HH";


function playMusic(audio) {
    if (audio === one) {
        document.getElementById("display").innerHTML = s1;
    }
    else if (audio === two) {
        document.getElementById("display").innerHTML = s2;
    }
    else if (audio === three) {
        document.getElementById("display").innerHTML = s3;
    }
    else if (audio === four) {
        document.getElementById("display").innerHTML = s4;
    }
    else if (audio === five) {
        document.getElementById("display").innerHTML = s5;
    }
    else if (audio === six) {
        document.getElementById("display").innerHTML = s6;
    }
    else if (audio === seven) {
        document.getElementById("display").innerHTML = s7;
    }
    else if (audio === eight) {
        document.getElementById("display").innerHTML = s8;
    }
    else if (audio === nine) {
        document.getElementById("display").innerHTML = s9;
    }
    var volumeSlider = document.getElementById('myRange');
    var volume = volumeSlider.value / 100;
    audio.volume = volume;
    audio.play();
}

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyQ") {
    playMusic(one);
  } else if (event.code === "KeyW") {
    playMusic(two);
  } else if (event.code === "KeyE") {
    playMusic(three);
  } else if (event.code === "KeyA") {
    playMusic(four);
  } else if (event.code === "KeyS") {
    playMusic(five);
  } else if (event.code === "KeyD") {
    playMusic(six);
  } else if (event.code === "KeyZ") {
    playMusic(seven);
  } else if (event.code === "KeyX") {
    playMusic(eight);
  } else if (event.code === "KeyC") {
    playMusic(nine);
  }
});

//This displays the volume
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

//Function that displays volume according to slide
slider.oninput = function() {
  output.innerHTML = this.value;
}

var sound = document.getElementsByClassName("clip");
sound.volume = 0;