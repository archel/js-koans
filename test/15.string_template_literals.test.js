/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
const greet = (name) => {
  return 'Hello ' + name + '!'
}

test('change the string concatenation with the string literal', () => {
  const wave = greet('Jane Doe')

  expect(wave).toBe('Hello Jane Doe!')
})
