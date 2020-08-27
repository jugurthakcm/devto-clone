import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const Post = () => {
  return (
    <div className='card post pl-3'>
      <div className='post__info d-flex mt-3'>
        <Avatar>H</Avatar>
        <div className='d-flex flex-column ml-2'>
          <span className='post__author'>Kacimi Jugurtha</span>
          <span className='post__date text-muted'>Aug 27</span>
        </div>
      </div>

      <div className='post__body ml-5 pt-1 pr-3 '>
        <h3 className='card-title post__title my-2'>
          How to code in Javascript ?
        </h3>

        <ul className='post__tags d-flex'>
          <li className='post__tag mr-3'>#javascript</li>
          <li className='post__tag mr-3'>#react</li>
          <li className='post__tag'>#webdev</li>
        </ul>

        <ul className='post__options d-flex justify-content-between align-items-center'>
          <div className='post__optionsReactions'>
            <span className='rounded p-1'>
              <FavoriteBorderIcon /> 17 reactions
            </span>
            <span className='rounded ml-3 p-1'>
              <ChatBubbleOutlineIcon /> 20 comments
            </span>
          </div>

          <div className='post__optionsDetails'>
            <span className='post__timeRead text-muted mr-2'>2 min read</span>
            <button className='btn btn-secondary post__optionsSave py-1 px-2'>
              Save
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Post;
