import React from 'react';
import useForm from './useForm';
import validate from './ValidateInfo';
import './Signup.css';

function FormSignup() {
  const { initialState, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log('Success');
  }

  return (
    <div className='grid-container'>
      <div className='grid-item one'>
        <h2>Sign Up</h2>
        <p style={{ color: '#292929' }}>
          We don't share your personal details with anyone
        </p>
      </div>
      <div className='grid-item two'>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='First Name'
              value={initialState.firstName}
              onChange={handleChange}
            />
          </div>
          {errors.firstName && <h5>{errors.firstName}</h5>}
          <div className='field'>
            <label htmlFor='username'>Last Name</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Last Name'
              value={initialState.lastName}
              onChange={handleChange}
            />
          </div>
          {errors.lastName && <h5>{errors.lastName}</h5>}
          <div className='field'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              value={initialState.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <h5>{errors.email}</h5>}
          <div className='field'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={initialState.password}
              onChange={handleChange}
            />
          </div>
          {errors.password && <h5>{errors.password}</h5>}
          <div className='field'>
            <label htmlFor='passwordCnf'>Confirm Password</label>
            <input
              type='password'
              name='passwordCnf'
              id='passwordCnf'
              placeholder='Re-enter Password'
              value={initialState.passwordCnf}
              onChange={handleChange}
            />
          </div>
          {errors.passwordCnf && <h5>{errors.passwordCnf}</h5>}
          <br />
          <div className='field'>
            <button type='submit'className='signup'>Signup</button>
            <span style={{ color: 'black' }}>
              <pre></pre>Already have an account?{' '}
              <a href='#' style={{ color: 'blue', textDecoration: 'none' }}>
                Login
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSignup;
