import React, { Component, PropTypes } from 'react';
class Counter extends Component {
	render() {
		const {increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props;
		return (
			<p>
				Cliced: {counter} times
				{' '}
				<button onClick={increment}> + </button>
				{' '}
				<button onClick={decrement}> - </button>
				{' '}
				<button onClick={incrementIfOdd}> Increment if odd</button>
				{' '}
				<button onClick={() => {incrementAsync()}}> Increment async </button>
			</p>
		)
	}
}
Counter.propTypes = {
	//必须恩函数，并且必须存在
	increment: PropTypes.func.isRequired,
	incrementIfOdd: PropTypes.func.isRequired,
	incrementAsync: PropTypes.func.isRequired,
  	decrement: PropTypes.func.isRequired,
  	//必须是数字，必须存在
  	counter: PropTypes.number.isRequired
}
export default Counter;