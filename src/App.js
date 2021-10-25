import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './components/Routes';
import { useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = (useState = false);
  return <div className={darkTheme ? 'dark' : ''}></div>;
}

export default App;
