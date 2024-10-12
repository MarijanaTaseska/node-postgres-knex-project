import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  // State to hold the fetched data
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('API URL:', process.env.REACT_APP_API_URL);
    // Fetch data from the backend API
    axios.get(`${process.env.REACT_APP_API_URL}/students`)
      .then(response => {
        console.log(response.data)
        setData(response.data)
        
      })  
      .catch(error => console.error('Error fetching data:', error));
  }, []);  // The empty dependency array ensures this runs once when the component mounts
 // The empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <h1>Fetched Data</h1>
      {/* Render the fetched data */}
      <ul>
        {data.map(item => (
          <li key={item.student_id}>{item.first_name} {item.last_name} {item.email}</li> // Assuming each data item has 'id' and 'name' properties
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
