// Get countdown duration from the command-line argument
let seconds = parseInt(process.argv[2]);

// Check if a valid number was provided
if (isNaN(seconds)) {
    console.log("Please provide the countdown duration.");
    console.log("Example: node task5.js 10");
    process.exit();
}

console.log(`Countdown started for ${seconds} seconds.`);
console.log('Type "cancel" and press Enter to stop the countdown.');

const timer = setInterval(() => {
    console.log("Seconds remaining:", seconds);

    if (seconds === 0) {
        clearInterval(timer);
        console.log("Time's up!");
        process.exit();
    }

    seconds--;
}, 1000);

// Listen for user input from the terminal
process.stdin.on("data", (input) => {
    const userInput = input.toString().trim().toLowerCase();

    if (userInput === "cancel") {
        clearInterval(timer);
        console.log("Countdown cancelled!");
        process.exit();
    }
});
