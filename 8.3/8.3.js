const book1 = {
  bookName: "1984",
  author: "George Orwell",
  publishYear: 1984,
};

const book2 = {
  bookName: "My cat is a vampire",
  author: "Tom Kenny",
  publishYear: 1842,
};

const bookUtils = {
  getFirstPublished(book1, book2) {
    firstPublish = null;
    book1.publishYear > book2.publishYear
      ? (firstPublish = book2.bookName)
      : (firstPublish = book1.bookName);
    return `${firstPublish} was published first`;
  },
  setNewEdition(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage(book, language) {
    book.language = language;
  },
};

console.log(bookUtils.getFirstPublished(book1, book2));
bookUtils.setNewEdition(book1, 2012);
console.log(book1);
bookUtils.setLanguage(book1, "English");
console.log(book1);
