import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { AnimatePresence } from "framer-motion";
import Contact from './components/Contact'
import SignIn from './components/SignIn'
import { useSelector } from 'react-redux';
import './App.css';
import Loader from './common/Loader';
import AdminDashboard from './components/admin/AdminDashboard'
import SignUp from './components/SignUp'  
import Profile from './components/Profile'
import PageNotFound from './components/PageNotFound';
function App() {

  const location = useLocation();

  const [loading, setLoading] = useState(true);
  
  console.log(loading);

  const { role } = useSelector((state) => state.global);

  console.log(location);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  console.log(loading);

  const isAdminHomePage = location.pathname === '/admin-dash';

  return loading ? <Loader /> : (
    <>
      {isAdminHomePage ? null : <Header />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/admin-dash" element={<AdminDashboard role={role} />} />
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
      {isAdminHomePage ? null : <Footer />}
    </>
  );

}

export default App;
