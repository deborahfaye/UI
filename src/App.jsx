import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Header2 } from './components/header.jsx';
import {Body, Body2} from './components/body.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  render() {
    return (
<div>
      
       <Header/>
       
       <Header2/>

       <Body/>

       <Body2/>

       <Footer/>
    
</div>
    );
  }
}

export default App;
