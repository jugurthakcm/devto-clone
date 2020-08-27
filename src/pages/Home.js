import React from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/navigation/Menu';
import Tags from '../components/navigation/Tags';

const Home = () => {
  return (
    <div className='bg-light'>
      <Navbar />
      <div className='container-fluid home__body px-5'>
        <div className='home__bodyLeft col-3 mt-3'>
          <Menu />
          <Tags />
        </div>
        <div className='home__bodyPosts col-6'></div>
        <div className='home__bodyRight col-3'></div>
      </div>
    </div>
  );
};

export default Home;
