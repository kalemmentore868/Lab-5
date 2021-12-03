const main = (() => {
  const prompt = require("prompt-sync")();
  const Mortgage = require("./Mortgage");

  const loanAmount = parseInt(prompt("Please enter loan Amount "));
  const firstName = prompt("Please enter first name ");
  const lastName = prompt("Please enter last name ");

  const mortgage = new Mortgage(firstName, lastName, loanAmount);

  console.log(`Deposit: ${mortgage.calculateDeposit()}`);
})();
