import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import APP from './APP'
import * as serviceWorker from './serviceWorker'

ReactDOM.reender(<APP />, document.getElementById('root'))
serviceWorker.unregister()
