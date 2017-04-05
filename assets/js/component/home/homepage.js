import React, {Component} from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

// import HomePage from './assets/js/component/home/homepage.js';

class HomePage extends Component {
  render() {
      return (
          <form>
              <label>
                  Name:
                  <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
          </form>
      )
  }
}

export default HomePage;
