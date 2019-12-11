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

global.doRequest = () => {
  return new Promise((resolve) => setTimeout(() => (resolve(100)), 100))
}

global.setInterval = jest.fn((fn) => fn())
