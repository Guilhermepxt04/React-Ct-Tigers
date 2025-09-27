import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Marcelo from './components/Marcelo';
import Krav from './components/Krav';
import MuayThai from './components/MuayThai';
import Planos from './components/Planos';
import Horarios from './components/Horarios';
import OndeEstamos from './components/OndeEstamos';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <main>
      
      <Header />
      <Home />
      <Marcelo />
      <Krav />
      <MuayThai />
      <Planos />
      <Horarios />
      <OndeEstamos />
      <Footer />

    </main>
  )
}

export default App
