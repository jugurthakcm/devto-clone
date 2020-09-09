import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import Avatar from '@material-ui/core/Avatar';
import firebase from '../../config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import AuthNav from './AuthNav';
import SignOutNav from './SignOutNav';
import { useSearch } from '../../data/search/SearchProvider';
import { actionTypesSearch } from '../../data/search/SearchReducer';

const Navbar = () => {
  const [user, loading, error] = useAuthState(firebase.auth()); //eslint-disable-line
  const [search, setSearch] = useState('');
  const [state, dispatch] = useSearch(''); //eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypesSearch.SEARCH, search });
  };

  return (
    <nav className='navbar p-3 bg-white shadow-sm'>
      <div className='navbarLeft d-flex'>
        <Link to='/'>
          <img
            src='https://camo.githubusercontent.com/8bbe5211f98dc9849521a6f1fcc332df0d8c2bbf/68747470733a2f2f74686570726163746963616c6465762e73332e616d617a6f6e6177732e636f6d2f692f64336f356c397969716676317a3234636e3179702e706e67'
            alt='dev logo'
            width='60px'
            className='rounded'
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='navbarLeft__input form-control ml-2'
            placeholder='Search tag...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className='navbarRight d-flex align-items-center'>
        <button className='btn btn-primary d-none d-sm-block mr-3'>
          Write a post
        </button>
        <ChatBubbleOutlineRoundedIcon />
        <NotificationsNoneRoundedIcon className='mx-3' />
        {!loading ? (
          user ? (
            <div className='dropdown'>
              <Avatar
                style={{ cursor: 'pointer' }}
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-expanded='false'
              >
                <img src={user.photoURL} alt='avatar' width='40px' />
              </Avatar>
              <ul
                className='navbarRight__dropdown dropdown-menu p-2'
                aria-labelledby='dropdownMenuButton'
              >
                <SignOutNav />
              </ul>
            </div>
          ) : (
            <div className='dropdown'>
              <MenuRoundedIcon
                className='dropdown-toggle'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-expanded='false'
              />
              <ul
                className='dropdown-menu navbarRight__dropdown p-2'
                aria-labelledby='dropdownMenuButton'
              >
                <AuthNav />
              </ul>
            </div>
          )
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
