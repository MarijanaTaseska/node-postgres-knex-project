// DataFetchingComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  // State to hold the fetched data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get(`${process.env.REACT_APP_API_URL}/data`)
      .then(response => setData(response.data))  // Assuming the API returns an array of data
      .catch(error => console.error('Error fetching data:', error));
  }, []);  // The empty dependency array ensures this runs once when the component mounts
 // The empty dependency array ensures this runs once when the component mounts

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
