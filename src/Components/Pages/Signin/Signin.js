import React from 'react';

function Signin() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className='grid-container'>
      <div className='grid-item one'>
        <h2>Login</h2>
        <p style={{ color: '#292929' }}>
          Get Access to your Orders, Wishlist and Recommendations
        </p>
      </div>
      <div className='grid-item two'>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' placeholder='Email' />
          </div>
          <div className='field'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
          </div>
          <br />
          <div className='field'>
            <button type='submit' className='signup'>Login</button>
            <span style={{ color: 'black' }}>
              <pre></pre>Don't have an account?
              <a href='#' style={{ color: 'blue', textDecoration: 'none' }}>
                Signup
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
