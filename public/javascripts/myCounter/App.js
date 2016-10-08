
import {connect} from 'react-redux';
import counter from './counter.jsx';
import * as action from './action.js';
import {bindActionCreators} from 'redux';
function mapStateToProps(state){
	return {number: state.counterReducer.number}
};
function mapDispathToProps(dispatch){
	return {
		action: bindActionCreators(action, dispatch),
		dispatch: dispatch
	}
}
export default connect(
	mapStateToProps,
	mapDispathToProps
)(counter);