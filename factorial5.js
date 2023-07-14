/*Implement a JavaScript function to calculate the factorial of a given number using a do-while loop.*/

function calculateFactorial(num) {
    if (num < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    let factorial = 1;
    let i = 2;

    do {
        factorial *= i;
        i++;
    } while (i <= num);

    return factorial;
}

function main() {
    let number = 6;
    let factorial = calculateFactorial(number);

    console.log(`The factorial of ${number} is: ${factorial}`);
}
main();