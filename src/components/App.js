import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Router from ReactRouter.BrowserRouter;
// import Route from ReactRouter.Route;
// import Switch from ReactRouter.Switch;

import Navigation from './Navigation';
import Home from '../containers/Home';
import QBank from '../containers/QBank';
import QPaper from '../containers/QPaper';
import QPGenerate from '../containers/QPGenerate';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/qbank' component={QBank} />
            <Route exact path='/qpaper' component={QPaper} />            
            <Route path='/qpaper/generate' component={QPGenerate} />
            <Route render={function () {
              return (<p>Not Found!</p>)
            }} />
          </Switch>
        </div>
      </BrowserRouter> 
    )
  }
}

