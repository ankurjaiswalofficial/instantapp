import React from 'react';

const Child2 = ({ updateMoney, amount }) => {
  const handleClick = () => {
    updateMoney(amount);
  };

  return (
    <button className='p-2 border bg-white rounded text-blue-500 m-2' onClick={handleClick}>Decrement Money by {amount}</button>
  );
};

export default Child2;
