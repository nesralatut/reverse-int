module.exports = function reverse(n) {
    const string = n.toString();
    const isNegative = string[0] === '-';    
    const reversedString = isNegative ? string.slice(1).split('').reverse().join('') : string.split('').reverse().join('');    
    const reverseInt = parseInt(reversedString); 
    return reverseInt;
}
