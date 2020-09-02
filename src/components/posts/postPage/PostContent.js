import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const PostContent = ({ post }) => {
  function createMarkup() {
    return { __html: post.body_html };
  }

  return (
    <div className='card postContent mb-3'>
      <img src={post.cover_image} className='card-img-top' alt='cover' />
      <div className='card-body'>
        <h1 className='card-title'>{post.title}</h1>
        <ul className='postSummary__tags d-flex'>
          {post.tags.map((tag) => {
            return (
              <li className='postSummary__tag mr-3 text-muted' key={tag}>
                #{tag}
              </li>
            );
          })}
        </ul>
        <div className='postContent__Info d-flex align-items-center'>
          <div className='postContent__InfoUser d-flex align-items-center'>
            <Avatar>
              <img src={post.user.profile_image_90} alt='user' width='40px' />
            </Avatar>
            <strong className='ml-2'>{post.user.name}</strong>
          </div>
          <div className='postContent__InfoDate text-muted ml-4'>Aug 30</div>
        </div>
        <p
          style={{ fontSize: 18 }}
          className='postContent__body mt-5'
          dangerouslySetInnerHTML={createMarkup()}
        ></p>
      </div>
    </div>
  );
};

export default PostContent;
