import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './pages/books';
import Categories from './pages/categories';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Books} />
        <Route exact path="/categories" Component={Categories} />
      </Routes>
    </Router>
  );
}

export default App;
