const book = {
    bookName: '1984',
    author: 'George Orwell',
    publishYear: 1984,
    award: 'best book of 1995',
    aboutBook() {
        return `${this.bookName} by ${this.author} was published in ${this.publishYear} and won the ${this.award} award`;
        }
        
    }
    console.log(book.aboutBook());


