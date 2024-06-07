

import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 selectedOption={selectedOption} onOptionSelect={handleOptionSelect} />
      <ChildComponent2 selectedOption={selectedOption} onOptionSelect={handleOptionSelect} />
    </div>
  );
};

export default App;
