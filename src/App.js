import logo from './logo.svg';
import './App.css';
import Users from './pages/Users';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Menu from './pages/Menu';


function App() {
  return (
    <div >
     <BrowserRouter>
       <Menu/>
     <Routes>
     <Route path="/" element={<About/>} />
     <Route path="/users"  element={<Users/>} />
     <Route path="/posts/:id" element={<Posts/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
