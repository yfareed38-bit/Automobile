import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, ExternalLink, RefreshCw } from 'lucide-react';

const AdminInventory = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/vehicles');
      const data = await response.json();
      setVehicles(data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      try {
        await fetch(`http://localhost:5000/api/vehicles/${id}`, { method: 'DELETE' });
        fetchVehicles();
      } catch (error) {
        console.error('Error deleting vehicle:', error);
      }
    }
  };

  return (
    <div className="admin-inventory">
      <div className="admin-header flex justify-between items-end">
        <div>
          <h1>Vehicle <span className="gradient-text">Management</span></h1>
          <p>Control your inventory, pricing, and availability.</p>
        </div>
        <div className="flex gap-1">
          <button className="btn-outline flex items-center gap-0.5" onClick={fetchVehicles}>
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
          <button className="btn-primary flex items-center gap-0.5">
            <Plus size={20} /> Add Vehicle
          </button>
        </div>
      </div>

      <div className="admin-controls mt-2 flex justify-between items-center bg-secondary p-1 rounded-lg">
        <div className="search-bar" style={{ minWidth: '400px' }}>
          <Search size={18} />
          <input type="text" placeholder="Search models, categories, or IDs..." />
        </div>
      </div>

      <div className="admin-table-container mt-2">
        {loading ? (
          <div className="p-4 text-center">Loading vehicles...</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Model Name</th>
                <th>Category</th>
                <th>Base Price</th>
                <th>Date Added</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map(v => (
                <tr key={v.id}>
                  <td>#00{v.id}</td>
                  <td className="font-bold">{v.name}</td>
                  <td><span className="text-secondary">{v.category}</span></td>
                  <td>${v.price.toLocaleString()}</td>
                  <td>{new Date(v.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button className="btn-action"><Edit2 size={16} /></button>
                    <button className="btn-action btn-delete" onClick={() => handleDelete(v.id)}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
              {vehicles.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-2">No vehicles found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminInventory;
