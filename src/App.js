import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Welcome from './Components/Welcome';
import Searchbar from './Components/Searchbar';
import AboutUs from './Components/AboutUs';
import Brands from './Components/Brands';
import Categories from './Components/Categories';
import PaymentTerms from './Components/PaymentTerms';
import ShipmentandDeliveryTerms from './Components/DeliveryTerms';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Products from './Components/products';
import Footer from './Components/Footer';
import BackToTop from 'react-custom-back-to-top-button';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />   
      <Searchbar />   
      {location.pathname === '/' && <Slider />} {/* Conditionally render Slider */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/paymentterms" element={<PaymentTerms />} />
        <Route path="/deliveryterms" element={<ShipmentandDeliveryTerms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname === '/' && <Products />} {/* Conditionally render Products */}
      <BackToTop />
      <Footer/>
    </div>
  );
}

export default App;
