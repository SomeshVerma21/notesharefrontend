import './App.css';
import Home from './component/homeScreen/Home'
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/> } /> 
            <Route path="/explore" element={<Home/> } /> 
            <Route path="/about" element={<Home/> } /> 
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
