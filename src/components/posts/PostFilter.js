import React from 'react';
import './PostFilter.css';

const PostFilter = () => {
  return (
    <>
      <ul className='d-sm-flex d-none home__postFilter'>
        <li className='p-2 rounded'>Feed</li>
        <li className='p-2 rounded'>Week</li>
        <li className='p-2 rounded'>Month</li>
        <li className='p-2 rounded'>Year</li>
        <li className='p-2 rounded'>Infinity</li>
        <li className='p-2 rounded'>Latest</li>
      </ul>
      <select
        className='form-select home__postFilterSelect d-sm-none d-block'
        aria-label='Default select example'
      >
        <option defaultValue>Feed</option>
        <option>Week</option>
        <option>Month</option>
        <option>Year</option>
        <option>Infinity</option>
        <option>Latest</option>
      </select>
    </>
  );
};

export default PostFilter;
