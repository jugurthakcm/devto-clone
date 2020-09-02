import React from 'react';
import './Menu.css';
import Avatar from '@material-ui/core/Avatar';
import firebase from '../../config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const Menu = () => {
  const [user, loading, error] = useAuthState(firebase.auth()); //eslint-disable-line

  return (
    <ul className='nav menu flex-column'>
      <li className='nav-link menu__link rounded'>
        {!loading ? (
          user ? (
            <div className='d-flex align-items-center'>
              <Avatar>
                {user ? (
                  <img src={user.photoURL} alt='avatar' width='40px' />
                ) : null}
              </Avatar>
              <div className='d-flex flex-column ml-2'>
                <strong>{user.displayName}</strong>
                <small className='text-muted'>{user.email}</small>
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

export default Menu;
