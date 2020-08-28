import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import GetArticles from '../../data/getArticles';

const Post = () => {
  const { data } = GetArticles();
  console.log(data);
  const posts = data
    ? data.map((post) => {
        return (
          <div className='card post pl-3 mb-2' key={post.id}>
            <div className='post__info d-flex mt-3'>
              <Avatar>
                <img src={post.user.profile_image_90} alt='user' />
              </Avatar>
              <div className='d-flex flex-column ml-2'>
                <span className='post__author'>{post.user.name}</span>
                <span className='post__date text-muted'>
                  {post.readable_publish_date}
                </span>
              </div>
            </div>
            <div className='post__body ml-5 pt-1 pr-3 '>
              <h3 className='card-title post__title my-2'>{post.title}</h3>

              <ul className='post__tags d-flex'>
                {post.tag_list.map((tag) => {
                  return (
                    <li className='post__tag mr-3' key={tag}>
                      #{tag}
                    </li>
                  );
                })}
              </ul>

              <ul className='post__options d-flex justify-content-between align-items-center'>
                <div className='post__optionsReactions'>
                  <span className='rounded p-1'>
                    <FavoriteBorderIcon /> {post.public_reactions_count}{' '}
                    <span className='d-none d-sm-inline'>reactions</span>
                  </span>
                  <span className='rounded ml-3 p-1'>
                    <ChatBubbleOutlineIcon /> {post.comments_count}{' '}
                    <span className='d-none d-sm-inline'>comments</span>
                  </span>
                </div>

                <div className='post__optionsDetails'>
                  <span className='post__timeRead text-muted mr-2'>
                    2 min read
                  </span>
                  <button className='btn btn-secondary post__optionsSave py-1 px-2'>
                    Save
                  </button>
                </div>
              </ul>
            </div>
          </div>
        );
      })
    : null;
  return <>{posts}</>;
};

export default Post;
