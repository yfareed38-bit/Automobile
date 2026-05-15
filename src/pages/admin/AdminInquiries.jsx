import React, { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, CheckCircle, Clock, Trash2, RefreshCw } from 'lucide-react';

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/inquiries');
      const data = await response.json();
      setInquiries(data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="admin-inquiries">
      <div className="admin-header flex justify-between items-end">
        <div>
          <h1>Inquiry <span className="gradient-text">Management</span></h1>
          <p>Track leads, test drive requests, and general inquiries.</p>
        </div>
        <button className="btn-outline flex items-center gap-0.5" onClick={fetchInquiries}>
          <RefreshCw size={18} className={loading ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>

      <div className="admin-table-container mt-2">
        {loading ? (
          <div className="p-4 text-center">Loading inquiries...</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Contact</th>
                <th>Model Interested</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map(iq => (
                <tr key={iq.id}>
                  <td>
                    <div className="font-bold">{iq.customerName}</div>
                    <div className="text-xs text-secondary">{new Date(iq.createdAt).toLocaleString()}</div>
                  </td>
                  <td>
                    <div className="flex items-center gap-0.5 text-xs"><Mail size={12} /> {iq.email}</div>
                    {iq.phone && <div className="flex items-center gap-0.5 text-xs"><Phone size={12} /> {iq.phone}</div>}
                  </td>
                  <td>
                    {iq.vehicle ? (
                      <span className="accent-text font-semibold">{iq.vehicle.name}</span>
                    ) : (
                      <span className="text-dim">General Inquiry</span>
                    )}
                  </td>
                  <td>
                    <div className="text-xs" style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {iq.message}
                    </div>
                  </td>
                  <td>
                    <span className={`badge-${iq.status}`}>{iq.status.toUpperCase()}</span>
                  </td>
                  <td>
                    <button className="btn-action"><CheckCircle size={16} /></button>
                    <button className="btn-action"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
              {inquiries.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-2">No inquiries received yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminInquiries;
