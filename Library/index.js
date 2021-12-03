const main = (() => {
  const Library = require("./Library");
  const Book = require("./Book");
  const Person = require("./Person");
  const prompt = require("prompt-sync")();

  const book = new Book("narnia", "some gyal", false);

  const book2 = new Book("harry potter", "idk", false);
  const booksInStore = [book, book2];

  const customer = new Person("prakash", "maraj@gmail.com", []);
  const customer2 = new Person("kelly", "kels@gmail.com", []);
  const totalCustomers = [customer, customer2];

  const library = new Library(booksInStore, totalCustomers, []);
  //   console.log(library);

  console.log(`
    books: ${JSON.stringify(library.numberOfBooks)}
    \n\n
    people: ${JSON.stringify(library.numberOfPeople)}
    \n\n
    books Borrowed: ${JSON.stringify(library.booksBorrowed)}`);
  console.log("\n\n");

  library.bookTaken(book, customer);

  console.log(`books: ${JSON.stringify(library.numberOfBooks)}
  \n\n
    people: ${JSON.stringify(library.numberOfPeople)}
    \n\n
    books Borrowed: ${JSON.stringify(library.booksBorrowed)}`);
  //   console.log(library);
})();
