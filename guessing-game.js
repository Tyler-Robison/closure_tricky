function guessingGame() {
    const target = Math.floor(Math.random() * 100);
    let count = 0;
    let timesVictoryTextRead = 0;
    return function (guess) {
        count++;
        if (guess > target) return `${guess} is too high!`;
        if (guess < target) return `${guess} is too low!`;
        timesVictoryTextRead++;
        if (timesVictoryTextRead === 1) return `You win! You found ${target} in ${count} guesses.`
        return 'The game is over, you already won!'
    }
}

module.exports = { guessingGame };
