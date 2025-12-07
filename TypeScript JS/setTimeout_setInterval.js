//setTimeout executes once after a delay, and setInterval executes repeatedly at intervals.

setTimeout(() => console.log("Hello after 1s"), 1000);
let id = setInterval(() => console.log("Repeat"), 1000);

// uncomment below to stop setInterval
//clearInterval(id); 