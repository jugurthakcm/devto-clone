import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const PostUser = ({ post }) => {
  return (
    <div className='card card-body'>
      <div className='postUser__Info d-flex align-items-center'>
        <Avatar>
          <img src={post.user.profile_image_90} alt='user' />
        </Avatar>
        <strong className='ml-2'>{post.user.name}</strong>
      </div>
      <p className='text-muted mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        pariatur.
      </p>
      <button type='button' className='btn btn-primary btn-lg btn-block'>
        Follow
      </button>
    </div>
  );
};

export default PostUser;
