import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './node_modules/pages/routes'
import TopBar from './node_modules/components/topBar'
import {CurrentUserProvider} from './node_modules/contexts/currentUser'

const App = () => { 
    return (
        <CurrentUserProvider>
            <Router>
                <TopBar/>
                <Routes/>
            </Router>
        </CurrentUserProvider>
    )
}

ReactDOM.render( < App / > , document.getElementById('root'));