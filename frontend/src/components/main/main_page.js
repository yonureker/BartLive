import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import './main_page.css';

class MainPage extends React.Component {

  componentDidMount(){
    // const mymap = L.map('mapid').setView([37.8444430, -122.2523410], 18);

    // L.tileLayer('https://mt1.google.com/vt/lyrs=m@121,transit|vm:1&hl=en&opts=r&x={x}&y={y}&z={z}', {
    //     attribution: 'Map data &copy;2012 Google',
    //     maxZoom: 20
    //   }).addTo(mymap);

    this.mymap = L.map('map', {
      center: [37.8444430, -122.2523410],
      zoom: 15,
      layers: [
        L.tileLayer('https://mt1.google.com/vt/lyrs=m@121,transit|vm:1&hl=en&opts=r&x={x}&y={y}&z={z}', {
        attribution: 'Map data &copy;2012 Google',
        maxZoom: 20
      }),
      ]
    });

    this.circleMarker = L.circleMarker([37.8445290, -122.2523130], {
      color: 'blue',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 10
  }).addTo(this.mymap);
  }

  render() {
    
  //   <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
  //  integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
  //  crossorigin=""></script>

    return (

      <div id="map">
       </div>
  
    );
  }
}

export default MainPage;