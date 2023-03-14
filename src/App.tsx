import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';


class App extends Component<{}>{

  render(): React.ReactNode {
    return <div>
        <header><Navigation/></header>

        <main>
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/bemutatkozas' element={<About/>}/>
            <Route path='/kapcsolat' element={<Contact/>}/>
          </Routes>
        </main>
      <Footer/>
    </div>
  }
}
export default App;
