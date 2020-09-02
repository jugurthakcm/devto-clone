import React from 'react';
import './Auth.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useAuth } from '../../data/auth/AuthProvider';
import { actionAuthTypes } from '../../data/auth/authReducer';
import firebase from '../../config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const Auth = () => {
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
    <div className='modal-dialog'>
      {!loading ? (
        user ? (
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Sign Out</h5>
            </div>
            <div className='modal-body'>
              <button
                type='button'
                className='btn btn-light btn-lg btn-block auth__button'
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Join DEV</h5>
            </div>
            <div className='modal-body'>
              <button
                type='button'
                className='btn btn-dark btn-lg btn-block auth__button'
                onClick={handleGithubAuth}
              >
                <GitHubIcon /> Sign In with Github
              </button>
              <button
                type='button'
                className='btn btn-primary btn-lg btn-block auth__button'
              >
                <TwitterIcon /> Sign In with Twitter
              </button>
              <button
                type='button'
                className='btn btn-light btn-lg btn-block auth__button'
              >
                More Sign In Options
              </button>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
};

export default Auth;
