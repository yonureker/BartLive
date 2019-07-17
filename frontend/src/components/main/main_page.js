import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stations: [],
      space_station: {longitude: "-43.7833", latitude: "-5.3823"},
      map : this.mymap,
      marker: this.circleMarker
    };
  }

  componentWillMount() {
    this.props.fetchSpaceStation().then((response) => this.setState({space_station: response.space_station}));
    this.props.fetchStations().then((response) => this.setState({stations: response.stations}));
    this.props.fetchRouteInfo().then(response => this.setState({route_info: response.route_info}));
    this.props.fetchInitialStationDataSouth();
  }

  componentDidMount() {

    
    this.props.fetchRouteInfo().then(response => this.setState({ route_info: response}));
    // this.mymap = L.map("map", {
    //   center: [37.844443, -122.252341],
    //   zoom: 11,
    //   layers: [
    //     L.tileLayer(
    //       "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    //       {
    //         attribution: "Map data &copy;2012 Google",
    //         maxZoom: 20
    //       }
    //     )
    //   ]
    // });

    this.mymap = L.map("map", {
      center: [37.844443, -122.252341],
      zoom: 3,
      layers: [
        L.tileLayer(
          "https://mt1.google.com/vt/lyrs=m@121,transit|vm:1&hl=en&opts=r&x={x}&y={y}&z={z}",
          {
            attribution: "Map data &copy;2012 Google",
            maxZoom: 20
          }
        )
      ]
    });

    // this.interval = setInterval(() => this.props.fetchSpaceStation(), 500)

    // this.setState({ time: Date.now() }), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }



  render() {
    this.props.stations.map(el => {
      return (this.circleMarker = L.circleMarker(
        [el.gtfs_latitude, el.gtfs_longitude],
        {
          color: "blue",
          fillColor: "blue",
          fillOpacity: 0.7,
          radius: 6,
          opacity: 0.2
        }
      )).addTo(this.mymap);
    });


    // this.state.map.removeLayer(this.state.marker);

      this.props.stations.map(el => {
        return (this.circleMarker = L.circleMarker(
          [this.props.space_station.latitude, this.props.space_station.longitude],
          {
            color: "blue",
            fillColor: "blue",
            fillOpacity: 0.7,
            radius: 6,
            opacity: 0.2
          }
        )).addTo(this.mymap);
      });

    const stations = (this.props.route_info.millbreaAntioch) ?
     <div>{this.props.route_info["millbreaAntioch"].northbound.stations.EMBR.waypoints}</div> :
    <div>Loading . . . </div>

      return (<div>
              <div id="map"/>
              <div>{stations}</div>
              {/* <div>{this.props.route_info["millbreaAntioch"]}</div> */}
              </div>);

  }
}

export default MainPage;
