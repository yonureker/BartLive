import React from "react";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer , CircleMarker } from 'react-leaflet';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // stations: [{longitude: "-43.7833", latitude: "-5.3823"}],
      // space_station: {longitude: "-43.7833", latitude: "-5.3823"},
      // map : this.mymap,
      // marker: this.circleMarker
    };
  }

  componentWillMount() {
    this.props.fetchSpaceStation().then((response) => this.setState({space_station: response.space_station}));
    this.props.fetchStations().then((response) => this.setState({stations: response.stations}));
    this.props.fetchRouteInfo().then(response => this.setState({route_info: response.route_info}));
    this.props.fetchInitialStationDataSouth();
    this.props.fetchInitialStationDataNorth();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.props.fetchSpaceStation(), 10000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }



  render (){
    const position = [37.844443, -122.252341];
    // const customMarker = L.icon({ iconUrl: require('../../assets/images/iss.png')})


    if (this.props.stations.length === 0) {
      return (
        <div>Loading...</div>
      )
    } else {
    return (
      <Map center={position} zoom={11}>
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=m@121,transit|vm:1&hl=en&opts=r&x={x}&y={y}&z={z}"
        />
        {this.props.stations.map((station, idx) => 
          <CircleMarker key={`marker-${idx}`} center={[station.gtfs_latitude, station.gtfs_longitude]} radius={7}>
          </CircleMarker>
        )}

          <CircleMarker key={10} center={[this.props.space_station.latitude, this.props.space_station.longitude]} radius={12}>
          </CircleMarker>
      </Map>
    )
    }
  }
}

export default MainPage;
