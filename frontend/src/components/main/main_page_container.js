import { connect } from 'react-redux';
import { fetchStations, fetchOurStations } from '../../actions/station_actions'
import { fetchSpaceStation } from '../../actions/space_station_actions';
import MainPage from './main_page';

const mapStateToProps = (state) => {
  return {
    stations: Object.values(state.stations),
    space_station: state.space_station,
    nextStation: state.nextStation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStations: () => dispatch(fetchStations()),
    fetchOurStations: () => dispatch(fetchOurStations()),
    fetchSpaceStation: () => dispatch(fetchSpaceStation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);