import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import BookAppointment from './Pages/BookAppointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />

        </Routes>
        <Footer />
        <Toaster position="top-center" />
      </BrowserRouter>
    </div>
  );
}

export default App;


