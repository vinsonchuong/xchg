import { start as startUi } from './ui'

async function run() {
  const socket = await startUi()
  await socket.send('Hello World!')
}

run()
