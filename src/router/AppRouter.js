import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/layout/Header'
import Index from '../components/layout/Index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from '../store'

const AppRouter = (props) => (
    <Router>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={Index} exact={true} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter