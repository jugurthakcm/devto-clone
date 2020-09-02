import React from 'react';
import './Menu.css';
import Avatar from '@material-ui/core/Avatar';
import firebase from '../../config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const Tags = () => {
  const [user, loading, error] = useAuthState(firebase.auth()); //eslint-disable-line
  return (
    <ul className='nav menu flex-column'>
      <li className='nav-link menu__link rounded'>
        {!loading ? (
          user ? (
            <div className='d-flex align-items-center'>
              <Avatar>J</Avatar>
              <div className='d-flex flex-column ml-2'>
                <strong>KACIMI Jugurtha</strong>
                <small className='text-muted'>@jugurthakcm</small>
              </div>
            </div>
          ) : (
            <strong>Sign In/Up</strong>
          )
        ) : null}
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
