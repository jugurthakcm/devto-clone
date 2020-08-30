import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const PostReactions = ({ post }) => {
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <span className='d-flex flex-column align-items-center'>
        <FavoriteBorderIcon />
        {post.public_reactions_count}
      </span>
      <span className='d-flex flex-column align-items-center my-4'>
        <ChatBubbleOutlineIcon /> {post.comments_count}
      </span>
    </div>
  );
};

export default PostReactions;
