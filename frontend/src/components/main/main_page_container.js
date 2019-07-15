import { connect } from 'react-redux';
import { fetchStations } from '../../actions/station_actions'
import MainPage from './main_page';

const mapStateToProps = (state) => {
  return {
    stations: Object.values(state.stations)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStations: () => dispatch(fetchStations())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);