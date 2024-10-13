import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  // State to hold the fetched data
  const [data, setData] = useState([]);
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-CA'); // 'en-CA' ensures the format is YYYY-MM-DD
  }

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth (YYYY-MM-DD)</th>
            <th>Grade</th>
            <th>Created at</th>
            {/* Add more columns here based on your data structure */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.student_id}>
              <td>{item.student_id}</td>  
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>  
              <td>{item.email}</td>  
              <td>{formatDate(item.date_of_birth)}</td> 
              <td>{item.grade_level}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataFetchingComponent;
