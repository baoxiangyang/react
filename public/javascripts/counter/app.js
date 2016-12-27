import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './counter.jsx';
import * as CounterActions from './actions.js';
//将state的counter绑定到props上面
function mapStateToProps(state){
	return {
		counter: state.counter
	};
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter);