// WITHOUT object - confusing
function withdraw(amount) {
  console.log("Withdrew: " + amount);
}

withdraw(100);  // Which account? No idea!

console.log("\n=== With Object (Better) ===");

// WITH object - clear!
let myAccount = {
  name: "My Account",
  balance: 1000,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
    console.log(this.name + " withdrew: " + amount);
    console.log("Balance now: " + this.balance);
  }
};

myAccount.withdraw(100);  // Clear: myAccount is withdrawing

// Another account
let friendAccount = {
  name: "Friend's Account",
  balance: 5000,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
    console.log(this.name + " withdrew: " + amount);
    console.log("Balance now: " + this.balance);
  }
};

friendAccount.withdraw(500);  // Clear: friendAccount is withdrawing