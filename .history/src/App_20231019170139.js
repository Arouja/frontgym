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
import Bmi from './Components/metrics/bmi';
import Orm from './Components/metrics/orm';
import Lbm from './Components/metrics/lbm';
import Users from './users/Users';
import Addtrainer from './Components/trainer/Addtrainer';
import UserProfileModal from './users/UserProfileModal';
import { Delete } from '@mui/icons-material';
import DeleteModal from './users/DeleteModal';

import './App.css';

import Updatecustomer from './Components/customer/Updatecustomer';
import Listtrainer from './Components/trainer/Listtrainer';
import Updatetrainer from './Components/trainer/Updatetrainer';
import ListOffers from './Components/offers/ListOffers';
import Addoffers from './Components/offers/Addoffers';
import Updateoffers from './Components/offers/Updateoffers';
import Listcourse from './Components/course/Listcourse';
import Addcourse from './Components/course/Addcourse';
import Updatecourse from './Components/course/Updatecourse';

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
      {/* <CustomNavbar /> */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Use Route inside Routes */}
        <Route path="/classes" element={<Classes />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      
        <Route path="/addtrainer" element={<Addtrainer />} />

        <Route path="/bmi" element={<Bmi />} />
        <Route path="/orm" element={<Orm />} />
        <Route path="/lbm" element={<Lbm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userProfileModal" element={<UserProfileModal />} />
        <Route path="/deleteModal" element={<DeleteModal />} />
        <Route path="/activate/activate?token=:token" element={<Activation />} /> 

        <Route path="/customer" element={<Listcustomer />} />
        <Route path="/updatecustomer" element={<Updatecustomer />} />
        <Route path="/trainer" element={<Listtrainer />} />
        <Route path="/addtrainer" element={<Addtrainer />} />
        <Route path="/updatetrainer" element={<Updatetrainer />} />
        <Route path="/listoffers" element={<ListOffers />} />
        <Route path="/addoffers" element={<Addoffers />} />
        <Route path="/updateoffers" element={<Updateoffers />} />
        <Route path="/listcourse" element={<Listcourse />} />
        <Route path="/addcourse" element={<Addcourse />} />
        <Route path="/updatecourse" element={<Updatecourse />} />
        

        {/* <Route path="/home" element={<Home />} /> Use Route inside Routes */}

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
