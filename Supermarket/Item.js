class Item {
  itemNumber;
  unitPrice;
  description;
  quantityBought;

  constructor(i, u, d, q) {
    this.itemNumber = i;
    this.unitPrice = u;
    this.description = d;
    this.quantityBought = q;
  }
}

module.exports = Item;
