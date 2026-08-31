// Function that returns a Promise
function checkTimeLeftPromise(seconds) {
    return new Promise((resolve, reject) => {

        // Check for invalid input
        if (seconds < 0) {
            reject("Invalid countdown time!");
            return;
        }

        // Simulate an asynchronous delay
        setTimeout(() => {
            resolve(`Remaining time: ${seconds} seconds`);
        }, 2000);
    });
}

console.log("Checking remaining time...");

// Handle successful result and errors
checkTimeLeftPromise(10)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
