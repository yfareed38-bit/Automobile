import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, X, Save, Upload } from 'lucide-react';

const AdminInventory = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState({
    name: '', category: 'SUVs', price: '', specs: '', description: '', image: '/assets/images/suv.png', tagline: ''
  });

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

  const handleSave = async (e) => {
    e.preventDefault();
    const method = currentVehicle.id ? 'PUT' : 'POST';
    const url = currentVehicle.id 
      ? `http://localhost:5000/api/vehicles/${currentVehicle.id}`
      : 'http://localhost:5000/api/vehicles';

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...currentVehicle,
          price: parseFloat(currentVehicle.price)
        })
      });
      setIsModalOpen(false);
      setCurrentVehicle({ name: '', category: 'SUVs', price: '', specs: '', description: '', image: '/assets/images/suv.png', tagline: '' });
      fetchVehicles();
    } catch (error) {
      console.error('Error saving vehicle:', error);
    }
  };

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

  const openEdit = (vehicle) => {
    setCurrentVehicle(vehicle);
    setIsModalOpen(true);
  };

  return (
    <div className="admin-inventory">
      <div className="admin-header flex justify-between items-end">
        <div>
          <h1>Vehicle <span className="gradient-text">Management</span></h1>
          <p>Control your inventory, pricing, and availability.</p>
        </div>
        <button className="btn-primary flex items-center gap-0.5" onClick={() => { setCurrentVehicle({ name: '', category: 'SUVs', price: '', specs: '', description: '', image: '/assets/images/suv.png', tagline: '' }); setIsModalOpen(true); }}>
          <Plus size={20} /> Add Vehicle
        </button>
      </div>

      <div className="admin-table-container mt-2">
        {loading ? (
          <div className="p-4 text-center">Loading vehicles...</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map(v => (
                <tr key={v.id}>
                  <td className="font-bold">{v.name}</td>
                  <td>{v.category}</td>
                  <td>${v.price.toLocaleString()}</td>
                  <td><span className="text-green-500">In Stock</span></td>
                  <td>
                    <button className="btn-action" onClick={() => openEdit(v)}><Edit2 size={16} /></button>
                    <button className="btn-action btn-delete" onClick={() => handleDelete(v.id)}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div className="glass-card p-2" style={{ width: '600px', maxWidth: '90%' }}>
            <div className="flex justify-between items-center mb-1">
              <h2>{currentVehicle.id ? 'Edit' : 'Add'} <span className="gradient-text">Vehicle</span></h2>
              <button onClick={() => setIsModalOpen(false)}><X size={24} /></button>
            </div>
            
            <form onSubmit={handleSave} className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Model Name</label>
                <input type="text" value={currentVehicle.name} onChange={e => setCurrentVehicle({...currentVehicle, name: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select value={currentVehicle.category} onChange={e => setCurrentVehicle({...currentVehicle, category: e.target.value})}>
                  <option>SUVs</option>
                  <option>Sedans</option>
                  <option>Electric</option>
                  <option>Coupe</option>
                </select>
              </div>
              <div className="form-group">
                <label>Price (USD)</label>
                <input type="number" value={currentVehicle.price} onChange={e => setCurrentVehicle({...currentVehicle, price: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Tagline</label>
                <input type="text" value={currentVehicle.tagline} onChange={e => setCurrentVehicle({...currentVehicle, tagline: e.target.value})} />
              </div>
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label>Specifications (Short)</label>
                <input type="text" value={currentVehicle.specs} onChange={e => setCurrentVehicle({...currentVehicle, specs: e.target.value})} placeholder="e.g. 500hp | AWD | Luxury" />
              </div>
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label>Description</label>
                <textarea rows="3" value={currentVehicle.description} onChange={e => setCurrentVehicle({...currentVehicle, description: e.target.value})}></textarea>
              </div>
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <button type="submit" className="btn-primary w-100 flex items-center justify-center gap-0.5">
                  <Save size={18} /> Save Vehicle Details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminInventory;
