import React from 'react';
import './Menu.css';

const Tags = () => {
  return (
    <ul className='nav menu flex-column'>
      <li className='nav-link menu__link rounded'>
        <strong>Sign In/Up</strong>
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
