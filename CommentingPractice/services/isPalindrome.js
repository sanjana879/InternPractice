/**
 * @file Palindrome checker from Sanjana
 * @author Sanjana Yadav (Database Architect)
 */

/**
 * Checks if given String is palindrome (spelled the same backwards and forwards)
 * Ex: racecar = racecar
 * @param {string} input
 * @returns boolean
 */
function isPalindrome(input)
{
	//remove non-alphanumeric characters
	var re = /[^A-Za-z0-9]/g; 
	input = input.toLowerCase().replace(re, '');

	//2 pointers to compare letters at beginning and end of input
	var start = 0;
	var end = input.length-1;

	//iterate to middle of string 
	while(start < end)
	{
		//compare 1st/last, 2nd/2nd to last, etc letters 
		if(input[start] !== input[end])
		{
			return false;
		}
		//update pointers
		start++;
		end--;
	}
	return true;
}


