/* Implement a JavaScript program to calculate the factorial of a given number using recursion.*/

function calculateFactorial(num) {
    if (num < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    return num * calculateFactorial(num - 1);
}

function main() {
    let num = 0;
    console.log(calculateFactorial(num));
}
main();