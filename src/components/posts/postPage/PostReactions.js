import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const PostReactions = () => {
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <span className='d-flex flex-column align-items-center'>
        <FavoriteBorderIcon />
        18
      </span>
      <span className='d-flex flex-column align-items-center my-4'>
        <InsertEmoticonIcon />2
      </span>
      <span className='d-flex flex-column align-items-center mb-4'>
        <BookmarkBorderIcon />
        34
      </span>
      <MoreHorizIcon />
    </div>
  );
};

export default PostReactions;
