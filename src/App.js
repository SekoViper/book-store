import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Nav from './components/Nav';
import store from './redux/configureStore';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Routes>
        <Route element={<Books />} path="/" />
        <Route element={<Categories />} path="/categories" />
      </Routes>
    </Provider>
  );
}

export default App;
