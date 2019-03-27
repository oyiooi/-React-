import React,{Component} from 'react';

class Fliter extends Component {
    render() {
        if(this.props.showing){
            return (
                <div id='cloumn1'>
                  <header className="App-header">Street Map</header>
                  <div className='fliter-container'>
                    <select className='fliter' id='fliter'>
                      <option value='1'>1</option>
                      <option value='1'>1</option>
                      <option value='1'>1</option>
                      <option value='1'>1</option>
                      <option value='1'>1</option>
                    </select>
                    <button className='fliter-button'>Fliter</button>
                     <ul className='place-list'>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
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