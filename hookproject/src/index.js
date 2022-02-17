import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './node_modules/pages/routes'
import TopBar from './node_modules/components/topBar'

const App = () => { 
    return (
        <div>
            <Router>
                <TopBar/>
                <Routes/>
            </Router>
        </div>
    )
}

ReactDOM.render( < App / > , document.getElementById('root'));