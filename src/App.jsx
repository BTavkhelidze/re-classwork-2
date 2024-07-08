import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './app.css';

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
