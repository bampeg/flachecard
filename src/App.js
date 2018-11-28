import React, { Component } from 'react';
import Cards from './components/Cards/Cards'
import Menu from './components/Menu/Menu'

class App extends Component {

  render() {
    return (
      <div>
        {/* <MotivationalQuotes /> */}
        <Menu color="orange"/>
        <Cards />
      </div>
    );
  }
}

export default App;
