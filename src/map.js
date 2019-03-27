import React, {Component} from 'react'
import MapContainer from './GoogleApiWrapper'

class Map extends Component {
    render() {
        return (
          <div className='map-container'>
            <div className='map-hearder-container'>
              <div className='buttonicon' onClick={this.props.showing}></div>
              <h1>Map</h1>
            </div>
            <div id='map'><MapContainer></MapContainer></div>
          </div>
        )
    }
}

export default Map