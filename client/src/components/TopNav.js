import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TopNav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className='nav bg-light d-flex justify-content-between'>
      <Link to='/' className='nav-link'>
        Home
      </Link>
      {!isAuthenticated && (
        <>
          <Link to='/register' className='nav-link'>
            Register
          </Link>
          <Link to='/login' className='nav-link'>
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default TopNav;
