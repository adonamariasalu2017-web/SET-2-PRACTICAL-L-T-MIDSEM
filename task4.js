// Calculate the seconds remaining between two Date objects

const currentTime = new Date();

// Set a target time 10 seconds from now
const targetTime = new Date(currentTime.getTime() + 10000);

// Calculate the difference in seconds
const secondsRemaining = Math.round(
    (targetTime - currentTime) / 1000
);

console.log("Seconds remaining:", secondsRemaining);
