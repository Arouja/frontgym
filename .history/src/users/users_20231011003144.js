import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8089/api/v1/users/all-users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Image',
        accessor: 'attachmentPath',
        Cell: ({ value }) => <img src={value} alt="User" style={{ width: '50px' }} />,
      },
    ],
    []
  );

  return (
    <div className="p-2">
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.Header}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              {columns.map(column => (
                <td key={column.Header}>
                  {column.Cell ? column.Cell({ value: user[column.accessor] }) : user[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
