import test from 'ava'
import { start } from './'
import { openCarlo } from 'puppet-strings-carlo'
import { findElement } from 'puppet-strings'

test('starting the UI', async t => {
  const { carloApp } = await start()
  const window = await openCarlo(carloApp)

  await t.notThrowsAsync(findElement(window, '#root > div'))

  await carloApp.exit()
})
