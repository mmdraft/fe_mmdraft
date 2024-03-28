import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import UserDashboard from './components/dashboard/UserDashboard';
// import LeagueDashboard from './components/dashboard/LeagueDashboard';
// import DraftRoom from './components/draft/DraftRoom';
// import PostDraftUserDashboard from './components/dashboard/PostDraftUserDashboard';
// import PostDraftLeagueDashboard from './components/dashboard/PostDraftLeagueDashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        {/* <Route path="/league-dashboard" element={<LeagueDashboard />} /> */}
        {/* <Route path="/draft-room" element={<DraftRoom />} /> */}
        {/* <Route path="/post-draft-user-dashboard" element={<PostDraftUserDashboard />} /> */}
        {/* <Route path="/post-draft-league-dashboard" element={<PostDraftLeagueDashboard />} /> */}
        {/* Define other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



