function createArrayWith () {
  var array = []
  for (const index in arguments) {
    array.push(arguments[index])
  }

  return array
}

test('refactor the arguments variable changing it to a variadic argument', function () {
  expect(createArrayWith(1, 2, 3, 4, 5, 6, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
})
