import React, { Component } from 'react';
import Map from './map';
import Fliter from './fliter';



class App extends Component {
  
  state={
    showing:true
  }

  showingOrHiding=()=>{
    this.setState((state)=>{
      return {showing:!state.showing}
    })
  }

  render() {
    return (
      <div className="App">
        <Fliter showing={this.state.showing}/>
        <Map showing={this.showingOrHiding}/>  
      </div>
    );
  }
}

export default App;
