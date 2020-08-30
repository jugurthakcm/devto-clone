import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { PageProvider } from './data/PageProvider';
import { pageReducer, initialPage } from './data/pageReducer';

function App() {
  return (
    <div className='App'>
      <PageProvider reducer={pageReducer} initialPage={initialPage}>
        <Home />
      </PageProvider>
    </div>
  );
}

export default App;
