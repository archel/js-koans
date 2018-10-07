/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

function createNumbersList (numberOfNumbers) {
  for (var i = 0; i < numberOfNumbers; i++) {
    global.htmlDocument.getElementByTagName('ul').appendListElementWithNumber(i)
  }

  global.htmlDocument.getElementByTagName('ul').updateRender()
  global.htmlDocument.getElementByTagName('ul').triggerCreationEvent()
}

test('modify var to const', () => {
  createNumbersList(10)

  expect(global.htmlDocument.getElementByTagName('ul').appendListElementWithNumber).toHaveBeenCalledTimes(10)
  expect(global.htmlDocument.getElementByTagName('ul').updateRender).toHaveBeenCalled()
  expect(global.htmlDocument.getElementByTagName('ul').triggerCreationEvent).toHaveBeenCalled()
})
