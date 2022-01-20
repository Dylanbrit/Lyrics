import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/layout/Header'
import Index from './components/layout/Index'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppRouter  from './router/AppRouter'
import { Provider } from 'react-redux'

// const store = configureStore()

class App extends React.Component {
    render() {
        return (
            <div className="App">    
                <AppRouter />
            </div>
        )
    }
}

// const jsx = (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

const app = document.querySelector('#app')
ReactDOM.render(<App />, app)