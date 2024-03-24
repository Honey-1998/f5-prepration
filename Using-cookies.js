import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSave = () => {
    localStorage.setItem('name', name);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleSave}>Save</button>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default App;
