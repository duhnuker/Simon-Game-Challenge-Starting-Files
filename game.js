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
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {

    userClickedPattern = [];

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

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
    } if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence();
        }, 1000)
    } else {
        playSound("wrong")
        
        $("body").addClass("game-over")
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200)

        $("#level-title").text("Game Over, Press Any Key To Restart");
    }

}