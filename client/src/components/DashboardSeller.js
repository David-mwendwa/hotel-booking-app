import React from 'react';
import DashboardNav from '../components/DashboardNav';
import ConnectNav from '../components/ConnectNav';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashboardSeller = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <ConnectNav />
      </div>
      <div className='container-fluid p-4'>
        <DashboardNav />
      </div>
      {user && user.stripe_seller && user.stripe_seller.charges_enabled ? (
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-10'>
              <h2>Your Hotels</h2>
            </div>
            <div className='col-md-2'>
              <Link to='/hotels/new' className='btn btn-primary'>
                + Add New
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='container-fluid'>
          <div className='row'>
            <h2>Connect with stripe</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSeller;
