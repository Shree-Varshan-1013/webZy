import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { AnimatePresence } from "framer-motion";
import Contact from './components/Contact'
import SignIn from './components/SignIn'
import { useSelector } from 'react-redux';
import PageNotFound from './components/pagenotFound';
import Unauthorize from './components/Unauthorize';
function App() {

  const location = useLocation();

  const { role } = useSelector((state) => state.global);

  console.log(location);

  return (
    <div className='overflow-hidden'>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="*" element={<Unauthorize />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
