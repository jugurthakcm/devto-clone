import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { PageProvider } from './data/api/PageProvider';
import { pageReducer, initialPage } from './data/api/pageReducer';
import Post from './pages/Post';
import { AuthProvider } from './data/auth/AuthProvider';
import { authReducer, initialState } from './data/auth/authReducer';


function App() {
  return (
    <div className='App'>
      <Router>
        <PageProvider reducer={pageReducer} initialPage={initialPage}>
          <AuthProvider reducer={authReducer} initialState={initialState}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/post/:post_id' component={Post} />
            </Switch>
          </AuthProvider>
        </PageProvider>
      </Router>
    </div>
  );
}

export default App;
