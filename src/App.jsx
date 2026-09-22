import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import LeadModal from './components/LeadModal';
import ChatbotWidget from './components/ChatbotWidget';

// Contexts
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Calculator from './pages/Calculator';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="app-wrapper">
            <LeadModal />
            <Navbar />
            <CartSidebar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/calculator" element={<Calculator />} />
              </Routes>
            </main>
            <Footer />
            <ChatbotWidget />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
