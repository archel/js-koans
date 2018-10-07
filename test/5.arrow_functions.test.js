/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

global.setInterval = jest.fn((fn) => fn())

class PoisonedMan {
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
  const poisonedMan = new PoisonedMan()

  poisonedMan.slowDeath()

  expect(poisonedMan.yearsLeft).toBe(99)
})
