/* Create a JavaScript function to calculate the factorial of a given number 
 using an iterative approach with a dynamic programming technique. */

function calculateFactorial(num) {
    if (num < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    const factorialArray = new Array(num + 1);
    factorialArray[0] = 1;
    factorialArray[1] = 1;

    for (let i = 2; i <= num; i++) {
        factorialArray[i] = factorialArray[i - 1] * i;
    }

    return factorialArray[num];
}

function main() {
    let num = 5;
    let factorial = calculateFactorial(num);

    console.log(`The factorial of ${num} is: ${factorial}`);
}
main();