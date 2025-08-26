import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users & bookings
  const fetchData = async () => {
    try {
      const userRes = await axios.get("http://localhost:5000/api/auth/users");
      const bookingRes = await axios.get("http://localhost:5000/api/travel");
      setUsers(userRes.data);
      setBookings(bookingRes.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    if (window.confirm("Delete this user?")) {
      await axios.delete(`http://localhost:5000/api/auth/users/${id}`);
      fetchData();
    }
  };

  // Delete booking
  const deleteBooking = async (id) => {
    if (window.confirm("Delete this booking?")) {
      await axios.delete(`http://localhost:5000/api/travel/${id}`);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Panel</h1>

      {/* Users Table */}
      <h3>Users</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(u._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bookings Table */}
      <h3 className="mt-5">Bookings</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Date</th><th>Day</th><th>Time</th><th>Car Type</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b._id}>
              <td>{b.date}</td>
              <td>{b.day}</td>
              <td>{b.time}</td>
              <td>{b.carType}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteBooking(b._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
