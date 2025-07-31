import './App.css';
import { Routes,Route } from "react-router-dom"
import Home from './Home'
import Quad from './Quad'
import Counter from './Counter';
import Beta from './Beta';
import Input from './Input';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="quad" element={<Quad/>} />
        <Route path="counter" element={<Counter/>} />
        <Route path="beta" element={<Beta/>} />
        <Route path="beta/input" element={<Input/>} />
      </Routes>
    </div>
  );
}

export default App;