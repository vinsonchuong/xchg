// @flow
import { start as startUi } from './ui'

async function run() {
  const socket = await startUi()
}

run()
