/* Write a JavaScript function to calculate the factorial of 
a given number using the mathematical concept of prime factorization. */

function calculateFactorial(num) {
    if (num < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    // Create an array to store the prime factors and their counts
    const factors = [];

    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            // If the current number is a prime factor, add it to the factors array
            factors.push(i);
            num /= i;
        }
    }

    // Multiply the prime factors to calculate the factorial
    let factorial = 1;
    for (let j = 0; j < factors.length; j++) {
        factorial *= factors[j];
    }

    return factorial;
}

function main() {
    let num = 9;
    let factorial = calculateFactorial(num);

    console.log(`The factorial of ${num} is: ${factorial}`);
}
main();