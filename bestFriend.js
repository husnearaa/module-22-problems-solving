// ------------------------------
// Problem-4. ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];
bestFriend
// write a function and set array value. 
//and  which name is big return the value.



Answer:

const friends = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];

function bestFriend(friendsName){
    let longName = friendsName[0];
    for(let i = 0; i < friendsName.length; i++){
        const index = i;
        const element = friendsName[index];
        if(element.length > longName.length){
            longName = element;
        }
    }
    return longName;
}

// const friends = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];

const output = bestFriend(friends);
console.log('Name:', output);