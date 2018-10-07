const appendListElementWithNumber = jest.fn()
const updateRender = jest.fn()
const triggerCreationEvent = jest.fn()

global.htmlDocument = {
  getElementByTagName: jest.fn(() => ({
    appendListElementWithNumber,
    updateRender,
    triggerCreationEvent
  }))
}

global.getLatitiude = () => (5)
global.getLongitude = () => (6)
