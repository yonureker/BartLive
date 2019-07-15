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
    console.log(Object.values(this.props.stations))

    Object.values(this.props.stations).map((el) => {
      this.circleMarker = L.circleMarker([el.gtfs_latitude, el.gtfs_longitude], {
        color: 'blue',
        // fillColor: '#f03',
        // fillOpacity: 0.5,
        radius: 6
    }).addTo(this.mymap);
    });
    return (
      <div id="map">
        
       </div>
    );
  }
}

export default MainPage;