// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Route directly

import About from './Components/about/About';
import Classes from './Components/classes/Classes';
import Home from './Components/home/Home';
import Feature from './Components/feature/Feature';
import Contact from './Components/contact/Contact';
import Login from './Components/login/Login';
import Profile from './Components/profile/profile';
import Signup from './Components/signup/Signup';
import Listcustomer from './Components/customer/Listcustomer';
import Activation from './Components/activation/Activation';

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
      {/* <Navbar /> */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Use Route inside Routes */}
        <Route path="/classes" element={<Classes />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/customer" element={<Listcustomer />} />
        <Route path="/activate/activate?token=:token" element={<Activation />} /> {/* Add the Activation route */}
      
        
        {/* <Route path="/home" element={<Home />} /> Use Route inside Routes */}

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
