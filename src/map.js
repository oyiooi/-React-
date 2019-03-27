import React, {Component} from 'react'

class Map extends Component {
    render() {
        return (
          <div className='map-container'>
            <div className='map-hearder-container'>
              <div className='buttonicon' onClick={this.props.showing}></div>
              <h1>Map</h1>
            </div>
            <div id='map'></div>
          </div>
        )
    }
}

export default Map