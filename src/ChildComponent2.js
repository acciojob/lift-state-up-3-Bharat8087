
import React from 'react';

const ChildComponent2 = ({ selectedOption, onOptionSelect }) => {
  return (
    <div>
      <h2>Child Component 2</h2>
      <button onClick={() => onOptionSelect('Option 2')} disabled={selectedOption === 'Option 2'}>
        Option 2
      </button>
    </div>
  );
};

export default ChildComponent2;
