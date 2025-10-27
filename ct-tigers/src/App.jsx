import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Marcelo from './components/Marcelo';
import Krav from './components/Krav';
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
      <Hero />
      <Marcelo />
      <Krav />
      <Planos />
      <Horarios />
      <OndeEstamos />
      <Footer />
    </main>
</>
  )
}
