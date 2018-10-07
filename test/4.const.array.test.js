/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */
function createArrayWith () {
  var array = []
  for (const index in arguments) {
    array.push(arguments[index])
  }

  return array
}

test('change var to const', function () {
  expect(createArrayWith(1, 2, 3, 4, 5, 6, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
})
