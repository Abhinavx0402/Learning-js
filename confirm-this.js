// Example 1: Store
let store = {
  name: "Apple Store",
  items: 100,
  sell: function(qty) {
    this.items = this.items - qty;  // this = store
    console.log(this.name + " sold " + qty + " items");
    console.log("Items left: " + this.items);
  }
};

store.sell(10);
store.sell(5);

console.log("\n=== Example 2: Game ===");

// Example 2: Game character
let hero = {
  name: "Warrior",
  health: 100,
  attack: function(damage) {
    this.health = this.health - damage;  // this = hero
    console.log(this.name + " took " + damage + " damage");
    console.log("Health: " + this.health);
  },
  heal: function(amount) {
    this.health = this.health + amount;  // this = hero
    console.log(this.name + " healed " + amount);
    console.log("Health: " + this.health);
  }
};

hero.attack(20);
hero.heal(30);
hero.attack(15);