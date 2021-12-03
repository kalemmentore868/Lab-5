const main = (() => {
  const prompt = require("prompt-sync")();

  const firstName = prompt("Please enter first name ");
  const lastName = prompt("Please enter last name ");

  const Customer = require("./Customer");
  const customer = new Customer(firstName, lastName);

  const itemListLength = parseInt(
    prompt("Please enter the number of different items ")
  );

  const Item = require("./Item");
  const itemList = [];

  for (let i = 0; i < itemListLength; i++) {
    const itemCode = parseInt(prompt("Please enter Item Code "));
    const description = prompt("Please enter a description ");
    const unitPrice = parseInt(prompt("Please enter the price "));
    const quantityBought = parseInt(
      prompt("Please enter amount of item bought ")
    );

    const item = new Item(itemCode, unitPrice, description, quantityBought);
    itemList.push(item);
  }

  const Bill = require("./Bill");
  const bill = new Bill(customer, itemList);

  bill.displayBill();
})();
