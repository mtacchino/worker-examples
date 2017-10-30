self.onmessage = event => {
  console.log('Worker received event from main thread..');
  const result = fibonacci(event.data.number)
  self.postMessage(result);
};

// Naively calculate the nth fibonacci number
function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
