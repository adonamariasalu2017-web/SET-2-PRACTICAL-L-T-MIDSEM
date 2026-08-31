// Node.js timer methods used:
// setTimeout()
// setInterval()
// clearInterval()
// clearTimeout()

let seconds = 5;

const countdown = setInterval(() => {
    console.log("Seconds remaining:", seconds);

    if (seconds === 0) {
        clearInterval(countdown);
        console.log("Countdown finished!");
        return;
    }

    seconds--;
}, 1000);
