import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='bg-light'>
      <Navbar />
      <div className='container-fluid home__body'>
        <div className='home__bodyLeft col-3'></div>
        <div className='home__bodyPosts col-6'></div>
        <div className='home__bodyRight col-3'></div>
      </div>
    </div>
  );
};

export default Home;
