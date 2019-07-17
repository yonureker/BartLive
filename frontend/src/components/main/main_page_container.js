import { connect } from 'react-redux';
import { fetchStations, fetchRouteInfo,fetchInitialStationDataSouth, fetchInitialStationDataNorth } from '../../actions/station_actions';
import { fetchSpaceStation } from '../../actions/space_station_actions';
import MainPage from './main_page';

const mapStateToProps = (state) => {
  return {
    stations: Object.values(state.stations),
    space_station: state.space_station,
    nextStation: state.nextStation,
    route_info: state.route_info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStations: () => dispatch(fetchStations()),
    fetchRouteInfo: () => dispatch(fetchRouteInfo()),
    fetchSpaceStation: () => dispatch(fetchSpaceStation()),
    fetchInitialStationDataSouth: () => dispatch(fetchInitialStationDataSouth()),
    fetchInitialStationDataNorth: () => dispatch(fetchInitialStationDataNorth())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);