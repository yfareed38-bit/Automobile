import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, MessageSquare, TrendingUp, ArrowUpRight, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    views: 0,
    leads: 0,
    inventory: 0,
    revenue: '$0'
  });
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // 1. Fetch Analytics
      const analyticsRes = await fetch('http://localhost:5000/api/analytics');
      const analyticsData = await analyticsRes.json();
      
      // 2. Fetch Inquiries
      const inquiriesRes = await fetch('http://localhost:5000/api/inquiries');
      const inquiriesData = await inquiriesRes.json();

      // 3. Fetch Inventory Count
      const vehiclesRes = await fetch('http://localhost:5000/api/vehicles');
      const vehiclesData = await vehiclesRes.json();

      // Aggregate stats
      const latestStats = analyticsData[0] || { pageViews: 0, leads: 0, clicks: 0 };
      
      setStats({
        views: latestStats.pageViews,
        leads: inquiriesData.length,
        inventory: vehiclesData.length,
        revenue: `$${(inquiriesData.length * 75000 * 0.1 / 1000000).toFixed(1)}M` // Simulated potential revenue
      });

      setRecentInquiries(inquiriesData.slice(0, 5));
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin-header flex justify-between items-end">
        <div>
          <h1>Dashboard <span className="gradient-text">Overview</span></h1>
          <p>Monitor your dealership's performance and activity.</p>
        </div>
        <button className="btn-outline flex items-center gap-0.5" onClick={fetchDashboardData}>
          <RefreshCw size={18} className={loading ? 'animate-spin' : ''} /> Refresh Data
        </button>
      </div>

      <div className="stats-overview mt-2">
        <div className="admin-stat-card">
          <div className="flex justify-between items-center mb-1">
            <h4>Total Page Views</h4>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <div className="value">{stats.views.toLocaleString()}</div>
          <div className="change text-xs mt-1 text-green-500">Live from database</div>
        </div>
        
        <div className="admin-stat-card">
          <div className="flex justify-between items-center mb-1">
            <h4>Total Leads</h4>
            <Users size={16} className="text-blue-500" />
          </div>
          <div className="value">{stats.leads}</div>
          <div className="change text-xs mt-1 text-blue-500">Active inquiries</div>
        </div>

        <div className="admin-stat-card">
          <div className="flex justify-between items-center mb-1">
            <h4>Inventory Count</h4>
            <LayoutDashboard size={16} className="text-purple-500" />
          </div>
          <div className="value">{stats.inventory}</div>
          <div className="change text-xs mt-1 text-purple-500">Listed models</div>
        </div>

        <div className="admin-stat-card">
          <div className="flex justify-between items-center mb-1">
            <h4>Potential Revenue</h4>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <div className="value">{stats.revenue}</div>
          <div className="change text-xs mt-1 text-green-500">Lead valuation</div>
        </div>
      </div>

      <div className="dashboard-grid mt-2" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div className="admin-table-container">
          <div className="p-1 flex justify-between items-center">
            <h3>Recent <span className="gradient-text">Inquiries</span></h3>
            <Link to="/admin/inquiries" className="text-xs accent-text">View All</Link>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Model</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentInquiries.map(iq => (
                <tr key={iq.id}>
                  <td>{iq.customerName}</td>
                  <td>{iq.vehicle ? iq.vehicle.name : 'General'}</td>
                  <td>{new Date(iq.createdAt).toLocaleDateString()}</td>
                  <td><span className={`badge-${iq.status}`}>{iq.status.toUpperCase()}</span></td>
                </tr>
              ))}
              {recentInquiries.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-2">No recent inquiries.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="glass-card p-1">
          <h3>Quick <span className="gradient-text">Actions</span></h3>
          <div className="flex flex-col gap-1 mt-1">
            <Link to="/admin/inventory" className="btn-primary w-100 flex items-center justify-center gap-0.5" style={{ textDecoration: 'none' }}>
              <ArrowUpRight size={18} /> Manage Inventory
            </Link>
            <button className="btn-outline w-100 flex items-center justify-center gap-0.5">
              <MessageSquare size={18} /> Send Newsletters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
