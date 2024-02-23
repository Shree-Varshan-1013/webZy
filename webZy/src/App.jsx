import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence } from "framer-motion";
import Loader from './common/Loader';
const LazyHome = React.lazy(() => import('./components/Home'));
const LazyContact = React.lazy(() => import('./components/Contact'));
const LazyAdminDashboard = React.lazy(() => import('./components/admin/AdminDashboard'));
const LazyProfile = React.lazy(() => import('./components/Profile'));
const LazySignUp = React.lazy(() => import('./components/SignUp'));
const LazySignIn = React.lazy(() => import('./components/SignIn'));
const LazyPageNotFound = React.lazy(() => import('./components/PageNotFound'));
const LazyUnauthorize = React.lazy(() => import('./components/Unauthorize'));
const LazyDataEnter = React.lazy(() => import('./components/pages/DataEnter.jsx'));
const LazyPlanDetails = React.lazy(() => import('./components/pages/PlanDetails.jsx'));
import AuthLayout from './layouts/AuthLayout.jsx';
import UserLayout from './layouts/UserLayout.jsx';
import './App.css';

function App() {

  const { role } = useSelector((state) => state.global);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/webzy" />} />
          <Route path="/webzy" element={<UserLayout component={LazyHome} />} />
          <Route path="/contact" element={<UserLayout component={LazyContact} />} />
          <Route path="/profile" element={<UserLayout component={LazyProfile} />} />
          <Route path="/mobile-recharge" element={<UserLayout component={LazyDataEnter} />} />
          <Route path="/mobile-recharge/:operatorName" element={<UserLayout component={LazyPlanDetails} />} />
          <Route path="/admin-dash" element={<LazyAdminDashboard role={role} />} />
          <Route path="/webzy/sign-in" element={<AuthLayout component={LazySignIn} />} />
          <Route path="/webzy/sign-up" element={<AuthLayout component={LazySignUp} />} />
          <Route path="/unauthorize" element={<LazyUnauthorize />} />
          <Route path="*" element={<UserLayout component={LazyPageNotFound} />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
