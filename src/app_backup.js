// import React, {Component} from 'react';
// import './App.css';
// import L from 'leaflet';
// import { Map, TileLayer, Marker, Popup , Polyline } from 'react-leaflet';
// import leafGreen from './assets/marker-icon-2x-green.png';
// import leafRed from './assets/red.png';



// class App extends Component {


//     get_center(data){
//         if(data=="" || data==undefined){
//             return [12.960676,77.641625];
//         }
//         var locations=data.split(";")
//         if(locations.length==0){
//             return [12.960676,77.641625];
//         }
//         else{
//             var latlong=locations[0].split(",")
//             if(latlong.length!=2){
//                 return [12.960676,77.641625];
//             }
//             return [latlong[0],latlong[[1]]]
//         }
//     }

//     get_other_locations(data){
//         if(data=="" || data==undefined){
//             return [];
//         }
//         var locations=data.split(";")
//         if(locations.length<2){
//             return [];
//         }
//         else{
//             var loc=[]

//             locations.slice(1).map(location => {
//                 var latlng=location.split(',')
//                 if(latlng.length==2){
//                     loc.push([latlng[0],latlng[1]])
//                 }
//             })
//             return loc
//         }
//     }

//     get_latlongs_from_polyline(polyline){
//         if(polyline==""){
//             return []
//         }
//         var latlongs=polyline.split(";")
//         var final=[]
//         latlongs.map(latlong => {
//             var temp=latlong.split(",")
//             final.push([temp[0],temp[1]])
//         })
//         return final
//     }

//     constructor() {
//         super()

//         var locations=document.getElementById("data").innerText

//         var polyline_str=document.getElementById("polyline").innerText

//         console.log("Encoded : ",polyline_str)
//         var polyline=this.get_latlongs_from_polyline(polyline_str)
//         console.log("Decoded : ",polyline)

//         var center=this.get_center(locations)
//         console.log("center : ",center)

//         var other_locations=this.get_other_locations(locations)
//         console.log("other_locations : ",other_locations)



//         this.state={
//             center_lat : center[0],
//             center_lon : center[1],
//             zoom: 25,
//             other_loc : other_locations,
//             polyline : polyline
//         };
//     }

//     grenIcon = L.icon({
//         iconUrl: leafGreen,
//         iconSize:     [35,50],
//         // popupAnchor:  [-3, -76]
//     });

//     redIcon = L.icon({
//         iconUrl: leafRed,
//         iconSize:     [48,50],
//         // popupAnchor:  [-3, -76]
//     });


//     render(){
//         const center = [this.state.center_lat, this.state.center_lon];

//         const  other_locations=this.state.other_loc

//         const  polyline = this.state.polyline

//         var pos=null;
//         var txt=null;

//         return (
//             <div>

//                 <div className="navbar navbar-default navbar-static-top navbar-shadow" role="navigation">
//                     <div className="container">
//                         <div className="navbar-header">
//                             <button type="button" className="navbar-toggle" data-toggle="collapse"
//                                     data-target=".navbar-collapse">
//                                 <span className="sr-only">Toggle navigation</span>
//                                 <span className="icon-bar"></span>
//                                 <span className="icon-bar"></span>
//                                 <span className="icon-bar"></span>
//                             </button>
//                             <a className="navbar-brand" href="/"><b>U</b>nite<b>A</b>nd<b>H</b>elp</a>
//                         </div>
//                         <div className="navbar-collapse collapse">
//                             <ul className="nav navbar-nav navbar-right">

//                                 <li><a href="/"><strong>Home</strong></a></li>
//                                 <li><a href="/profile"><strong>Profile</strong></a></li>

//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 <Map className="map" center={center} zoom={this.state.zoom}>
//                     <TileLayer
//                       attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     />

//                     <Marker position={center} icon={this.grenIcon}>
//                       <Popup>
//                         <span> Your Location</span>
//                       </Popup>
//                     </Marker>

//                     {this.state.other_loc.map((obj) =>{
//                         pos=[obj[0],obj[1]]
//                         txt=obj[0]+" "+obj[1]
//                         return <Marker position={pos} icon={this.redIcon}>
//                                     <Popup>
//                                         <span> {txt} </span>
//                                     </Popup>
//                                 </Marker>
//                     })}


//                     <Polyline  positions={polyline} ></Polyline>


//                 </Map>

//             </div>
//         );
//     }
// }

// export default App;