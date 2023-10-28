import React from 'react'
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import HeadlineCards from './Components/HeadlineCards.jsx';
import Food from './Components/Food.jsx';
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Footer />
    </div>
  )
}

export default App