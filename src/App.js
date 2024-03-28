import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/login/Login';
// import UserDashboard from './components/dashboard/UserDashboard';
// import LeagueDashboard from './components/dashboard/LeagueDashboard';
// import DraftRoom from './components/draft/DraftRoom';
// import PostDraftUserDashboard from './components/dashboard/PostDraftUserDashboard';
// import PostDraftLeagueDashboard from './components/dashboard/PostDraftLeagueDashboard';

function App() {
  return (
    // Wrap your Router with GoogleOAuthProvider and pass your client ID
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/user-dashboard" element={<UserDashboard />} /> */}
          {/* <Route path="/league-dashboard" element={<LeagueDashboard />} /> */}
          {/* <Route path="/draft-room" element={<DraftRoom />} /> */}
          {/* <Route path="/post-draft-user-dashboard" element={<PostDraftUserDashboard />} /> */}
          {/* <Route path="/post-draft-league-dashboard" element={<PostDraftLeagueDashboard />} /> */}
          {/* Define other routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;



