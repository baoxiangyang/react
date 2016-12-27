export default function(state={number: 0}, action){
	const count = state.number;
	switch(action.type){
		case 'add':
			return {number: count + action.num};
		case 'fell':
			return {number: count - action.num};
		case 'test':
			return {number: action.num};
		default:
			return state;
	}
}