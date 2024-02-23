import React, { useState } from 'react';
import Hero from './Hero';
import Blogs from './Blogs';
import Content from './Content';
import Logos from './Logos';
import { motion } from "framer-motion";
import { Toaster } from 'sonner';

const Home = () => {

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
      <Content />
      <Blogs />
    </motion.div>
  );
};

export default Home;
