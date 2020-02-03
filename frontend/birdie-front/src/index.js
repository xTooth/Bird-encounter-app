import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'
import swapReducer from './reducers/swapReducer'
import NewInstance from './components/NewInstance'
import Observation from './components/Observation'
import Sort from './components/Sort'
import List from './components/List'
import { createStore } from 'redux'
import axios from 'axios'

const store = createStore(swapReducer)

const App = () => {

    const [obs, setObs] = useState([])

    const observationById = (id) =>
        obs.find(obs => obs.id === id)

    const getJSON = (props, setObs) => {

        let apiURL
        if (props.getState() === 'time') {
            apiURL = 'https://damp-hamlet-88516.herokuapp.com/api/observations/sort/time'
            
        } else {
            apiURL = 'https://damp-hamlet-88516.herokuapp.com/api/observations/sort/name'
        }
        axios
            .get(apiURL)
            .then(response => {
                setObs(response.data)
            })
    }
    getJSON(store, setObs)
    return (
        <div>

            <Router>
                <div>
                    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                        <div className='row'>
                            <div className='col nav-item'>
                                <Link className='navbar-brand' to="/">Observations</Link>
                            </div>
                            <div className='co nav-item'>
                                <Link className='navbar-brand' to="/newObservation">New Observation</Link>
                            </div>
                        </div>
                    </nav>
                    <br />
                    <Route exact path="/" render={() => <Sort store={store} />} />
                    <Route exact path="/" render={() => <List observations={obs} />} />
                    <Route path="/newObservation" render={() => <NewInstance />} />
                    <Route exact path="/observation/:id" render={({ match }) =>
                        <Observation obs={observationById(match.params.id)} />
                    } />
                </div>
            </Router>

        </div>
    )
}

const RenderApplication = () => {
    ReactDOM.render(
        <App />
        , document.getElementById('root'))
}

RenderApplication()
store.subscribe(RenderApplication)
