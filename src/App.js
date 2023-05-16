import logo from './logo.svg';
import './App.css';
import Master from './components/Master';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
       <Master />
    </div>
  );
}

export default App;
