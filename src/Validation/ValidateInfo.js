const validate = (initialState) => {
  let error = {};
  if (!initialState.firstName) {
    error.firstName = 'First Name is required';
  }
  if (!initialState.lastName) {
    error.lastName = 'Last Name is required';
  }
  if (!initialState.email) {
    error.email = 'Email is required';
  }
  if (!initialState.password) {
    error.password = 'Password is required';
  }
  if (!initialState.passwordCnf) {
    error.passwordCnf = 'Password is required';
  }
  return error;
};

export default validate;
