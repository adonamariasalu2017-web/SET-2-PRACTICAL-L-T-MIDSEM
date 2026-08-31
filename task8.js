// Function that checks the remaining time asynchronously
function checkTimeLeftCallback(seconds, callback) {
    // Simulate a delay of 2 seconds
    setTimeout(() => {
        callback(seconds);
    }, 2000);
}

console.log("Checking remaining time...");

// Call the function and display the result using a callback
checkTimeLeftCallback(10, (remainingTime) => {
    console.log("Remaining time:", remainingTime, "seconds");
});
