class Mortgage {
  firstName;
  lastName;
  loanAmount;

  constructor(f, l, lA) {
    this.firstName = f;
    this.lastName = l;
    this.loanAmount = lA;
  }

  calculateDeposit() {
    let deposit;

    switch (true) {
      case this.loanAmount < 25000:
        deposit = this.loanAmount / 20;
        break;
      case 25000 <= this.loanAmount && this.loanAmount < 49000:
        deposit = 1250 + this.loanAmount / 10;
        break;
      case 50000 <= this.loanAmount && this.loanAmount < 100000:
        deposit = 5000 + this.loanAmount / 4;
        break;
      case this.loanAmount > 100000:
        deposit = "Loans in excess of $100 000 are not allowed";

      default:
        deposit = "Please Enter valid number";
    }

    return deposit;
  }
}

module.exports = Mortgage;
