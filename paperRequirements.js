// ------------------------------
/* Problem-3 : count paper
// book1 ---> 100
// book2 ---> 200
// book3 ---->300
paperRequirements
write a function as a paperRequirements and 
// will take 3 parameters
// in first parameter have to show in book1 how much piece book you want.
// in second parameter have to show in book2 how much piece book you want.
// in third parameter  you have show in book2 how much piece book you want.
// and you have to calculate overall how much page is need to for that total 3 books. */


Answer:

function paperRequirements(num1, num2, num3){
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;

    const book1Need = num1 * book1;
    const book2Need = num2 * book2;
    const book3Need = num3 * book3;

    const totalPage = book1Need + book2Need + book3Need;
    return totalPage;
   
}

const totalPages = paperRequirements(2, 3, 1);
console.log(totalPages);