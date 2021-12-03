class Person {
  name;
  email;
  booksInPosession;

  constructor(n, e, bp) {
    this.name = n;
    this.email = e;
    this.booksInPosession = bp;
  }
}

module.exports = Person;
