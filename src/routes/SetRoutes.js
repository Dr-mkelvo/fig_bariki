import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import IndividualDashboard from '../pages/individualDashboard/IndividualDashboard';

const index = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<IndividualDashboard />} />
        </Routes>
      </>
    </Router>
  );
};

export default index;
