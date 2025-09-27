import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Marcelo from './components/Marcelo';
import Krav from './components/Krav';
import MuayThai from './components/MuayThai';
import Planos from './components/Planos';
import Horarios from './components/Horarios';
import OndeEstamos from './components/OndeEstamos';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import './App.css'

export default function App() {

  return (
<>
    <Header />
    <Whatsapp />

    <main>  
      <Home />
      <Marcelo />
      <Krav />
      <MuayThai />
      <Planos />
      <Horarios />
      <OndeEstamos />
      <Footer />
    </main>
</>
  )
}
