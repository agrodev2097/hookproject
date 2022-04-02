import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './node_modules/pages/routes'
import TopBar from './node_modules/components/topBar'
import {CurrentUserProvider} from './node_modules/contexts/currentUser'
import CurrentUserChecker from './node_modules/components/currentUserChecker'

const App = () => { 
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
            <Router>
                <TopBar/>
                <Routes/>
            </Router>
            </CurrentUserChecker>
        </CurrentUserProvider>
    )
}

ReactDOM.render( < App / > , document.getElementById('root'));