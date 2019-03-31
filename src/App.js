import React, { Component } from 'react';
import Map from './map';
import Fliter from './fliter';
import {GoogleApiWrapper} from 'google-maps-react';



export class App extends Component {
  
  state={
    showing:true,
    place:[
      {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393},type:'hotel'},
      {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465},type:'stop'},
      {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759},type:'bar'},
      {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377},type:'resturant'},
      {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934},type:'memium'},
      {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237},type:'bar'}
    ],
    currentCate:'All',
    catagra:['All','bar','hotel','resturant','stop','memium'],
    filtedplace:[
      {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393},type:'hotel'},
      {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465},type:'stop'},
      {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759},type:'bar'},
      {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377},type:'resturant'},
      {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934},type:'memium'},
      {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237},type:'bar'}
    ],
  }

  updateCurrCate=(event)=>{
    let selectedOption=event.target.options[event.target.selectedIndex];
    this.setState({currentCate:selectedOption.value})
  }

  updateplace=()=>{
    let placese;
    (this.state.currentCate==='All')?(placese=this.state.place):(placese=this.state.place.filter((place)=>place.type===this.state.currentCate));
    this.setState({filtedplace:placese})
  }


  showingOrHiding=()=>{
    this.setState((state)=>{
      return {showing:!state.showing}
    })
  }

  render() {
    return (
      <div className="App">
        <Fliter showing={this.state.showing} placese={this.state.filtedplace} updateCurrentCata={this.updateCurrCate} currentCate={this.state.currentCate} updateplace={this.updateplace} catagra={this.state.catagra}/>
        <Map showing={this.showingOrHiding} google={this.props.google} placese={this.state.filtedplace} addMarkers={this.addMarkers}/>  
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyAWsJ1d50guNfXbGnlxJUC2DP-xdrqLCw8'
})(App)
