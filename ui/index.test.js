// @flow
import test from 'ava'
import { start } from './'
import { openCarlo } from 'puppet-strings-carlo'
import { findElement } from 'puppet-strings'

test('starting the UI', async t => {
  const carloApp = await start()
  const window = await openCarlo(carloApp)

  const root = await findElement(window, '#root')
  t.is(root.innerText, 'Hello World!')

  await carloApp.exit()
})
