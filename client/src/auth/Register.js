import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Register</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <form onSubmit={handleSubmit} className='mt-3'>
              <div className='form-group'>
                <label htmlFor='name_field' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email_field' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password_field' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
