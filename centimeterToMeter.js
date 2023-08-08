// ------------------------------
// Problem-2. centimeter to meter
centimeterToMeter
// write a function where as a input parameter have to use centimeter.
//  and the input value have to convert in meter. 
// and have to return only the number.


Answer:

function centimeterToMeter(centimeter){
    const meter = centimeter * 0.01 ;
    return meter;
}

const number = 200 ;
const result = centimeterToMeter(number);
console.log('meter:', result);