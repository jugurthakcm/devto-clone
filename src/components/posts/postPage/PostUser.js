import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const PostUser = () => {
  return (
    <div className='card card-body'>
      <div className='postUser__Info d-flex align-items-center'>
        <Avatar>
          <img src='' alt='user' />
        </Avatar>
        <strong className='ml-2'>KACIMI Jugurtha</strong>
      </div>
      <p className='text-muted mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        pariatur.
      </p>
      <button type='button' class='btn btn-primary btn-lg btn-block'>
        Follow
      </button>
    </div>
  );
};

export default PostUser;
