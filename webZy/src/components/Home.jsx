import Hero from './Hero'
import Blogs from './Blogs'
import Content from './Content'
import Logos from './Logos'
import { motion } from "framer-motion";
import Pricing from './Pricing';
import Gallery from './Gallery';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <Logos />
      <Content />
      <Gallery />
      <Blogs />
    </motion.div> 
  )
}

export default Home