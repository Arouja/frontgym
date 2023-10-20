import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from your API
    axios.get('http://localhost:8089/api/v1/users/all')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      // Define your columns here based on the user data structure
      // For example, if each user has 'id', 'name', and 'email' fields:
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
    ],
    []
  );

  return (
    <div className="p-2">
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              {columns.map(column => (
                <td key={column.accessor}>{user[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
