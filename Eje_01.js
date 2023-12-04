// 1. Escriba un programa que reciba como entrada un número entero n, y entregue como salida el n-ésimo número de Fibonacci:
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    
    let fib = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib[n];
}

const n = prompt("Enter the desired number");
const result = fibonacci(n);
console.log(`The ${n}-th Fibonacci number is: ${result}`);
