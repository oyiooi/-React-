import React,{Component} from 'react'
import {Map,GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
    render(){
        return <Map google={this.props.google} style={{overflow:'hidden'}}center={{lat: 40.854885,lng: -88.081807}} zoom={15}></Map>
    }
}


export default GoogleApiWrapper({
    apiKey:'AIzaSyAWsJ1d50guNfXbGnlxJUC2DP-xdrqLCw8'
})(MapContainer)

