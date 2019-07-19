import * as path from 'path'
import * as carlo from 'carlo'

async function run() {
  const ui = await carlo.launch()
  ui.serveFolder(path.resolve('ui'))
  await ui.load('index.html')
}

run()
