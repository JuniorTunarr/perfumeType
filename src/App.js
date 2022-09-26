import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/question' element={<Question />}></Route>
      <Route path='/result' element={<Result />}></Route>
    </Routes>
  );
}

export default App;
