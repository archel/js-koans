/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 */
const obtainTheSpeedForThePlainById = (planeId) => {
  return global.doRequest({planeId})
}

test('change the promise in order to wait for the speed value', () => {
  obtainTheSpeedForThePlainById('BOING417').then((speed) => {
    expect(speed).toBe(100)
  })
})
