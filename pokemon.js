// Your code here!

class Pokemon {
  constructor(name, attack, defense, health, type) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.type = type;
  }

  takeDamage(num) {
    this.health -= num;
    if (this.health < 0) this.health = 0;
    return this.health;
  }
}

// Don't edit this line!
module.exports = Pokemon;
