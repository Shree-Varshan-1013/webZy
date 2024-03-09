import { useEffect } from 'react';
import Hero from './Hero';
import Blogs from './Blogs';
import Content from './Content';
import Logos from './Logos';
import { motion } from "framer-motion";
import { Toaster } from 'sonner';
import CustomerService from '../services/CustomerService';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addDetails, addOperatorName, addPlanName, addValidity, addPlanType, addPlanPrice, addInternet, addFullPlan } from '../config/GlobalSlice';

const Home = () => {

  const { accessToken, userDetails } = useSelector(state => state.global);

  const dispatch = useDispatch();

  const fetchPayment = async () => {
    try {
      const res = await CustomerService.getOnePayment(userDetails.username, accessToken);
      const plan = res.data;
      console.log(plan);
      dispatch(addFullPlan(plan));
      dispatch(addPlanName(plan.planName));
      dispatch(addOperatorName(plan.operatorName));
      dispatch(addValidity(plan.planValidity));
      dispatch(addDetails(plan.planDetails));
      dispatch(addPlanPrice(plan.planPrice));
      dispatch(addInternet(plan.planData));
      dispatch(addPlanType(plan.planType));
    } catch (error) {
      console.error("Error fetching recharges:", error);
    }
  };
  useEffect(() => {
    fetchPayment();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Toaster position="top-center" theme="light" visibleToasts={1} richColors style={{ zIndex: 9999, marginTop: "50px" }} />
      <Hero />
      <Logos />
      <Content />
      <Blogs />
    </motion.div>
  );
};

export default Home;
