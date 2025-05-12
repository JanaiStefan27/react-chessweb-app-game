import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, SignUp, Contact, Services, Home } from "./components/pages";
import SignupModal from "./components/SignupModal";
import { useState } from "react";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="background-container">
      <div className="App">
        <Navbar onSignUpClick={() => setShowSignUp(true)} />
        <SignupModal isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
