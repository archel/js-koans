/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

class PoisonedPlayer {
  constructor () {
    this.yearsLeft = 100
  }

  slowDeath () {
    const _this = this
    setInterval(function () {
      _this.yearsLeft--
    }, 1000)
  }
}

test('change the function to an arrow function', () => {
  const poisonedMan = new PoisonedPlayer()

  poisonedMan.slowDeath()

  expect(poisonedMan.yearsLeft).toBe(99)
})
