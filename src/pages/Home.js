import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Menu from '../components/navigation/Menu';
import Tags from '../components/navigation/Tags';
import Post from '../components/posts/Post';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='container-fluid row home__body px-5 mt-3'>
        <div className='home__bodyLeft col-3 '>
          <Menu />
          <Tags />
        </div>
        <div className='home__bodyPosts col-6'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5>Posts</h5>
            <ul className='d-flex home__filter'>
              <li className='p-2 rounded'>Feed</li>
              <li className='p-2 rounded'>Week</li>
              <li className='p-2 rounded'>Month</li>
              <li className='p-2 rounded'>Year</li>
              <li className='p-2 rounded'>Infinity</li>
              <li className='p-2 rounded'>Latest</li>
            </ul>
          </div>
          <Post />
        </div>
        <div className='home__bodyRight col-3'></div>
      </div>
    </div>
  );
};

export default Home;
