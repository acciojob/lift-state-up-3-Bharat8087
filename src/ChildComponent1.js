import React from 'react';

const ChildComponent1 = (props) => {
  return (
    <div>
      <h2>Child Component 1</h2>
      <button onClick={() => props.updateOption("Option 1")}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
