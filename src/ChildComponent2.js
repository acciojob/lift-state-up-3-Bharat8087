import React from 'react';

const ChildComponent2 = ({ updateOption }) => {
  return (
    <div className="child-component-2">
      <h2>Child Component 2</h2>
      <button onClick={() => updateOption("Option 2")}>Option 2</button>
    </div>
  );
};

export default ChildComponent2;
