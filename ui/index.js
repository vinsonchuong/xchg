import {
  startServer,
  stopServer,
  getPort,
  respondToRequests,
  acceptConnections,
  serveUi
} from 'passing-notes'
import { printLog } from 'passing-notes/lib/log'
import * as carlo from 'carlo'

export async function start() {
  const port = await getPort()
  const [callback, waitForCallback] = captureArgs()

  const server = await startServer(
    port,
    respondToRequests(serveUi({ log: printLog, entry: 'ui/index.html' })),
    acceptConnections(callback)
  )

  const carloApp = await carlo.launch()
  carloApp.serveOrigin(`http://localhost:${port}`)
  await carloApp.load(`http://localhost:${port}`)
  carloApp.on('exit', async () => {
    await stopServer(server)
  })

  const socket = await waitForCallback

  return {
    ...socket,
    carloApp
  }
}

function captureArgs() {
  let callback
  const promise = new Promise(resolve => {
    callback = resolve
  })
  return [callback, promise]
}
