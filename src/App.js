import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './pages/login';
import Home from './pages/home';
// import Notes from './pages/notes';
// import Books from './pages/books';
// import Account from './pages/account';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
          {/* <Route exact path='/notes' element={<Notes />} />
          <Route exact path='/books' element={<Books />} />
          <Route exact path='/account' element={<Account />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
