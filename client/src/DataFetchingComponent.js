// DataFetchingComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  // State to hold the fetched data
  const [data, setData] = useState([]);

  // Fetching data inside useEffect
  useEffect(() => {
    axios.get('http://localhost:5000/api/data') // Your backend API URL
      .then(response => {
        setData(response.data); // Set the fetched data to the state
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Handle error
      });
  }, []); // Empty dependency array to run this effect only once after component mounts

  return (
    <div>
      <h1>Fetched Data</h1>
      {/* Render the fetched data */}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li> // Assuming each data item has 'id' and 'name' properties
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
