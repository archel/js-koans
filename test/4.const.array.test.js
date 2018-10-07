/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */
function createArrayWith (...elements) {
  var array = []
  elements.forEach((element) => {
    array.push(element)
  })

  return array
}

test('change var to const', () => {
  expect(createArrayWith(1, 2, 3, 4, 5, 6, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
})
