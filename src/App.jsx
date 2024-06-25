import React, { useState, useMemo, useCallback } from 'react';
import UserList from './UserList';

const App = () => {
  const userList = useMemo(() => [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
  ], []);

  const [filter, setFilter] = useState('');

  const filterUsers = useCallback(
    (filter) => {
      return userList.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      );
    },
    [userList]
  );

  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter users"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;