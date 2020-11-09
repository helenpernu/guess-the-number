const secretNumber = randomInt()

function randomInt() {
    return Math.floor(Math.random() * 100)
}

function getUserGuess() {
    const stringValue = document.getElementById("user-input").value
    return parseInt(stringValue, 10)
}

document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const guess = getUserGuess()
        console.log(guess)

        if (guess < secretNumber){
            setMessage("Too low!")
        }

        else if (guess > secretNumber){
            setMessage("Too high!")
        }

        else{
            setMessage("You win!")
        }
        clearInput()
    }
})

function setMessage(msg) {
    document.getElementById("message").innerText = msg
}

function clearInput() {
    document.getElementById("user-input").value = ""
}

