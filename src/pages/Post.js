import React from 'react';
import PostReactions from '../components/posts/postPage/PostReactions';
import Navbar from '../components/navbar/Navbar';
import PostContent from '../components/posts/postPage/PostContent';
import PostUser from '../components/posts/postPage/PostUser';

const Post = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid row mt-3'>
        <div className='col-1 d-md-block d-none'>
          <PostReactions />
        </div>
        <div className='col-lg-8 col-md-11'>
          <PostContent />
        </div>
        <div className='col-3 d-lg-block d-none'>
          <PostUser />
        </div>
      </div>
    </>
  );
};

export default Post;
