import React from 'react';
import firebase from '../../config/firebaseConfig';

const SignOutNav = React.forwardRef((props, ref) => {
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log('Sign Out successfully');
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <ul
      className='navbarRight__dropdown dropdown-menu d-none'
      aria-labelledby='dropdownMenuButton'
      ref={ref}
    >
      <li>
        <button
          type='button'
          className='btn btn-light btn-lg btn-block auth__button'
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </li>
    </ul>
  );
});

export default SignOutNav;
