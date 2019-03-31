import {Component} from 'react'


var markers=[],map;

class MapContainer extends Component {

    initMap=()=> {
        

        map= new this.props.google.maps.Map(document.getElementById('map'),{
            center:{lat:40.7413549,lng:-73.99802439999996},
            zoom:13
          });
   
          var locations = this.props.placese;
   
          var bounds=new this.props.google.maps.LatLngBounds();
          
          for(let i=0;i<locations.length;i++){
            var marker=new this.props.google.maps.Marker({
              position:locations[i].location,
              map:map,
              title:locations[i].title,
              animation:this.props.google.maps.Animation.DROP,
              id:i
            })
   
            bounds.extend(marker.position);

            var infowindow=new this.props.google.maps.InfoWindow();

            let self=this;
   
            marker.addListener('click', function() {
                self.populateInfoWindow(this, infowindow);
              });
   
             markers.push(marker);
        }

    }

   populateInfoWindow (marker, infowindow){
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker !== marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
        }
      }

    componentDidMount(){
        this.initMap();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.placese !== this.props.placese) {
            this.initMap();
        }
    }

    render(){
        return null
    }
}

export default MapContainer

