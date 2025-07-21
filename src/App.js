import './App.css';
import { Routes,Route } from "react-router-dom"
import Home from './Home'
import Quad from './Quad'
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="quad" element={<Quad/>} />
        <Route path="counter" element={<Counter/>} />
      </Routes>
    </div>
  );
}

export default App;