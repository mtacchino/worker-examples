const worker = new Worker('worker.js');

console.log(`Starting worker at: ${new Date().toTimeString()}`);
worker.postMessage({ number: 45 });

worker.onmessage = event => {
    console.log(`Worker done at: ${new Date().toTimeString()}`);
    console.log(`Result is: ${event.data}`);
};

setInterval(() => {
    console.log('Main thread doing other stuff...');
}, 1000);