var React = require('react');
var ReactRouter = require('react-router-dom');

var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Nav = require('./Nav');
var Home = require('./Home');
var QBank = require('./QBank');
var QPaper = require('./QPaper');
var QPGenerate = require('./QPGenerate');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
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
      </Router> 
    )
  }
}

module.exports = App;