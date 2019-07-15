import { connect } from 'react-redux';
import { fetchStations } from '../../actions/station_actions'
import { fetchSpaceStation } from '../../actions/space_station_actions';
import MainPage from './main_page';

const mapStateToProps = (state) => {
  return {
    stations: Object.values(state.stations),
    space_station: state.space_station
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStations: () => dispatch(fetchStations()),
    fetchSpaceStation: () => dispatch(fetchSpaceStation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);