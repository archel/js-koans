/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

const sumNumbers = (numbers) => {
  let total = 0
  numbers.forEach(element => {
    total += element
  })

  return total
}

test('change this foreach with the reduce function', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7]
  const total = sumNumbers(numbers)

  expect(total).toBe(28)
})
