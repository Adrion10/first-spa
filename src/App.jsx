import React from 'react';
import './App.css';
import  Header from './components/Header'
import CardContainer from './components/CardContainer';
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
 <Header/>
 <section className="card-container">
   <CardContainer/>
 </section>
 <Footer/>
    </main>
  );
}

export default App;

