import React from "react";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer , CircleMarker, Marker } from 'react-leaflet';
import stationDetails from "./stationDetails.js";
// not needed for now
// import stationLogo from "../../assets/images/station.png";
// import redTrain from "../../assets/images/train-red.png";
// import yellowTrain from "../../assets/images/train-yellow.png";
// import blueTrain from "../../assets/images/train-blue.png";
// import greenTrain from "../../assets/images/train-green.png";
// import orangeTrain from "../../assets/images/train-orange.png";
// import purpleTrain from "../../assets/images/train-purple.png";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bartStations: [],
      stationList: []
    };
  }

  componentWillMount() {
    // this.props.fetchSpaceStation().then((response) => this.setState({space_station: response.space_station}));
    this.props.fetchStations().then((response) => this.setState({stations: response.stations}));
    this.interval = setInterval(() => this.fetchTrain(), 5000);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchTrain() {
    fetch(
      "http://api.bart.gov/api/etd.aspx?cmd=etd&orig=ALL&key=MW9S-E7SL-26DU-VV8V&json=y"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          stationList: responseJson.root.station
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderTrain() {
    const stations = this.state.stationList;

    return stations.map(station => {
      var stationAbr = station.abbr;

      return station.etd.map(route =>
        route.estimate.map((train, index) => {
          let direction = train.direction;
          let minutes = train.minutes;

          if (
            stationDetails[stationAbr]["waypoints"][direction][minutes] !==
            undefined
          ) {
            //sets train color 
            const markerColor = function() {
              switch (train.color) {
                case "GREEN":
                  return '#339933';
                case "YELLOW":
                  return "#ffff33";
                case "BLUE":
                  return '#0099cc';
                case "RED":
                  return "#ff0000";
                case "ORANGE":
                  return "#ff9933";
                case "PURPLE":
                  return "#c463c5";
                case "WHITE":
                  return "#ffff33";
                default:
                  break;
              }
            };

            //moving South direction trains a bit so they don't overlap with North trains.
            // const preventFlicker = function(){
            //   switch (direction) {
            //     case "North":
            //       return stationDetails[stationAbr]["waypoints"][direction][minutes];
            //     case "South":
            //       return ({
            //         latitude: parseFloat(stationDetails[stationAbr]["waypoints"][direction][minutes]['latitude']) + 0.000085,
            //         longitude: parseFloat(stationDetails[stationAbr]["waypoints"][direction][minutes]['longitude']) + 0.000085
            //       })
            //     default:
            //       break;
            //   }
            // }

            return (
              <CircleMarker
                key={index}
                center={[stationDetails[stationAbr]["waypoints"][direction][minutes]['latitude'],stationDetails[stationAbr]["waypoints"][direction][minutes]['longitude']] }
                color={'#000000'}
                fillColor={markerColor()}
                fill={true}
                radius={8}
                fillOpacity={1}

                // title={`${route.destination} Train`}
                // description={`Next Station: ${station.name}`}
                // zIndex={index}
              />
            );
          }
        })
      );
    });
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
        
        {/* {this.props.stations.map((station, idx) => 
          <CircleMarker key={`marker-${idx}`} center={[station.gtfs_latitude, station.gtfs_longitude]} radius={7}>
          </CircleMarker>
        )} */}

        {this.renderTrain()}

          {/* <CircleMarker key={10} center={[this.props.space_station.latitude, this.props.space_station.longitude]} radius={12}>
          </CircleMarker> */}


      </Map>
    )
    }
  }
}

export default MainPage;
