import React from 'react';
import './Tags.css';

const Tags = () => {
  const tags = [
    'javascript',
    'webdev',
    'react',
    'tutorial',
    'python',
    'git',
    'productivity',
    'career',
  ];

  return (
    <div className='mt-4'>
      <h6 className='text-uppercase pl-2 tags__title'>
        Design your experience
      </h6>
      {tags.map((tag) => (
        <li
          key={tag}
          className='tags__link py-1 px-2 rounded d-flex justify-content-between align-items-center'
        >
          #{tag}
          <button className='btn btn-primary tags__btn p-1'>Follow</button>
        </li>
      ))}
    </div>
  );
};

export default Tags;
