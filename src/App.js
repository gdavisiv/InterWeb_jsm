//You can easily build out this file with es7snippets addon
//Type 'rafce' to build it quickly
import React from 'react'

//we can import all our created folders/files
import { Footer, Blog, Possibility, Features, What3DM, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className= 'gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <What3DM />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
  
}

export default App