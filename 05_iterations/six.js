const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums= myNums.filter(  (num) => {
//    return num > 4
// })

// const newNums = []

// myNums.forEach(  (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1982, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1988, edition: 2009},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 1992, edition: 2012},
    { title: 'Book Six', genre: 'Fiction', publish: 1995, edition: 2014},
    { title: 'Book Seven', genre: 'History', publish: 1996, edition: 2015},
    { title: 'Book Eight', genre: 'Science', publish: 1994, edition: 2011},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1998, edition: 2014},
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

 userBooks = books.filter(  (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);

