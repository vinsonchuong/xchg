import { startServer, getPort, respondToRequests, serveUi } from 'passing-notes'
import * as carlo from 'carlo'

async function run() {
  const port = await getPort()

  await startServer(
    port,
    respondToRequests(
      serveUi({ log: () => () => {}, entry: 'ui/index.html' })
    )
  )

  const ui = await carlo.launch()
  ui.serveOrigin(`http://localhost:${port}`)
  await ui.load(`http://localhost:${port}`)
}

run()
