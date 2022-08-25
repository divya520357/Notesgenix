import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './pages/login';
import Home from './pages/home';
import Notes from './pages/notes';
import Books from './pages/books';
import Account from './pages/account';
import Friends from './pages/account/friends';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/books' element={<Books />} />
          <Route path='/account' element={<Account />} />
          <Route path='/account/friends' element={<Friends />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
