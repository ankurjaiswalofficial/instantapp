'use client';

import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
  const [money, setMoney] = useState(0);

  const updateMoney = (amount) => {
    setMoney(prevMoney => prevMoney + amount);
  };

  return (
    <div>
      <p>Current Money: {money}</p>
      <Child1 updateMoney={updateMoney} amount={1000} />
      <Child2 updateMoney={updateMoney} amount={-500} />
    </div>
  );
};

export default Parent;
