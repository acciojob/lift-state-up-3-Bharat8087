import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const updateOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>Selected Option: {selectedOption}</p>
      <ChildComponent1 updateOption={updateOption} />
      <ChildComponent2 updateOption={updateOption} />
    </div>
  );
};

export default App;
