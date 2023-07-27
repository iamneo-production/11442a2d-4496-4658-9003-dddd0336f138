import React from 'react'
import { Route,Routes } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Home from "./pages/Home";
import RecruitVolunteers from "./pages/RecruitVolunteers";
// import FindOpportunities from "./pages/FindOpportunities";
import FindOpportunities from "./pages/FindOpportunities";
import Register from './components/Register';
import Idealist from './organization/Idealist';
import GBabt from './organization/GBabt';
import { Provider } from 'react-redux';
import store from './store';
import VolReg from './components/VolReg';
// import Events from './components/Events';
function App() {
  return (
    <>
    <Provider  store={store}> 
    <div className='app-con'>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/Home' element={<Home/>}/>
      <Route exact path='/FindOpportunities' element={<FindOpportunities/>}/>
      <Route exact path='/RecruitVolunteers' element={<RecruitVolunteers/>}/>
      <Route exact path='/Navbar' element={<Navbar/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Idealist' element={<Idealist/>}/>
      <Route exact path='/GBabt' element={<GBabt/>}/>
      <Route exact path='/VolReg' element={<VolReg/>}/>
      </Routes>
      </div>
      </Provider>
    </>
    
  );
};

export default App;
