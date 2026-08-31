let seconds = 5;

const timer = setInterval(() => {
    console.log("Seconds remaining:", seconds);

    // Debugging:
    // I observed the value of seconds while running the program.
    // The original bug used seconds++, which increased the value,
    // so the countdown never reached zero.
    // I fixed the bug by changing seconds++ to seconds--.

    if (seconds === 0) {
        clearInterval(timer);
        console.log("Countdown finished!");
        return;
    }

    seconds--;
}, 1000);
