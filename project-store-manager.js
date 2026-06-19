// ===== STORE DATA =====
let store = {
  name: "Tech Store",
  owner: "Piyush",
  cash: 50000,
  products: [
    { id: 1, name: "Laptop", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", price: 500, stock: 20 },
    { id: 3, name: "Keyboard", price: 2000, stock: 15 },
    { id: 4, name: "Monitor", price: 15000, stock: 8 }
  ],
  
  // Method: Show all products
  showProducts: function() {
    console.log("\n=== " + this.name + " Products ===");
    for (let i = 0; i < this.products.length; i++) {
      let p = this.products[i];
      console.log(i + 1 + ". " + p.name + " - ₹" + p.price + " (Stock: " + p.stock + ")");
    }
  },
  
  // Method: Sell a product
  sellProduct: function(productId, quantity) {
    let product = this.findProduct(productId);
    
    if (!product) {
      console.log("Product not found!");
      return;
    }
    
    if (product.stock < quantity) {
      console.log("Not enough stock! Available: " + product.stock);
      return;
    }
    
    let totalPrice = product.price * quantity;
    product.stock = product.stock - quantity;
    this.cash = this.cash + totalPrice;
    
    console.log("✅ Sold " + quantity + " " + product.name + "(s) for ₹" + totalPrice);
    console.log("Stock left: " + product.stock);
  },
  
  // Method: Buy stock (add more products)
  buyStock: function(productId, quantity, costPerItem) {
    let product = this.findProduct(productId);
    
    if (!product) {
      console.log("Product not found!");
      return;
    }
    
    let totalCost = costPerItem * quantity;
    this.cash = this.cash - totalCost;
    product.stock = product.stock + quantity;
    
    console.log("✅ Bought " + quantity + " " + product.name + "(s) for ₹" + totalCost);
    console.log("New stock: " + product.stock);
  },
  
  // Method: Find product by ID
  findProduct: function(productId) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === productId) {
        return this.products[i];
      }
    }
    return null;
  },
  
  // Method: Show store info
  showInfo: function() {
    console.log("\n=== Store Info ===");
    console.log("Store: " + this.name);
    console.log("Owner: " + this.owner);
    console.log("Cash: ₹" + this.cash);
  },
  
  // Method: Get total inventory value
  getInventoryValue: function() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      let p = this.products[i];
      total = total + (p.price * p.stock);
    }
    return total;
  },
  
  // Method: Show best selling product
  getBestStock: function() {
    let highest = this.products[0];
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].stock > highest.stock) {
        highest = this.products[i];
      }
    }
    return highest;
  }
};

// ===== SIMULATE STORE OPERATIONS =====
console.log("========== " + store.name + " ==========");

// Show initial state
store.showInfo();
store.showProducts();

// Customer 1 buys
console.log("\n--- Customer 1 ---");
store.sellProduct(1, 1);  // Buy 1 Laptop

// Customer 2 buys
console.log("\n--- Customer 2 ---");
store.sellProduct(2, 5);  // Buy 5 Mice

// Customer 3 buys
console.log("\n--- Customer 3 ---");
store.sellProduct(3, 2);  // Buy 2 Keyboards

// Owner buys stock
console.log("\n--- Restocking ---");
store.buyStock(2, 10, 400);  // Buy 10 mice for ₹400 each

// Show updated state
store.showInfo();
store.showProducts();

// Show inventory value
console.log("\n=== Inventory Value ===");
let invValue = store.getInventoryValue();
console.log("Total inventory worth: ₹" + invValue);

// Show product with most stock
console.log("\n=== Best Stock ===");
let best = store.getBestStock();
console.log("Product with most stock: " + best.name + " (" + best.stock + ")");

// Show final summary
console.log("\n========== SUMMARY ==========");
console.log("Final Cash: ₹" + store.cash);
console.log("Inventory Value: ₹" + invValue);
console.log("Total Assets: ₹" + (store.cash + invValue));