/* Write a JavaScript function to calculate the factorial of a given number using a loop.*/

function calculateFactorial(num) {
    if (num < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    let factorial = 1;

    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

function main() {
    let num = 0;
    console.log(calculateFactorial(num));
}
main();