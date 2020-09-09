import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './pages/Home';
import { PageProvider } from './data/api/PageProvider';
import { pageReducer, initialPage } from './data/api/pageReducer';
import Post from './pages/Post';
import { AuthProvider } from './data/auth/AuthProvider';
import { authReducer, initialState } from './data/auth/authReducer';
import { SearchProvider } from './data/search/SearchProvider';
import { searchReducer, initialSearch } from './data/search/SearchReducer';

function App() {
  return (
    <div className='App'>
      <Router>
        <PageProvider reducer={pageReducer} initialPage={initialPage}>
          <AuthProvider reducer={authReducer} initialState={initialState}>
            <SearchProvider
              reducer={searchReducer}
              initialSearch={initialSearch}
            >
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/post/:post_id' component={Post} />
              </Switch>
            </SearchProvider>
          </AuthProvider>
        </PageProvider>
      </Router>
    </div>
  );
}

export default App;
