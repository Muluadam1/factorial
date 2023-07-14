/* Create a JavaScript program to calculate the factorial of 
a given number using a recursive function with memoization. */

function calculateFactorial(num, memo = {}) {
    if (num < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    if (memo[num]) {
        return memo[num];
    }

    memo[num] = num * calculateFactorial(num - 1, memo);
    return memo[num];
}

function main() {
    let num = 8;
    let factorial = calculateFactorial(num);

    console.log(`The factorial of ${num} is: ${factorial}`);
}
main();