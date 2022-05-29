import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// const isActive = (location, path) => {
//   if (location.pathname === path) {
//     return { color: '#ff9900' };
//   } else {
//     return { color: '#ffffff' };
//   }
// };

const DashboardNav = () => {
  const location = useLocation();
  const active = location.pathname;

  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <Link
          className={`nav-link ${active === '/dashboard' && 'active'}`}
          to='/dashboard'>
          Your Bookings
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className={`nav-link ${active === '/dashboard/seller' && 'active'}`}
          to='/dashboard/seller'>
          Your Hotels
        </Link>
      </li>
    </ul>
  );
};

export default DashboardNav;
