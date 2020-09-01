import React from 'react';
import './Menu.css';
import Avatar from '@material-ui/core/Avatar';

const Tags = () => {
  const isLogged = true;
  return (
    <ul className='nav menu flex-column'>
      <li className='nav-link menu__link rounded'>
        {isLogged ? (
          <div className='d-flex align-items-center'>
            <Avatar>J</Avatar>
            <div className='d-flex flex-column ml-2'>
              <strong>KACIMI Jugurtha</strong>
              <small className='text-muted'>@jugurthakcm</small>
            </div>
          </div>
        ) : (
          <strong>Sign In/Up</strong>
        )}
      </li>
      <li className='nav-link menu__link rounded'>Listings</li>
      <li className='nav-link menu__link rounded'>Podcasts</li>
      <li className='nav-link menu__link rounded'>Videos</li>
      <li className='nav-link menu__link rounded'>Tags</li>
      <li className='nav-link menu__link rounded text-secondary'>More ...</li>
    </ul>
  );
};

export default Tags;
