/**
 * @file Some starter code from Disha
 * @author Disha Patel (Mobile App)
 */


 /**
  * It will return sum of the number
  * @param {number} input 
  * @returns number
  */



function sumOfNumber(number) {
	let sum = 0;
	//iterate through number and adding that each number into sum
	for (let i = 1; i <= number; i++) {
    sum += i;
}
	return sum;
}
export { sumOfNumber }

