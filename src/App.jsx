import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Courses from './Pages/Courses/Course';
import Teachers from './Pages/Teachers';
import Students from './Pages/Students';
import Dashboard from './Pages/Dashboard';
import UserProfile from './Pages/UserProfile'

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Pages Content */}
          <div className="flex-1 p-8 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/students" element={<Students />} />
              <Route path="/profile" element={<UserProfile/> } />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
