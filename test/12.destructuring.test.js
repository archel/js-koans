/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

function fullName (user) {
  return `${user.name} ${user.surname}`
}

test('refactor the fullName function to argument destructuring', () => {
  const user = {
    name: 'Jane',
    surname: 'Doe'

  }
  expect(fullName(user)).toBe('Jane Doe')
})
