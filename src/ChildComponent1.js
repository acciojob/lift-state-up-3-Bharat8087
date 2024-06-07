import React from 'react';

const ChildComponent1 = ({ updateOption }) => {
  return (
    <div className="child-component-1">
      <h2>Child Component 1</h2>
      <button onClick={() => updateOption("Option 1")}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
