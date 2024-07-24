import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users] = useState([
    { name: 'John Doe', address: '123 Main St', age: 28 },
    { name: 'Jane Smith', address: '456 Maple Ave', age: 34 },
    { name: 'Sam Green', address: '789 Oak Dr', age: 22 },
  ]);

  const generateEmailBody = () => {
    let emailBody = '<table border="1" style="border-collapse: collapse;">';
    emailBody += '<tr><th>Name</th><th>Address</th><th>Age</th></tr>';
    users.forEach(user => {
      emailBody += `<tr><td>${user.name}</td><td>${user.address}</td><td>${user.age}</td></tr>`;
    });
    emailBody += '</table>';
    return emailBody;
  };

  const handleSendEmail = () => {
    const subject = 'Handover';
    const body = generateEmailBody();

    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject, body })
    })
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>User Information</h1>
      <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default App;
