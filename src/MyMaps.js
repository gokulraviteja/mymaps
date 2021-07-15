import './styles/Maps.css';
import   MapContainer from "./MapContainer";
import React, {Component} from 'react';

class MyMaps extends Component {

    constructor(props) {
        super(props);
        this.state = { origin: '12.925,77.608', destination:'12.949,77.605', submitted : 0 , msg:"" };
    
        this.handleOrigin = this.handleOrigin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDest = this.handleDest.bind(this);
      }
    

    handleOrigin(event) {
        console.log("Handle origin")              
        this.setState({origin: event.target.value});
      }
    handleDest(event) {
        console.log("Handle dest")              
        this.setState({destination: event.target.value});
      }
    
      handleSubmit(event) {
          if(this.state.origin==="12.925,77.608" && this.state.destination==="12.949,77.605"){
            console.log("Setting here - matching")              
            setTimeout(3000)
            this.setState({submitted:1});
          }
          else{
              console.log("Setting here not matching")              
              setTimeout(3000)
          }
        
      }
    
    render(){
        console.log("Rendering" , this.state.submitted , this.state.origin , this.state.destination , this.state.msg)
        if(this.state.submitted===1){
            return(
                <div>
                    <MapContainer  origin={this.state.origin} destination={this.state.destination} />
                </div>
            )
        }
        else{
 
            return (
                <div className="maps-parent">
                    <div className="maps-nav">
                        {/* <span><img src={logo} className="ReactLogo-logo1"  alt="logo" /></span> */}
    
                        <h1 className="maps-head" > MyMaps🗺️  </h1> 
    
                        {/* <span><img src={logo} className="ReactLogo-logo2" alt="logo" /></span>     */}
                    </div>
    
                    <div>  <h2 className="maps-msg"> Sorry! I have exceeded my quota to process your requests , </h2> </div>
                    <div>  <h2 className="maps-good-msg"> Still you can use the below entered points to check the output.   </h2> </div>
                    
    
                    <div className="maps-body">
                      
                        <form onSubmit={this.handleSubmit} >
    
                            <fieldset className="wide">
                                <p className="input-fields">Origin:<br/><input className="input-text" onChange={this.handleOrigin} name="origin" value={this.state.origin} disabled type="text"/></p>
                                <p className="input-fields">Destination:<br/><input className="input-text" name="dest" onChange={this.handleDest} value={this.state.destination} disabled type="text"/></p>
                            </fieldset>
                            <p>
                                <input className="maps-submit-button" type="submit" value="Get Directions"/>
                            </p>
    
                        </form>
    
                    </div>
    
                </div>
                );
        }

  
    }
}



export default MyMaps;
