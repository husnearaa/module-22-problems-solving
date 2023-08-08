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