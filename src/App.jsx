import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import Home from './components/Home'
import Logos from './components/Logos'
import './App.css'
import Contact from './components/Contact'
import SignIn from './components/SignIn'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
