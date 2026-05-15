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
