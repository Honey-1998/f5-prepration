import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState({});

  // GET request example
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to only run once on component mount

  // POST request example
  const handlePostData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(data => console.log('Post request successful:', data))
      .catch(error => console.error('Error posting data:', error));
  };

  // Event handler to update postData state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  return (
    <div>
      <h1>GET Request Example</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      
      <h1>POST Request Example</h1>
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        placeholder="Enter body"
        onChange={handleChange}
      />
      <button onClick={handlePostData}>Submit</button>
    </div>
  );
}

export default App;
