import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import {I18nextProvider} from 'react-i18next';
import i18n from './services/i18n/i18n'

import App from './components/App.js';

const Root = ({store}) => (
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </I18nextProvider>
)

export default Root