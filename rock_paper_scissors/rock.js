let btn = document.querySelector("#btn1");
let rules = document.querySelector(".rules");
let isVisible = false;

btn.onclick = () => {
    isVisible = !isVisible; // Toggle visibility state
    rules.style.visibility = isVisible ? "visible" : "hidden";
    console.log(`Rules are now ${isVisible ? "visible" : "hidden"}`);
};
// Selecting elements
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const msg = document.getElementById("msg");
const choices = document.querySelectorAll(".choice");

// Scores
let userScore = 0;
let compScore = 0;

// Choices array
const choicesArray = ["rock", "paper", "scissors"];

// Function to get computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choicesArray[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return "draw";
    }
    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "scissors" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "rock")
    ) {
        return "user";
    }
    return "computer";
}

// Function to update scores and display the message
function playGame(userChoice) {
    const compChoice = getComputerChoice();
    const winner = determineWinner(userChoice, compChoice);

    if (winner === "user") {
        userScore++;
        msg.textContent = `You chose ${userChoice}, computer chose ${compChoice}. You win! 🎉`;
    } else if (winner === "computer") {
        compScore++;
        msg.textContent = `You chose ${userChoice}, computer chose ${compChoice}. Computer wins! 💻`;
    } else {
        msg.textContent = `You both chose ${userChoice}. It's a draw! 🤝`;
    }

    // Update scores
    userScoreSpan.textContent = userScore;
    compScoreSpan.textContent = compScore;
}

// Adding event listeners to choices
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id; // Get the user's choice (id of the clicked element)
        playGame(userChoice);
    });
});
