import React from 'react';
import firebase from '../../config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useAuth } from '../../data/auth/AuthProvider';
import { actionAuthTypes } from '../../data/auth/authReducer';

const AuthNav = React.forwardRef((props, ref) => {
  const [state, dispatch] = useAuth(); //eslint-disable-line
  const [user, loading, error] = useAuthState(firebase.auth()); //eslint-disable-line

  const handleGithubAuth = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var user = result.user;
        dispatch({ type: actionAuthTypes.GITHUB, user });
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const handleGoogleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var user = result.user;
        dispatch({ type: actionAuthTypes.GITHUB, user });
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
          className='btn btn-dark btn-lg btn-block auth__button mb-2 '
          onClick={handleGithubAuth}
        >
          <GitHubIcon /> Sign In with Github
        </button>
      </li>
      <li>
        <button
          type='button'
          className='btn btn-primary bg-white text-dark btn-lg btn-block auth__button auth__buttonGoogle mb-2'
          onClick={handleGoogleAuth}
        >
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
            alt='google'
            width='20px'
          />{' '}
          Sign In with Google
        </button>
      </li>
      <li>
        <button
          type='button'
          className='btn btn-light btn-lg btn-block auth__button '
        >
          More Sign In Options
        </button>
      </li>
    </>
  );
});

export default AuthNav;
