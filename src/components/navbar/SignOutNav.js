import React from 'react';
import firebase from '../../config/firebaseConfig';

const SignOutNav = () => {
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
    <>
      <li>
        <button
          type='button'
          className='btn btn-light btn-lg btn-block auth__button'
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </li>
    </>
  );
};

export default SignOutNav;
