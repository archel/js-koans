/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 */

class DeathKnight {
  constructor (name, defense) {
    this.name = name
    this.defense = defense
    this.hitPoints = 100
  }

  recieveDamage (hitPoints) {
    if (hitPoints > this.defense) {
      this.hitPoints -= (hitPoints - this.defense)
    }
  }
}

test('move the class to another file', () => {
  const Arthas = new DeathKnight('Arthas', 10)

  Arthas.recieveDamage(100)

  expect(Arthas.hitPoints).toBe(10)
})
