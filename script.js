function nextPalindrome(num) {
  //your JS code here.
	function isPalindrome(num) {
        const numStr = num.toString();
        const reversedNumStr = numStr.split('').reverse().join('');
        return numStr === reversedNumStr;
    }

    // Find the next palindrome greater than the input number
    let nextNumber = inputNumber + 1;
    while (!isPalindrome(nextNumber)) {
        nextNumber++;
    }

    return nextNumber;
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
