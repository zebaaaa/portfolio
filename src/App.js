import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App(){
  return(
    <div className="App" >
      <Header />

     <section id='Home'>
      <Home />
      </section> 
      
       <section id='Skills'>
      <Skills />
      </section> 

      <section id='Projects'>
      <Projects />
      </section> 

       <section id='Contact'>
      <Contact />
      </section> 


                                                                                              
    </div>
  )

}

export default App;