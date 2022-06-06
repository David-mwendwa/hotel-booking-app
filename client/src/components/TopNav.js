import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/auth';

const TopNav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className='nav bg-light d-flex justify-content-between'>
      <Link to='/' className='nav-link'>
        Home
      </Link>
      {isAuthenticated && (
        <>
          <Link to='/dashboard' className='nav-link'>
            Dashboard
          </Link>
        </>
      )}
      {isAuthenticated && (
        <button onClick={handleLogout} className='btn btn-outline-primary'>
          Logout
        </button>
      )}
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
