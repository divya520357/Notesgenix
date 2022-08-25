import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './pages/login';
import Home from './pages/home';
<<<<<<< HEAD
import Notes from './pages/notes';
// import Books from './pages/books';
// import Account from './pages/account';
=======
// import Notes from './pages/notes';
import Books from './pages/books';
import Account from './pages/account';
>>>>>>> 9ba710ff35594b5237c3c8c55f4fa35570ebdfcb

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
