import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      stations : []
    }
  }

  componentWillMount(){
    this.props.fetchStations();
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
  }

  render() {

    Object.values(this.props.stations).map((el) => {
      this.circleMarker = L.circleMarker([el.gtfs_latitude, el.gtfs_longitude], {
        color: 'blue',
        // fillColor: 'blue',
        // fillOpacity: 0.5,
        radius: 6
    }).addTo(this.mymap);

  //   var LeafIcon = L.Icon.extend({
  //     options: {
  //        iconSize:     [38, 95],
  //        shadowSize:   [50, 64],
  //        iconAnchor:   [22, 94],
  //        shadowAnchor: [4, 62],
  //        popupAnchor:  [-3, -76]
  //     }
  // });

  
    });
    return (
      <div id="map">
        
       </div>
    );
  }
}

export default MainPage;