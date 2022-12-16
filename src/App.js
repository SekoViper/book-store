import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Nav from './components/Nav';
import './styles.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route element={<Books />} path="/" />
        <Route element={<Categories />} path="/categories" />
      </Routes>
    </>
  );
}

export default App;
