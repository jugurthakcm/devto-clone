import React from 'react';
import './Home.css';
import Navbar from '../components/navbar/Navbar';
import Menu from '../components/aside/Menu';
import Tags from '../components/aside/Tags';
import Post from '../components/posts/Post';
import Auth from '../components/auth/Auth';
import PostFilter from '../components/posts/PostFilter';
import Pagination from '../components/pagination/Pagination';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='row home__body mx-auto mt-3'>
        <div className='home__bodyLeft col-3 d-md-block d-none'>
          <Menu />
          <Tags />
        </div>
        <div className='home__bodyPosts col-lg-6 col-md-9'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='mb-3'>Posts</h5>
            <PostFilter />
          </div>
          <Post />
        </div>
        <div className='home__bodyRight col-3 d-lg-block d-none'>
          <Auth />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
