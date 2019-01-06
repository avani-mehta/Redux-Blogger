import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';//Link tag will be used instead of anchor tags(<a></a> which allows us to navigate using href)href will be replaced by 'to'(where you want to navigate)
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

//At line 16 Router component is provided a history object as a prop
//Router is our plain router and not the browser router as we have created our own history object rather using one which is implicitly created by BrowserRouter

const App = () => {
  return (
      <Router history={history}>
        <div>
          <Header />
          <div className="ui container">
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/blogs/new' exact component={StreamCreate} />
            <Route path='/blogs/delete/:id' exact component={StreamDelete} />
            <Route path='/blogs/edit/:id' exact component={StreamEdit} />
            <Route path='/blogs/show' exact component={StreamShow} />
          </Switch>
          </div>
        </div>
      </Router>
  );
};

export default App;
