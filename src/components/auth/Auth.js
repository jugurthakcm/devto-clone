import React from 'react';
import './Auth.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Auth = () => {
  return (
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>Join DEV</h5>
        </div>
        <div className='modal-body'>
          <button
            type='button'
            className='btn btn-dark btn-lg btn-block auth__button'
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
    </div>
  );
};

export default Auth;
