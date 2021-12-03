const main = (() => {
  const prompt = require("prompt-sync")();
  const Clerk = require("./Clerk");
  const parcelWeight = parseInt(prompt("Please enter parcel weight in Kgs "));
  const clerkId = parseInt(prompt("Please enter clerk ID "));
  const firstName = prompt("Please enter first name ");
  const lastName = prompt("Please enter last name ");

  const clerk = new Clerk(parcelWeight, clerkId, firstName, lastName);

  console.log(`Delivery Cost: ${clerk.deliveryCalculator()}`);
})();
