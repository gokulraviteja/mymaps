
import './styles/Maps.css';
import { Map, TileLayer} from 'react-leaflet';
import React, {Component} from 'react';

class MapContainer extends Component {


    
    render(){

        const center  = [12.960676,77.641625]
        console.log("Map rendered")
        const zoom=25;
        console.log("Any thing here props - " , this.props)
            return(
                <div>


                            <Map className="map" center={center} zoom={zoom} >
                            
                                <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                            </Map>

                </div>
            )
    }
}



export default MapContainer;
