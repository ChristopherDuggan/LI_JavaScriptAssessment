// Your code here!

class Pokemon {

  constructor(name, attack, defense, health, type) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.maxHealth = health;
    this.health = health;
    this.type = type;
  }

  takeDamage(num) {
    this.health -= num;
    if (this.health < 0) this.health = 0;
    return this.health;
  }

  attackOpponent(opponent) {
    let damage = this.attack - opponent.defense;
    if (damage < 1) damage = 1;
    opponent.takeDamage(damage);
  }

  display() {
    return `${this.name} (${this.type}) ${this.health}/${this.maxHealth}`.toUpperCase();
  }

}

/* Some of the choices made would be different in teaching this to a class,
 * depending on what had been previously covered in the curriculum.
 * Specifically:
 *   - line 15 would be written without the '-=' shorthand operator
 *   - lines 16 and 22 would be in a multi-line format if we didn't want to
 *   introduce the single-line if statement
 *   - the display() method's return string would be constructed without using a
 *   template literal
 */

// Don't edit this line!
module.exports = Pokemon;
