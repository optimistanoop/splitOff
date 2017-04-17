import React, {Component} from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

class HomePage extends Component {
  render() {
      return (
          <form>
              <label>
                  Name:
                  <input type="text" name="name" />
              </label>

              <label>
                  Email:
                  <input type="text" name="email" />
              </label>

              <label>
                  Number:
                  <input type="text" name="number" />
              </label>

              <label>
                  Address:
                  <input type="text" name="address" />
              </label>

              <input type="submit" value="Submit" />
          </form>
      )
  }
}

export default HomePage;
