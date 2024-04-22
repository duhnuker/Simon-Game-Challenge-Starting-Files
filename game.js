const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

function nextSequence() {
    //Select a random Coloured Button
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //Animation
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

nextSequence();

//User Button Selection
$(".btn").click(function() {
    const userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

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
