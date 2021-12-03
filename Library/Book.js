class Book {
  title;
  author;
  isBorrowed;

  constructor(t, a, ib) {
    this.title = t;
    this.author = a;
    this.isBorrowed = ib;
  }
}

module.exports = Book;
