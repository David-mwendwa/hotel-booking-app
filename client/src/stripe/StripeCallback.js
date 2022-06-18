import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountStatus } from '../redux/actions/stripe';
import { toast } from 'react-toastify';
import { updateUserInLocalStorage } from '../redux/actions/auth.js';

const StripeCallback = () => {
  const { user, token, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      console.log(token)
      dispatch(getAccountStatus(token));
      dispatch(updateUserInLocalStorage({ user, token }));
    }

    if (error) {
      toast.error(error);
    }
  }, [dispatch, error, token, user]);

  return (
    <div className='d-flex justify-content-center p-5'>
      <LoadingOutlined className='display-1 h1 p-5 text-danger' />
    </div>
  );
};

export default StripeCallback;
