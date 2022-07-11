import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [initialState, setInitialState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordCnf: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInitialState({ ...initialState, [name]: value });
  }

  function handleSubmit(e) {
    setIsLoading(true);
    setErrors(validate(initialState));
    e.preventDefault();
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isLoading) {
      callback();
    }
  }, [errors]);

  return { initialState, handleChange, handleSubmit, errors };
};

export default useForm;
