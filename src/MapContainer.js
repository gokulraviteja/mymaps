
import './styles/Maps.css';
import { Map, TileLayer , Polyline , Marker} from 'react-leaflet';
import React, {Component} from 'react';
import L from 'leaflet';
import leafRed from './assets/red.png';


var polyUtil = require('polyline-encoded');



class MapContainer extends Component {



    redIcon = L.icon({
        iconUrl: leafRed,
        iconSize:     [48,50],
    });


    get_latlongs_from_polyline(polyline){
        
        if(polyline===""){
            return []
        }
        var latlongs=polyline.split(";")
        var final=[]
        latlongs.map(latlong => {
            var temp=latlong.split(",");
            final.push([temp[0],temp[1]]);
            return temp;
        })
        return final
    }



    

    render(){

        
        const polyline = "_o{mAm|txM}@a@wAUuASyAOwAMwAMwAMwAOwAUwASwASwAMwAOuAYwAOyAGyA?oAf@wAPwAHyABiA?s@hAq@lAo@lAs@jAc@rA_@tAm@t@kAc@wAQwAUuAWwASwAQsAAyAGwAAyANuARuAZuAXuAZwATwADyA?]_Aw@QuAVwAVsAd@wAJwAVuAT"
        const latlngs = polyUtil.decode(polyline);
        const center  = latlngs[0]
        var pos = ""
        
        

        console.log("Map rendered" , latlngs)
        const zoom=25;
        console.log("Any thing here props - " , this.props)
            return(
                <div>

                        <div>
                            <button  className="maps-back-main-button"> <a href="/mymaps" className="maps-back-main"> Click on me i will take you back to Main Page </a> </button>
                        </div>

                            <Map className="map" center={center} zoom={zoom} >
                            
                                <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                    {latlngs.map(obj =>{
                        pos=[obj[0],obj[1]]
                        return <Marker position={pos} icon={this.redIcon}> </Marker>
                    })}


                                <Polyline  positions={latlngs} ></Polyline>

                            </Map>

                </div>
            )
    }
}



export default MapContainer;
