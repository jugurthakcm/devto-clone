import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const PostContent = () => {
  return (
    <div className='card postContent mb-3'>
      <img src='' className='card-img-top' alt='' />
      <div className='card-body'>
        <h1 className='card-title'>Card title</h1>
        <p className='card-text postContent__tags text-muted'>#react</p>
        <div className='postContent__Info d-flex align-items-center'>
          <div className='postContent__InfoUser d-flex align-items-center'>
            <Avatar>
              <img src='' alt='user' />
            </Avatar>
            <strong className='ml-2'>KACIMI Jugurtha</strong>
          </div>
          <div className='postContent__InfoDate text-muted ml-4'>Aug 30</div>
        </div>
        <p style={{ fontSize: 18 }} className='postContent__body mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non et
          harum. Saepe dolore, ratione repellat nesciunt similique esse nam
          commodi adipisci perferendis cumque, facilis, at voluptatibus! Quos,
          vitae amet!
        </p>
      </div>
    </div>
  );
};

export default PostContent;
