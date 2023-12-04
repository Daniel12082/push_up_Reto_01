<div align="center" id="top"> 
</div>

<h1 align="center">Reto_01</h1>

## :dart: About ##

<p align="center">The Fibonacci sequence begins with 0 and 1, and the following terms are always the sum of the previous two.</p>

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/daniel12082/push_up_Reto_01

# Access
$ cd push_up_Reto_02

#Open Terminal

# Exercise 01
$ cd Eje_01

* Write a program that receives as input an integer n, and delivers as output the n- sth Fibonacci number as output

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
const n = prompt("Ingrese le numero deseado");
const result = fibonacci(n);
console.log(`El ${n}-ésimo número de Fibonacci es: ${result}`);


# Exercise 02

*Write a program that receives an integer as input and indicates whether or not it is a Fibonacci number

$ cd Eje_02

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

const number = prompt("Ingrese un numero entero: ");
const isFibonacci = isFibonacciNumber(number);

console.log(`${number} ${isFibonacci ? 'es' : 'no es'} un número de Fibonacci.`);

# Exercise 03

* Write a program that displays the first m Fibonacci numbers, where m is a number entered by the user

$ cd Eje_03

function fibonacci(m) {
    let sequence = [0, 1];
    
    for (let i = 2; i < m; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    
    return sequence.slice(0, m);
}

const m = parseInt(prompt("Ingrese el número de elementos de la secuencia de Fibonacci:"));
const fibonacciSequence = fibonacci(m);
console.log(fibonacciSequence);

# Run the project
$ run code start
```

## :open_book: Explain ##

<h2 align="center">Exercise 01</h2>

-----------------------------------------------------------------------

| Nr.  | Step                                                         |
| ---- | ------------------------------------------------------------ |
| 1    | The isFibonacciNumber function is defined. It takes a number as input and returns a boolean value indicating whether the number is a Fibonacci number or not.|
| 2    | Inside the function, two variables a and b are initialized with the initial values of the Fibonacci sequence, which are 0 and 1 respectively. |
| 3    | The code then enters a while loop that continues as long as b is less than the input number. |
| 4    | Inside the loop, the value of b is updated by adding a and b, and the value of a is updated to the previous value of b. |
| 5    | After the loop ends, the function checks if b is equal to the input number. If they are equal, it means the number is a Fibonacci number and the function returns true. Otherwise, it returns false. |
| 6    | The program prompts the user to enter an integer number using the prompt function and stores it in the number variable. |
| 7    | The isFibonacciNumber function is called with the number as an argument, and the result is stored in the isFibonacci variable. |
| 8    | Finally, the program logs a message to the console indicating whether the input number is a Fibonacci number or not. |

<h2 align="center">Exercise 02</h2>

-----------------------------------------------------------------------

| Nr.  | Step                                                         |
| ---- | ------------------------------------------------------------ |
| 1    | Define a function isFibonacciNumber(num) that takes an integer num as an argument.|
| 2    | Inside the function, initialize two variables a and b to 0 and 1, respectively. These represent the first two numbers in the Fibonacci sequence. |
| 3    | Enter a while loop that continues as long as b is less than num. |
| 4    | Inside the loop, create a temporary variable temp and set it to the current value of b. |
| 5    | Update b to be the sum of a and b, which is the next number in the Fibonacci sequence. |
| 6    | Set a to the old value of b, which is stored in temp. |
| 7    | Once b is not less than num, exit the loop. |
| 8    | Check if b is equal to num. If they are equal, num is a Fibonacci number, so return true. If they are not equal, num is not a Fibonacci number, so return false.|
| 9    | Outside the function, prompt the user to enter an integer and store it in the variable number. |
| 10   | Log a message to the console that states whether number is a Fibonacci number, based on the value of isFibonacci. |

<h2 align="center">Exercise 03</h2>

-----------------------------------------------------------------------

| Nr.  | Step                                                         |
| ---- | ------------------------------------------------------------ |
| 1    | The code defines a function called fibonacci that takes a parameter m. This function is responsible for generating a Fibonacci sequence with m elements.|
| 2    | Inside the fibonacci function, an array called sequence is initialized with the first two elements of the Fibonacci sequence, which are 0 and 1. |
| 3    | A for loop is used to generate the remaining elements of the Fibonacci sequence. The loop starts at index 2 and continues until i is less than m. This loop iterates over the indices of the sequence array. |
| 4    | Inside the loop, the value at index i of the sequence array is calculated by adding the values at indices i - 1 and i - 2. This is the key property of the Fibonacci sequence, where each number is the sum of the two preceding ones. |
| 5    | Finally, the fibonacci function returns a portion of the sequence array using the slice method. The slice method is used to extract a subarray from the sequence array, starting from index 0 and ending at index m - 1. This ensures that the returned array contains exactly m elements. |
| 6    | Outside the fibonacci function, the code prompts the user to enter the number of elements they want in the Fibonacci sequence. The input is converted to an integer using the parseInt function and stored in the variable m. |
| 7    | The fibonacci function is called with the value of m, and the result is stored in the variable fibonacciSequence. |
| 8    | Finally, the fibonacciSequence array is logged to the console using console.log.|

## :memo: License ##

Made with :heart: by <a href="https://github.com/{daniel12082}" target="_blank">{daniel12082}</a>