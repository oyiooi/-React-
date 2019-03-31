import React,{Component} from 'react';

class Fliter extends Component {

  /*showinfowindow(place){
    let locationmarkers=this.props.markerlocation;
    let infowindow=new this.props.google.maps.InfoWindow();
    for(let i=0;i<locationmarkers.length;i++){
      if(locationmarkers[i].title===place.title){
        locationmarkers[i].populateInfoWindow (locationmarkers[i].marker, infowindow)
      }
    }
    
  }*/

  render() {
    let placese=this.props.placese;
        if(this.props.showing){
            return (
                <div id='cloumn1'>
                  <header className="App-header">Street Map</header>
                  <div className='fliter-container'>
                    <select className='fliter' id='fliter' value={this.props.currentCate} onChange={(event)=>{this.props.updateCurrentCata(event)}} >
                    {this.props.catagra.map((item)=><option id={item.index} value={item}>{item}</option>)}
                    </select>
                    <button className='fliter-button' onClick={this.props.updateplace}>Fliter</button>
                     <ul className='place-list'>
                        {placese.map((place)=><li id={place.title} value={place.title}>{place.title}</li>)}
                     </ul>
                  </div>
                </div>
                )
        }else{
            return <div className='hiden'></div>
        }
        
    }
}

export default Fliter