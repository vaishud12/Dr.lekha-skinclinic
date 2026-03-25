import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsappButton';
import Home from './Pages/Home';
import About from './Pages/About';
import WeightManagement from './Pages/WeightManagement';
import SkinCare from './Pages/SkinCare';
import Blog from './Pages/Blog';
import BookAppointment from './Pages/BookAppointment';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/weight-management" element={<WeightManagement />} />
          <Route path="/skin-care" element={<SkinCare />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" />
      </BrowserRouter>
    </div>
  );
}

export default App;


