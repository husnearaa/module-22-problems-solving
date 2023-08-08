// ------------------------------
// Problem-1. feet to inch
feetToInch
// write a function where as a input parameter have to use feet.
//  and the input value have to convert in inch.



Answer:

function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}

const number = 6;
const result = feetToInch(number);
console.log('Total Inch', result);