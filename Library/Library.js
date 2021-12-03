class Library {
  numberOfBooks;
  numberOfPeople;
  booksBorrowed;

  constructor(b, p, bb) {
    this.numberOfBooks = b;
    this.numberOfPeople = p;
    this.booksBorrowed = bb;
  }

  bookTaken(book, person) {
    if (book.isBorrowed) {
      return console.log("This book is already taken");
    } else if (this.numberOfPeople.indexOf(person) === -1) {
      return console.log("Please join Library to borrow book");
    } else {
      let indexToRemove = this.numberOfBooks.indexOf(book);
      this.numberOfBooks.splice(indexToRemove, 1);
      person.booksInPosession.push(book);
      book.isBorrowed = true;
      this.booksBorrowed.push({
        book,
        person,
        date: new Date(),
      });
    }
  }
}

module.exports = Library;
