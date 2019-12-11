/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

const cloneObject = object => Object.assign({}, object)

test('change the object assign to the spread operator', () => {
  const sheep = {
    name: 'dolly',
    color: 'white',
    age: 5
  }

  const clonedSheep = cloneObject(sheep)

  expect(clonedSheep).toEqual(sheep)
})
