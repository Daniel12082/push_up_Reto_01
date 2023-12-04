// 2. Write a program that receives an integer as input and indicates whether it is a Fibonacci number or not:
function isFibonacciNumber(num) {
    let a = 0;
    let b = 1;

    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === num;
}

const number = prompt("Enter an integer: ");
const isFibonacci = isFibonacciNumber(number);

console.log(`${number} is ${isFibonacci ? 'a' : 'not a'} Fibonacci number.`);
