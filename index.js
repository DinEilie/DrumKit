// Detect mouse clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML
        playSound(buttonInnerHTML);
        playAnimation(buttonInnerHTML);
    });
}

// Detect mouse clicks
document.addEventListener("keydown", function (event){
    playSound(event.key);
    playAnimation(event.key);
});

// Play the correct sound
function playSound(value){
    switch (value) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
    }
}

// Play the correct animation
function playAnimation(value){
    var btn = document.querySelector("." + value);
    btn.classList.add("pressed");
    setTimeout(function (){btn.classList.remove("pressed");}, 100);
}