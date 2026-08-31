// V8 executes JavaScript code, while libuv handles asynchronous
// operations such as timers and I/O. This allows the timer to run
// without blocking the execution of other JavaScript code.

console.log("Countdown application started");

setTimeout(() => {
    console.log("Timer finished!");
}, 3000);

console.log("This message appears before the timer finishes.");
