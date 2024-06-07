import React from 'react';

const ChildComponent2 = (props) => {
  return (
    <div>
      <h2>Child Component 2</h2>
      <button onClick={() => props.updateOption("Option 2")}>Option 2</button>
    </div>
  );
};

export default ChildComponent2;
