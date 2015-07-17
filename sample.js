// Unsafe without a radix argument
var count1 = parseInt(countString);

// Safe because a radix is specified
var count2 = parseInt(countString, 10);