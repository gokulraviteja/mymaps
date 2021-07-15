

import './styles/Maps.css';
import   MapContainer from "./MapContainer";
import React, {Component} from 'react';

class MyMaps extends Component {



    constructor(props) {
        super(props);
        this.state = { origin: '1,1', destination:'2,2', submitted : 0 };
    
        this.handleOrigin = this.handleOrigin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDest = this.handleDest.bind(this);
      }
    

    handleOrigin(event) {
        this.setState({origin: event.target.value});
      }
    handleDest(event) {
        this.setState({destination: event.target.value});
      }
    
      handleSubmit(event) {
        this.setState({submitted:1});
      }
    
    render(){
        if(this.state.submitted===0){
            return (
                <div className="maps-parent">
                    <div className="maps-nav">
                        {/* <span><img src={logo} className="ReactLogo-logo1"  alt="logo" /></span> */}
    
                        <h1 className="maps-head" > MyMaps🗺️  </h1> 
    
                        {/* <span><img src={logo} className="ReactLogo-logo2" alt="logo" /></span>     */}
                    </div>
    
    
                    <div className="maps-body">
                      
                        <form onSubmit={this.handleSubmit} >
    
                            <fieldset className="wide">
                                <p className="input-fields">Origin:<br/><input className="input-text" onChange={this.handleOrigin} name="origin" value={this.state.origin} type="text"/></p>
                                <p className="input-fields">Destination:<br/><input className="input-text" name="dest" onChange={this.handleDest} value={this.state.destination} type="text"/></p>
                            </fieldset>
                            <p>
                                <input className="maps-submit-button" type="submit" value="Directions"/>
                            </p>
    
                        </form>
    
                    </div>
    
                </div>
                );
        }
        else{
            return(
                <div>
                    <MapContainer  origin={this.state.origin} destination={this.state.destination} />
                </div>
            )
        }

  
    }
}



export default MyMaps;
