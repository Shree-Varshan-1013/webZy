import React, { useState } from 'react';
import Hero from './Hero';
import Blogs from './Blogs';
import Content from './Content';
import Logos from './Logos';
import { motion } from "framer-motion";
import { Toaster } from 'sonner';
import Gallery from './Gallery';
import Model from './Model'; // Import your modal component here

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Toaster position="top-center" theme="light" visibleToasts={2} richColors style={{ zIndex: 9999, marginTop: "50px" }} />
      <Hero />
      <Logos />
      {isModalOpen && <Model closeModal={closeModal} />} {/* Render modal based on isModalOpen state */}
      <Content openModal={openModal} /> {/* Pass openModal function to Content component */}
      <Gallery />
      <Blogs />
    </motion.div>
  );
};

export default Home;
