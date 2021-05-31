import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExercisesNewContainer from '../pages/ExercisesNewContainer'
import NotFound from '../pages/404'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ExercisesContainer} />
                <Route exact path='/new' component={ExercisesNewContainer} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}


export default App