import React, {Component} from 'react';
import Header from './../shared/header.js';
import HomePage from './home/homepage.js';
import Footer from './../shared/footer.js';
import './../../css/reset.css'

class App extends Component {
  render() {
      return (
          <div>
              <Header />
              <HomePage />
              <Footer />
          </div>
      )
  }
}

export default App;
