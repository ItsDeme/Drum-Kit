var sound1 = new Audio("sounds/tom-1.mp3");
var sound2 = new Audio("sounds/tom-2.mp3");
var sound3 = new Audio("sounds/tom-3.mp3");
var sound4 = new Audio("sounds/tom-4.mp3");
var sound5 = new Audio("sounds/crash.mp3");
var sound6 = new Audio("sounds/kick-bass.mp3");
var sound7 = new Audio("sounds/snare.mp3")

var length = document.querySelectorAll("button").length;

for (var i = 0; i < length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key){
        case "w":
            sound1.play();
            break;
        case "a":
            sound2.play();
            break;
        case "s":
            sound3.play();
            break;
        case "d":
            sound4.play();
            break;
        case "j":
            sound5.play();
            break;    
        case "k":
            sound6.play();
            break;  
        case "l":
            sound7.play();
            break;
                  
            default:

       }
}

function buttonAnimation(currentKey){
    var actButton = document.querySelector("." + currentKey);
    actButton.classList.add("pressed");
    setTimeout(function() {
        actButton.classList.remove("pressed");
    }, 100)
}