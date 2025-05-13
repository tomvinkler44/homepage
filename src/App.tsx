import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Program from "./pages/Program";
import Demo from "./pages/Demo";
import InterviewPractice from "./pages/InterviewPractice";
import Contact from "./pages/Contact";
import MoneyBack from "./pages/MoneyBack";
import Testimonials from "./pages/Testimonials";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/money-back" element={<MoneyBack />} />
            <Route path="/program" element={<Program />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/interview-practice" element={<InterviewPractice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
