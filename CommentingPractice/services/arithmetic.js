/**
 * @file Arithmetic functions - several useful arithmetic functions
 * @author Juan Becerra (Mobile)
 */

/**
 * @description Computes the sum of two numbers
 * 
 * @param {*} num1 
 * @param {*} num2 
 * 
 * @returns sum of two numbers, or "undefined" if arguments are not numbers
 */
function Add(num1, num2) {
    if (!CheckTypes(num1, num2)) return;

    return num1 + num2;
}

/**
 * @description Computes the difference of two numbers
 * 
 * @param {*} num1 
 * @param {*} num2 
 * 
 * @returns difference of two numbers, or "undefined" if arguments are not numbers
 */
function Subtract(num1, num2) {
    if (!CheckTypes(num1, num2)) return;

    return num1 - num2;
}

/**
 * @description Computes the product of two numbers
 * 
 * @param {*} num1 
 * @param {*} num2 
 * 
 * @returns product of two numbers, or "undefined" if arguments are not numbers
 */
function Multiply(num1, num2) {
    if (!CheckTypes(num1, num2)) return;

    return num1 * num2;
}

/**
 * @description Computes the dividend of two numbers
 * 
 * @param {*} num1 
 * @param {*} num2 
 * 
 * @returns dividend of two numbers, or "undefined" if arguments are not numbers
 */
function Divide(num1, num2) {
    if (!CheckTypes(num1, num2)) return;

    return num1 / num2;
}

/**
 * @description Utility function: Verifies that both arguments are numbers
 * 
 * @param {*} num1 
 * @param {*} num2 
 * 
 * @returns whether or not both arguments are of type 'number'
 */
function CheckTypes(num1, num2) {
    return (typeof num1 == 'number' && typeof num2 == 'number');
}

/**
 * @description Returns the remainder of a division operation (modulo)
 * 
 * @param {number} num1
 * @param {number} num2
 */
function Modulo(num1, num2) {
    if (!CheckTypes(num1, num2)) return;
    return num1 % num2;
}

export { Add, Subtract, Multiply, Divide, Modulo };
