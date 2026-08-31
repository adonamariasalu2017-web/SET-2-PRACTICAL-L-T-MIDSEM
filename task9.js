let seconds = 5;

// Print the remaining seconds every second
const intervalId = setInterval(() => {
    console.log("Seconds remaining:", seconds);

    if (seconds === 0) {
        clearInterval(intervalId);
    }

    seconds--;
}, 1000);

// Display notification after the countdown ends
setTimeout(() => {
    console.log("Time's up!");
}, 6000);
