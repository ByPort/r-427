import React from 'react'
import { render } from 'react-dom'
import './style'
import 'typeface-roboto'
import App from './components/App'
import configureStore from './configureStore'

const store = configureStore();

render(
    <App store={store} />,
    document.getElementById('root')
)
