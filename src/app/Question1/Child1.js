import React from 'react';

const Child1 = ({ updateMoney, amount }) => {
  const handleClick = () => {
    updateMoney(amount);
  };

  return (
    <button className='p-2 border bg-white rounded text-blue-500 m-2' onClick={handleClick}>Increment Money by {amount}</button>
  );
};

export default Child1;
