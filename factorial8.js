/* Implement a JavaScript program to calculate the factorial of a given number using an efficient 
algorithm that minimizes the number of multiplications. */

function calculateFactorial(num) {
    if (num < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }

    if (num === 0 || num === 1) {
        return "1";
    }

    let factorial = "1";

    for (let i = 2; i <= num; i++) {
        factorial = multiply(factorial, i.toString());
    }

    return factorial;
}

function multiply(num1, num2) {
    let result = "";
    let carry = 0;

    for (let i = num1.length - 1; i >= 0; i--) {
        let digit1 = parseInt(num1.charAt(i));
        let product = digit1 * parseInt(num2) + carry;
        let digit = product % 10;
        carry = Math.floor(product / 10);
        result = digit + result;
    }

    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

function main() {
    let num = 5;
    let factorial = calculateFactorial(num);

    console.log(`The factorial of ${num} is: ${factorial}`);
}

main();