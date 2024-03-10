import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence } from "framer-motion";
import Loader from './common/Loader';
const LazyHome = React.lazy(() => import('./components/Home'));
const LazyAdminDashboard = React.lazy(() => import('./components/admin/AdminDashboard'));
const LazyProfile = React.lazy(() => import('./components/Profile'));
const LazySignUp = React.lazy(() => import('./components/SignUp'));
const LazySignIn = React.lazy(() => import('./components/SignIn'));
const LazyPageNotFound = React.lazy(() => import('./components/PageNotFound'));
const LazyUnauthorize = React.lazy(() => import('./components/Unauthorize'));
const LazyDataEnter = React.lazy(() => import('./components/pages/DataEnter.jsx'));
const LazyPlanDetails = React.lazy(() => import('./components/pages/PlanDetails.jsx'));
const LazyUserPaymentHistory = React.lazy(() => import('./components/pages/UserPaymentHistory.jsx'));
const LazyVerifyRecharge = React.lazy(() => import('./components/VerifyRecharge.jsx'));
const LazyEditProfile = React.lazy(() => import('./components/pages/EditProfile.jsx'));
const LazyPaymentSuccess = React.lazy(() => import('./components/pages/PaymentSuccess.jsx'));
const LazyLastPlan = React.lazy(() => import('./components/pages/LastPlan.jsx'));
import AuthLayout from './layouts/AuthLayout.jsx';
import UserLayout from './layouts/UserLayout.jsx';
import './App.css';

function App() {

  const { role } = useSelector((state) => state.global);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<UserLayout component={LazyHome} />} />
          <Route path="/profile" element={<UserLayout component={LazyProfile} />} />
          <Route path="/payment-success" element={<UserLayout component={LazyPaymentSuccess} />} />
          <Route path="/edit-profile" element={<UserLayout component={LazyEditProfile} />} />
          <Route path="/payment-history" element={<UserLayout component={LazyUserPaymentHistory} />} />
          <Route path="/mobile-recharge" element={<UserLayout component={LazyDataEnter} />} />
          <Route path="/mobile-recharge/:operator/:mobileNumber" element={<UserLayout component={LazyPlanDetails} />} />
          <Route path="/admin-dash" element={<LazyAdminDashboard role={role} />} />
          <Route path="/sign-in" element={<AuthLayout component={LazySignIn} />} />
          <Route path="/sign-up" element={<AuthLayout component={LazySignUp} />} />
          <Route path="/unauthorize" element={<LazyUnauthorize />} />
          <Route path="*" element={<UserLayout component={LazyPageNotFound} />} />
          <Route path="/who" element={<UserLayout component={LazyVerifyRecharge} />} />
          <Route path="/last-plan-repeat" element={<UserLayout component={LazyLastPlan} />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
