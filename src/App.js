import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState, useEffect } from 'react';


import Home from './pages/home';
import Login from './pages/login';

function App() {
  // const [blog, setBlog] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
