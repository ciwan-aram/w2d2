// prettier-ignore
const grid = [
  100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, 10
]

// const player1 = {
//   name: "Alfonso",
//   color: "red",
//   position: 0,
//   cash: 1000,
//   displayInfo: function() {
//     console.log(
//       "Player " +
//         this.name +
//         " is standing at position " +
//         this.position +
//         " with $" +
//         this.cash
//     );
//   },
//   move: function() {
//     // get a random number from 1 to 6
//     const dice = Math.floor(Math.random() * 6) + 1;
//     // add that number to the position
//     this.position = (this.position + dice) % grid.length;
//     // update the cash depending on the position on the grid
//     this.cash += grid[this.position];
//   }
// };

// const player2 = {
//   name: "Dalina",
//   color: "blue",
//   position: 0,
//   cash: 1000,
//   displayInfo: function() {
//     console.log(
//       "Player " +
//         this.name +
//         " is standing at position " +
//         this.position +
//         " with $" +
//         this.cash
//     );
//   },
//   move: function() {
//     // get a random number from 1 to 6
//     const dice = Math.floor(Math.random() * 6) + 1;
//     // add that number to the position
//     this.position = (this.position + dice) % grid.length;
//     // update the cash depending on the position on the grid
//     this.cash += grid[this.position];
//   }
// };

// class declaration
class Player {
  // constructor is a special method
  constructor(name, color) {
    this.position = 0;
    this.cash = 1000;

    this.name = name;
    this.color = color;
  }

  displayInfo() {
    console.log(
      "Player " +
        this.name +
        " is standing at position " +
        this.position +
        " with $" +
        this.cash
    );
  }

  move() {
    // get a random number from 1 to 6
    const dice = Math.floor(Math.random() * 6) + 1;
    // add that number to the position
    this.position = (this.position + dice) % grid.length;
    // update the cash depending on the position on the grid
    this.cash += grid[this.position];
  }
}

// instance of the Player class
const player1 = new Player("Jason", "red");
const player2 = new Player("Stjepan", "blue");

console.log(player1, player2);

class BankAccount {
  constructor(name, currency) {
    this.name = name;
    this.currency = currency;
    this.balance = 0;
  }

  depositMoney(amount) {
    this.balance += amount;
  }

  withdrawMoney(amount) {
    // debit account
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      // handle what happens when there is not a sufficient balance
    }
  }

  showBalance() {
    return this.currency + this.balance;
  }
}

const account1 = new BankAccount("Mia", "$");
account1.depositMoney(100);
account1.withdrawMoney(25);
account1.showBalance(); // "$75"

console.clear();

//

class Vehicle {
  constructor(color, make, fuel) {
    this.speed = 0;

    this.color = color;
    this.make = make;
    this.fuel = fuel;
  }

  // all vehicles should be able to accelerate
  accelerate(kmh) {
    this.speed += kmh;
  }

  // all vehicles should be able to brake
  brake(kmh) {
    this.speed -= kmh;
  }
}

class MotorBike extends Vehicle {
  constructor(color, make, wheels = 2) {
    super(color, make, "petrol"); // refers to the constructor of the extended class

    this.wheels = wheels;
  }

  accelerate(kmh) {
    // this.speed += kmh * 1.5;
    super.accelerate(kmh * 1.5);
  }

  wheelie() {
    console.log("wheeliiiiie");
  }
}

const motorbike1 = new MotorBike("red", "Ducati", 3);
const motorbike2 = new MotorBike("blue", "yamaha");

// const vehicle1 = new Vehicle("green", "toyota", "diesel");
