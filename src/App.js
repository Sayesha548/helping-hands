import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Footer/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Signup/> */}

<BrowserRouter>

  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/signup' element={<Signup/>}/>
    <Route exact path='/login' element={<Login/>}/>
  </Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
