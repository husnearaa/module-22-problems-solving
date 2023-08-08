function centimeterToMeter(centimeter){
    const meter = centimeter * 0.01 ;
    return meter;
}

const number = 200 ;
const result = centimeterToMeter(number);
console.log('meter:', result);