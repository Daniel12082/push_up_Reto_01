// 3. Write a program that displays the first m Fibonacci numbers, where m is a number entered by the user:
function fibonacci(m) {
    let sequence = [0, 1];
    
    for (let i = 2; i < m; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    
    return sequence.slice(0, m);
}
const m = parseInt(prompt("Enter the number of elements of the Fibonacci sequence:"));
const fibonacciSequence = fibonacci(m);
console.log(fibonacciSequence);
