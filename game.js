const gamePattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];
const randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

