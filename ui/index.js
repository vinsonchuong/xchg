import {
  startServer,
  stopServer,
  getPort,
  respondToRequests,
  serveUi
} from 'passing-notes'
import { printLog } from 'passing-notes/lib/log'
import * as carlo from 'carlo'

export async function start() {
  const port = await getPort()

  const server = await startServer(
    port,
    respondToRequests(serveUi({ log: printLog, entry: 'ui/index.html' }))
  )

  const carloApp = await carlo.launch()
  carloApp.serveOrigin(`http://localhost:${port}`)
  await carloApp.load(`http://localhost:${port}`)

  carloApp.on('exit', async () => {
    await stopServer(server)
  })

  return carloApp
}
