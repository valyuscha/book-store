import {serverCommunicationMethods} from 'serverCommunication'

it('should not return undefined', async () => {
  const jsdomAlert = window.alert
  window.alert = () => {}

  const userData = await serverCommunicationMethods.login('Valentine')
  expect(userData).not.toBeUndefined()
  window.alert = jsdomAlert
})