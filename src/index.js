module.exports = function reverse(n) {
    const string = n.toString();
    const isNegative = string[0] === '-';    
    const reversedString = isNegative ? string.slice(1).split('').reverse().join('') : string.split('').reverse().join('');    
    const reversedNumber = parseInt(reversedString);
    const reverseInt = isNegative ? -reversedNumber : reversedNumber;    
    return reverseInt;
}
