import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vehicles from './pages/Vehicles';
import VehicleDetail from './pages/VehicleDetail';
import Services from './pages/Services';
import Parts from './pages/Parts';
import Dealers from './pages/Dealers';
import Financing from './pages/Financing';
import TestDrive from './pages/TestDrive';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import TopBar from './components/TopBar';
import Compare from './pages/Compare';
import Configurator from './pages/Configurator';
import Tools from './pages/Tools';
import ChatWidget from './components/ChatWidget';
import WhatsAppButton from './components/WhatsAppButton';
import CompareTray from './components/CompareTray';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminInventory from './pages/admin/AdminInventory';
import AdminInquiries from './pages/admin/AdminInquiries';

function App() {
  return (
    <Router>
      <div className="app-container">
        <TopBar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicle/:id" element={<VehicleDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/dealers" element={<Dealers />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/test-drive" element={<TestDrive />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/configure/:id" element={<Configurator />} />
            <Route path="/tools" element={<Tools />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="inventory" element={<AdminInventory />} />
              <Route path="inquiries" element={<AdminInquiries />} />
              <Route path="blog" element={<div>Blog CMS (Coming Soon)</div>} />
              <Route path="analytics" element={<div>Analytics Dashboard (Coming Soon)</div>} />
              <Route path="seo" element={<div>SEO Manager (Coming Soon)</div>} />
            </Route>
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
        <WhatsAppButton />
        <CompareTray />
      </div>
    </Router>
  );
}

export default App;
