# webworker-example
A basic example of a web worker using a blocking (fibonacci) function

The `main.js` instantiates the `worker.js` file as a worker, then calls this worker to find the 45th fibonacci number. The main thread continues to log to the console while the blocking fibonacci function is run.

Once the fibonacci function is complete, the worker posts a message to the main thread to log the result.
