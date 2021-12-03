const main = (() => {
  const prompt = require("prompt-sync")();

  const firstName = prompt("Please enter first name ");
  const lastName = prompt("Please enter last name ");

  const Customer = require("../Supermarket/Customer");
  const customer = new Customer(firstName, lastName);

  const cottonWeight = parseInt(prompt("Please enter cotton weight in lbs "));
  const denimWeight = parseInt(prompt("Please enter denim weight in lbs "));
  const otherWeight = parseInt(prompt("Please enter other weight in lbs "));

  const Cotton = require("./CottonFabric");
  const Denim = require("./DenimFabric");
  const Other = require("./OtherFabric");
  const Bill = require("./Bill");

  const cotton = new Cotton(cottonWeight);
  const denim = new Denim(denimWeight);
  const other = new Other(otherWeight);
  const bill = new Bill(cotton, denim, other);
  const balance = parseFloat(bill.dryerCost()) + parseFloat(bill.washCost());
  const VAT = balance * 0.15;
  const extendedBalance = (VAT + balance).toFixed(2);

  console.log(`
  Name: ${customer.firstName} ${customer.lastName}
  Lbs of cotton: ${cottonWeight}, charge: $${cotton.cottonCost()}
  Lbs of Denim: ${denimWeight}, charge: $${denim.denimCost()}
  Lbs of other: ${otherWeight}, charge: $${other.otherCost()}
  Dryer Charge: $${bill.dryerCost()}
  Balance: $${balance}
  Extended Balance: $${extendedBalance}
  `);
})();
