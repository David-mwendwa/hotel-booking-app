import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Avatar } from 'antd';
import moment from 'moment';

const { Meta } = Card;

const ConnectNav = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className='d-flex justify-content-around'>
      <Card>
        <Meta
          avatar={<Avatar>{user.name[0]}</Avatar>}
          title={user.name}
          description={`Joined ${moment(user.createdAt).fromNow()}`}
        />
      </Card>
      {user && user.stripe_seller && user.stripe_seller.charges_enabled && (
        <>
          <div>Pending balance</div>
          <div>Payout setting</div>
        </>
      )}
    </div>
  );
};

export default ConnectNav;
