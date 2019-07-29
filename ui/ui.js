import React from 'react'
import { render } from 'react-dom'
import { fromWebSocket } from 'heliograph'
import App from './app'

async function run() {
  const socket = await fromWebSocket(`ws://${document.location.host}`)
  await socket.send('Hello World!')
  render(<App />, window.root)
}

run()
