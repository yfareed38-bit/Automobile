import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, MessageSquare, TrendingUp, ArrowUpRight } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    views: 12450,
    leads: 85,
    inventory: 24,
    revenue: '$4.2M'
  });

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Dashboard <span className="gradient-text">Overview</span></h1>
        <p>Monitor your dealership's performance and activity.</p>
      </div>

      <div className="stats-overview mt-2">
        <div className="admin-stat-card">
          <div className="flex justify-between items-center mb-1">
            <h4>Total Page Views</h4>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <div className="value">{stats.views.toLocaleString()}</div>
          <div className="change text-xs mt-1 text-green-500">+12% from last month</div>
        </div>
        
        <div className="admin-stat-card">
          <div className="flex justify-between items-center mb-1">
            <h4>New Leads</h4>
            <Users size={16} className="text-blue-500" />
          </div>
          <div className="value">{stats.leads}</div>
          <div className="change text-xs mt-1 text-blue-500">+5 new today</div>
        </div>

        <div className="admin-stat-card">
          <div className="flex justify-between items-center mb-1">
            <h4>Inventory Count</h4>
            <LayoutDashboard size={16} className="text-purple-500" />
          </div>
          <div className="value">{stats.inventory}</div>
          <div className="change text-xs mt-1 text-purple-500">3 models low in stock</div>
        </div>

        <div className="admin-stat-card">
          <div className="flex justify-between items-center mb-1">
            <h4>Sales Inquiry Value</h4>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <div className="value">{stats.revenue}</div>
          <div className="change text-xs mt-1 text-green-500">Estimated potential</div>
        </div>
      </div>

      <div className="dashboard-grid mt-2" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div className="admin-table-container">
          <div className="p-1 flex justify-between items-center">
            <h3>Recent <span className="gradient-text">Inquiries</span></h3>
            <button className="text-xs accent-text">View All</button>
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
              <tr>
                <td>Zeeshan Khan</td>
                <td>Yasir E-Vision</td>
                <td>May 15, 2026</td>
                <td><span className="badge-pending">Pending</span></td>
              </tr>
              <tr>
                <td>Sarah Ahmed</td>
                <td>Yasir X-SUV</td>
                <td>May 14, 2026</td>
                <td><span className="badge-read">Followed Up</span></td>
              </tr>
              <tr>
                <td>Imran Shah</td>
                <td>Yasir S-Executive</td>
                <td>May 14, 2026</td>
                <td><span className="badge-read">Closed</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="glass-card p-1">
          <h3>Quick <span className="gradient-text">Actions</span></h3>
          <div className="flex flex-col gap-1 mt-1">
            <button className="btn-primary w-100 flex items-center justify-center gap-0.5">
              <ArrowUpRight size={18} /> Add New Vehicle
            </button>
            <button className="btn-outline w-100 flex items-center justify-center gap-0.5">
              <MessageSquare size={18} /> Send Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
