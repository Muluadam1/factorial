/*Create a JavaScript function to calculate the factorial of a given number using a while loop.*/

function calculateFactorial(num) {
    if (num < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    let factorial = 1;
    let i = 2;

    while (i <= num) {
        factorial *= i;
        i++;
    }

    return factorial;
}

function main() {
    let num = 0;
    console.log(calculateFactorial(num));
}
main();