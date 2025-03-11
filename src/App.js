import React from 'react'; 
import './App.css'; 
import About from './components/About.js';
import Header from './components/Header.js';
import Skills from './components/Skills.js';
import Chat from './components/Chat.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import Contact from './components/Contact.js';

function App() 
{ 
  return ( 
   <div className="App"> 
     <Header/>
     <Hero/>
     <About/>
     <Skills/>
     <Contact/>
     <Chat/>
     <Footer/>
   </div> 
   ); 
} 

export default App;