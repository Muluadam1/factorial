/* Write a JavaScript program to calculate the factorial of a given number using an efficient algorithm that utilizes the properties of factorials, 
such as the factorial formula for large numbers. */

function multiplyStrings(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    const result = new Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let product = Number(num1[i]) * Number(num2[j]);
            let sum = result[i + j + 1] + product;
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    while (result[0] === 0) {
        result.shift();
    }

    return result.join('');
}

function calculateFactorial(num) {
    if (num < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }

    if (num === 0 || num === 1) {
        return '1';
    }

    let factorial = '1';

    for (let i = 2; i <= num; i++) {
        factorial = multiplyStrings(factorial, i.toString());
    }

    return factorial;
}

function main() {
    let num = 5;
    let factorial = calculateFactorial(num);

    console.log(`The factorial of ${num} is: ${factorial}`);
}
main();