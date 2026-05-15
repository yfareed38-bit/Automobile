import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Car, MessageSquare, FileText, BarChart3, Settings, LogOut } from 'lucide-react';
import './Admin.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-logo">
          <Car size={24} className="accent-text" />
          <span>Yasir <span className="accent-text">Admin</span></span>
        </div>
        
        <nav className="admin-nav">
          <NavLink to="/admin" end className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>
          <NavLink to="/admin/inventory" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <Car size={20} /> Inventory
          </NavLink>
          <NavLink to="/admin/inquiries" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <MessageSquare size={20} /> Inquiries
          </NavLink>
          <NavLink to="/admin/blog" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <FileText size={20} /> Blog CMS
          </NavLink>
          <NavLink to="/admin/analytics" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <BarChart3 size={20} /> Analytics
          </NavLink>
          <NavLink to="/admin/seo" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <Settings size={20} /> SEO Manager
          </NavLink>
        </nav>

        <div style={{ marginTop: 'auto' }}>
          <NavLink to="/" className="admin-nav-link">
            <LogOut size={20} /> Exit Admin
          </NavLink>
        </div>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
