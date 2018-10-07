/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

function createNumbersList (numberOfNumbers) {
  for (let i = 0; i < numberOfNumbers; i++) {
    global.htmlDocument.getElementByTagName('ul').appendListElementWithNumber(i)
  }

  global.htmlDocument.getElementByTagName('ul').updateRender()
  global.htmlDocument.getElementByTagName('ul').triggerCreationEvent()
}

test('refactor the function to add a const', function () {
  createNumbersList(10)

  expect(global.htmlDocument.getElementByTagName('ul').appendListElementWithNumber).toHaveBeenCalledTimes(10)
  expect(global.htmlDocument.getElementByTagName('ul').updateRender).toHaveBeenCalled()
  expect(global.htmlDocument.getElementByTagName('ul').triggerCreationEvent).toHaveBeenCalled()
})
