class Bill {
  customer;
  items;

  constructor(c, i) {
    this.customer = c;
    this.items = i;
  }

  displayBill() {
    console.log(`Name: ${this.customer.firstName} ${this.customer.lastName}`);
    let sum = 0;
    this.items.map((item) => {
      const extendedPrice = item.quantityBought * item.unitPrice;
      sum += extendedPrice;
      console.log(`
            item no.: ${item.itemNumber}
            unit Price: ${item.unitPrice}
            quantity: ${item.quantityBought}
            Extended Price: ${extendedPrice}

            `);
    });
    console.log(`Grand Total: $${sum}`);
  }
}

module.exports = Bill;
