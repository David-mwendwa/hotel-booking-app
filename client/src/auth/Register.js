import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    alert('send user info to backend');
  };

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Register</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <form onSubmit={handleSubmit}>
              show the form
              <button type='submit' className='btn btn-primary'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
