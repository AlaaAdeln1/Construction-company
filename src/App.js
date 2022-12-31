import React, { Component } from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './normalize.css'
import './App.css';
import Home from  './components/childComponents/Home'
import About from './components/childComponents/About';
import Articels from  './components/childComponents/Articels'
import Projects from  './components/childComponents/Projects'
import Clients from  './components/childComponents/Clients'
import Element from  './components/childComponents/Element'
import Contact from  './components/childComponents/Contact'
import Header from './components/mainComponents/Header';
import Footer from './components/mainComponents/Footer';
class App extends Component {
  render() {
    return (
<Router>
        <div className='app'>
          <div className='container'>
            <Header />
            {/* <Home/> 
            <About/>
            <Articels/>
            <Projects/>
            <Clients/>
            <Element/>
            <Contact/> */}
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/About" element={ <About/> } />
            <Route path="/Articels" element={ <Articels/> } />
            <Route path="/Projects" element={ <Projects/> } />
            <Route path="/clients" element={ <Clients/> } />
            <Route path="/Element" element={ <Element/> } />
            <Route path="/Contact" element={ <Contact/> } />
            <Route/>
          </Routes>
          <Footer/>
          </div>
        </div>
        </Router>
    )
  }
}

export default App;
