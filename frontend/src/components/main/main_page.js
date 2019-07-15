import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      stations : [],
      space_station: []
    }
  }

  componentWillMount(){
    this.props.fetchStations();
    this.props.fetchSpaceStation();
    
  };


  componentDidMount(){

    this.mymap = L.map('map', {
      center: [37.8444430, -122.2523410],
      zoom: 11,
      layers: [
        L.tileLayer('https://mt1.google.com/vt/lyrs=m@121,transit|vm:1&hl=en&opts=r&x={x}&y={y}&z={z}', {
        attribution: 'Map data &copy;2012 Google',
        maxZoom: 20
      }),
      ]
    });

    

    // this.interval = setInterval(() => this.setState({ time: Date.now() }), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    Object.values(this.props.stations).map((el) => {
      this.circleMarker = L.circleMarker([el.gtfs_latitude, el.gtfs_longitude], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.7,
        radius: 6,
        opacity: 0.2
    }).addTo(this.mymap);
    });

     //   var LeafIcon = L.Icon.extend({
  //     options: {
  //        iconSize:     [38, 95],
  //        shadowSize:   [50, 64],
  //        iconAnchor:   [22, 94],
  //        shadowAnchor: [4, 62],
  //        popupAnchor:  [-3, -76]
  //     }
  // });
    return (
      <div id="map">
        
       </div>
    );
  }
}

export default MainPage;