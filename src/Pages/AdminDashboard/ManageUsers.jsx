import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { contextData } from '../../Contex';


const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterRole, setFilterRole] = useState('');
  const { signoutHandle } = useContext(contextData)

  // Fetch all users from the backend
  useEffect(() => {
    axios.get('https://assignment-12-server-ruddy-eight.vercel.app/get-all-users', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    })
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data); // Initially display all users
      })
      .catch(error => signoutHandle());
  }, []);






  // Filter users by role
  const handleFilterChange = (userRole) => {
    setFilterRole(userRole);
    if (userRole === '') {
      setFilteredUsers(users); // Show all users if no role is selected
    } else {
      setFilteredUsers(users.filter(user => user.userRole === userRole));
    }
  };



  // Change user role
  const handleRoleChange = (userId, newRole) => {
    axios.put(`https://assignment-12-server-ruddy-eight.vercel.app/update-user-role/${userId}`, { userRole: newRole })
      .then(() => {
        Swal.fire('Role Updated!', `User role has been updated to ${newRole}.`, 'success');
        // Update the UI immediately
        setUsers(users.map(user => user._id === userId ? { ...user, userRole: newRole } : user));
        setFilteredUsers(filteredUsers.map(user => user._id === userId ? { ...user, userRole: newRole } : user));
      })
      .catch(err => {
        console.error('Error updating user role:', err);
        Swal.fire('Error!', 'Failed to update user role.', 'error');
      });
  };





  // Delete user
  const handleDeleteUser = (userId) => {
    axios.delete(`https://assignment-12-server-ruddy-eight.vercel.app/delete-user/${userId}`)
      .then(() => {
        Swal.fire('User Deleted!', 'The user has been deleted.', 'success');
        // Update the UI by removing the deleted user
        setUsers(users.filter(user => user._id !== userId));
        setFilteredUsers(filteredUsers.filter(user => user._id !== userId));
      })
      .catch(err => {
        console.error('Error deleting user:', err);
        Swal.fire('Error!', 'Failed to delete user.', 'error');
      });
  };





  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Users ({filteredUsers.length})</h2>

      {/* Role Filter Dropdown */}
      <div className="mb-4 text-right">
        <label className="mr-2 font-bold">Filter by Role:</label>
        <select
          value={filterRole}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="">All Roles</option>
          <option value="Member">Member</option>
          <option value="Moderator">Moderator</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      {/* Users Table */}
     <div className='w-[95vw] overflow-auto'>
     <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">User Name</th>
            <th className="border px-4 py-2">User Email</th>
            <th className="border px-4 py-2">User Role</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                {/* Role Dropdown */}
                <select
                  value={user.userRole}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  className="border px-2 py-1 rounded"
                >
                  <option value="Member">Member</option>
                  <option value="Moderator">Moderator</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
              <td className="border px-4 py-2">
                {/* Delete Button */}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default ManageUsers;
