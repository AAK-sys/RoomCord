import './App.css';  
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' 
import { initializeApp } from "firebase/app";
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import GuestLogin from './components/GuestLogin';
import ChatRoom from './components/ChatRoom';

function App() {
  const firebaseConfig = {

    apiKey: process.env.REACT_APP_MY_API_KEY,
  
    authDomain: "roomcord-d8960.firebaseapp.com",
  
    projectId: "roomcord-d8960",
  
    storageBucket: "roomcord-d8960.appspot.com",
  
    messagingSenderId: "878916389730",
  
    appId: "1:878916389730:web:fd594c07229c054802ba3b",
  
    measurementId: "G-GD7C2CNDH4"
  
  };
  
  return (
    <Router> 
      <div className="App">
       
        <Nav /> 
        <Routes>
        <Route path='/' element={<Login />} />  
        <Route path='/chat' element={<ChatRoom />} />  
        <Route path='/guest-login' element={<GuestLogin />} />
        <Route path='/home' element={<Home />} /> 
        </Routes>    
      </div>  
    </Router> 
  );
}

export default App;
