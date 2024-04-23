const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

//Start Game on keypress
const level = 0;
const gameStarted = false;

$(document).keypress(function() {
    if (!gameStarted) {
       $("level-title").text("Level " + level);
       nextSequence();
       gameStarted = true;
    }
});

//User Button Selection
$(".btn").click(function() {
    const userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence() {

    level++;
    $("level-title").text("Level " + level)

    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //Animation
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}


//Sequence and Usersounds
function playSound(name) {
    const audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//Animation
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}