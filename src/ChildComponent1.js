
import React from 'react';

const ChildComponent1 = ({ onSelect }) => {
  return (
    <div>
      <h2>Child Component 1</h2>
      <button onClick={() => onSelect('Option 1')}>Select Option 1</button>
    </div>
  );
};

export default ChildComponent1;
