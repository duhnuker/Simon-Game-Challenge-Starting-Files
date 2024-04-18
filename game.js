const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

function nextSequence() {
    //Select a random Coloured Button
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //Animation
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    //Audio
    const audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

nextSequence();


