// Function to write:  classifyNumber(num) 
// Write a function classifyNumber(num) that returns a string describing the number: 
// ● "zero" if it is 0 
// ● "positive even" if it is positive and even 
// ● "positive odd" if it is positive and odd 
// ● "negative even" if it is negative and even 
// // ● "negative odd" if it is negative and odd
function classifyNumber(a) {
    if (a === 0) {
        console.log (`zero`);
    } else if ((a > 0) && (a%2 !== 0)) {
        console.log (`positive odd`)
    } else if ((a < 0) && (a%2 !== 0)) {
        console.log (`negative odd`)
    } else if ((a > 0) && (a%2 == 0)) {
        console.log (`positive even`)
    } else if ((a < 0) && (a%2 !== 0)) {
        console.log (`negative even`)
    }
}
classifyNumber(3)
classifyNumber(-2)
classifyNumber(2)

