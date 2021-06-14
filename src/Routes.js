import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Mainpage } from './page';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Mainpage} />
        <Route path="" component="" />
        <Route path="" component="" />
      </Switch>
    </Router>
  )
}

export default Routes;