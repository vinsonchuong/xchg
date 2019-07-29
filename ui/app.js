import { hot } from 'react-hot-loader'
import React from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'
import Logo from './logo'

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: '0'
    },

    '*': {
      boxSizing: 'border-box'
    }
  },

  app: {
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplate: '96px 1fr 320px / 1fr'
  },

  header: {
    padding: '16px',
    background: '#d5d6d1'
  },

  market: {
    background: '#2f2e33'
  },

  user: {
    background: '#d5d6d1'
  }
})

export default hot(module)(() => {
  const classes = useStyles()

  return (
    <div className={cx('app', classes.app)}>
      <div className={cx(classes.header)}>
        <Logo />
      </div>

      <div className={cx(classes.market)} />

      <div className={cx(classes.user)} />
    </div>
  )
})
