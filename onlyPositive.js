// ------------------------------
// Problem-5: [45, 87, 96, 11, 63, -56, 71, 28]; 
onlyPositive
// if get negative value then program will be stop there.
// and will return the gotten value as an array.


Answer:

const numbers = [45, 87, 96, 11, 63, -56, 71, 28]; 

function onlyPositive(number){
    for(let i = 0; i < number.length; i++){
        const element = number[i];
        if(element < 0){
            break;
        }
        console.log(element);
    }
    
}

// const numbers = [45, 87, 96, 11, 63, -56, 71, 28];
const positiveValue = onlyPositive(numbers);