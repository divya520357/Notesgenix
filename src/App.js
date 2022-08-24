import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState, useEffect } from 'react';


import Home from './pages/home';
import PersonalNotes from './pages/home/NotesList/personal';
import SharedList from './pages/home/NotesList/shared';
import Login from './pages/login';

function App() {
  // const [blog, setBlog] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/notes' element={<PersonalNotes />} />
          <Route exact path='/notes/personal' element={<PersonalNotes />} />
          <Route exact path='/notes/shared' element={<SharedList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
