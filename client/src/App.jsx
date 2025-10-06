import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';

// Student pages
import Home from './pages/student/Home';
import CourseDetail from './pages/student/CourseDetail';
import Player from './pages/student/Player';
import CourseList from './pages/student/CourseList';
import MyEnrollement from './pages/student/MyEnrollement';
import Navbar from './components/student/Navbar';

// Educator layout and subpages
import Educator from './pages/educator/Educator'; // Acts as layout with <Outlet />
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';

import 'quill/dist/quill.snow.css';
import {ToastContainer} from 'react-toastify'

const App = () => {
  // Hide Navbar if current route matches /educator/*
  const isEducatorRoute = useMatch('/educator/*');

  return (
    <div className='text-default min-h-screen bg-white'>
      <ToastContainer/>
      {/* Show Navbar only when not on the educator route */}
      {!isEducatorRoute && <Navbar />}

      <Routes>
        {/* Student Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetail />} />
        <Route path='/my-enrollement' element={<MyEnrollement />} />
        <Route path='/player/:courseId' element={<Player />} />

        {/* Educator Routes (nested) */}
        <Route path='/educator' element={<Educator />}>
          {/* Default route for Educator */}
          <Route index element={<Dashboard />} /> {/* Default route to Dashboard */}
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
