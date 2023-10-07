import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ReportingPage from './Pages/ReportingPage';
import DashBoard from './Pages/DashBoard';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/reports" element={<ReportingPage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;